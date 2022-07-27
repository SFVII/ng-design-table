import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/router";
import * as i3 from "../png-icon/png-icon.component";
import * as i4 from "@angular/material/menu";
import * as i5 from "@angular/common";
export class MenuComponent {
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
MenuComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: MenuComponent, deps: [{ token: i1.MatDialog }, { token: i2.Router }], target: i0.ɵɵFactoryTarget.Component });
MenuComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: MenuComponent, selector: "lib-menu", inputs: { title: "title", MenuList: "MenuList", Data: "Data" }, outputs: { DialogClose: "DialogClose" }, ngImport: i0, template: "<ng-container *ngIf=\"MenuList\">\n  <div mat-button [matMenuTriggerFor]=\"menu\" [title]=\"title\">\n    <png-icon [src]=\"'/assets/nowboard-icon/menu_kebab.svg'\"></png-icon>\n  </div>\n  <mat-menu #menu=\"matMenu\">\n    <ng-container  *ngFor=\"let item of MenuList\">\n      <ng-container *ngIf=\"item.Type === 'Link'\">\n        <button mat-menu-item (click)=\"goToLink(item.Route)\">\n          <png-icon [src]=\"item.Icon\"></png-icon>\n          <span [innerHTML]=\"item.Label\"></span>\n        </button>\n      </ng-container>\n      <ng-container *ngIf=\"item.Type === 'Modal'\">\n        <button mat-menu-item (click)=\"openModal(item.ComponentModal)\">\n          <png-icon [src]=\"item.Icon\"></png-icon>\n          <span [innerHTML]=\"item.Label\"></span>\n        </button>\n      </ng-container>\n    </ng-container>\n  </mat-menu>\n</ng-container>\n", styles: [""], components: [{ type: i3.PngIconComponent, selector: "png-icon", inputs: ["src", "fontSize", "color"] }, { type: i4.MatMenu, selector: "mat-menu", exportAs: ["matMenu"] }, { type: i4.MatMenuItem, selector: "[mat-menu-item]", inputs: ["disabled", "disableRipple", "role"], exportAs: ["matMenuItem"] }], directives: [{ type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", exportAs: ["matMenuTrigger"] }, { type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: MenuComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-menu', template: "<ng-container *ngIf=\"MenuList\">\n  <div mat-button [matMenuTriggerFor]=\"menu\" [title]=\"title\">\n    <png-icon [src]=\"'/assets/nowboard-icon/menu_kebab.svg'\"></png-icon>\n  </div>\n  <mat-menu #menu=\"matMenu\">\n    <ng-container  *ngFor=\"let item of MenuList\">\n      <ng-container *ngIf=\"item.Type === 'Link'\">\n        <button mat-menu-item (click)=\"goToLink(item.Route)\">\n          <png-icon [src]=\"item.Icon\"></png-icon>\n          <span [innerHTML]=\"item.Label\"></span>\n        </button>\n      </ng-container>\n      <ng-container *ngIf=\"item.Type === 'Modal'\">\n        <button mat-menu-item (click)=\"openModal(item.ComponentModal)\">\n          <png-icon [src]=\"item.Icon\"></png-icon>\n          <span [innerHTML]=\"item.Label\"></span>\n        </button>\n      </ng-container>\n    </ng-container>\n  </mat-menu>\n</ng-container>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1.MatDialog }, { type: i2.Router }]; }, propDecorators: { title: [{
                type: Input
            }], MenuList: [{
                type: Input
            }], Data: [{
                type: Input
            }], DialogClose: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90YWJsZS9zcmMvbGliL2NlbGxzLWNvbXBvbmVudC9tZW51L21lbnUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvbWVudS9tZW51LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFN0UsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7OztBQU9uRCxNQUFNLE9BQU8sYUFBYTtJQU14QixZQUFvQixNQUFpQixFQUFVLE1BQWM7UUFBekMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFGbkQsZ0JBQVcsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUc5RCxDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7SUFFTSxRQUFRLENBQUMsSUFBWTtRQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVNLFNBQVMsQ0FBQyxLQUFVO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNkLEtBQUssRUFDTCxFQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtRQUUzQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxXQUFXLENBQUMsR0FBVyxFQUFFLElBQVM7UUFDeEMsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQU0sRUFBRSxDQUFNLEVBQUUsRUFBRTtZQUNyRCxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsT0FBTyxPQUFPLENBQUMsS0FBSyxRQUFRLElBQUksT0FBTyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OzJHQTdCVSxhQUFhOytGQUFiLGFBQWEseUpDVjFCLHEyQkFxQkE7NEZEWGEsYUFBYTtrQkFMekIsU0FBUzsrQkFDRSxVQUFVO3FIQUtYLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDSSxXQUFXO3NCQUFwQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWVudUxpc3RJbnRlcmZhY2V9IGZyb20gXCIuLi8uLi9zZXR0aW5nL0NvbmZpZy5pbnRlcmZhY2VcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge01hdERpYWxvZ30gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2RpYWxvZ1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbWVudScsXG4gIHRlbXBsYXRlVXJsOiAnLi9tZW51LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWVudS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBNZW51TGlzdDogTWVudUxpc3RJbnRlcmZhY2VbXTtcbiAgQElucHV0KCkgRGF0YTogYW55O1xuICBAT3V0cHV0KCkgRGlhbG9nQ2xvc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2csIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgcHVibGljIGdvVG9MaW5rKHBhdGg6IHN0cmluZykge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmludGVycG9sYXRlKHBhdGgsIHRoaXMuRGF0YSldKTtcbiAgfVxuXG4gIHB1YmxpYyBvcGVuTW9kYWwobW9kYWw6IGFueSkge1xuICAgIHRoaXMuZGlhbG9nLm9wZW4oXG4gICAgICBtb2RhbCxcbiAgICAgIHtkYXRhOiB0aGlzLkRhdGF9KS5jbG9zZSgocmVzdWx0OiBhbnkpID0+IHtcblxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBpbnRlcnBvbGF0ZShzdHI6IHN0cmluZywgZGF0YTogYW55KSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC97eyhbXnt9XSopfX0vZywgKGE6IGFueSwgYjogYW55KSA9PiB7XG4gICAgICBjb25zdCByID0gZGF0YVtiXTtcbiAgICAgIHJldHVybiB0eXBlb2YgciA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHIgPT09ICdudW1iZXInID8gciA6IGE7XG4gICAgfSk7XG4gIH1cbn1cbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCJNZW51TGlzdFwiPlxuICA8ZGl2IG1hdC1idXR0b24gW21hdE1lbnVUcmlnZ2VyRm9yXT1cIm1lbnVcIiBbdGl0bGVdPVwidGl0bGVcIj5cbiAgICA8cG5nLWljb24gW3NyY109XCInL2Fzc2V0cy9ub3dib2FyZC1pY29uL21lbnVfa2ViYWIuc3ZnJ1wiPjwvcG5nLWljb24+XG4gIDwvZGl2PlxuICA8bWF0LW1lbnUgI21lbnU9XCJtYXRNZW51XCI+XG4gICAgPG5nLWNvbnRhaW5lciAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgTWVudUxpc3RcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpdGVtLlR5cGUgPT09ICdMaW5rJ1wiPlxuICAgICAgICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0gKGNsaWNrKT1cImdvVG9MaW5rKGl0ZW0uUm91dGUpXCI+XG4gICAgICAgICAgPHBuZy1pY29uIFtzcmNdPVwiaXRlbS5JY29uXCI+PC9wbmctaWNvbj5cbiAgICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cIml0ZW0uTGFiZWxcIj48L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbS5UeXBlID09PSAnTW9kYWwnXCI+XG4gICAgICAgIDxidXR0b24gbWF0LW1lbnUtaXRlbSAoY2xpY2spPVwib3Blbk1vZGFsKGl0ZW0uQ29tcG9uZW50TW9kYWwpXCI+XG4gICAgICAgICAgPHBuZy1pY29uIFtzcmNdPVwiaXRlbS5JY29uXCI+PC9wbmctaWNvbj5cbiAgICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cIml0ZW0uTGFiZWxcIj48L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvbWF0LW1lbnU+XG48L25nLWNvbnRhaW5lcj5cbiJdfQ==