import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var IsMatIconComponent = /** @class */ (function () {
    function IsMatIconComponent() {
        this.isIcon = false;
    }
    IsMatIconComponent.prototype.ngOnChanges = function (changes) {
        this.ngOnInit();
    };
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
    return IsMatIconComponent;
}());
export { IsMatIconComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtbWF0LWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvY2VsbHMtY29tcG9uZW50L2lzLW1hdC1pY29uL2lzLW1hdC1pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBT2pGO0lBS0k7UUFGTyxXQUFNLEdBQWEsS0FBSyxDQUFDO0lBR2hDLENBQUM7SUFFRCx3Q0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDOUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFSCxxQ0FBUSxHQUFSO1FBQ0ksSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQztZQUNqRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzNDO2FBQU07WUFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDN0I7SUFDTCxDQUFDO0lBbkJRO1FBQVIsS0FBSyxFQUFFOztxREFBZTtJQURkLGtCQUFrQjtRQUw5QixTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLHFMQUEyQzs7U0FFOUMsQ0FBQzs7T0FDVyxrQkFBa0IsQ0FzQjlCO0lBQUQseUJBQUM7Q0FBQSxBQXRCRCxJQXNCQztTQXRCWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtaXMtbWF0LWljb24nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9pcy1tYXQtaWNvbi5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vaXMtbWF0LWljb24uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJc01hdEljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gICAgQElucHV0KCkgaW5wdXQ6IHN0cmluZztcbiAgICBwdWJsaWMgZGlzcGxheTogc3RyaW5nO1xuICAgIHB1YmxpYyBpc0ljb24gOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMubmdPbkluaXQoKTtcbiAgICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5pbnB1dCAmJiB0aGlzLmlucHV0LmluZGV4T2YoKCdpY29uLicpKSA+IC0xKXtcbiAgICAgICAgICAgIHRoaXMuaXNJY29uID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheSA9IHRoaXMuaW5wdXQuc3BsaXQoJy4nKVsxXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNJY29uID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXkgPSB0aGlzLmlucHV0O1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iXX0=