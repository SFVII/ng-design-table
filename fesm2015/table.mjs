import * as i0 from '@angular/core';
import { EventEmitter, Injectable, Inject, Component, Input, ViewChild, NgModule, Output, ViewEncapsulation, Optional, SkipSelf } from '@angular/core';
import * as i2 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i2$1 from '@angular/material/tooltip';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as i21 from '@angular/common';
import { CommonModule } from '@angular/common';
import { isValidPhoneNumber, parsePhoneNumber } from 'libphonenumber-js';
import * as i1 from '@angular/forms';
import { __awaiter } from 'tslib';
import { BehaviorSubject, from } from 'rxjs';
import { debounceTime, switchMap, share, pluck } from 'rxjs/operators';
import { DataSource } from '@angular/cdk/collections';
import { trigger, state, style, transition, animate } from '@angular/animations';
import * as i1$1 from '@angular/router';
import { RouterModule } from '@angular/router';
import * as i4$1 from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import * as i5 from '@angular/material/sort';
import { MatSortModule } from '@angular/material/sort';
import * as i1$2 from '@angular/material/dialog';
import * as i4 from '@angular/material/menu';
import { MatMenuModule } from '@angular/material/menu';
import * as i20 from '@angular/material/paginator';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatBadgeModule } from '@angular/material/badge';

class TableService {
    constructor(settingConfig) {
        this.settingConfig = settingConfig;
        this.updateHeader = new EventEmitter();
        this.emptyRow = false;
        this.config = settingConfig;
    }
    setHeader(displayColumn) {
        this.displayColumn = displayColumn;
        this.updateHeader.emit(true);
    }
}
TableService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TableService, deps: [{ token: '__NgxDesignTable__' }], target: i0.ɵɵFactoryTarget.Injectable });
TableService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TableService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TableService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () {
        return [{ type: undefined, decorators: [{
                        type: Inject,
                        args: ['__NgxDesignTable__']
                    }] }];
    } });

class CustomerRankComponent {
    constructor(changeDetectorRefs, service) {
        this.changeDetectorRefs = changeDetectorRefs;
        this.service = service;
    }
    ngOnInit() {
        const config = this.service.settingConfig.customerRank || ['gold', 'silver', 'bronze', 'default'];
        if (this.type) {
            this._type = (this.type || '').replace(/[^A-Z0-9]+/ig, "");
            for (let c of config) {
                if (this._type.toLocaleLowerCase() === 'default') {
                    this.type = 'Classic'.toUpperCase();
                    this.typeClass = c.toLocaleLowerCase();
                }
                else if (this._type.toLocaleLowerCase() === c.toLocaleLowerCase()) {
                    this.typeClass = c.toLocaleLowerCase();
                    this.type = this.type.toUpperCase();
                }
            }
        }
        else {
            this.type = 'Classic'.toUpperCase();
            this.typeClass = 'default';
        }
        /*  if (this._type.toLocaleLowerCase() === 'gold') {
            this.typeClass = 'gold'
            this.type = this.type.toUpperCase()
          } else if (this._type.toLocaleLowerCase() === 'silver') {
            this.typeClass = 'silver'
            this.type = this.type.toUpperCase()
          } else if (this._type.toLocaleLowerCase() === 'bronze') {
            this.typeClass = 'bronze'
            this.type = this.type.toUpperCase()
          } else {
            this.type = 'Classic'.toUpperCase();
            this.typeClass = 'default'
          }
          this.changeDetectorRefs.detectChanges();*/
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
}
CustomerRankComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: CustomerRankComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: TableService }], target: i0.ɵɵFactoryTarget.Component });
CustomerRankComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: CustomerRankComponent, selector: "app-customer-rank", inputs: { type: "type" }, usesOnChanges: true, ngImport: i0, template: "<span [class]=\"typeClass\" matTooltip=\"Contrat de type : {{type}}\">\n  <span style=\"color:black\">{{type}}</span><mat-icon *ngIf=\"type !== 'CLASSIC'\">star_rate</mat-icon>\n</span>\n", styles: [".gold{font-size:12px;font-weight:700;color:gold!important}.silver{font-size:12px;font-weight:700;color:silver!important}.bronze{font-weight:700;font-size:12px;color:#cd7f32!important}.default{font-weight:700;font-size:12px;color:#000!important}\n"], components: [{ type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], directives: [{ type: i2$1.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i21.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: CustomerRankComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-customer-rank', template: "<span [class]=\"typeClass\" matTooltip=\"Contrat de type : {{type}}\">\n  <span style=\"color:black\">{{type}}</span><mat-icon *ngIf=\"type !== 'CLASSIC'\">star_rate</mat-icon>\n</span>\n", styles: [".gold{font-size:12px;font-weight:700;color:gold!important}.silver{font-size:12px;font-weight:700;color:silver!important}.bronze{font-weight:700;font-size:12px;color:#cd7f32!important}.default{font-weight:700;font-size:12px;color:#000!important}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: TableService }]; }, propDecorators: { type: [{
                type: Input
            }] } });

class DateFormatComponent {
    constructor() {
        this.timezone = 'fr';
    }
    ngOnInit() {
    }
    run(date) {
        if (date) {
            let t = date.split(' ');
            return `<span class="">
                    <span class="hour">${t[0]}</span>
                    <!--<span class="minute">${t[1]}</span>-->
                </span>`;
        }
        else {
            return `<span class="time-badge">
                    <span class="hour">-</span>
                    <span class="minute"></span>
                </span>`;
        }
    }
    ngOnChanges(changes) {
    }
}
DateFormatComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DateFormatComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DateFormatComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: DateFormatComponent, selector: "date-format", inputs: { date: "date", timezone: "timezone" }, usesOnChanges: true, ngImport: i0, template: "<span matTooltip=\"{{(date| date : 'short' : timezone)}}\" [innerHTML]=\"run((date| date : 'short' : timezone))\"></span>\n", styles: ["span.time-badge{display:block;text-align:center!important;padding-right:25px}span.time-badge .hour{display:block;font-weight:900;font-size:12px}span.time-badge .minute{display:block;font-weight:300;font-size:10px}\n"], directives: [{ type: i2$1.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }], pipes: { "date": i21.DatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DateFormatComponent, decorators: [{
            type: Component,
            args: [{ selector: 'date-format', template: "<span matTooltip=\"{{(date| date : 'short' : timezone)}}\" [innerHTML]=\"run((date| date : 'short' : timezone))\"></span>\n", styles: ["span.time-badge{display:block;text-align:center!important;padding-right:25px}span.time-badge .hour{display:block;font-weight:900;font-size:12px}span.time-badge .minute{display:block;font-weight:300;font-size:10px}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { date: [{
                type: Input
            }], timezone: [{
                type: Input
            }] } });

class EquipementStatusComponent {
    // private params: any = {};
    constructor(changeDetectorRefs, service) {
        this.changeDetectorRefs = changeDetectorRefs;
        this.service = service;
        this.css = {};
        this.css.maxWidth = String((this.size || 22)) + 'px';
        this.css.maxHeight = String((this.size || 22)) + 'px';
        //this.params = this.service.settingConfig.equipmentStatus;
    }
    ngOnInit() {
        this.css.maxWidth = String((this.size || 22)) + 'px';
        this.css.maxHeight = String((this.size || 22)) + 'px';
        const params = this.service.settingConfig.equipmentStatus; /*{
          "actif": "/assets/icons/status/actif.png",
          "oui": "/assets/icons/status/actif.png",
          "hs": "/assets/icons/status/HS.png",
          "inactif": "/assets/icons/status/inactif.png",
          "non": "/assets/icons/status/inactif.png",
          "spare": "/assets/icons/status/spare.png",
        }*/
        const clean = (this.type || "").toLocaleLowerCase().replace(/[^A-Z0-9]+/ig, "");
        if (params[clean]) {
            this.icon = params[clean];
        }
        else {
            this.icon = params['default'];
        }
        this.changeDetectorRefs.detectChanges();
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
}
EquipementStatusComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: EquipementStatusComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: TableService }], target: i0.ɵɵFactoryTarget.Component });
EquipementStatusComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: EquipementStatusComponent, selector: "app-equipement-status", inputs: { type: "type", size: "size" }, usesOnChanges: true, ngImport: i0, template: "<span [style]=\"css\" matTooltip=\"{{type}}\">\n    <img [src]=\"icon\" [style]=\"css\" class=\"equipement-status\">\n</span>", styles: [""], directives: [{ type: i2$1.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: EquipementStatusComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-equipement-status', template: "<span [style]=\"css\" matTooltip=\"{{type}}\">\n    <img [src]=\"icon\" [style]=\"css\" class=\"equipement-status\">\n</span>", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: TableService }]; }, propDecorators: { type: [{
                type: Input
            }], size: [{
                type: Input
            }] } });

class EquipementTypeComponent {
    constructor(changeDetectorRefs, service) {
        this.changeDetectorRefs = changeDetectorRefs;
        this.service = service;
        this.css = {};
        this.css.maxWidth = String((this.size || 40)) + 'px';
        this.css.maxHeight = String((this.size || 40)) + 'px';
    }
    ngOnInit() {
        this.css.maxWidth = String((this.size || 40)) + 'px';
        this.css.maxHeight = String((this.size || 40)) + 'px';
        const params = this.service.settingConfig.equipmentType; /*{
                "firewall": "/assets/icons/equipment/firewallnwt.png",
                "nas": "/assets/icons/equipment/nasnwt.png",
                "pcfixe": "/assets/icons/equipment/pcfixe_1.png",
                "pcportable": "/assets/icons/equipment/pcportable_1.png",
                "portable": "/assets/icons/equipment/pcportable_1.png",
                "clientleger": "/assets/icons/equipment/pcportable_1.png",
                "clientléger": "/assets/icons/equipment/pcportable_1.png",
                "onduleur": "/assets/icons/equipment/ondulateur.png",
                "serveur": "/assets/icons/equipment/serveur.png",
                "server": "/assets/icons/equipment/serveur.png",
                "servervirtuel": "/assets/icons/equipment/vps.png",
                "serveurvirtuel": "/assets/icons/equipment/vps.png",
                "vm": "/assets/icons/equipment/vps.png",
                "wifi": "/assets/icons/equipment/wifi.png",
                "workstationfixe": "/assets/icons/equipment/pcfixe_1.png",
                "workstationportable": "/assets/icons/equipment/pcportable_1.png",
                "imprimante": "/assets/icons/equipment/printer.png",
            }*/
        const clean = (this.type || "").toLocaleLowerCase().replace(/[^A-Z0-9]+/ig, "");
        const server = this.name.toLocaleLowerCase().includes('srv');
        if (params[clean]) {
            this.icon = params[clean];
        }
        else {
            this.icon = params['default'];
        }
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
}
EquipementTypeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: EquipementTypeComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: TableService }], target: i0.ɵɵFactoryTarget.Component });
EquipementTypeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: EquipementTypeComponent, selector: "app-equipement-type", inputs: { name: "name", type: "type", size: "size" }, usesOnChanges: true, ngImport: i0, template: "<span [style]=\"css\" matTooltip=\"{{type}}\">\n    <img [src]=\"icon\" [style]=\"css\">\n</span>\n", styles: [""], directives: [{ type: i2$1.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: EquipementTypeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-equipement-type', template: "<span [style]=\"css\" matTooltip=\"{{type}}\">\n    <img [src]=\"icon\" [style]=\"css\">\n</span>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: TableService }]; }, propDecorators: { name: [{
                type: Input
            }], type: [{
                type: Input
            }], size: [{
                type: Input
            }] } });

class GenderComponent {
    constructor(service) {
        this.service = service;
        this.css = {};
    }
    ngOnInit() {
        this.css.maxWidth = String((this.size || 40)) + 'px';
        this.css.maxHeight = String((this.size || 40)) + 'px';
        const params = this.service.settingConfig.gender; /*{
            "m": "/assets/icons/nowteam/salutations/man.png",
            "mme": "/assets/icons/nowteam/salutations/woman.png",
        }*/
        const clean = (this.type || "").toLocaleLowerCase().replace(/[^A-Z0-9]+/ig, "");
        if (params[clean]) {
            this.icon = params[clean];
        }
        else {
            this.css.maxWidth = String(((this.size || 40) - 10)) + 'px';
            this.css.maxHeight = String(((this.size || 40) - 10)) + 'px';
            this.icon = params.none; //"/assets/icons/status/HS.png";
        }
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
}
GenderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: GenderComponent, deps: [{ token: TableService }], target: i0.ɵɵFactoryTarget.Component });
GenderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: GenderComponent, selector: "app-gender", inputs: { type: "type", size: "size" }, usesOnChanges: true, ngImport: i0, template: "<span [style]=\"css\" matTooltip=\"{{type}}\">\n    <img [src]=\"icon\" [style]=\"css\">\n</span>\n", styles: [""], directives: [{ type: i2$1.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: GenderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-gender', template: "<span [style]=\"css\" matTooltip=\"{{type}}\">\n    <img [src]=\"icon\" [style]=\"css\">\n</span>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: TableService }]; }, propDecorators: { type: [{
                type: Input
            }], size: [{
                type: Input
            }] } });

class IsMatIconComponent {
    constructor() {
        this.isIcon = false;
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
    ngOnInit() {
        if (this.input && this.input.indexOf(('icon.')) > -1) {
            this.isIcon = true;
            this.display = this.input.split('.')[1];
        }
        else {
            this.isIcon = false;
            this.display = this.input;
        }
    }
}
IsMatIconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: IsMatIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
IsMatIconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: IsMatIconComponent, selector: "app-is-mat-icon", inputs: { input: "input" }, usesOnChanges: true, ngImport: i0, template: "<ng-container *ngIf=\"!isIcon\">\n    <span >{{display}}</span>\n</ng-container>\n<ng-container  *ngIf=\"isIcon\">\n    <mat-icon>{{display}}</mat-icon>\n</ng-container>", styles: [":host{height:34px;display:flex;padding:auto}:host .mat-icon{display:block;fill:currentColor;text-align:center;width:24px;margin:auto;vertical-align:middle;background:no-repeat}:host i,:host mat-icon{font-size:24px;height:24px}\n"], components: [{ type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], directives: [{ type: i21.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: IsMatIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-is-mat-icon', template: "<ng-container *ngIf=\"!isIcon\">\n    <span >{{display}}</span>\n</ng-container>\n<ng-container  *ngIf=\"isIcon\">\n    <mat-icon>{{display}}</mat-icon>\n</ng-container>", styles: [":host{height:34px;display:flex;padding:auto}:host .mat-icon{display:block;fill:currentColor;text-align:center;width:24px;margin:auto;vertical-align:middle;background:no-repeat}:host i,:host mat-icon{font-size:24px;height:24px}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { input: [{
                type: Input
            }] } });

