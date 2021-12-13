import { __awaiter, __decorate, __metadata } from "tslib";
import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { CellsComponentList } from "./setting/CellsComponentRegistry";
import { MatSort } from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";
import { CoreMatTable } from "./core-data-table";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { ActivatedRoute, Router } from "@angular/router";
import { TableService } from "./table.service";
import { TranslateService } from './translate.service';
let TableComponent = class TableComponent {
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
        console.log(this.expandedElement);
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
                console.log('newpage console : ', newpage);
                if (newpage > 0) {
                    this.router.navigate([], {
                        relativeTo: this.route,
                        queryParams: { page: newpage + 1 },
                        queryParamsHandling: 'merge',
                    });
                }
                else if (newpage === 0) {
                    this.router.navigate([], {
                        relativeTo: this.route,
                        queryParams: { page: null },
                        queryParamsHandling: 'merge',
                    });
                    this.changeDetectorRef.markForCheck();
                    console.log('on passe dans la ligne 142');
                }
                if (this.data && this.data.paginator && this.data.paginator.pageIndex !== newpage) {
                    this.data.paginator.pageIndex = newpage;
                    this.changeDetectorRef.markForCheck();
                    console.log('on passe dans la ligne 146');
                }
            });
            const page = this.route.snapshot.queryParams["page"];
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
            && this.inputSearch.length < 200) {
            if (this.data) {
                this.data.filter(this.inputSearch);
                this.data.pageNumber.next(0);
                this.data.fetch(0);
                this.data.number = 0;
                this.changeDetectorRef.markForCheck();
            }
        }
        this.ngOnInit();
    }
};
TableComponent.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute },
    { type: TableService },
    { type: ChangeDetectorRef },
    { type: TranslateService },
    { type: ChangeDetectorRef }
];
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
    __metadata("design:type", Object)
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
export { CoreMatTable, CellsComponentList, TableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sTUFBTSxFQUNOLGFBQWEsRUFDYixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDekQsT0FBTyxFQUFDLFlBQVksRUFBc0UsTUFBTSxtQkFBbUIsQ0FBQztBQUNwSCxPQUFPLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQy9FLE9BQU8sRUFBQyxjQUFjLEVBQUUsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBd0NyRCxJQUFNLGNBQWMsR0FBcEIsTUFBTSxjQUFjO0lBNkJsQixZQUFvQixNQUFjLEVBQ2QsS0FBcUIsRUFDckIsT0FBcUIsRUFDckIsUUFBMkIsRUFDM0IsU0FBMkIsRUFDM0IsaUJBQW9DO1FBTHBDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixZQUFPLEdBQVAsT0FBTyxDQUFjO1FBQ3JCLGFBQVEsR0FBUixRQUFRLENBQW1CO1FBQzNCLGNBQVMsR0FBVCxTQUFT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QUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQztnQkFDM0UsS0FBSyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFDLENBQUMsQ0FBQztnQkFDdkMsVUFBVSxDQUFDLHdCQUF3QixFQUFFLE9BQU8sQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO2FBQ3RGLENBQUMsQ0FBQztRQUNILGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztLQUN0QyxDQUFDO3FDQThCNEIsTUFBTTtRQUNQLGNBQWM7UUFDWixZQUFZO1FBQ1gsaUJBQWlCO1FBQ2hCLGdCQUFnQjtRQUNSLGlCQUFpQjtHQWxDcEQsY0FBYyxDQWtNbkI7QUFFRCxPQUFPLEVBQ0wsWUFBWSxFQU9aLGtCQUFrQixFQUNsQixjQUFjLEVBQ2YsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NlbGxzQ29tcG9uZW50TGlzdH0gZnJvbSBcIi4vc2V0dGluZy9DZWxsc0NvbXBvbmVudFJlZ2lzdHJ5XCI7XG5pbXBvcnQge01hdFNvcnR9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9zb3J0XCI7XG5pbXBvcnQge01hdFBhZ2luYXRvcn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvclwiO1xuaW1wb3J0IHtDb3JlTWF0VGFibGUsIENvcmVNYXRUYWJsZUludGVyZmFjZSwgRmlsdGVyRGF0ZUludGVyZmFjZSwgUGFnZSwgUGFnZVJlcXVlc3QsIFNvcnR9IGZyb20gXCIuL2NvcmUtZGF0YS10YWJsZVwiO1xuaW1wb3J0IHthbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXJ9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7VGFibGVTZXJ2aWNlfSBmcm9tIFwiLi90YWJsZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1RyYW5zbGF0ZVNlcnZpY2V9IGZyb20gJy4vdHJhbnNsYXRlLnNlcnZpY2UnO1xuXG5cbmludGVyZmFjZSBkaXNwbGF5Q29sdW1uc0NvbmZpZyB7XG4gIHNpemVJY29uPzogbnVtYmVyO1xuICBkaXNwbGF5WWVzPzogYm9vbGVhbjtcbiAgZGlzcGxheU5vPzogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIGRpc3BsYXllZENvbHVtbnNJbnRlcmZhY2Uge1xuICBrZXk6IHN0cmluZzsgLy8gb2JqZWN0IGtleVxuICB2YWx1ZTogc3RyaW5nOyAvLyBkaXNwbGF5IGNvbHVtbiB2YWx1ZXNcbiAgcmF0aW8/OiBudW1iZXI7XG4gIG9yZGVyPzogbnVtYmVyOyAvLyBzb3J0IGNvbHVtblxuICBjbGFzcz86IHN0cmluZzsgLy8gY3NzIGNsYXNzXG4gIG1vZHVsZT86IENlbGxzQ29tcG9uZW50TGlzdDtcbiAgb3ZlcnJpZGU/OiBzdHJpbmcgfCBzdHJpbmdbXTsgLy8gZm9yIGJ1aWxkaW5nIHVybCBvciBhdmF0YXIgbmFtZVxuICBkaXNwbGF5Pzogc3RyaW5nOyAvLyBmb3JjZSBkaXNwbGF5aW5nIG90aGVyIHN0dWZmIHRoYW4gZWxlbWVudFtmb2N1c11cbiAgYWxpZ24/OiBzdHJpbmc7IC8vIGNlbGwgY29udGVudCBhbGlnbiAnbGVmdCBjZW50ZXIgcmlnaHQnXG4gIHNvcnQ/OiBib29sZWFuOyAvLyAnc29ydGFibGUgY29sdW1uJ1xuICBjbGlja2FibGU/OiBib29sZWFuOyAvLyBlbmFibGUgY2xpY2thYmxlIGNvbHVtbiB3aGVuIHNvcnRpbmcgaXMgZGlzYWJsZVxuICBzdGF0ZW1lbnQ/OiBib29sZWFuOyAvLyBieSBkZWZhdWx0IHN0YXRlbWVudCBpcyBmYWxzZSBhbmQgaXMgdXNlZCB3aXRoICdjbGlja2FibGUnIG9wdGlvbnNcbiAgdmFsdWVTdGF0ZW1lbnQ/OiBzdHJpbmdbXTtcbiAgY29uZmlnPzogZGlzcGxheUNvbHVtbnNDb25maWc7XG4gIHZhbHVlT3ZlcnJpZGU/OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH07XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1kZXNpZ24tdGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90YWJsZS5jb21wb25lbnQuc2NzcyddLFxuICBhbmltYXRpb25zOiBbdHJpZ2dlcignZGV0YWlsRXhwYW5kJywgW1xuICAgIHN0YXRlKCdjb2xsYXBzZWQnLCBzdHlsZSh7aGVpZ2h0OiAnMHB4JywgbWluSGVpZ2h0OiAnMCcsIGRpc3BsYXk6ICdub25lJ30pKSxcbiAgICBzdGF0ZSgnZXhwYW5kZWQnLCBzdHlsZSh7aGVpZ2h0OiAnKid9KSksXG4gICAgdHJhbnNpdGlvbignZXhwYW5kZWQgPD0+IGNvbGxhcHNlZCcsIGFuaW1hdGUoJzIyNW1zIGN1YmljLWJlemllcigwLjQsIDAuMCwgMC4yLCAxKScpKSxcbiAgXSldLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuY2xhc3MgVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBWaWV3Q2hpbGQoJ01hdFBhZ2luYXRvckN1cnJlbnQnLCB7c3RhdGljOiB0cnVlfSkgcGFnaW5hdG9yQ3VycmVudDogTWF0UGFnaW5hdG9yO1xuICBAVmlld0NoaWxkKCd0YWJsZScsIHtzdGF0aWM6IHRydWV9KSBzb3J0Q3VycmVudDogTWF0U29ydDtcblxuICBASW5wdXQoKSBjb2x1bW5EZWZpbml0aW9uczogW2Rpc3BsYXllZENvbHVtbnNJbnRlcmZhY2VdO1xuICBASW5wdXQoKSBkaXNwbGF5RGV0YWlsOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRpc3BsYXlDb21wb25lbnQ6IHN0cmluZztcbiAgQElucHV0KCkgZGF0YTogQ29yZU1hdFRhYmxlSW50ZXJmYWNlO1xuICBASW5wdXQoKSBsYW5nOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGJ0bk92ZXJyaWRlID0gZmFsc2U7XG4gIEBPdXRwdXQoKSBjYWxsRnVuY3Rpb246IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBJbnB1dCgpIGlucHV0U2VhcmNoID0gJyc7XG4gIEBJbnB1dCgpIEVtcHR5Um93ID0gZmFsc2U7XG4gIEBJbnB1dCgpIGJsb2NrRGV0YWlscyA9IGZhbHNlO1xuICBAT3V0cHV0KCkgY2xpY2tlZDogRXZlbnRFbWl0dGVyPHsga2V5OiBzdHJpbmcsIHN0YXRlbWVudDogYm9vbGVhbiB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwdWJsaWMgY29sdW1uc1RvRGlzcGxheTogc3RyaW5nW107XG4gIHB1YmxpYyBmaWx0ZXI6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgcHVibGljIGRpc3BsYXllZENvbHVtbnM6IGFueTtcbiAgcHVibGljIGV4cGFuZGVkRWxlbWVudDogYW55O1xuICBwdWJsaWMgaW5kZXggPSAwO1xuICBwdWJsaWMgb3BlbiA9ICcnO1xuICBwdWJsaWMgc2VhcmNoID0gJyc7XG4gIHB1YmxpYyBjYW5jZWxTZWFyY2ggPSAnJztcbiAgcHVibGljIG5vUmVzdWx0ID0gJyc7XG4gIHB1YmxpYyBkZXRhaWxzID0gJyc7XG4gIHB1YmxpYyBzaG93VGFibGUgPSBmYWxzZTtcbiAgcHJpdmF0ZSBQcml2YXRlQ29sdW1uRGVmaW5pdGlvbnM6IFtkaXNwbGF5ZWRDb2x1bW5zSW50ZXJmYWNlXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBzZXJ2aWNlOiBUYWJsZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgZGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgfVxuXG4gIGV4cGFuZChlbGVtZW50KSB7XG4gICAgaWYgKHRoaXMuYmxvY2tEZXRhaWxzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmV4cGFuZGVkRWxlbWVudCA9PT0gZWxlbWVudCkge1xuICAgICAgdGhpcy5leHBhbmRlZEVsZW1lbnQgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmV4cGFuZGVkRWxlbWVudCA9IGVsZW1lbnRcbiAgICB9XG4gICAgY29uc29sZS5sb2codGhpcy5leHBhbmRlZEVsZW1lbnQpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXJ2aWNlLmVtcHR5Um93ID0gdGhpcy5FbXB0eVJvdztcbiAgICB0aGlzLm9wZW4gPSB0aGlzLnRyYW5zbGF0ZS50cmFuc2xhdGUodGhpcy5sYW5nLCAnT1BFTicpO1xuICAgIHRoaXMuc2VhcmNoID0gdGhpcy50cmFuc2xhdGUudHJhbnNsYXRlKHRoaXMubGFuZywgJ1NFQVJDSCcpO1xuICAgIHRoaXMuY2FuY2VsU2VhcmNoID0gdGhpcy50cmFuc2xhdGUudHJhbnNsYXRlKHRoaXMubGFuZywgJ0NBTkNFTF9TRUFSQ0gnKTtcbiAgICB0aGlzLm5vUmVzdWx0ID0gdGhpcy50cmFuc2xhdGUudHJhbnNsYXRlKHRoaXMubGFuZywgJ05PX1JFU1VMVCcpO1xuICAgIHRoaXMuZGV0YWlscyA9IHRoaXMudHJhbnNsYXRlLnRyYW5zbGF0ZSh0aGlzLmxhbmcsICdERVRBSUxTJyk7XG5cbiAgICBpZiAodGhpcy5kYXRhKSB7XG4gICAgICB0aGlzLmV4cGFuZGVkRWxlbWVudCA9IGZhbHNlO1xuICAgICAgdGhpcy5kYXRhLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yQ3VycmVudDtcbiAgICAgIHRoaXMuZGF0YS5zb3J0ID0gdGhpcy5zb3J0Q3VycmVudDtcblxuICAgICAgdGhpcy5kYXRhLnBhZ2VOdW1iZXIuc3Vic2NyaWJlKChuZXdwYWdlOiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ25ld3BhZ2UgY29uc29sZSA6ICcsbmV3cGFnZSk7XG4gICAgICAgIGlmIChuZXdwYWdlID4gMCkge1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFxuICAgICAgICAgICAgW10sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJlbGF0aXZlVG86IHRoaXMucm91dGUsXG4gICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7cGFnZTogbmV3cGFnZSArIDF9LFxuICAgICAgICAgICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnLCAvLyByZW1vdmUgdG8gcmVwbGFjZSBhbGwgcXVlcnkgcGFyYW1zIGJ5IHByb3ZpZGVkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChuZXdwYWdlID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoXG4gICAgICAgICAgICBbXSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSxcbiAgICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtwYWdlOiBudWxsfSxcbiAgICAgICAgICAgICAgcXVlcnlQYXJhbXNIYW5kbGluZzogJ21lcmdlJywgLy8gcmVtb3ZlIHRvIHJlcGxhY2UgYWxsIHF1ZXJ5IHBhcmFtcyBieSBwcm92aWRlZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ29uIHBhc3NlIGRhbnMgbGEgbGlnbmUgMTQyJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEucGFnaW5hdG9yICYmIHRoaXMuZGF0YS5wYWdpbmF0b3IucGFnZUluZGV4ICE9PSBuZXdwYWdlKSB7XG4gICAgICAgICAgdGhpcy5kYXRhLnBhZ2luYXRvci5wYWdlSW5kZXggPSBuZXdwYWdlO1xuICAgICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ29uIHBhc3NlIGRhbnMgbGEgbGlnbmUgMTQ2JylcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjb25zdCBwYWdlID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1tcInBhZ2VcIl07XG4gICAgICBpZiAocGFnZSkge1xuICAgICAgICBjb25zdCBjdXJyZW50UGFnZTogbnVtYmVyID0gTnVtYmVyKHBhZ2UpIC0gMTtcbiAgICAgICAgdGhpcy5kYXRhLnN0YXJ0V2l0aCA9IGN1cnJlbnRQYWdlO1xuICAgICAgICB0aGlzLmRhdGEuZmV0Y2goY3VycmVudFBhZ2UpO1xuICAgICAgICB0aGlzLmRhdGEubnVtYmVyID0gY3VycmVudFBhZ2U7XG4gICAgICB9XG4gICAgICB0aGlzLlByaXZhdGVDb2x1bW5EZWZpbml0aW9ucyA9IHRoaXMuY29sdW1uRGVmaW5pdGlvbnM7XG4gICAgICB0aGlzLmJ1aWxkSGVhZGVycygpLmNhdGNoKChlcnI6IGFueSkgPT4gY29uc29sZS5sb2coJ0Vycm9yIGJ1aWxkIHRhYmxlJywgZXJyKSk7XG4gICAgICB0aGlzLnNlcnZpY2UudXBkYXRlSGVhZGVyLnN1YnNjcmliZSgoc3RhdHVzOiBib29sZWFuKSA9PiB7XG4gICAgICAgIGlmIChzdGF0dXMgPT09IHRydWUpIHtcbiAgICAgICAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMgPSBudWxsO1xuICAgICAgICAgIHRoaXMuY29sdW1uc1RvRGlzcGxheSA9IG51bGw7XG4gICAgICAgICAgdGhpcy5Qcml2YXRlQ29sdW1uRGVmaW5pdGlvbnMgPSB0aGlzLnNlcnZpY2UuZGlzcGxheUNvbHVtbjtcbiAgICAgICAgICBjb25zb2xlLmxvZygnTW9kdWxlIHRhYmxlIC0+IE5ldyBjb2x1bW4gZGVmaW5pdGlvbnMnLCB0aGlzLlByaXZhdGVDb2x1bW5EZWZpbml0aW9ucyk7XG4gICAgICAgICAgdGhpcy5idWlsZEhlYWRlcnMoKS5jYXRjaCgoZXJyOiBhbnkpID0+IGNvbnNvbGUubG9nKCdFcnJvciBidWlsZCB0YWJsZScsIGVycikpO1xuICAgICAgICAgIHRoaXMuZGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG4gICAgdGhpcy5zaG93VGFibGUgPSB0cnVlO1xuICB9XG5cbiAgYXN5bmMgYnVpbGRIZWFkZXJzKCkge1xuICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucyA9IGF3YWl0IHRoaXMuc29ydCgpO1xuICAgIGlmICh0aGlzLmRpc3BsYXllZENvbHVtbnMpIHtcbiAgICAgIGNvbnN0IHRtcDogYW55ID0gW107XG4gICAgICBmb3IgKGxldCBrIG9mIHRoaXMuZGlzcGxheWVkQ29sdW1ucykge1xuICAgICAgICB0bXAucHVzaChrLmtleSk7XG4gICAgICB9XG4gICAgICB0aGlzLmNvbHVtbnNUb0Rpc3BsYXkgPSBbLi4udG1wXTtcbiAgICB9XG4gICAgLy9jb25zb2xlLmxvZygnTW9kdWxlIFRhYmxlIE5ldyBVcGRhdGUgQ29sdW1uIERlZmluaXRpb24nLCAgdGhpcy5jb2x1bW5zVG9EaXNwbGF5KTtcbiAgfVxuXG4gIGdlbmVyYXRlQ2xhc3MoQ2xhc3M6IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgTXlDbGFzczogc3RyaW5nW10gPSBbJ2RlZmF1bHQtdGFibGUtY2xhc3MnXTtcbiAgICBmb3IgKGxldCBjIG9mIENsYXNzKSB7XG4gICAgICBpZiAoYyAmJiBjICE9PSAnJykge1xuICAgICAgICBNeUNsYXNzLnB1c2goYyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBNeUNsYXNzO1xuICB9XG5cbiAgYXN5bmMgc29ydCgpIHtcbiAgICBjb25zdCBjb21wYXJlID0gKGE6IGFueSwgYjogYW55KSA9PiB7XG4gICAgICByZXR1cm4gKGEub3JkZXIgPCBiLm9yZGVyID8gLTEgOiAoYS5vcmRlciA+IGIub3JkZXIgPyAxIDogMCkpXG4gICAgfTtcbiAgICBpZiAodGhpcy5Qcml2YXRlQ29sdW1uRGVmaW5pdGlvbnMpIHtcbiAgICAgIHJldHVybiBbLi4udGhpcy5Qcml2YXRlQ29sdW1uRGVmaW5pdGlvbnMuc29ydChjb21wYXJlKV07XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGJ1aWxkTGluayhvdmVycmlkZTogc3RyaW5nW10sIGVsZW1lbnQpIHtcbiAgICBpZiAob3ZlcnJpZGUubGVuZ3RoID49IDIpIHtcbiAgICAgIGxldCBiYXNlUGF0aDogc3RyaW5nID0gb3ZlcnJpZGVbMF07XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG92ZXJyaWRlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJhc2VQYXRoICs9ICcvJyArIGVsZW1lbnRbb3ZlcnJpZGVbaV1dO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGJhc2VQYXRoO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBKb2luKGVsZW06IGFueSwgb3ZlcnJpZGU6IHN0cmluZ1tdLCBqb2luS2V5OiBzdHJpbmcgPSAnXFxuJyk6IHN0cmluZyB7XG4gICAgY29uc3QgdmFsdWU6IHN0cmluZ1tdID0gW107XG4gICAgZm9yIChsZXQgeCBpbiBlbGVtKSB7XG4gICAgICBpZiAob3ZlcnJpZGUuaW5kZXhPZih4KSA+IC0xKSB7XG4gICAgICAgIHZhbHVlLnB1c2goZWxlbVt4XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZS5qb2luKGpvaW5LZXkpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmRhdGEuZmlsdGVyKHtcbiAgICAgIHRhcmdldDoge1xuICAgICAgICB2YWx1ZTogJydcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGV4cGFuZFNob3codGVtcGxhdGU6IHN0cmluZykge1xuXG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKCh0aGlzLmlucHV0U2VhcmNoLmxlbmd0aCA+IDEgfHwgdGhpcy5pbnB1dFNlYXJjaC5sZW5ndGggPT09IDApXG4gICAgICAmJiB0aGlzLmlucHV0U2VhcmNoLmxlbmd0aCA8IDIwMCkge1xuICAgICAgaWYgKHRoaXMuZGF0YSkge1xuICAgICAgICB0aGlzLmRhdGEuZmlsdGVyKHRoaXMuaW5wdXRTZWFyY2gpO1xuICAgICAgICB0aGlzLmRhdGEucGFnZU51bWJlci5uZXh0KDApXG4gICAgICAgIHRoaXMuZGF0YS5mZXRjaCgwKTtcbiAgICAgICAgdGhpcy5kYXRhLm51bWJlciA9IDA7XG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5uZ09uSW5pdCgpO1xuICB9XG5cbn1cblxuZXhwb3J0IHtcbiAgQ29yZU1hdFRhYmxlLFxuICBGaWx0ZXJEYXRlSW50ZXJmYWNlLFxuICBDb3JlTWF0VGFibGVJbnRlcmZhY2UsXG4gIFBhZ2UsXG4gIFBhZ2VSZXF1ZXN0LFxuICBTb3J0LFxuICBkaXNwbGF5ZWRDb2x1bW5zSW50ZXJmYWNlLFxuICBDZWxsc0NvbXBvbmVudExpc3QsXG4gIFRhYmxlQ29tcG9uZW50XG59XG4iXX0=