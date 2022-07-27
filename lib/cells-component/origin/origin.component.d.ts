import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TableService } from "../../table.service";
import * as i0 from "@angular/core";
export declare class OriginComponent implements OnInit, OnChanges {
    service: TableService;
    icon: string;
    iconSrc: string;
    constructor(service: TableService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OriginComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OriginComponent, "icon-origin", never, { "icon": "icon"; }, {}, never, never>;
}
