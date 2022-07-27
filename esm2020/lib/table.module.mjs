import { NgModule, Optional, SkipSelf } from '@angular/core';
import { TableComponent } from './table.component';
import { CustomerRankComponent } from "./cells-component/customer-rank/customer-rank.component";
import { DateFormatComponent } from "./cells-component/date-format/date-format.component";
import { EquipementStatusComponent } from "./cells-component/equipement-status/equipement-status.component";
import { EquipementTypeComponent } from "./cells-component/equipement-type/equipement-type.component";
import { GenderComponent } from "./cells-component/gender/gender.component";
import { IsMatIconComponent } from "./cells-component/is-mat-icon/is-mat-icon.component";
import { NameAvatarComponent } from "./cells-component/name-avatar/name-avatar.component";
import { OriginComponent } from "./cells-component/origin/origin.component";
import { PhoneDisplayComponent } from "./cells-component/phone-display/phone-display.component";
import { PngIconModule } from "./cells-component/png-icon/png-icon.module";
import { PriorityComponent } from "./cells-component/priority/priority.component";
import { YesNoComponent } from "./cells-component/yes-no/yes-no.component";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatTooltipModule } from "@angular/material/tooltip";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { RouterModule } from "@angular/router";
import { MatBadgeModule } from "@angular/material/badge";
import { TableService } from "./table.service";
import { NgxFlagsComponent } from './cells-component/ngx-flag/ngx-flag.component';
import { ButtonLinkTextComponent } from './cells-component/button-link-text/button-link-text.component';
import { CustomCellComponent } from './cells-component/custom-cell/custom-cell.component';
import { MenuComponent } from './cells-component/menu/menu.component';
import * as i0 from "@angular/core";
export class TableModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('TableModule is already loaded. Import it in the AppModule only');
        }
    }
    static forRoot(config) {
        return {
            ngModule: TableModule,
            providers: [
                { provide: '__NgxDesignTable__', useValue: config },
                TableService
            ]
        };
    }
}
TableModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TableModule, deps: [{ token: TableModule, optional: true, skipSelf: true }], target: i0.ɵɵFactoryTarget.NgModule });
TableModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TableModule, declarations: [TableComponent,
        CustomerRankComponent,
        DateFormatComponent,
        EquipementStatusComponent,
        EquipementTypeComponent,
        GenderComponent,
        IsMatIconComponent,
        NameAvatarComponent,
        OriginComponent,
        PhoneDisplayComponent,
        PriorityComponent,
        YesNoComponent,
        NgxFlagsComponent,
        ButtonLinkTextComponent,
        CustomCellComponent,
        MenuComponent], imports: [PngIconModule,
        MatPaginatorModule,
        MatTableModule,
        MatSortModule,
        MatTooltipModule,
        CommonModule,
        MatIconModule,
        RouterModule,
        MatBadgeModule,
        MatMenuModule], exports: [TableComponent,
        CustomerRankComponent,
        DateFormatComponent,
        EquipementStatusComponent,
        EquipementTypeComponent,
        GenderComponent,
        IsMatIconComponent,
        NameAvatarComponent,
        OriginComponent,
        PhoneDisplayComponent,
        PriorityComponent,
        YesNoComponent,
        PngIconModule,
        MatPaginatorModule,
        MatTableModule,
        MatSortModule,
        MatTooltipModule,
        CommonModule,
        MatIconModule,
        RouterModule,
        MatBadgeModule,
        MatMenuModule,
        NgxFlagsComponent] });
TableModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TableModule, imports: [[
            PngIconModule,
            MatPaginatorModule,
            MatTableModule,
            MatSortModule,
            MatTooltipModule,
            CommonModule,
            MatIconModule,
            RouterModule,
            MatBadgeModule,
            MatMenuModule
        ], PngIconModule,
        MatPaginatorModule,
        MatTableModule,
        MatSortModule,
        MatTooltipModule,
        CommonModule,
        MatIconModule,
        RouterModule,
        MatBadgeModule,
        MatMenuModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TableModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        TableComponent,
                        CustomerRankComponent,
                        DateFormatComponent,
                        EquipementStatusComponent,
                        EquipementTypeComponent,
                        GenderComponent,
                        IsMatIconComponent,
                        NameAvatarComponent,
                        OriginComponent,
                        PhoneDisplayComponent,
                        PriorityComponent,
                        YesNoComponent,
                        NgxFlagsComponent,
                        ButtonLinkTextComponent,
                        CustomCellComponent,
                        MenuComponent
                    ],
                    imports: [
                        PngIconModule,
                        MatPaginatorModule,
                        MatTableModule,
                        MatSortModule,
                        MatTooltipModule,
                        CommonModule,
                        MatIconModule,
                        RouterModule,
                        MatBadgeModule,
                        MatMenuModule
                    ],
                    exports: [
                        TableComponent,
                        CustomerRankComponent,
                        DateFormatComponent,
                        EquipementStatusComponent,
                        EquipementTypeComponent,
                        GenderComponent,
                        IsMatIconComponent,
                        NameAvatarComponent,
                        OriginComponent,
                        PhoneDisplayComponent,
                        PriorityComponent,
                        YesNoComponent,
                        PngIconModule,
                        MatPaginatorModule,
                        MatTableModule,
                        MatSortModule,
                        MatTooltipModule,
                        CommonModule,
                        MatIconModule,
                        RouterModule,
                        MatBadgeModule,
                        MatMenuModule,
                        NgxFlagsComponent
                    ]
                }]
        }], ctorParameters: function () { return [{ type: TableModule, decorators: [{
                    type: Optional
                }, {
                    type: SkipSelf
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi90YWJsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFzQixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0seURBQXlELENBQUM7QUFDOUYsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0scURBQXFELENBQUM7QUFDeEYsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0saUVBQWlFLENBQUM7QUFDMUcsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sNkRBQTZELENBQUM7QUFDcEcsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQzFFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHFEQUFxRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHFEQUFxRCxDQUFDO0FBQ3hGLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUMxRSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSx5REFBeUQsQ0FBQztBQUM5RixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sNENBQTRDLENBQUM7QUFDekUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDaEYsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFN0MsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDaEYsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sK0RBQStELENBQUM7QUFDdEcsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0scURBQXFELENBQUM7QUFDeEYsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHVDQUF1QyxDQUFDOztBQTJEcEUsTUFBTSxPQUFPLFdBQVc7SUFDdEIsWUFBb0MsWUFBMEI7UUFDNUQsSUFBSSxZQUFZLEVBQUU7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FDYixnRUFBZ0UsQ0FBQyxDQUFDO1NBQ3JFO0lBQ0gsQ0FBQztJQUVNLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBNEI7UUFDaEQsT0FBTztZQUNMLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFNBQVMsRUFBRTtnQkFDVCxFQUFDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFDO2dCQUNqRCxZQUFZO2FBQ2I7U0FDRixDQUFDO0lBQ0osQ0FBQzs7eUdBaEJVLFdBQVcsa0JBQzZCLFdBQVc7MEdBRG5ELFdBQVcsaUJBdkRwQixjQUFjO1FBQ2QscUJBQXFCO1FBQ3JCLG1CQUFtQjtRQUNuQix5QkFBeUI7UUFDekIsdUJBQXVCO1FBQ3ZCLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixxQkFBcUI7UUFDckIsaUJBQWlCO1FBQ2pCLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQixhQUFhLGFBR2IsYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2QsYUFBYTtRQUNiLGdCQUFnQjtRQUNoQixZQUFZO1FBQ1osYUFBYTtRQUNiLFlBQVk7UUFDWixjQUFjO1FBQ2QsYUFBYSxhQUdiLGNBQWM7UUFDZCxxQkFBcUI7UUFDckIsbUJBQW1CO1FBQ25CLHlCQUF5QjtRQUN6Qix1QkFBdUI7UUFDdkIsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLHFCQUFxQjtRQUNyQixpQkFBaUI7UUFDakIsY0FBYztRQUNkLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsY0FBYztRQUNkLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLGFBQWE7UUFDYixZQUFZO1FBQ1osY0FBYztRQUNkLGFBQWE7UUFDYixpQkFBaUI7MEdBR1IsV0FBVyxZQXRDYjtZQUNQLGFBQWE7WUFDYixrQkFBa0I7WUFDbEIsY0FBYztZQUNkLGFBQWE7WUFDYixnQkFBZ0I7WUFDaEIsWUFBWTtZQUNaLGFBQWE7WUFDYixZQUFZO1lBQ1osY0FBYztZQUNkLGFBQWE7U0FDZCxFQWNDLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsY0FBYztRQUNkLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLGFBQWE7UUFDYixZQUFZO1FBQ1osY0FBYztRQUNkLGFBQWE7NEZBSUosV0FBVztrQkF6RHZCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGNBQWM7d0JBQ2QscUJBQXFCO3dCQUNyQixtQkFBbUI7d0JBQ25CLHlCQUF5Qjt3QkFDekIsdUJBQXVCO3dCQUN2QixlQUFlO3dCQUNmLGtCQUFrQjt3QkFDbEIsbUJBQW1CO3dCQUNuQixlQUFlO3dCQUNmLHFCQUFxQjt3QkFDckIsaUJBQWlCO3dCQUNqQixjQUFjO3dCQUNkLGlCQUFpQjt3QkFDakIsdUJBQXVCO3dCQUN2QixtQkFBbUI7d0JBQ25CLGFBQWE7cUJBQ2Q7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGFBQWE7d0JBQ2Isa0JBQWtCO3dCQUNsQixjQUFjO3dCQUNkLGFBQWE7d0JBQ2IsZ0JBQWdCO3dCQUNoQixZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsWUFBWTt3QkFDWixjQUFjO3dCQUNkLGFBQWE7cUJBQ2Q7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGNBQWM7d0JBQ2QscUJBQXFCO3dCQUNyQixtQkFBbUI7d0JBQ25CLHlCQUF5Qjt3QkFDekIsdUJBQXVCO3dCQUN2QixlQUFlO3dCQUNmLGtCQUFrQjt3QkFDbEIsbUJBQW1CO3dCQUNuQixlQUFlO3dCQUNmLHFCQUFxQjt3QkFDckIsaUJBQWlCO3dCQUNqQixjQUFjO3dCQUNkLGFBQWE7d0JBQ2Isa0JBQWtCO3dCQUNsQixjQUFjO3dCQUNkLGFBQWE7d0JBQ2IsZ0JBQWdCO3dCQUNoQixZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsWUFBWTt3QkFDWixjQUFjO3dCQUNkLGFBQWE7d0JBQ2IsaUJBQWlCO3FCQUNsQjtpQkFDRjswREFFb0QsV0FBVzswQkFBakQsUUFBUTs7MEJBQUksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RhYmxlQ29tcG9uZW50fSBmcm9tICcuL3RhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQge0N1c3RvbWVyUmFua0NvbXBvbmVudH0gZnJvbSBcIi4vY2VsbHMtY29tcG9uZW50L2N1c3RvbWVyLXJhbmsvY3VzdG9tZXItcmFuay5jb21wb25lbnRcIjtcbmltcG9ydCB7RGF0ZUZvcm1hdENvbXBvbmVudH0gZnJvbSBcIi4vY2VsbHMtY29tcG9uZW50L2RhdGUtZm9ybWF0L2RhdGUtZm9ybWF0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtFcXVpcGVtZW50U3RhdHVzQ29tcG9uZW50fSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQvZXF1aXBlbWVudC1zdGF0dXMvZXF1aXBlbWVudC1zdGF0dXMuY29tcG9uZW50XCI7XG5pbXBvcnQge0VxdWlwZW1lbnRUeXBlQ29tcG9uZW50fSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQvZXF1aXBlbWVudC10eXBlL2VxdWlwZW1lbnQtdHlwZS5jb21wb25lbnRcIjtcbmltcG9ydCB7R2VuZGVyQ29tcG9uZW50fSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQvZ2VuZGVyL2dlbmRlci5jb21wb25lbnRcIjtcbmltcG9ydCB7SXNNYXRJY29uQ29tcG9uZW50fSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQvaXMtbWF0LWljb24vaXMtbWF0LWljb24uY29tcG9uZW50XCI7XG5pbXBvcnQge05hbWVBdmF0YXJDb21wb25lbnR9IGZyb20gXCIuL2NlbGxzLWNvbXBvbmVudC9uYW1lLWF2YXRhci9uYW1lLWF2YXRhci5jb21wb25lbnRcIjtcbmltcG9ydCB7T3JpZ2luQ29tcG9uZW50fSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQvb3JpZ2luL29yaWdpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7UGhvbmVEaXNwbGF5Q29tcG9uZW50fSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQvcGhvbmUtZGlzcGxheS9waG9uZS1kaXNwbGF5LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtQbmdJY29uTW9kdWxlfSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQvcG5nLWljb24vcG5nLWljb24ubW9kdWxlXCI7XG5pbXBvcnQge1ByaW9yaXR5Q29tcG9uZW50fSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQvcHJpb3JpdHkvcHJpb3JpdHkuY29tcG9uZW50XCI7XG5pbXBvcnQge1llc05vQ29tcG9uZW50fSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQveWVzLW5vL3llcy1uby5jb21wb25lbnRcIjtcbmltcG9ydCB7TWF0UGFnaW5hdG9yTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yXCI7XG5pbXBvcnQge01hdFRhYmxlTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGVcIjtcbmltcG9ydCB7TWF0U29ydE1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3NvcnRcIjtcbmltcG9ydCB7TWF0VG9vbHRpcE1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXBcIjtcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9pY29uXCI7XG5pbXBvcnQge01hdE1lbnVNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9tZW51XCI7XG5pbXBvcnQge1JvdXRlck1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtNYXRCYWRnZU1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2JhZGdlXCI7XG5pbXBvcnQge1RhYmxlU2VydmljZX0gZnJvbSBcIi4vdGFibGUuc2VydmljZVwiO1xuaW1wb3J0IHtEZXNpZ25UYWJsZUludGVyZmFjZX0gZnJvbSBcIi4vc2V0dGluZy9Db25maWcuaW50ZXJmYWNlXCI7XG5pbXBvcnQge05neEZsYWdzQ29tcG9uZW50fSBmcm9tICcuL2NlbGxzLWNvbXBvbmVudC9uZ3gtZmxhZy9uZ3gtZmxhZy5jb21wb25lbnQnO1xuaW1wb3J0IHtCdXR0b25MaW5rVGV4dENvbXBvbmVudH0gZnJvbSAnLi9jZWxscy1jb21wb25lbnQvYnV0dG9uLWxpbmstdGV4dC9idXR0b24tbGluay10ZXh0LmNvbXBvbmVudCc7XG5pbXBvcnQge0N1c3RvbUNlbGxDb21wb25lbnR9IGZyb20gJy4vY2VsbHMtY29tcG9uZW50L2N1c3RvbS1jZWxsL2N1c3RvbS1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQge01lbnVDb21wb25lbnR9IGZyb20gJy4vY2VsbHMtY29tcG9uZW50L21lbnUvbWVudS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBUYWJsZUNvbXBvbmVudCxcbiAgICBDdXN0b21lclJhbmtDb21wb25lbnQsXG4gICAgRGF0ZUZvcm1hdENvbXBvbmVudCxcbiAgICBFcXVpcGVtZW50U3RhdHVzQ29tcG9uZW50LFxuICAgIEVxdWlwZW1lbnRUeXBlQ29tcG9uZW50LFxuICAgIEdlbmRlckNvbXBvbmVudCxcbiAgICBJc01hdEljb25Db21wb25lbnQsXG4gICAgTmFtZUF2YXRhckNvbXBvbmVudCxcbiAgICBPcmlnaW5Db21wb25lbnQsXG4gICAgUGhvbmVEaXNwbGF5Q29tcG9uZW50LFxuICAgIFByaW9yaXR5Q29tcG9uZW50LFxuICAgIFllc05vQ29tcG9uZW50LFxuICAgIE5neEZsYWdzQ29tcG9uZW50LFxuICAgIEJ1dHRvbkxpbmtUZXh0Q29tcG9uZW50LFxuICAgIEN1c3RvbUNlbGxDb21wb25lbnQsXG4gICAgTWVudUNvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgUG5nSWNvbk1vZHVsZSxcbiAgICBNYXRQYWdpbmF0b3JNb2R1bGUsXG4gICAgTWF0VGFibGVNb2R1bGUsXG4gICAgTWF0U29ydE1vZHVsZSxcbiAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBNYXRCYWRnZU1vZHVsZSxcbiAgICBNYXRNZW51TW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUYWJsZUNvbXBvbmVudCxcbiAgICBDdXN0b21lclJhbmtDb21wb25lbnQsXG4gICAgRGF0ZUZvcm1hdENvbXBvbmVudCxcbiAgICBFcXVpcGVtZW50U3RhdHVzQ29tcG9uZW50LFxuICAgIEVxdWlwZW1lbnRUeXBlQ29tcG9uZW50LFxuICAgIEdlbmRlckNvbXBvbmVudCxcbiAgICBJc01hdEljb25Db21wb25lbnQsXG4gICAgTmFtZUF2YXRhckNvbXBvbmVudCxcbiAgICBPcmlnaW5Db21wb25lbnQsXG4gICAgUGhvbmVEaXNwbGF5Q29tcG9uZW50LFxuICAgIFByaW9yaXR5Q29tcG9uZW50LFxuICAgIFllc05vQ29tcG9uZW50LFxuICAgIFBuZ0ljb25Nb2R1bGUsXG4gICAgTWF0UGFnaW5hdG9yTW9kdWxlLFxuICAgIE1hdFRhYmxlTW9kdWxlLFxuICAgIE1hdFNvcnRNb2R1bGUsXG4gICAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgTWF0QmFkZ2VNb2R1bGUsXG4gICAgTWF0TWVudU1vZHVsZSxcbiAgICBOZ3hGbGFnc0NvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlPzogVGFibGVNb2R1bGUpIHtcbiAgICBpZiAocGFyZW50TW9kdWxlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdUYWJsZU1vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGl0IGluIHRoZSBBcHBNb2R1bGUgb25seScpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChjb25maWc6IERlc2lnblRhYmxlSW50ZXJmYWNlKTogTW9kdWxlV2l0aFByb3ZpZGVyczxUYWJsZU1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogVGFibGVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge3Byb3ZpZGU6ICdfX05neERlc2lnblRhYmxlX18nLCB1c2VWYWx1ZTogY29uZmlnfSxcbiAgICAgICAgVGFibGVTZXJ2aWNlXG4gICAgICBdXG4gICAgfTtcbiAgfVxuXG59XG4iXX0=