class NameAvatarComponent {
    constructor(service) {
        this.service = service;
        this.fontSize = '44px';
        this.textSize = '14px';
        this._padding = '4px';
        this._display = 'flex';
        this._borderRadius = '50px';
        this._size = 'cover';
        this.afterInit = false;
        this.defaultFontSize = 12;
        this.defaultDimension = 24;
    }
    ngOnInit() {
        if (this.src && !this.src.includes('assets')) {
            let deg = Math.random() * (10 - 360) + 10;
            /*this.icon.nativeElement.style.backgroundImage = this.service.settingConfig.nameAvatarBackgroundColor; /*`linear-gradient(${deg}deg, #9d107d,
                                                             #8b3391, #7647a0, #5f56a8, #4862ab)`;*/
            this.icon.nativeElement.style.background = '#C2C8D5 0% 0% no-repeat padding-box';
            this.icon.nativeElement.style.borderRadius = this._borderRadius;
            this.icon.nativeElement.style.marginLeft = '16px';
            this.icon.nativeElement.style.display = this._display;
            this.icon.nativeElement.style.width = this.fontSize || '44px';
            this.icon.nativeElement.style.height = this.fontSize || '44px';
            this.icon.nativeElement.style.fontSize = (parseInt(this.fontSize, 0) / 2) + 'px';
            this.icon.nativeElement.style.padding = (parseInt(this.icon.nativeElement.style.fontSize, 0) / 3) + 'px';
            this.icon.nativeElement.style.fontWeight = '900';
            this.icon.nativeElement.style.font = "normal normal 900 " + this.textSize + "/20px 'nexa'";
            this.icon.nativeElement.style.color = '#171F26';
            const tmp = this.src.split(' ');
            this.letter = (tmp[0][0] + (tmp[1] && tmp[1][0] ? tmp[1][0] : tmp[0][1])).toUpperCase();
        }
        else if (this.src && this.src.includes('assets')) {
            //this.icon.nativeElement.style.backgroundImage = this.src;
            /*this.icon.nativeElement.style.borderRadius = this._borderRadius;
            this.icon.nativeElement.style.marginLeft = '16px';
            this.icon.nativeElement.style.display = this._display;
            this.icon.nativeElement.style.width = this.fontSize;
            this.icon.nativeElement.style.height = this.fontSize;
            this.icon.nativeElement.style.padding = (parseInt(this.icon.nativeElement.style.fontSize, 0) / 3) + 'px';*/
        }
        else if (this.afterInit === false) {
            this.afterInit = true;
        }
    }
    ngAfterViewInit() {
        if (this.afterInit) {
            this.ngOnInit();
        }
    }
    getRatio() {
    }
}
NameAvatarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: NameAvatarComponent, deps: [{ token: TableService }], target: i0.ɵɵFactoryTarget.Component });
NameAvatarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: NameAvatarComponent, selector: "name-avatar", inputs: { src: "src", fontSize: "fontSize", textSize: "textSize" }, viewQueries: [{ propertyName: "icon", first: true, predicate: ["avatar"], descendants: true, static: true }], ngImport: i0, template: "<div [ngStyle]=\"src && src.includes('assets') && {'display': 'none'}\" #avatar>\n    {{letter}}\n</div>\n\n<img [src]=\"src\" [ngStyle]=\"{'width': fontSize || '44px', 'height': fontSize || '44px',  'vertical-align': 'middle', 'border-radius': _borderRadius}\" *ngIf=\"src && src.includes('assets')\" />", styles: ["div{align-items:center;justify-content:center;padding:0!important}\n"], directives: [{ type: i21.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { type: i21.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: NameAvatarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'name-avatar', template: "<div [ngStyle]=\"src && src.includes('assets') && {'display': 'none'}\" #avatar>\n    {{letter}}\n</div>\n\n<img [src]=\"src\" [ngStyle]=\"{'width': fontSize || '44px', 'height': fontSize || '44px',  'vertical-align': 'middle', 'border-radius': _borderRadius}\" *ngIf=\"src && src.includes('assets')\" />", styles: ["div{align-items:center;justify-content:center;padding:0!important}\n"] }]
        }], ctorParameters: function () { return [{ type: TableService }]; }, propDecorators: { src: [{
                type: Input
            }], fontSize: [{
                type: Input
            }], textSize: [{
                type: Input
            }], icon: [{
                type: ViewChild,
                args: ['avatar', { static: true }]
            }] } });

class PngIconComponent {
    constructor() {
        this.fontSize = '24px';
        this._padding = '5px 13px';
        this._display = 'inline-flex';
        this._size = 'cover';
    }
    ngOnInit() {
        if (this.src) {
            this.icon.nativeElement.style.backgroundImage = `url(${this.src})`;
            this.icon.nativeElement.style.backgroundSize = this._size;
            this.icon.nativeElement.style.display = this._display;
            this.icon.nativeElement.style.width = this.fontSize;
            this.icon.nativeElement.style.height = this.fontSize;
            this.icon.nativeElement.style.padding = this._padding;
            if (this.color) {
                this.icon.nativeElement.style.color = this.color;
            }
        }
    }
}
PngIconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PngIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PngIconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: PngIconComponent, selector: "png-icon", inputs: { src: "src", fontSize: "fontSize", color: "color" }, viewQueries: [{ propertyName: "icon", first: true, predicate: ["icon"], descendants: true, static: true }], ngImport: i0, template: "<span #icon>\n\n</span>", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PngIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'png-icon', template: "<span #icon>\n\n</span>", styles: [""] }]
        }], ctorParameters: function () { return []; }, propDecorators: { src: [{
                type: Input
            }], fontSize: [{
                type: Input
            }], color: [{
                type: Input
            }], icon: [{
                type: ViewChild,
                args: ['icon', { static: true }]
            }] } });

class OriginComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        const list = this.service.settingConfig.origin; /*[{
            "label": "Web",
            "data": "assets/icons/nowteam/Web.png"
        }, {
            "label": "PRTG",
            "data": "assets/icons/nowteam/PRTG.png"
        }, {
            "label": "Mail",
            "data": "assets/icons/nowteam/Mail.png"
        }, {
            "label": "Téléphone",
            "data": "assets/icons/nowteam/Telephone.png"
        }, {
            "label": "Bot",
            "data": "assets/icons/nowteam/Bot.png"
        }];*/
        const flter = list.filter((e) => {
            return this.icon.includes(e.label);
        });
        this.iconSrc = flter && flter.length && flter[0].data ? flter[0].data : '';
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
}
OriginComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: OriginComponent, deps: [{ token: TableService }], target: i0.ɵɵFactoryTarget.Component });
OriginComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: OriginComponent, selector: "icon-origin", inputs: { icon: "icon" }, usesOnChanges: true, ngImport: i0, template: "<png-icon style=\"margin : auto; text-align: center\" matTooltip=\"{{this.icon}}\" [src]=\"this.iconSrc\"></png-icon>", styles: [""], components: [{ type: PngIconComponent, selector: "png-icon", inputs: ["src", "fontSize", "color"] }], directives: [{ type: i2$1.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: OriginComponent, decorators: [{
            type: Component,
            args: [{ selector: 'icon-origin', template: "<png-icon style=\"margin : auto; text-align: center\" matTooltip=\"{{this.icon}}\" [src]=\"this.iconSrc\"></png-icon>", styles: [""] }]
        }], ctorParameters: function () { return [{ type: TableService }]; }, propDecorators: { icon: [{
                type: Input
            }] } });

