import {
    Component
} from '@angular/core';
import {
    ChangeDetectorRef
} from '@angular/core';
import {
    ApperyioHelperService
} from '../scripts/apperyio/apperyio_helper';
import {
    ApperyioMappingHelperService
} from '../scripts/apperyio/apperyio_mapping_helper';
import {
    UserModel
} from '../scripts/interfaces';
import {
    ViewChild
} from '@angular/core';
@Component({
    templateUrl: 'Profile1.html',
    selector: 'page-profile1',
    styleUrls: ['Profile1.css', 'Profile1.scss']
})
export class Profile1 {
    public viewMode: boolean;
    public user: UserModel;
    public savedPhoto: string;
    public aioChangeDetector: ChangeDetectorRef;
    public currentItem: any = null;
    public mappingData: any = {};
    public __getMapping(_currentItem, property, defaultValue, isVariable?, isSelected?) {
        return this.$aio_mappingHelper.getMapping(this.mappingData, _currentItem, property, defaultValue, isVariable, isSelected);
    }
    public __isPropertyInMapping(_currentItem, property) {
        return this.$aio_mappingHelper.isPropertyInMapping(this.mappingData, _currentItem, property);
    }
    public __setMapping(data: any = {}, keyName: string, propName?: string): void {
        const changes = data.detail || {};
        if (propName) {
            this.mappingData = this.$aio_mappingHelper.updateData(this.mappingData, [keyName], changes[propName]);
        } else {
            this.mappingData = this.$aio_mappingHelper.updateData(this.mappingData, [keyName], changes.value);
        }
        this.$aio_changeDetector.detectChanges();
    }
    public __bindedMethods: any = {};
    @ViewChild('j_6', {
        static: false
    }) public j_6;
    @ViewChild('form', {
        static: true
    }) public form;
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef) {
        this.viewMode = true;
        this.user = {
            "firstName": "John",
            "lastName": "Doe",
            "job": "Product Designer",
            "photo": "./assets/images/avatar.jpg",
            "phone": "+1 (000) 000-00000",
            "gender": "Male",
            "address": "402 West Lake Forest St. Palm Beach Gardens, FL 33410",
            "email": "john.doe@email.com",
            "dateOfBirth": "1980-01-01"
        };
        this.aioChangeDetector = this.$aio_changeDetector;
    }
    ngOnInit() {
        this.Apperyio.setThinScrollIfNeeded();
    }
    ionViewDidEnter() {
        this.pageIonViewDidEnter__j_0();
    }
    async pageIonViewDidEnter__j_0(event?, currentItem?) {
        let mappingData: any = {};
        let __aio_tmp_val__: any;
        /* Mapping */
        mappingData.j_62__visible = () => this.$aio_mappingHelper.getSubdata(this.viewMode, []);
        mappingData.j_63__visible = () => ((value) => {
            return !value;
        })(this.$aio_mappingHelper.getSubdata(this.viewMode, []));
        mappingData.j_39__visible = () => ((value) => {
            return !value;
        })(this.$aio_mappingHelper.getSubdata(this.viewMode, []));
        mappingData.j_9__visible = () => this.$aio_mappingHelper.getSubdata(this.viewMode, []);
        mappingData.j_12__text = () => this.$aio_mappingHelper.getSubdata(this.user, ["job"]);
        mappingData.j_10__text = () => this.$aio_mappingHelper.getSubdata(this.user, ["firstName"]);
        mappingData.j_5__imageSrc = () => this.$aio_mappingHelper.getSubdata(this.user, ["photo"]);
        mappingData.j_11__text = () => this.$aio_mappingHelper.getSubdata(this.user, ["lastName"]);
        mappingData.j_18__text = () => this.$aio_mappingHelper.getSubdata(this.user, ["phone"]);
        mappingData.j_23__text = () => this.$aio_mappingHelper.getSubdata(this.user, ["email"]);
        mappingData.j_33__text = () => ((value) => {
            return value.substr(0, 10);
        })(this.$aio_mappingHelper.getSubdata(this.user, ["dateOfBirth"]));
        mappingData.j_38__text = () => this.$aio_mappingHelper.getSubdata(this.user, ["address"]);
        mappingData.j_28__text = () => this.$aio_mappingHelper.getSubdata(this.user, ["gender"]);
        mappingData.j_6__visible = () => ((value) => {
            return !value;
        })(this.$aio_mappingHelper.getSubdata(this.viewMode, []));
        this.mappingData = { ...this.mappingData,
            ...mappingData
        };
    }
    async filepickerIonChange__j_6(event?, currentItem?) {
        let __aio_tmp_val__: any;
        /* Invoke data service */
        this.invokeService_FileReadService1();
    }
    async editbuttonClick__j_62(event?, currentItem?) {
        let mappingData: any = {};
        let __aio_tmp_val__: any;
        /* Set variable */
        this.viewMode = false;
        /* Mapping */
        mappingData.j_42__value = () => this.$aio_mappingHelper.getSubdata(this.user, ["firstName"]);
        mappingData.j_45__value = () => this.$aio_mappingHelper.getSubdata(this.user, ["lastName"]);
        this.savedPhoto = this.$aio_mappingHelper.updateData(this.savedPhoto, [], this.$aio_mappingHelper.getSubdata(this.user, ["photo"]));
        mappingData.j_48__value = () => this.$aio_mappingHelper.getSubdata(this.user, ["phone"]);
        mappingData.j_54__value = () => this.$aio_mappingHelper.getSubdata(this.user, ["gender"]);
        mappingData.j_51__value = () => this.$aio_mappingHelper.getSubdata(this.user, ["email"]);
        this.mappingData = { ...this.mappingData,
            ...mappingData
        };
    }
    async cancelbuttonClick__j_63(event?, currentItem?) {
        let mappingData: any = {};
        let __aio_tmp_val__: any;
        /* Set variable */
        this.viewMode = true;
        /* Mapping */
        this.user = this.$aio_mappingHelper.updateData(this.user, ["photo"], this.$aio_mappingHelper.getSubdata(this.savedPhoto, []));
        this.mappingData = { ...this.mappingData,
            ...mappingData
        };
    }
    async backbuttonClick__j_65(event?, currentItem?) {
        let __aio_tmp_val__: any;
        /* Navigate to Page */
        this.Apperyio.navigation.forward('menu');
    }
    private $aio_dataServices = {
        "FileReadService1": "invokeService_FileReadService1"
    }
    invokeService_FileReadService1(cb?: Function) {
        this.Apperyio.getService("FileReadService").then(
            async (service) => {
                if (!service) {
                    console.log("Error. Service was not found.");
                    return;
                }
                let data = {};
                let __aio_tmp_val__: any;
                this.$aio_changeDetector.detectChanges();
                data = this.$aio_mappingHelper.updateData(data, ["resultFormat"], 'DATA_URL');
                /* Mapping */
                data = this.$aio_mappingHelper.updateData(data, ["fileInput"], this.$aio_mappingHelper.getComponentPropValue.call(this, 'j_6', 'ionic5filepicker', 'value'));
                service.execute({
                    data: data
                }).subscribe(
                    /* onsuccess */
                    async (res: any) => {
                        let mappingData: any = {};
                        /* Mapping */
                        this.user = this.$aio_mappingHelper.updateData(this.user, ["photo"], this.$aio_mappingHelper.getSubdata(res, ["data"]));
                        this.mappingData = { ...this.mappingData,
                            ...mappingData
                        };
                        if (cb && typeof cb === "function") cb(res);
                    },
                    (err: any) => {
                        console.log(err);
                    }
                )
            }
        );
    }
}