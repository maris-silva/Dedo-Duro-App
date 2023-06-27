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
    $aio_empty_object
} from '../scripts/interfaces';
@Component({
    templateUrl: 'menu.html',
    selector: 'page-menu',
    styleUrls: ['menu.css', 'menu.scss']
})
export class menu {
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
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef) {
        this.aioChangeDetector = this.$aio_changeDetector;
    }
    ngOnInit() {
        this.Apperyio.setThinScrollIfNeeded();
    }
    async button9Click__j_125(event?, currentItem?) {
        let __aio_tmp_val__: any;
        /* Navigate to Page */
        this.Apperyio.navigation.forward('Profile1');
    }
    async button10Click__j_127(event?, currentItem?) {
        let __aio_tmp_val__: any;
        /* Navigate to Page */
        this.Apperyio.navigation.forward('Screen2');
    }
    async button11Click__j_132(event?, currentItem?) {
        let __aio_tmp_val__: any;
        /* Navigate to Page */
        this.Apperyio.navigation.forward('Screen3');
    }
    async button12Click__j_134(event?, currentItem?) {
        let __aio_tmp_val__: any;
        /* Navigate to Page */
        this.Apperyio.navigation.forward('Screen1');
    }
}