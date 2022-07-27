import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { TableService } from "../../table.service";
import * as i0 from "@angular/core";
import * as i1 from "../../table.service";
import * as i2 from "@angular/material/icon";
import * as i3 from "@angular/material/tooltip";
import * as i4 from "@angular/common";
export class CustomerRankComponent {
    constructor(changeDetectorRefs, service) {
        this.changeDetectorRefs = changeDetectorRefs;
        this.service = service;
    }
    ngOnInit() {
        const config = this.service.settingConfig.customerRank || ['gold', 'silver', 'bronze', 'default'];
        if (this.type) {
            this._type = (this.type || '').replace(/[^A-Z0-9]+/ig, "");
            for (let c of config) {
                if (this._type.toLocaleLowerCase() === 'default') {
                    this.type = 'Classic'.toUpperCase();
                    this.typeClass = c.toLocaleLowerCase();
                }
                else if (this._type.toLocaleLowerCase() === c.toLocaleLowerCase()) {
                    this.typeClass = c.toLocaleLowerCase();
                    this.type = this.type.toUpperCase();
                }
            }
        }
        else {
            this.type = 'Classic'.toUpperCase();
            this.typeClass = 'default';
        }
        /*  if (this._type.toLocaleLowerCase() === 'gold') {
            this.typeClass = 'gold'
            this.type = this.type.toUpperCase()
          } else if (this._type.toLocaleLowerCase() === 'silver') {
            this.typeClass = 'silver'
            this.type = this.type.toUpperCase()
          } else if (this._type.toLocaleLowerCase() === 'bronze') {
            this.typeClass = 'bronze'
            this.type = this.type.toUpperCase()
          } else {
            this.type = 'Classic'.toUpperCase();
            this.typeClass = 'default'
          }
          this.changeDetectorRefs.detectChanges();*/
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
}
CustomerRankComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: CustomerRankComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.TableService }], target: i0.ɵɵFactoryTarget.Component });
CustomerRankComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: CustomerRankComponent, selector: "app-customer-rank", inputs: { type: "type" }, usesOnChanges: true, ngImport: i0, template: "<span [class]=\"typeClass\" matTooltip=\"Contrat de type : {{type}}\">\n  <span style=\"color:black\">{{type}}</span><mat-icon *ngIf=\"type !== 'CLASSIC'\">star_rate</mat-icon>\n</span>\n", styles: [".gold{font-size:12px;font-weight:700;color:gold!important}.silver{font-size:12px;font-weight:700;color:silver!important}.bronze{font-weight:700;font-size:12px;color:#cd7f32!important}.default{font-weight:700;font-size:12px;color:#000!important}\n"], components: [{ type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], directives: [{ type: i3.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: CustomerRankComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-customer-rank', template: "<span [class]=\"typeClass\" matTooltip=\"Contrat de type : {{type}}\">\n  <span style=\"color:black\">{{type}}</span><mat-icon *ngIf=\"type !== 'CLASSIC'\">star_rate</mat-icon>\n</span>\n", styles: [".gold{font-size:12px;font-weight:700;color:gold!important}.silver{font-size:12px;font-weight:700;color:silver!important}.bronze{font-weight:700;font-size:12px;color:#cd7f32!important}.default{font-weight:700;font-size:12px;color:#000!important}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.TableService }]; }, propDecorators: { type: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItcmFuay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90YWJsZS9zcmMvbGliL2NlbGxzLWNvbXBvbmVudC9jdXN0b21lci1yYW5rL2N1c3RvbWVyLXJhbmsuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvY3VzdG9tZXItcmFuay9jdXN0b21lci1yYW5rLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFtQyxNQUFNLGVBQWUsQ0FBQztBQUNwRyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0scUJBQXFCLENBQUM7Ozs7OztBQU9qRCxNQUFNLE9BQU8scUJBQXFCO0lBS2hDLFlBQW9CLGtCQUFxQyxFQUFVLE9BQXFCO1FBQXBFLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFjO0lBQ3hGLENBQUM7SUFFRCxRQUFRO1FBQ04sTUFBTSxNQUFNLEdBQWEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsWUFBWSxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDNUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMzRCxLQUFLLElBQUksQ0FBQyxJQUFJLE1BQU0sRUFBRTtnQkFDcEIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLEtBQUssU0FBUyxFQUFFO29CQUNoRCxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztpQkFDeEM7cUJBQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixFQUFFLEVBQUU7b0JBQ25FLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUM7b0JBQ3ZDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztpQkFDckM7YUFDRjtTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztTQUM1QjtRQUdEOzs7Ozs7Ozs7Ozs7O29EQWE0QztJQUM5QyxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDOzttSEE3Q1UscUJBQXFCO3VHQUFyQixxQkFBcUIsd0dDUmxDLDZMQUdBOzRGREthLHFCQUFxQjtrQkFMakMsU0FBUzsrQkFDRSxtQkFBbUI7bUlBS3BCLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VGFibGVTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vdGFibGUuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtY3VzdG9tZXItcmFuaycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jdXN0b21lci1yYW5rLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY3VzdG9tZXItcmFuay5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyUmFua0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xuICBwdWJsaWMgdHlwZUNsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX3R5cGU6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmczogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgc2VydmljZTogVGFibGVTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBjb25maWc6IHN0cmluZ1tdID0gdGhpcy5zZXJ2aWNlLnNldHRpbmdDb25maWcuY3VzdG9tZXJSYW5rIHx8IFsnZ29sZCcsICdzaWx2ZXInLCAnYnJvbnplJywgJ2RlZmF1bHQnXTtcbiAgICBpZiAodGhpcy50eXBlKSB7XG4gICAgICB0aGlzLl90eXBlID0gKHRoaXMudHlwZSB8fCAnJykucmVwbGFjZSgvW15BLVowLTldKy9pZywgXCJcIik7XG4gICAgICBmb3IgKGxldCBjIG9mIGNvbmZpZykge1xuICAgICAgICBpZiAodGhpcy5fdHlwZS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICB0aGlzLnR5cGUgPSAnQ2xhc3NpYycudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICB0aGlzLnR5cGVDbGFzcyA9IGMudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl90eXBlLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09IGMudG9Mb2NhbGVMb3dlckNhc2UoKSkge1xuICAgICAgICAgIHRoaXMudHlwZUNsYXNzID0gYy50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgICAgIHRoaXMudHlwZSA9IHRoaXMudHlwZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudHlwZSA9ICdDbGFzc2ljJy50b1VwcGVyQ2FzZSgpO1xuICAgICAgdGhpcy50eXBlQ2xhc3MgPSAnZGVmYXVsdCc7XG4gICAgfVxuXG5cbiAgICAvKiAgaWYgKHRoaXMuX3R5cGUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gJ2dvbGQnKSB7XG4gICAgICAgIHRoaXMudHlwZUNsYXNzID0gJ2dvbGQnXG4gICAgICAgIHRoaXMudHlwZSA9IHRoaXMudHlwZS50b1VwcGVyQ2FzZSgpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3R5cGUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gJ3NpbHZlcicpIHtcbiAgICAgICAgdGhpcy50eXBlQ2xhc3MgPSAnc2lsdmVyJ1xuICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLnR5cGUudG9VcHBlckNhc2UoKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl90eXBlLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09ICdicm9uemUnKSB7XG4gICAgICAgIHRoaXMudHlwZUNsYXNzID0gJ2Jyb256ZSdcbiAgICAgICAgdGhpcy50eXBlID0gdGhpcy50eXBlLnRvVXBwZXJDYXNlKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudHlwZSA9ICdDbGFzc2ljJy50b1VwcGVyQ2FzZSgpO1xuICAgICAgICB0aGlzLnR5cGVDbGFzcyA9ICdkZWZhdWx0J1xuICAgICAgfVxuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZnMuZGV0ZWN0Q2hhbmdlcygpOyovXG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgdGhpcy5uZ09uSW5pdCgpO1xuICB9XG59XG4iLCI8c3BhbiBbY2xhc3NdPVwidHlwZUNsYXNzXCIgbWF0VG9vbHRpcD1cIkNvbnRyYXQgZGUgdHlwZSA6IHt7dHlwZX19XCI+XG4gIDxzcGFuIHN0eWxlPVwiY29sb3I6YmxhY2tcIj57e3R5cGV9fTwvc3Bhbj48bWF0LWljb24gKm5nSWY9XCJ0eXBlICE9PSAnQ0xBU1NJQydcIj5zdGFyX3JhdGU8L21hdC1pY29uPlxuPC9zcGFuPlxuIl19