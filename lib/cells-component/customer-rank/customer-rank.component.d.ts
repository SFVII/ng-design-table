import { ChangeDetectorRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TableService } from "../../table.service";
import * as i0 from "@angular/core";
export declare class CustomerRankComponent implements OnInit, OnChanges {
    private changeDetectorRefs;
    private service;
    type: string;
    typeClass: string;
    private _type;
    constructor(changeDetectorRefs: ChangeDetectorRef, service: TableService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomerRankComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomerRankComponent, "app-customer-rank", never, { "type": "type"; }, {}, never, never>;
}
