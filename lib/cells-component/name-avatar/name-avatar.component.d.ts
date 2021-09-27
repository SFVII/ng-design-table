import { AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { TableService } from "../../table.service";
export declare class NameAvatarComponent implements OnInit, AfterViewInit {
    private service;
    src: string;
    fontSize: string;
    textSize: string;
    icon: ElementRef<HTMLElement>;
    letter: string;
    private _padding;
    private _display;
    private _borderRadius;
    private _size;
    private afterInit;
    private defaultFontSize;
    private defaultDimension;
    constructor(service: TableService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    getRatio(): void;
}
