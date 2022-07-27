import { Component, Input } from '@angular/core';
import { TableService } from "../../table.service";
import * as i0 from "@angular/core";
import * as i1 from "../../table.service";
import * as i2 from "@angular/material/tooltip";
export class GenderComponent {
    constructor(service) {
        this.service = service;
        this.css = {};
    }
    ngOnInit() {
        this.css.maxWidth = String((this.size || 40)) + 'px';
        this.css.maxHeight = String((this.size || 40)) + 'px';
        const params = this.service.settingConfig.gender; /*{
            "m": "/assets/icons/nowteam/salutations/man.png",
            "mme": "/assets/icons/nowteam/salutations/woman.png",
        }*/
        const clean = (this.type || "").toLocaleLowerCase().replace(/[^A-Z0-9]+/ig, "");
        if (params[clean]) {
            this.icon = params[clean];
        }
        else {
            this.css.maxWidth = String(((this.size || 40) - 10)) + 'px';
            this.css.maxHeight = String(((this.size || 40) - 10)) + 'px';
            this.icon = params.none; //"/assets/icons/status/HS.png";
        }
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
}
GenderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: GenderComponent, deps: [{ token: i1.TableService }], target: i0.ɵɵFactoryTarget.Component });
GenderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: GenderComponent, selector: "app-gender", inputs: { type: "type", size: "size" }, usesOnChanges: true, ngImport: i0, template: "<span [style]=\"css\" matTooltip=\"{{type}}\">\n    <img [src]=\"icon\" [style]=\"css\">\n</span>\n", styles: [""], directives: [{ type: i2.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: GenderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-gender', template: "<span [style]=\"css\" matTooltip=\"{{type}}\">\n    <img [src]=\"icon\" [style]=\"css\">\n</span>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1.TableService }]; }, propDecorators: { type: [{
                type: Input
            }], size: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RhYmxlL3NyYy9saWIvY2VsbHMtY29tcG9uZW50L2dlbmRlci9nZW5kZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvZ2VuZGVyL2dlbmRlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBbUMsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHFCQUFxQixDQUFDOzs7O0FBT2pELE1BQU0sT0FBTyxlQUFlO0lBTXhCLFlBQW9CLE9BQXNCO1FBQXRCLFlBQU8sR0FBUCxPQUFPLENBQWU7UUFGbkMsUUFBRyxHQUFRLEVBQUUsQ0FBQTtJQUdwQixDQUFDO0lBRUQsUUFBUTtRQUNKLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDckQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUN0RCxNQUFNLE1BQU0sR0FBUSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7O1dBR3BEO1FBRUgsTUFBTSxLQUFLLEdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4RixJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdCO2FBQU07WUFDSCxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDNUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQzdELElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLGdDQUFnQztTQUM1RDtJQUNMLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFFOUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQ25CLENBQUM7OzZHQTlCUSxlQUFlO2lHQUFmLGVBQWUsK0dDUjVCLHFHQUdBOzRGREthLGVBQWU7a0JBTDNCLFNBQVM7K0JBQ0ksWUFBWTttR0FLYixJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RhYmxlU2VydmljZX0gZnJvbSBcIi4uLy4uL3RhYmxlLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtZ2VuZGVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZ2VuZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9nZW5kZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHZW5kZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gICAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHNpemU6IG51bWJlcjtcbiAgICBwdWJsaWMgaWNvbjogc3RyaW5nO1xuICAgIHB1YmxpYyBjc3M6IGFueSA9IHt9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2UgOiBUYWJsZVNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jc3MubWF4V2lkdGggPSBTdHJpbmcoKHRoaXMuc2l6ZSB8fCA0MCkpICsgJ3B4JztcbiAgICAgICAgdGhpcy5jc3MubWF4SGVpZ2h0ID0gU3RyaW5nKCh0aGlzLnNpemUgfHwgNDApKSArICdweCc7XG4gICAgICAgIGNvbnN0IHBhcmFtczogYW55ID0gdGhpcy5zZXJ2aWNlLnNldHRpbmdDb25maWcuZ2VuZGVyOyAvKntcbiAgICAgICAgICAgIFwibVwiOiBcIi9hc3NldHMvaWNvbnMvbm93dGVhbS9zYWx1dGF0aW9ucy9tYW4ucG5nXCIsXG4gICAgICAgICAgICBcIm1tZVwiOiBcIi9hc3NldHMvaWNvbnMvbm93dGVhbS9zYWx1dGF0aW9ucy93b21hbi5wbmdcIixcbiAgICAgICAgfSovXG5cbiAgICAgICAgY29uc3QgY2xlYW46IHN0cmluZyA9ICh0aGlzLnR5cGUgfHwgXCJcIikudG9Mb2NhbGVMb3dlckNhc2UoKS5yZXBsYWNlKC9bXkEtWjAtOV0rL2lnLCBcIlwiKTtcbiAgICAgICAgaWYgKHBhcmFtc1tjbGVhbl0pIHtcbiAgICAgICAgICAgIHRoaXMuaWNvbiA9IHBhcmFtc1tjbGVhbl07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNzcy5tYXhXaWR0aCA9IFN0cmluZygoKHRoaXMuc2l6ZSB8fCA0MCkgLSAxMCkpICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMuY3NzLm1heEhlaWdodCA9IFN0cmluZygoKHRoaXMuc2l6ZSB8fCA0MCkgLSAxMCkpICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMuaWNvbiA9IHBhcmFtcy5ub25lOyAvL1wiL2Fzc2V0cy9pY29ucy9zdGF0dXMvSFMucG5nXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cbiAgICAgICAgdGhpcy5uZ09uSW5pdCgpXG4gICAgfVxuXG59XG4iLCI8c3BhbiBbc3R5bGVdPVwiY3NzXCIgbWF0VG9vbHRpcD1cInt7dHlwZX19XCI+XG4gICAgPGltZyBbc3JjXT1cImljb25cIiBbc3R5bGVdPVwiY3NzXCI+XG48L3NwYW4+XG4iXX0=