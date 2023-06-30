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
    DataTableHelperService,
    DataTableOptions,
    SortingOptions,
    DATA_TABLE_MODES
} from '../scripts/apperyio/datatable_helper';
import {
    $aio_empty_object
} from '../scripts/interfaces';
import {
    ViewChild
} from '@angular/core';
@Component({
    templateUrl: 'Screen2.html',
    selector: 'page-screen2',
    styleUrls: ['Screen2.css', 'Screen2.scss']
})
export class Screen2 {
    public aioChangeDetector: ChangeDetectorRef;
    public currentItem: any = null;
    public mappingData: any = {
        "j_69__visible": false,
    };
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
    public __getDataTableMapping(data, property, defaultValue) {
        return this.$aio_mappingHelper.getDataTableMapping(data, property, defaultValue);
    }
    @ViewChild('j_71', {
        static: true
    }) public j_71;
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef, private $aio_DataTableHelper: DataTableHelperService) {
        this.$aio_j_71 = {
            headerHeight: 50,
            footerHeight: 50,
            count: 0,
            limit: 10,
            rowHeight: "auto",
            offset: 0,
            mode: DATA_TABLE_MODES.CLIENT_PAGES,
            externalSorting: false,
            componentName: "j_71",
            dataServiceName: "",
            isRowsMapping: false,
            rows: [],
            isLoading: false,
            cssClasses: {
                sortAscending: "datatable-icon-up",
                sortDescending: "datatable-icon-down",
                pagerLeftArrow: "datatable-icon-left",
                pagerRightArrow: "datatable-icon-right",
                pagerPrevious: "datatable-icon-prev",
                pagerNext: "datatable-icon-next"
            },
            messages: {
                emptyMessage: "No data to display",
                totalMessage: "total",
                selectedMessage: "selected"
            },
            sorts: < SortingOptions > {}
        };
        this.aioChangeDetector = this.$aio_changeDetector;
    }
    ngOnInit() {
        this.Apperyio.setThinScrollIfNeeded();
        this.$aio_DataTableHelper.initTableData(this, this.$aio_j_71);
        this.pageNgOnInit__j_67();
    }
    $aio_DataTableOnSort_j_71(e) {
        this.$aio_DataTableHelper.dataTableOnSort(e.sorts[0], this.$aio_j_71);
    }
    public $aio_j_71: DataTableOptions;
    private $aio_dataTables = {
        "DataTable5": "$aio_j_71"
    };
    async pageNgOnInit__j_67(event?, currentItem?) {
        let __aio_tmp_val__: any;
        /* Invoke data service */
        this.invokeService_Event1();
    }
    async button1Click__j_78(event?, currentItem?) {
        let __aio_tmp_val__: any;
        /* Navigate to Page */
        this.Apperyio.navigation.forward('menu');
    }
    private $aio_dataServices = {
        "Event1": "invokeService_Event1"
    }
    invokeService_Event1(cb?: Function) {
        this.Apperyio.getService("Event").then(
            async (service) => {
                if (!service) {
                    console.log("Error. Service was not found.");
                    return;
                }
                let data = {};
                let __aio_tmp_val__: any;
                service.execute({
                    data: data
                }).subscribe(
                    /* onsuccess */
                    async (res: any) => {
                        let mappingData: any = {};
                        /* Mapping */
                        this.$aio_DataTableHelper.updateDataTableProperty(this.$aio_j_71, "rows", ((value) => {
                            console.log(value);
                            return value;
                        })(this.$aio_mappingHelper.getSubdata(res, ["events"])));
                        mappingData.j_69__visible = () => ((value) => {
                            const shouldBeVisible = value.length > 0;
                            value = shouldBeVisible
                            return shouldBeVisible
                        })(this.$aio_mappingHelper.getSubdata(res, ["events"]));
                        mappingData.j_70__visible = () => ((value) => {
                            const shouldBeVisible = value.length === 0;
                            value = shouldBeVisible
                            return shouldBeVisible
                        })(this.$aio_mappingHelper.getSubdata(res, ["events"]));
                        /* Run TypeScript */
                        const date = new Date();
                        setInterval(async () => {
                            res = "Opa"
                            const day = date.getDate().toString().padStart(2, '0');
                            const month = date.getMonth().toString().padStart(2, '0');
                            const year = date.getFullYear();
                            const stringfiedDate = `${day}${month}${year}`
                            const fetch25Data = async () => fetch('https://dedoduro.com.br/api/list/1/25062023');
                            const fetchTodayData = async () => fetch(`https://dedoduro.com.br/api/list/1/${stringfiedDate}`)
                            const data = await fetchTodayData();
                            const bodyDataParsed = await data.json();
                            console.log("this", this);
                            const events = bodyDataParsed.events.reduce((acc, {
                                persons,
                                ...data
                            }) => {
                                const newEventNames = persons.reduce((accumulator: string, {
                                    name
                                }, index, array: any[]) => {
                                    const nameAlreadyInNames = accumulator.includes(name);
                                    if (nameAlreadyInNames) return accumulator;
                                    const nameQuantity = array.filter(item => item.name === name).length;
                                    const arrayOnlyContainsName = array.length === nameQuantity;
                                    if (arrayOnlyContainsName) return `${nameQuantity} ${name}`;
                                    const newName = index === (array.length - 1)? name: `${nameQuantity > 1 ? (`${nameQuantity} ${name}`) : name}, `
                                    return accumulator + newName
                                }, '')
                                const newEvent = {
                                    ...data,
                                    names: newEventNames
                                }
                                return [...acc, newEvent]
                            }, [])
                            this.$aio_j_71.rows = events
                        }, 1000);
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
