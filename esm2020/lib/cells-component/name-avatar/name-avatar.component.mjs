import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { TableService } from "../../table.service";
import * as i0 from "@angular/core";
import * as i1 from "../../table.service";
import * as i2 from "@angular/common";
export class NameAvatarComponent {
    constructor(service) {
        this.service = service;
        this.fontSize = '44px';
        this.textSize = '14px';
        this._padding = '4px';
        this._display = 'flex';
        this._borderRadius = '50px';
        this._size = 'cover';
        this.afterInit = false;
        this.defaultFontSize = 12;
        this.defaultDimension = 24;
    }
    ngOnInit() {
        if (this.src && !this.src.includes('assets')) {
            let deg = Math.random() * (10 - 360) + 10;
            /*this.icon.nativeElement.style.backgroundImage = this.service.settingConfig.nameAvatarBackgroundColor; /*`linear-gradient(${deg}deg, #9d107d,
                                                             #8b3391, #7647a0, #5f56a8, #4862ab)`;*/
            this.icon.nativeElement.style.background = '#C2C8D5 0% 0% no-repeat padding-box';
            this.icon.nativeElement.style.borderRadius = this._borderRadius;
            this.icon.nativeElement.style.marginLeft = '16px';
            this.icon.nativeElement.style.display = this._display;
            this.icon.nativeElement.style.width = this.fontSize || '44px';
            this.icon.nativeElement.style.height = this.fontSize || '44px';
            this.icon.nativeElement.style.fontSize = (parseInt(this.fontSize, 0) / 2) + 'px';
            this.icon.nativeElement.style.padding = (parseInt(this.icon.nativeElement.style.fontSize, 0) / 3) + 'px';
            this.icon.nativeElement.style.fontWeight = '900';
            this.icon.nativeElement.style.font = "normal normal 900 " + this.textSize + "/20px 'nexa'";
            this.icon.nativeElement.style.color = '#171F26';
            const tmp = this.src.split(' ');
            this.letter = (tmp[0][0] + (tmp[1] && tmp[1][0] ? tmp[1][0] : tmp[0][1])).toUpperCase();
        }
        else if (this.src && this.src.includes('assets')) {
            //this.icon.nativeElement.style.backgroundImage = this.src;
            /*this.icon.nativeElement.style.borderRadius = this._borderRadius;
            this.icon.nativeElement.style.marginLeft = '16px';
            this.icon.nativeElement.style.display = this._display;
            this.icon.nativeElement.style.width = this.fontSize;
            this.icon.nativeElement.style.height = this.fontSize;
            this.icon.nativeElement.style.padding = (parseInt(this.icon.nativeElement.style.fontSize, 0) / 3) + 'px';*/
        }
        else if (this.afterInit === false) {
            this.afterInit = true;
        }
    }
    ngAfterViewInit() {
        if (this.afterInit) {
            this.ngOnInit();
        }
    }
    getRatio() {
    }
}
NameAvatarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: NameAvatarComponent, deps: [{ token: i1.TableService }], target: i0.ɵɵFactoryTarget.Component });
NameAvatarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: NameAvatarComponent, selector: "name-avatar", inputs: { src: "src", fontSize: "fontSize", textSize: "textSize" }, viewQueries: [{ propertyName: "icon", first: true, predicate: ["avatar"], descendants: true, static: true }], ngImport: i0, template: "<div [ngStyle]=\"src && src.includes('assets') && {'display': 'none'}\" #avatar>\n    {{letter}}\n</div>\n\n<img [src]=\"src\" [ngStyle]=\"{'width': fontSize || '44px', 'height': fontSize || '44px',  'vertical-align': 'middle', 'border-radius': _borderRadius}\" *ngIf=\"src && src.includes('assets')\" />", styles: ["div{align-items:center;justify-content:center;padding:0!important}\n"], directives: [{ type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: NameAvatarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'name-avatar', template: "<div [ngStyle]=\"src && src.includes('assets') && {'display': 'none'}\" #avatar>\n    {{letter}}\n</div>\n\n<img [src]=\"src\" [ngStyle]=\"{'width': fontSize || '44px', 'height': fontSize || '44px',  'vertical-align': 'middle', 'border-radius': _borderRadius}\" *ngIf=\"src && src.includes('assets')\" />", styles: ["div{align-items:center;justify-content:center;padding:0!important}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.TableService }]; }, propDecorators: { src: [{
                type: Input
            }], fontSize: [{
                type: Input
            }], textSize: [{
                type: Input
            }], icon: [{
                type: ViewChild,
                args: ['avatar', { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtZS1hdmF0YXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvbmFtZS1hdmF0YXIvbmFtZS1hdmF0YXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvbmFtZS1hdmF0YXIvbmFtZS1hdmF0YXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDN0YsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHFCQUFxQixDQUFDOzs7O0FBT2pELE1BQU0sT0FBTyxtQkFBbUI7SUFjNUIsWUFBb0IsT0FBc0I7UUFBdEIsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQVpqQyxhQUFRLEdBQUcsTUFBTSxDQUFDO1FBQ2xCLGFBQVEsR0FBRyxNQUFNLENBQUM7UUFHbkIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixhQUFRLEdBQUcsTUFBTSxDQUFDO1FBQ25CLGtCQUFhLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLFVBQUssR0FBRyxPQUFPLENBQUM7UUFDaEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNyQixxQkFBZ0IsR0FBRyxFQUFFLENBQUM7SUFHOUIsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUMxQyxJQUFJLEdBQUcsR0FBVyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFD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STtzQkFBeEMsU0FBUzt1QkFBQyxRQUFRLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RhYmxlU2VydmljZX0gZnJvbSBcIi4uLy4uL3RhYmxlLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduYW1lLWF2YXRhcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL25hbWUtYXZhdGFyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9uYW1lLWF2YXRhci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5hbWVBdmF0YXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICAgIEBJbnB1dCgpIHNyYzogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGZvbnRTaXplID0gJzQ0cHgnO1xuICAgIEBJbnB1dCgpIHRleHRTaXplID0gJzE0cHgnO1xuICAgIEBWaWV3Q2hpbGQoJ2F2YXRhcicsIHtzdGF0aWM6IHRydWV9KSBpY29uOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcbiAgICBwdWJsaWMgbGV0dGVyOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfcGFkZGluZyA9ICc0cHgnO1xuICAgIHByaXZhdGUgX2Rpc3BsYXkgPSAnZmxleCc7XG4gICAgcHVibGljIF9ib3JkZXJSYWRpdXMgPSAnNTBweCc7XG4gICAgcHJpdmF0ZSBfc2l6ZSA9ICdjb3Zlcic7XG4gICAgcHJpdmF0ZSBhZnRlckluaXQgPSBmYWxzZTtcbiAgICBwcml2YXRlIGRlZmF1bHRGb250U2l6ZSA9IDEyO1xuICAgIHByaXZhdGUgZGVmYXVsdERpbWVuc2lvbiA9IDI0O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlIDogVGFibGVTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnNyYyAmJiAhdGhpcy5zcmMuaW5jbHVkZXMoJ2Fzc2V0cycpKSB7XG4gICAgICAgICAgICBsZXQgZGVnOiBudW1iZXIgPSBNYXRoLnJhbmRvbSgpICogKDEwIC0gMzYwKSArIDEwO1xuICAgICAgICAgICAgLyp0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSB0aGlzLnNlcnZpY2Uuc2V0dGluZ0NvbmZpZy5uYW1lQXZhdGFyQmFja2dyb3VuZENvbG9yOyAvKmBsaW5lYXItZ3JhZGllbnQoJHtkZWd9ZGVnLCAjOWQxMDdkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICM4YjMzOTEsICM3NjQ3YTAsICM1ZjU2YTgsICM0ODYyYWIpYDsqL1xuICAgICAgICAgICAgdGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9ICcjQzJDOEQ1IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveCc7XG4gICAgICAgICAgICB0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS5ib3JkZXJSYWRpdXMgPSB0aGlzLl9ib3JkZXJSYWRpdXM7XG4gICAgICAgICAgICB0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS5tYXJnaW5MZWZ0ID0gJzE2cHgnO1xuICAgICAgICAgICAgdGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IHRoaXMuX2Rpc3BsYXk7XG4gICAgICAgICAgICB0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS53aWR0aCA9IHRoaXMuZm9udFNpemUgfHwgJzQ0cHgnO1xuICAgICAgICAgICAgdGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gdGhpcy5mb250U2l6ZSB8fCAnNDRweCc7XG4gICAgICAgICAgICB0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS5mb250U2l6ZSA9IChwYXJzZUludCh0aGlzLmZvbnRTaXplLCAwKSAvIDIpICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLnBhZGRpbmcgPSAocGFyc2VJbnQodGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZm9udFNpemUsIDApIC8gMykgKyAncHgnO1xuICAgICAgICAgICAgdGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZm9udFdlaWdodCA9ICc5MDAnO1xuICAgICAgICAgICAgdGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZm9udCA9IFwibm9ybWFsIG5vcm1hbCA5MDAgXCIrdGhpcy50ZXh0U2l6ZStcIi8yMHB4ICduZXhhJ1wiO1xuICAgICAgICAgICAgdGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUuY29sb3IgPSAnIzE3MUYyNic7XG4gICAgICAgICAgICBjb25zdCB0bXA6IHN0cmluZ1tdID0gdGhpcy5zcmMuc3BsaXQoJyAnKTtcbiAgICAgICAgICAgIHRoaXMubGV0dGVyID0gKHRtcFswXVswXSArICh0bXBbMV0gJiYgdG1wWzFdWzBdID8gdG1wWzFdWzBdIDogdG1wWzBdWzFdKSkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNyYyAmJiB0aGlzLnNyYy5pbmNsdWRlcygnYXNzZXRzJykpIHtcbiAgICAgICAgICAgIC8vdGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gdGhpcy5zcmM7XG4gICAgICAgICAgICAvKnRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLmJvcmRlclJhZGl1cyA9IHRoaXMuX2JvcmRlclJhZGl1cztcbiAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLm1hcmdpbkxlZnQgPSAnMTZweCc7XG4gICAgICAgICAgICB0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gdGhpcy5fZGlzcGxheTtcbiAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLndpZHRoID0gdGhpcy5mb250U2l6ZTtcbiAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IHRoaXMuZm9udFNpemU7XG4gICAgICAgICAgICB0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS5wYWRkaW5nID0gKHBhcnNlSW50KHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLmZvbnRTaXplLCAwKSAvIDMpICsgJ3B4JzsqL1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYWZ0ZXJJbml0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5hZnRlckluaXQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5hZnRlckluaXQpIHtcbiAgICAgICAgICAgIHRoaXMubmdPbkluaXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFJhdGlvKCkge1xuXG4gICAgfVxuXG59XG4iLCI8ZGl2IFtuZ1N0eWxlXT1cInNyYyAmJiBzcmMuaW5jbHVkZXMoJ2Fzc2V0cycpICYmIHsnZGlzcGxheSc6ICdub25lJ31cIiAjYXZhdGFyPlxuICAgIHt7bGV0dGVyfX1cbjwvZGl2PlxuXG48aW1nIFtzcmNdPVwic3JjXCIgW25nU3R5bGVdPVwieyd3aWR0aCc6IGZvbnRTaXplIHx8ICc0NHB4JywgJ2hlaWdodCc6IGZvbnRTaXplIHx8ICc0NHB4JywgICd2ZXJ0aWNhbC1hbGlnbic6ICdtaWRkbGUnLCAnYm9yZGVyLXJhZGl1cyc6IF9ib3JkZXJSYWRpdXN9XCIgKm5nSWY9XCJzcmMgJiYgc3JjLmluY2x1ZGVzKCdhc3NldHMnKVwiIC8+Il19