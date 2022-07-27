import { Component, Input } from '@angular/core';
import { TableService } from "../../table.service";
import * as i0 from "@angular/core";
import * as i1 from "../../table.service";
import * as i2 from "../png-icon/png-icon.component";
import * as i3 from "@angular/material/tooltip";
export class OriginComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        const list = this.service.settingConfig.origin; /*[{
            "label": "Web",
            "data": "assets/icons/nowteam/Web.png"
        }, {
            "label": "PRTG",
            "data": "assets/icons/nowteam/PRTG.png"
        }, {
            "label": "Mail",
            "data": "assets/icons/nowteam/Mail.png"
        }, {
            "label": "Téléphone",
            "data": "assets/icons/nowteam/Telephone.png"
        }, {
            "label": "Bot",
            "data": "assets/icons/nowteam/Bot.png"
        }];*/
        const flter = list.filter((e) => {
            return this.icon.includes(e.label);
        });
        this.iconSrc = flter && flter.length && flter[0].data ? flter[0].data : '';
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
}
OriginComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: OriginComponent, deps: [{ token: i1.TableService }], target: i0.ɵɵFactoryTarget.Component });
OriginComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: OriginComponent, selector: "icon-origin", inputs: { icon: "icon" }, usesOnChanges: true, ngImport: i0, template: "<png-icon style=\"margin : auto; text-align: center\" matTooltip=\"{{this.icon}}\" [src]=\"this.iconSrc\"></png-icon>", styles: [""], components: [{ type: i2.PngIconComponent, selector: "png-icon", inputs: ["src", "fontSize", "color"] }], directives: [{ type: i3.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: OriginComponent, decorators: [{
            type: Component,
            args: [{ selector: 'icon-origin', template: "<png-icon style=\"margin : auto; text-align: center\" matTooltip=\"{{this.icon}}\" [src]=\"this.iconSrc\"></png-icon>", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1.TableService }]; }, propDecorators: { icon: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JpZ2luLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RhYmxlL3NyYy9saWIvY2VsbHMtY29tcG9uZW50L29yaWdpbi9vcmlnaW4uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvb3JpZ2luL29yaWdpbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBbUMsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHFCQUFxQixDQUFDOzs7OztBQU9qRCxNQUFNLE9BQU8sZUFBZTtJQUl4QixZQUFtQixPQUFxQjtRQUFyQixZQUFPLEdBQVAsT0FBTyxDQUFjO0lBQ3hDLENBQUM7SUFFRCxRQUFRO1FBQ0osTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFBLENBQUM7Ozs7Ozs7Ozs7Ozs7OzthQWUxQztRQUNMLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFNLEVBQUUsRUFBRTtZQUNqQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQy9FLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDOUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7OzZHQWhDUSxlQUFlO2lHQUFmLGVBQWUsa0dDUjVCLHVIQUErRzs0RkRRbEcsZUFBZTtrQkFMM0IsU0FBUzsrQkFDSSxhQUFhO21HQUtkLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUYWJsZVNlcnZpY2V9IGZyb20gXCIuLi8uLi90YWJsZS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaWNvbi1vcmlnaW4nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9vcmlnaW4uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL29yaWdpbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE9yaWdpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzICB7XG4gICAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuICAgIHB1YmxpYyBpY29uU3JjOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgc2VydmljZTogVGFibGVTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGxpc3QgPSB0aGlzLnNlcnZpY2Uuc2V0dGluZ0NvbmZpZy5vcmlnaW4gLypbe1xuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIldlYlwiLFxuICAgICAgICAgICAgXCJkYXRhXCI6IFwiYXNzZXRzL2ljb25zL25vd3RlYW0vV2ViLnBuZ1wiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJQUlRHXCIsXG4gICAgICAgICAgICBcImRhdGFcIjogXCJhc3NldHMvaWNvbnMvbm93dGVhbS9QUlRHLnBuZ1wiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJNYWlsXCIsXG4gICAgICAgICAgICBcImRhdGFcIjogXCJhc3NldHMvaWNvbnMvbm93dGVhbS9NYWlsLnBuZ1wiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJUw6lsw6lwaG9uZVwiLFxuICAgICAgICAgICAgXCJkYXRhXCI6IFwiYXNzZXRzL2ljb25zL25vd3RlYW0vVGVsZXBob25lLnBuZ1wiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJCb3RcIixcbiAgICAgICAgICAgIFwiZGF0YVwiOiBcImFzc2V0cy9pY29ucy9ub3d0ZWFtL0JvdC5wbmdcIlxuICAgICAgICB9XTsqL1xuICAgICAgICBjb25zdCBmbHRlciA9IGxpc3QuZmlsdGVyKChlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmljb24uaW5jbHVkZXMoZS5sYWJlbCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmljb25TcmMgPSBmbHRlciAmJiBmbHRlci5sZW5ndGggJiYgZmx0ZXJbMF0uZGF0YSA/IGZsdGVyWzBdLmRhdGEgOiAnJztcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMubmdPbkluaXQoKTtcbiAgICB9XG5cbn1cbiIsIjxwbmctaWNvbiBzdHlsZT1cIm1hcmdpbiA6IGF1dG87IHRleHQtYWxpZ246IGNlbnRlclwiIG1hdFRvb2x0aXA9XCJ7e3RoaXMuaWNvbn19XCIgW3NyY109XCJ0aGlzLmljb25TcmNcIj48L3BuZy1pY29uPiJdfQ==