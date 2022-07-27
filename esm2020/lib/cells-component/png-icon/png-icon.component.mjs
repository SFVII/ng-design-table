import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
export class PngIconComponent {
    constructor() {
        this.fontSize = '24px';
        this._padding = '5px 13px';
        this._display = 'inline-flex';
        this._size = 'cover';
    }
    ngOnInit() {
        if (this.src) {
            this.icon.nativeElement.style.backgroundImage = `url(${this.src})`;
            this.icon.nativeElement.style.backgroundSize = this._size;
            this.icon.nativeElement.style.display = this._display;
            this.icon.nativeElement.style.width = this.fontSize;
            this.icon.nativeElement.style.height = this.fontSize;
            this.icon.nativeElement.style.padding = this._padding;
            if (this.color) {
                this.icon.nativeElement.style.color = this.color;
            }
        }
    }
}
PngIconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PngIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PngIconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: PngIconComponent, selector: "png-icon", inputs: { src: "src", fontSize: "fontSize", color: "color" }, viewQueries: [{ propertyName: "icon", first: true, predicate: ["icon"], descendants: true, static: true }], ngImport: i0, template: "<span #icon>\n\n</span>", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PngIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'png-icon', template: "<span #icon>\n\n</span>", styles: [""] }]
        }], ctorParameters: function () { return []; }, propDecorators: { src: [{
                type: Input
            }], fontSize: [{
                type: Input
            }], color: [{
                type: Input
            }], icon: [{
                type: ViewChild,
                args: ['icon', { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG5nLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvcG5nLWljb24vcG5nLWljb24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvcG5nLWljb24vcG5nLWljb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFPOUUsTUFBTSxPQUFPLGdCQUFnQjtJQVN6QjtRQVBTLGFBQVEsR0FBRyxNQUFNLENBQUM7UUFHbkIsYUFBUSxHQUFHLFVBQVUsQ0FBQztRQUN0QixhQUFRLEdBQUcsYUFBYSxDQUFDO1FBQ3pCLFVBQUssR0FBRyxPQUFPLENBQUM7SUFHeEIsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDVixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLE9BQU8sSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ25FLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUMxRCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3BELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDdEQsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUNwRDtTQUNKO0lBQ0wsQ0FBQzs7OEdBeEJRLGdCQUFnQjtrR0FBaEIsZ0JBQWdCLDBOQ1A3Qix5QkFFTzs0RkRLTSxnQkFBZ0I7a0JBTDVCLFNBQVM7K0JBQ0ksVUFBVTswRUFLWCxHQUFHO3NCQUFYLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQzZCLElBQUk7c0JBQXRDLFNBQVM7dUJBQUMsTUFBTSxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BuZy1pY29uJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcG5nLWljb24uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3BuZy1pY29uLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUG5nSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQElucHV0KCkgc3JjOiBzdHJpbmc7XG4gICAgQElucHV0KCkgZm9udFNpemUgPSAnMjRweCc7XG4gICAgQElucHV0KCkgY29sb3I6IHN0cmluZztcbiAgICBAVmlld0NoaWxkKCdpY29uJywge3N0YXRpYzogdHJ1ZX0pIGljb246IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuICAgIHByaXZhdGUgX3BhZGRpbmcgPSAnNXB4IDEzcHgnO1xuICAgIHByaXZhdGUgX2Rpc3BsYXkgPSAnaW5saW5lLWZsZXgnO1xuICAgIHByaXZhdGUgX3NpemUgPSAnY292ZXInO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnNyYykge1xuICAgICAgICAgICAgdGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3RoaXMuc3JjfSlgO1xuICAgICAgICAgICAgdGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZFNpemUgPSB0aGlzLl9zaXplO1xuICAgICAgICAgICAgdGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IHRoaXMuX2Rpc3BsYXk7XG4gICAgICAgICAgICB0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS53aWR0aCA9IHRoaXMuZm9udFNpemU7XG4gICAgICAgICAgICB0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSB0aGlzLmZvbnRTaXplO1xuICAgICAgICAgICAgdGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUucGFkZGluZyA9IHRoaXMuX3BhZGRpbmc7XG4gICAgICAgICAgICBpZiAodGhpcy5jb2xvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLmNvbG9yID0gdGhpcy5jb2xvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiPHNwYW4gI2ljb24+XG5cbjwvc3Bhbj4iXX0=