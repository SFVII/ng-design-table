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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sTUFBTSxFQUNOLGFBQWEsRUFDYixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDekQsT0FBTyxFQUFDLFlBQVksRUFBc0UsTUFBTSxtQkFBbUIsQ0FBQztBQUNwSCxPQUFPLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQy9FLE9BQU8sRUFBQyxjQUFjLEVBQUUsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3JELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDckMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBd0M1QztJQTZCRSx3QkFBb0IsTUFBYyxFQUNkLEtBQXFCLEVBQ3JCLE9BQXFCLEVBQ3JCLFFBQTJCLEVBQzNCLFNBQTJCLEVBQzNCLGlCQUFvQztRQUx4RCxpQkFlQztRQWZtQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFD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QyxDQUFDO29CQUMzRSxLQUFLLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxFQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDO29CQUN2QyxVQUFVLENBQUMsd0JBQXdCLEVBQUUsT0FBTyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7aUJBQ3RGLENBQUMsQ0FBQztZQUNILGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztTQUN0QyxDQUFDO3lDQThCNEIsTUFBTTtZQUNQLGNBQWM7WUFDWixZQUFZO1lBQ1gsaUJBQWlCO1lBQ2hCLGdCQUFnQjtZQUNSLGlCQUFpQjtPQWxDcEQsY0FBYyxDQXlNbkI7SUFBRCxxQkFBQztDQUFBLEFBek1ELElBeU1DO0FBRUQsT0FBTyxFQUNMLFlBQVksRUFPWixrQkFBa0IsRUFDbEIsY0FBYyxFQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDZWxsc0NvbXBvbmVudExpc3R9IGZyb20gJy4vc2V0dGluZy9DZWxsc0NvbXBvbmVudFJlZ2lzdHJ5JztcbmltcG9ydCB7TWF0U29ydH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydCc7XG5pbXBvcnQge01hdFBhZ2luYXRvcn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcbmltcG9ydCB7Q29yZU1hdFRhYmxlLCBDb3JlTWF0VGFibGVJbnRlcmZhY2UsIEZpbHRlckRhdGVJbnRlcmZhY2UsIFBhZ2UsIFBhZ2VSZXF1ZXN0LCBTb3J0fSBmcm9tICcuL2NvcmUtZGF0YS10YWJsZSc7XG5pbXBvcnQge2FuaW1hdGUsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlcn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1RhYmxlU2VydmljZX0gZnJvbSAnLi90YWJsZS5zZXJ2aWNlJztcbmltcG9ydCB7VHJhbnNsYXRlU2VydmljZX0gZnJvbSAnLi90cmFuc2xhdGUuc2VydmljZSc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2RlYm91bmNlVGltZX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5cbmludGVyZmFjZSBkaXNwbGF5Q29sdW1uc0NvbmZpZyB7XG4gIHNpemVJY29uPzogbnVtYmVyO1xuICBkaXNwbGF5WWVzPzogYm9vbGVhbjtcbiAgZGlzcGxheU5vPzogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIGRpc3BsYXllZENvbHVtbnNJbnRlcmZhY2Uge1xuICBrZXk6IHN0cmluZzsgLy8gb2JqZWN0IGtleVxuICB2YWx1ZTogc3RyaW5nOyAvLyBkaXNwbGF5IGNvbHVtbiB2YWx1ZXNcbiAgcmF0aW8/OiBudW1iZXI7XG4gIG9yZGVyPzogbnVtYmVyOyAvLyBzb3J0IGNvbHVtblxuICBjbGFzcz86IHN0cmluZzsgLy8gY3NzIGNsYXNzXG4gIG1vZHVsZT86IENlbGxzQ29tcG9uZW50TGlzdDtcbiAgb3ZlcnJpZGU/OiBzdHJpbmcgfCBzdHJpbmdbXTsgLy8gZm9yIGJ1aWxkaW5nIHVybCBvciBhdmF0YXIgbmFtZVxuICBkaXNwbGF5Pzogc3RyaW5nOyAvLyBmb3JjZSBkaXNwbGF5aW5nIG90aGVyIHN0dWZmIHRoYW4gZWxlbWVudFtmb2N1c11cbiAgYWxpZ24/OiBzdHJpbmc7IC8vIGNlbGwgY29udGVudCBhbGlnbiAnbGVmdCBjZW50ZXIgcmlnaHQnXG4gIHNvcnQ/OiBib29sZWFuOyAvLyAnc29ydGFibGUgY29sdW1uJ1xuICBjbGlja2FibGU/OiBib29sZWFuOyAvLyBlbmFibGUgY2xpY2thYmxlIGNvbHVtbiB3aGVuIHNvcnRpbmcgaXMgZGlzYWJsZVxuICBzdGF0ZW1lbnQ/OiBib29sZWFuOyAvLyBieSBkZWZhdWx0IHN0YXRlbWVudCBpcyBmYWxzZSBhbmQgaXMgdXNlZCB3aXRoICdjbGlja2FibGUnIG9wdGlvbnNcbiAgdmFsdWVTdGF0ZW1lbnQ/OiBzdHJpbmdbXTtcbiAgY29uZmlnPzogZGlzcGxheUNvbHVtbnNDb25maWc7XG4gIHZhbHVlT3ZlcnJpZGU/OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH07XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1kZXNpZ24tdGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90YWJsZS5jb21wb25lbnQuc2NzcyddLFxuICBhbmltYXRpb25zOiBbdHJpZ2dlcignZGV0YWlsRXhwYW5kJywgW1xuICAgIHN0YXRlKCdjb2xsYXBzZWQnLCBzdHlsZSh7aGVpZ2h0OiAnMHB4JywgbWluSGVpZ2h0OiAnMCcsIGRpc3BsYXk6ICdub25lJ30pKSxcbiAgICBzdGF0ZSgnZXhwYW5kZWQnLCBzdHlsZSh7aGVpZ2h0OiAnKid9KSksXG4gICAgdHJhbnNpdGlvbignZXhwYW5kZWQgPD0+IGNvbGxhcHNlZCcsIGFuaW1hdGUoJzIyNW1zIGN1YmljLWJlemllcigwLjQsIDAuMCwgMC4yLCAxKScpKSxcbiAgXSldLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuY2xhc3MgVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBWaWV3Q2hpbGQoJ01hdFBhZ2luYXRvckN1cnJlbnQnLCB7c3RhdGljOiB0cnVlfSkgcGFnaW5hdG9yQ3VycmVudDogTWF0UGFnaW5hdG9yO1xuICBAVmlld0NoaWxkKCd0YWJsZScsIHtzdGF0aWM6IHRydWV9KSBzb3J0Q3VycmVudDogTWF0U29ydDtcblxuICBASW5wdXQoKSBjb2x1bW5EZWZpbml0aW9uczogW2Rpc3BsYXllZENvbHVtbnNJbnRlcmZhY2VdO1xuICBASW5wdXQoKSBkaXNwbGF5RGV0YWlsOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRpc3BsYXlDb21wb25lbnQ6IHN0cmluZztcbiAgQElucHV0KCkgZGF0YTogQ29yZU1hdFRhYmxlSW50ZXJmYWNlO1xuICBASW5wdXQoKSBsYW5nOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGJ0bk92ZXJyaWRlID0gZmFsc2U7XG4gIEBPdXRwdXQoKSBjYWxsRnVuY3Rpb246IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBJbnB1dCgpIGlucHV0U2VhcmNoOiBzdHJpbmcgPSBudWxsO1xuICBASW5wdXQoKSBFbXB0eVJvdyA9IGZhbHNlO1xuICBASW5wdXQoKSBibG9ja0RldGFpbHMgPSBmYWxzZTtcbiAgQE91dHB1dCgpIGNsaWNrZWQ6IEV2ZW50RW1pdHRlcjx7IGtleTogc3RyaW5nLCBzdGF0ZW1lbnQ6IGJvb2xlYW4gfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHB1YmxpYyBjb2x1bW5zVG9EaXNwbGF5OiBzdHJpbmdbXTtcbiAgcHVibGljIGZpbHRlcjogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICBwdWJsaWMgZGlzcGxheWVkQ29sdW1uczogYW55O1xuICBwdWJsaWMgZXhwYW5kZWRFbGVtZW50OiBhbnk7XG4gIHB1YmxpYyBpbmRleCA9IDA7XG4gIHB1YmxpYyBvcGVuID0gJyc7XG4gIHB1YmxpYyBzZWFyY2ggPSAnJztcbiAgcHVibGljIGNhbmNlbFNlYXJjaCA9ICcnO1xuICBwdWJsaWMgbm9SZXN1bHQgPSAnJztcbiAgcHVibGljIGRldGFpbHMgPSAnJztcbiAgcHVibGljIHNob3dUYWJsZSA9IGZhbHNlO1xuICBwcml2YXRlIF9pbnB1dFNlYXJjaDogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4oJycpO1xuICBwcml2YXRlIFByaXZhdGVDb2x1bW5EZWZpbml0aW9uczogW2Rpc3BsYXllZENvbHVtbnNJbnRlcmZhY2VdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICAgICAgICBwcml2YXRlIHNlcnZpY2U6IFRhYmxlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBkZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuXG4gICAgdGhpcy5faW5wdXRTZWFyY2gucGlwZShkZWJvdW5jZVRpbWUoNTAwKSkuc3Vic2NyaWJlKChzZWFyY2g6IHN0cmluZyA9IG51bGwpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdTZWFyY2hpbmcuLi4uJywgc2VhcmNoKTtcbiAgICAgIGlmIChzZWFyY2gpIHtcbiAgICAgICAgLy9cbiAgICAgICAgdGhpcy5kYXRhLmZpbHRlcihzZWFyY2gpO1xuICAgICAgICB0aGlzLmRhdGEuZmV0Y2goMCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBleHBhbmQoZWxlbWVudCkge1xuICAgIGlmICh0aGlzLmJsb2NrRGV0YWlscykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5leHBhbmRlZEVsZW1lbnQgPT09IGVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZXhwYW5kZWRFbGVtZW50ID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5leHBhbmRlZEVsZW1lbnQgPSBlbGVtZW50O1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyh0aGlzLmV4cGFuZGVkRWxlbWVudCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNlcnZpY2UuZW1wdHlSb3cgPSB0aGlzLkVtcHR5Um93O1xuICAgIHRoaXMub3BlbiA9IHRoaXMudHJhbnNsYXRlLnRyYW5zbGF0ZSh0aGlzLmxhbmcsICdPUEVOJyk7XG4gICAgdGhpcy5zZWFyY2ggPSB0aGlzLnRyYW5zbGF0ZS50cmFuc2xhdGUodGhpcy5sYW5nLCAnU0VBUkNIJyk7XG4gICAgdGhpcy5jYW5jZWxTZWFyY2ggPSB0aGlzLnRyYW5zbGF0ZS50cmFuc2xhdGUodGhpcy5sYW5nLCAnQ0FOQ0VMX1NFQVJDSCcpO1xuICAgIHRoaXMubm9SZXN1bHQgPSB0aGlzLnRyYW5zbGF0ZS50cmFuc2xhdGUodGhpcy5sYW5nLCAnTk9fUkVTVUxUJyk7XG4gICAgdGhpcy5kZXRhaWxzID0gdGhpcy50cmFuc2xhdGUudHJhbnNsYXRlKHRoaXMubGFuZywgJ0RFVEFJTFMnKTtcblxuICAgIGlmICh0aGlzLmRhdGEpIHtcbiAgICAgIHRoaXMuZXhwYW5kZWRFbGVtZW50ID0gZmFsc2U7XG4gICAgICB0aGlzLmRhdGEucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3JDdXJyZW50O1xuICAgICAgdGhpcy5kYXRhLnNvcnQgPSB0aGlzLnNvcnRDdXJyZW50O1xuXG4gICAgICB0aGlzLmRhdGEucGFnZU51bWJlci5zdWJzY3JpYmUoKG5ld3BhZ2U6IG51bWJlcikgPT4ge1xuICAgICAgICBpZiAobmV3cGFnZSA+IDApIHtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShcbiAgICAgICAgICAgIFtdLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlLFxuICAgICAgICAgICAgICBxdWVyeVBhcmFtczoge3BhZ2U6IG5ld3BhZ2UgKyAxfSxcbiAgICAgICAgICAgICAgcXVlcnlQYXJhbXNIYW5kbGluZzogJ21lcmdlJywgLy8gcmVtb3ZlIHRvIHJlcGxhY2UgYWxsIHF1ZXJ5IHBhcmFtcyBieSBwcm92aWRlZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAobmV3cGFnZSA9PT0gMCkge1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFxuICAgICAgICAgICAgW10sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJlbGF0aXZlVG86IHRoaXMucm91dGUsXG4gICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7cGFnZTogbnVsbH0sXG4gICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6ICdtZXJnZScsIC8vIHJlbW92ZSB0byByZXBsYWNlIGFsbCBxdWVyeSBwYXJhbXMgYnkgcHJvdmlkZWRcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY29uc29sZS5sb2coJ29uIHBhc3NlIGRhbnMgbGEgbGlnbmUgMTQyJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICAgICAgY29uc3QgcGFnZSA9IHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbXNbJ3BhZ2UnXTtcbiAgICAgIGlmIChwYWdlKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQYWdlOiBudW1iZXIgPSBOdW1iZXIocGFnZSkgLSAxO1xuICAgICAgICB0aGlzLmRhdGEuc3RhcnRXaXRoID0gY3VycmVudFBhZ2U7XG4gICAgICAgIHRoaXMuZGF0YS5mZXRjaChjdXJyZW50UGFnZSk7XG4gICAgICAgIC8vdGhpcy5kYXRhLm51bWJlciA9IGN1cnJlbnRQYWdlO1xuICAgICAgfVxuICAgICAgdGhpcy5Qcml2YXRlQ29sdW1uRGVmaW5pdGlvbnMgPSB0aGlzLmNvbHVtbkRlZmluaXRpb25zO1xuICAgICAgdGhpcy5idWlsZEhlYWRlcnMoKS5jYXRjaCgoZXJyOiBhbnkpID0+IGNvbnNvbGUubG9nKCdFcnJvciBidWlsZCB0YWJsZScsIGVycikpO1xuICAgICAgdGhpcy5zZXJ2aWNlLnVwZGF0ZUhlYWRlci5zdWJzY3JpYmUoKHN0YXR1czogYm9vbGVhbikgPT4ge1xuICAgICAgICBpZiAoc3RhdHVzID09PSB0cnVlKSB7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zID0gbnVsbDtcbiAgICAgICAgICB0aGlzLmNvbHVtbnNUb0Rpc3BsYXkgPSBudWxsO1xuICAgICAgICAgIHRoaXMuUHJpdmF0ZUNvbHVtbkRlZmluaXRpb25zID0gdGhpcy5zZXJ2aWNlLmRpc3BsYXlDb2x1bW47XG4gICAgICAgICAgY29uc29sZS5sb2coJ01vZHVsZSB0YWJsZSAtPiBOZXcgY29sdW1uIGRlZmluaXRpb25zJywgdGhpcy5Qcml2YXRlQ29sdW1uRGVmaW5pdGlvbnMpO1xuICAgICAgICAgIHRoaXMuYnVpbGRIZWFkZXJzKCkuY2F0Y2goKGVycjogYW55KSA9PiBjb25zb2xlLmxvZygnRXJyb3IgYnVpbGQgdGFibGUnLCBlcnIpKTtcbiAgICAgICAgICB0aGlzLmRldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xuICAgIHRoaXMuc2hvd1RhYmxlID0gdHJ1ZTtcbiAgfVxuXG4gIGFzeW5jIGJ1aWxkSGVhZGVycygpIHtcbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMgPSBhd2FpdCB0aGlzLnNvcnQoKTtcbiAgICBpZiAodGhpcy5kaXNwbGF5ZWRDb2x1bW5zKSB7XG4gICAgICBjb25zdCB0bXA6IGFueSA9IFtdO1xuICAgICAgZm9yIChsZXQgayBvZiB0aGlzLmRpc3BsYXllZENvbHVtbnMpIHtcbiAgICAgICAgdG1wLnB1c2goay5rZXkpO1xuICAgICAgfVxuICAgICAgdGhpcy5jb2x1bW5zVG9EaXNwbGF5ID0gWy4uLnRtcF07XG4gICAgfVxuICAgIC8vY29uc29sZS5sb2coJ01vZHVsZSBUYWJsZSBOZXcgVXBkYXRlIENvbHVtbiBEZWZpbml0aW9uJywgIHRoaXMuY29sdW1uc1RvRGlzcGxheSk7XG4gIH1cblxuICBnZW5lcmF0ZUNsYXNzKENsYXNzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IE15Q2xhc3M6IHN0cmluZ1tdID0gWydkZWZhdWx0LXRhYmxlLWNsYXNzJ107XG4gICAgZm9yIChsZXQgYyBvZiBDbGFzcykge1xuICAgICAgaWYgKGMgJiYgYyAhPT0gJycpIHtcbiAgICAgICAgTXlDbGFzcy5wdXNoKGMpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gTXlDbGFzcztcbiAgfVxuXG4gIGFzeW5jIHNvcnQoKSB7XG4gICAgY29uc3QgY29tcGFyZSA9IChhOiBhbnksIGI6IGFueSkgPT4ge1xuICAgICAgcmV0dXJuIChhLm9yZGVyIDwgYi5vcmRlciA/IC0xIDogKGEub3JkZXIgPiBiLm9yZGVyID8gMSA6IDApKTtcbiAgICB9O1xuICAgIGlmICh0aGlzLlByaXZhdGVDb2x1bW5EZWZpbml0aW9ucykge1xuICAgICAgcmV0dXJuIFsuLi50aGlzLlByaXZhdGVDb2x1bW5EZWZpbml0aW9ucy5zb3J0KGNvbXBhcmUpXTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYnVpbGRMaW5rKG92ZXJyaWRlOiBzdHJpbmdbXSwgZWxlbWVudCkge1xuICAgIGlmIChvdmVycmlkZS5sZW5ndGggPj0gMikge1xuICAgICAgbGV0IGJhc2VQYXRoOiBzdHJpbmcgPSBvdmVycmlkZVswXTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgb3ZlcnJpZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYmFzZVBhdGggKz0gJy8nICsgZWxlbWVudFtvdmVycmlkZVtpXV07XG4gICAgICB9XG4gICAgICByZXR1cm4gYmFzZVBhdGg7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIEpvaW4oZWxlbTogYW55LCBvdmVycmlkZTogc3RyaW5nW10sIGpvaW5LZXk6IHN0cmluZyA9ICdcXG4nKTogc3RyaW5nIHtcbiAgICBjb25zdCB2YWx1ZTogc3RyaW5nW10gPSBbXTtcbiAgICBmb3IgKGxldCB4IGluIGVsZW0pIHtcbiAgICAgIGlmIChvdmVycmlkZS5pbmRleE9mKHgpID4gLTEpIHtcbiAgICAgICAgdmFsdWUucHVzaChlbGVtW3hdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlLmpvaW4oam9pbktleSk7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmRhdGEuZmlsdGVyKHtcbiAgICAgIHRhcmdldDoge1xuICAgICAgICB2YWx1ZTogJydcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGV4cGFuZFNob3codGVtcGxhdGU6IHN0cmluZykge1xuXG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKHRoaXMuaW5wdXRTZWFyY2gpIHtcbiAgICAgIHRoaXMuX2lucHV0U2VhcmNoLm5leHQodGhpcy5pbnB1dFNlYXJjaCA9PT0gJycgPyBudWxsIDogdGhpcy5pbnB1dFNlYXJjaCk7XG4gICAgfVxuICAgIC8qIGlmICgodGhpcy5pbnB1dFNlYXJjaC5sZW5ndGggPiAxIHx8IHRoaXMuaW5wdXRTZWFyY2gubGVuZ3RoID09PSAwKVxuICAgICAgICYmIHRoaXMuaW5wdXRTZWFyY2gubGVuZ3RoIDwgMjAwKSB7XG4gICAgICAgaWYgKHRoaXMuZGF0YSkge1xuICAgICAgICAgdGhpcy5kYXRhLmZpbHRlcih0aGlzLmlucHV0U2VhcmNoKTtcbiAgICAgICAgIHRoaXMuZGF0YS5wYWdlTnVtYmVyLm5leHQoMCk7XG4gICAgICAgICB0aGlzLmRhdGEuZmV0Y2goMCk7XG4gICAgICAgICB0aGlzLmRhdGEubnVtYmVyID0gMDtcbiAgICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgfVxuICAgICB9Ki9cblxuICAgIC8vIHRoaXMubmdPbkluaXQoKTtcbiAgfVxuXG59XG5cbmV4cG9ydCB7XG4gIENvcmVNYXRUYWJsZSxcbiAgRmlsdGVyRGF0ZUludGVyZmFjZSxcbiAgQ29yZU1hdFRhYmxlSW50ZXJmYWNlLFxuICBQYWdlLFxuICBQYWdlUmVxdWVzdCxcbiAgU29ydCxcbiAgZGlzcGxheWVkQ29sdW1uc0ludGVyZmFjZSxcbiAgQ2VsbHNDb21wb25lbnRMaXN0LFxuICBUYWJsZUNvbXBvbmVudFxufTtcbiJdfQ==