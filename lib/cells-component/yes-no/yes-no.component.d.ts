import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TableService } from "../../table.service";
import * as i0 from "@angular/core";
export declare class YesNoComponent implements OnInit, OnChanges {
    private service;
    valid: boolean;
    displayNo: boolean;
    displayYes: boolean;
    size: any;
    icon: string;
    css: any;
    constructor(service: TableService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<YesNoComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<YesNoComponent, "app-yes-nox", never, { "valid": "valid"; "displayNo": "displayNo"; "displayYes": "displayYes"; "size": "size"; }, {}, never, never>;
}
