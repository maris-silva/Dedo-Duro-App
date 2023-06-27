import {
    Injectable
} from '@angular/core';
import {
    Observable
} from "rxjs";
import _ from "lodash";
import {
    ApperyioHelperService
} from '../apperyio/apperyio_helper';
import {
    EntityApiService
} from '../apperyio/apperyio';
import {
    File,
    FileEntry
} from '@ionic-native/file/ngx';

const FORMATS = {
    STRING: 1,
    ARRAY_BUFFER: 2,
    BLOB: 3,
    FORM_DATA: 4,
    DATA_URL: 5
}
const DEFAULT_FORMAT = FORMATS.FORM_DATA;
const DEFAULT_FILE_NAME = "file.dat";
const DEFAULT_FILE_TYPE = "application/octet-stream";

const PREVIEW_DUMMY_TEXT = "Hello world";

@Injectable()
class FileReadService {
    constructor(private entityAPI: EntityApiService, private Apperyio: ApperyioHelperService, private file: File) {}

    convertData(ab, format, type, name) {
        let result = ab;
        if (format === FORMATS.BLOB || format === FORMATS.FORM_DATA) {
            result = new Blob([ab], {
                type: type || DEFAULT_FILE_TYPE
            });
        }
        if (format === FORMATS.FORM_DATA) {
            const formData = new FormData();
            const fileName = name || DEFAULT_FILE_NAME;
            formData.append(fileName, result, fileName);
            result = formData;
        }
        return result;
    }

    readFile(file, observer, format, type, name) {
        const reader = new FileReader();
        reader.onload = () => {
            let result = reader.result;
            if (format !== FORMATS.STRING) {
                result = this.convertData(result, format, type || file.type, name || file.name);
            }
            observer.next({
                data: result
            });
            observer.complete();
        };
        reader.onerror = () => {
            reader.abort();
            observer.error('Error while reading file.');
        };
        switch (format) {
            case FORMATS.STRING: 
                reader.readAsText(file);
                break;
            case FORMATS.DATA_URL: 
                reader.readAsDataURL(file);
                break;
            default: 
                reader.readAsArrayBuffer(file);
        }
    }
    
    private execEcho(observer, echo, requestData, format) {
        let result = echo;
        if (format !== FORMATS.STRING) {
            let buf = new ArrayBuffer(echo.length * 2); // 2 bytes for each char
            let bufView = new Uint16Array(buf);
            for (var i = 0, strLen = echo.length; i < strLen; i++) {
                bufView[i] = echo.charCodeAt(i);
            }
            result = this.convertData(buf, format, requestData.blobType, requestData.formDataFileName);
        }
        observer.next({
            data: result
        });
        observer.complete();
    }

    execute(reqOpts ? : any) {
        return new Observable((observer) => {
            try {
                (async() => {
                    let srvName = await this.Apperyio.getGSNameByImpl(this);
                    if (!srvName) {
                        observer.error("Service was not found");
                        return;
                    }
                    let service = this.entityAPI.get(srvName),
                        echo = service.echo,
                        defaults = service.request.data,
                        request = _.extend({}, defaults, reqOpts),
                        requestData = request.data,
                        format = FORMATS[requestData.resultFormat] || DEFAULT_FORMAT;

                    if (_.isUndefined(echo)) {
                        let file, inputEl;
                        if (requestData.fileInput) {
                            let file,
                                inputEl = requestData.fileInput;
                            if (requestData.fileInput.nativeElement) {
                                inputEl = requestData.fileInput.nativeElement;
                            }
                            if (requestData.fileInput.el && requestData.fileInput.el.nodeName === "ION-INPUT") {
                                inputEl = requestData.fileInput.el.getElementsByTagName("input")[0];
                            }
                            if (inputEl && inputEl.nodeName === "INPUT" && inputEl.type === "file" && inputEl.files) {
                                file = inputEl.files[0];
                            }
                            if (requestData.fileInput instanceof Blob) {
                                file = requestData.fileInput;
                            }
                            if (!file) {
                                observer.error('Wrong type for `fileInput`');
                                return;
                            }
                            this.readFile(file, observer, format, requestData.blobType, requestData.formDataFileName);
                            return;
                        }
                        if (requestData.filePath) {
                            if(!(<any>window).cordova) {
                                this.execEcho(observer, PREVIEW_DUMMY_TEXT, requestData, format);
                            } else {
                                this.file.resolveLocalFilesystemUrl(requestData.filePath)
                                    .then(entry => {
                                        ( < FileEntry > entry).file(file => this.readFile(file, observer, format, requestData.blobType, requestData.formDataFileName))
                                    })
                                    .catch(err => {
                                        observer.error('Error while reading file.');
                                    });
                            }
                        } else {
                            observer.error('File path is empty');
                        }

                    } else {
                        this.execEcho(observer, echo, requestData, format);
                    }
                })()
            } catch (e) {
                observer.error(e);
            }
        });
    }
}

/*
    Service class should be exported as ExportedClass
*/
export {
    FileReadService as ExportedClass
};