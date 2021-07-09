(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/material/sort'), require('@angular/material/paginator'), require('rxjs'), require('rxjs/operators'), require('@angular/cdk/collections'), require('@angular/animations'), require('@angular/router'), require('@angular/material/table'), require('@angular/material/tooltip'), require('@angular/material/icon'), require('@angular/material/badge')) :
    typeof define === 'function' && define.amd ? define('table', ['exports', '@angular/core', '@angular/common', '@angular/material/sort', '@angular/material/paginator', 'rxjs', 'rxjs/operators', '@angular/cdk/collections', '@angular/animations', '@angular/router', '@angular/material/table', '@angular/material/tooltip', '@angular/material/icon', '@angular/material/badge'], factory) :
    (global = global || self, factory(global.table = {}, global.ng.core, global.ng.common, global.ng.material.sort, global.ng.material.paginator, global.rxjs, global.rxjs.operators, global.ng.cdk.collections, global.ng.animations, global.ng.router, global.ng.material.table, global.ng.material.tooltip, global.ng.material.icon, global.ng.material.badge));
}(this, (function (exports, core, common, sort, paginator, rxjs, operators, collections, animations, router, table, tooltip, icon, badge) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var TableService = /** @class */ (function () {
        function TableService(settingConfig) {
            this.settingConfig = settingConfig;
            this.updateHeader = new core.EventEmitter();
            this.config = settingConfig;
        }
        TableService.prototype.setHeader = function (displayColumn) {
            this.displayColumn = displayColumn;
            this.updateHeader.emit(true);
        };
        TableService.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: ['__NgxDesignTable__',] }] }
        ]; };
        TableService.ɵprov = core.ɵɵdefineInjectable({ factory: function TableService_Factory() { return new TableService(core.ɵɵinject("__NgxDesignTable__")); }, token: TableService, providedIn: "root" });
        TableService = __decorate([
            core.Injectable({
                providedIn: 'root'
            }),
            __param(0, core.Inject('__NgxDesignTable__')),
            __metadata("design:paramtypes", [Object])
        ], TableService);
        return TableService;
    }());

    var CustomerRankComponent = /** @class */ (function () {
        function CustomerRankComponent(changeDetectorRefs, service) {
            this.changeDetectorRefs = changeDetectorRefs;
            this.service = service;
        }
        CustomerRankComponent.prototype.ngOnInit = function () {
            var e_1, _a;
            var config = this.service.settingConfig.customerRank || ['gold', 'silver', 'bronze', 'default'];
            if (this.type) {
                this._type = (this.type || '').replace(/[^A-Z0-9]+/ig, "");
                try {
                    for (var config_1 = __values(config), config_1_1 = config_1.next(); !config_1_1.done; config_1_1 = config_1.next()) {
                        var c = config_1_1.value;
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
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (config_1_1 && !config_1_1.done && (_a = config_1.return)) _a.call(config_1);
                    }
                    finally { if (e_1) throw e_1.error; }
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
        };
        CustomerRankComponent.prototype.ngOnChanges = function (changes) {
            this.ngOnInit();
        };
        CustomerRankComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef },
            { type: TableService }
        ]; };
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], CustomerRankComponent.prototype, "type", void 0);
        CustomerRankComponent = __decorate([
            core.Component({
                selector: 'app-customer-rank',
                template: "<span [class]=\"typeClass\" matTooltip=\"Contrat de type : {{type}}\">\n  <span style=\"color:black\">{{type}}</span><mat-icon *ngIf=\"type !== 'CLASSIC'\">star_rate</mat-icon>\n</span>\n",
                styles: [".gold{font-size:12px;font-weight:700;color:gold!important}.silver{font-size:12px;font-weight:700;color:silver!important}.bronze{font-weight:700;font-size:12px;color:#cd7f32!important}.default{font-weight:700;font-size:12px;color:#000!important}"]
            }),
            __metadata("design:paramtypes", [core.ChangeDetectorRef, TableService])
        ], CustomerRankComponent);
        return CustomerRankComponent;
    }());

    var DateFormatComponent = /** @class */ (function () {
        function DateFormatComponent() {
            this.timezone = 'fr';
        }
        DateFormatComponent.prototype.ngOnInit = function () {
        };
        DateFormatComponent.prototype.run = function (date) {
            if (date) {
                var t = date.split(' ');
                return "<span class=\"\">\n                    <span class=\"hour\">" + t[0] + "</span>\n                    <!--<span class=\"minute\">" + t[1] + "</span>-->\n                </span>";
            }
            else {
                return "<span class=\"time-badge\">\n                    <span class=\"hour\">-</span>\n                    <span class=\"minute\"></span>\n                </span>";
            }
        };
        DateFormatComponent.prototype.ngOnChanges = function (changes) {
        };
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], DateFormatComponent.prototype, "date", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], DateFormatComponent.prototype, "timezone", void 0);
        DateFormatComponent = __decorate([
            core.Component({
                selector: 'date-format',
                template: "<span matTooltip=\"{{(date| date : 'short' : timezone)}}\" [innerHTML]=\"run((date| date : 'short' : timezone))\"></span>\n",
                styles: ["span.time-badge{display:block;text-align:center!important;padding-right:25px}span.time-badge .hour{display:block;font-weight:900;font-size:12px}span.time-badge .minute{display:block;font-weight:300;font-size:10px}"]
            }),
            __metadata("design:paramtypes", [])
        ], DateFormatComponent);
        return DateFormatComponent;
    }());

    var EquipementStatusComponent = /** @class */ (function () {
        // private params: any = {};
        function EquipementStatusComponent(changeDetectorRefs, service) {
            this.changeDetectorRefs = changeDetectorRefs;
            this.service = service;
            this.css = {};
            this.css.maxWidth = String((this.size || 22)) + 'px';
            this.css.maxHeight = String((this.size || 22)) + 'px';
            //this.params = this.service.settingConfig.equipmentStatus;
        }
        EquipementStatusComponent.prototype.ngOnInit = function () {
            this.css.maxWidth = String((this.size || 22)) + 'px';
            this.css.maxHeight = String((this.size || 22)) + 'px';
            var params = this.service.settingConfig.equipmentStatus; /*{
              "actif": "/assets/icons/status/actif.png",
              "oui": "/assets/icons/status/actif.png",
              "hs": "/assets/icons/status/HS.png",
              "inactif": "/assets/icons/status/inactif.png",
              "non": "/assets/icons/status/inactif.png",
              "spare": "/assets/icons/status/spare.png",
            }*/
            var clean = (this.type || "").toLocaleLowerCase().replace(/[^A-Z0-9]+/ig, "");
            if (params[clean]) {
                this.icon = params[clean];
            }
            else {
                this.icon = params['default'];
            }
            this.changeDetectorRefs.detectChanges();
        };
        EquipementStatusComponent.prototype.ngOnChanges = function (changes) {
            this.ngOnInit();
        };
        EquipementStatusComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef },
            { type: TableService }
        ]; };
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], EquipementStatusComponent.prototype, "type", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], EquipementStatusComponent.prototype, "size", void 0);
        EquipementStatusComponent = __decorate([
            core.Component({
                selector: 'app-equipement-status',
                template: "<span [style]=\"css\" matTooltip=\"{{type}}\">\n    <img [src]=\"icon\" [style]=\"css\">\n</span>",
                styles: [""]
            }),
            __metadata("design:paramtypes", [core.ChangeDetectorRef, TableService])
        ], EquipementStatusComponent);
        return EquipementStatusComponent;
    }());

    var EquipementTypeComponent = /** @class */ (function () {
        function EquipementTypeComponent(changeDetectorRefs, service) {
            this.changeDetectorRefs = changeDetectorRefs;
            this.service = service;
            this.css = {};
            this.css.maxWidth = String((this.size || 40)) + 'px';
            this.css.maxHeight = String((this.size || 40)) + 'px';
        }
        EquipementTypeComponent.prototype.ngOnInit = function () {
            this.css.maxWidth = String((this.size || 40)) + 'px';
            this.css.maxHeight = String((this.size || 40)) + 'px';
            var params = this.service.settingConfig.equipmentType; /*{
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
            var clean = (this.type || "").toLocaleLowerCase().replace(/[^A-Z0-9]+/ig, "");
            var server = this.name.toLocaleLowerCase().includes('srv');
            if (params[clean]) {
                this.icon = params[clean];
            }
            else {
                this.icon = params['default'];
            }
        };
        EquipementTypeComponent.prototype.ngOnChanges = function (changes) {
            this.ngOnInit();
        };
        EquipementTypeComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef },
            { type: TableService }
        ]; };
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], EquipementTypeComponent.prototype, "name", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], EquipementTypeComponent.prototype, "type", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], EquipementTypeComponent.prototype, "size", void 0);
        EquipementTypeComponent = __decorate([
            core.Component({
                selector: 'app-equipement-type',
                template: "<span [style]=\"css\" matTooltip=\"{{type}}\">\n    <img [src]=\"icon\" [style]=\"css\">\n</span>\n",
                styles: [""]
            }),
            __metadata("design:paramtypes", [core.ChangeDetectorRef, TableService])
        ], EquipementTypeComponent);
        return EquipementTypeComponent;
    }());

    var GenderComponent = /** @class */ (function () {
        function GenderComponent(service) {
            this.service = service;
            this.css = {};
        }
        GenderComponent.prototype.ngOnInit = function () {
            this.css.maxWidth = String((this.size || 40)) + 'px';
            this.css.maxHeight = String((this.size || 40)) + 'px';
            var params = this.service.settingConfig.gender; /*{
                "m": "/assets/icons/nowteam/salutations/man.png",
                "mme": "/assets/icons/nowteam/salutations/woman.png",
            }*/
            var clean = (this.type || "").toLocaleLowerCase().replace(/[^A-Z0-9]+/ig, "");
            if (params[clean]) {
                this.icon = params[clean];
            }
            else {
                this.css.maxWidth = String(((this.size || 40) - 10)) + 'px';
                this.css.maxHeight = String(((this.size || 40) - 10)) + 'px';
                this.icon = params.none; //"/assets/icons/status/HS.png";
            }
        };
        GenderComponent.prototype.ngOnChanges = function (changes) {
            this.ngOnInit();
        };
        GenderComponent.ctorParameters = function () { return [
            { type: TableService }
        ]; };
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], GenderComponent.prototype, "type", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], GenderComponent.prototype, "size", void 0);
        GenderComponent = __decorate([
            core.Component({
                selector: 'app-gender',
                template: "<span [style]=\"css\" matTooltip=\"{{type}}\">\n    <img [src]=\"icon\" [style]=\"css\">\n</span>\n",
                styles: [""]
            }),
            __metadata("design:paramtypes", [TableService])
        ], GenderComponent);
        return GenderComponent;
    }());

    var IsMatIconComponent = /** @class */ (function () {
        function IsMatIconComponent() {
            this.isIcon = false;
        }
        IsMatIconComponent.prototype.ngOnInit = function () {
            if (this.input && this.input.indexOf(('icon.')) > -1) {
                this.isIcon = true;
                this.display = this.input.split('.')[1];
            }
            else {
                this.isIcon = false;
                this.display = this.input;
            }
        };
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], IsMatIconComponent.prototype, "input", void 0);
        IsMatIconComponent = __decorate([
            core.Component({
                selector: 'app-is-mat-icon',
                template: "<ng-container *ngIf=\"!isIcon\">\n    <span >{{display}}</span>\n</ng-container>\n<ng-container  *ngIf=\"isIcon\">\n    <mat-icon>{{display}}</mat-icon>\n</ng-container>",
                styles: [":host{height:34px;display:flex;padding:auto}:host .mat-icon{display:block;fill:currentColor;text-align:center;width:24px;margin:auto;vertical-align:middle;background:no-repeat}:host i,:host mat-icon{font-size:24px;height:24px}"]
            }),
            __metadata("design:paramtypes", [])
        ], IsMatIconComponent);
        return IsMatIconComponent;
    }());

    var NameAvatarComponent = /** @class */ (function () {
        function NameAvatarComponent(service) {
            this.service = service;
            this.fontSize = '24px';
            this._padding = '4px';
            this._display = 'flex';
            this._borderRadius = '50px';
            this._size = 'cover';
            this.afterInit = false;
            this.defaultFontSize = 12;
            this.defaultDimension = 24;
        }
        NameAvatarComponent.prototype.ngOnInit = function () {
            if (this.src) {
                var deg = Math.random() * (10 - 360) + 10;
                this.icon.nativeElement.style.backgroundImage = this.service.settingConfig.nameAvatarBackgroundColor; /*`linear-gradient(${deg}deg, #9d107d,
                                                                 #8b3391, #7647a0, #5f56a8, #4862ab)`;*/
                this.icon.nativeElement.style.borderRadius = this._borderRadius;
                this.icon.nativeElement.style.marginLeft = '16px';
                this.icon.nativeElement.style.display = this._display;
                this.icon.nativeElement.style.width = this.fontSize;
                this.icon.nativeElement.style.height = this.fontSize;
                this.icon.nativeElement.style.fontSize = (parseInt(this.fontSize, 0) / 2) + 'px';
                this.icon.nativeElement.style.padding = (parseInt(this.icon.nativeElement.style.fontSize, 0) / 3) + 'px';
                this.icon.nativeElement.style.fontWeight = '900';
                this.icon.nativeElement.style.color = 'white';
                var tmp = this.src.split(' ');
                this.letter = (tmp[0][0] + (tmp[1] && tmp[1][0] ? tmp[1][0] : tmp[0][1])).toUpperCase();
            }
            else if (this.afterInit === false) {
                this.afterInit = true;
            }
        };
        NameAvatarComponent.prototype.ngAfterViewInit = function () {
            if (this.afterInit) {
                this.ngOnInit();
            }
        };
        NameAvatarComponent.prototype.getRatio = function () {
        };
        NameAvatarComponent.ctorParameters = function () { return [
            { type: TableService }
        ]; };
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], NameAvatarComponent.prototype, "src", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], NameAvatarComponent.prototype, "fontSize", void 0);
        __decorate([
            core.ViewChild('avatar', { static: true }),
            __metadata("design:type", core.ElementRef)
        ], NameAvatarComponent.prototype, "icon", void 0);
        NameAvatarComponent = __decorate([
            core.Component({
                selector: 'name-avatar',
                template: "<div #avatar>\n    {{letter}}\n</div>\n",
                styles: ["div{align-items:center;justify-content:center;padding:0!important}"]
            }),
            __metadata("design:paramtypes", [TableService])
        ], NameAvatarComponent);
        return NameAvatarComponent;
    }());

    var OriginComponent = /** @class */ (function () {
        function OriginComponent(service) {
            this.service = service;
        }
        OriginComponent.prototype.ngOnInit = function () {
            var _this = this;
            var list = this.service.settingConfig.origin; /*[{
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
            var flter = list.filter(function (e) {
                return _this.icon.includes(e.label);
            });
            this.iconSrc = flter && flter.length && flter[0].data ? flter[0].data : '';
        };
        OriginComponent.prototype.ngOnChanges = function (changes) {
            this.ngOnInit();
        };
        OriginComponent.ctorParameters = function () { return [
            { type: TableService }
        ]; };
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], OriginComponent.prototype, "icon", void 0);
        OriginComponent = __decorate([
            core.Component({
                selector: 'icon-origin',
                template: "<png-icon style=\"margin : auto; text-align: center\" matTooltip=\"{{this.icon}}\" [src]=\"this.iconSrc\"></png-icon>",
                styles: [""]
            }),
            __metadata("design:paramtypes", [TableService])
        ], OriginComponent);
        return OriginComponent;
    }());

    var PhoneDisplayComponent = /** @class */ (function () {
        function PhoneDisplayComponent() {
        }
        PhoneDisplayComponent.prototype.ngOnInit = function () {
            this.display = this.normalize(this.number);
        };
        PhoneDisplayComponent.prototype.ngOnChanges = function (changes) {
            this.ngOnInit();
        };
        PhoneDisplayComponent.prototype.normalize = function (str) {
            str = (str || '').replace(/[^\d]/g, "");
            if (str.length == 10) {
                //reformat and return phone number
                return str.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "(+33) $1.$2.$3.$4.$5");
            }
            else if (str.length > 10 && str.length <= 13) {
                if (str.length === 11) {
                    str = '0' + str;
                }
                if (str.length === 13 && str.includes('+')) {
                    var tmp = str.slice(0, 3);
                    var end = str.slice(3, str.length);
                    str = tmp + '0' + end;
                }
                return str.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "(+$1) $2.$3.$4.$5.$6");
            }
            return null;
        };
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], PhoneDisplayComponent.prototype, "number", void 0);
        PhoneDisplayComponent = __decorate([
            core.Component({
                selector: 'app-phone-display',
                template: "<strong>{{display || '-'}}</strong>\n",
                styles: [""]
            }),
            __metadata("design:paramtypes", [])
        ], PhoneDisplayComponent);
        return PhoneDisplayComponent;
    }());

    var PngIconComponent = /** @class */ (function () {
        function PngIconComponent() {
            this.fontSize = '24px';
            this._padding = '5px';
            this._display = 'inline-flex';
            this._size = 'cover';
        }
        PngIconComponent.prototype.ngOnInit = function () {
            if (this.src) {
                this.icon.nativeElement.style.backgroundImage = "url(" + this.src + ")";
                this.icon.nativeElement.style.backgroundSize = this._size;
                this.icon.nativeElement.style.display = this._display;
                this.icon.nativeElement.style.width = this.fontSize;
                this.icon.nativeElement.style.height = this.fontSize;
                this.icon.nativeElement.style.padding = this._padding;
                if (this.color) {
                    this.icon.nativeElement.style.color = this.color;
                }
            }
        };
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], PngIconComponent.prototype, "src", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], PngIconComponent.prototype, "fontSize", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], PngIconComponent.prototype, "color", void 0);
        __decorate([
            core.ViewChild('icon', { static: true }),
            __metadata("design:type", core.ElementRef)
        ], PngIconComponent.prototype, "icon", void 0);
        PngIconComponent = __decorate([
            core.Component({
                selector: 'png-icon',
                template: "<span #icon>\n\n</span>",
                styles: [""]
            }),
            __metadata("design:paramtypes", [])
        ], PngIconComponent);
        return PngIconComponent;
    }());

    var PngIconModule = /** @class */ (function () {
        function PngIconModule() {
        }
        PngIconModule = __decorate([
            core.NgModule({
                declarations: [PngIconComponent],
                imports: [
                    common.CommonModule
                ],
                exports: [
                    PngIconComponent
                ]
            })
        ], PngIconModule);
        return PngIconModule;
    }());

    var PriorityComponent = /** @class */ (function () {
        function PriorityComponent(service) {
            this.service = service;
            this.label = '';
        }
        PriorityComponent.prototype.ngOnInit = function () {
            var list = this.service.settingConfig.priority; /*= [{
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
            console.log(this.icon);
            console.log(this.iconLabel);
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
        };
        PriorityComponent.prototype.ngOnChanges = function (changes) {
            this.ngOnInit();
        };
        PriorityComponent.ctorParameters = function () { return [
            { type: TableService }
        ]; };
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], PriorityComponent.prototype, "icon", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], PriorityComponent.prototype, "iconLabel", void 0);
        PriorityComponent = __decorate([
            core.Component({
                selector: 'icon-priority',
                template: "<!--<png-icon matTooltip=\"{{this.iconLabel}}\" [src]=\"this.iconSrc\"></png-icon>-->\n<!--<png-icon [src]=\"this.iconSrc\"></png-icon>-->\n<span class=\"{{this.iconSrc}}\">\n    {{this.label}}\n</span>",
                styles: [".now-low{background-color:#30567b!important;border-radius:3px;border:none!important;color:#fff!important;min-width:0!important;padding:7px}.now-normal{background:no-repeat padding-box #6fe8D78E!important;border-radius:5px;border:none!important;text-align:left;font:bold 14px/21px nexa;letter-spacing:0;color:#169d8a!important;min-width:0!important;padding:7px}.now-urgent{background:no-repeat padding-box #f3a124!important;border-radius:5px;border:none!important;text-align:left;font:bold 14px/21px nexa;letter-spacing:0;color:#c48e3b!important;min-width:0!important;padding:7px}.now-critic{background:no-repeat padding-box #d7052b!important;border-radius:5px;border:none!important;text-align:left;font:bold 14px/21px nexa;letter-spacing:0;color:#7c1c2d!important;min-width:0!important;padding:7px}.now-vip{background:no-repeat padding-box #787d82!important;border-radius:5px;border:none!important;text-align:left;font:bold 12px/19px nexa;letter-spacing:0;color:#171f26!important;min-width:0!important;padding:7px}"]
            }),
            __metadata("design:paramtypes", [TableService])
        ], PriorityComponent);
        return PriorityComponent;
    }());

    var YesNoComponent = /** @class */ (function () {
        function YesNoComponent(service) {
            this.service = service;
            this.displayNo = false;
            this.displayYes = true;
            this.css = {};
        }
        YesNoComponent.prototype.ngOnInit = function () {
            this.css.maxWidth = String((this.size || 40)) + 'px';
            this.css.maxHeight = String((this.size || 40)) + 'px';
            var params = this.service.settingConfig.yesNo; /*{
                    "true": "/assets/icons/status/actif.png",
                    "false": "/assets/icons/status/incatif.png"
                }*/
            if (this.valid && this.displayYes) {
                this.icon = params["true"];
            }
            else if (this.displayNo) {
                this.icon = params["false"];
            }
        };
        YesNoComponent.prototype.ngOnChanges = function (changes) {
            this.ngOnInit();
        };
        YesNoComponent.ctorParameters = function () { return [
            { type: TableService }
        ]; };
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], YesNoComponent.prototype, "valid", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], YesNoComponent.prototype, "displayNo", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], YesNoComponent.prototype, "displayYes", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], YesNoComponent.prototype, "size", void 0);
        YesNoComponent = __decorate([
            core.Component({
                selector: 'app-yes-nox',
                template: "<span [style]=\"css\" >\n    <img [src]=\"icon\" [style]=\"css\">\n</span>\n",
                styles: [""]
            }),
            __metadata("design:paramtypes", [TableService])
        ], YesNoComponent);
        return YesNoComponent;
    }());

    /***********************************************************
     **  @project MS_Nowboard                              **
     **  @file ComponentRegistry                                         **
     **  @author Brice Daupiard <brice.daupiard@smartiiz.com>  **
     **  @Date 12/03/2021                                         **
     ***********************************************************/

    (function (CellsComponentList) {
        CellsComponentList["ButtonLink"] = "button-link";
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
    })(exports.CellsComponentList || (exports.CellsComponentList = {}));

    var CoreMatTable = /** @class */ (function (_super) {
        __extends(CoreMatTable, _super);
        function CoreMatTable(data, sortRules, rangeRules, size, detailRaws) {
            if (size === void 0) { size = 20; }
            if (detailRaws === void 0) { detailRaws = true; }
            var _this = _super.call(this) || this;
            _this.number = 0;
            _this.startWith = 0;
            _this.size = size;
            _this.data = __spread(data);
            _this.backUpData = __spread(data);
            _this.totalElements = data.length;
            _this.pageSort = new rxjs.BehaviorSubject(sortRules);
            _this.pageFilterDate = new rxjs.BehaviorSubject(null);
            _this.pageFilter = new rxjs.BehaviorSubject('');
            _this.pageNumber = new rxjs.BehaviorSubject(_this.startWith);
            _this.page$ = _this.pageSort.pipe(operators.switchMap(function (sortAction) { return _this.pageFilter.pipe(operators.debounceTime(500))
                .pipe(operators.switchMap(function (filter) { return _this.pageFilterDate.pipe(operators.switchMap(function (range) { return _this.pageNumber.pipe(operators.switchMap(function (page) { return rxjs.from([{
                    content: _this.slice(_this.sortData(_this.filterData(_this.filterDateRange(_this.data, range), filter), sortAction), page, _this.size, detailRaws)
                }]); }), operators.share()); })); })); }));
            return _this;
            /*
        
            (likes: any[]) => {
               return likes.length === 0 ?
                 Observable.of(likes) :
                 Observable.combineLatest(
                   likes.map(like => this.af.database.object("/citations/" + like.$key))
               )
             }
        
            this.page$ = this.pageFilterDate.pipe(
               startWith(rangeRules),
               switchMap(range => this.pageFilter.pipe(debounceTime(500)).pipe(
                 startWith(''),
                 switchMap(filter => this.pageSort.pipe(
                   startWith(sortRules),
                   switchMap(sortAction => this.pageNumber.pipe(
                     startWith(this.startWith),
                     switchMap(page => from([{
                       content: this.slice(
                         this.sortData(
                           this.filterData(
                             this.filterDateRange(
                               this.data, range
                             ), filter
                           ), sortAction
                         ), page, this.size, detailRaws)
                     }])),
                     share()
                   ))))
               )));*/
        }
        CoreMatTable.prototype.filterDateRange = function (data, range) {
            if (!range || (!range.valueStart && !range.valueEnd)) {
                return data;
            }
            else if (data && data.length) {
                return data.filter(function (e) {
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
        };
        CoreMatTable.prototype.ponderation = function (str, searchKey) {
            var e_1, _a;
            var stack = str.split(' ');
            var pond = 0;
            try {
                for (var stack_1 = __values(stack), stack_1_1 = stack_1.next(); !stack_1_1.done; stack_1_1 = stack_1.next()) {
                    var s = stack_1_1.value;
                    var search = s.replace(new RegExp(' ', 'g'), '');
                    if (search && search.includes(searchKey)) {
                        pond++;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (stack_1_1 && !stack_1_1.done && (_a = stack_1.return)) _a.call(stack_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return pond;
        };
        CoreMatTable.prototype.filterData = function (data, filter) {
            var e_2, _a, e_3, _b;
            if (data.length === 0 && this.data) {
                data = this.data;
            }
            var result = [];
            if (filter && filter.replace(/[^a-zA-Z ]/g, " ")) {
                try {
                    for (var data_1 = __values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                        var e = data_1_1.value;
                        e.pond = 0;
                        var dataRaw = JSON.stringify(e).toLowerCase()
                            .replace(/[^a-zA-Z0-9 ]/g, " ");
                        var stack = filter.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, " ")
                            .split(' ');
                        var combination = 0;
                        try {
                            for (var stack_2 = (e_3 = void 0, __values(stack)), stack_2_1 = stack_2.next(); !stack_2_1.done; stack_2_1 = stack_2.next()) {
                                var k = stack_2_1.value;
                                if (dataRaw.includes(k)) {
                                    var pond = this.ponderation(dataRaw, k);
                                    if (!e.pond) {
                                        e.pond = 0;
                                    }
                                    e.pond += pond;
                                    combination++;
                                }
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (stack_2_1 && !stack_2_1.done && (_b = stack_2.return)) _b.call(stack_2);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                        if (e.pond && combination === stack.length) {
                            result.push(e);
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                return result.filter((function (e) { return e.pond; })).sort(function (a, b) { return a > b ? 1 : (a < b ? -1 : 0); });
            }
            else {
                return data;
            }
        };
        CoreMatTable.prototype.sortData = function (data, sortAction) {
            var _this = this;
            if (sortAction.direction !== '') {
                return data.sort(function (a, b) {
                    return _this.compare(a[sortAction.active], b[sortAction.active], sortAction.direction === 'asc');
                });
            }
            else {
                return data;
            }
        };
        CoreMatTable.prototype.compare = function (a, b, isAsc) {
            if (!a) {
                a = null;
            }
            if (!b) {
                b = null;
            }
            return (((Array.isArray(a) ? a.length : a) > ((Array.isArray(b) ? b.length : b)) ? -1 : 1) * (isAsc ? 1 : -1));
        };
        CoreMatTable.prototype.fetch = function (page) {
            this.pageNumber.next(page);
        };
        CoreMatTable.prototype.sortIt = function (sortidea) {
            this.pageSort.next(sortidea);
        };
        CoreMatTable.prototype.filter = function (myFilter) {
            if (!myFilter.target.value || !myFilter.target.value.trim()) {
                this.totalElements = this.data.length;
            }
            this.pageFilter.next(myFilter.target.value);
        };
        CoreMatTable.prototype.filterDate = function (dateFilter) {
            this.pageFilterDate.next(dateFilter);
        };
        CoreMatTable.prototype.connect = function () {
            return this.page$.pipe(operators.pluck('content'));
        };
        CoreMatTable.prototype.disconnect = function () {
        };
        CoreMatTable.prototype.slice = function (data, start, end, detailRow) {
            if (start === void 0) { start = 0; }
            if (end === void 0) { end = 20; }
            if (detailRow === void 0) { detailRow = true; }
            var rows = [];
            this.totalElements = data.length;
            if (this.totalElements) {
                data = data.slice(start * end, (start * end) + end);
                return data;
            }
            else {
                return rows;
            }
        };
        return CoreMatTable;
    }(collections.DataSource));

    var TranslateService = /** @class */ (function () {
        function TranslateService() {
            this.lang = {
                'fr': {
                    'SEARCH': "Recherche",
                    'OPEN': 'Ouvrir',
                    'CANCEL_SEARCH': 'Annuler la recherche',
                    'NO_RESULT': 'Aucun résultat correspondant',
                },
                'en': {
                    'SEARCH': "Search",
                    'OPEN': 'Open',
                    'CANCEL_SEARCH': 'Cancel search',
                    'NO_RESULT': 'No corresponding result',
                }
            };
        }
        TranslateService.prototype.translate = function (l, word) {
            return this.lang[l][word];
        };
        TranslateService.ɵprov = core.ɵɵdefineInjectable({ factory: function TranslateService_Factory() { return new TranslateService(); }, token: TranslateService, providedIn: "root" });
        TranslateService = __decorate([
            core.Injectable({
                providedIn: 'root'
            }),
            __metadata("design:paramtypes", [])
        ], TranslateService);
        return TranslateService;
    }());

    var TableComponent = /** @class */ (function () {
        function TableComponent(router, route, service, detector, translate) {
            this.router = router;
            this.route = route;
            this.service = service;
            this.detector = detector;
            this.translate = translate;
            this.displayDetail = false;
            this.btnOverride = false;
            this.callFunction = new core.EventEmitter();
            this.filter = [];
            this.index = 0;
            this.open = '';
            this.search = '';
            this.cancelSearch = '';
            this.noResult = '';
        }
        TableComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.open = this.translate.translate(this.lang, 'OPEN');
            this.search = this.translate.translate(this.lang, 'SEARCH');
            this.cancelSearch = this.translate.translate(this.lang, 'CANCEL_SEARCH');
            this.noResult = this.translate.translate(this.lang, 'NO_RESULT');
            if (this.data) {
                this.expandedElement = false;
                this.data.paginator = this.paginatorCurrent;
                this.data.sort = this.sortCurrent;
                this.data.pageNumber.subscribe(function (newpage) {
                    if (newpage > 0) {
                        _this.router.navigate([], {
                            relativeTo: _this.route,
                            queryParams: { page: newpage + 1 },
                            queryParamsHandling: 'merge',
                        });
                    }
                    else if (newpage === 0) {
                        _this.router.navigate([], {
                            relativeTo: _this.route,
                            queryParams: { page: null },
                            queryParamsHandling: 'merge',
                        });
                    }
                    if (_this.data && _this.data.paginator && _this.data.paginator.pageIndex !== newpage) {
                        _this.data.paginator.pageIndex = newpage;
                    }
                });
                var page = this.route.snapshot.queryParams["page"];
                if (page) {
                    var currentPage = Number(page) - 1;
                    this.data.startWith = currentPage;
                    this.data.fetch(currentPage);
                    this.data.number = currentPage;
                }
                this.PrivateColumnDefinitions = this.columnDefinitions;
                this.buildHeaders().catch(function (err) { return console.log('Error build table', err); });
                this.service.updateHeader.subscribe(function (status) {
                    if (status === true) {
                        _this.displayedColumns = null;
                        _this.columnsToDisplay = null;
                        _this.PrivateColumnDefinitions = _this.service.displayColumn;
                        console.log('Module table -> New column definitions', _this.PrivateColumnDefinitions);
                        _this.buildHeaders().catch(function (err) { return console.log('Error build table', err); });
                        _this.detector.detectChanges();
                    }
                });
            }
        };
        TableComponent.prototype.buildHeaders = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, tmp, _b, _c, k;
                var e_1, _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, this.sort()];
                        case 1:
                            _a.displayedColumns = _e.sent();
                            if (this.displayedColumns) {
                                tmp = [];
                                try {
                                    for (_b = __values(this.displayedColumns), _c = _b.next(); !_c.done; _c = _b.next()) {
                                        k = _c.value;
                                        tmp.push(k.key);
                                    }
                                }
                                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                                finally {
                                    try {
                                        if (_c && !_c.done && (_d = _b.return)) _d.call(_b);
                                    }
                                    finally { if (e_1) throw e_1.error; }
                                }
                                this.columnsToDisplay = __spread(tmp);
                            }
                            console.log('Module Table New Update Column Definition', this.columnsToDisplay);
                            return [2 /*return*/];
                    }
                });
            });
        };
        TableComponent.prototype.generateClass = function (Class) {
            var e_2, _a;
            var MyClass = ['default-table-class'];
            try {
                for (var Class_1 = __values(Class), Class_1_1 = Class_1.next(); !Class_1_1.done; Class_1_1 = Class_1.next()) {
                    var c = Class_1_1.value;
                    if (c && c !== '') {
                        MyClass.push(c);
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (Class_1_1 && !Class_1_1.done && (_a = Class_1.return)) _a.call(Class_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return MyClass;
        };
        TableComponent.prototype.sort = function () {
            return __awaiter(this, void 0, void 0, function () {
                var compare;
                return __generator(this, function (_a) {
                    compare = function (a, b) {
                        return (a.order < b.order ? -1 : (a.order > b.order ? 1 : 0));
                    };
                    if (this.PrivateColumnDefinitions) {
                        return [2 /*return*/, __spread(this.PrivateColumnDefinitions.sort(compare))];
                    }
                    return [2 /*return*/];
                });
            });
        };
        TableComponent.prototype.buildLink = function (override, element) {
            if (override.length >= 2) {
                var basePath = override[0];
                for (var i = 1; i < override.length; i++) {
                    basePath += '/' + element[override[i]];
                }
                return basePath;
            }
        };
        TableComponent.prototype.Join = function (elem, override, joinKey) {
            if (joinKey === void 0) { joinKey = '\n'; }
            var value = [];
            for (var x in elem) {
                if (override.indexOf(x) > -1) {
                    value.push(elem[x]);
                }
            }
            return value.join(joinKey);
        };
        TableComponent.prototype.reset = function () {
            this.data.filter({
                target: {
                    value: ''
                }
            });
            return true;
        };
        TableComponent.prototype.expandShow = function (template) {
        };
        TableComponent.prototype.ngOnChanges = function (changes) {
            this.ngOnInit();
        };
        TableComponent.ctorParameters = function () { return [
            { type: router.Router },
            { type: router.ActivatedRoute },
            { type: TableService },
            { type: core.ChangeDetectorRef },
            { type: TranslateService }
        ]; };
        __decorate([
            core.ViewChild('MatPaginatorCurrent', { static: true }),
            __metadata("design:type", paginator.MatPaginator)
        ], TableComponent.prototype, "paginatorCurrent", void 0);
        __decorate([
            core.ViewChild('table', { static: true }),
            __metadata("design:type", sort.MatSort)
        ], TableComponent.prototype, "sortCurrent", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Array)
        ], TableComponent.prototype, "columnDefinitions", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], TableComponent.prototype, "displayDetail", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], TableComponent.prototype, "displayComponent", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], TableComponent.prototype, "data", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], TableComponent.prototype, "lang", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], TableComponent.prototype, "btnOverride", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", core.EventEmitter)
        ], TableComponent.prototype, "callFunction", void 0);
        TableComponent = __decorate([
            core.Component({
                selector: 'ngx-design-table',
                template: "<div class=\"table-wrapper\">\n  <div class=\"row\" style=\"height: 84px;background: transparent!important;\">\n    <div class=\" elevation-z1\">\n      <div class=\"col-lg-12 search-container\">\n        <input class=\"search-box\" type=\"text\" [placeholder]=\"search\" [maxLength]=\"100\"\n               (input)=\"((($event.target.value.length > 1 || $event.target.value.length === 0)\n                        && $event.target.value.length < 200)\n                                       ? data.filter($event) : null)\"\n               #filterOngoing>\n        <a class=\"close-search\" *ngIf=\"filterOngoing.value\"\n           [matTooltip]=\"cancelSearch\"\n           (click)=\"reset() && filterOngoing.value = ''\">\n          <img [src]=\"'/assets/icons/search_off-24px.svg'\">\n        </a>\n      </div>\n    </div>\n  </div>\n  <!-- Table -->\n  <table mat-table #table=\"matSort\"\n         [dataSource]=\"data \" multiTemplateDataRows matSort\n         class=\"mat-elevation-z8\" *ngIf=\"displayedColumns && columnsToDisplay && data && data.totalElements\"\n         (matSortChange)=\"data.sortIt($event)\">\n    <ng-container [matColumnDef]=\"column.key\" *ngFor=\"let column of displayedColumns\">\n      <ng-container *ngIf=\"column.sort\">\n        <th mat-header-cell *matHeaderCellDef\n            [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\"\n            mat-sort-header>\n          <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n        </th>\n      </ng-container>\n      <ng-container *ngIf=\"!column.sort\">\n        <!-- Ajouter fonction generate Class -->\n        <th mat-header-cell *matHeaderCellDef\n            [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\">\n          <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n        </th>\n      </ng-container>\n      <td mat-cell *matCellDef=\"let element\"\n          [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : ''])\">\n        <ng-container [ngSwitch]=\"column.module\">\n          <!-- Button click -->\n          <ng-container *ngSwitchCase=\"'button-click'\">\n            <a [matTooltip]=\"open\"\n               class=\"mat-button nowboard-btn btn-xs\"\n               (click)=\"callFunction.emit(element[column.key])\">\n              <ng-container *ngIf=\"column.display\">\n                <app-is-mat-icon [input]=\"column.display\"></app-is-mat-icon>\n              </ng-container>\n              <ng-container *ngIf=\"!column.display\">\n                {{element[column.key]}}\n              </ng-container>\n            </a>\n          </ng-container>\n          <!-- Button link -->\n          <ng-container *ngSwitchCase=\"'button-link'\">\n            <a *ngIf=\"element.new\" [matTooltip]=\"open\"\n               class=\"mat-button btn-xs\"\n               (click)=\"element.new = false\"\n               [ngClass]=\"btnOverride == true ? 'link-btn': 'nowboard-btn'\"\n               routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\"\n               matBadge=\"*\" matBadgePosition=\"before\"\n               matBadgeColor=\"accent\">\n              <ng-container *ngIf=\"column.display\">\n                <app-is-mat-icon [input]=\"column.display\"></app-is-mat-icon>\n              </ng-container>\n              <ng-container *ngIf=\"!column.display\">\n                {{element[column.key]}}\n              </ng-container>\n            </a>\n            <a *ngIf=\"!element.new\"\n               [matTooltip]=\"open\"\n               class=\"mat-button btn-xs\"\n               [ngClass]=\"btnOverride == true ? 'link-btn': 'nowboard-btn'\"\n               routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\">\n              <ng-container *ngIf=\"column.display\">\n                <app-is-mat-icon class=\"is-mat-icon-cell\" [input]=\"column.display\"></app-is-mat-icon>\n              </ng-container>\n              <ng-container *ngIf=\"!column.display\">\n                {{element[column.key]}}\n              </ng-container>\n            </a>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"'it-category'\">\n            <app-equipement-type [name]=\"element[column.key]\" [type]=\"element[column.override]\"></app-equipement-type>\n          </ng-container>\n          <!-- icon it status -->\n          <ng-container *ngSwitchCase=\"'it-status'\">\n            <app-equipement-status [type]=\"element[column.key]\"></app-equipement-status>\n          </ng-container>\n          <!-- icon customer rank -->\n          <ng-container *ngSwitchCase=\"'customer-rank'\">\n            <app-customer-rank [type]=\"element[column.key]\"></app-customer-rank>\n          </ng-container>\n          <!-- icon priority-->\n          <ng-container *ngSwitchCase=\"'priority'\">\n            <icon-priority [icon]=\"element['Icon']\" [iconLabel]=\"element['Priority'] || null\"></icon-priority>\n          </ng-container>\n          <!-- icon gender avatar-->\n          <ng-container *ngSwitchCase=\"'gender-avatar'\">\n            <app-gender [type]=\"element[column.key]\"></app-gender>\n          </ng-container>\n\n          <!-- icon gender avatar-->\n          <ng-container *ngSwitchCase=\"'phone-display'\">\n            <app-phone-display [number]=\"element[column.key]\"></app-phone-display>\n          </ng-container>\n\n          <!-- icon gender avatar-->\n          <ng-container *ngSwitchCase=\"'yes-no-display'\">\n            <app-yes-nox\n              *ngIf=\"column.config && (column.config.displayNo !== undefined && column.config.displayYes !== undefined)\"\n              [valid]=\"element[column.key]\" [size]=\"column.config?.sizeIcon\"\n              [displayNo]=\"column.config.displayYes\" [displayYes]=\"column.config.displayNo\"\n            >\n            </app-yes-nox>\n            <app-yes-nox\n              *ngIf=\"(!column.config || (column.config && !(column.config.displayNo || column.config.displayYes)))\"\n              [valid]=\"element[column.key]\" [size]=\"column.config?.sizeIcon\">\n            </app-yes-nox>\n          </ng-container>\n          <!-- icon origin-->\n          <ng-container *ngSwitchCase=\"'origin'\">\n            <icon-origin [icon]=\"element[column.key]\"></icon-origin>\n          </ng-container>\n          <!-- icon name avatar-->\n          <ng-container *ngSwitchCase=\"'name-avatar'\">\n            <name-avatar matTooltip=\"{{Join(element, column.override)}}\"\n                         [src]=\"element[column.key]\"\n                         [matTooltipClass]=\"'my-tooltip'\">\n            </name-avatar>\n          </ng-container>\n          <!-- date format -->\n          <ng-container *ngSwitchCase=\"'date-format'\">\n            <date-format style=\"padding-right: 10px\" [date]=\"element[column.key]\"></date-format>\n          </ng-container>\n          <!-- count rows -->\n          <ng-container *ngSwitchCase=\"'count-row'\">\n                       <span style=\"padding-left: 14px\">\n                           {{(element[column.key] && element[column.key].length ? element[column.key].length : '-')}}\n                       </span>\n          </ng-container>\n          <ng-container *ngSwitchDefault>\n            {{element[column.key]}}\n          </ng-container>\n        </ng-container>\n\n      </td>\n    </ng-container>\n    <ng-container matColumnDef=\"expandedDetailX\" *ngIf=\"displayDetail\">\n      <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\"\n          [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\"\n          style=\"height: 0\">\n        <div class=\"element-detail\" [innerHTML]=\"element.expanded\">\n        </div>\n      </td>\n    </ng-container>\n    <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n    <ng-container *ngIf=\"displayDetail\">\n      <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\"\n          class=\"element-row\"\n          [class.expanded]=\"expandedElement == element\"\n          (click)=\"expandedElement === element? expandedElement = null : expandedElement = element\">\n      </tr>\n      <tr mat-row *matRowDef=\"let row; columns: ['expandedDetailX']\" class=\"detail-row\">\n\n      </tr>\n    </ng-container>\n    <ng-container *ngIf=\"!displayDetail\">\n      <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\"\n          class=\"element-row\">\n      </tr>\n    </ng-container>\n  </table>\n  <ng-container *ngIf=\"data && data.totalElements === 0\">\n    <div class=\"row\" style=\"height: 84px;background: transparent!important;\">\n      <div class=\"\">\n        <div class=\"col-lg-12 search-container\" style=\"text-align: center\">\n          {{ noResult }}\n        </div>\n      </div>\n    </div>\n  </ng-container>\n  <mat-paginator #MatPaginatorCurrent *ngIf=\"data && data.totalElements > 0\" [length]=\"data.totalElements\"\n                 [pageSize]=\"data.size\" [pageIndex]=\"data.number\" [hidePageSize]=\"true\"\n                 (page)=\"data.fetch($event.pageIndex)\" showFirstLastButtons></mat-paginator>\n</div>\n",
                animations: [animations.trigger('detailExpand', [
                        animations.state('collapsed', animations.style({ height: '0px', minHeight: '0', display: 'none' })),
                        animations.state('expanded', animations.style({ height: '*' })),
                        animations.transition('expanded <=> collapsed', animations.animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                    ])],
                encapsulation: core.ViewEncapsulation.None,
                styles: [".table-wrapper table{width:100%}.table-wrapper .mat-cell{padding-left:10px}.table-wrapper png-icon{padding-left:17px}.table-wrapper tr:nth-child(1){min-height:48px}.table-wrapper .detail-row{height:auto!important}.table-wrapper tr.element-row:not(.expanded-row):hover{background:#f5f5f5}.table-wrapper tr.element-row:not(.expanded-row):active{background:#efefef}.table-wrapper .element-row .mat-cell{padding-right:5px}.table-wrapper .text-align-right{text-align:right!important}.table-wrapper .text-align-left{text-align:left!important}.table-wrapper .text-align-center{text-align:center!important}.table-wrapper .element-detail{overflow:hidden;display:flex;padding-top:10px;padding-bottom:10px}@media screen and (min-width:1441px){.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px;font-size:13px!important}}.table-wrapper .u-1{width:4%!important;max-width:4%!important;min-width:4%!important}.table-wrapper .u-2{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-3{width:7%!important;max-width:7%!important;min-width:7%!important}@media screen and (max-width:1440px){.table-wrapper a.mat-button{padding-top:10px}.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px;font-size:11px!important}.table-wrapper .u-1{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-2{width:6%!important;max-width:6%!important;min-width:6%!important}.table-wrapper .u-3{width:10%!important;max-width:10%!important;min-width:10%!important}}.table-wrapper .u-4{max-width:11%!important;width:11%!important;min-width:11%!important}.table-wrapper .u-5{max-width:10%!important;width:10%!important;min-width:10%!important}.table-wrapper .u-6{max-width:15%!important;width:15%!important;min-width:15%!important}.table-wrapper .u-7{width:20%!important;min-width:20%!important}.table-wrapper .u-8{width:25%!important;min-width:25%!important}.table-wrapper .u-9{width:30%!important;min-width:30%!important}.is-mat-icon-cell{width:auto;height:auto;display:auto}.is-mat-icon-cell .mat-icon{font-size:14px}.is-mat-icon-cell span,app-is-mat-icon span{margin:auto}.link-btn{color:#171f26;font:900 14px/20px nexa;letter-spacing:0;text-align:center;text-decoration:underline}"]
            }),
            __metadata("design:paramtypes", [router.Router,
                router.ActivatedRoute,
                TableService,
                core.ChangeDetectorRef,
                TranslateService])
        ], TableComponent);
        return TableComponent;
    }());

    var TableModule = /** @class */ (function () {
        function TableModule(parentModule) {
            if (parentModule) {
                throw new Error('TableModule is already loaded. Import it in the AppModule only');
            }
        }
        TableModule_1 = TableModule;
        TableModule.forRoot = function (config) {
            return {
                ngModule: TableModule_1,
                providers: [
                    { provide: '__NgxDesignTable__', useValue: config },
                    TableService
                ]
            };
        };
        var TableModule_1;
        TableModule.ctorParameters = function () { return [
            { type: TableModule, decorators: [{ type: core.Optional }, { type: core.SkipSelf }] }
        ]; };
        TableModule = TableModule_1 = __decorate([
            core.NgModule({
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
                    YesNoComponent
                ],
                imports: [
                    PngIconModule,
                    paginator.MatPaginatorModule,
                    table.MatTableModule,
                    sort.MatSortModule,
                    tooltip.MatTooltipModule,
                    common.CommonModule,
                    icon.MatIconModule,
                    router.RouterModule,
                    badge.MatBadgeModule
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
                    paginator.MatPaginatorModule,
                    table.MatTableModule,
                    sort.MatSortModule,
                    tooltip.MatTooltipModule,
                    common.CommonModule,
                    icon.MatIconModule,
                    router.RouterModule,
                    badge.MatBadgeModule
                ]
            }),
            __param(0, core.Optional()), __param(0, core.SkipSelf()),
            __metadata("design:paramtypes", [TableModule])
        ], TableModule);
        return TableModule;
    }());

    exports.CoreMatTable = CoreMatTable;
    exports.CustomerRankComponent = CustomerRankComponent;
    exports.DateFormatComponent = DateFormatComponent;
    exports.EquipementStatusComponent = EquipementStatusComponent;
    exports.EquipementTypeComponent = EquipementTypeComponent;
    exports.GenderComponent = GenderComponent;
    exports.IsMatIconComponent = IsMatIconComponent;
    exports.NameAvatarComponent = NameAvatarComponent;
    exports.OriginComponent = OriginComponent;
    exports.PhoneDisplayComponent = PhoneDisplayComponent;
    exports.PngIconComponent = PngIconComponent;
    exports.PngIconModule = PngIconModule;
    exports.PriorityComponent = PriorityComponent;
    exports.TableComponent = TableComponent;
    exports.TableModule = TableModule;
    exports.TableService = TableService;
    exports.YesNoComponent = YesNoComponent;
    exports.ɵa = TranslateService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=table.umd.js.map
