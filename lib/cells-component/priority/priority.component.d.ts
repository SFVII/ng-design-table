import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TableService } from "../../table.service";
import * as i0 from "@angular/core";
export declare class PriorityComponent implements OnInit, OnChanges {
    private service;
    icon: string;
    iconLabel: string;
    iconSrc: string;
    label: string;
    constructor(service: TableService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PriorityComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PriorityComponent, "icon-priority", never, { "icon": "icon"; "iconLabel": "iconLabel"; }, {}, never, never>;
}
