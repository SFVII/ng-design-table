import { ActivatedRoute, Router } from '@angular/router';
import { ChangeDetectorRef, EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CoreMatTable, CoreMatTableInterface, FilterDateInterface, Page, PageRequest, Sort } from './core-data-table';
import { CellsComponentList } from './setting/CellsComponentRegistry';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TableService } from './table.service';
import { TranslateService } from './translate.service';
import * as i0 from "@angular/core";
interface displayColumnsConfig {
    sizeIcon?: number;
    displayYes?: boolean;
    displayNo?: boolean;
}
interface displayedColumnsInterface {
    key: string;
    value: string;
    ratio?: number;
    order?: number;
    class?: string;
    addClass?: string;
    category?: string;
    module?: CellsComponentList;
    override?: string | string[];
    display?: string;
    align?: string;
    sort?: boolean;
    clickable?: boolean;
    statement?: boolean;
    valueStatement?: string[];
    fontSize?: string;
    title?: string;
    subTitle?: string;
    config?: displayColumnsConfig;
    valueOverride?: {
        [key: string]: any;
    };
}
declare class TableComponent implements OnInit, OnChanges {
    private router;
    private route;
    private service;
    private detector;
    private translate;
    private changeDetectorRef;
    paginatorCurrent: MatPaginator;
    sortCurrent: MatSort;
    columnDefinitions: [displayedColumnsInterface];
    displayDetail: boolean;
    displayComponent: string;
    data: CoreMatTableInterface;
    lang: string;
    btnOverride: boolean;
    callFunction: EventEmitter<any>;
    inputSearch: string;
    EmptyRow: boolean;
    blockDetails: boolean;
    clicked: EventEmitter<{
        key: string;
        statement: boolean;
    }>;
    columnsToDisplay: string[];
    filter: Array<string>;
    displayedColumns: any;
    expandedElement: any;
    index: number;
    open: string;
    search: string;
    cancelSearch: string;
    noResult: string;
    details: string;
    showTable: boolean;
    private PrivateColumnDefinitions;
    constructor(router: Router, route: ActivatedRoute, service: TableService, detector: ChangeDetectorRef, translate: TranslateService, changeDetectorRef: ChangeDetectorRef);
    expand(element: any): void;
    ngOnInit(): void;
    ngAfterViewChecked(): void;
    buildHeaders(): Promise<void>;
    generateClass(Class: string[]): string[];
    sort(): Promise<displayedColumnsInterface[]>;
    buildLink(override: string[], element: any): string;
    Join(elem: any, override: string[], joinKey?: string): string;
    reset(): boolean;
    expandShow(template: string): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableComponent, "ngx-design-table", never, { "columnDefinitions": "columnDefinitions"; "displayDetail": "displayDetail"; "displayComponent": "displayComponent"; "data": "data"; "lang": "lang"; "btnOverride": "btnOverride"; "inputSearch": "inputSearch"; "EmptyRow": "EmptyRow"; "blockDetails": "blockDetails"; }, { "callFunction": "callFunction"; "clicked": "clicked"; }, never, never>;
}
export { CoreMatTable, FilterDateInterface, CoreMatTableInterface, Page, PageRequest, Sort, displayedColumnsInterface, CellsComponentList, TableComponent };
