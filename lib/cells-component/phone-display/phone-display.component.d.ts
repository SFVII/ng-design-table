import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class PhoneDisplayComponent implements OnInit, OnChanges {
    private fb;
    number: string;
    display: string;
    flag: string;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private normalize;
    static ɵfac: i0.ɵɵFactoryDeclaration<PhoneDisplayComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PhoneDisplayComponent, "app-phone-display", never, { "number": "number"; }, {}, never, never>;
}
