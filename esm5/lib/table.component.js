import { __awaiter, __decorate, __generator, __metadata, __read, __spread, __values } from "tslib";
import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { CellsComponentList } from './setting/CellsComponentRegistry';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { CoreMatTable } from './core-data-table';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { TableService } from './table.service';
import { TranslateService } from './translate.service';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
var TableComponent = /** @class */ (function () {
    function TableComponent(router, route, service, detector, translate, changeDetectorRef) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.service = service;
        this.detector = detector;
        this.translate = translate;
        this.changeDetectorRef = changeDetectorRef;
        this.displayDetail = false;
        this.btnOverride = false;
        this.callFunction = new EventEmitter();
        this.inputSearch = null;
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
        this._inputSearch = new BehaviorSubject('');
        this._inputSearch.pipe(debounceTime(500)).subscribe(function (search) {
            if (search === void 0) { search = null; }
            console.log('Searching....', search);
            if (search) {
                //
                _this.data.filter(search);
                _this.data.fetch(0);
            }
        });
    }
    TableComponent.prototype.expand = function (element) {
        if (this.blockDetails) {
            return;
        }
        if (this.expandedElement === element) {
            this.expandedElement = null;
        }
        else {
            this.expandedElement = element;
        }
        console.log(this.expandedElement);
    };
    TableComponent.prototype.ngOnInit = function () {
        var _this = this;
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
                    console.log('on passe dans la ligne 142');
                }
                _this.changeDetectorRef.markForCheck();
            });
            var page = this.route.snapshot.queryParams['page'];
            if (page) {
                var currentPage = Number(page) - 1;
                this.data.startWith = currentPage;
                this.data.fetch(currentPage);
                //this.data.number = currentPage;
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
    TableComponent.prototype.ngAfterViewChecked = function () {
        this.showTable = true;
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
        console.log(this.data);
        if (this.data && this.inputSearch) {
            this._inputSearch.next(this.inputSearch === '' ? null : this.inputSearch);
        }
        /* if ((this.inputSearch.length > 1 || this.inputSearch.length === 0)
           && this.inputSearch.length < 200) {
           if (this.data) {
             this.data.filter(this.inputSearch);
             this.data.pageNumber.next(0);
             this.data.fetch(0);
             this.data.number = 0;
             this.changeDetectorRef.markForCheck();
           }
         }*/
        this.ngOnInit();
    };
    TableComponent.ctorParameters = function () { return [
        { type: Router },
        { type: ActivatedRoute },
        { type: TableService },
        { type: ChangeDetectorRef },
        { type: TranslateService },
        { type: ChangeDetectorRef }
    ]; };
    __decorate([
        ViewChild('MatPaginatorCurrent', { static: true }),
        __metadata("design:type", MatPaginator)
    ], TableComponent.prototype, "paginatorCurrent", void 0);
    __decorate([
        ViewChild('table', { static: true }),
        __metadata("design:type", MatSort)
    ], TableComponent.prototype, "sortCurrent", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], TableComponent.prototype, "columnDefinitions", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], TableComponent.prototype, "displayDetail", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], TableComponent.prototype, "displayComponent", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TableComponent.prototype, "data", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], TableComponent.prototype, "lang", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TableComponent.prototype, "btnOverride", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], TableComponent.prototype, "callFunction", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], TableComponent.prototype, "inputSearch", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TableComponent.prototype, "EmptyRow", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TableComponent.prototype, "blockDetails", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], TableComponent.prototype, "clicked", void 0);
    TableComponent = __decorate([
        Component({
            selector: 'ngx-design-table',
            template: "<div class=\"table-wrapper\">\n  <div class=\"row\" style=\"height: 20px;background: transparent!important; box-shadow: none !important\">\n    <div class=\"\">\n      <!--<div class=\"col-lg-12 search-container\">\n        <mat-icon style=\"left: 16%; position: absolute; margin-top: 10px;\">search</mat-icon>\n        <input class=\"search-box\" type=\"text\" [placeholder]=\"search\" [maxLength]=\"100\"\n        [value]=\"inputSearch\"\n        (change)=\"onChange($event)\"\n               (input)=\"((($event.target.value.length > 1 || $event.target.value.length === 0)\n                        && $event.target.value.length < 200)\n                                       ? data.filter($event) : null)\"\n               #filterOngoing>\n        <a class=\"close-search\" *ngIf=\"filterOngoing.value\"\n           [matTooltip]=\"cancelSearch\"\n           (click)=\"reset() && filterOngoing.value = ''\">\n          <img [src]=\"'/assets/icons/search_off-24px.svg'\">\n        </a>\n      </div>-->\n    </div>\n  </div>\n  <!-- Table -->\n  <table mat-table #table=\"matSort\"\n         [dataSource]=\"data \" multiTemplateDataRows matSort\n         class=\"\" *ngIf=\"displayedColumns && columnsToDisplay && data && data.totalElements && showTable\"\n         (matSortChange)=\"data.sortIt($event)\">\n    <ng-container [matColumnDef]=\"column.key\" *ngFor=\"let column of displayedColumns\">\n      <ng-container *ngIf=\"column.sort\">\n        <th mat-header-cell *matHeaderCellDef\n            [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\"\n            mat-sort-header>\n          <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n        </th>\n      </ng-container>\n      <ng-container *ngIf=\"!column.sort\">\n        <!-- Ajouter fonction generate Class -->\n        <ng-container *ngIf=\"column.clickable\">\n          <th mat-header-cell *matHeaderCellDef\n              (click)=\"clicked.emit({key : column.key, statement : (column.statement = !column.statement)})\"\n              [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\"\n              style=\"cursor: pointer;\">\n            <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n            <app-is-mat-icon\n              *ngIf=\"column.valueStatement && column.statement !== undefined\"\n              [input]=\"column.valueStatement[column.statement ? 1 : 0]\">\n            </app-is-mat-icon>\n          </th>\n        </ng-container>\n        <ng-container *ngIf=\"!column.clickable\">\n          <th mat-header-cell *matHeaderCellDef\n              [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\">\n            <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n          </th>\n        </ng-container>\n        <th mat-header-cell *matHeaderCellDef\n            [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\">\n          <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n        </th>\n      </ng-container>\n\n      <td *ngIf=\"EmptyRow\" [attr.colspan]=\"columnsToDisplay.length\" class=\"empty-row\"></td>\n      <td class=\"row-style\" mat-cell *matCellDef=\"let element\"\n          [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : ''])\">\n        <ng-container *ngIf=\"element !== 'empty'\" [ngSwitch]=\"column.module\">\n          <!-- Button click -->\n          <ng-container *ngSwitchCase=\"'button-click'\">\n            <a [matTooltip]=\"open\"\n               class=\"btn-link-text\"\n               (click)=\"callFunction.emit(element[column.key])\">\n              <!--<ng-container *ngIf=\"column.display\">\n                <app-is-mat-icon [input]=\"column.display\"></app-is-mat-icon>\n              </ng-container>\n              <ng-container *ngIf=\"!column.display\">\n                {{element[column.key]}}\n              </ng-container>-->\n              {{ details }}\n            </a>\n          </ng-container>\n          <!-- Button link -->\n          <ng-container *ngSwitchCase=\"'button-link'\">\n            <!--                matBadge=\"*\" matBadgePosition=\"before\"\n               matBadgeColor=\"accent\" -->\n            <a *ngIf=\"element.new\" [matTooltip]=\"open\"\n               class=\"mat-button btn-xs\"\n               (click)=\"element.new = false\"\n               [ngClass]=\"btnOverride == true ? 'link-btn': 'nowboard-btn'\"\n               routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\">\n              <ng-container *ngIf=\"column.display\">\n                <app-is-mat-icon [input]=\"column.display\"></app-is-mat-icon>\n              </ng-container>\n              <ng-container *ngIf=\"!column.display\">\n                {{element[column.key]}}\n              </ng-container>\n            </a>\n            <a *ngIf=\"!element.new\"\n               [matTooltip]=\"open\"\n               class=\"mat-button btn-xs\"\n               [ngClass]=\"btnOverride == true ? 'link-btn': 'nowboard-btn'\"\n               routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\">\n              <ng-container *ngIf=\"column.display\">\n                <app-is-mat-icon class=\"is-mat-icon-cell\" [input]=\"column.display\"></app-is-mat-icon>\n              </ng-container>\n              <ng-container *ngIf=\"!column.display\">\n                {{element[column.key]}}\n              </ng-container>\n            </a>\n          </ng-container>\n          <!-- Button link text -->\n          <ng-container *ngSwitchCase=\"'button-link-text'\">\n            <a [matTooltip]=\"open\"\n               class=\"btn-link-text btn-xs\"\n               (click)=\"element.new = false\"\n               routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\">\n              {{ details }}\n            </a>\n          </ng-container>\n          <!-- icon custom-->\n          <ng-container *ngSwitchCase=\"'custom-icon'\">\n            <input type=\"hidden\" [value]=\"element[column.key]\">\n            <img *ngIf=\"element[column.key] && column.valueOverride\" [src]=\"column.valueOverride[element[column.key]]\" style=\"width: 20px; height: 20px;\">\n          </ng-container>\n          <ng-container *ngSwitchCase=\"'it-category'\">\n            <app-equipement-type [name]=\"element[column.key]\" [type]=\"element[column.override]\"></app-equipement-type>\n          </ng-container>\n          <!-- icon it status -->\n          <ng-container *ngSwitchCase=\"'it-status'\">\n            <app-equipement-status [type]=\"element[column.key]\"></app-equipement-status>\n          </ng-container>\n          <!-- icon customer rank -->\n          <ng-container *ngSwitchCase=\"'customer-rank'\">\n            <app-customer-rank [type]=\"element[column.key]\"></app-customer-rank>\n          </ng-container>\n          <!-- icon priority-->\n          <ng-container *ngSwitchCase=\"'priority'\">\n            <icon-priority [icon]=\"element['Icon']\" [iconLabel]=\"element['Priority'] || null\"></icon-priority>\n          </ng-container>\n          <!-- icon gender avatar-->\n          <ng-container *ngSwitchCase=\"'gender-avatar'\">\n            <app-gender [type]=\"element[column.key]\"></app-gender>\n          </ng-container>\n\n          <!-- icon gender avatar-->\n          <ng-container *ngSwitchCase=\"'phone-display'\">\n            <app-phone-display [number]=\"element[column.key]\"></app-phone-display>\n          </ng-container>\n\n          <!-- icon gender avatar-->\n          <ng-container *ngSwitchCase=\"'yes-no-display'\">\n            <app-yes-nox\n              *ngIf=\"column.config && (column.config.displayNo !== undefined && column.config.displayYes !== undefined)\"\n              [valid]=\"element[column.key]\" [size]=\"column.config?.sizeIcon\"\n              [displayNo]=\"column.config.displayYes\" [displayYes]=\"column.config.displayNo\"\n            >\n            </app-yes-nox>\n            <app-yes-nox\n              *ngIf=\"(!column.config || (column.config && !(column.config.displayNo || column.config.displayYes)))\"\n              [valid]=\"element[column.key]\" [size]=\"column.config?.sizeIcon\">\n            </app-yes-nox>\n          </ng-container>\n          <!-- icon origin-->\n          <ng-container *ngSwitchCase=\"'origin'\">\n            <icon-origin [icon]=\"element[column.key]\"></icon-origin>\n          </ng-container>\n          <!-- icon name avatar-->\n          <ng-container *ngSwitchCase=\"'name-avatar'\">\n            <name-avatar matTooltip=\"{{Join(element, column.override)}}\"\n                         [src]=\"element[column.key]\"\n                         [matTooltipClass]=\"'my-tooltip'\">\n            </name-avatar>\n          </ng-container>\n          <!-- date format -->\n          <ng-container *ngSwitchCase=\"'date-format'\">\n            <date-format style=\"padding-right: 10px\" [date]=\"element[column.key]\"></date-format>\n          </ng-container>\n          <!-- count rows -->\n          <ng-container *ngSwitchCase=\"'count-row'\">\n                       <span style=\"padding-left: 14px\">\n                           {{(element[column.key] && element[column.key].length ? element[column.key].length : '-')}}\n                       </span>\n          </ng-container>\n          <ng-container *ngSwitchDefault>\n            {{element[column.key]}}\n          </ng-container>\n        </ng-container>\n\n        <ng-container *ngIf=\"element === 'empty'\">\n      <td [ngClass]=\"'empty-row'\" mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\">\n        empty row\n      </td>\n    </ng-container>\n\n    </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"expandedDetailX\" *ngIf=\"displayDetail\">\n      <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\"\n          [@detailExpand]=\"expandedElement && element == expandedElement ? 'expanded' : 'collapsed'\"\n          style=\"height: 0\">\n        <div *ngIf=\"element['CaseNumber'] && expandedElement\">\n          <div class=\"element-detail\" [innerHTML]=\"element.expanded\">\n          </div>\n\n          <a [class.nav-expanded]=\"element == expandedElement\"\n             [routerLink]=\"['/ticket/', element['CaseNumber']]\" [title]=\"open\">\n            <img class=\"detail-view-ticket\" src=\"/assets/icons/eye.png\">\n          </a>\n        </div>\n      </td>\n    </ng-container>\n    <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n    <ng-container *ngIf=\"displayDetail\">\n      <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\"\n          class=\"element-row\"\n          [ngClass]=\"!element || element === 'empty'? 'empty-row-none': 'detail-row'\"\n          [class.expanded]=\"expandedElement == element\"\n          (click)=\"expand(element)\">\n      </tr>\n      <tr mat-row *matRowDef=\"let row; columns: ['expandedDetailX']\"\n          [ngClass]=\"!expandedElement || !row || row === 'empty'? 'empty-row': 'detail-row'\">\n\n      </tr>\n    </ng-container>\n    <ng-container *ngIf=\"!displayDetail\">\n      <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\"\n          class=\"element-row\">\n      </tr>\n    </ng-container>\n  </table>\n  <ng-container *ngIf=\"data && data.totalElements === 0\">\n    <div class=\"row\" style=\"height: 84px;background: transparent!important;\">\n      <div class=\"\">\n        <div class=\"col-lg-12 search-container\" style=\"text-align: center\">\n          {{ noResult }}\n        </div>\n      </div>\n    </div>\n  </ng-container>\n  <mat-paginator #MatPaginatorCurrent *ngIf=\"data && data.totalElements > 0\" [length]=\"data.totalElements\"\n                 [pageSize]=\"data.size\" [pageIndex]=\"data.number\" [hidePageSize]=\"true\"\n                 (page)=\"data.fetch($event.pageIndex)\" showFirstLastButtons></mat-paginator>\n</div>\n",
            animations: [trigger('detailExpand', [
                    state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
                    state('expanded', style({ height: '*' })),
                    transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                ])],
            encapsulation: ViewEncapsulation.None,
            styles: [".table-wrapper table{width:100%}.table-wrapper .mat-cell{padding-left:10px}.table-wrapper png-icon{padding-left:17px}.table-wrapper tr:nth-child(1){min-height:48px}.table-wrapper .detail-row{height:auto!important}.table-wrapper tr.element-row:not(.expanded-row):hover{background:#f5f5f5}.table-wrapper tr.element-row:not(.expanded-row):active{background:#efefef}.table-wrapper .text-align-right{text-align:right!important}.table-wrapper .text-align-left{text-align:left!important}.table-wrapper .text-align-center{text-align:center!important}.table-wrapper .element-detail{overflow:hidden;display:flex;padding-top:10px;padding-bottom:10px}@media screen and (min-width:1441px){.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px;font-size:13px!important}}.table-wrapper .u-1{width:4%!important;max-width:4%!important;min-width:4%!important}.table-wrapper .u-2{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-3{width:7%!important;max-width:7%!important;min-width:7%!important}@media screen and (max-width:1440px){.table-wrapper a.mat-button{padding-top:10px}.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px;font-size:11px!important}.table-wrapper .u-1{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-2{width:6%!important;max-width:6%!important;min-width:6%!important}.table-wrapper .u-3{width:10%!important;max-width:10%!important;min-width:10%!important}}.table-wrapper .u-4{max-width:11%!important;width:11%!important;min-width:11%!important}.table-wrapper .u-5{max-width:10%!important;width:10%!important;min-width:10%!important}.table-wrapper .u-6{max-width:15%!important;width:15%!important;min-width:15%!important}.table-wrapper .u-7{width:20%!important;min-width:20%!important}.table-wrapper .u-8{width:25%!important;min-width:25%!important}.table-wrapper .u-9{width:30%!important;min-width:30%!important}.is-mat-icon-cell{width:auto;height:auto;display:auto}.is-mat-icon-cell .mat-icon{font-size:14px}.is-mat-icon-cell span,app-is-mat-icon span{margin:auto}.link-btn{color:#171f26;font-family:\"Nexa Text Bold\";font-size:14px!important;letter-spacing:0;text-align:center;text-decoration:underline}.expanded>.mat-cell>.link-btn{text-decoration:none;font-weight:400}.btn-link-text{background:no-repeat padding-box #e5e8ee;border-radius:4px;text-align:left;font:bold 12px/19px \"Nexa Text\";letter-spacing:0;color:#707070!important;cursor:pointer;padding:10px}.empty-row{background:0 0!important;height:10px!important}.empty-row td{background:0 0!important;height:0}.empty-row-none{display:none!important}"]
        }),
        __metadata("design:paramtypes", [Router,
            ActivatedRoute,
            TableService,
            ChangeDetectorRef,
            TranslateService,
            ChangeDetectorRef])
    ], TableComponent);
    return TableComponent;
}());
export { CoreMatTable, CellsComponentList, TableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sTUFBTSxFQUNOLGFBQWEsRUFDYixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDekQsT0FBTyxFQUFDLFlBQVksRUFBc0UsTUFBTSxtQkFBbUIsQ0FBQztBQUNwSCxPQUFPLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQy9FLE9BQU8sRUFBQyxjQUFjLEVBQUUsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3JELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDckMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBd0M1QztJQTZCRSx3QkFBb0IsTUFBYyxFQUNkLEtBQXFCLEVBQ3JCLE9BQXFCLEVBQ3JCLFFBQTJCLEVBQzNCLFNBQTJCLEVBQzNCLGlCQUFvQztRQUx4RCxpQkFlQztRQWZtQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFD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LFdBQVcsRUFBRSxLQUFLLENBQUMsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7b0JBQzNFLEtBQUssQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUM7b0JBQ3ZDLFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxPQUFPLENBQUMsc0NBQXNDLENBQUMsQ0FBQztpQkFDdEYsQ0FBQyxDQUFDO1lBQ0gsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O1NBQ3RDLENBQUM7eUNBOEI0QixNQUFNO1lBQ1AsY0FBYztZQUNaLFlBQVk7WUFDWCxpQkFBaUI7WUFDaEIsZ0JBQWdCO1lBQ1IsaUJBQWlCO09BbENwRCxjQUFjLENBME1uQjtJQUFELHFCQUFDO0NBQUEsQUExTUQsSUEwTUM7QUFFRCxPQUFPLEVBQ0wsWUFBWSxFQU9aLGtCQUFrQixFQUNsQixjQUFjLEVBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NlbGxzQ29tcG9uZW50TGlzdH0gZnJvbSAnLi9zZXR0aW5nL0NlbGxzQ29tcG9uZW50UmVnaXN0cnknO1xuaW1wb3J0IHtNYXRTb3J0fSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zb3J0JztcbmltcG9ydCB7TWF0UGFnaW5hdG9yfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3InO1xuaW1wb3J0IHtDb3JlTWF0VGFibGUsIENvcmVNYXRUYWJsZUludGVyZmFjZSwgRmlsdGVyRGF0ZUludGVyZmFjZSwgUGFnZSwgUGFnZVJlcXVlc3QsIFNvcnR9IGZyb20gJy4vY29yZS1kYXRhLXRhYmxlJztcbmltcG9ydCB7YW5pbWF0ZSwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFJvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7VGFibGVTZXJ2aWNlfSBmcm9tICcuL3RhYmxlLnNlcnZpY2UnO1xuaW1wb3J0IHtUcmFuc2xhdGVTZXJ2aWNlfSBmcm9tICcuL3RyYW5zbGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tICdyeGpzJztcbmltcG9ydCB7ZGVib3VuY2VUaW1lfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cblxuaW50ZXJmYWNlIGRpc3BsYXlDb2x1bW5zQ29uZmlnIHtcbiAgc2l6ZUljb24/OiBudW1iZXI7XG4gIGRpc3BsYXlZZXM/OiBib29sZWFuO1xuICBkaXNwbGF5Tm8/OiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgZGlzcGxheWVkQ29sdW1uc0ludGVyZmFjZSB7XG4gIGtleTogc3RyaW5nOyAvLyBvYmplY3Qga2V5XG4gIHZhbHVlOiBzdHJpbmc7IC8vIGRpc3BsYXkgY29sdW1uIHZhbHVlc1xuICByYXRpbz86IG51bWJlcjtcbiAgb3JkZXI/OiBudW1iZXI7IC8vIHNvcnQgY29sdW1uXG4gIGNsYXNzPzogc3RyaW5nOyAvLyBjc3MgY2xhc3NcbiAgbW9kdWxlPzogQ2VsbHNDb21wb25lbnRMaXN0O1xuICBvdmVycmlkZT86IHN0cmluZyB8IHN0cmluZ1tdOyAvLyBmb3IgYnVpbGRpbmcgdXJsIG9yIGF2YXRhciBuYW1lXG4gIGRpc3BsYXk/OiBzdHJpbmc7IC8vIGZvcmNlIGRpc3BsYXlpbmcgb3RoZXIgc3R1ZmYgdGhhbiBlbGVtZW50W2ZvY3VzXVxuICBhbGlnbj86IHN0cmluZzsgLy8gY2VsbCBjb250ZW50IGFsaWduICdsZWZ0IGNlbnRlciByaWdodCdcbiAgc29ydD86IGJvb2xlYW47IC8vICdzb3J0YWJsZSBjb2x1bW4nXG4gIGNsaWNrYWJsZT86IGJvb2xlYW47IC8vIGVuYWJsZSBjbGlja2FibGUgY29sdW1uIHdoZW4gc29ydGluZyBpcyBkaXNhYmxlXG4gIHN0YXRlbWVudD86IGJvb2xlYW47IC8vIGJ5IGRlZmF1bHQgc3RhdGVtZW50IGlzIGZhbHNlIGFuZCBpcyB1c2VkIHdpdGggJ2NsaWNrYWJsZScgb3B0aW9uc1xuICB2YWx1ZVN0YXRlbWVudD86IHN0cmluZ1tdO1xuICBjb25maWc/OiBkaXNwbGF5Q29sdW1uc0NvbmZpZztcbiAgdmFsdWVPdmVycmlkZT86IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWRlc2lnbi10YWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RhYmxlLmNvbXBvbmVudC5zY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFt0cmlnZ2VyKCdkZXRhaWxFeHBhbmQnLCBbXG4gICAgc3RhdGUoJ2NvbGxhcHNlZCcsIHN0eWxlKHtoZWlnaHQ6ICcwcHgnLCBtaW5IZWlnaHQ6ICcwJywgZGlzcGxheTogJ25vbmUnfSkpLFxuICAgIHN0YXRlKCdleHBhbmRlZCcsIHN0eWxlKHtoZWlnaHQ6ICcqJ30pKSxcbiAgICB0cmFuc2l0aW9uKCdleHBhbmRlZCA8PT4gY29sbGFwc2VkJywgYW5pbWF0ZSgnMjI1bXMgY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAwLjIsIDEpJykpLFxuICBdKV0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5jbGFzcyBUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQFZpZXdDaGlsZCgnTWF0UGFnaW5hdG9yQ3VycmVudCcsIHtzdGF0aWM6IHRydWV9KSBwYWdpbmF0b3JDdXJyZW50OiBNYXRQYWdpbmF0b3I7XG4gIEBWaWV3Q2hpbGQoJ3RhYmxlJywge3N0YXRpYzogdHJ1ZX0pIHNvcnRDdXJyZW50OiBNYXRTb3J0O1xuXG4gIEBJbnB1dCgpIGNvbHVtbkRlZmluaXRpb25zOiBbZGlzcGxheWVkQ29sdW1uc0ludGVyZmFjZV07XG4gIEBJbnB1dCgpIGRpc3BsYXlEZXRhaWw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgZGlzcGxheUNvbXBvbmVudDogc3RyaW5nO1xuICBASW5wdXQoKSBkYXRhOiBDb3JlTWF0VGFibGVJbnRlcmZhY2U7XG4gIEBJbnB1dCgpIGxhbmc6IHN0cmluZztcbiAgQElucHV0KCkgYnRuT3ZlcnJpZGUgPSBmYWxzZTtcbiAgQE91dHB1dCgpIGNhbGxGdW5jdGlvbjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQElucHV0KCkgaW5wdXRTZWFyY2g6IHN0cmluZyA9IG51bGw7XG4gIEBJbnB1dCgpIEVtcHR5Um93ID0gZmFsc2U7XG4gIEBJbnB1dCgpIGJsb2NrRGV0YWlscyA9IGZhbHNlO1xuICBAT3V0cHV0KCkgY2xpY2tlZDogRXZlbnRFbWl0dGVyPHsga2V5OiBzdHJpbmcsIHN0YXRlbWVudDogYm9vbGVhbiB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcHVibGljIGNvbHVtbnNUb0Rpc3BsYXk6IHN0cmluZ1tdO1xuICBwdWJsaWMgZmlsdGVyOiBBcnJheTxzdHJpbmc+ID0gW107XG4gIHB1YmxpYyBkaXNwbGF5ZWRDb2x1bW5zOiBhbnk7XG4gIHB1YmxpYyBleHBhbmRlZEVsZW1lbnQ6IGFueTtcbiAgcHVibGljIGluZGV4ID0gMDtcbiAgcHVibGljIG9wZW4gPSAnJztcbiAgcHVibGljIHNlYXJjaCA9ICcnO1xuICBwdWJsaWMgY2FuY2VsU2VhcmNoID0gJyc7XG4gIHB1YmxpYyBub1Jlc3VsdCA9ICcnO1xuICBwdWJsaWMgZGV0YWlscyA9ICcnO1xuICBwdWJsaWMgc2hvd1RhYmxlID0gZmFsc2U7XG4gIHByaXZhdGUgX2lucHV0U2VhcmNoOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPignJyk7XG4gIHByaXZhdGUgUHJpdmF0ZUNvbHVtbkRlZmluaXRpb25zOiBbZGlzcGxheWVkQ29sdW1uc0ludGVyZmFjZV07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgIHByaXZhdGUgc2VydmljZTogVGFibGVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGRldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG5cbiAgICB0aGlzLl9pbnB1dFNlYXJjaC5waXBlKGRlYm91bmNlVGltZSg1MDApKS5zdWJzY3JpYmUoKHNlYXJjaDogc3RyaW5nID0gbnVsbCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ1NlYXJjaGluZy4uLi4nLCBzZWFyY2gpO1xuICAgICAgaWYgKHNlYXJjaCkge1xuICAgICAgICAvL1xuICAgICAgICB0aGlzLmRhdGEuZmlsdGVyKHNlYXJjaCk7XG4gICAgICAgIHRoaXMuZGF0YS5mZXRjaCgwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGV4cGFuZChlbGVtZW50KSB7XG4gICAgaWYgKHRoaXMuYmxvY2tEZXRhaWxzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmV4cGFuZGVkRWxlbWVudCA9PT0gZWxlbWVudCkge1xuICAgICAgdGhpcy5leHBhbmRlZEVsZW1lbnQgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmV4cGFuZGVkRWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHRoaXMuZXhwYW5kZWRFbGVtZW50KTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2VydmljZS5lbXB0eVJvdyA9IHRoaXMuRW1wdHlSb3c7XG4gICAgdGhpcy5vcGVuID0gdGhpcy50cmFuc2xhdGUudHJhbnNsYXRlKHRoaXMubGFuZywgJ09QRU4nKTtcbiAgICB0aGlzLnNlYXJjaCA9IHRoaXMudHJhbnNsYXRlLnRyYW5zbGF0ZSh0aGlzLmxhbmcsICdTRUFSQ0gnKTtcbiAgICB0aGlzLmNhbmNlbFNlYXJjaCA9IHRoaXMudHJhbnNsYXRlLnRyYW5zbGF0ZSh0aGlzLmxhbmcsICdDQU5DRUxfU0VBUkNIJyk7XG4gICAgdGhpcy5ub1Jlc3VsdCA9IHRoaXMudHJhbnNsYXRlLnRyYW5zbGF0ZSh0aGlzLmxhbmcsICdOT19SRVNVTFQnKTtcbiAgICB0aGlzLmRldGFpbHMgPSB0aGlzLnRyYW5zbGF0ZS50cmFuc2xhdGUodGhpcy5sYW5nLCAnREVUQUlMUycpO1xuXG4gICAgaWYgKHRoaXMuZGF0YSkge1xuICAgICAgdGhpcy5leHBhbmRlZEVsZW1lbnQgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGF0YS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvckN1cnJlbnQ7XG4gICAgICB0aGlzLmRhdGEuc29ydCA9IHRoaXMuc29ydEN1cnJlbnQ7XG5cbiAgICAgIHRoaXMuZGF0YS5wYWdlTnVtYmVyLnN1YnNjcmliZSgobmV3cGFnZTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmIChuZXdwYWdlID4gMCkge1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFxuICAgICAgICAgICAgW10sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJlbGF0aXZlVG86IHRoaXMucm91dGUsXG4gICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7cGFnZTogbmV3cGFnZSArIDF9LFxuICAgICAgICAgICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnLCAvLyByZW1vdmUgdG8gcmVwbGFjZSBhbGwgcXVlcnkgcGFyYW1zIGJ5IHByb3ZpZGVkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChuZXdwYWdlID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoXG4gICAgICAgICAgICBbXSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSxcbiAgICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtwYWdlOiBudWxsfSxcbiAgICAgICAgICAgICAgcXVlcnlQYXJhbXNIYW5kbGluZzogJ21lcmdlJywgLy8gcmVtb3ZlIHRvIHJlcGxhY2UgYWxsIHF1ZXJ5IHBhcmFtcyBieSBwcm92aWRlZFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICBjb25zb2xlLmxvZygnb24gcGFzc2UgZGFucyBsYSBsaWduZSAxNDInKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBwYWdlID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1sncGFnZSddO1xuICAgICAgaWYgKHBhZ2UpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFBhZ2U6IG51bWJlciA9IE51bWJlcihwYWdlKSAtIDE7XG4gICAgICAgIHRoaXMuZGF0YS5zdGFydFdpdGggPSBjdXJyZW50UGFnZTtcbiAgICAgICAgdGhpcy5kYXRhLmZldGNoKGN1cnJlbnRQYWdlKTtcbiAgICAgICAgLy90aGlzLmRhdGEubnVtYmVyID0gY3VycmVudFBhZ2U7XG4gICAgICB9XG4gICAgICB0aGlzLlByaXZhdGVDb2x1bW5EZWZpbml0aW9ucyA9IHRoaXMuY29sdW1uRGVmaW5pdGlvbnM7XG4gICAgICB0aGlzLmJ1aWxkSGVhZGVycygpLmNhdGNoKChlcnI6IGFueSkgPT4gY29uc29sZS5sb2coJ0Vycm9yIGJ1aWxkIHRhYmxlJywgZXJyKSk7XG4gICAgICB0aGlzLnNlcnZpY2UudXBkYXRlSGVhZGVyLnN1YnNjcmliZSgoc3RhdHVzOiBib29sZWFuKSA9PiB7XG4gICAgICAgIGlmIChzdGF0dXMgPT09IHRydWUpIHtcbiAgICAgICAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMgPSBudWxsO1xuICAgICAgICAgIHRoaXMuY29sdW1uc1RvRGlzcGxheSA9IG51bGw7XG4gICAgICAgICAgdGhpcy5Qcml2YXRlQ29sdW1uRGVmaW5pdGlvbnMgPSB0aGlzLnNlcnZpY2UuZGlzcGxheUNvbHVtbjtcbiAgICAgICAgICBjb25zb2xlLmxvZygnTW9kdWxlIHRhYmxlIC0+IE5ldyBjb2x1bW4gZGVmaW5pdGlvbnMnLCB0aGlzLlByaXZhdGVDb2x1bW5EZWZpbml0aW9ucyk7XG4gICAgICAgICAgdGhpcy5idWlsZEhlYWRlcnMoKS5jYXRjaCgoZXJyOiBhbnkpID0+IGNvbnNvbGUubG9nKCdFcnJvciBidWlsZCB0YWJsZScsIGVycikpO1xuICAgICAgICAgIHRoaXMuZGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG4gICAgdGhpcy5zaG93VGFibGUgPSB0cnVlO1xuICB9XG5cbiAgYXN5bmMgYnVpbGRIZWFkZXJzKCkge1xuICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucyA9IGF3YWl0IHRoaXMuc29ydCgpO1xuICAgIGlmICh0aGlzLmRpc3BsYXllZENvbHVtbnMpIHtcbiAgICAgIGNvbnN0IHRtcDogYW55ID0gW107XG4gICAgICBmb3IgKGxldCBrIG9mIHRoaXMuZGlzcGxheWVkQ29sdW1ucykge1xuICAgICAgICB0bXAucHVzaChrLmtleSk7XG4gICAgICB9XG4gICAgICB0aGlzLmNvbHVtbnNUb0Rpc3BsYXkgPSBbLi4udG1wXTtcbiAgICB9XG4gICAgLy9jb25zb2xlLmxvZygnTW9kdWxlIFRhYmxlIE5ldyBVcGRhdGUgQ29sdW1uIERlZmluaXRpb24nLCAgdGhpcy5jb2x1bW5zVG9EaXNwbGF5KTtcbiAgfVxuXG4gIGdlbmVyYXRlQ2xhc3MoQ2xhc3M6IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgTXlDbGFzczogc3RyaW5nW10gPSBbJ2RlZmF1bHQtdGFibGUtY2xhc3MnXTtcbiAgICBmb3IgKGxldCBjIG9mIENsYXNzKSB7XG4gICAgICBpZiAoYyAmJiBjICE9PSAnJykge1xuICAgICAgICBNeUNsYXNzLnB1c2goYyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBNeUNsYXNzO1xuICB9XG5cbiAgYXN5bmMgc29ydCgpIHtcbiAgICBjb25zdCBjb21wYXJlID0gKGE6IGFueSwgYjogYW55KSA9PiB7XG4gICAgICByZXR1cm4gKGEub3JkZXIgPCBiLm9yZGVyID8gLTEgOiAoYS5vcmRlciA+IGIub3JkZXIgPyAxIDogMCkpO1xuICAgIH07XG4gICAgaWYgKHRoaXMuUHJpdmF0ZUNvbHVtbkRlZmluaXRpb25zKSB7XG4gICAgICByZXR1cm4gWy4uLnRoaXMuUHJpdmF0ZUNvbHVtbkRlZmluaXRpb25zLnNvcnQoY29tcGFyZSldO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBidWlsZExpbmsob3ZlcnJpZGU6IHN0cmluZ1tdLCBlbGVtZW50KSB7XG4gICAgaWYgKG92ZXJyaWRlLmxlbmd0aCA+PSAyKSB7XG4gICAgICBsZXQgYmFzZVBhdGg6IHN0cmluZyA9IG92ZXJyaWRlWzBdO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBvdmVycmlkZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBiYXNlUGF0aCArPSAnLycgKyBlbGVtZW50W292ZXJyaWRlW2ldXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBiYXNlUGF0aDtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgSm9pbihlbGVtOiBhbnksIG92ZXJyaWRlOiBzdHJpbmdbXSwgam9pbktleTogc3RyaW5nID0gJ1xcbicpOiBzdHJpbmcge1xuICAgIGNvbnN0IHZhbHVlOiBzdHJpbmdbXSA9IFtdO1xuICAgIGZvciAobGV0IHggaW4gZWxlbSkge1xuICAgICAgaWYgKG92ZXJyaWRlLmluZGV4T2YoeCkgPiAtMSkge1xuICAgICAgICB2YWx1ZS5wdXNoKGVsZW1beF0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWUuam9pbihqb2luS2V5KTtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuZGF0YS5maWx0ZXIoe1xuICAgICAgdGFyZ2V0OiB7XG4gICAgICAgIHZhbHVlOiAnJ1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZXhwYW5kU2hvdyh0ZW1wbGF0ZTogc3RyaW5nKSB7XG5cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGEpO1xuICAgIGlmICh0aGlzLmRhdGEgJiYgdGhpcy5pbnB1dFNlYXJjaCkge1xuICAgICAgdGhpcy5faW5wdXRTZWFyY2gubmV4dCh0aGlzLmlucHV0U2VhcmNoID09PSAnJyA/IG51bGwgOiB0aGlzLmlucHV0U2VhcmNoKTtcbiAgICB9XG4gICAgLyogaWYgKCh0aGlzLmlucHV0U2VhcmNoLmxlbmd0aCA+IDEgfHwgdGhpcy5pbnB1dFNlYXJjaC5sZW5ndGggPT09IDApXG4gICAgICAgJiYgdGhpcy5pbnB1dFNlYXJjaC5sZW5ndGggPCAyMDApIHtcbiAgICAgICBpZiAodGhpcy5kYXRhKSB7XG4gICAgICAgICB0aGlzLmRhdGEuZmlsdGVyKHRoaXMuaW5wdXRTZWFyY2gpO1xuICAgICAgICAgdGhpcy5kYXRhLnBhZ2VOdW1iZXIubmV4dCgwKTtcbiAgICAgICAgIHRoaXMuZGF0YS5mZXRjaCgwKTtcbiAgICAgICAgIHRoaXMuZGF0YS5udW1iZXIgPSAwO1xuICAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICB9XG4gICAgIH0qL1xuXG4gICAgdGhpcy5uZ09uSW5pdCgpO1xuICB9XG5cbn1cblxuZXhwb3J0IHtcbiAgQ29yZU1hdFRhYmxlLFxuICBGaWx0ZXJEYXRlSW50ZXJmYWNlLFxuICBDb3JlTWF0VGFibGVJbnRlcmZhY2UsXG4gIFBhZ2UsXG4gIFBhZ2VSZXF1ZXN0LFxuICBTb3J0LFxuICBkaXNwbGF5ZWRDb2x1bW5zSW50ZXJmYWNlLFxuICBDZWxsc0NvbXBvbmVudExpc3QsXG4gIFRhYmxlQ29tcG9uZW50XG59O1xuIl19