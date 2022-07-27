import { EventEmitter, OnInit } from '@angular/core';
import { TranslateService } from '../../translate.service';
import * as i0 from "@angular/core";
export declare class ButtonLinkTextComponent implements OnInit {
    private translate;
    lang: string;
    routerLink: string;
    text: string;
    class: string;
    id: string;
    modal: string;
    element: any;
    callHandler: EventEmitter<any>;
    open: string;
    constructor(translate: TranslateService);
    ngOnInit(): void;
    action(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonLinkTextComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonLinkTextComponent, "button-link-text", never, { "lang": "lang"; "routerLink": "routerLink"; "text": "text"; "class": "class"; "id": "id"; "modal": "modal"; "element": "element"; }, { "callHandler": "callHandler"; }, never, never>;
}
