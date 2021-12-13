import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let IsMatIconComponent = class IsMatIconComponent {
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
};
__decorate([
    Input(),
    __metadata("design:type", String)
], IsMatIconComponent.prototype, "input", void 0);
IsMatIconComponent = __decorate([
    Component({
        selector: 'app-is-mat-icon',
        template: "<ng-container *ngIf=\"!isIcon\">\n    <span >{{display}}</span>\n</ng-container>\n<ng-container  *ngIf=\"isIcon\">\n    <mat-icon>{{display}}</mat-icon>\n</ng-container>",
        styles: [":host{height:34px;display:flex;padding:auto}:host .mat-icon{display:block;fill:currentColor;text-align:center;width:24px;margin:auto;vertical-align:middle;background:no-repeat}:host i,:host mat-icon{font-size:24px;height:24px}"]
    }),
    __metadata("design:paramtypes", [])
], IsMatIconComponent);
export { IsMatIconComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtbWF0LWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvY2VsbHMtY29tcG9uZW50L2lzLW1hdC1pY29uL2lzLW1hdC1pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBT2pGLElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0lBSzNCO1FBRk8sV0FBTSxHQUFhLEtBQUssQ0FBQztJQUdoQyxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQzlCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUgsUUFBUTtRQUNKLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUM7WUFDakQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMzQzthQUFNO1lBQ0gsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQzdCO0lBQ0wsQ0FBQztDQUVKLENBQUE7QUFyQlk7SUFBUixLQUFLLEVBQUU7O2lEQUFlO0FBRGQsa0JBQWtCO0lBTDlCLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxpQkFBaUI7UUFDM0IscUxBQTJDOztLQUU5QyxDQUFDOztHQUNXLGtCQUFrQixDQXNCOUI7U0F0Qlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLWlzLW1hdC1pY29uJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vaXMtbWF0LWljb24uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2lzLW1hdC1pY29uLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSXNNYXRJY29uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICAgIEBJbnB1dCgpIGlucHV0OiBzdHJpbmc7XG4gICAgcHVibGljIGRpc3BsYXk6IHN0cmluZztcbiAgICBwdWJsaWMgaXNJY29uIDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICB0aGlzLm5nT25Jbml0KCk7XG4gICAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaW5wdXQgJiYgdGhpcy5pbnB1dC5pbmRleE9mKCgnaWNvbi4nKSkgPiAtMSl7XG4gICAgICAgICAgICB0aGlzLmlzSWNvbiA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXkgPSB0aGlzLmlucHV0LnNwbGl0KCcuJylbMV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzSWNvbiA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5ID0gdGhpcy5pbnB1dDtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIl19