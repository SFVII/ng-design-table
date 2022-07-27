import { EventEmitter, Inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class TableService {
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
}
TableService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TableService, deps: [{ token: '__NgxDesignTable__' }], target: i0.ɵɵFactoryTarget.Injectable });
TableService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TableService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TableService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: ['__NgxDesignTable__']
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3RhYmxlL3NyYy9saWIvdGFibGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBTS9ELE1BQU0sT0FBTyxZQUFZO0lBS3ZCLFlBQWlELGFBQWtCO1FBQWxCLGtCQUFhLEdBQWIsYUFBYSxDQUFLO1FBRjVELGlCQUFZLEdBQTJCLElBQUksWUFBWSxFQUFXLENBQUE7UUFDbEUsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUV0QixJQUFJLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQztJQUM5QixDQUFDO0lBRU0sU0FBUyxDQUFDLGFBQWlCO1FBQ2hDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7OzBHQVpVLFlBQVksa0JBS0gsb0JBQW9COzhHQUw3QixZQUFZLGNBRlgsTUFBTTs0RkFFUCxZQUFZO2tCQUh4QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7MEJBTWMsTUFBTTsyQkFBQyxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0V2ZW50RW1pdHRlciwgSW5qZWN0LCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGVzaWduVGFibGVJbnRlcmZhY2V9IGZyb20gXCIuL3NldHRpbmcvQ29uZmlnLmludGVyZmFjZVwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUYWJsZVNlcnZpY2Uge1xuICBwdWJsaWMgY29uZmlnOiBEZXNpZ25UYWJsZUludGVyZmFjZTtcbiAgcHVibGljIGRpc3BsYXlDb2x1bW4gOiBhbnk7XG4gIHB1YmxpYyB1cGRhdGVIZWFkZXIgOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KClcbiAgcHVibGljIGVtcHR5Um93ID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ19fTmd4RGVzaWduVGFibGVfXycpIHB1YmxpYyBzZXR0aW5nQ29uZmlnOiBhbnkpIHtcbiAgICB0aGlzLmNvbmZpZyA9IHNldHRpbmdDb25maWc7XG4gIH1cblxuICBwdWJsaWMgc2V0SGVhZGVyKGRpc3BsYXlDb2x1bW46YW55KSB7XG4gICAgdGhpcy5kaXNwbGF5Q29sdW1uID0gZGlzcGxheUNvbHVtbjtcbiAgICB0aGlzLnVwZGF0ZUhlYWRlci5lbWl0KHRydWUpO1xuICB9XG59XG4iXX0=