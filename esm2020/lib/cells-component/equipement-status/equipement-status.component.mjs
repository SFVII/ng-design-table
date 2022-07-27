import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { TableService } from "../../table.service";
import * as i0 from "@angular/core";
import * as i1 from "../../table.service";
import * as i2 from "@angular/material/tooltip";
export class EquipementStatusComponent {
    // private params: any = {};
    constructor(changeDetectorRefs, service) {
        this.changeDetectorRefs = changeDetectorRefs;
        this.service = service;
        this.css = {};
        this.css.maxWidth = String((this.size || 22)) + 'px';
        this.css.maxHeight = String((this.size || 22)) + 'px';
        //this.params = this.service.settingConfig.equipmentStatus;
    }
    ngOnInit() {
        this.css.maxWidth = String((this.size || 22)) + 'px';
        this.css.maxHeight = String((this.size || 22)) + 'px';
        const params = this.service.settingConfig.equipmentStatus; /*{
          "actif": "/assets/icons/status/actif.png",
          "oui": "/assets/icons/status/actif.png",
          "hs": "/assets/icons/status/HS.png",
          "inactif": "/assets/icons/status/inactif.png",
          "non": "/assets/icons/status/inactif.png",
          "spare": "/assets/icons/status/spare.png",
        }*/
        const clean = (this.type || "").toLocaleLowerCase().replace(/[^A-Z0-9]+/ig, "");
        if (params[clean]) {
            this.icon = params[clean];
        }
        else {
            this.icon = params['default'];
        }
        this.changeDetectorRefs.detectChanges();
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
}
EquipementStatusComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: EquipementStatusComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.TableService }], target: i0.ɵɵFactoryTarget.Component });
EquipementStatusComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: EquipementStatusComponent, selector: "app-equipement-status", inputs: { type: "type", size: "size" }, usesOnChanges: true, ngImport: i0, template: "<span [style]=\"css\" matTooltip=\"{{type}}\">\n    <img [src]=\"icon\" [style]=\"css\" class=\"equipement-status\">\n</span>", styles: [""], directives: [{ type: i2.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: EquipementStatusComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-equipement-status', template: "<span [style]=\"css\" matTooltip=\"{{type}}\">\n    <img [src]=\"icon\" [style]=\"css\" class=\"equipement-status\">\n</span>", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.TableService }]; }, propDecorators: { type: [{
                type: Input
            }], size: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1aXBlbWVudC1zdGF0dXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvZXF1aXBlbWVudC1zdGF0dXMvZXF1aXBlbWVudC1zdGF0dXMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvZXF1aXBlbWVudC1zdGF0dXMvZXF1aXBlbWVudC1zdGF0dXMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBQ3BHLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQzs7OztBQU9qRCxNQUFNLE9BQU8seUJBQXlCO0lBTXBDLDRCQUE0QjtJQUU1QixZQUFvQixrQkFBcUMsRUFBVSxPQUFxQjtRQUFwRSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBYztRQUpqRixRQUFHLEdBQVEsRUFBRSxDQUFBO1FBS2xCLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDckQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUN0RCwyREFBMkQ7SUFDN0QsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3JELElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFFdEQsTUFBTSxNQUFNLEdBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7Ozs7Ozs7V0FPN0Q7UUFDSCxNQUFNLEtBQUssR0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hGLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzNCO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMvQjtRQUNELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDOzt1SEFyQ1UseUJBQXlCOzJHQUF6Qix5QkFBeUIsMEhDUnRDLCtIQUVPOzRGRE1NLHlCQUF5QjtrQkFMckMsU0FBUzsrQkFDRSx1QkFBdUI7bUlBS3hCLElBQUk7c0JBQVosS0FBSztnQkFFRyxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RhYmxlU2VydmljZX0gZnJvbSBcIi4uLy4uL3RhYmxlLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWVxdWlwZW1lbnQtc3RhdHVzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2VxdWlwZW1lbnQtc3RhdHVzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZXF1aXBlbWVudC1zdGF0dXMuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBFcXVpcGVtZW50U3RhdHVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XG4gIHB1YmxpYyBpY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNpemU6IG51bWJlciB8IHN0cmluZztcbiAgcHVibGljIGNzczogYW55ID0ge31cblxuICAvLyBwcml2YXRlIHBhcmFtczogYW55ID0ge307XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZnM6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIHNlcnZpY2U6IFRhYmxlU2VydmljZSkge1xuICAgIHRoaXMuY3NzLm1heFdpZHRoID0gU3RyaW5nKCh0aGlzLnNpemUgfHwgMjIpKSArICdweCc7XG4gICAgdGhpcy5jc3MubWF4SGVpZ2h0ID0gU3RyaW5nKCh0aGlzLnNpemUgfHwgMjIpKSArICdweCc7XG4gICAgLy90aGlzLnBhcmFtcyA9IHRoaXMuc2VydmljZS5zZXR0aW5nQ29uZmlnLmVxdWlwbWVudFN0YXR1cztcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY3NzLm1heFdpZHRoID0gU3RyaW5nKCh0aGlzLnNpemUgfHwgMjIpKSArICdweCc7XG4gICAgdGhpcy5jc3MubWF4SGVpZ2h0ID0gU3RyaW5nKCh0aGlzLnNpemUgfHwgMjIpKSArICdweCc7XG5cbiAgICBjb25zdCBwYXJhbXM6IGFueSA9IHRoaXMuc2VydmljZS5zZXR0aW5nQ29uZmlnLmVxdWlwbWVudFN0YXR1czsgLyp7XG4gICAgICBcImFjdGlmXCI6IFwiL2Fzc2V0cy9pY29ucy9zdGF0dXMvYWN0aWYucG5nXCIsXG4gICAgICBcIm91aVwiOiBcIi9hc3NldHMvaWNvbnMvc3RhdHVzL2FjdGlmLnBuZ1wiLFxuICAgICAgXCJoc1wiOiBcIi9hc3NldHMvaWNvbnMvc3RhdHVzL0hTLnBuZ1wiLFxuICAgICAgXCJpbmFjdGlmXCI6IFwiL2Fzc2V0cy9pY29ucy9zdGF0dXMvaW5hY3RpZi5wbmdcIixcbiAgICAgIFwibm9uXCI6IFwiL2Fzc2V0cy9pY29ucy9zdGF0dXMvaW5hY3RpZi5wbmdcIixcbiAgICAgIFwic3BhcmVcIjogXCIvYXNzZXRzL2ljb25zL3N0YXR1cy9zcGFyZS5wbmdcIixcbiAgICB9Ki9cbiAgICBjb25zdCBjbGVhbjogc3RyaW5nID0gKHRoaXMudHlwZSB8fCBcIlwiKS50b0xvY2FsZUxvd2VyQ2FzZSgpLnJlcGxhY2UoL1teQS1aMC05XSsvaWcsIFwiXCIpO1xuICAgIGlmIChwYXJhbXNbY2xlYW5dKSB7XG4gICAgICB0aGlzLmljb24gPSBwYXJhbXNbY2xlYW5dO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmljb24gPSBwYXJhbXNbJ2RlZmF1bHQnXTtcbiAgICB9XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZnMuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIHRoaXMubmdPbkluaXQoKTtcbiAgfVxuXG59XG4iLCI8c3BhbiBbc3R5bGVdPVwiY3NzXCIgbWF0VG9vbHRpcD1cInt7dHlwZX19XCI+XG4gICAgPGltZyBbc3JjXT1cImljb25cIiBbc3R5bGVdPVwiY3NzXCIgY2xhc3M9XCJlcXVpcGVtZW50LXN0YXR1c1wiPlxuPC9zcGFuPiJdfQ==