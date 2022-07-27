import { Component, Input } from '@angular/core';
import { TableService } from "../../table.service";
import * as i0 from "@angular/core";
import * as i1 from "../../table.service";
export class YesNoComponent {
    constructor(service) {
        this.service = service;
        this.displayNo = false;
        this.displayYes = true;
        this.css = {};
    }
    ngOnInit() {
        this.css.maxWidth = String((this.size || 40)) + 'px';
        this.css.maxHeight = String((this.size || 40)) + 'px';
        const params = this.service.settingConfig.yesNo; /*{
                "true": "/assets/icons/status/actif.png",
                "false": "/assets/icons/status/incatif.png"
            }*/
        if (this.valid && this.displayYes) {
            this.icon = params["true"];
        }
        else if (this.displayNo) {
            this.icon = params["false"];
        }
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
}
YesNoComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: YesNoComponent, deps: [{ token: i1.TableService }], target: i0.ɵɵFactoryTarget.Component });
YesNoComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: YesNoComponent, selector: "app-yes-nox", inputs: { valid: "valid", displayNo: "displayNo", displayYes: "displayYes", size: "size" }, usesOnChanges: true, ngImport: i0, template: "<span [style]=\"css\" >\n    <img [src]=\"icon\" [style]=\"css\">\n</span>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: YesNoComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-yes-nox', template: "<span [style]=\"css\" >\n    <img [src]=\"icon\" [style]=\"css\">\n</span>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1.TableService }]; }, propDecorators: { valid: [{
                type: Input
            }], displayNo: [{
                type: Input
            }], displayYes: [{
                type: Input
            }], size: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVzLW5vLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RhYmxlL3NyYy9saWIvY2VsbHMtY29tcG9uZW50L3llcy1uby95ZXMtbm8uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQveWVzLW5vL3llcy1uby5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBbUMsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHFCQUFxQixDQUFDOzs7QUFPakQsTUFBTSxPQUFPLGNBQWM7SUFRekIsWUFBb0IsT0FBcUI7UUFBckIsWUFBTyxHQUFQLE9BQU8sQ0FBYztRQU5oQyxjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFHN0IsUUFBRyxHQUFRLEVBQUUsQ0FBQztJQUdyQixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDckQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUN0RCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7O2VBRzFDO1FBRVAsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDakMsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUE7U0FDM0I7YUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUE7U0FDNUI7SUFDSCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDOzs0R0E1QlUsY0FBYztnR0FBZCxjQUFjLG9LQ1IzQiw4RUFHQTs0RkRLYSxjQUFjO2tCQUwxQixTQUFTOytCQUNFLGFBQWE7bUdBS2QsS0FBSztzQkFBYixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VGFibGVTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vdGFibGUuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAteWVzLW5veCcsXG4gIHRlbXBsYXRlVXJsOiAnLi95ZXMtbm8uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi95ZXMtbm8uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBZZXNOb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgdmFsaWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGRpc3BsYXlObzogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBkaXNwbGF5WWVzOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgc2l6ZTtcbiAgcHVibGljIGljb246IHN0cmluZztcbiAgcHVibGljIGNzczogYW55ID0ge307XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBUYWJsZVNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY3NzLm1heFdpZHRoID0gU3RyaW5nKCh0aGlzLnNpemUgfHwgNDApKSArICdweCc7XG4gICAgdGhpcy5jc3MubWF4SGVpZ2h0ID0gU3RyaW5nKCh0aGlzLnNpemUgfHwgNDApKSArICdweCc7XG4gICAgY29uc3QgcGFyYW1zID0gdGhpcy5zZXJ2aWNlLnNldHRpbmdDb25maWcueWVzTm87IC8qe1xuICAgICAgICAgICAgXCJ0cnVlXCI6IFwiL2Fzc2V0cy9pY29ucy9zdGF0dXMvYWN0aWYucG5nXCIsXG4gICAgICAgICAgICBcImZhbHNlXCI6IFwiL2Fzc2V0cy9pY29ucy9zdGF0dXMvaW5jYXRpZi5wbmdcIlxuICAgICAgICB9Ki9cblxuICAgIGlmICh0aGlzLnZhbGlkICYmIHRoaXMuZGlzcGxheVllcykge1xuICAgICAgdGhpcy5pY29uID0gcGFyYW1zW1widHJ1ZVwiXVxuICAgIH0gZWxzZSBpZiAodGhpcy5kaXNwbGF5Tm8pIHtcbiAgICAgIHRoaXMuaWNvbiA9IHBhcmFtc1tcImZhbHNlXCJdXG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIHRoaXMubmdPbkluaXQoKTtcbiAgfVxuXG59XG4iLCI8c3BhbiBbc3R5bGVdPVwiY3NzXCIgPlxuICAgIDxpbWcgW3NyY109XCJpY29uXCIgW3N0eWxlXT1cImNzc1wiPlxuPC9zcGFuPlxuIl19