import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class IsMatIconComponent implements OnInit, OnChanges {
    input: string;
    display: string;
    isIcon: boolean;
    constructor();
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<IsMatIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IsMatIconComponent, "app-is-mat-icon", never, { "input": "input"; }, {}, never, never>;
}
