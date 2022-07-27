import { ChangeDetectorRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TableService } from "../../table.service";
import * as i0 from "@angular/core";
export declare class EquipementTypeComponent implements OnInit, OnChanges {
    private changeDetectorRefs;
    private service;
    name: string;
    type: string;
    size: number | string;
    icon: string;
    css: any;
    constructor(changeDetectorRefs: ChangeDetectorRef, service: TableService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EquipementTypeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EquipementTypeComponent, "app-equipement-type", never, { "name": "name"; "type": "type"; "size": "size"; }, {}, never, never>;
}
