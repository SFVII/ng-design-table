import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tooltip";
import * as i2 from "@angular/common";
export class DateFormatComponent {
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
DateFormatComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: DateFormatComponent, selector: "date-format", inputs: { date: "date", timezone: "timezone" }, usesOnChanges: true, ngImport: i0, template: "<span matTooltip=\"{{(date| date : 'short' : timezone)}}\" [innerHTML]=\"run((date| date : 'short' : timezone))\"></span>\n", styles: ["span.time-badge{display:block;text-align:center!important;padding-right:25px}span.time-badge .hour{display:block;font-weight:900;font-size:12px}span.time-badge .minute{display:block;font-weight:300;font-size:10px}\n"], directives: [{ type: i1.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }], pipes: { "date": i2.DatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DateFormatComponent, decorators: [{
            type: Component,
            args: [{ selector: 'date-format', template: "<span matTooltip=\"{{(date| date : 'short' : timezone)}}\" [innerHTML]=\"run((date| date : 'short' : timezone))\"></span>\n", styles: ["span.time-badge{display:block;text-align:center!important;padding-right:25px}span.time-badge .hour{display:block;font-weight:900;font-size:12px}span.time-badge .minute{display:block;font-weight:300;font-size:10px}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { date: [{
                type: Input
            }], timezone: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1mb3JtYXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvZGF0ZS1mb3JtYXQvZGF0ZS1mb3JtYXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvZGF0ZS1mb3JtYXQvZGF0ZS1mb3JtYXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDOzs7O0FBT2pGLE1BQU0sT0FBTyxtQkFBbUI7SUFLNUI7UUFIUyxhQUFRLEdBQVksSUFBSSxDQUFBO0lBSWpDLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVELEdBQUcsQ0FBQyxJQUFXO1FBQ1gsSUFBSSxJQUFJLEVBQUU7WUFDTixJQUFJLENBQUMsR0FBYSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xDLE9BQVE7eUNBQ3FCLENBQUMsQ0FBQyxDQUFDLENBQUM7K0NBQ0UsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDM0IsQ0FBQztTQUNoQjthQUFNO1lBQ0gsT0FBTzs7O3dCQUdLLENBQUM7U0FDaEI7SUFDTCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO0lBRWxDLENBQUM7O2lIQTVCUSxtQkFBbUI7cUdBQW5CLG1CQUFtQix3SENQaEMsNkhBQ0E7NEZETWEsbUJBQW1CO2tCQUwvQixTQUFTOytCQUNJLGFBQWE7MEVBS2QsSUFBSTtzQkFBWixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdkYXRlLWZvcm1hdCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2RhdGUtZm9ybWF0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9kYXRlLWZvcm1hdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIERhdGVGb3JtYXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gICAgQElucHV0KCkgZGF0ZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHRpbWV6b25lIDogc3RyaW5nID0gJ2ZyJ1xuICAgIHB1YmxpYyBkaXNwbGF5OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cbiAgICBydW4oZGF0ZTpzdHJpbmcpIHtcbiAgICAgICAgaWYgKGRhdGUpIHtcbiAgICAgICAgICAgIGxldCB0OiBzdHJpbmdbXSA9IGRhdGUuc3BsaXQoJyAnKTtcbiAgICAgICAgICAgIHJldHVybiAgYDxzcGFuIGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaG91clwiPiR7dFswXX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwhLS08c3BhbiBjbGFzcz1cIm1pbnV0ZVwiPiR7dFsxXX08L3NwYW4+LS0+XG4gICAgICAgICAgICAgICAgPC9zcGFuPmA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYDxzcGFuIGNsYXNzPVwidGltZS1iYWRnZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhvdXJcIj4tPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1pbnV0ZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+YDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblxuICAgIH1cblxufVxuIiwiPHNwYW4gbWF0VG9vbHRpcD1cInt7KGRhdGV8IGRhdGUgOiAnc2hvcnQnIDogdGltZXpvbmUpfX1cIiBbaW5uZXJIVE1MXT1cInJ1bigoZGF0ZXwgZGF0ZSA6ICdzaG9ydCcgOiB0aW1lem9uZSkpXCI+PC9zcGFuPlxuIl19