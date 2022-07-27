import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let PhoneDisplayComponent = class PhoneDisplayComponent {
    constructor() {
    }
    ngOnInit() {
        this.display = this.normalize(this.number);
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
    normalize(str) {
        str = (str || '').replace(/[^\d]/g, "");
        if (str.length == 10) {
            //reformat and return phone number
            return str.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "(+33) $1.$2.$3.$4.$5");
        }
        else if (str.length > 10 && str.length <= 13) {
            if (str.length === 11) {
                str = '0' + str;
            }
            if (str.length === 13 && str.includes('+')) {
                let tmp = str.slice(0, 3);
                let end = str.slice(3, str.length);
                str = tmp + '0' + end;
            }
            return str.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "(+$1) $2.$3.$4.$5.$6");
        }
        return null;
    }
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
export { PhoneDisplayComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvbmUtZGlzcGxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jZWxscy1jb21wb25lbnQvcGhvbmUtZGlzcGxheS9waG9uZS1kaXNwbGF5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBT2pGLElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXFCO0lBSTlCO0lBQ0EsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQzlDLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDOUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFTyxTQUFTLENBQUMsR0FBVztRQUN6QixHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4QyxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksRUFBRSxFQUFFO1lBQ2xCLGtDQUFrQztZQUNsQyxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMscUNBQXFDLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztTQUNyRjthQUFNLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxFQUFFLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxFQUFFLEVBQUU7WUFDNUMsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLEVBQUUsRUFBRTtnQkFDbkIsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLENBQUM7YUFDakI7WUFDRCxJQUFLLEdBQUcsQ0FBQyxNQUFNLEtBQUssRUFBRSxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3pDLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ25DLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQzthQUN6QjtZQUNELE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyw0Q0FBNEMsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO1NBQzVGO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztDQUVKLENBQUE7QUFsQ1k7SUFBUixLQUFLLEVBQUU7O3FEQUFnQjtBQURmLHFCQUFxQjtJQUxqQyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsbUJBQW1CO1FBQzdCLGlEQUE2Qzs7S0FFaEQsQ0FBQzs7R0FDVyxxQkFBcUIsQ0FtQ2pDO1NBbkNZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1waG9uZS1kaXNwbGF5JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcGhvbmUtZGlzcGxheS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vcGhvbmUtZGlzcGxheS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBob25lRGlzcGxheUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgICBASW5wdXQoKSBudW1iZXI6IHN0cmluZztcbiAgICBwdWJsaWMgZGlzcGxheTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGlzcGxheSA9IHRoaXMubm9ybWFsaXplKHRoaXMubnVtYmVyKVxuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5uZ09uSW5pdCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgbm9ybWFsaXplKHN0cjogc3RyaW5nKSB7XG4gICAgICAgIHN0ciA9IChzdHIgfHwgJycpLnJlcGxhY2UoL1teXFxkXS9nLCBcIlwiKTtcbiAgICAgICAgaWYgKHN0ci5sZW5ndGggPT0gMTApIHtcbiAgICAgICAgICAgIC8vcmVmb3JtYXQgYW5kIHJldHVybiBwaG9uZSBudW1iZXJcbiAgICAgICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KS8sIFwiKCszMykgJDEuJDIuJDMuJDQuJDVcIik7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RyLmxlbmd0aCA+IDEwICYmIHN0ci5sZW5ndGggPD0gMTMpIHtcbiAgICAgICAgICAgIGlmIChzdHIubGVuZ3RoID09PSAxMSkge1xuICAgICAgICAgICAgICAgIHN0ciA9ICcwJytzdHI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIHN0ci5sZW5ndGggPT09IDEzICYmIHN0ci5pbmNsdWRlcygnKycpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRtcCA9IHN0ci5zbGljZSgwLCAzKTtcbiAgICAgICAgICAgICAgICBsZXQgZW5kID0gc3RyLnNsaWNlKDMsIHN0ci5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIHN0ciA9IHRtcCArICcwJyArIGVuZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pLywgXCIoKyQxKSAkMi4kMy4kNC4kNS4kNlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxufVxuIl19