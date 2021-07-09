import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { TableService } from "../../table.service";
var PriorityComponent = /** @class */ (function () {
    function PriorityComponent(service) {
        this.service = service;
        this.label = '';
    }
    PriorityComponent.prototype.ngOnInit = function () {
        var list = this.service.settingConfig.priority; /*= [{
            "label": "5 - Critique (Production)",
            "data": "assets/icons/nowteam/critiqueprod.png"
        }, {
            "label": "4 - Critique",
            "data": "assets/icons/nowteam/critique.png"
        }, {
            "label": "3 - Urgente",
            "data": "assets/icons/nowteam/urgent.png"
        }, {
            "label": "2 - Normale",
            'data': "assets/icons/nowteam/normal.png"
        }, {
            "label": "1 - Basse",
            "data": "assets/icons/nowteam/basse.png"
        }];*/
        console.log(this.icon);
        console.log(this.iconLabel);
        this.iconSrc = "assets/icons/nowteam/" + this.icon + ".png";
        if (!this.iconLabel) {
            this.label = '';
        }
        else if (this.iconLabel.indexOf('-') == -1) {
            this.label = this.iconLabel;
        }
        else {
            this.label = this.iconLabel.split('-')[1];
        }
        switch (this.icon) {
            case 'Bleu':
                this.iconSrc = 'now-low';
                break;
            case 'Vert':
                this.iconSrc = 'now-normal';
                break;
            case 'Orange':
                this.iconSrc = 'now-urgent';
                break;
            case 'Rouge':
                this.iconSrc = 'now-critic';
                break;
            case 'Noir':
                this.iconSrc = 'now-vip';
                break;
        }
        /*if (!this.icon) {
            this.iconSrc = 'data:image/png;base64,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';
        } else {
            const data: any = list.filter((e: any) => {
                return this.icon.includes(e.label);
            });
            if (data && data.length) {
                this.iconSrc = data[0].data
            }
        }*/
    };
    PriorityComponent.prototype.ngOnChanges = function (changes) {
        this.ngOnInit();
    };
    PriorityComponent.ctorParameters = function () { return [
        { type: TableService }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], PriorityComponent.prototype, "icon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], PriorityComponent.prototype, "iconLabel", void 0);
    PriorityComponent = __decorate([
        Component({
            selector: 'icon-priority',
            template: "<!--<png-icon matTooltip=\"{{this.iconLabel}}\" [src]=\"this.iconSrc\"></png-icon>-->\n<!--<png-icon [src]=\"this.iconSrc\"></png-icon>-->\n<span class=\"{{this.iconSrc}}\">\n    {{this.label}}\n</span>",
            styles: [".now-low{background-color:#30567b!important;border-radius:3px;border:none!important;color:#fff!important;min-width:0!important;padding:7px}.now-normal{background:no-repeat padding-box #6fe8D78E!important;border-radius:5px;border:none!important;text-align:left;font:bold 14px/21px nexa;letter-spacing:0;color:#169d8a!important;min-width:0!important;padding:7px}.now-urgent{background:no-repeat padding-box #f3a124!important;border-radius:5px;border:none!important;text-align:left;font:bold 14px/21px nexa;letter-spacing:0;color:#c48e3b!important;min-width:0!important;padding:7px}.now-critic{background:no-repeat padding-box #d7052b!important;border-radius:5px;border:none!important;text-align:left;font:bold 14px/21px nexa;letter-spacing:0;color:#7c1c2d!important;min-width:0!important;padding:7px}.now-vip{background:no-repeat padding-box #787d82!important;border-radius:5px;border:none!important;text-align:left;font:bold 12px/19px nexa;letter-spacing:0;color:#171f26!important;min-width:0!important;padding:7px}"]
        }),
        __metadata("design:paramtypes", [TableService])
    ], PriorityComponent);
    return PriorityComponent;
}());
export { PriorityComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpb3JpdHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvY2VsbHMtY29tcG9uZW50L3ByaW9yaXR5L3ByaW9yaXR5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBQ2pGLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQU9qRDtJQU1JLDJCQUFvQixPQUFzQjtRQUF0QixZQUFPLEdBQVAsT0FBTyxDQUFlO1FBRm5DLFVBQUssR0FBRyxFQUFFLENBQUM7SUFHbEIsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDSSxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O2FBZTVDO1FBRUwsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyx1QkFBdUIsR0FBRSxJQUFJLENBQUMsSUFBSSxHQUFDLE1BQU0sQ0FBQTtRQUV4RCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztTQUNuQjthQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7WUFDMUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQy9CO2FBQU07WUFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzdDO1FBRUQsUUFBUSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2YsS0FBSyxNQUFNO2dCQUNQLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO2dCQUM3QixNQUFNO1lBQ04sS0FBSyxNQUFNO2dCQUNQLElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDO2dCQUNoQyxNQUFNO1lBQ04sS0FBSyxRQUFRO2dCQUNULElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDO2dCQUNoQyxNQUFNO1lBQ04sS0FBSyxPQUFPO2dCQUNSLElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDO2dCQUNoQyxNQUFNO1lBQ04sS0FBSyxNQUFNO2dCQUNQLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO2dCQUM3QixNQUFNO1NBQ1Q7UUFFRDs7Ozs7Ozs7O1dBU0c7SUFDUCxDQUFDO0lBRUQsdUNBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQzlCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDOztnQkFsRTZCLFlBQVk7O0lBTGpDO1FBQVIsS0FBSyxFQUFFOzttREFBYztJQUNiO1FBQVIsS0FBSyxFQUFFOzt3REFBbUI7SUFGbEIsaUJBQWlCO1FBTDdCLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLHNOQUF3Qzs7U0FFM0MsQ0FBQzt5Q0FPZ0MsWUFBWTtPQU5qQyxpQkFBaUIsQ0EwRTdCO0lBQUQsd0JBQUM7Q0FBQSxBQTFFRCxJQTBFQztTQTFFWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VGFibGVTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vdGFibGUuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2ljb24tcHJpb3JpdHknLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9wcmlvcml0eS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vcHJpb3JpdHkuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQcmlvcml0eUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XG4gICAgQElucHV0KCkgaWNvbkxhYmVsOiBzdHJpbmc7XG4gICAgcHVibGljIGljb25TcmMgOiBzdHJpbmc7XG4gICAgcHVibGljIGxhYmVsID0gJyc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2UgOiBUYWJsZVNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbGlzdCA9IHRoaXMuc2VydmljZS5zZXR0aW5nQ29uZmlnLnByaW9yaXR5IC8qPSBbe1xuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIjUgLSBDcml0aXF1ZSAoUHJvZHVjdGlvbilcIixcbiAgICAgICAgICAgIFwiZGF0YVwiOiBcImFzc2V0cy9pY29ucy9ub3d0ZWFtL2NyaXRpcXVlcHJvZC5wbmdcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiNCAtIENyaXRpcXVlXCIsXG4gICAgICAgICAgICBcImRhdGFcIjogXCJhc3NldHMvaWNvbnMvbm93dGVhbS9jcml0aXF1ZS5wbmdcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiMyAtIFVyZ2VudGVcIixcbiAgICAgICAgICAgIFwiZGF0YVwiOiBcImFzc2V0cy9pY29ucy9ub3d0ZWFtL3VyZ2VudC5wbmdcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiMiAtIE5vcm1hbGVcIixcbiAgICAgICAgICAgICdkYXRhJzogXCJhc3NldHMvaWNvbnMvbm93dGVhbS9ub3JtYWwucG5nXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIjEgLSBCYXNzZVwiLFxuICAgICAgICAgICAgXCJkYXRhXCI6IFwiYXNzZXRzL2ljb25zL25vd3RlYW0vYmFzc2UucG5nXCJcbiAgICAgICAgfV07Ki9cblxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmljb24pO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmljb25MYWJlbCk7XG5cbiAgICAgICAgdGhpcy5pY29uU3JjID0gXCJhc3NldHMvaWNvbnMvbm93dGVhbS9cIisgdGhpcy5pY29uK1wiLnBuZ1wiXG5cbiAgICAgICAgaWYgKCF0aGlzLmljb25MYWJlbCkge1xuICAgICAgICAgICAgdGhpcy5sYWJlbCA9ICcnO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaWNvbkxhYmVsLmluZGV4T2YoJy0nKSA9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5sYWJlbCA9IHRoaXMuaWNvbkxhYmVsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sYWJlbCA9IHRoaXMuaWNvbkxhYmVsLnNwbGl0KCctJylbMV07XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKHRoaXMuaWNvbikge1xuICAgICAgICAgICAgY2FzZSAnQmxldSc6XG4gICAgICAgICAgICAgICAgdGhpcy5pY29uU3JjID0gJ25vdy1sb3cnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdWZXJ0JzpcbiAgICAgICAgICAgICAgICB0aGlzLmljb25TcmMgPSAnbm93LW5vcm1hbCc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ09yYW5nZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5pY29uU3JjID0gJ25vdy11cmdlbnQnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdSb3VnZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5pY29uU3JjID0gJ25vdy1jcml0aWMnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdOb2lyJzpcbiAgICAgICAgICAgICAgICB0aGlzLmljb25TcmMgPSAnbm93LXZpcCc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qaWYgKCF0aGlzLmljb24pIHtcbiAgICAgICAgICAgIHRoaXMuaWNvblNyYyA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNzQUFBQXhDQVlBQUFCREVGQTlBQUFBQVhOU1IwSUFyczRjNlFBQUFEaGxXRWxtVFUwQUtnQUFBQWdBQVlkcEFBUUFBQUFCQUFBQUdnQUFBQUFBQXFBQ0FBUUFBQUFCQUFBQUs2QURBQVFBQUFBQkFBQUFNUUFBQUFCblJPcmhBQUFHVlVsRVFWUm9CZTFZYTB3VVZ4UStkM1pYZ1FVeEtvdDl3R0pFazdLYUFrYmNWUU0wcWEzV05HS3Ixdm9xeEQ2TWpkRTJwckZ0R3VtZnRra1RLMjBUa3pacE1DYWsxTlpIVTZHTkwxaEVRYXM4ZEZFcFZYbG95a05oUVZDQm5kdHpWMmVjM1ptZFdYYVdOaWJlSDNQdlBlYzc1M3h6NXN5OWQ0YkFLRGVMWlVvOFJCaHpnSkNGaE5Ka0FES1pFb2pGc0RjQjZEOUFTVDBGL2hEY2NaZDBkbmJlVnFORDFKUjZkQk9lbkpwZ05CbytRMEtyQ1RaTlg1UU84QlIyY0lPOVg3UzN0L2NyNGJXZEtGbHB5Q3dKMHpZQVI3NUc1eVlOcUlLYWRsREt2OUxSOG5lbHY1THpGK2lkSTlFdkNVZDJoVWFVUlNjV1FyaWo4UW5KUy95NWhEV3o4WW5UUHdjQzIveURoREtubUY0QzVJWDJsc2FqZ24zWXlNWWxKaS9uQ1BlVDREaFFielFhWWVLRUNkRFoxUVU4endlQ2VlVVVxSnRRa282RXJ6QkJXTW9nZW5KeUhBZWswQnRCNFdJd0dPQ05OYTlEeFpGU3VIYXBEdXBPVjBEejVYcHdIaW1CM0xXcndHUlNMbTNNYkN3RjJDTzRERXRtTFluVGR1RUx2MEZ3S3UzWlFsQzg1d2ZJbkQ5WEt2WVpPMCtjaEpYcjFnZk1OT1ZoYVVkcjR3R0RqMVVJazdpa3BNbUVHb29DTFU5djVhMkR2SFdyUmMrOXZYMVFmZVlzeE1SRVEyUmtwRmR1VFV5QVc3ZTZvYWF1WHNSSkI1alJxZjN1bTkvckxnUENtNVlnMFlCKzVzKzFpM0hQMWRSQlNyb2RWcXpKQTF1NkE4NjdHa1RkUE1kRG5DZ1VCZ1JtVDdKYW56QUs4NUI3UW1STGpOUlg4Uy83NGZDeE1xK0laVzU0ZU5nN3hyY2QydHB1d0V4YmluZHVOS2xUNFhqVFVuV0UxNDNHaGRMcHVKVUdCSlg4ZmxpbVM3SW13a2NmdkErTFhueGUxQjBxL1VNY0t3NEltYW1mTElHSmlzNERDTi9NWFFzZmI5c0trUkVSSXFLbytHZjQ5YmRTY2E0MHdIUWtFR2QxUXc0K0VXdVdQYVZBQ1ZSZTFiQVpFOWVjT1NmbGdKTGVZcDAraUk2VTF4NC9BMHRjSE5TZk9TRktXMXJiWU91SG53QmJEVFFiaGJNY1VMcWZBTjNwckdyWUlqVTRYbk4xZkhtVnE0YnBHS2FpMnJWZHFtZmp5dE91MUhFeE1ZRnJ3TTlnbmlORGxMaDdleUZyd2VMZ2lESXJRbTlMeW9CKzVUemw2c2wwMkFvWmllRjdBM2dUa0NSNHgrem5PNnRjU1o2eFVlODlsemFscCtMVXhleGgzck4vNHFSSnhyNitQZ0dtMnQrNWV3K0VHcjdVMkFoMzd0NVZ4ZnNwYnhBa2dKdkUvWWJiV3c5dWF2a0FmRDd1SHVNRnViUkhjQzNlWnFFMzQ2alkrYzBPcUR4UklZV29qc2VNTVVHME9ScHVkWGVyNHZ5VnVERnY4bGtmR1VGR0loQlI1Z0N6blNvUVpmUFpzeDQrV2paWGErbHB6OEw1UDA5NjYzYmoyK3ZWb0RJZFI2SEVoNndNRVlRZ1BXMFc3dTJTYWxLeFdiSjRFY1NPR3dmc01MTnl4YXNxU0Y4VnJzbm4yR0ZHTjFtMlpiNjA4R1ZmN3dGbUJ3K1ZRby9iRFVORFExQlV2RGNBU2k3RzkrVmJKdldwV1Rrc09FbC9mejlzM1BRT0RHQ3YxVmpObXFQTTBOMkRyMGNRRFlsV2RyUTB6bWRRM1psbFRzeG1NN3k3WVJNYmFyYkJ3YUhnaWVKNWxxZGtoZUEwTEdTWnM0eU1PYkI4MlVyQnIrNGU2OVREZTJoT1YrdmxHNEl6K1p0Qm9SeVhweklCTUpKKytiTFg4QXVnM1ZGV2Rud0IyZ1c5V2ZqSHdFYy9qTXZvcXE2MnBqS3BUa2FXRWMxeTJQS2xvSkdPNDU5S3RqOXRUVHpWZHIxdHBLYUlwOVVlQW5rM201c3UraHZMeUJKQ3M1UzJWbjlEcmJuSHc4T3hzcU93Yjk5ZXdKOFhXbkRBVExialpYdEh5MS9mSVZqY3FLU0dZVmtOcEE3OXgremNXbHRiQXo4V0Y3bXVYRzNxa3VxUjBYVkt5UVZDK2JNZHJVM0hVSGYvc0NzRlNjYWpUbGFJaFp3LzFWdGVZVnNOQkZLajJUOVNaR1V2R05aUlFaYmR0a1ZQaHRoWjJIQnZZR1RIcWlBQ3lqTkxJYmg5VU1VNU8rK3FxRU5XeVRLTEovTE56cW9MV1NGN1JFTWE0Q3lzeHllemxaRjljSmJOMXVNNDVLMUxJNmk4RERRTS9rLzFJMFZXVmdaWWNNMll2V3U2TTBoQVY5MHJ4WmVSeGFXclVPOU93d0pKUDBTVkFvY2lrNUhGSHhwVzUrbUwrck9pOGFNNExHVFJTUzcrS00wTnhkbG8yenhTTDloanNxTlZEbzh6KzE5bTlxQmFNRnlIM2FoWHhkemZXR2lkbXA5UWRENWxnRVFLTXUyMkhBeVdwK3lNMWhrNXlHWVk5cGtTQ09PSmlFbzFVVVBPZ3h0VGhvVWdmVWlXMHQzQ29adjlvelZ3a09ZVERQOG5lTWFhcytkbDJHcFpITzh1aHpmbGk2RzdNKzB6VXRsNTF1RjQ1aHE3TVI5OUNBU2xKdmduRVFwUWNOQVRZZmI1T21DaytMRlJTVXpIc29nM2tPMS9xR1kzeFFqaGt5aG5UeVBUTVNNWDhXSmpQZ2lGTFV4dk5NQUJVUkhpNEY4Sk5pcWNmNlFmdUFBQUFBQkpSVTVFcmtKZ2dnPT0nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZGF0YTogYW55ID0gbGlzdC5maWx0ZXIoKGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmljb24uaW5jbHVkZXMoZS5sYWJlbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChkYXRhICYmIGRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pY29uU3JjID0gZGF0YVswXS5kYXRhXG4gICAgICAgICAgICB9XG4gICAgICAgIH0qL1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5uZ09uSW5pdCgpO1xuICAgIH1cblxufVxuIl19