const db = {
    ad: 'ad',
    and: 'ad',
    andorra: 'ad',
    ae: 'ae',
    are: 'ae',
    'united-arab-emirates-(the)': 'ae',
    af: 'af',
    afg: 'af',
    afghanistan: 'af',
    ag: 'ag',
    atg: 'ag',
    'antigua-and-barbuda': 'ag',
    al: 'al',
    alb: 'al',
    albania: 'al',
    am: 'am',
    arm: 'am',
    armenia: 'am',
    ao: 'ao',
    ago: 'ao',
    angola: 'ao',
    ar: 'ar',
    arg: 'ar',
    argentina: 'ar',
    at: 'at',
    aut: 'at',
    austria: 'at',
    au: 'au',
    aus: 'au',
    australia: 'au',
    az: 'az',
    aze: 'az',
    azerbaijan: 'az',
    ba: 'ba',
    bih: 'ba',
    'bosnia-and-herzegovina': 'ba',
    bb: 'bb',
    brb: 'bb',
    barbados: 'bb',
    bd: 'bd',
    bgd: 'bd',
    bangladesh: 'bd',
    be: 'be',
    bel: 'be',
    belgium: 'be',
    bf: 'bf',
    bfa: 'bf',
    'burkina-faso': 'bf',
    bg: 'bg',
    bgr: 'bg',
    bulgaria: 'bg',
    bh: 'bh',
    bhr: 'bh',
    bahrain: 'bh',
    bi: 'bi',
    bdi: 'bi',
    burundi: 'bi',
    bj: 'bj',
    ben: 'bj',
    benin: 'bj',
    bn: 'bn',
    brn: 'bn',
    'brunei-darussalam': 'bn',
    bo: 'bo',
    bol: 'bo',
    bolivia: 'bo',
    br: 'br',
    bra: 'br',
    brazil: 'br',
    bs: 'bs',
    bhs: 'bs',
    bahamas: 'bs',
    bt: 'bt',
    btn: 'bt',
    bhutan: 'bt',
    bw: 'bw',
    bwa: 'bw',
    botswana: 'bw',
    by: 'by',
    blr: 'by',
    belarus: 'by',
    bz: 'bz',
    blz: 'bz',
    belize: 'bz',
    ca: 'ca',
    can: 'ca',
    canada: 'ca',
    cd: 'cd',
    cod: 'cd',
    'the-democratic-republic-of-the-congo': 'cd',
    cf: 'cf',
    caf: 'cf',
    'central-african-republic': 'cf',
    cg: 'cg',
    cog: 'cg',
    congo: 'cg',
    ch: 'ch',
    che: 'ch',
    switzerland: 'ch',
    ci: 'ci',
    civ: 'ci',
    'cote-d-ivoire': 'ci',
    cl: 'cl',
    chl: 'cl',
    chile: 'cl',
    cm: 'cm',
    cmr: 'cm',
    cameroon: 'cm',
    cn: 'cn',
    chn: 'cn',
    china: 'cn',
    co: 'co',
    col: 'co',
    colombia: 'co',
    cr: 'cr',
    cri: 'cr',
    'costa-rica': 'cr',
    cu: 'cu',
    cub: 'cu',
    cuba: 'cu',
    cv: 'cv',
    cpv: 'cv',
    'cabo-verde [f]': 'cv',
    cy: 'cy',
    cyp: 'cy',
    cyprus: 'cy',
    cz: 'cz',
    cze: 'cz',
    czechia: 'cz',
    de: 'de',
    deu: 'de',
    germany: 'de',
    dj: 'dj',
    dji: 'dj',
    djibouti: 'dj',
    dk: 'dk',
    dnk: 'dk',
    denmark: 'dk',
    dm: 'dm',
    dma: 'dm',
    dominica: 'dm',
    do: 'do',
    dom: 'do',
    'dominican-republic': 'do',
    dz: 'dz',
    dza: 'dz',
    algeria: 'dz',
    ec: 'ec',
    'ec-w': 'ec-w',
    ecu: 'ec',
    ecuador: 'ec',
    ee: 'ee',
    est: 'ee',
    estonia: 'ee',
    eg: 'eg',
    egy: 'eg',
    egypt: 'eg',
    er: 'er',
    eri: 'er',
    eritrea: 'er',
    es: 'es',
    esp: 'es',
    spain: 'es',
    et: 'et',
    eth: 'et',
    ethiopia: 'et',
    fi: 'fi',
    fin: 'fi',
    finland: 'fi',
    fj: 'fj',
    fji: 'fj',
    fiji: 'fj',
    fm: 'fm',
    fsm: 'fm',
    micronesia: 'fm',
    fr: 'fr',
    fra: 'fr',
    france: 'fr',
    ga: 'ga',
    gab: 'ga',
    gabon: 'ga',
    gb: 'gb',
    gbr: 'gb',
    'united-kingdom': 'gb',
    uk: 'gb',
    'great-britain': 'gb',
    gd: 'gd',
    grd: 'gd',
    grenada: 'gd',
    ge: 'ge',
    geo: 'ge',
    georgia: 'ge',
    gh: 'gh',
    gha: 'gh',
    ghana: 'gh',
    gm: 'gm',
    gmb: 'gm',
    gambia: 'gm',
    gn: 'gn',
    gin: 'gn',
    guinea: 'gn',
    gq: 'gq',
    gnq: 'gq',
    'equatorial-guinea': 'gq',
    gr: 'gr',
    grc: 'gr',
    greece: 'gr',
    gt: 'gt',
    gtm: 'gt',
    guatemala: 'gt',
    gw: 'gw',
    gnb: 'gw',
    'guinea-bissau': 'gw',
    gy: 'gy',
    guy: 'gy',
    guyana: 'gy',
    hn: 'hn',
    hnd: 'hn',
    honduras: 'hn',
    hr: 'hr',
    hrv: 'hr',
    croatia: 'hr',
    ht: 'ht',
    hti: 'ht',
    haiti: 'ht',
    hu: 'hu',
    hun: 'hu',
    hungary: 'hu',
    id: 'id',
    idn: 'id',
    indonesia: 'id',
    ie: 'ie',
    irl: 'ie',
    ireland: 'ie',
    il: 'il',
    isr: 'il',
    israel: 'il',
    in: 'in',
    ind: 'in',
    india: 'in',
    iq: 'iq',
    irq: 'iq',
    iraq: 'iq',
    ir: 'ir',
    irn: 'ir',
    iran: 'ir',
    is: 'is',
    isl: 'is',
    iceland: 'is',
    it: 'it',
    ita: 'it',
    italy: 'it',
    jm: 'jm',
    jam: 'jm',
    jamaica: 'jm',
    jo: 'jo',
    jor: 'jo',
    jordan: 'jo',
    jp: 'jp',
    jpn: 'jp',
    japan: 'jp',
    ke: 'ke',
    ken: 'ke',
    kenya: 'ke',
    kg: 'kg',
    kgz: 'kg',
    kyrgyzstan: 'kg',
    kh: 'kh',
    khm: 'kh',
    cambodia: 'kh',
    ki: 'ki',
    kir: 'ki',
    kiribati: 'ki',
    km: 'km',
    com: 'km',
    comoros: 'km',
    kn: 'kn',
    kna: 'kn',
    'saint-kitts-and-nevis': 'kn',
    kp: 'kp',
    prk: 'kp',
    'north-korea': 'kp',
    kr: 'kr',
    kor: 'kr',
    'south-korea': 'kr',
    kw: 'kw',
    kwt: 'kw',
    kuwait: 'kw',
    kz: 'kz',
    kaz: 'kz',
    kazakhstan: 'kz',
    la: 'la',
    lao: 'la',
    laos: 'la',
    lb: 'lb',
    lbn: 'lb',
    lebanon: 'lb',
    lc: 'lc',
    lca: 'lc',
    'saint-lucia': 'lc',
    li: 'li',
    lie: 'li',
    liechtenstein: 'li',
    lk: 'lk',
    lka: 'lk',
    'sri-lanka': 'lk',
    lr: 'lr',
    lbr: 'lr',
    liberia: 'lr',
    ls: 'ls',
    lso: 'ls',
    lesotho: 'ls',
    lt: 'lt',
    ltu: 'lt',
    lithuania: 'lt',
    lu: 'lu',
    lux: 'lu',
    luxembourg: 'lu',
    lv: 'lv',
    lva: 'lv',
    latvia: 'lv',
    ly: 'ly',
    lby: 'ly',
    libya: 'ly',
    ma: 'ma',
    mar: 'ma',
    morocco: 'ma',
    mc: 'mc',
    mco: 'mc',
    monaco: 'mc',
    md: 'md',
    mda: 'md',
    moldova: 'md',
    me: 'me',
    mne: 'me',
    montenegro: 'me',
    mg: 'mg',
    mdg: 'mg',
    madagascar: 'mg',
    mh: 'mh',
    mhl: 'mh',
    'marshall-islands': 'mh',
    mk: 'mk',
    mkd: 'mk',
    'north-macedonia': 'mk',
    ml: 'ml',
    mli: 'ml',
    mali: 'ml',
    mm: 'mm',
    mmr: 'mm',
    myanmar: 'mm',
    mn: 'mn',
    mng: 'mn',
    mongolia: 'mn',
    mr: 'mr',
    mrt: 'mr',
    mauritania: 'mr',
    mt: 'mt',
    mlt: 'mt',
    malta: 'mt',
    mu: 'mu',
    mus: 'mu',
    mauritius: 'mu',
    mv: 'mv',
    mdv: 'mv',
    maldives: 'mv',
    mw: 'mw',
    mwi: 'mw',
    malawi: 'mw',
    mx: 'mx',
    mex: 'mx',
    mexico: 'mx',
    my: 'my',
    mys: 'my',
    malaysia: 'my',
    mz: 'mz',
    moz: 'mz',
    mozambique: 'mz',
    na: 'na',
    nam: 'na',
    namibia: 'na',
    ne: 'ne',
    ner: 'ne',
    niger: 'ne',
    ng: 'ng',
    nga: 'ng',
    nigeria: 'ng',
    ni: 'ni',
    nic: 'ni',
    nicaragua: 'ni',
    nl: 'nl',
    nld: 'nl',
    netherlands: 'nl',
    no: 'no',
    nor: 'no',
    norway: 'no',
    np: 'np',
    npl: 'np',
    nepal: 'np',
    nr: 'nr',
    nru: 'nr',
    nauru: 'nr',
    nz: 'nz',
    nzl: 'nz',
    'new-zealand': 'nz',
    om: 'om',
    omn: 'om',
    oman: 'om',
    pa: 'pa',
    pan: 'pa',
    panama: 'pa',
    pe: 'pe',
    per: 'pe',
    peru: 'pe',
    pg: 'pg',
    png: 'pg',
    'papua-new-guinea': 'pg',
    ph: 'ph',
    phl: 'ph',
    philippines: 'ph',
    pk: 'pk',
    pak: 'pk',
    pakistan: 'pk',
    pl: 'pl',
    pol: 'pl',
    poland: 'pl',
    pt: 'pt',
    prt: 'pt',
    portugal: 'pt',
    pw: 'pw',
    plw: 'pw',
    palau: 'pw',
    py: 'py',
    pry: 'py',
    paraguay: 'py',
    qa: 'qa',
    qat: 'qa',
    qatar: 'qa',
    ro: 'ro',
    rou: 'ro',
    romania: 'ro',
    rs: 'rs',
    srb: 'rs',
    serbia: 'rs',
    ru: 'ru',
    rus: 'ru',
    russia: 'ru',
    rw: 'rw',
    rwa: 'rw',
    rwanda: 'rw',
    sa: 'sa',
    sau: 'sa',
    'saudi-arabia': 'sa',
    sb: 'sb',
    slb: 'sb',
    'solomon-islands': 'sb',
    sc: 'sc',
    syc: 'sc',
    seychelles: 'sc',
    sd: 'sd',
    sdn: 'sd',
    sudan: 'sd',
    se: 'se',
    swe: 'se',
    sweden: 'se',
    sg: 'sg',
    sgp: 'sg',
    singapore: 'sg',
    si: 'si',
    svn: 'si',
    slovenia: 'si',
    sk: 'sk',
    svk: 'sk',
    slovakia: 'sk',
    sl: 'sl',
    sle: 'sl',
    'sierra-leone': 'sl',
    sm: 'sm',
    smr: 'sm',
    'san-marino': 'sm',
    sn: 'sn',
    sen: 'sn',
    senegal: 'sn',
    so: 'so',
    som: 'so',
    somalia: 'so',
    sr: 'sr',
    sur: 'sr',
    suriname: 'sr',
    ss: 'ss',
    ssd: 'ss',
    'south-sudan': 'ss',
    st: 'st',
    stp: 'st',
    'sao-tome-and-principe': 'st',
    sv: 'sv',
    slv: 'sv',
    'el-salvador': 'sv',
    sy: 'sy',
    syr: 'sy',
    syria: 'sy',
    sz: 'sz',
    swz: 'sz',
    eswatini: 'sz',
    td: 'td',
    tcd: 'td',
    chad: 'td',
    tg: 'tg',
    tgo: 'tg',
    togo: 'tg',
    th: 'th',
    tha: 'th',
    thailand: 'th',
    tj: 'tj',
    tjk: 'tj',
    tajikistan: 'tj',
    tl: 'tl',
    tls: 'tl',
    'timor-leste': 'tl',
    tm: 'tm',
    tkm: 'tm',
    turkmenistan: 'tm',
    tn: 'tn',
    tun: 'tn',
    tunisia: 'tn',
    to: 'to',
    ton: 'to',
    tonga: 'to',
    tr: 'tr',
    tur: 'tr',
    turkey: 'tr',
    tt: 'tt',
    tto: 'tt',
    'trinidad-and-tobago': 'tt',
    tv: 'tv',
    tuv: 'tv',
    tuvalu: 'tv',
    tz: 'tz',
    tza: 'tz',
    tanzania: 'tz',
    ua: 'ua',
    ukr: 'ua',
    ukraine: 'ua',
    ug: 'ug',
    uga: 'ug',
    uganda: 'ug',
    us: 'us',
    usa: 'us',
    'united-states-of-america': 'us',
    uy: 'uy',
    ury: 'uy',
    uruguay: 'uy',
    uz: 'uz',
    uzb: 'uz',
    uzbekistan: 'uz',
    vc: 'vc',
    vct: 'vc',
    'saint-vincent-and-the-grenadines': 'vc',
    ve: 've',
    ven: 've',
    venezuela: 've',
    vn: 'vn',
    vnm: 'vn',
    'viet-nam': 'vn',
    vu: 'vu',
    vut: 'vu',
    vanuatu: 'vu',
    ws: 'ws',
    wsm: 'ws',
    samoa: 'ws',
    ye: 'ye',
    yem: 'ye',
    yemen: 'ye',
    za: 'za',
    zaf: 'za',
    'south-africa': 'za',
    zm: 'zm',
    zmb: 'zm',
    zambia: 'zm',
    zw: 'zw',
    zwe: 'zw',
    zimbabwe: 'zw',
    cc: 'cc',
    cck: 'cc',
    'cocos-islands': 'cc',
    'au-cc': 'cc',
    cx: 'cx',
    cxr: 'cx',
    'christmas-island': 'cx',
    'au-cx': 'cx',
    hm: 'hm',
    hmd: 'hm',
    'heard-island-and-mcdonald-islands': 'hm',
    'au-hm': 'hm',
    nf: 'nf',
    nfk: 'nf',
    'norfolk-island': 'nf',
    'au-nf': 'nf',
    hk: 'hk',
    hkg: 'hk',
    'hong-kong': 'hk',
    'cn-hk': 'hk',
    mo: 'mo',
    mac: 'mo',
    macao: 'mo',
    'cn-mo': 'mo',
    tw: 'tw',
    twn: 'tw',
    taiwan: 'tw',
    'cn-tw': 'tw',
    fo: 'fo',
    fro: 'fo',
    'faroe-islands': 'fo',
    'dk-fo': 'fo',
    gl: 'gl',
    grl: 'gl',
    greenland: 'gl',
    'dk-gl': 'gl',
    ax: 'ax',
    ala: 'ax',
    'aland-islands': 'ax',
    'fi-ax': 'ax',
    bl: 'bl',
    blm: 'bl',
    'saint-barthelemy': 'bl',
    'fr-bl': 'bl',
    gf: 'gf',
    guf: 'gf',
    'french-guiana': 'gf',
    'fr-gf': 'gf',
    gp: 'gp',
    glp: 'gp',
    guadeloupe: 'gp',
    'fr-gp': 'gp',
    mf: 'mf',
    maf: 'mf',
    'saint-martin': 'mf',
    'fr-mf': 'mf',
    mq: 'mq',
    mtq: 'mq',
    martinique: 'mq',
    'fr-mq': 'mq',
    nc: 'nc',
    ncl: 'nc',
    'new-caledonia': 'nc',
    'fr-nc': 'nc',
    pf: 'pf',
    pyf: 'pf',
    'french-polynesia': 'pf',
    'fr-pf': 'pf',
    pm: 'pm',
    spm: 'pm',
    'saint-pierre-and-miquelon': 'pm',
    'fr-pm': 'pm',
    re: 're',
    reu: 're',
    reunion: 're',
    'fr-re': 're',
    tf: 'tf',
    atf: 'tf',
    'french-southern-territories': 'tf',
    'fr-tf': 'tf',
    wf: 'wf',
    wlf: 'wf',
    'wallis-and-futuna': 'wf',
    'fr-wf': 'wf',
    yt: 'yt',
    myt: 'yt',
    mayotte: 'yt',
    'fr-yt': 'yt',
    gg: 'gg',
    ggy: 'gg',
    guernsey: 'gg',
    'gb-gg': 'gg',
    im: 'im',
    imn: 'im',
    'isle-of-man': 'im',
    'gb-im': 'im',
    je: 'je',
    jey: 'je',
    jersey: 'je',
    'gb-je': 'je',
    aw: 'aw',
    abw: 'aw',
    aruba: 'aw',
    'nl-aw': 'aw',
    bq: 'bq',
    bes: 'bq',
    bonaire: 'bq',
    'nl-bq': 'bq',
    cw: 'cw',
    cuw: 'cw',
    curaçao: 'cw',
    'nl-cw': 'cw',
    sx: 'sx',
    sxm: 'sx',
    'sint-maarten': 'sx',
    'nl-sx': 'sx',
    bv: 'bv',
    bvt: 'bv',
    'bouvet-island': 'bv',
    'no-bv': 'bv',
    sj: 'sj',
    sjm: 'sj',
    svalbard: 'sj',
    'no-sj': 'sj',
    ck: 'ck',
    cok: 'ck',
    'cook-islands': 'ck',
    'nz-ck': 'ck',
    nu: 'nu',
    niu: 'nu',
    niue: 'nu',
    'nz-nu': 'nu',
    tk: 'tk',
    tkl: 'tk',
    tokelau: 'tk',
    'nz-tk': 'tk',
    ai: 'ai',
    aia: 'ai',
    anguilla: 'ai',
    'uk-ai': 'ai',
    bm: 'bm',
    bmu: 'bm',
    bermuda: 'bm',
    'uk-bm': 'bm',
    fk: 'fk',
    flk: 'fk',
    'falkland-islands': 'fk',
    'uk-fk': 'fk',
    gi: 'gi',
    gib: 'gi',
    gibraltar: 'gi',
    'uk-gi': 'gi',
    gs: 'gs',
    sgs: 'gs',
    'south-georgia-and-the-south-sandwich-islands': 'gs',
    'uk-gs': 'gs',
    io: 'io',
    iot: 'io',
    'british-indian-ocean-territory': 'io',
    'uk-io': 'io',
    ky: 'ky',
    cym: 'ky',
    'cayman-islands': 'ky',
    'uk-ky': 'ky',
    ms: 'ms',
    msr: 'ms',
    montserrat: 'ms',
    'uk-ms': 'ms',
    pn: 'pn',
    pcn: 'pn',
    pitcairn: 'pn',
    'uk-pn': 'pn',
    sh: 'sh',
    shn: 'sh',
    'saint-helena': 'sh',
    'uk-sh': 'sh',
    tc: 'tc',
    tca: 'tc',
    'turks-and-caicos-islands': 'tc',
    'uk-tc': 'tc',
    vg: 'vg',
    vgb: 'vg',
    'british-virgin-islands': 'vg',
    'uk-vg': 'vg',
    as: 'as',
    asm: 'as',
    'american-samoa': 'as',
    'us-as': 'as',
    gu: 'gu',
    gum: 'gu',
    guam: 'gu',
    'us-gu': 'gu',
    mp: 'mp',
    mnp: 'mp',
    'northern-mariana-islands': 'mp',
    'us-mp': 'mp',
    pr: 'pr',
    pri: 'pr',
    'puerto-rico': 'pr',
    'us-pr': 'pr',
    um: 'um',
    umi: 'um',
    'united-states-minor-outlying-islands': 'um',
    'us-um': 'um',
    vi: 'vi',
    vir: 'vi',
    'us-virgin-islands': 'vi',
    'us-vi': 'vi',
    aq: 'aq',
    ata: 'aq',
    antarctica: 'aq',
    eh: 'eh',
    esh: 'eh',
    'western-sahara': 'eh',
    ps: 'ps',
    pse: 'ps',
    palestine: 'ps',
    va: 'va',
    vat: 'va',
    'holy-see': 'va',
    'vatican-city': 'va',
};

class NgxFlagsComponent {
    constructor() {
        this.size = 48;
        this.class = '';
        this.database = db;
        this.countryCode = '';
    }
    ngOnChanges(changes) {
        this.setImage();
    }
    setImage() {
        this.imageUrl = `assets/flags/${this.getFlag(this.getCode())}.svg`;
        this.style = {
            borderRadius: this.getFormat() == FORMAT.ROUND ? '9999px' : '0%',
            width: `10px`,
            height: '10px',
            marginRight: '5px',
            backgroundImage: `url("${this.imageUrl}")`,
        };
    }
    getSize() {
        return isNaN(+this.size) ? +SIZE[this.size.toUpperCase()] : this.size;
    }
    getFormat() {
        return this.format ? this.format.toLowerCase() : FORMAT.NONE;
    }
    getCode() {
        return this.country.toLowerCase();
    }
    getFlag(code) {
        return this.database[code.toLowerCase()];
    }
}
NgxFlagsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: NgxFlagsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgxFlagsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: NgxFlagsComponent, selector: "flag", inputs: { country: "country", format: "format", size: "size", class: "class" }, usesOnChanges: true, ngImport: i0, template: `<div *ngIf="this.country" [style]="this.style" [ngClass]="['ngx-flag', this.class]"></div>`, isInline: true, styles: [".ngx-flag{display:inline-block;background-repeat:no-repeat;background-position:center;background-size:cover}\n"], directives: [{ type: i21.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i21.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: NgxFlagsComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'flag',
                    template: `<div *ngIf="this.country" [style]="this.style" [ngClass]="['ngx-flag', this.class]"></div>`,
                    styles: [
                        `
      .ngx-flag {
        display: inline-block;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      }
    `,
                    ],
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { country: [{
                type: Input
            }], format: [{
                type: Input
            }], size: [{
                type: Input
            }], class: [{
                type: Input
            }] } });
