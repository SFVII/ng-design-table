import { EventEmitter } from '@angular/core';
import { DesignTableInterface } from "./setting/Config.interface";
import * as i0 from "@angular/core";
export declare class TableService {
    settingConfig: any;
    config: DesignTableInterface;
    displayColumn: any;
    updateHeader: EventEmitter<boolean>;
    emptyRow: boolean;
    constructor(settingConfig: any);
    setHeader(displayColumn: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TableService>;
}
