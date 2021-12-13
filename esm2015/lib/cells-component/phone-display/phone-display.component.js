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
        str = (str || '').replace(/[^\d]/g, '');
        if (str.length == 10) {
            return str.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '(+33) $1.$2.$3.$4.$5');
        }
        else if (str.length > 10 && str.length <= 13) {
            if (str.length === 11) {
                str = '0' + str;
            }
            if (str.length === 12 && str.includes('+')) {
                const tmp = str.slice(0, 3);
                const end = str.slice(3, str.length);
                str = tmp + end;
            }
            return str.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '(+$1) $2.$3.$4.$5.$6');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvbmUtZGlzcGxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jZWxscy1jb21wb25lbnQvcGhvbmUtZGlzcGxheS9waG9uZS1kaXNwbGF5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBT2pGLElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXFCO0lBSWhDO0lBQ0EsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFTyxTQUFTLENBQUMsR0FBVztRQUMzQixHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4QyxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksRUFBRSxFQUFFO1lBQ3BCLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxxQ0FBcUMsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO1NBQ25GO2FBQU0sSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLEVBQUUsSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLEVBQUUsRUFBRTtZQUM5QyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssRUFBRSxFQUFFO2dCQUNyQixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQzthQUNqQjtZQUNELElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxFQUFFLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDMUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDckMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7YUFDakI7WUFDRCxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsNENBQTRDLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztTQUMxRjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUVGLENBQUE7QUFqQ1U7SUFBUixLQUFLLEVBQUU7O3FEQUFnQjtBQURiLHFCQUFxQjtJQUxqQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsbUJBQW1CO1FBQzdCLGlEQUE2Qzs7S0FFOUMsQ0FBQzs7R0FDVyxxQkFBcUIsQ0FrQ2pDO1NBbENZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcGhvbmUtZGlzcGxheScsXG4gIHRlbXBsYXRlVXJsOiAnLi9waG9uZS1kaXNwbGF5LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGhvbmUtZGlzcGxheS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBob25lRGlzcGxheUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbnVtYmVyOiBzdHJpbmc7XG4gIHB1YmxpYyBkaXNwbGF5OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmRpc3BsYXkgPSB0aGlzLm5vcm1hbGl6ZSh0aGlzLm51bWJlcik7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgdGhpcy5uZ09uSW5pdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBub3JtYWxpemUoc3RyOiBzdHJpbmcpIHtcbiAgICBzdHIgPSAoc3RyIHx8ICcnKS5yZXBsYWNlKC9bXlxcZF0vZywgJycpO1xuICAgIGlmIChzdHIubGVuZ3RoID09IDEwKSB7XG4gICAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkvLCAnKCszMykgJDEuJDIuJDMuJDQuJDUnKTtcbiAgICB9IGVsc2UgaWYgKHN0ci5sZW5ndGggPiAxMCAmJiBzdHIubGVuZ3RoIDw9IDEzKSB7XG4gICAgICBpZiAoc3RyLmxlbmd0aCA9PT0gMTEpIHtcbiAgICAgICAgc3RyID0gJzAnICsgc3RyO1xuICAgICAgfVxuICAgICAgaWYgKHN0ci5sZW5ndGggPT09IDEyICYmIHN0ci5pbmNsdWRlcygnKycpKSB7XG4gICAgICAgIGNvbnN0IHRtcCA9IHN0ci5zbGljZSgwLCAzKTtcbiAgICAgICAgY29uc3QgZW5kID0gc3RyLnNsaWNlKDMsIHN0ci5sZW5ndGgpO1xuICAgICAgICBzdHIgPSB0bXAgKyBlbmQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KS8sICcoKyQxKSAkMi4kMy4kNC4kNS4kNicpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbn1cbiJdfQ==