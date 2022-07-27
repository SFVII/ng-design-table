import { ElementRef, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PngIconComponent implements OnInit {
    src: string;
    fontSize: string;
    color: string;
    icon: ElementRef<HTMLElement>;
    private _padding;
    private _display;
    private _size;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PngIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PngIconComponent, "png-icon", never, { "src": "src"; "fontSize": "fontSize"; "color": "color"; }, {}, never, never>;
}