var FORMAT;
(function (FORMAT) {
    FORMAT["NONE"] = "none";
    FORMAT["ROUND"] = "round";
    FORMAT["SQUARE"] = "square";
})(FORMAT || (FORMAT = {}));
var SIZE;
(function (SIZE) {
    SIZE[SIZE["XXS"] = 8] = "XXS";
    SIZE[SIZE["XS"] = 16] = "XS";
    SIZE[SIZE["S"] = 24] = "S";
    SIZE[SIZE["M"] = 32] = "M";
    SIZE[SIZE["L"] = 48] = "L";
    SIZE[SIZE["XL"] = 64] = "XL";
    SIZE[SIZE["XXL"] = 96] = "XXL";
})(SIZE || (SIZE = {}));

class PhoneDisplayComponent {
    constructor(fb) {
        this.fb = fb;
        this.flag = '';
    }
    ngOnInit() {
        this.display = this.normalize(this.number);
        this.flag = (this.number && this.number != '' && isValidPhoneNumber(this.number) ? parsePhoneNumber(this.number).country : 'FR');
        this.flag = !this.number ? '' : this.flag;
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
    normalize(str) {
        if (str && isValidPhoneNumber(str)) {
            return parsePhoneNumber(str).formatNational();
        }
        else if (str) {
            const phone = parsePhoneNumber(str, 'FR');
            if (phone.isValid()) {
                return phone.formatNational();
            }
            else {
                return '';
            }
        }
        else {
            return '';
        }
        str = (str || '').replace(/[^\d]/g, "");
        if (str.length == 10) {
            //reformat and return phone number
            return str.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "(+33) $1.$2.$3.$4.$5");
        }
        else if (str.length > 10 && str.length <= 13) {
            if (str.length === 11) {
                //str = '0'+str;
            }
            //if ( str.length === 13 && str.includes('+')) {
            let tmp = str.slice(2, 3);
            let end = str.slice(3, str.length);
            str = '0' + tmp + end;
            //}
            //return str.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "(+$1) $2.$3.$4.$5.$6");
            return str.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "$1.$2.$3.$4.$5");
        }
        return null;
    }
}
PhoneDisplayComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PhoneDisplayComponent, deps: [{ token: i1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component });
PhoneDisplayComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: PhoneDisplayComponent, selector: "app-phone-display", inputs: { number: "number" }, usesOnChanges: true, ngImport: i0, template: "<flag [country]=\"flag\"></flag> <strong>{{display || '-'}}</strong>\n", styles: [""], components: [{ type: NgxFlagsComponent, selector: "flag", inputs: ["country", "format", "size", "class"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PhoneDisplayComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-phone-display', template: "<flag [country]=\"flag\"></flag> <strong>{{display || '-'}}</strong>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1.FormBuilder }]; }, propDecorators: { number: [{
                type: Input
            }] } });

class PngIconModule {
}
PngIconModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PngIconModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PngIconModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PngIconModule, declarations: [PngIconComponent], imports: [CommonModule], exports: [PngIconComponent] });
PngIconModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PngIconModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PngIconModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [PngIconComponent],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        PngIconComponent
                    ]
                }]
        }] });

class PriorityComponent {
    constructor(service) {
        this.service = service;
        this.label = '';
    }
    ngOnInit() {
        const list = this.service.settingConfig.priority; /*= [{
            "label": "5 - Critique (Production)",
            "data": "assets/icons/nowteam/critiqueprod.png"
        }, {
            "label": "4 - Critique",
            "data": "assets/icons/nowteam/critique.png"
        }, {
            "label": "3 - Urgente",
            "data": "assets/icons/nowteam/urgent.png"
        }, {
            "label": "2 - Normale",
            'data': "assets/icons/nowteam/normal.png"
        }, {
            "label": "1 - Basse",
            "data": "assets/icons/nowteam/basse.png"
        }];*/
        //console.log(this.icon);
        //console.log(this.iconLabel);
        this.iconSrc = "assets/icons/nowteam/" + this.icon + ".png";
        if (!this.iconLabel) {
            this.label = '';
        }
        else if (this.iconLabel.indexOf('-') == -1) {
            this.label = this.iconLabel;
        }
        else {
            this.label = this.iconLabel.split('-')[1];
        }
        switch (this.icon) {
            case 'Bleu':
                this.iconSrc = 'now-low';
                break;
            case 'Vert':
                this.iconSrc = 'now-normal';
                break;
            case 'Orange':
                this.iconSrc = 'now-urgent';
                break;
            case 'Rouge':
                this.iconSrc = 'now-critic';
                break;
            case 'Noir':
                this.iconSrc = 'now-vip';
                break;
        }
        /*if (!this.icon) {
            this.iconSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAxCAYAAABDEFA9AAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAK6ADAAQAAAABAAAAMQAAAABnROrhAAAGVUlEQVRoBe1Ya0wUVxQ+d3ZXgQUxKot9wGJEk7KaAkbcVQM0qa3WNGKr1voqxD6MjdE2prFtGumftkkTK20TkzZpMCak1NZHU6GNL1hEQas8dFEpVXloykNhQVCBndtzV2ec3ZmdWXaWNibeH3PvPec753xz5sy9d4bAKDeLZUo8RBhzgJCFhNJkADKZEojFsDcB6D9AST0F/hDccZd0dnbeVqND1JR6dBOenJpgNBo+Q0KrCTZNX5QO8BR2cIO9X7S3t/cr4bWdKFlpyCwJ0zYAR75G5yYNqIKadlDKv9LR8nelv5LzF+idI9EvCUd2hUaURScWQrij8QnJS/y5hDWz8YnTPwcC2/yDhDKnmF4C5IX2lsajgn3YyMYlJi/nCPeT4DhQbzQaYeKECdDZ1QU8zweCeeUUqJtQko6ErzBBWMogenJyHAek0BtB4WIwGOCNNa9DxZFSuHapDupOV0Dz5XpwHimB3LWrwGRSLm3MbCwF2CO4DEtmLYnTduELv0FwKu3ZQlC85wfInD9XKvYZO0+chJXr1gfMNOVhaUdr4wGDj1UIk7ikpMmEGooCLU9v5a2DvHWrRc+9vX1QfeYsxMREQ2RkpFduTUyAW7e6oaauXsRJB5jRqf3um9/rLgPCm5Yg0YB+5s+1i3HP1dRBSrodVqzJA1u6A867GkTdPMdDnCgUBgRmT7JanzAK85B7QmRLjNRX8S/74fCxMq+IZW54eNg7xrcd2tpuwExbinduNKlT4XjTUnWE143GhdLpuJUGBJX8flimS7ImwkcfvA+LXnxe1B0q/UMcKw4ImamfLIGJis4DCN/MXQsfb9sKkRERIqKo+Gf49bdSca40wHQkEGd1Qw4+EWuWPaVACVRe1bAZE9ecOSflgJLeYp0+iI6U1x4/A0tcHNSfOSFKW1rbYOuHnwBbDTQbhbMcULqfAN3prGrYIjU4XnN1fHmVq4bpGKai2rVdqmfjytOu1HExMYFrwM9gniNDlLh7eyFrweLgiDIrQm9LyoB+5Tzl6sl02AoZieF7A3gTkCR4x+znO6tcSZ6xUe89lzalp+LUxexh3rN/4qRJxr6+PgGm2t+5ew+EGr7U2Ah37t5VxfspbxAkgJvE/YbbWw9uavkAfD7uHuMFubRHcC3eZqE346jY+c0OqDxRIYWojseMMUG0ORpudXer4vyVuDFv8lkfGUFGIhBR5gCznSoQZfPZsx4+WjZXa+lpz8L5P09663bj2+vVoDIdR6HEh6wMEYQgPW0W7u2SalKxWbJ4EcSOGwfsMLNyxasqSF8Vrsnn2GFGN1m2Zb608GVf7wFmBw+VQo/bDUNDQ1BUvDcASi7G9+VbJvWpWTksOEl/fz9s3PQODGCv1VjNmqPM0N2Dr0cQDYlWdrQ0zmdQ3ZllTsxmM7y7YRMbarbBwaHgieJ5lqdkheA0LGSZs4yMObB82UrBr+4e69TDe2hOV+vlG4Iz+ZtBoRyXpzIBMJJ++bLX8Aug3VFWdnwB2gW9WfjHwEc/jMvoqq62pjKpTkaWEc1y2PKloJGO459Ktj9tTTzVdr1tpKaIp9UeAnk3m5su+hvLyBJCs5S2Vn9DrbnHw8OxsqOwb99ewJ8XWnDATLbjZXtHy1/fIVjcqKSGYVkNpA79x+zcWltbAz8WF7muXG3qkuqR0XVKyQVC+bMdrU3HUHf/sCsFScajTlaIhZw/1VteYVsNBFKj2T9SZGUvGNZRQZbdtkVPhthZ2HBvYGTHqiACyjNLIbh9UMU5O++qqENWyTKLJ/LNzqoLWSF7REMa4CysxyezlZF9cJbN1uM45K1LI6i8DDQM/k/1I0VWVgZYcM2YvWu6M0hAV90rxZeRxaWrUO9OwwJJP0SVAocik5HFHxpW5+mL+rOi8aM4LGTRSS7+KM0Nxdlo2zxSL9hjsqNVDo8z+19m9qBaMFyH3ahXxdzfWGidmp9QdD5lgEQKMu22HAyWp+yM1hk5yGYY9pkSCOOJiEo1UUPOgxtThoUgfUiW0t3CoZv9ozVwkOYTDP8neMaas+dl2GpZHO8uhzfli6G7M+0zUtl51uF45hq7MR99CASlJvgnEQpQcNATYfb5OmCk+LFRSUzHsog3kO1/qGY3xQjhkyhnTyPTMSMX8WJjPgiFLUxvNMABURHi4F8JNiqcf6QfuAAAAABJRU5ErkJggg==';
        } else {
            const data: any = list.filter((e: any) => {
                return this.icon.includes(e.label);
            });
            if (data && data.length) {
                this.iconSrc = data[0].data
            }
        }*/
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
}
PriorityComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PriorityComponent, deps: [{ token: TableService }], target: i0.ɵɵFactoryTarget.Component });
PriorityComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: PriorityComponent, selector: "icon-priority", inputs: { icon: "icon", iconLabel: "iconLabel" }, usesOnChanges: true, ngImport: i0, template: "<!--<png-icon matTooltip=\"{{this.iconLabel}}\" [src]=\"this.iconSrc\"></png-icon>-->\n<!--<png-icon [src]=\"this.iconSrc\"></png-icon>-->\n<span matTooltip=\"{{this.label}}\" class=\"{{this.iconSrc}}\">\n    {{this.label}}\n</span>", styles: [".now-low{background:rgba(17,150,3,.56) 0% 0% no-repeat padding-box!important;border-radius:5px;border:none!important;text-align:left;color:#3c5905!important;font: 14px/36px Nexa Text;letter-spacing:0px;min-width:100%!important;padding:0 10px;overflow:hidden;white-space:nowrap;max-width:80px!important;text-overflow:ellipsis;display:inline-block;height:36px;text-align:center}.now-normal{background:rgba(170,238,230,.56) 0% 0% no-repeat padding-box!important;border-radius:5px;border:none!important;text-align:left;font: 14px/36px Nexa Text;letter-spacing:0px;color:#169d8a!important;min-width:100%!important;padding:0 10px;overflow:hidden;white-space:nowrap;max-width:80px!important;text-overflow:ellipsis;display:inline-block;height:36px;text-align:center}.now-urgent{background:rgba(243,161,36,.56) 0% 0% no-repeat padding-box!important;border-radius:5px;border:none!important;text-align:left;font: 14px/36px Nexa Text;letter-spacing:0px;color:#c48e3b!important;min-width:100%!important;padding:0 10px;overflow:hidden;white-space:nowrap;max-width:80px!important;text-overflow:ellipsis;display:inline-block;height:36px;text-align:center}.now-critic{background:rgba(215,5,43,.56) 0% 0% no-repeat padding-box!important;border-radius:5px;border:none!important;text-align:left;font: 14px/36px Nexa Text;letter-spacing:0px;color:#7c1c2d!important;min-width:100%!important;padding:0 10px;overflow:hidden;white-space:nowrap;max-width:80px!important;text-overflow:ellipsis;display:inline-block;height:36px;text-align:center}.now-vip{background:rgba(120,125,130,.56) 0% 0% no-repeat padding-box!important;border-radius:5px;border:none!important;text-align:left;font: 12px/36px Nexa Text;letter-spacing:0px;color:#171f26!important;min-width:100%!important;padding:0 10px;overflow:hidden;white-space:nowrap;max-width:80px!important;text-overflow:ellipsis;display:inline-block;height:36px;text-align:center}\n"], directives: [{ type: i2$1.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PriorityComponent, decorators: [{
            type: Component,
            args: [{ selector: 'icon-priority', template: "<!--<png-icon matTooltip=\"{{this.iconLabel}}\" [src]=\"this.iconSrc\"></png-icon>-->\n<!--<png-icon [src]=\"this.iconSrc\"></png-icon>-->\n<span matTooltip=\"{{this.label}}\" class=\"{{this.iconSrc}}\">\n    {{this.label}}\n</span>", styles: [".now-low{background:rgba(17,150,3,.56) 0% 0% no-repeat padding-box!important;border-radius:5px;border:none!important;text-align:left;color:#3c5905!important;font: 14px/36px Nexa Text;letter-spacing:0px;min-width:100%!important;padding:0 10px;overflow:hidden;white-space:nowrap;max-width:80px!important;text-overflow:ellipsis;display:inline-block;height:36px;text-align:center}.now-normal{background:rgba(170,238,230,.56) 0% 0% no-repeat padding-box!important;border-radius:5px;border:none!important;text-align:left;font: 14px/36px Nexa Text;letter-spacing:0px;color:#169d8a!important;min-width:100%!important;padding:0 10px;overflow:hidden;white-space:nowrap;max-width:80px!important;text-overflow:ellipsis;display:inline-block;height:36px;text-align:center}.now-urgent{background:rgba(243,161,36,.56) 0% 0% no-repeat padding-box!important;border-radius:5px;border:none!important;text-align:left;font: 14px/36px Nexa Text;letter-spacing:0px;color:#c48e3b!important;min-width:100%!important;padding:0 10px;overflow:hidden;white-space:nowrap;max-width:80px!important;text-overflow:ellipsis;display:inline-block;height:36px;text-align:center}.now-critic{background:rgba(215,5,43,.56) 0% 0% no-repeat padding-box!important;border-radius:5px;border:none!important;text-align:left;font: 14px/36px Nexa Text;letter-spacing:0px;color:#7c1c2d!important;min-width:100%!important;padding:0 10px;overflow:hidden;white-space:nowrap;max-width:80px!important;text-overflow:ellipsis;display:inline-block;height:36px;text-align:center}.now-vip{background:rgba(120,125,130,.56) 0% 0% no-repeat padding-box!important;border-radius:5px;border:none!important;text-align:left;font: 12px/36px Nexa Text;letter-spacing:0px;color:#171f26!important;min-width:100%!important;padding:0 10px;overflow:hidden;white-space:nowrap;max-width:80px!important;text-overflow:ellipsis;display:inline-block;height:36px;text-align:center}\n"] }]
        }], ctorParameters: function () { return [{ type: TableService }]; }, propDecorators: { icon: [{
                type: Input
            }], iconLabel: [{
                type: Input
            }] } });

