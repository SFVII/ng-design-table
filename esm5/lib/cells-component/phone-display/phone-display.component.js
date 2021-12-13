import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var PhoneDisplayComponent = /** @class */ (function () {
    function PhoneDisplayComponent() {
    }
    PhoneDisplayComponent.prototype.ngOnInit = function () {
        this.display = this.normalize(this.number);
    };
    PhoneDisplayComponent.prototype.ngOnChanges = function (changes) {
        this.ngOnInit();
    };
    PhoneDisplayComponent.prototype.normalize = function (str) {
        str = (str || '').replace(/[^\d]/g, '');
        if (str.length == 10) {
            return str.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '(+33) $1.$2.$3.$4.$5');
        }
        else if (str.length > 10 && str.length <= 13) {
            if (str.length === 11) {
                str = '0' + str;
            }
            if (str.length === 12 && str.includes('+')) {
                var tmp = str.slice(0, 3);
                var end = str.slice(3, str.length);
                str = tmp + end;
            }
            return str.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '(+$1) $2.$3.$4.$5.$6');
        }
        return null;
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], PhoneDisplayComponent.prototype, "number", void 0);
    PhoneDisplayComponent = __decorate([
        Component({
            selector: 'app-phone-display',
            template: "<strong>{{display || '-'}}</strong>\n",
            styles: [""]
        }),
        __metadata("design:paramtypes", [])
    ], PhoneDisplayComponent);
    return PhoneDisplayComponent;
}());
export { PhoneDisplayComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvbmUtZGlzcGxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jZWxscy1jb21wb25lbnQvcGhvbmUtZGlzcGxheS9waG9uZS1kaXNwbGF5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBT2pGO0lBSUU7SUFDQSxDQUFDO0lBRUQsd0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELDJDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVPLHlDQUFTLEdBQWpCLFVBQWtCLEdBQVc7UUFDM0IsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEMsSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLEVBQUUsRUFBRTtZQUNwQixPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMscUNBQXFDLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztTQUNuRjthQUFNLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxFQUFFLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxFQUFFLEVBQUU7WUFDOUMsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLEVBQUUsRUFBRTtnQkFDckIsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7YUFDakI7WUFDRCxJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssRUFBRSxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQzFDLElBQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixJQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3JDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO2FBQ2pCO1lBQ0QsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLDRDQUE0QyxFQUFFLHNCQUFzQixDQUFDLENBQUM7U0FDMUY7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUEvQlE7UUFBUixLQUFLLEVBQUU7O3lEQUFnQjtJQURiLHFCQUFxQjtRQUxqQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLGlEQUE2Qzs7U0FFOUMsQ0FBQzs7T0FDVyxxQkFBcUIsQ0FrQ2pDO0lBQUQsNEJBQUM7Q0FBQSxBQWxDRCxJQWtDQztTQWxDWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXBob25lLWRpc3BsYXknLFxuICB0ZW1wbGF0ZVVybDogJy4vcGhvbmUtZGlzcGxheS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Bob25lLWRpc3BsYXkuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQaG9uZURpc3BsYXlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIG51bWJlcjogc3RyaW5nO1xuICBwdWJsaWMgZGlzcGxheTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5kaXNwbGF5ID0gdGhpcy5ub3JtYWxpemUodGhpcy5udW1iZXIpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIHRoaXMubmdPbkluaXQoKTtcbiAgfVxuXG4gIHByaXZhdGUgbm9ybWFsaXplKHN0cjogc3RyaW5nKSB7XG4gICAgc3RyID0gKHN0ciB8fCAnJykucmVwbGFjZSgvW15cXGRdL2csICcnKTtcbiAgICBpZiAoc3RyLmxlbmd0aCA9PSAxMCkge1xuICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pLywgJygrMzMpICQxLiQyLiQzLiQ0LiQ1Jyk7XG4gICAgfSBlbHNlIGlmIChzdHIubGVuZ3RoID4gMTAgJiYgc3RyLmxlbmd0aCA8PSAxMykge1xuICAgICAgaWYgKHN0ci5sZW5ndGggPT09IDExKSB7XG4gICAgICAgIHN0ciA9ICcwJyArIHN0cjtcbiAgICAgIH1cbiAgICAgIGlmIChzdHIubGVuZ3RoID09PSAxMiAmJiBzdHIuaW5jbHVkZXMoJysnKSkge1xuICAgICAgICBjb25zdCB0bXAgPSBzdHIuc2xpY2UoMCwgMyk7XG4gICAgICAgIGNvbnN0IGVuZCA9IHN0ci5zbGljZSgzLCBzdHIubGVuZ3RoKTtcbiAgICAgICAgc3RyID0gdG1wICsgZW5kO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkvLCAnKCskMSkgJDIuJDMuJDQuJDUuJDYnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG59XG4iXX0=