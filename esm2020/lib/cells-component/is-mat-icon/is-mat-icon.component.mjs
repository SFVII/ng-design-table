import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/icon";
import * as i2 from "@angular/common";
export class IsMatIconComponent {
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
IsMatIconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: IsMatIconComponent, selector: "app-is-mat-icon", inputs: { input: "input" }, usesOnChanges: true, ngImport: i0, template: "<ng-container *ngIf=\"!isIcon\">\n    <span >{{display}}</span>\n</ng-container>\n<ng-container  *ngIf=\"isIcon\">\n    <mat-icon>{{display}}</mat-icon>\n</ng-container>", styles: [":host{height:34px;display:flex;padding:auto}:host .mat-icon{display:block;fill:currentColor;text-align:center;width:24px;margin:auto;vertical-align:middle;background:no-repeat}:host i,:host mat-icon{font-size:24px;height:24px}\n"], components: [{ type: i1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: IsMatIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-is-mat-icon', template: "<ng-container *ngIf=\"!isIcon\">\n    <span >{{display}}</span>\n</ng-container>\n<ng-container  *ngIf=\"isIcon\">\n    <mat-icon>{{display}}</mat-icon>\n</ng-container>", styles: [":host{height:34px;display:flex;padding:auto}:host .mat-icon{display:block;fill:currentColor;text-align:center;width:24px;margin:auto;vertical-align:middle;background:no-repeat}:host i,:host mat-icon{font-size:24px;height:24px}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { input: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtbWF0LWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvaXMtbWF0LWljb24vaXMtbWF0LWljb24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvaXMtbWF0LWljb24vaXMtbWF0LWljb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDOzs7O0FBT2pGLE1BQU0sT0FBTyxrQkFBa0I7SUFLM0I7UUFGTyxXQUFNLEdBQWEsS0FBSyxDQUFDO0lBR2hDLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDOUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFSCxRQUFRO1FBQ0osSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQztZQUNqRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzNDO2FBQU07WUFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDN0I7SUFDTCxDQUFDOztnSEFwQlEsa0JBQWtCO29HQUFsQixrQkFBa0Isd0dDUC9CLDJLQUtlOzRGREVGLGtCQUFrQjtrQkFMOUIsU0FBUzsrQkFDSSxpQkFBaUI7MEVBS2xCLEtBQUs7c0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1pcy1tYXQtaWNvbicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2lzLW1hdC1pY29uLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9pcy1tYXQtaWNvbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIElzTWF0SWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgICBASW5wdXQoKSBpbnB1dDogc3RyaW5nO1xuICAgIHB1YmxpYyBkaXNwbGF5OiBzdHJpbmc7XG4gICAgcHVibGljIGlzSWNvbiA6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5uZ09uSW5pdCgpO1xuICAgICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmlucHV0ICYmIHRoaXMuaW5wdXQuaW5kZXhPZigoJ2ljb24uJykpID4gLTEpe1xuICAgICAgICAgICAgdGhpcy5pc0ljb24gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5ID0gdGhpcy5pbnB1dC5zcGxpdCgnLicpWzFdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pc0ljb24gPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheSA9IHRoaXMuaW5wdXQ7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCIhaXNJY29uXCI+XG4gICAgPHNwYW4gPnt7ZGlzcGxheX19PC9zcGFuPlxuPC9uZy1jb250YWluZXI+XG48bmctY29udGFpbmVyICAqbmdJZj1cImlzSWNvblwiPlxuICAgIDxtYXQtaWNvbj57e2Rpc3BsYXl9fTwvbWF0LWljb24+XG48L25nLWNvbnRhaW5lcj4iXX0=