import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { isValidPhoneNumber, parsePhoneNumber } from 'libphonenumber-js';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../ngx-flag/ngx-flag.component";
export class PhoneDisplayComponent {
    constructor(fb) {
        this.fb = fb;
        this.flag = '';
    }
    ngOnInit() {
        this.display = this.normalize(this.number);
        this.flag = (this.number && this.number != '' && isValidPhoneNumber(this.number) ? parsePhoneNumber(this.number).country : 'FR');
        this.flag = !this.number ? '' : this.flag;
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
    normalize(str) {
        if (str && isValidPhoneNumber(str)) {
            return parsePhoneNumber(str).formatNational();
        }
        else if (str) {
            const phone = parsePhoneNumber(str, 'FR');
            if (phone.isValid()) {
                return phone.formatNational();
            }
            else {
                return '';
            }
        }
        else {
            return '';
        }
        str = (str || '').replace(/[^\d]/g, "");
        if (str.length == 10) {
            //reformat and return phone number
            return str.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "(+33) $1.$2.$3.$4.$5");
        }
        else if (str.length > 10 && str.length <= 13) {
            if (str.length === 11) {
                //str = '0'+str;
            }
            //if ( str.length === 13 && str.includes('+')) {
            let tmp = str.slice(2, 3);
            let end = str.slice(3, str.length);
            str = '0' + tmp + end;
            //}
            //return str.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "(+$1) $2.$3.$4.$5.$6");
            return str.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "$1.$2.$3.$4.$5");
        }
        return null;
    }
}
PhoneDisplayComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PhoneDisplayComponent, deps: [{ token: i1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component });
PhoneDisplayComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: PhoneDisplayComponent, selector: "app-phone-display", inputs: { number: "number" }, usesOnChanges: true, ngImport: i0, template: "<flag [country]=\"flag\"></flag> <strong>{{display || '-'}}</strong>\n", styles: [""], components: [{ type: i2.NgxFlagsComponent, selector: "flag", inputs: ["country", "format", "size", "class"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PhoneDisplayComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-phone-display', template: "<flag [country]=\"flag\"></flag> <strong>{{display || '-'}}</strong>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1.FormBuilder }]; }, propDecorators: { number: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvbmUtZGlzcGxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90YWJsZS9zcmMvbGliL2NlbGxzLWNvbXBvbmVudC9waG9uZS1kaXNwbGF5L3Bob25lLWRpc3BsYXkuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvcGhvbmUtZGlzcGxheS9waG9uZS1kaXNwbGF5LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFvQyxNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQUUsV0FBVyxFQUEwQixNQUFNLGdCQUFnQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxrQkFBa0IsRUFBUyxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7O0FBT2hGLE1BQU0sT0FBTyxxQkFBcUI7SUFLaEMsWUFDVSxFQUFlO1FBQWYsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUh6QixTQUFJLEdBQUcsRUFBRSxDQUFDO0lBSVYsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBRTFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksRUFBRSxJQUFJLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakksSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUM1QyxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRU8sU0FBUyxDQUFDLEdBQVc7UUFDM0IsSUFBSSxHQUFHLElBQUksa0JBQWtCLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDbEMsT0FBTyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUMvQzthQUFNLElBQUksR0FBRyxFQUFFO1lBQ2QsTUFBTSxLQUFLLEdBQUcsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzFDLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFFO2dCQUNuQixPQUFPLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUMvQjtpQkFBTTtnQkFDTCxPQUFPLEVBQUUsQ0FBQzthQUNYO1NBQ0Y7YUFBTTtZQUNMLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFDRCxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4QyxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksRUFBRSxFQUFFO1lBQ3BCLGtDQUFrQztZQUNsQyxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMscUNBQXFDLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztTQUNuRjthQUFNLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxFQUFFLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxFQUFFLEVBQUU7WUFDOUMsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLEVBQUUsRUFBRTtnQkFDckIsZ0JBQWdCO2FBQ2pCO1lBQ0QsZ0RBQWdEO1lBQ2hELElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7WUFDdEIsR0FBRztZQUNILDJGQUEyRjtZQUMzRixPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMscUNBQXFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztTQUM3RTtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7bUhBbkRVLHFCQUFxQjt1R0FBckIscUJBQXFCLDRHQ1RsQyx3RUFDQTs0RkRRYSxxQkFBcUI7a0JBTGpDLFNBQVM7K0JBQ0UsbUJBQW1CO2tHQUtwQixNQUFNO3NCQUFkLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Db250cm9sLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBpc1ZhbGlkUGhvbmVOdW1iZXIsIHBhcnNlLCBwYXJzZVBob25lTnVtYmVyIH0gZnJvbSAnbGlicGhvbmVudW1iZXItanMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcGhvbmUtZGlzcGxheScsXG4gIHRlbXBsYXRlVXJsOiAnLi9waG9uZS1kaXNwbGF5LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGhvbmUtZGlzcGxheS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBob25lRGlzcGxheUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbnVtYmVyOiBzdHJpbmc7XG4gIHB1YmxpYyBkaXNwbGF5OiBzdHJpbmc7XG4gIGZsYWcgPSAnJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcikge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5kaXNwbGF5ID0gdGhpcy5ub3JtYWxpemUodGhpcy5udW1iZXIpXG5cbiAgICB0aGlzLmZsYWcgPSAodGhpcy5udW1iZXIgJiYgdGhpcy5udW1iZXIgIT0gJycgJiYgaXNWYWxpZFBob25lTnVtYmVyKHRoaXMubnVtYmVyKSA/IHBhcnNlUGhvbmVOdW1iZXIodGhpcy5udW1iZXIpLmNvdW50cnkgOiAnRlInKTtcbiAgICB0aGlzLmZsYWcgPSAhdGhpcy5udW1iZXIgPyAnJyA6IHRoaXMuZmxhZztcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICB0aGlzLm5nT25Jbml0KCk7XG4gIH1cblxuICBwcml2YXRlIG5vcm1hbGl6ZShzdHI6IHN0cmluZykge1xuICAgIGlmIChzdHIgJiYgaXNWYWxpZFBob25lTnVtYmVyKHN0cikpIHtcbiAgICAgIHJldHVybiBwYXJzZVBob25lTnVtYmVyKHN0cikuZm9ybWF0TmF0aW9uYWwoKTtcbiAgICB9IGVsc2UgaWYgKHN0cikge1xuICAgICAgY29uc3QgcGhvbmUgPSBwYXJzZVBob25lTnVtYmVyKHN0ciwgJ0ZSJyk7XG4gICAgICBpZiAocGhvbmUuaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiBwaG9uZS5mb3JtYXROYXRpb25hbCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHN0ciA9IChzdHIgfHwgJycpLnJlcGxhY2UoL1teXFxkXS9nLCBcIlwiKTtcbiAgICBpZiAoc3RyLmxlbmd0aCA9PSAxMCkge1xuICAgICAgLy9yZWZvcm1hdCBhbmQgcmV0dXJuIHBob25lIG51bWJlclxuICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pLywgXCIoKzMzKSAkMS4kMi4kMy4kNC4kNVwiKTtcbiAgICB9IGVsc2UgaWYgKHN0ci5sZW5ndGggPiAxMCAmJiBzdHIubGVuZ3RoIDw9IDEzKSB7XG4gICAgICBpZiAoc3RyLmxlbmd0aCA9PT0gMTEpIHtcbiAgICAgICAgLy9zdHIgPSAnMCcrc3RyO1xuICAgICAgfVxuICAgICAgLy9pZiAoIHN0ci5sZW5ndGggPT09IDEzICYmIHN0ci5pbmNsdWRlcygnKycpKSB7XG4gICAgICBsZXQgdG1wID0gc3RyLnNsaWNlKDIsIDMpO1xuICAgICAgbGV0IGVuZCA9IHN0ci5zbGljZSgzLCBzdHIubGVuZ3RoKTtcbiAgICAgIHN0ciA9ICcwJyArIHRtcCArIGVuZDtcbiAgICAgIC8vfVxuICAgICAgLy9yZXR1cm4gc3RyLnJlcGxhY2UoLyhcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KS8sIFwiKCskMSkgJDIuJDMuJDQuJDUuJDZcIik7XG4gICAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkvLCBcIiQxLiQyLiQzLiQ0LiQ1XCIpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iLCI8ZmxhZyBbY291bnRyeV09XCJmbGFnXCI+PC9mbGFnPiA8c3Ryb25nPnt7ZGlzcGxheSB8fCAnLSd9fTwvc3Ryb25nPlxuIl19