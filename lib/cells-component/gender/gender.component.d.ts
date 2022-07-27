import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TableService } from "../../table.service";
import * as i0 from "@angular/core";
export declare class GenderComponent implements OnInit, OnChanges {
    private service;
    type: string;
    size: number;
    icon: string;
    css: any;
    constructor(service: TableService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GenderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GenderComponent, "app-gender", never, { "type": "type"; "size": "size"; }, {}, never, never>;
}