class YesNoComponent {
    constructor(service) {
        this.service = service;
        this.displayNo = false;
        this.displayYes = true;
        this.css = {};
    }
    ngOnInit() {
        this.css.maxWidth = String((this.size || 40)) + 'px';
        this.css.maxHeight = String((this.size || 40)) + 'px';
        const params = this.service.settingConfig.yesNo; /*{
                "true": "/assets/icons/status/actif.png",
                "false": "/assets/icons/status/incatif.png"
            }*/
        if (this.valid && this.displayYes) {
            this.icon = params["true"];
        }
        else if (this.displayNo) {
            this.icon = params["false"];
        }
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
}
YesNoComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: YesNoComponent, deps: [{ token: TableService }], target: i0.ɵɵFactoryTarget.Component });
YesNoComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: YesNoComponent, selector: "app-yes-nox", inputs: { valid: "valid", displayNo: "displayNo", displayYes: "displayYes", size: "size" }, usesOnChanges: true, ngImport: i0, template: "<span [style]=\"css\" >\n    <img [src]=\"icon\" [style]=\"css\">\n</span>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: YesNoComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-yes-nox', template: "<span [style]=\"css\" >\n    <img [src]=\"icon\" [style]=\"css\">\n</span>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: TableService }]; }, propDecorators: { valid: [{
                type: Input
            }], displayNo: [{
                type: Input
            }], displayYes: [{
                type: Input
            }], size: [{
                type: Input
            }] } });

class CoreMatTable extends DataSource {
    constructor(data, sortRules, rangeRules, size = 20, detailRaws = true, emptyRow = false, filterT = {}) {
        super();
        this.totalElements = 0;
        this.number = 0;
        this.startWith = 0;
        this._totalElements = new BehaviorSubject(0);
        this.emptyRow = false;
        this.filterTable = {};
        this.size = size;
        this.data = [...data];
        this.dataAfterSearch = [];
        this.backUpData = [...data];
        //this.totalElements = data.length;
        this.emptyRow = emptyRow;
        this.filterTable = filterT;
        this.pageSort = new BehaviorSubject(sortRules);
        this.pageFilterDate = new BehaviorSubject(null);
        this.pageFilter = new BehaviorSubject('');
        this.pageNumber = new BehaviorSubject(this.startWith);
        this._totalElements.pipe(debounceTime(200)).subscribe((itemsLength) => {
            console.log('_totalElements', itemsLength);
            this.totalElements = itemsLength;
        });
        this.page$ = this.pageSort.pipe(switchMap(sortAction => this.pageFilter.pipe(debounceTime(500))
            .pipe(switchMap(filter => this.pageFilterDate.pipe(switchMap(range => this.pageNumber.pipe(switchMap(page => from([{
                content: this.slice(this.sortData(this.filterDataObject(this.filterData(this.filterDateRange(this.data, range), filter), this.filterTable), sortAction), page, this.size, detailRaws)
            }])), share())))))));
    }
    filterDateRange(data, range) {
        if (!range || (!range.valueStart && !range.valueEnd)) {
            return data;
        }
        else if (data && data.length) {
            return data.filter((e) => {
                if (range.valueStart && range.valueEnd) {
                    return new Date(e[range.active]) >= new Date(range.valueStart)
                        && new Date(e[range.active]) <= new Date(range.valueEnd);
                }
                else if (range.valueStart && !range.valueEnd) {
                    return new Date(e[range.active]) >= new Date(range.valueStart);
                }
                else if (!range.valueStart && range.valueEnd) {
                    return new Date(e[range.active]) <= new Date(range.valueEnd);
                }
            });
        }
        else {
            return this.data;
        }
    }
    ponderation(str, searchKey) {
        let stack = str.split(' ');
        let pond = 0;
        for (let s of stack) {
            let search = s.replace(new RegExp(' ', 'g'), '');
            if (search && search.includes(searchKey)) {
                pond++;
            }
        }
        return pond;
    }
    filterData(data, filter) {
        if (data.length === 0 && this.data) {
            data = this.data;
        }
        const result = [];
        if (typeof filter === 'object') {
            return this.filterDataObject(data, filter);
        }
        else if (filter && filter.replace(/[^a-zA-Z ]/g, ' ')) {
            for (let e of data) {
                e.pond = 0;
                const dataRaw = JSON.stringify(e).toLowerCase()
                    .replace(/[^a-zA-Z0-9 ]/g, ' ');
                const stack = filter.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, ' ')
                    .split(' ');
                let combination = 0;
                for (let k of stack) {
                    if (dataRaw.includes(k)) {
                        const pond = this.ponderation(dataRaw, k);
                        if (!e.pond) {
                            e.pond = 0;
                        }
                        e.pond += pond;
                        combination++;
                    }
                }
                if (e.pond && combination === stack.length) {
                    result.push(e);
                }
            }
            this.dataAfterSearch = result.filter((e => e.pond)).sort((a, b) => a > b ? 1 : (a < b ? -1 : 0));
            this._totalElements.next(this.dataAfterSearch.length);
            return result.filter((e => e.pond)).sort((a, b) => a > b ? 1 : (a < b ? -1 : 0));
        }
        else {
            this.dataAfterSearch = data;
            this._totalElements.next(this.dataAfterSearch.length);
            return data;
        }
    }
    filterDataObject(data, filter) {
        if (data.length === 0 && this.data) {
            //data = this.data;
            return data;
        }
        const result = [];
        if (filter && Object.keys(filter).length > 0) {
            for (let e of data) {
                let ok = true;
                e.pond = 0;
                Object.keys(filter).forEach(key => {
                    if (filter[key].includes(e[key])) {
                        //e.pond += 1;
                    }
                    else {
                        //e.pond = 0;
                        ok = false;
                    }
                });
                //if (e.pond) {
                if (ok) {
                    result.push(e);
                }
            }
            this.dataAfterSearch = result;
            this._totalElements.next(this.dataAfterSearch.length);
            return result;
            //return result.filter((e => e.pond)).sort((a, b) => a > b ? 1 : (a < b ? -1 : 0));
        }
        else {
            return data;
        }
    }
    sortData(data, sortAction) {
        if (sortAction.direction !== '') {
            return data.sort((a, b) => {
                if (a === 'empty' || b === 'empty') {
                    return 0;
                }
                return this.compare(a[sortAction.active], b[sortAction.active], sortAction.direction === 'asc');
            });
        }
        else {
            return data;
        }
    }
    compare(a, b, isAsc) {
        if (!a) {
            a = null;
        }
        if (!b) {
            b = null;
        }
        return (((Array.isArray(a) ? a.length : a) > ((Array.isArray(b) ? b.length : b)) ? -1 : ((Array.isArray(b) ? b.length : b)) > ((Array.isArray(a) ? a.length : a)) ? 1 : 0) * (isAsc ? -1 : 1));
    }
    fetch(page) {
        this.pageNumber.next(page);
        this.number = page;
    }
    sortIt(sortIdea) {
        this.pageSort.next(sortIdea);
    }
    filter(myFilter) {
        if (!myFilter && this.data || !myFilter.trim() && this.data) {
            this._totalElements.next(this.data.length);
        }
        this.pageFilter.next(myFilter.toString());
        /*if (!myFilter.target.value || !myFilter.target.value.trim()) {
          this.totalElements = this.data.length;
        }
        this.pageFilter.next(myFilter.target.value);*/
    }
    filterDate(dateFilter) {
        this.pageFilterDate.next(dateFilter);
    }
    connect() {
        return this.page$.pipe(pluck('content'));
    }
    disconnect() {
    }
    slice(data, start = 0, end = 20, detailRow = true) {
        const rows = [];
        if (data.length) {
            data = data.slice(start * end, (start * end) + end);
            let cursor = 1;
            if (this.emptyRow) {
                for (const d of data) {
                    if (rows[cursor - 1] !== 'empty') {
                        rows.push('empty');
                    }
                    rows.push(d);
                    cursor++;
                }
                return rows;
            }
            this._totalElements.next(this.dataAfterSearch.length);
            return rows;
        }
        else {
            this._totalElements.next(this.dataAfterSearch.length);
            return data;
        }
    }
}

/***********************************************************
 **  @project MS_Nowboard                              **
 **  @file ComponentRegistry                                         **
 **  @author Brice Daupiard <brice.daupiard@smartiiz.com>  **
 **  @Date 12/03/2021                                         **
 ***********************************************************/
var CellsComponentList;
(function (CellsComponentList) {
    CellsComponentList["ButtonLink"] = "button-link";
    CellsComponentList["ButtonLinkText"] = "button-link-text";
    CellsComponentList["ButtonClick"] = "button-click";
    CellsComponentList["Priority"] = "priority";
    CellsComponentList["Origin"] = "origin";
    CellsComponentList["NameAvatar"] = "name-avatar";
    CellsComponentList["DateFormat"] = "date-format";
    CellsComponentList["CountRow"] = "count-row";
    CellsComponentList["Gender"] = "gender-avatar";
    CellsComponentList["Phone"] = "phone-display";
    CellsComponentList["YesNo"] = "yes-no-display";
    CellsComponentList["CustomerRank"] = "customer-rank";
    CellsComponentList["ItCategory"] = "it-category";
    CellsComponentList["ItStatus"] = "it-status";
    CellsComponentList["CustomIcon"] = "custom-icon";
    CellsComponentList["PngIcon"] = "png-icon";
    CellsComponentList["CustomCell"] = "custom-cell";
    CellsComponentList["Menu"] = "menu";
})(CellsComponentList || (CellsComponentList = {}));

class TranslateService {
    constructor() {
        this.lang = {
            'fr': {
                'SEARCH': `Recherche...`,
                'OPEN': 'Ouvrir',
                'CANCEL_SEARCH': 'Annuler la recherche',
                'NO_RESULT': 'Aucun résultat correspondant',
                'DETAILS': 'Détails'
            },
            'en': {
                'SEARCH': `Search...`,
                'OPEN': 'Open',
                'CANCEL_SEARCH': 'Cancel search',
                'NO_RESULT': 'No corresponding result',
                'DETAILS': 'Details'
            }
        };
    }
    translate(l, word) {
        return this.lang[l][word];
    }
}
TranslateService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TranslateService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
TranslateService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TranslateService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TranslateService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class ButtonLinkTextComponent {
    constructor(translate) {
        this.translate = translate;
        this.text = '';
        this.class = '';
        this.id = '';
        this.modal = '';
        this.callHandler = new EventEmitter();
        this.open = '';
    }
    ngOnInit() {
        this.open = this.translate.translate(this.lang, 'OPEN');
        if (this.text == 'Action') {
            this.text = this.translate.translate(this.lang, 'DETAILS');
        }
        if (this.modal !== '') {
            this.routerLink = '';
        }
    }
    action() {
        var _a, _b;
        this.callHandler.emit({
            modal: this.modal,
            id: this.id,
            caseNumber: (_a = this.element) === null || _a === void 0 ? void 0 : _a.CaseNumber,
            Vote: (_b = this.element) === null || _b === void 0 ? void 0 : _b.Vote
        });
    }
}
ButtonLinkTextComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ButtonLinkTextComponent, deps: [{ token: TranslateService }], target: i0.ɵɵFactoryTarget.Component });
ButtonLinkTextComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: ButtonLinkTextComponent, selector: "button-link-text", inputs: { lang: "lang", routerLink: "routerLink", text: "text", class: "class", id: "id", modal: "modal", element: "element" }, outputs: { callHandler: "callHandler" }, ngImport: i0, template: "<a [matTooltip]=\"open\"\n    [ngClass]=\"class\"\n    class=\"btn-link-text btn-xs\"\n    [routerLink]=\"routerLink\"\n    [id]=\"id\"\n    (click)=\"action()\"\n>\n    {{ text }}\n</a>", styles: [""], directives: [{ type: i1$1.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo", "routerLink"] }, { type: i2$1.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i21.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ButtonLinkTextComponent, decorators: [{
            type: Component,
            args: [{ selector: 'button-link-text', template: "<a [matTooltip]=\"open\"\n    [ngClass]=\"class\"\n    class=\"btn-link-text btn-xs\"\n    [routerLink]=\"routerLink\"\n    [id]=\"id\"\n    (click)=\"action()\"\n>\n    {{ text }}\n</a>", styles: [""] }]
        }], ctorParameters: function () { return [{ type: TranslateService }]; }, propDecorators: { lang: [{
                type: Input
            }], routerLink: [{
                type: Input
            }], text: [{
                type: Input
            }], class: [{
                type: Input
            }], id: [{
                type: Input
            }], modal: [{
                type: Input
            }], element: [{
                type: Input
            }], callHandler: [{
                type: Output
            }] } });

class CustomCellComponent {
    constructor() { }
    ngOnInit() {
    }
}
CustomCellComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: CustomCellComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CustomCellComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: CustomCellComponent, selector: "lib-custom-cell", inputs: { title: "title", subTitle: "subTitle", class: "class" }, ngImport: i0, template: "<div class=\"custom-cell\" [class]=\"class\">\n    <span>{{title}}</span>\n    <span *ngIf=\"!!subTitle\">{{subTitle}}</span>\n</div>", styles: [""], directives: [{ type: i21.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: CustomCellComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-custom-cell', template: "<div class=\"custom-cell\" [class]=\"class\">\n    <span>{{title}}</span>\n    <span *ngIf=\"!!subTitle\">{{subTitle}}</span>\n</div>", styles: [""] }]
        }], ctorParameters: function () { return []; }, propDecorators: { title: [{
                type: Input
            }], subTitle: [{
                type: Input
            }], class: [{
                type: Input
            }] } });

