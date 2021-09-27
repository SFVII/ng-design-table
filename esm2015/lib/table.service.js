import { __decorate, __metadata, __param } from "tslib";
import { EventEmitter, Inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
let TableService = class TableService {
    constructor(settingConfig) {
        this.settingConfig = settingConfig;
        this.updateHeader = new EventEmitter();
        this.emptyRow = false;
        this.config = settingConfig;
    }
    setHeader(displayColumn) {
        this.displayColumn = displayColumn;
        this.updateHeader.emit(true);
    }
};
TableService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['__NgxDesignTable__',] }] }
];
TableService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TableService_Factory() { return new TableService(i0.ɵɵinject("__NgxDesignTable__")); }, token: TableService, providedIn: "root" });
TableService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __param(0, Inject('__NgxDesignTable__')),
    __metadata("design:paramtypes", [Object])
], TableService);
export { TableService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RhYmxlLyIsInNvdXJjZXMiOlsibGliL3RhYmxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFNL0QsSUFBYSxZQUFZLEdBQXpCLE1BQWEsWUFBWTtJQUt2QixZQUFpRCxhQUFrQjtRQUFsQixrQkFBYSxHQUFiLGFBQWEsQ0FBSztRQUY1RCxpQkFBWSxHQUEyQixJQUFJLFlBQVksRUFBVyxDQUFBO1FBQ2xFLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUM7SUFDOUIsQ0FBQztJQUVNLFNBQVMsQ0FBQyxhQUFpQjtRQUNoQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0NBQ0YsQ0FBQTs7NENBUmMsTUFBTSxTQUFDLG9CQUFvQjs7O0FBTDdCLFlBQVk7SUFIeEIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztJQU1hLFdBQUEsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUE7O0dBTDlCLFlBQVksQ0FheEI7U0FiWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFdmVudEVtaXR0ZXIsIEluamVjdCwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Rlc2lnblRhYmxlSW50ZXJmYWNlfSBmcm9tIFwiLi9zZXR0aW5nL0NvbmZpZy5pbnRlcmZhY2VcIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVTZXJ2aWNlIHtcbiAgcHVibGljIGNvbmZpZzogRGVzaWduVGFibGVJbnRlcmZhY2U7XG4gIHB1YmxpYyBkaXNwbGF5Q29sdW1uIDogYW55O1xuICBwdWJsaWMgdXBkYXRlSGVhZGVyIDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpXG4gIHB1YmxpYyBlbXB0eVJvdyA9IGZhbHNlO1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdfX05neERlc2lnblRhYmxlX18nKSBwdWJsaWMgc2V0dGluZ0NvbmZpZzogYW55KSB7XG4gICAgdGhpcy5jb25maWcgPSBzZXR0aW5nQ29uZmlnO1xuICB9XG5cbiAgcHVibGljIHNldEhlYWRlcihkaXNwbGF5Q29sdW1uOmFueSkge1xuICAgIHRoaXMuZGlzcGxheUNvbHVtbiA9IGRpc3BsYXlDb2x1bW47XG4gICAgdGhpcy51cGRhdGVIZWFkZXIuZW1pdCh0cnVlKTtcbiAgfVxufVxuIl19