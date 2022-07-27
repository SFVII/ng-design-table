import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { TableService } from "../../table.service";
import * as i0 from "@angular/core";
import * as i1 from "../../table.service";
import * as i2 from "@angular/material/tooltip";
export class EquipementTypeComponent {
    constructor(changeDetectorRefs, service) {
        this.changeDetectorRefs = changeDetectorRefs;
        this.service = service;
        this.css = {};
        this.css.maxWidth = String((this.size || 40)) + 'px';
        this.css.maxHeight = String((this.size || 40)) + 'px';
    }
    ngOnInit() {
        this.css.maxWidth = String((this.size || 40)) + 'px';
        this.css.maxHeight = String((this.size || 40)) + 'px';
        const params = this.service.settingConfig.equipmentType; /*{
                "firewall": "/assets/icons/equipment/firewallnwt.png",
                "nas": "/assets/icons/equipment/nasnwt.png",
                "pcfixe": "/assets/icons/equipment/pcfixe_1.png",
                "pcportable": "/assets/icons/equipment/pcportable_1.png",
                "portable": "/assets/icons/equipment/pcportable_1.png",
                "clientleger": "/assets/icons/equipment/pcportable_1.png",
                "clientléger": "/assets/icons/equipment/pcportable_1.png",
                "onduleur": "/assets/icons/equipment/ondulateur.png",
                "serveur": "/assets/icons/equipment/serveur.png",
                "server": "/assets/icons/equipment/serveur.png",
                "servervirtuel": "/assets/icons/equipment/vps.png",
                "serveurvirtuel": "/assets/icons/equipment/vps.png",
                "vm": "/assets/icons/equipment/vps.png",
                "wifi": "/assets/icons/equipment/wifi.png",
                "workstationfixe": "/assets/icons/equipment/pcfixe_1.png",
                "workstationportable": "/assets/icons/equipment/pcportable_1.png",
                "imprimante": "/assets/icons/equipment/printer.png",
            }*/
        const clean = (this.type || "").toLocaleLowerCase().replace(/[^A-Z0-9]+/ig, "");
        const server = this.name.toLocaleLowerCase().includes('srv');
        if (params[clean]) {
            this.icon = params[clean];
        }
        else {
            this.icon = params['default'];
        }
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
}
EquipementTypeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: EquipementTypeComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.TableService }], target: i0.ɵɵFactoryTarget.Component });
EquipementTypeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: EquipementTypeComponent, selector: "app-equipement-type", inputs: { name: "name", type: "type", size: "size" }, usesOnChanges: true, ngImport: i0, template: "<span [style]=\"css\" matTooltip=\"{{type}}\">\n    <img [src]=\"icon\" [style]=\"css\">\n</span>\n", styles: [""], directives: [{ type: i2.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: EquipementTypeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-equipement-type', template: "<span [style]=\"css\" matTooltip=\"{{type}}\">\n    <img [src]=\"icon\" [style]=\"css\">\n</span>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.TableService }]; }, propDecorators: { name: [{
                type: Input
            }], type: [{
                type: Input
            }], size: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1aXBlbWVudC10eXBlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RhYmxlL3NyYy9saWIvY2VsbHMtY29tcG9uZW50L2VxdWlwZW1lbnQtdHlwZS9lcXVpcGVtZW50LXR5cGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvZXF1aXBlbWVudC10eXBlL2VxdWlwZW1lbnQtdHlwZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBbUMsTUFBTSxlQUFlLENBQUM7QUFDcEcsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHFCQUFxQixDQUFDOzs7O0FBT2pELE1BQU0sT0FBTyx1QkFBdUI7SUFPbEMsWUFBb0Isa0JBQXFDLEVBQVUsT0FBcUI7UUFBcEUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWM7UUFGakYsUUFBRyxHQUFRLEVBQUUsQ0FBQTtRQUdsQixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3JELElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDeEQsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3JELElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDdEQsTUFBTSxNQUFNLEdBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQWtCdkQ7UUFFUCxNQUFNLEtBQUssR0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hGLE1BQU0sTUFBTSxHQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEUsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0I7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQy9CO0lBRUgsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7cUhBL0NVLHVCQUF1Qjt5R0FBdkIsdUJBQXVCLHNJQ1JwQyxxR0FHQTs0RkRLYSx1QkFBdUI7a0JBTG5DLFNBQVM7K0JBQ0UscUJBQXFCO21JQUt0QixJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VGFibGVTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vdGFibGUuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZXF1aXBlbWVudC10eXBlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2VxdWlwZW1lbnQtdHlwZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2VxdWlwZW1lbnQtdHlwZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEVxdWlwZW1lbnRUeXBlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcbiAgQElucHV0KCkgc2l6ZTogbnVtYmVyIHwgc3RyaW5nO1xuICBwdWJsaWMgaWNvbjogc3RyaW5nO1xuICBwdWJsaWMgY3NzOiBhbnkgPSB7fVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWZzOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBzZXJ2aWNlOiBUYWJsZVNlcnZpY2UpIHtcbiAgICB0aGlzLmNzcy5tYXhXaWR0aCA9IFN0cmluZygodGhpcy5zaXplIHx8IDQwKSkgKyAncHgnO1xuICAgIHRoaXMuY3NzLm1heEhlaWdodCA9IFN0cmluZygodGhpcy5zaXplIHx8IDQwKSkgKyAncHgnO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jc3MubWF4V2lkdGggPSBTdHJpbmcoKHRoaXMuc2l6ZSB8fCA0MCkpICsgJ3B4JztcbiAgICB0aGlzLmNzcy5tYXhIZWlnaHQgPSBTdHJpbmcoKHRoaXMuc2l6ZSB8fCA0MCkpICsgJ3B4JztcbiAgICBjb25zdCBwYXJhbXM6IGFueSA9IHRoaXMuc2VydmljZS5zZXR0aW5nQ29uZmlnLmVxdWlwbWVudFR5cGU7IC8qe1xuICAgICAgICAgICAgXCJmaXJld2FsbFwiOiBcIi9hc3NldHMvaWNvbnMvZXF1aXBtZW50L2ZpcmV3YWxsbnd0LnBuZ1wiLFxuICAgICAgICAgICAgXCJuYXNcIjogXCIvYXNzZXRzL2ljb25zL2VxdWlwbWVudC9uYXNud3QucG5nXCIsXG4gICAgICAgICAgICBcInBjZml4ZVwiOiBcIi9hc3NldHMvaWNvbnMvZXF1aXBtZW50L3BjZml4ZV8xLnBuZ1wiLFxuICAgICAgICAgICAgXCJwY3BvcnRhYmxlXCI6IFwiL2Fzc2V0cy9pY29ucy9lcXVpcG1lbnQvcGNwb3J0YWJsZV8xLnBuZ1wiLFxuICAgICAgICAgICAgXCJwb3J0YWJsZVwiOiBcIi9hc3NldHMvaWNvbnMvZXF1aXBtZW50L3BjcG9ydGFibGVfMS5wbmdcIixcbiAgICAgICAgICAgIFwiY2xpZW50bGVnZXJcIjogXCIvYXNzZXRzL2ljb25zL2VxdWlwbWVudC9wY3BvcnRhYmxlXzEucG5nXCIsXG4gICAgICAgICAgICBcImNsaWVudGzDqWdlclwiOiBcIi9hc3NldHMvaWNvbnMvZXF1aXBtZW50L3BjcG9ydGFibGVfMS5wbmdcIixcbiAgICAgICAgICAgIFwib25kdWxldXJcIjogXCIvYXNzZXRzL2ljb25zL2VxdWlwbWVudC9vbmR1bGF0ZXVyLnBuZ1wiLFxuICAgICAgICAgICAgXCJzZXJ2ZXVyXCI6IFwiL2Fzc2V0cy9pY29ucy9lcXVpcG1lbnQvc2VydmV1ci5wbmdcIixcbiAgICAgICAgICAgIFwic2VydmVyXCI6IFwiL2Fzc2V0cy9pY29ucy9lcXVpcG1lbnQvc2VydmV1ci5wbmdcIixcbiAgICAgICAgICAgIFwic2VydmVydmlydHVlbFwiOiBcIi9hc3NldHMvaWNvbnMvZXF1aXBtZW50L3Zwcy5wbmdcIixcbiAgICAgICAgICAgIFwic2VydmV1cnZpcnR1ZWxcIjogXCIvYXNzZXRzL2ljb25zL2VxdWlwbWVudC92cHMucG5nXCIsXG4gICAgICAgICAgICBcInZtXCI6IFwiL2Fzc2V0cy9pY29ucy9lcXVpcG1lbnQvdnBzLnBuZ1wiLFxuICAgICAgICAgICAgXCJ3aWZpXCI6IFwiL2Fzc2V0cy9pY29ucy9lcXVpcG1lbnQvd2lmaS5wbmdcIixcbiAgICAgICAgICAgIFwid29ya3N0YXRpb25maXhlXCI6IFwiL2Fzc2V0cy9pY29ucy9lcXVpcG1lbnQvcGNmaXhlXzEucG5nXCIsXG4gICAgICAgICAgICBcIndvcmtzdGF0aW9ucG9ydGFibGVcIjogXCIvYXNzZXRzL2ljb25zL2VxdWlwbWVudC9wY3BvcnRhYmxlXzEucG5nXCIsXG4gICAgICAgICAgICBcImltcHJpbWFudGVcIjogXCIvYXNzZXRzL2ljb25zL2VxdWlwbWVudC9wcmludGVyLnBuZ1wiLFxuICAgICAgICB9Ki9cblxuICAgIGNvbnN0IGNsZWFuOiBzdHJpbmcgPSAodGhpcy50eXBlIHx8IFwiXCIpLnRvTG9jYWxlTG93ZXJDYXNlKCkucmVwbGFjZSgvW15BLVowLTldKy9pZywgXCJcIik7XG4gICAgY29uc3Qgc2VydmVyOiBib29sZWFuID0gdGhpcy5uYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ3NydicpO1xuICAgIGlmIChwYXJhbXNbY2xlYW5dKSB7XG4gICAgICB0aGlzLmljb24gPSBwYXJhbXNbY2xlYW5dO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmljb24gPSBwYXJhbXNbJ2RlZmF1bHQnXTtcbiAgICB9XG5cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICB0aGlzLm5nT25Jbml0KCk7XG4gIH1cblxufVxuIiwiPHNwYW4gW3N0eWxlXT1cImNzc1wiIG1hdFRvb2x0aXA9XCJ7e3R5cGV9fVwiPlxuICAgIDxpbWcgW3NyY109XCJpY29uXCIgW3N0eWxlXT1cImNzc1wiPlxuPC9zcGFuPlxuIl19