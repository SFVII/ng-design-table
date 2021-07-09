import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { TableService } from "../../table.service";
let PriorityComponent = class PriorityComponent {
    constructor(service) {
        this.service = service;
        this.label = '';
    }
    ngOnInit() {
        const list = this.service.settingConfig.priority; /*= [{
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
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
};
PriorityComponent.ctorParameters = () => [
    { type: TableService }
];
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
export { PriorityComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpb3JpdHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvY2VsbHMtY29tcG9uZW50L3ByaW9yaXR5L3ByaW9yaXR5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBQ2pGLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQU9qRCxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtJQU0xQixZQUFvQixPQUFzQjtRQUF0QixZQUFPLEdBQVAsT0FBTyxDQUFlO1FBRm5DLFVBQUssR0FBRyxFQUFFLENBQUM7SUFHbEIsQ0FBQztJQUVELFFBQVE7UUFDSixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O2FBZTVDO1FBRUwsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyx1QkFBdUIsR0FBRSxJQUFJLENBQUMsSUFBSSxHQUFDLE1BQU0sQ0FBQTtRQUV4RCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztTQUNuQjthQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7WUFDMUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQy9CO2FBQU07WUFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzdDO1FBRUQsUUFBUSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2YsS0FBSyxNQUFNO2dCQUNQLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO2dCQUM3QixNQUFNO1lBQ04sS0FBSyxNQUFNO2dCQUNQLElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDO2dCQUNoQyxNQUFNO1lBQ04sS0FBSyxRQUFRO2dCQUNULElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDO2dCQUNoQyxNQUFNO1lBQ04sS0FBSyxPQUFPO2dCQUNSLElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDO2dCQUNoQyxNQUFNO1lBQ04sS0FBSyxNQUFNO2dCQUNQLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO2dCQUM3QixNQUFNO1NBQ1Q7UUFFRDs7Ozs7Ozs7O1dBU0c7SUFDUCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQzlCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDO0NBRUosQ0FBQTs7WUFwRWlDLFlBQVk7O0FBTGpDO0lBQVIsS0FBSyxFQUFFOzsrQ0FBYztBQUNiO0lBQVIsS0FBSyxFQUFFOztvREFBbUI7QUFGbEIsaUJBQWlCO0lBTDdCLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLHNOQUF3Qzs7S0FFM0MsQ0FBQztxQ0FPZ0MsWUFBWTtHQU5qQyxpQkFBaUIsQ0EwRTdCO1NBMUVZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUYWJsZVNlcnZpY2V9IGZyb20gXCIuLi8uLi90YWJsZS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaWNvbi1wcmlvcml0eScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3ByaW9yaXR5LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9wcmlvcml0eS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFByaW9yaXR5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICAgIEBJbnB1dCgpIGljb246IHN0cmluZztcbiAgICBASW5wdXQoKSBpY29uTGFiZWw6IHN0cmluZztcbiAgICBwdWJsaWMgaWNvblNyYyA6IHN0cmluZztcbiAgICBwdWJsaWMgbGFiZWwgPSAnJztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZSA6IFRhYmxlU2VydmljZSkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBjb25zdCBsaXN0ID0gdGhpcy5zZXJ2aWNlLnNldHRpbmdDb25maWcucHJpb3JpdHkgLyo9IFt7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiNSAtIENyaXRpcXVlIChQcm9kdWN0aW9uKVwiLFxuICAgICAgICAgICAgXCJkYXRhXCI6IFwiYXNzZXRzL2ljb25zL25vd3RlYW0vY3JpdGlxdWVwcm9kLnBuZ1wiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCI0IC0gQ3JpdGlxdWVcIixcbiAgICAgICAgICAgIFwiZGF0YVwiOiBcImFzc2V0cy9pY29ucy9ub3d0ZWFtL2NyaXRpcXVlLnBuZ1wiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCIzIC0gVXJnZW50ZVwiLFxuICAgICAgICAgICAgXCJkYXRhXCI6IFwiYXNzZXRzL2ljb25zL25vd3RlYW0vdXJnZW50LnBuZ1wiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCIyIC0gTm9ybWFsZVwiLFxuICAgICAgICAgICAgJ2RhdGEnOiBcImFzc2V0cy9pY29ucy9ub3d0ZWFtL25vcm1hbC5wbmdcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiMSAtIEJhc3NlXCIsXG4gICAgICAgICAgICBcImRhdGFcIjogXCJhc3NldHMvaWNvbnMvbm93dGVhbS9iYXNzZS5wbmdcIlxuICAgICAgICB9XTsqL1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaWNvbik7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaWNvbkxhYmVsKTtcblxuICAgICAgICB0aGlzLmljb25TcmMgPSBcImFzc2V0cy9pY29ucy9ub3d0ZWFtL1wiKyB0aGlzLmljb24rXCIucG5nXCJcblxuICAgICAgICBpZiAoIXRoaXMuaWNvbkxhYmVsKSB7XG4gICAgICAgICAgICB0aGlzLmxhYmVsID0gJyc7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pY29uTGFiZWwuaW5kZXhPZignLScpID09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmxhYmVsID0gdGhpcy5pY29uTGFiZWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxhYmVsID0gdGhpcy5pY29uTGFiZWwuc3BsaXQoJy0nKVsxXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAodGhpcy5pY29uKSB7XG4gICAgICAgICAgICBjYXNlICdCbGV1JzpcbiAgICAgICAgICAgICAgICB0aGlzLmljb25TcmMgPSAnbm93LWxvdyc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1ZlcnQnOlxuICAgICAgICAgICAgICAgIHRoaXMuaWNvblNyYyA9ICdub3ctbm9ybWFsJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnT3JhbmdlJzpcbiAgICAgICAgICAgICAgICB0aGlzLmljb25TcmMgPSAnbm93LXVyZ2VudCc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1JvdWdlJzpcbiAgICAgICAgICAgICAgICB0aGlzLmljb25TcmMgPSAnbm93LWNyaXRpYyc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ05vaXInOlxuICAgICAgICAgICAgICAgIHRoaXMuaWNvblNyYyA9ICdub3ctdmlwJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgLyppZiAoIXRoaXMuaWNvbikge1xuICAgICAgICAgICAgdGhpcy5pY29uU3JjID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ3NBQUFBeENBWUFBQUJERUZBOUFBQUFBWE5TUjBJQXJzNGM2UUFBQURobFdFbG1UVTBBS2dBQUFBZ0FBWWRwQUFRQUFBQUJBQUFBR2dBQUFBQUFBcUFDQUFRQUFBQUJBQUFBSzZBREFBUUFBQUFCQUFBQU1RQUFBQUJuUk9yaEFBQUdWVWxFUVZSb0JlMVlhMHdVVnhRK2QzWlhnUVV4S290OXdHSkVrN0thQWtiY1ZRTTBxYTNXTkdLcjF2b3F4RDZNamRFMnByRnRHdW1mdGtrVEsyMFRrelpwTUNhazFOWkhVNkdOTDFoRVFhczhkRkVwVlhsb3lrTmhRVkNCbmR0elYyZWMzWm1kV1hhV05pYmVIM1B2UGVjNzUzeHo1c3k5ZDRiQUtEZUxaVW84UkJoemdKQ0ZoTkprQURLWkVvakZzRGNCNkQ5QVNUMEYvaERjY1pkMGRuYmVWcU5EMUpSNmRCT2VuSnBnTkJvK1EwS3JDVFpOWDVRTzhCUjJjSU85WDdTM3QvY3I0YldkS0ZscHlDd0owellBUjc1RzV5WU5xSUthZGxES3Y5TFI4bmVsdjVMekYraWRJOUV2Q1VkMmhVYVVSU2NXUXJpajhRbkpTL3k1aERXejhZblRQd2NDMi95RGhES25tRjRDNUlYMmxzYWpnbjNZeU1ZbEppL25DUGVUNERoUWJ6UWFZZUtFQ2REWjFRVTh6d2VDZWVVVXFKdFFrbzZFcnpCQldNb2dlbkp5SEFlazBCdEI0V0l3R09DTk5hOUR4WkZTdUhhcER1cE9WMER6NVhwd0hpbUIzTFdyd0dSU0xtM01iQ3dGMkNPNERFdG1MWW5UZHVFTHYwRndLdTNaUWxDODV3ZkluRDlYS3ZZWk8wK2NoSlhyMWdmTU5PVmhhVWRyNHdHRGoxVUlrN2lrcE1tRUdvb0NMVTl2NWEyRHZIV3JSYys5dlgxUWZlWXN4TVJFUTJSa3BGZHVUVXlBVzdlNm9hYXVYc1JKQjVqUnFmM3VtOS9yTGdQQ201WWcwWUIrNXMrMWkzSFAxZFJCU3JvZFZxekpBMXU2QTg2N0drVGRQTWREbkNnVUJnUm1UN0phbnpBSzg1QjdRbVJMak5SWDhTLzc0ZkN4TXErSVpXNTRlTmc3eHJjZDJ0cHV3RXhiaW5kdU5LbFQ0WGpUVW5XRTE0M0doZExwdUpVR0JKWDhmbGltUzdJbXdrY2Z2QStMWG54ZTFCMHEvVU1jS3c0SW1hbWZMSUdKaXM0RENOL01YUXNmYjlzS2tSRVJJcUtvK0dmNDliZFNjYTQwd0hRa0VHZDFRdzQrRVd1V1BhVkFDVlJlMWJBWkU5ZWNPU2ZsZ0pMZVlwMCtpSTZVMXg0L0EwdGNITlNmT1NGS1cxcmJZT3VIbndCYkRUUWJoYk1jVUxxZkFOM3ByR3JZSWpVNFhuTjFmSG1WcTRicEdLYWkyclZkcW1manl0T3UxSEV4TVlGcndNOWduaU5EbExoN2V5RnJ3ZUxnaURJclFtOUx5b0IrNVR6bDZzbDAyQW9aaWVGN0EzZ1RrQ1I0eCt6bk82dGNTWjZ4VWU4OWx6YWxwK0xVeGV4aDNyTi80cVJKeHI2K1BnR20ydCs1ZXcrRUdyN1UyQWgzN3Q1Vnhmc3BieEFrZ0p2RS9ZYmJXdzl1YXZrQWZEN3VIdU1GdWJSSGNDM2VacUUzNDZqWStjME9xRHhSSVlXb2pzZU1NVUcwT1JwdWRYZXI0dnlWdURGdjhsa2ZHVUZHSWhCUjVnQ3puU29RWmZQWnN4NCtXalpYYStscHo4TDVQMDk2NjNiajIrdlZvRElkUjZIRWg2d01FWVFnUFcwVzd1MlNhbEt4V2JKNEVjU09Hd2ZzTUxOeXhhc3FTRjhWcnNubjJHRkdOMW0yWmI2MDhHVmY3d0ZtQncrVlFvL2JEVU5EUTFCVXZEY0FTaTdHOStWYkp2V3BXVGtzT0VsL2Z6OXMzUFFPREdDdjFWak5tcVBNME4yRHIwY1FEWWxXZHJRMHptZFEzWmxsVHN4bU03eTdZUk1iYXJiQndhSGdpZUo1bHFka2hlQTBMR1NaczR5TU9iQjgyVXJCcis0ZTY5VERlMmhPVit2bEc0SXorWnRCb1J5WHB6SUJNSkorK2JMWDhBdWczVkZXZG53QjJnVzlXZmpId0VjL2pNdm9xcTYycGpLcFRrYVdFYzF5MlBLbG9KR080NTlLdGo5dFRUelZkcjF0cEthSXA5VWVBbmszbTVzdStodkx5QkpDczVTMlZuOURyYm5IdzhPeHNxT3diOTlld0o4WFduREFUTGJqWlh0SHkxL2ZJVmpjcUtTR1lWa05wQTc5eCt6Y1dsdGJBejhXRjdtdVhHM3FrdXFSMFhWS3lRVkMrYk1kclUzSFVIZi9zQ3NGU2NhalRsYUloWncvMVZ0ZVlWc05CRktqMlQ5U1pHVXZHTlpSUVpiZHRrVlBodGhaMkhCdllHVEhxaUFDeWpOTEliaDlVTVU1TysrcXFFTld5VEtMSi9MTnpxb0xXU0Y3UkVNYTRDeXN4eWV6bFpGOWNKYk4xdU00NUsxTEk2aThERFFNL2svMUkwVldWZ1pZY00yWXZXdTZNMGhBVjkwcnhaZVJ4YVdyVU85T3d3SkpQMFNWQW9jaWs1SEZIeHBXNSttTCtyT2k4YU00TEdUUlNTNytLTTBOeGRsbzJ6eFNMOWhqc3FOVkRvOHorMTltOXFCYU1GeUgzYWhYeGR6ZldHaWRtcDlRZEQ1bGdFUUtNdTIySEF5V3AreU0xaGs1eUdZWTlwa1NDT09KaUVvMVVVUE9neHRUaG9VZ2ZVaVcwdDNDb1p2OW96VndrT1lURFA4bmVNYWFzK2RsMkdwWkhPOHVoemZsaTZHN00rMHpVdGw1MXVGNDVocTdNUjk5Q0FTbEp2Z25FUXBRY05BVFlmYjVPbUNrK0xGUlNVekhzb2cza08xL3FHWTN4UWpoa3loblR5UFRNU01YOFdKalBnaUZMVXh2Tk1BQlVSSGk0RjhKTmlxY2Y2UWZ1QUFBQUFCSlJVNUVya0pnZ2c9PSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhOiBhbnkgPSBsaXN0LmZpbHRlcigoZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaWNvbi5pbmNsdWRlcyhlLmxhYmVsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmljb25TcmMgPSBkYXRhWzBdLmRhdGFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSovXG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICB0aGlzLm5nT25Jbml0KCk7XG4gICAgfVxuXG59XG4iXX0=