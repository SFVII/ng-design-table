import { EventEmitter, OnInit } from '@angular/core';
import { MenuListInterface } from "../../setting/Config.interface";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import * as i0 from "@angular/core";
export declare class MenuComponent implements OnInit {
    private dialog;
    private router;
    title: string;
    MenuList: MenuListInterface[];
    Data: any;
    DialogClose: EventEmitter<any>;
    constructor(dialog: MatDialog, router: Router);
    ngOnInit(): void;
    goToLink(path: string): void;
    openModal(modal: any): void;
    private interpolate;
    static ɵfac: i0.ɵɵFactoryDeclaration<MenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MenuComponent, "lib-menu", never, { "title": "title"; "MenuList": "MenuList"; "Data": "Data"; }, { "DialogClose": "DialogClose"; }, never, never>;
}
