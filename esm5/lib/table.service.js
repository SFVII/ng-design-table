import { __decorate, __metadata, __param } from "tslib";
import { EventEmitter, Inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var TableService = /** @class */ (function () {
    function TableService(settingConfig) {
        this.settingConfig = settingConfig;
        this.updateHeader = new EventEmitter();
        this.emptyRow = false;
        this.config = settingConfig;
    }
    TableService.prototype.setHeader = function (displayColumn) {
        this.displayColumn = displayColumn;
        this.updateHeader.emit(true);
    };
    TableService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['__NgxDesignTable__',] }] }
    ]; };
    TableService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TableService_Factory() { return new TableService(i0.ɵɵinject("__NgxDesignTable__")); }, token: TableService, providedIn: "root" });
    TableService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __param(0, Inject('__NgxDesignTable__')),
        __metadata("design:paramtypes", [Object])
    ], TableService);
    return TableService;
}());
export { TableService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RhYmxlLyIsInNvdXJjZXMiOlsibGliL3RhYmxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFNL0Q7SUFLRSxzQkFBaUQsYUFBa0I7UUFBbEIsa0JBQWEsR0FBYixhQUFhLENBQUs7UUFGNUQsaUJBQVksR0FBMkIsSUFBSSxZQUFZLEVBQVcsQ0FBQTtRQUNsRSxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRXRCLElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDO0lBQzlCLENBQUM7SUFFTSxnQ0FBUyxHQUFoQixVQUFpQixhQUFpQjtRQUNoQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDOztnREFQWSxNQUFNLFNBQUMsb0JBQW9COzs7SUFMN0IsWUFBWTtRQUh4QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO1FBTWEsV0FBQSxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQTs7T0FMOUIsWUFBWSxDQWF4Qjt1QkFuQkQ7Q0FtQkMsQUFiRCxJQWFDO1NBYlksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXZlbnRFbWl0dGVyLCBJbmplY3QsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEZXNpZ25UYWJsZUludGVyZmFjZX0gZnJvbSBcIi4vc2V0dGluZy9Db25maWcuaW50ZXJmYWNlXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlU2VydmljZSB7XG4gIHB1YmxpYyBjb25maWc6IERlc2lnblRhYmxlSW50ZXJmYWNlO1xuICBwdWJsaWMgZGlzcGxheUNvbHVtbiA6IGFueTtcbiAgcHVibGljIHVwZGF0ZUhlYWRlciA6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKVxuICBwdWJsaWMgZW1wdHlSb3cgPSBmYWxzZTtcbiAgY29uc3RydWN0b3IoQEluamVjdCgnX19OZ3hEZXNpZ25UYWJsZV9fJykgcHVibGljIHNldHRpbmdDb25maWc6IGFueSkge1xuICAgIHRoaXMuY29uZmlnID0gc2V0dGluZ0NvbmZpZztcbiAgfVxuXG4gIHB1YmxpYyBzZXRIZWFkZXIoZGlzcGxheUNvbHVtbjphbnkpIHtcbiAgICB0aGlzLmRpc3BsYXlDb2x1bW4gPSBkaXNwbGF5Q29sdW1uO1xuICAgIHRoaXMudXBkYXRlSGVhZGVyLmVtaXQodHJ1ZSk7XG4gIH1cbn1cbiJdfQ==