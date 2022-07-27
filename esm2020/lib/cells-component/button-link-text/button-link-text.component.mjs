import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '../../translate.service';
import * as i0 from "@angular/core";
import * as i1 from "../../translate.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/material/tooltip";
import * as i4 from "@angular/common";
export class ButtonLinkTextComponent {
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
        this.callHandler.emit({
            modal: this.modal,
            id: this.id,
            caseNumber: this.element?.CaseNumber,
            Vote: this.element?.Vote
        });
    }
}
ButtonLinkTextComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ButtonLinkTextComponent, deps: [{ token: i1.TranslateService }], target: i0.ɵɵFactoryTarget.Component });
ButtonLinkTextComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: ButtonLinkTextComponent, selector: "button-link-text", inputs: { lang: "lang", routerLink: "routerLink", text: "text", class: "class", id: "id", modal: "modal", element: "element" }, outputs: { callHandler: "callHandler" }, ngImport: i0, template: "<a [matTooltip]=\"open\"\n    [ngClass]=\"class\"\n    class=\"btn-link-text btn-xs\"\n    [routerLink]=\"routerLink\"\n    [id]=\"id\"\n    (click)=\"action()\"\n>\n    {{ text }}\n</a>", styles: [""], directives: [{ type: i2.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo", "routerLink"] }, { type: i3.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ButtonLinkTextComponent, decorators: [{
            type: Component,
            args: [{ selector: 'button-link-text', template: "<a [matTooltip]=\"open\"\n    [ngClass]=\"class\"\n    class=\"btn-link-text btn-xs\"\n    [routerLink]=\"routerLink\"\n    [id]=\"id\"\n    (click)=\"action()\"\n>\n    {{ text }}\n</a>", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1.TranslateService }]; }, propDecorators: { lang: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWxpbmstdGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90YWJsZS9zcmMvbGliL2NlbGxzLWNvbXBvbmVudC9idXR0b24tbGluay10ZXh0L2J1dHRvbi1saW5rLXRleHQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvYnV0dG9uLWxpbmstdGV4dC9idXR0b24tbGluay10ZXh0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7OztBQU8zRCxNQUFNLE9BQU8sdUJBQXVCO0lBWWxDLFlBQ1UsU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFWNUIsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxPQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ1IsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUVWLGdCQUFXLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFFNUQsU0FBSSxHQUFHLEVBQUUsQ0FBQztJQUliLENBQUM7SUFFTCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRXhELElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxRQUFRLEVBQUU7WUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQzVEO1FBRUQsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEVBQUUsRUFBRTtZQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztTQUN0QjtJQUNILENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQ25CO1lBQ0UsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVU7WUFDcEMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSTtTQUN6QixDQUNGLENBQUM7SUFDSixDQUFDOztxSEFyQ1UsdUJBQXVCO3lHQUF2Qix1QkFBdUIsaU9DUnBDLDRMQVFJOzRGREFTLHVCQUF1QjtrQkFMbkMsU0FBUzsrQkFDRSxrQkFBa0I7dUdBS25CLElBQUk7c0JBQVosS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csRUFBRTtzQkFBVixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0ksV0FBVztzQkFBcEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi90cmFuc2xhdGUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2J1dHRvbi1saW5rLXRleHQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYnV0dG9uLWxpbmstdGV4dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2J1dHRvbi1saW5rLXRleHQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkxpbmtUZXh0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbGFuZzogc3RyaW5nO1xuICBASW5wdXQoKSByb3V0ZXJMaW5rOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRleHQgPSAnJztcbiAgQElucHV0KCkgY2xhc3MgPSAnJztcbiAgQElucHV0KCkgaWQgPSAnJztcbiAgQElucHV0KCkgbW9kYWwgPSAnJztcbiAgQElucHV0KCkgZWxlbWVudDogYW55O1xuICBAT3V0cHV0KCkgY2FsbEhhbmRsZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgcHVibGljIG9wZW4gPSAnJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSxcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm9wZW4gPSB0aGlzLnRyYW5zbGF0ZS50cmFuc2xhdGUodGhpcy5sYW5nLCAnT1BFTicpO1xuXG4gICAgaWYgKHRoaXMudGV4dCA9PSAnQWN0aW9uJykge1xuICAgICAgdGhpcy50ZXh0ID0gdGhpcy50cmFuc2xhdGUudHJhbnNsYXRlKHRoaXMubGFuZywgJ0RFVEFJTFMnKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tb2RhbCAhPT0gJycpIHtcbiAgICAgIHRoaXMucm91dGVyTGluayA9ICcnO1xuICAgIH1cbiAgfVxuXG4gIGFjdGlvbigpIHtcbiAgICB0aGlzLmNhbGxIYW5kbGVyLmVtaXQoXG4gICAgICB7XG4gICAgICAgIG1vZGFsOiB0aGlzLm1vZGFsLFxuICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgY2FzZU51bWJlcjogdGhpcy5lbGVtZW50Py5DYXNlTnVtYmVyLFxuICAgICAgICBWb3RlOiB0aGlzLmVsZW1lbnQ/LlZvdGVcbiAgICAgIH1cbiAgICApO1xuICB9XG59XG4iLCI8YSBbbWF0VG9vbHRpcF09XCJvcGVuXCJcbiAgICBbbmdDbGFzc109XCJjbGFzc1wiXG4gICAgY2xhc3M9XCJidG4tbGluay10ZXh0IGJ0bi14c1wiXG4gICAgW3JvdXRlckxpbmtdPVwicm91dGVyTGlua1wiXG4gICAgW2lkXT1cImlkXCJcbiAgICAoY2xpY2spPVwiYWN0aW9uKClcIlxuPlxuICAgIHt7IHRleHQgfX1cbjwvYT4iXX0=