class MenuComponent {
    constructor(dialog, router) {
        this.dialog = dialog;
        this.router = router;
        this.DialogClose = new EventEmitter();
    }
    ngOnInit() {
    }
    goToLink(path) {
        this.router.navigate([this.interpolate(path, this.Data)]);
    }
    openModal(modal) {
        this.dialog.open(modal, { data: this.Data }).close((result) => {
        });
    }
    interpolate(str, data) {
        return str.replace(/{{([^{}]*)}}/g, (a, b) => {
            const r = data[b];
            return typeof r === 'string' || typeof r === 'number' ? r : a;
        });
    }
}
MenuComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: MenuComponent, deps: [{ token: i1$2.MatDialog }, { token: i1$1.Router }], target: i0.ɵɵFactoryTarget.Component });
MenuComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: MenuComponent, selector: "lib-menu", inputs: { title: "title", MenuList: "MenuList", Data: "Data" }, outputs: { DialogClose: "DialogClose" }, ngImport: i0, template: "<ng-container *ngIf=\"MenuList\">\n  <div mat-button [matMenuTriggerFor]=\"menu\" [title]=\"title\">\n    <png-icon [src]=\"'/assets/nowboard-icon/menu_kebab.svg'\"></png-icon>\n  </div>\n  <mat-menu #menu=\"matMenu\">\n    <ng-container  *ngFor=\"let item of MenuList\">\n      {{item | json}}\n      <ng-container *ngIf=\"item.Type === 'Link'\">\n        <button mat-menu-item (click)=\"goToLink(item.Route)\">\n          <png-icon [src]=\"item.Icon\"></png-icon>\n          <span [innerHTML]=\"item.Label\"></span>\n        </button>\n      </ng-container>\n      <ng-container *ngIf=\"item.Type === 'Modal'\">\n        <button mat-menu-item (click)=\"openModal(item.ComponentModal)\">\n          <png-icon [src]=\"item.Icon\"></png-icon>\n          <span [innerHTML]=\"item.Label\"></span>\n        </button>\n      </ng-container>\n    </ng-container>\n  </mat-menu>\n</ng-container>\n", styles: [""], components: [{ type: PngIconComponent, selector: "png-icon", inputs: ["src", "fontSize", "color"] }, { type: i4.MatMenu, selector: "mat-menu", exportAs: ["matMenu"] }, { type: i4.MatMenuItem, selector: "[mat-menu-item]", inputs: ["disabled", "disableRipple", "role"], exportAs: ["matMenuItem"] }], directives: [{ type: i21.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", exportAs: ["matMenuTrigger"] }, { type: i21.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "json": i21.JsonPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: MenuComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-menu', template: "<ng-container *ngIf=\"MenuList\">\n  <div mat-button [matMenuTriggerFor]=\"menu\" [title]=\"title\">\n    <png-icon [src]=\"'/assets/nowboard-icon/menu_kebab.svg'\"></png-icon>\n  </div>\n  <mat-menu #menu=\"matMenu\">\n    <ng-container  *ngFor=\"let item of MenuList\">\n      {{item | json}}\n      <ng-container *ngIf=\"item.Type === 'Link'\">\n        <button mat-menu-item (click)=\"goToLink(item.Route)\">\n          <png-icon [src]=\"item.Icon\"></png-icon>\n          <span [innerHTML]=\"item.Label\"></span>\n        </button>\n      </ng-container>\n      <ng-container *ngIf=\"item.Type === 'Modal'\">\n        <button mat-menu-item (click)=\"openModal(item.ComponentModal)\">\n          <png-icon [src]=\"item.Icon\"></png-icon>\n          <span [innerHTML]=\"item.Label\"></span>\n        </button>\n      </ng-container>\n    </ng-container>\n  </mat-menu>\n</ng-container>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1$2.MatDialog }, { type: i1$1.Router }]; }, propDecorators: { title: [{
                type: Input
            }], MenuList: [{
                type: Input
            }], Data: [{
                type: Input
            }], DialogClose: [{
                type: Output
            }] } });

