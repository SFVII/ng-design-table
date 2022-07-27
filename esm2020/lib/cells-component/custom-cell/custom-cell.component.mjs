import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class CustomCellComponent {
    constructor() { }
    ngOnInit() {
    }
}
CustomCellComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: CustomCellComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CustomCellComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: CustomCellComponent, selector: "lib-custom-cell", inputs: { title: "title", subTitle: "subTitle", class: "class" }, ngImport: i0, template: "<div class=\"custom-cell\" [class]=\"class\">\n    <span>{{title}}</span>\n    <span *ngIf=\"!!subTitle\">{{subTitle}}</span>\n</div>", styles: [""], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: CustomCellComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-custom-cell', template: "<div class=\"custom-cell\" [class]=\"class\">\n    <span>{{title}}</span>\n    <span *ngIf=\"!!subTitle\">{{subTitle}}</span>\n</div>", styles: [""] }]
        }], ctorParameters: function () { return []; }, propDecorators: { title: [{
                type: Input
            }], subTitle: [{
                type: Input
            }], class: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWNlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvY3VzdG9tLWNlbGwvY3VzdG9tLWNlbGwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvY3VzdG9tLWNlbGwvY3VzdG9tLWNlbGwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7OztBQU96RCxNQUFNLE9BQU8sbUJBQW1CO0lBSTlCLGdCQUFnQixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOztpSEFQVSxtQkFBbUI7cUdBQW5CLG1CQUFtQix5SENQaEMsdUlBR007NEZESU8sbUJBQW1CO2tCQUwvQixTQUFTOytCQUNFLGlCQUFpQjswRUFLbEIsS0FBSztzQkFBYixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1jdXN0b20tY2VsbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jdXN0b20tY2VsbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2N1c3RvbS1jZWxsLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21DZWxsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgc3ViVGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgY2xhc3M6IHN0cmluZztcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiY3VzdG9tLWNlbGxcIiBbY2xhc3NdPVwiY2xhc3NcIj5cbiAgICA8c3Bhbj57e3RpdGxlfX08L3NwYW4+XG4gICAgPHNwYW4gKm5nSWY9XCIhIXN1YlRpdGxlXCI+e3tzdWJUaXRsZX19PC9zcGFuPlxuPC9kaXY+Il19