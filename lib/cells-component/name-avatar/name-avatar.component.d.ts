import { AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { TableService } from "../../table.service";
import * as i0 from "@angular/core";
export declare class NameAvatarComponent implements OnInit, AfterViewInit {
    private service;
    src: string;
    fontSize: string;
    textSize: string;
    icon: ElementRef<HTMLElement>;
    letter: string;
    private _padding;
    private _display;
    _borderRadius: string;
    private _size;
    private afterInit;
    private defaultFontSize;
    private defaultDimension;
    constructor(service: TableService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    getRatio(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NameAvatarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NameAvatarComponent, "name-avatar", never, { "src": "src"; "fontSize": "fontSize"; "textSize": "textSize"; }, {}, never, never>;
}
