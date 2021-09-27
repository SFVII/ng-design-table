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
        //console.log(this.icon);
        //console.log(this.iconLabel);
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
            template: "<!--<png-icon matTooltip=\"{{this.iconLabel}}\" [src]=\"this.iconSrc\"></png-icon>-->\n<!--<png-icon [src]=\"this.iconSrc\"></png-icon>-->\n<span matTooltip=\"{{this.label}}\" class=\"{{this.iconSrc}}\">\n    {{this.label}}\n</span>",
            styles: [".now-low{background:no-repeat padding-box rgba(17,150,3,.56)!important;border-radius:5px;border:none!important;color:#3c5905!important;font:14px/36px \"Nexa Text\";letter-spacing:0;min-width:100%!important;padding:0 10px;overflow:hidden;white-space:nowrap;max-width:80px!important;text-overflow:ellipsis;display:inline-block;height:36px;text-align:center}.now-normal{background:no-repeat padding-box rgba(170,238,230,.56)!important;border-radius:5px;border:none!important;font:14px/36px \"Nexa Text\";letter-spacing:0;color:#169d8a!important;min-width:100%!important;padding:0 10px;overflow:hidden;white-space:nowrap;max-width:80px!important;text-overflow:ellipsis;display:inline-block;height:36px;text-align:center}.now-urgent{background:no-repeat padding-box rgba(243,161,36,.56)!important;border-radius:5px;border:none!important;font:14px/36px \"Nexa Text\";letter-spacing:0;color:#c48e3b!important;min-width:100%!important;padding:0 10px;overflow:hidden;white-space:nowrap;max-width:80px!important;text-overflow:ellipsis;display:inline-block;height:36px;text-align:center}.now-critic{background:no-repeat padding-box rgba(215,5,43,.56)!important;border-radius:5px;border:none!important;font:14px/36px \"Nexa Text\";letter-spacing:0;color:#7c1c2d!important;min-width:100%!important;padding:0 10px;overflow:hidden;white-space:nowrap;max-width:80px!important;text-overflow:ellipsis;display:inline-block;height:36px;text-align:center}.now-vip{background:no-repeat padding-box rgba(120,125,130,.56)!important;border-radius:5px;border:none!important;font:12px/36px \"Nexa Text\";letter-spacing:0;color:#171f26!important;min-width:100%!important;padding:0 10px;overflow:hidden;white-space:nowrap;max-width:80px!important;text-overflow:ellipsis;display:inline-block;height:36px;text-align:center}"]
        }),
        __metadata("design:paramtypes", [TableService])
    ], PriorityComponent);
    return PriorityComponent;
}());
export { PriorityComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpb3JpdHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvY2VsbHMtY29tcG9uZW50L3ByaW9yaXR5L3ByaW9yaXR5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBQ2pGLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQU9qRDtJQU1JLDJCQUFvQixPQUFzQjtRQUF0QixZQUFPLEdBQVAsT0FBTyxDQUFlO1FBRm5DLFVBQUssR0FBRyxFQUFFLENBQUM7SUFHbEIsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDSSxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O2FBZTVDO1FBRUwseUJBQXlCO1FBQ3pCLDhCQUE4QjtRQUU5QixJQUFJLENBQUMsT0FBTyxHQUFHLHVCQUF1QixHQUFFLElBQUksQ0FBQyxJQUFJLEdBQUMsTUFBTSxDQUFBO1FBRXhELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1NBQ25CO2FBQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtZQUMxQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDL0I7YUFBTTtZQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDN0M7UUFFRCxRQUFRLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDZixLQUFLLE1BQU07Z0JBQ1AsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7Z0JBQzdCLE1BQU07WUFDTixLQUFLLE1BQU07Z0JBQ1AsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUM7Z0JBQ2hDLE1BQU07WUFDTixLQUFLLFFBQVE7Z0JBQ1QsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUM7Z0JBQ2hDLE1BQU07WUFDTixLQUFLLE9BQU87Z0JBQ1IsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUM7Z0JBQ2hDLE1BQU07WUFDTixLQUFLLE1BQU07Z0JBQ1AsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7Z0JBQzdCLE1BQU07U0FDVDtRQUVEOzs7Ozs7Ozs7V0FTRztJQUNQLENBQUM7SUFFRCx1Q0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDOUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7O2dCQWxFNkIsWUFBWTs7SUFMakM7UUFBUixLQUFLLEVBQUU7O21EQUFjO0lBQ2I7UUFBUixLQUFLLEVBQUU7O3dEQUFtQjtJQUZsQixpQkFBaUI7UUFMN0IsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGVBQWU7WUFDekIsb1BBQXdDOztTQUUzQyxDQUFDO3lDQU9nQyxZQUFZO09BTmpDLGlCQUFpQixDQTBFN0I7SUFBRCx3QkFBQztDQUFBLEFBMUVELElBMEVDO1NBMUVZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUYWJsZVNlcnZpY2V9IGZyb20gXCIuLi8uLi90YWJsZS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaWNvbi1wcmlvcml0eScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3ByaW9yaXR5LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9wcmlvcml0eS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFByaW9yaXR5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICAgIEBJbnB1dCgpIGljb246IHN0cmluZztcbiAgICBASW5wdXQoKSBpY29uTGFiZWw6IHN0cmluZztcbiAgICBwdWJsaWMgaWNvblNyYyA6IHN0cmluZztcbiAgICBwdWJsaWMgbGFiZWwgPSAnJztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZSA6IFRhYmxlU2VydmljZSkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBjb25zdCBsaXN0ID0gdGhpcy5zZXJ2aWNlLnNldHRpbmdDb25maWcucHJpb3JpdHkgLyo9IFt7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiNSAtIENyaXRpcXVlIChQcm9kdWN0aW9uKVwiLFxuICAgICAgICAgICAgXCJkYXRhXCI6IFwiYXNzZXRzL2ljb25zL25vd3RlYW0vY3JpdGlxdWVwcm9kLnBuZ1wiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCI0IC0gQ3JpdGlxdWVcIixcbiAgICAgICAgICAgIFwiZGF0YVwiOiBcImFzc2V0cy9pY29ucy9ub3d0ZWFtL2NyaXRpcXVlLnBuZ1wiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCIzIC0gVXJnZW50ZVwiLFxuICAgICAgICAgICAgXCJkYXRhXCI6IFwiYXNzZXRzL2ljb25zL25vd3RlYW0vdXJnZW50LnBuZ1wiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCIyIC0gTm9ybWFsZVwiLFxuICAgICAgICAgICAgJ2RhdGEnOiBcImFzc2V0cy9pY29ucy9ub3d0ZWFtL25vcm1hbC5wbmdcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiMSAtIEJhc3NlXCIsXG4gICAgICAgICAgICBcImRhdGFcIjogXCJhc3NldHMvaWNvbnMvbm93dGVhbS9iYXNzZS5wbmdcIlxuICAgICAgICB9XTsqL1xuXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5pY29uKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmljb25MYWJlbCk7XG5cbiAgICAgICAgdGhpcy5pY29uU3JjID0gXCJhc3NldHMvaWNvbnMvbm93dGVhbS9cIisgdGhpcy5pY29uK1wiLnBuZ1wiXG5cbiAgICAgICAgaWYgKCF0aGlzLmljb25MYWJlbCkge1xuICAgICAgICAgICAgdGhpcy5sYWJlbCA9ICcnO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaWNvbkxhYmVsLmluZGV4T2YoJy0nKSA9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5sYWJlbCA9IHRoaXMuaWNvbkxhYmVsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sYWJlbCA9IHRoaXMuaWNvbkxhYmVsLnNwbGl0KCctJylbMV07XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKHRoaXMuaWNvbikge1xuICAgICAgICAgICAgY2FzZSAnQmxldSc6XG4gICAgICAgICAgICAgICAgdGhpcy5pY29uU3JjID0gJ25vdy1sb3cnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdWZXJ0JzpcbiAgICAgICAgICAgICAgICB0aGlzLmljb25TcmMgPSAnbm93LW5vcm1hbCc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ09yYW5nZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5pY29uU3JjID0gJ25vdy11cmdlbnQnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdSb3VnZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5pY29uU3JjID0gJ25vdy1jcml0aWMnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdOb2lyJzpcbiAgICAgICAgICAgICAgICB0aGlzLmljb25TcmMgPSAnbm93LXZpcCc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qaWYgKCF0aGlzLmljb24pIHtcbiAgICAgICAgICAgIHRoaXMuaWNvblNyYyA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNzQUFBQXhDQVlBQUFCREVGQTlBQUFBQVhOU1IwSUFyczRjNlFBQUFEaGxXRWxtVFUwQUtnQUFBQWdBQVlkcEFBUUFBQUFCQUFBQUdnQUFBQUFBQXFBQ0FBUUFBQUFCQUFBQUs2QURBQVFBQUFBQkFBQUFNUUFBQUFCblJPcmhBQUFHVlVsRVFWUm9CZTFZYTB3VVZ4UStkM1pYZ1FVeEtvdDl3R0pFazdLYUFrYmNWUU0wcWEzV05HS3Ixdm9xeEQ2TWpkRTJwckZ0R3VtZnRra1RLMjBUa3pacE1DYWsxTlpIVTZHTkwxaEVRYXM4ZEZFcFZYbG95a05oUVZDQm5kdHpWMmVjM1ptZFdYYVdOaWJlSDNQdlBlYzc1M3h6NXN5OWQ0YkFLRGVMWlVvOFJCaHpnSkNGaE5Ka0FES1pFb2pGc0RjQjZEOUFTVDBGL2hEY2NaZDBkbmJlVnFORDFKUjZkQk9lbkpwZ05CbytRMEtyQ1RaTlg1UU84QlIyY0lPOVg3UzN0L2NyNGJXZEtGbHB5Q3dKMHpZQVI3NUc1eVlOcUlLYWRsREt2OUxSOG5lbHY1THpGK2lkSTlFdkNVZDJoVWFVUlNjV1FyaWo4UW5KUy95NWhEV3o4WW5UUHdjQzIveURoREtubUY0QzVJWDJsc2FqZ24zWXlNWWxKaS9uQ1BlVDREaFFielFhWWVLRUNkRFoxUVU4endlQ2VlVVVxSnRRa282RXJ6QkJXTW9nZW5KeUhBZWswQnRCNFdJd0dPQ05OYTlEeFpGU3VIYXBEdXBPVjBEejVYcHdIaW1CM0xXcndHUlNMbTNNYkN3RjJDTzRERXRtTFluVGR1RUx2MEZ3S3UzWlFsQzg1d2ZJbkQ5WEt2WVpPMCtjaEpYcjFnZk1OT1ZoYVVkcjR3R0RqMVVJazdpa3BNbUVHb29DTFU5djVhMkR2SFdyUmMrOXZYMVFmZVlzeE1SRVEyUmtwRmR1VFV5QVc3ZTZvYWF1WHNSSkI1alJxZjN1bTkvckxnUENtNVlnMFlCKzVzKzFpM0hQMWRSQlNyb2RWcXpKQTF1NkE4NjdHa1RkUE1kRG5DZ1VCZ1JtVDdKYW56QUs4NUI3UW1STGpOUlg4Uy83NGZDeE1xK0laVzU0ZU5nN3hyY2QydHB1d0V4YmluZHVOS2xUNFhqVFVuV0UxNDNHaGRMcHVKVUdCSlg4ZmxpbVM3SW13a2NmdkErTFhueGUxQjBxL1VNY0t3NEltYW1mTElHSmlzNERDTi9NWFFzZmI5c0trUkVSSXFLbytHZjQ5YmRTY2E0MHdIUWtFR2QxUXc0K0VXdVdQYVZBQ1ZSZTFiQVpFOWVjT1NmbGdKTGVZcDAraUk2VTF4NC9BMHRjSE5TZk9TRktXMXJiWU91SG53QmJEVFFiaGJNY1VMcWZBTjNwckdyWUlqVTRYbk4xZkhtVnE0YnBHS2FpMnJWZHFtZmp5dE91MUhFeE1ZRnJ3TTlnbmlORGxMaDdleUZyd2VMZ2lESXJRbTlMeW9CKzVUemw2c2wwMkFvWmllRjdBM2dUa0NSNHgrem5PNnRjU1o2eFVlODlsemFscCtMVXhleGgzck4vNHFSSnhyNitQZ0dtMnQrNWV3K0VHcjdVMkFoMzd0NVZ4ZnNwYnhBa2dKdkUvWWJiV3c5dWF2a0FmRDd1SHVNRnViUkhjQzNlWnFFMzQ2alkrYzBPcUR4UklZV29qc2VNTVVHME9ScHVkWGVyNHZ5VnVERnY4bGtmR1VGR0loQlI1Z0N6blNvUVpmUFpzeDQrV2paWGErbHB6OEw1UDA5NjYzYmoyK3ZWb0RJZFI2SEVoNndNRVlRZ1BXMFc3dTJTYWxLeFdiSjRFY1NPR3dmc01MTnl4YXNxU0Y4VnJzbm4yR0ZHTjFtMlpiNjA4R1ZmN3dGbUJ3K1ZRby9iRFVORFExQlV2RGNBU2k3RzkrVmJKdldwV1Rrc09FbC9mejlzM1BRT0RHQ3YxVmpObXFQTTBOMkRyMGNRRFlsV2RyUTB6bWRRM1psbFRzeG1NN3k3WVJNYmFyYkJ3YUhnaWVKNWxxZGtoZUEwTEdTWnM0eU1PYkI4MlVyQnIrNGU2OVREZTJoT1YrdmxHNEl6K1p0Qm9SeVhweklCTUpKKytiTFg4QXVnM1ZGV2Rud0IyZ1c5V2ZqSHdFYy9qTXZvcXE2MnBqS3BUa2FXRWMxeTJQS2xvSkdPNDU5S3RqOXRUVHpWZHIxdHBLYUlwOVVlQW5rM201c3UraHZMeUJKQ3M1UzJWbjlEcmJuSHc4T3hzcU93Yjk5ZXdKOFhXbkRBVExialpYdEh5MS9mSVZqY3FLU0dZVmtOcEE3OXgremNXbHRiQXo4V0Y3bXVYRzNxa3VxUjBYVkt5UVZDK2JNZHJVM0hVSGYvc0NzRlNjYWpUbGFJaFp3LzFWdGVZVnNOQkZLajJUOVNaR1V2R05aUlFaYmR0a1ZQaHRoWjJIQnZZR1RIcWlBQ3lqTkxJYmg5VU1VNU8rK3FxRU5XeVRLTEovTE56cW9MV1NGN1JFTWE0Q3lzeHllemxaRjljSmJOMXVNNDVLMUxJNmk4RERRTS9rLzFJMFZXVmdaWWNNMll2V3U2TTBoQVY5MHJ4WmVSeGFXclVPOU93d0pKUDBTVkFvY2lrNUhGSHhwVzUrbUwrck9pOGFNNExHVFJTUzcrS00wTnhkbG8yenhTTDloanNxTlZEbzh6KzE5bTlxQmFNRnlIM2FoWHhkemZXR2lkbXA5UWRENWxnRVFLTXUyMkhBeVdwK3lNMWhrNXlHWVk5cGtTQ09PSmlFbzFVVVBPZ3h0VGhvVWdmVWlXMHQzQ29adjlvelZ3a09ZVERQOG5lTWFhcytkbDJHcFpITzh1aHpmbGk2RzdNKzB6VXRsNTF1RjQ1aHE3TVI5OUNBU2xKdmduRVFwUWNOQVRZZmI1T21DaytMRlJTVXpIc29nM2tPMS9xR1kzeFFqaGt5aG5UeVBUTVNNWDhXSmpQZ2lGTFV4dk5NQUJVUkhpNEY4Sk5pcWNmNlFmdUFBQUFBQkpSVTVFcmtKZ2dnPT0nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZGF0YTogYW55ID0gbGlzdC5maWx0ZXIoKGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmljb24uaW5jbHVkZXMoZS5sYWJlbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChkYXRhICYmIGRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pY29uU3JjID0gZGF0YVswXS5kYXRhXG4gICAgICAgICAgICB9XG4gICAgICAgIH0qL1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5uZ09uSW5pdCgpO1xuICAgIH1cblxufVxuIl19