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
                //this.data.fetch(0);
                _this.data.filter(search);
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
        if (this.inputSearch) {
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
        // this.ngOnInit();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sTUFBTSxFQUNOLGFBQWEsRUFDYixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDekQsT0FBTyxFQUFDLFlBQVksRUFBc0UsTUFBTSxtQkFBbUIsQ0FBQztBQUNwSCxPQUFPLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQy9FLE9BQU8sRUFBQyxjQUFjLEVBQUUsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3JELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDckMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBd0M1QztJQTZCRSx3QkFBb0IsTUFBYyxFQUNkLEtBQXFCLEVBQ3JCLE9BQXFCLEVBQ3JCLFFBQTJCLEVBQzNCLFNBQTJCLEVBQzNCLGlCQUFvQztRQUx4RCxpQkFjQztRQWRtQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFD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TUFBTSxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUM7b0JBQ3ZDLFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxPQUFPLENBQUMsc0NBQXNDLENBQUMsQ0FBQztpQkFDdEYsQ0FBQyxDQUFDO1lBQ0gsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O1NBQ3RDLENBQUM7eUNBOEI0QixNQUFNO1lBQ1AsY0FBYztZQUNaLFlBQVk7WUFDWCxpQkFBaUI7WUFDaEIsZ0JBQWdCO1lBQ1IsaUJBQWlCO09BbENwRCxjQUFjLENBd01uQjtJQUFELHFCQUFDO0NBQUEsQUF4TUQsSUF3TUM7QUFFRCxPQUFPLEVBQ0wsWUFBWSxFQU9aLGtCQUFrQixFQUNsQixjQUFjLEVBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NlbGxzQ29tcG9uZW50TGlzdH0gZnJvbSAnLi9zZXR0aW5nL0NlbGxzQ29tcG9uZW50UmVnaXN0cnknO1xuaW1wb3J0IHtNYXRTb3J0fSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zb3J0JztcbmltcG9ydCB7TWF0UGFnaW5hdG9yfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3InO1xuaW1wb3J0IHtDb3JlTWF0VGFibGUsIENvcmVNYXRUYWJsZUludGVyZmFjZSwgRmlsdGVyRGF0ZUludGVyZmFjZSwgUGFnZSwgUGFnZVJlcXVlc3QsIFNvcnR9IGZyb20gJy4vY29yZS1kYXRhLXRhYmxlJztcbmltcG9ydCB7YW5pbWF0ZSwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFJvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7VGFibGVTZXJ2aWNlfSBmcm9tICcuL3RhYmxlLnNlcnZpY2UnO1xuaW1wb3J0IHtUcmFuc2xhdGVTZXJ2aWNlfSBmcm9tICcuL3RyYW5zbGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tICdyeGpzJztcbmltcG9ydCB7ZGVib3VuY2VUaW1lfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cblxuaW50ZXJmYWNlIGRpc3BsYXlDb2x1bW5zQ29uZmlnIHtcbiAgc2l6ZUljb24/OiBudW1iZXI7XG4gIGRpc3BsYXlZZXM/OiBib29sZWFuO1xuICBkaXNwbGF5Tm8/OiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgZGlzcGxheWVkQ29sdW1uc0ludGVyZmFjZSB7XG4gIGtleTogc3RyaW5nOyAvLyBvYmplY3Qga2V5XG4gIHZhbHVlOiBzdHJpbmc7IC8vIGRpc3BsYXkgY29sdW1uIHZhbHVlc1xuICByYXRpbz86IG51bWJlcjtcbiAgb3JkZXI/OiBudW1iZXI7IC8vIHNvcnQgY29sdW1uXG4gIGNsYXNzPzogc3RyaW5nOyAvLyBjc3MgY2xhc3NcbiAgbW9kdWxlPzogQ2VsbHNDb21wb25lbnRMaXN0O1xuICBvdmVycmlkZT86IHN0cmluZyB8IHN0cmluZ1tdOyAvLyBmb3IgYnVpbGRpbmcgdXJsIG9yIGF2YXRhciBuYW1lXG4gIGRpc3BsYXk/OiBzdHJpbmc7IC8vIGZvcmNlIGRpc3BsYXlpbmcgb3RoZXIgc3R1ZmYgdGhhbiBlbGVtZW50W2ZvY3VzXVxuICBhbGlnbj86IHN0cmluZzsgLy8gY2VsbCBjb250ZW50IGFsaWduICdsZWZ0IGNlbnRlciByaWdodCdcbiAgc29ydD86IGJvb2xlYW47IC8vICdzb3J0YWJsZSBjb2x1bW4nXG4gIGNsaWNrYWJsZT86IGJvb2xlYW47IC8vIGVuYWJsZSBjbGlja2FibGUgY29sdW1uIHdoZW4gc29ydGluZyBpcyBkaXNhYmxlXG4gIHN0YXRlbWVudD86IGJvb2xlYW47IC8vIGJ5IGRlZmF1bHQgc3RhdGVtZW50IGlzIGZhbHNlIGFuZCBpcyB1c2VkIHdpdGggJ2NsaWNrYWJsZScgb3B0aW9uc1xuICB2YWx1ZVN0YXRlbWVudD86IHN0cmluZ1tdO1xuICBjb25maWc/OiBkaXNwbGF5Q29sdW1uc0NvbmZpZztcbiAgdmFsdWVPdmVycmlkZT86IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWRlc2lnbi10YWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RhYmxlLmNvbXBvbmVudC5zY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFt0cmlnZ2VyKCdkZXRhaWxFeHBhbmQnLCBbXG4gICAgc3RhdGUoJ2NvbGxhcHNlZCcsIHN0eWxlKHtoZWlnaHQ6ICcwcHgnLCBtaW5IZWlnaHQ6ICcwJywgZGlzcGxheTogJ25vbmUnfSkpLFxuICAgIHN0YXRlKCdleHBhbmRlZCcsIHN0eWxlKHtoZWlnaHQ6ICcqJ30pKSxcbiAgICB0cmFuc2l0aW9uKCdleHBhbmRlZCA8PT4gY29sbGFwc2VkJywgYW5pbWF0ZSgnMjI1bXMgY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAwLjIsIDEpJykpLFxuICBdKV0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5jbGFzcyBUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQFZpZXdDaGlsZCgnTWF0UGFnaW5hdG9yQ3VycmVudCcsIHtzdGF0aWM6IHRydWV9KSBwYWdpbmF0b3JDdXJyZW50OiBNYXRQYWdpbmF0b3I7XG4gIEBWaWV3Q2hpbGQoJ3RhYmxlJywge3N0YXRpYzogdHJ1ZX0pIHNvcnRDdXJyZW50OiBNYXRTb3J0O1xuXG4gIEBJbnB1dCgpIGNvbHVtbkRlZmluaXRpb25zOiBbZGlzcGxheWVkQ29sdW1uc0ludGVyZmFjZV07XG4gIEBJbnB1dCgpIGRpc3BsYXlEZXRhaWw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgZGlzcGxheUNvbXBvbmVudDogc3RyaW5nO1xuICBASW5wdXQoKSBkYXRhOiBDb3JlTWF0VGFibGVJbnRlcmZhY2U7XG4gIEBJbnB1dCgpIGxhbmc6IHN0cmluZztcbiAgQElucHV0KCkgYnRuT3ZlcnJpZGUgPSBmYWxzZTtcbiAgQE91dHB1dCgpIGNhbGxGdW5jdGlvbjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQElucHV0KCkgaW5wdXRTZWFyY2g6IHN0cmluZyA9IG51bGw7XG4gIEBJbnB1dCgpIEVtcHR5Um93ID0gZmFsc2U7XG4gIEBJbnB1dCgpIGJsb2NrRGV0YWlscyA9IGZhbHNlO1xuICBAT3V0cHV0KCkgY2xpY2tlZDogRXZlbnRFbWl0dGVyPHsga2V5OiBzdHJpbmcsIHN0YXRlbWVudDogYm9vbGVhbiB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcHVibGljIGNvbHVtbnNUb0Rpc3BsYXk6IHN0cmluZ1tdO1xuICBwdWJsaWMgZmlsdGVyOiBBcnJheTxzdHJpbmc+ID0gW107XG4gIHB1YmxpYyBkaXNwbGF5ZWRDb2x1bW5zOiBhbnk7XG4gIHB1YmxpYyBleHBhbmRlZEVsZW1lbnQ6IGFueTtcbiAgcHVibGljIGluZGV4ID0gMDtcbiAgcHVibGljIG9wZW4gPSAnJztcbiAgcHVibGljIHNlYXJjaCA9ICcnO1xuICBwdWJsaWMgY2FuY2VsU2VhcmNoID0gJyc7XG4gIHB1YmxpYyBub1Jlc3VsdCA9ICcnO1xuICBwdWJsaWMgZGV0YWlscyA9ICcnO1xuICBwdWJsaWMgc2hvd1RhYmxlID0gZmFsc2U7XG4gIHByaXZhdGUgX2lucHV0U2VhcmNoOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPignJyk7XG4gIHByaXZhdGUgUHJpdmF0ZUNvbHVtbkRlZmluaXRpb25zOiBbZGlzcGxheWVkQ29sdW1uc0ludGVyZmFjZV07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgIHByaXZhdGUgc2VydmljZTogVGFibGVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGRldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG5cbiAgICB0aGlzLl9pbnB1dFNlYXJjaC5waXBlKGRlYm91bmNlVGltZSg1MDApKS5zdWJzY3JpYmUoKHNlYXJjaDogc3RyaW5nID0gbnVsbCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ1NlYXJjaGluZy4uLi4nLCBzZWFyY2gpO1xuICAgICAgaWYgKHNlYXJjaCkge1xuICAgICAgICAvL3RoaXMuZGF0YS5mZXRjaCgwKTtcbiAgICAgICAgdGhpcy5kYXRhLmZpbHRlcihzZWFyY2gpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZXhwYW5kKGVsZW1lbnQpIHtcbiAgICBpZiAodGhpcy5ibG9ja0RldGFpbHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuZXhwYW5kZWRFbGVtZW50ID09PSBlbGVtZW50KSB7XG4gICAgICB0aGlzLmV4cGFuZGVkRWxlbWVudCA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZXhwYW5kZWRFbGVtZW50ID0gZWxlbWVudDtcbiAgICB9XG4gICAgY29uc29sZS5sb2codGhpcy5leHBhbmRlZEVsZW1lbnQpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXJ2aWNlLmVtcHR5Um93ID0gdGhpcy5FbXB0eVJvdztcbiAgICB0aGlzLm9wZW4gPSB0aGlzLnRyYW5zbGF0ZS50cmFuc2xhdGUodGhpcy5sYW5nLCAnT1BFTicpO1xuICAgIHRoaXMuc2VhcmNoID0gdGhpcy50cmFuc2xhdGUudHJhbnNsYXRlKHRoaXMubGFuZywgJ1NFQVJDSCcpO1xuICAgIHRoaXMuY2FuY2VsU2VhcmNoID0gdGhpcy50cmFuc2xhdGUudHJhbnNsYXRlKHRoaXMubGFuZywgJ0NBTkNFTF9TRUFSQ0gnKTtcbiAgICB0aGlzLm5vUmVzdWx0ID0gdGhpcy50cmFuc2xhdGUudHJhbnNsYXRlKHRoaXMubGFuZywgJ05PX1JFU1VMVCcpO1xuICAgIHRoaXMuZGV0YWlscyA9IHRoaXMudHJhbnNsYXRlLnRyYW5zbGF0ZSh0aGlzLmxhbmcsICdERVRBSUxTJyk7XG5cbiAgICBpZiAodGhpcy5kYXRhKSB7XG4gICAgICB0aGlzLmV4cGFuZGVkRWxlbWVudCA9IGZhbHNlO1xuICAgICAgdGhpcy5kYXRhLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yQ3VycmVudDtcbiAgICAgIHRoaXMuZGF0YS5zb3J0ID0gdGhpcy5zb3J0Q3VycmVudDtcblxuICAgICAgdGhpcy5kYXRhLnBhZ2VOdW1iZXIuc3Vic2NyaWJlKChuZXdwYWdlOiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKG5ld3BhZ2UgPiAwKSB7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoXG4gICAgICAgICAgICBbXSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSxcbiAgICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtwYWdlOiBuZXdwYWdlICsgMX0sXG4gICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6ICdtZXJnZScsIC8vIHJlbW92ZSB0byByZXBsYWNlIGFsbCBxdWVyeSBwYXJhbXMgYnkgcHJvdmlkZWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKG5ld3BhZ2UgPT09IDApIHtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShcbiAgICAgICAgICAgIFtdLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlLFxuICAgICAgICAgICAgICBxdWVyeVBhcmFtczoge3BhZ2U6IG51bGx9LFxuICAgICAgICAgICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnLCAvLyByZW1vdmUgdG8gcmVwbGFjZSBhbGwgcXVlcnkgcGFyYW1zIGJ5IHByb3ZpZGVkXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNvbnNvbGUubG9nKCdvbiBwYXNzZSBkYW5zIGxhIGxpZ25lIDE0MicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHBhZ2UgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zWydwYWdlJ107XG4gICAgICBpZiAocGFnZSkge1xuICAgICAgICBjb25zdCBjdXJyZW50UGFnZTogbnVtYmVyID0gTnVtYmVyKHBhZ2UpIC0gMTtcbiAgICAgICAgdGhpcy5kYXRhLnN0YXJ0V2l0aCA9IGN1cnJlbnRQYWdlO1xuICAgICAgICB0aGlzLmRhdGEuZmV0Y2goY3VycmVudFBhZ2UpO1xuICAgICAgICAvL3RoaXMuZGF0YS5udW1iZXIgPSBjdXJyZW50UGFnZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuUHJpdmF0ZUNvbHVtbkRlZmluaXRpb25zID0gdGhpcy5jb2x1bW5EZWZpbml0aW9ucztcbiAgICAgIHRoaXMuYnVpbGRIZWFkZXJzKCkuY2F0Y2goKGVycjogYW55KSA9PiBjb25zb2xlLmxvZygnRXJyb3IgYnVpbGQgdGFibGUnLCBlcnIpKTtcbiAgICAgIHRoaXMuc2VydmljZS51cGRhdGVIZWFkZXIuc3Vic2NyaWJlKChzdGF0dXM6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucyA9IG51bGw7XG4gICAgICAgICAgdGhpcy5jb2x1bW5zVG9EaXNwbGF5ID0gbnVsbDtcbiAgICAgICAgICB0aGlzLlByaXZhdGVDb2x1bW5EZWZpbml0aW9ucyA9IHRoaXMuc2VydmljZS5kaXNwbGF5Q29sdW1uO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdNb2R1bGUgdGFibGUgLT4gTmV3IGNvbHVtbiBkZWZpbml0aW9ucycsIHRoaXMuUHJpdmF0ZUNvbHVtbkRlZmluaXRpb25zKTtcbiAgICAgICAgICB0aGlzLmJ1aWxkSGVhZGVycygpLmNhdGNoKChlcnI6IGFueSkgPT4gY29uc29sZS5sb2coJ0Vycm9yIGJ1aWxkIHRhYmxlJywgZXJyKSk7XG4gICAgICAgICAgdGhpcy5kZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcbiAgICB0aGlzLnNob3dUYWJsZSA9IHRydWU7XG4gIH1cblxuICBhc3luYyBidWlsZEhlYWRlcnMoKSB7XG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zID0gYXdhaXQgdGhpcy5zb3J0KCk7XG4gICAgaWYgKHRoaXMuZGlzcGxheWVkQ29sdW1ucykge1xuICAgICAgY29uc3QgdG1wOiBhbnkgPSBbXTtcbiAgICAgIGZvciAobGV0IGsgb2YgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zKSB7XG4gICAgICAgIHRtcC5wdXNoKGsua2V5KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY29sdW1uc1RvRGlzcGxheSA9IFsuLi50bXBdO1xuICAgIH1cbiAgICAvL2NvbnNvbGUubG9nKCdNb2R1bGUgVGFibGUgTmV3IFVwZGF0ZSBDb2x1bW4gRGVmaW5pdGlvbicsICB0aGlzLmNvbHVtbnNUb0Rpc3BsYXkpO1xuICB9XG5cbiAgZ2VuZXJhdGVDbGFzcyhDbGFzczogc3RyaW5nW10pIHtcbiAgICBjb25zdCBNeUNsYXNzOiBzdHJpbmdbXSA9IFsnZGVmYXVsdC10YWJsZS1jbGFzcyddO1xuICAgIGZvciAobGV0IGMgb2YgQ2xhc3MpIHtcbiAgICAgIGlmIChjICYmIGMgIT09ICcnKSB7XG4gICAgICAgIE15Q2xhc3MucHVzaChjKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIE15Q2xhc3M7XG4gIH1cblxuICBhc3luYyBzb3J0KCkge1xuICAgIGNvbnN0IGNvbXBhcmUgPSAoYTogYW55LCBiOiBhbnkpID0+IHtcbiAgICAgIHJldHVybiAoYS5vcmRlciA8IGIub3JkZXIgPyAtMSA6IChhLm9yZGVyID4gYi5vcmRlciA/IDEgOiAwKSk7XG4gICAgfTtcbiAgICBpZiAodGhpcy5Qcml2YXRlQ29sdW1uRGVmaW5pdGlvbnMpIHtcbiAgICAgIHJldHVybiBbLi4udGhpcy5Qcml2YXRlQ29sdW1uRGVmaW5pdGlvbnMuc29ydChjb21wYXJlKV07XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGJ1aWxkTGluayhvdmVycmlkZTogc3RyaW5nW10sIGVsZW1lbnQpIHtcbiAgICBpZiAob3ZlcnJpZGUubGVuZ3RoID49IDIpIHtcbiAgICAgIGxldCBiYXNlUGF0aDogc3RyaW5nID0gb3ZlcnJpZGVbMF07XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG92ZXJyaWRlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJhc2VQYXRoICs9ICcvJyArIGVsZW1lbnRbb3ZlcnJpZGVbaV1dO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGJhc2VQYXRoO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBKb2luKGVsZW06IGFueSwgb3ZlcnJpZGU6IHN0cmluZ1tdLCBqb2luS2V5OiBzdHJpbmcgPSAnXFxuJyk6IHN0cmluZyB7XG4gICAgY29uc3QgdmFsdWU6IHN0cmluZ1tdID0gW107XG4gICAgZm9yIChsZXQgeCBpbiBlbGVtKSB7XG4gICAgICBpZiAob3ZlcnJpZGUuaW5kZXhPZih4KSA+IC0xKSB7XG4gICAgICAgIHZhbHVlLnB1c2goZWxlbVt4XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZS5qb2luKGpvaW5LZXkpO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5kYXRhLmZpbHRlcih7XG4gICAgICB0YXJnZXQ6IHtcbiAgICAgICAgdmFsdWU6ICcnXG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBleHBhbmRTaG93KHRlbXBsYXRlOiBzdHJpbmcpIHtcblxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICh0aGlzLmlucHV0U2VhcmNoKSB7XG4gICAgICB0aGlzLl9pbnB1dFNlYXJjaC5uZXh0KHRoaXMuaW5wdXRTZWFyY2ggPT09ICcnID8gbnVsbCA6IHRoaXMuaW5wdXRTZWFyY2gpO1xuICAgIH1cbiAgICAvKiBpZiAoKHRoaXMuaW5wdXRTZWFyY2gubGVuZ3RoID4gMSB8fCB0aGlzLmlucHV0U2VhcmNoLmxlbmd0aCA9PT0gMClcbiAgICAgICAmJiB0aGlzLmlucHV0U2VhcmNoLmxlbmd0aCA8IDIwMCkge1xuICAgICAgIGlmICh0aGlzLmRhdGEpIHtcbiAgICAgICAgIHRoaXMuZGF0YS5maWx0ZXIodGhpcy5pbnB1dFNlYXJjaCk7XG4gICAgICAgICB0aGlzLmRhdGEucGFnZU51bWJlci5uZXh0KDApO1xuICAgICAgICAgdGhpcy5kYXRhLmZldGNoKDApO1xuICAgICAgICAgdGhpcy5kYXRhLm51bWJlciA9IDA7XG4gICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgIH1cbiAgICAgfSovXG5cbiAgICAvLyB0aGlzLm5nT25Jbml0KCk7XG4gIH1cblxufVxuXG5leHBvcnQge1xuICBDb3JlTWF0VGFibGUsXG4gIEZpbHRlckRhdGVJbnRlcmZhY2UsXG4gIENvcmVNYXRUYWJsZUludGVyZmFjZSxcbiAgUGFnZSxcbiAgUGFnZVJlcXVlc3QsXG4gIFNvcnQsXG4gIGRpc3BsYXllZENvbHVtbnNJbnRlcmZhY2UsXG4gIENlbGxzQ29tcG9uZW50TGlzdCxcbiAgVGFibGVDb21wb25lbnRcbn07XG4iXX0=