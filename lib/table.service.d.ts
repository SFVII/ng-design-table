import { EventEmitter } from '@angular/core';
import { DesignTableInterface } from "./setting/Config.interface";
export declare class TableService {
    settingConfig: any;
    config: DesignTableInterface;
    displayColumn: any;
    updateHeader: EventEmitter<boolean>;
    emptyRow: boolean;
    constructor(settingConfig: any);
    setHeader(displayColumn: any): void;
}