class TableComponent {
    constructor(router, route, service, detector, translate, changeDetectorRef) {
        this.router = router;
        this.route = route;
        this.service = service;
        this.detector = detector;
        this.translate = translate;
        this.changeDetectorRef = changeDetectorRef;
        this.displayDetail = false;
        this.btnOverride = false;
        this.callFunction = new EventEmitter();
        this.inputSearch = '';
        this.EmptyRow = false;
        this.blockDetails = false;
        this.clicked = new EventEmitter();
        this.filter = [];
        this.index = 0;
        this.open = '';
        this.search = '';
        this.cancelSearch = '';
        this.noResult = '';
        this.details = '';
        this.showTable = false;
    }
    expand(element) {
        if (this.blockDetails) {
            return;
        }
        if (this.expandedElement === element) {
            this.expandedElement = null;
        }
        else {
            this.expandedElement = element;
        }
        //console.log(this.expandedElement);
    }
    ngOnInit() {
        this.service.emptyRow = this.EmptyRow;
        this.open = this.translate.translate(this.lang, 'OPEN');
        this.search = this.translate.translate(this.lang, 'SEARCH');
        this.cancelSearch = this.translate.translate(this.lang, 'CANCEL_SEARCH');
        this.noResult = this.translate.translate(this.lang, 'NO_RESULT');
        this.details = this.translate.translate(this.lang, 'DETAILS');
        if (this.data) {
            this.expandedElement = false;
            this.data.paginator = this.paginatorCurrent;
            this.data.sort = this.sortCurrent;
            this.data.pageNumber.subscribe((newpage) => {
                if (newpage > 0) {
                    this.router.navigate([], {
                        relativeTo: this.route,
                        queryParams: { page: newpage + 1 },
                        queryParamsHandling: 'merge', // remove to replace all query params by provided
                    });
                }
                else if (newpage === 0) {
                    this.router.navigate([], {
                        relativeTo: this.route,
                        queryParams: { page: null },
                        queryParamsHandling: 'merge', // remove to replace all query params by provided
                    });
                }
                if (this.data && this.data.paginator && this.data.paginator.pageIndex !== newpage) {
                    // this.data.paginator.pageIndex = newpage;
                    console.log('on passe dans la ligne 146', this.data.paginator.pageIndex, newpage);
                }
                this.changeDetectorRef.markForCheck();
            });
            const page = this.route.snapshot.queryParams['page'];
            if (page) {
                const currentPage = Number(page) - 1;
                this.data.startWith = currentPage;
                this.data.fetch(currentPage);
                this.data.number = currentPage;
            }
            this.PrivateColumnDefinitions = this.columnDefinitions;
            this.buildHeaders().catch((err) => console.log('Error build table', err));
            this.service.updateHeader.subscribe((status) => {
                if (status === true) {
                    this.displayedColumns = null;
                    this.columnsToDisplay = null;
                    this.PrivateColumnDefinitions = this.service.displayColumn;
                    console.log('Module table -> New column definitions', this.PrivateColumnDefinitions);
                    this.buildHeaders().catch((err) => console.log('Error build table', err));
                    this.detector.detectChanges();
                }
            });
        }
    }
    ngAfterViewChecked() {
        this.showTable = true;
    }
    buildHeaders() {
        return __awaiter(this, void 0, void 0, function* () {
            this.displayedColumns = yield this.sort();
            if (this.displayedColumns) {
                const tmp = [];
                for (let k of this.displayedColumns) {
                    tmp.push(k.key);
                }
                this.columnsToDisplay = [...tmp];
            }
            //console.log('Module Table New Update Column Definition',  this.columnsToDisplay);
        });
    }
    generateClass(Class) {
        const MyClass = ['default-table-class'];
        for (let c of Class) {
            if (c && c !== '') {
                MyClass.push(c);
            }
        }
        return MyClass;
    }
    sort() {
        return __awaiter(this, void 0, void 0, function* () {
            const compare = (a, b) => {
                return (a.order < b.order ? -1 : (a.order > b.order ? 1 : 0));
            };
            if (this.PrivateColumnDefinitions) {
                return [...this.PrivateColumnDefinitions.sort(compare)];
            }
        });
    }
    buildLink(override, element) {
        if (override.length >= 2) {
            let basePath = override[0];
            for (let i = 1; i < override.length; i++) {
                basePath += '/' + element[override[i]];
            }
            return basePath;
        }
    }
    Join(elem, override, joinKey = '\n') {
        const value = [];
        for (let x in elem) {
            if (override.indexOf(x) > -1) {
                value.push(elem[x]);
            }
        }
        return value.join(joinKey);
    }
    reset() {
        this.data.filter({
            target: {
                value: ''
            }
        });
        return true;
    }
    expandShow(template) {
    }
    ngOnChanges(changes) {
        if ((this.inputSearch.length > 1 || this.inputSearch.length === 0)
            && this.inputSearch.length < 200 && this.data) {
            this.data.filter(this.inputSearch);
            this.data.fetch(0);
        }
        //this.changeDetectorRef.markForCheck();
        if (changes.data && changes.data.isFirstChange()) {
            console.log('Init init');
            this.ngOnInit();
        }
        //
    }
}
TableComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TableComponent, deps: [{ token: i1$1.Router }, { token: i1$1.ActivatedRoute }, { token: TableService }, { token: i0.ChangeDetectorRef }, { token: TranslateService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
TableComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: TableComponent, selector: "ngx-design-table", inputs: { columnDefinitions: "columnDefinitions", displayDetail: "displayDetail", displayComponent: "displayComponent", data: "data", lang: "lang", btnOverride: "btnOverride", inputSearch: "inputSearch", EmptyRow: "EmptyRow", blockDetails: "blockDetails" }, outputs: { callFunction: "callFunction", clicked: "clicked" }, viewQueries: [{ propertyName: "paginatorCurrent", first: true, predicate: ["MatPaginatorCurrent"], descendants: true, static: true }, { propertyName: "sortCurrent", first: true, predicate: ["table"], descendants: true, static: true }], usesOnChanges: true, ngImport: i0, template: "<div class=\"table-wrapper\">\n  <div class=\"row\" style=\"height: 20px;background: transparent!important; box-shadow: none !important\">\n    <div class=\"\">\n      <!--<div class=\"col-lg-12 search-container\">\n        <mat-icon style=\"left: 16%; position: absolute; margin-top: 10px;\">search</mat-icon>\n        <input class=\"search-box\" type=\"text\" [placeholder]=\"search\" [maxLength]=\"100\"\n        [value]=\"inputSearch\"\n        (change)=\"onChange($event)\"\n               (input)=\"((($event.target.value.length > 1 || $event.target.value.length === 0)\n                        && $event.target.value.length < 200)\n                                       ? data.filter($event) : null)\"\n               #filterOngoing>\n        <a class=\"close-search\" *ngIf=\"filterOngoing.value\"\n           [matTooltip]=\"cancelSearch\"\n           (click)=\"reset() && filterOngoing.value = ''\">\n          <img [src]=\"'/assets/icons/search_off-24px.svg'\">\n        </a>\n      </div>-->\n    </div>\n  </div>\n  <!-- Table -->\n  <table mat-table #table=\"matSort\" [dataSource]=\"data \" multiTemplateDataRows matSort class=\"\"\n    *ngIf=\"displayedColumns && columnsToDisplay && data && data.totalElements && showTable\"\n    (matSortChange)=\"data.sortIt($event)\">\n    <ng-container [matColumnDef]=\"column.key\" *ngFor=\"let column of displayedColumns\">\n      <ng-container *ngIf=\"column.sort\">\n        <th mat-header-cell *matHeaderCellDef\n          [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\"\n          mat-sort-header>\n          <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n        </th>\n      </ng-container>\n      <ng-container *ngIf=\"!column.sort\">\n        <!-- Ajouter fonction generate Class -->\n        <ng-container *ngIf=\"column.clickable\">\n          <th mat-header-cell *matHeaderCellDef\n            (click)=\"clicked.emit({key : column.key, statement : (column.statement = !column.statement)})\"\n            [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\"\n            style=\"cursor: pointer;\">\n            <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n            <app-is-mat-icon *ngIf=\"column.valueStatement && column.statement !== undefined\"\n              [input]=\"column.valueStatement[column.statement ? 1 : 0]\">\n            </app-is-mat-icon>\n          </th>\n        </ng-container>\n        <ng-container *ngIf=\"!column.clickable\">\n          <th mat-header-cell *matHeaderCellDef\n            [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\">\n            <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n          </th>\n        </ng-container>\n        <th mat-header-cell *matHeaderCellDef\n          [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\">\n          <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n        </th>\n      </ng-container>\n\n      <td *ngIf=\"EmptyRow\" [attr.colspan]=\"columnsToDisplay.length\" class=\"empty-row\"></td>\n      <td class=\"row-style\" mat-cell *matCellDef=\"let element\"\n        [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : ''])\">\n        <ng-container *ngIf=\"element !== 'empty'\" [ngSwitch]=\"column.module\">\n          <!-- Button click -->\n          <ng-container *ngSwitchCase=\"'button-click'\">\n            <a [matTooltip]=\"open\" class=\"btn-link-text\" (click)=\"callFunction.emit(element[column.key])\">\n              <!--<ng-container *ngIf=\"column.display\">\n                <app-is-mat-icon [input]=\"column.display\"></app-is-mat-icon>\n              </ng-container>\n              <ng-container *ngIf=\"!column.display\">\n                {{element[column.key]}}\n              </ng-container>-->\n              {{ details }}\n            </a>\n          </ng-container>\n          <!-- Button link -->\n          <ng-container *ngSwitchCase=\"'button-link'\">\n            <!--                matBadge=\"*\" matBadgePosition=\"before\"\n               matBadgeColor=\"accent\" -->\n            <a *ngIf=\"element.new\" [matTooltip]=\"open\" class=\"mat-button btn-xs\" (click)=\"element.new = false\"\n              [ngClass]=\"btnOverride == true ? 'link-btn': 'nowboard-btn'\"\n              routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\">\n              <ng-container *ngIf=\"column.display\">\n                <app-is-mat-icon [input]=\"column.display\"></app-is-mat-icon>\n              </ng-container>\n              <ng-container *ngIf=\"!column.display\">\n                {{element[column.key]}}\n              </ng-container>\n            </a>\n            <a *ngIf=\"!element.new\" [matTooltip]=\"open\" class=\"mat-button btn-xs\"\n              [ngClass]=\"btnOverride == true ? 'link-btn': 'nowboard-btn'\"\n              routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\">\n              <ng-container *ngIf=\"column.display\">\n                <app-is-mat-icon class=\"is-mat-icon-cell\" [input]=\"column.display\"></app-is-mat-icon>\n              </ng-container>\n              <ng-container *ngIf=\"!column.display\">\n                {{element[column.key]}}\n              </ng-container>\n            </a>\n          </ng-container>\n          <!-- Button link text -->\n          <ng-container *ngSwitchCase=\"'button-link-text'\">\n            <button-link-text (callHandler)=\"callFunction.emit($event)\" [lang]=\"lang\"\n              [routerLink]=\"column.override ? buildLink(column.override, element) : element[column.key]\"\n              [text]=\"column.key\" [class]=\"column.valueOverride?.class\"\n              [id]=\"column.valueOverride?.id ? element[column.valueOverride?.id] : ''\"\n              [modal]=\"column.valueOverride?.modal || ''\"\n              [element]=\"element\"\n            >\n            </button-link-text>\n          </ng-container>\n          <!-- icon custom-->\n          <ng-container *ngSwitchCase=\"'custom-icon'\">\n            <input type=\"hidden\" [value]=\"element[column.key]\">\n            <img *ngIf=\"element[column.key] && column.valueOverride\" [src]=\"column.valueOverride[element[column.key]]\"\n              style=\"width: 20px; height: 20px;\">\n          </ng-container>\n          <ng-container *ngSwitchCase=\"'it-category'\">\n            <app-equipement-type [name]=\"element[column.key]\" [type]=\"element[column.override]\"></app-equipement-type>\n          </ng-container>\n          <!-- icon it status -->\n          <ng-container *ngSwitchCase=\"'it-status'\">\n            <app-equipement-status [type]=\"element[column.key]\"></app-equipement-status>\n          </ng-container>\n          <!-- icon customer rank -->\n          <ng-container *ngSwitchCase=\"'customer-rank'\">\n            <app-customer-rank [type]=\"element[column.key]\"></app-customer-rank>\n          </ng-container>\n          <!-- icon priority-->\n          <ng-container *ngSwitchCase=\"'priority'\">\n            <icon-priority [icon]=\"element['Icon']\" [iconLabel]=\"element['Priority'] || null\"></icon-priority>\n          </ng-container>\n          <!-- icon gender avatar-->\n          <ng-container *ngSwitchCase=\"'gender-avatar'\">\n            <app-gender [type]=\"element[column.key]\"></app-gender>\n          </ng-container>\n\n          <!-- icon gender avatar-->\n          <ng-container *ngSwitchCase=\"'phone-display'\">\n            <app-phone-display [number]=\"element[column.key]\"></app-phone-display>\n          </ng-container>\n\n          <!-- icon gender avatar-->\n          <ng-container *ngSwitchCase=\"'yes-no-display'\">\n            <app-yes-nox\n              *ngIf=\"column.config && (column.config.displayNo !== undefined && column.config.displayYes !== undefined)\"\n              [valid]=\"element[column.key]\" [size]=\"column.config?.sizeIcon\" [displayNo]=\"column.config.displayYes\"\n              [displayYes]=\"column.config.displayNo\">\n            </app-yes-nox>\n            <app-yes-nox\n              *ngIf=\"(!column.config || (column.config && !(column.config.displayNo || column.config.displayYes)))\"\n              [valid]=\"element[column.key]\" [size]=\"column.config?.sizeIcon\">\n            </app-yes-nox>\n          </ng-container>\n          <!-- icon origin-->\n          <ng-container *ngSwitchCase=\"'origin'\">\n            <icon-origin [icon]=\"element[column.key]\"></icon-origin>\n          </ng-container>\n          <!-- icon name avatar-->\n          <ng-container *ngSwitchCase=\"'name-avatar'\">\n            <name-avatar matTooltip=\"{{Join(element, column.override)}}\" [src]=\"element[column.key]\"\n              [fontSize]=\"column?.fontSize\"\n              [matTooltipClass]=\"'my-tooltip'\">\n            </name-avatar>\n          </ng-container>\n          <!-- date format -->\n          <ng-container *ngSwitchCase=\"'date-format'\">\n            <date-format style=\"padding-right: 10px\" [date]=\"element[column.key]\"></date-format>\n          </ng-container>\n          <!-- count rows -->\n          <ng-container *ngSwitchCase=\"'count-row'\">\n            <span style=\"padding-left: 14px\">\n              {{(element[column.key] && element[column.key].length ? element[column.key].length : '-')}}\n            </span>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"'custom-cell'\">\n            <lib-custom-cell [title]=\"element[column.key]\" [subTitle]=\"element[column.subTitle]\"\n              [class]=\"element[column.addClass]\"></lib-custom-cell>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"'Menu'\">\n           <lib-menu [Data]=\"element[column.key]\" [MenuList]=\"column.config\" [title]=\"column.value\"></lib-menu>\n          </ng-container>\n          <ng-container *ngSwitchDefault>\n            <span [innerHTML]=\"element[column.key]\"></span>\n          </ng-container>\n\n        </ng-container>\n\n        <ng-container *ngIf=\"element === 'empty'\">\n          <td [ngClass]=\"'empty-row'\" mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\">\n            empty row\n          </td>\n        </ng-container>\n      </td>\n\n    </ng-container>\n\n    <ng-container matColumnDef=\"expandedDetailX\" *ngIf=\"displayDetail\">\n      <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\"\n        [@detailExpand]=\"expandedElement && element == expandedElement ? 'expanded' : 'collapsed'\" style=\"height: 0\">\n        <div *ngIf=\"element['CaseNumber'] && expandedElement\">\n          <div class=\"element-detail\" [innerHTML]=\"element.expanded\">\n          </div>\n\n          <a [class.nav-expanded]=\"element == expandedElement\" [routerLink]=\"['/ticket/', element['CaseNumber']]\"\n            [title]=\"open\">\n            <img class=\"detail-view-ticket\" src=\"/assets/icons/eye.png\">\n          </a>\n        </div>\n      </td>\n    </ng-container>\n    <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n    <ng-container *ngIf=\"displayDetail\">\n      <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\" class=\"element-row\"\n        [ngClass]=\"!element || element === 'empty'? 'empty-row-none': 'detail-row'\"\n        [class.expanded]=\"expandedElement == element\" (click)=\"expand(element)\">\n      </tr>\n      <tr mat-row *matRowDef=\"let row; columns: ['expandedDetailX']\"\n        [ngClass]=\"!expandedElement || !row || row === 'empty'? 'empty-row': 'detail-row'\">\n\n      </tr>\n    </ng-container>\n    <ng-container *ngIf=\"!displayDetail\">\n      <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\" class=\"element-row\">\n      </tr>\n    </ng-container>\n  </table>\n  <ng-container *ngIf=\"data && data.totalElements === 0\">\n    <div class=\"row\" style=\"height: 84px;background: transparent!important;\">\n      <div class=\"\">\n        <div class=\"col-lg-12 search-container\" style=\"text-align: center\">\n          {{ noResult }}\n        </div>\n      </div>\n    </div>\n  </ng-container>\n  <mat-paginator #MatPaginatorCurrent *ngIf=\"data && data.totalElements > 0\" [length]=\"data.totalElements\"\n    [pageSize]=\"data.size\" [pageIndex]=\"data.number\" [hidePageSize]=\"true\" (page)=\"data.fetch($event.pageIndex)\"\n    showFirstLastButtons></mat-paginator>\n</div>\n", styles: [".table-wrapper table{width:100%}.table-wrapper .mat-cell{padding-left:10px}.table-wrapper png-icon{padding-left:17px}.table-wrapper tr:nth-child(1){min-height:48px}.table-wrapper .detail-row{height:auto!important}.table-wrapper tr.element-row:not(.expanded-row):hover{background:#f5f5f5}.table-wrapper tr.element-row:not(.expanded-row):active{background:#efefef}.table-wrapper .text-align-right{text-align:right!important}.table-wrapper .text-align-left{text-align:left!important}.table-wrapper .text-align-center{text-align:center!important}.table-wrapper .element-detail{overflow:hidden;display:flex;padding-top:10px;padding-bottom:10px}@media screen and (min-width: 1441px){.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px;font-size:13px!important}}@media screen and (max-width: 1440px){.table-wrapper a.mat-button{padding-top:10px}.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px;font-size:11px!important}}.table-wrapper .u-1{width:4%!important;max-width:4%!important;min-width:4%!important}.table-wrapper .u-2{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-3{width:7%!important;max-width:7%!important;min-width:7%!important}@media screen and (max-width: 1440px){.table-wrapper .u-1{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-2{width:6%!important;max-width:6%!important;min-width:6%!important}.table-wrapper .u-3{width:10%!important;max-width:10%!important;min-width:10%!important}}.table-wrapper .u-4{max-width:11%!important;width:11%!important;min-width:11%!important}.table-wrapper .u-5{max-width:10%!important;width:10%!important;min-width:10%!important}.table-wrapper .u-6{max-width:15%!important;width:15%!important;min-width:15%!important}.table-wrapper .u-7{width:20%!important;min-width:20%!important}.table-wrapper .u-8{width:25%!important;min-width:25%!important}.table-wrapper .u-9{width:30%!important;min-width:30%!important}.is-mat-icon-cell{width:auto;height:auto;display:auto}.is-mat-icon-cell .mat-icon{font-size:14px}.is-mat-icon-cell span{margin:auto}app-is-mat-icon span{margin:auto}.link-btn{color:#171f26;font-family:Nexa Text Bold;font-size:14px!important;letter-spacing:0px;text-align:center;text-decoration:underline}.expanded>.mat-cell>.link-btn{text-decoration:none;font-weight:400}.btn-link-text{background:#E5E8EE 0% 0% no-repeat padding-box;border-radius:4px;text-align:left;font: 700 12px/19px Nexa Text;letter-spacing:0px;color:#707070!important;cursor:pointer;padding:10px}.empty-row{background:none!important;height:10px!important}.empty-row td{background:none!important;height:0}.empty-row .ng-trigger-detailExpand,.empty-row-none{display:none!important}\n"], components: [{ type: i4$1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { type: i5.MatSortHeader, selector: "[mat-sort-header]", inputs: ["disabled", "mat-sort-header", "arrowPosition", "start", "sortActionDescription", "disableClear"], exportAs: ["matSortHeader"] }, { type: IsMatIconComponent, selector: "app-is-mat-icon", inputs: ["input"] }, { type: ButtonLinkTextComponent, selector: "button-link-text", inputs: ["lang", "routerLink", "text", "class", "id", "modal", "element"], outputs: ["callHandler"] }, { type: EquipementTypeComponent, selector: "app-equipement-type", inputs: ["name", "type", "size"] }, { type: EquipementStatusComponent, selector: "app-equipement-status", inputs: ["type", "size"] }, { type: CustomerRankComponent, selector: "app-customer-rank", inputs: ["type"] }, { type: PriorityComponent, selector: "icon-priority", inputs: ["icon", "iconLabel"] }, { type: GenderComponent, selector: "app-gender", inputs: ["type", "size"] }, { type: PhoneDisplayComponent, selector: "app-phone-display", inputs: ["number"] }, { type: YesNoComponent, selector: "app-yes-nox", inputs: ["valid", "displayNo", "displayYes", "size"] }, { type: OriginComponent, selector: "icon-origin", inputs: ["icon"] }, { type: NameAvatarComponent, selector: "name-avatar", inputs: ["src", "fontSize", "textSize"] }, { type: DateFormatComponent, selector: "date-format", inputs: ["date", "timezone"] }, { type: CustomCellComponent, selector: "lib-custom-cell", inputs: ["title", "subTitle", "class"] }, { type: MenuComponent, selector: "lib-menu", inputs: ["title", "MenuList", "Data"], outputs: ["DialogClose"] }, { type: i4$1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { type: i4$1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { type: i20.MatPaginator, selector: "mat-paginator", inputs: ["disabled"], exportAs: ["matPaginator"] }], directives: [{ type: i21.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i5.MatSort, selector: "[matSort]", inputs: ["matSortDisabled", "matSortActive", "matSortStart", "matSortDirection", "matSortDisableClear"], outputs: ["matSortChange"], exportAs: ["matSort"] }, { type: i21.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i4$1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { type: i4$1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { type: i4$1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { type: i4$1.MatCellDef, selector: "[matCellDef]" }, { type: i4$1.MatCell, selector: "mat-cell, td[mat-cell]" }, { type: i21.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: i21.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { type: i2$1.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i1$1.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo", "routerLink"] }, { type: i21.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1$1.RouterLink, selector: ":not(a):not(area)[routerLink]", inputs: ["queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo", "routerLink"] }, { type: i21.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { type: i4$1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { type: i4$1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }], animations: [trigger('detailExpand', [
            state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
            state('expanded', style({ height: '*' })),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ])], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TableComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-design-table', animations: [trigger('detailExpand', [
                            state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
                            state('expanded', style({ height: '*' })),
                            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                        ])], encapsulation: ViewEncapsulation.None, template: "<div class=\"table-wrapper\">\n  <div class=\"row\" style=\"height: 20px;background: transparent!important; box-shadow: none !important\">\n    <div class=\"\">\n      <!--<div class=\"col-lg-12 search-container\">\n        <mat-icon style=\"left: 16%; position: absolute; margin-top: 10px;\">search</mat-icon>\n        <input class=\"search-box\" type=\"text\" [placeholder]=\"search\" [maxLength]=\"100\"\n        [value]=\"inputSearch\"\n        (change)=\"onChange($event)\"\n               (input)=\"((($event.target.value.length > 1 || $event.target.value.length === 0)\n                        && $event.target.value.length < 200)\n                                       ? data.filter($event) : null)\"\n               #filterOngoing>\n        <a class=\"close-search\" *ngIf=\"filterOngoing.value\"\n           [matTooltip]=\"cancelSearch\"\n           (click)=\"reset() && filterOngoing.value = ''\">\n          <img [src]=\"'/assets/icons/search_off-24px.svg'\">\n        </a>\n      </div>-->\n    </div>\n  </div>\n  <!-- Table -->\n  <table mat-table #table=\"matSort\" [dataSource]=\"data \" multiTemplateDataRows matSort class=\"\"\n    *ngIf=\"displayedColumns && columnsToDisplay && data && data.totalElements && showTable\"\n    (matSortChange)=\"data.sortIt($event)\">\n    <ng-container [matColumnDef]=\"column.key\" *ngFor=\"let column of displayedColumns\">\n      <ng-container *ngIf=\"column.sort\">\n        <th mat-header-cell *matHeaderCellDef\n          [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\"\n          mat-sort-header>\n          <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n        </th>\n      </ng-container>\n      <ng-container *ngIf=\"!column.sort\">\n        <!-- Ajouter fonction generate Class -->\n        <ng-container *ngIf=\"column.clickable\">\n          <th mat-header-cell *matHeaderCellDef\n            (click)=\"clicked.emit({key : column.key, statement : (column.statement = !column.statement)})\"\n            [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\"\n            style=\"cursor: pointer;\">\n            <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n            <app-is-mat-icon *ngIf=\"column.valueStatement && column.statement !== undefined\"\n              [input]=\"column.valueStatement[column.statement ? 1 : 0]\">\n            </app-is-mat-icon>\n          </th>\n        </ng-container>\n        <ng-container *ngIf=\"!column.clickable\">\n          <th mat-header-cell *matHeaderCellDef\n            [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\">\n            <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n          </th>\n        </ng-container>\n        <th mat-header-cell *matHeaderCellDef\n          [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\">\n          <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n        </th>\n      </ng-container>\n\n      <td *ngIf=\"EmptyRow\" [attr.colspan]=\"columnsToDisplay.length\" class=\"empty-row\"></td>\n      <td class=\"row-style\" mat-cell *matCellDef=\"let element\"\n        [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : ''])\">\n        <ng-container *ngIf=\"element !== 'empty'\" [ngSwitch]=\"column.module\">\n          <!-- Button click -->\n          <ng-container *ngSwitchCase=\"'button-click'\">\n            <a [matTooltip]=\"open\" class=\"btn-link-text\" (click)=\"callFunction.emit(element[column.key])\">\n              <!--<ng-container *ngIf=\"column.display\">\n                <app-is-mat-icon [input]=\"column.display\"></app-is-mat-icon>\n              </ng-container>\n              <ng-container *ngIf=\"!column.display\">\n                {{element[column.key]}}\n              </ng-container>-->\n              {{ details }}\n            </a>\n          </ng-container>\n          <!-- Button link -->\n          <ng-container *ngSwitchCase=\"'button-link'\">\n            <!--                matBadge=\"*\" matBadgePosition=\"before\"\n               matBadgeColor=\"accent\" -->\n            <a *ngIf=\"element.new\" [matTooltip]=\"open\" class=\"mat-button btn-xs\" (click)=\"element.new = false\"\n              [ngClass]=\"btnOverride == true ? 'link-btn': 'nowboard-btn'\"\n              routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\">\n              <ng-container *ngIf=\"column.display\">\n                <app-is-mat-icon [input]=\"column.display\"></app-is-mat-icon>\n              </ng-container>\n              <ng-container *ngIf=\"!column.display\">\n                {{element[column.key]}}\n              </ng-container>\n            </a>\n            <a *ngIf=\"!element.new\" [matTooltip]=\"open\" class=\"mat-button btn-xs\"\n              [ngClass]=\"btnOverride == true ? 'link-btn': 'nowboard-btn'\"\n              routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\">\n              <ng-container *ngIf=\"column.display\">\n                <app-is-mat-icon class=\"is-mat-icon-cell\" [input]=\"column.display\"></app-is-mat-icon>\n              </ng-container>\n              <ng-container *ngIf=\"!column.display\">\n                {{element[column.key]}}\n              </ng-container>\n            </a>\n          </ng-container>\n          <!-- Button link text -->\n          <ng-container *ngSwitchCase=\"'button-link-text'\">\n            <button-link-text (callHandler)=\"callFunction.emit($event)\" [lang]=\"lang\"\n              [routerLink]=\"column.override ? buildLink(column.override, element) : element[column.key]\"\n              [text]=\"column.key\" [class]=\"column.valueOverride?.class\"\n              [id]=\"column.valueOverride?.id ? element[column.valueOverride?.id] : ''\"\n              [modal]=\"column.valueOverride?.modal || ''\"\n              [element]=\"element\"\n            >\n            </button-link-text>\n          </ng-container>\n          <!-- icon custom-->\n          <ng-container *ngSwitchCase=\"'custom-icon'\">\n            <input type=\"hidden\" [value]=\"element[column.key]\">\n            <img *ngIf=\"element[column.key] && column.valueOverride\" [src]=\"column.valueOverride[element[column.key]]\"\n              style=\"width: 20px; height: 20px;\">\n          </ng-container>\n          <ng-container *ngSwitchCase=\"'it-category'\">\n            <app-equipement-type [name]=\"element[column.key]\" [type]=\"element[column.override]\"></app-equipement-type>\n          </ng-container>\n          <!-- icon it status -->\n          <ng-container *ngSwitchCase=\"'it-status'\">\n            <app-equipement-status [type]=\"element[column.key]\"></app-equipement-status>\n          </ng-container>\n          <!-- icon customer rank -->\n          <ng-container *ngSwitchCase=\"'customer-rank'\">\n            <app-customer-rank [type]=\"element[column.key]\"></app-customer-rank>\n          </ng-container>\n          <!-- icon priority-->\n          <ng-container *ngSwitchCase=\"'priority'\">\n            <icon-priority [icon]=\"element['Icon']\" [iconLabel]=\"element['Priority'] || null\"></icon-priority>\n          </ng-container>\n          <!-- icon gender avatar-->\n          <ng-container *ngSwitchCase=\"'gender-avatar'\">\n            <app-gender [type]=\"element[column.key]\"></app-gender>\n          </ng-container>\n\n          <!-- icon gender avatar-->\n          <ng-container *ngSwitchCase=\"'phone-display'\">\n            <app-phone-display [number]=\"element[column.key]\"></app-phone-display>\n          </ng-container>\n\n          <!-- icon gender avatar-->\n          <ng-container *ngSwitchCase=\"'yes-no-display'\">\n            <app-yes-nox\n              *ngIf=\"column.config && (column.config.displayNo !== undefined && column.config.displayYes !== undefined)\"\n              [valid]=\"element[column.key]\" [size]=\"column.config?.sizeIcon\" [displayNo]=\"column.config.displayYes\"\n              [displayYes]=\"column.config.displayNo\">\n            </app-yes-nox>\n            <app-yes-nox\n              *ngIf=\"(!column.config || (column.config && !(column.config.displayNo || column.config.displayYes)))\"\n              [valid]=\"element[column.key]\" [size]=\"column.config?.sizeIcon\">\n            </app-yes-nox>\n          </ng-container>\n          <!-- icon origin-->\n          <ng-container *ngSwitchCase=\"'origin'\">\n            <icon-origin [icon]=\"element[column.key]\"></icon-origin>\n          </ng-container>\n          <!-- icon name avatar-->\n          <ng-container *ngSwitchCase=\"'name-avatar'\">\n            <name-avatar matTooltip=\"{{Join(element, column.override)}}\" [src]=\"element[column.key]\"\n              [fontSize]=\"column?.fontSize\"\n              [matTooltipClass]=\"'my-tooltip'\">\n            </name-avatar>\n          </ng-container>\n          <!-- date format -->\n          <ng-container *ngSwitchCase=\"'date-format'\">\n            <date-format style=\"padding-right: 10px\" [date]=\"element[column.key]\"></date-format>\n          </ng-container>\n          <!-- count rows -->\n          <ng-container *ngSwitchCase=\"'count-row'\">\n            <span style=\"padding-left: 14px\">\n              {{(element[column.key] && element[column.key].length ? element[column.key].length : '-')}}\n            </span>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"'custom-cell'\">\n            <lib-custom-cell [title]=\"element[column.key]\" [subTitle]=\"element[column.subTitle]\"\n              [class]=\"element[column.addClass]\"></lib-custom-cell>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"'Menu'\">\n           <lib-menu [Data]=\"element[column.key]\" [MenuList]=\"column.config\" [title]=\"column.value\"></lib-menu>\n          </ng-container>\n          <ng-container *ngSwitchDefault>\n            <span [innerHTML]=\"element[column.key]\"></span>\n          </ng-container>\n\n        </ng-container>\n\n        <ng-container *ngIf=\"element === 'empty'\">\n          <td [ngClass]=\"'empty-row'\" mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\">\n            empty row\n          </td>\n        </ng-container>\n      </td>\n\n    </ng-container>\n\n    <ng-container matColumnDef=\"expandedDetailX\" *ngIf=\"displayDetail\">\n      <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\"\n        [@detailExpand]=\"expandedElement && element == expandedElement ? 'expanded' : 'collapsed'\" style=\"height: 0\">\n        <div *ngIf=\"element['CaseNumber'] && expandedElement\">\n          <div class=\"element-detail\" [innerHTML]=\"element.expanded\">\n          </div>\n\n          <a [class.nav-expanded]=\"element == expandedElement\" [routerLink]=\"['/ticket/', element['CaseNumber']]\"\n            [title]=\"open\">\n            <img class=\"detail-view-ticket\" src=\"/assets/icons/eye.png\">\n          </a>\n        </div>\n      </td>\n    </ng-container>\n    <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n    <ng-container *ngIf=\"displayDetail\">\n      <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\" class=\"element-row\"\n        [ngClass]=\"!element || element === 'empty'? 'empty-row-none': 'detail-row'\"\n        [class.expanded]=\"expandedElement == element\" (click)=\"expand(element)\">\n      </tr>\n      <tr mat-row *matRowDef=\"let row; columns: ['expandedDetailX']\"\n        [ngClass]=\"!expandedElement || !row || row === 'empty'? 'empty-row': 'detail-row'\">\n\n      </tr>\n    </ng-container>\n    <ng-container *ngIf=\"!displayDetail\">\n      <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\" class=\"element-row\">\n      </tr>\n    </ng-container>\n  </table>\n  <ng-container *ngIf=\"data && data.totalElements === 0\">\n    <div class=\"row\" style=\"height: 84px;background: transparent!important;\">\n      <div class=\"\">\n        <div class=\"col-lg-12 search-container\" style=\"text-align: center\">\n          {{ noResult }}\n        </div>\n      </div>\n    </div>\n  </ng-container>\n  <mat-paginator #MatPaginatorCurrent *ngIf=\"data && data.totalElements > 0\" [length]=\"data.totalElements\"\n    [pageSize]=\"data.size\" [pageIndex]=\"data.number\" [hidePageSize]=\"true\" (page)=\"data.fetch($event.pageIndex)\"\n    showFirstLastButtons></mat-paginator>\n</div>\n", styles: [".table-wrapper table{width:100%}.table-wrapper .mat-cell{padding-left:10px}.table-wrapper png-icon{padding-left:17px}.table-wrapper tr:nth-child(1){min-height:48px}.table-wrapper .detail-row{height:auto!important}.table-wrapper tr.element-row:not(.expanded-row):hover{background:#f5f5f5}.table-wrapper tr.element-row:not(.expanded-row):active{background:#efefef}.table-wrapper .text-align-right{text-align:right!important}.table-wrapper .text-align-left{text-align:left!important}.table-wrapper .text-align-center{text-align:center!important}.table-wrapper .element-detail{overflow:hidden;display:flex;padding-top:10px;padding-bottom:10px}@media screen and (min-width: 1441px){.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px;font-size:13px!important}}@media screen and (max-width: 1440px){.table-wrapper a.mat-button{padding-top:10px}.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px;font-size:11px!important}}.table-wrapper .u-1{width:4%!important;max-width:4%!important;min-width:4%!important}.table-wrapper .u-2{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-3{width:7%!important;max-width:7%!important;min-width:7%!important}@media screen and (max-width: 1440px){.table-wrapper .u-1{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-2{width:6%!important;max-width:6%!important;min-width:6%!important}.table-wrapper .u-3{width:10%!important;max-width:10%!important;min-width:10%!important}}.table-wrapper .u-4{max-width:11%!important;width:11%!important;min-width:11%!important}.table-wrapper .u-5{max-width:10%!important;width:10%!important;min-width:10%!important}.table-wrapper .u-6{max-width:15%!important;width:15%!important;min-width:15%!important}.table-wrapper .u-7{width:20%!important;min-width:20%!important}.table-wrapper .u-8{width:25%!important;min-width:25%!important}.table-wrapper .u-9{width:30%!important;min-width:30%!important}.is-mat-icon-cell{width:auto;height:auto;display:auto}.is-mat-icon-cell .mat-icon{font-size:14px}.is-mat-icon-cell span{margin:auto}app-is-mat-icon span{margin:auto}.link-btn{color:#171f26;font-family:Nexa Text Bold;font-size:14px!important;letter-spacing:0px;text-align:center;text-decoration:underline}.expanded>.mat-cell>.link-btn{text-decoration:none;font-weight:400}.btn-link-text{background:#E5E8EE 0% 0% no-repeat padding-box;border-radius:4px;text-align:left;font: 700 12px/19px Nexa Text;letter-spacing:0px;color:#707070!important;cursor:pointer;padding:10px}.empty-row{background:none!important;height:10px!important}.empty-row td{background:none!important;height:0}.empty-row .ng-trigger-detailExpand,.empty-row-none{display:none!important}\n"] }]
        }], ctorParameters: function () { return [{ type: i1$1.Router }, { type: i1$1.ActivatedRoute }, { type: TableService }, { type: i0.ChangeDetectorRef }, { type: TranslateService }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { paginatorCurrent: [{
                type: ViewChild,
                args: ['MatPaginatorCurrent', { static: true }]
            }], sortCurrent: [{
                type: ViewChild,
                args: ['table', { static: true }]
            }], columnDefinitions: [{
                type: Input
            }], displayDetail: [{
                type: Input
            }], displayComponent: [{
                type: Input
            }], data: [{
                type: Input
            }], lang: [{
                type: Input
            }], btnOverride: [{
                type: Input
            }], callFunction: [{
                type: Output
            }], inputSearch: [{
                type: Input
            }], EmptyRow: [{
                type: Input
            }], blockDetails: [{
                type: Input
            }], clicked: [{
                type: Output
            }] } });

class TableModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('TableModule is already loaded. Import it in the AppModule only');
        }
    }
    static forRoot(config) {
        return {
            ngModule: TableModule,
            providers: [
                { provide: '__NgxDesignTable__', useValue: config },
                TableService
            ]
        };
    }
}
TableModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TableModule, deps: [{ token: TableModule, optional: true, skipSelf: true }], target: i0.ɵɵFactoryTarget.NgModule });
TableModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TableModule, declarations: [TableComponent,
        CustomerRankComponent,
        DateFormatComponent,
        EquipementStatusComponent,
        EquipementTypeComponent,
        GenderComponent,
        IsMatIconComponent,
        NameAvatarComponent,
        OriginComponent,
        PhoneDisplayComponent,
        PriorityComponent,
        YesNoComponent,
        NgxFlagsComponent,
        ButtonLinkTextComponent,
        CustomCellComponent,
        MenuComponent], imports: [PngIconModule,
        MatPaginatorModule,
        MatTableModule,
        MatSortModule,
        MatTooltipModule,
        CommonModule,
        MatIconModule,
        RouterModule,
        MatBadgeModule,
        MatMenuModule], exports: [TableComponent,
        CustomerRankComponent,
        DateFormatComponent,
        EquipementStatusComponent,
        EquipementTypeComponent,
        GenderComponent,
        IsMatIconComponent,
        NameAvatarComponent,
        OriginComponent,
        PhoneDisplayComponent,
        PriorityComponent,
        YesNoComponent,
        PngIconModule,
        MatPaginatorModule,
        MatTableModule,
        MatSortModule,
        MatTooltipModule,
        CommonModule,
        MatIconModule,
        RouterModule,
        MatBadgeModule,
        MatMenuModule,
        NgxFlagsComponent] });
TableModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TableModule, imports: [[
            PngIconModule,
            MatPaginatorModule,
            MatTableModule,
            MatSortModule,
            MatTooltipModule,
            CommonModule,
            MatIconModule,
            RouterModule,
            MatBadgeModule,
            MatMenuModule
        ], PngIconModule,
        MatPaginatorModule,
        MatTableModule,
        MatSortModule,
        MatTooltipModule,
        CommonModule,
        MatIconModule,
        RouterModule,
        MatBadgeModule,
        MatMenuModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TableModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        TableComponent,
                        CustomerRankComponent,
                        DateFormatComponent,
                        EquipementStatusComponent,
                        EquipementTypeComponent,
                        GenderComponent,
                        IsMatIconComponent,
                        NameAvatarComponent,
                        OriginComponent,
                        PhoneDisplayComponent,
                        PriorityComponent,
                        YesNoComponent,
                        NgxFlagsComponent,
                        ButtonLinkTextComponent,
                        CustomCellComponent,
                        MenuComponent
                    ],
                    imports: [
                        PngIconModule,
                        MatPaginatorModule,
                        MatTableModule,
                        MatSortModule,
                        MatTooltipModule,
                        CommonModule,
                        MatIconModule,
                        RouterModule,
                        MatBadgeModule,
                        MatMenuModule
                    ],
                    exports: [
                        TableComponent,
                        CustomerRankComponent,
                        DateFormatComponent,
                        EquipementStatusComponent,
                        EquipementTypeComponent,
                        GenderComponent,
                        IsMatIconComponent,
                        NameAvatarComponent,
                        OriginComponent,
                        PhoneDisplayComponent,
                        PriorityComponent,
                        YesNoComponent,
                        PngIconModule,
                        MatPaginatorModule,
                        MatTableModule,
                        MatSortModule,
                        MatTooltipModule,
                        CommonModule,
                        MatIconModule,
                        RouterModule,
                        MatBadgeModule,
                        MatMenuModule,
                        NgxFlagsComponent
                    ]
                }]
        }], ctorParameters: function () {
        return [{ type: TableModule, decorators: [{
                        type: Optional
                    }, {
                        type: SkipSelf
                    }] }];
    } });

/*
 * Public API Surface of table
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CellsComponentList, CoreMatTable, CustomerRankComponent, DateFormatComponent, EquipementStatusComponent, EquipementTypeComponent, GenderComponent, IsMatIconComponent, NameAvatarComponent, NgxFlagsComponent, OriginComponent, PhoneDisplayComponent, PngIconComponent, PngIconModule, PriorityComponent, TableComponent, TableModule, TableService, YesNoComponent };
//# sourceMappingURL=table.mjs.map
