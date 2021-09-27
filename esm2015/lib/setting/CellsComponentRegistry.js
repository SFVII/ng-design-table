/***********************************************************
 **  @project MS_Nowboard                              **
 **  @file ComponentRegistry                                         **
 **  @author Brice Daupiard <brice.daupiard@smartiiz.com>  **
 **  @Date 12/03/2021                                         **
 ***********************************************************/
export var CellsComponentList;
(function (CellsComponentList) {
    CellsComponentList["ButtonLink"] = "button-link";
    CellsComponentList["ButtonLinkText"] = "button-link-text";
    CellsComponentList["ButtonClick"] = "button-click";
    CellsComponentList["Priority"] = "priority";
    CellsComponentList["Origin"] = "origin";
    CellsComponentList["NameAvatar"] = "name-avatar";
    CellsComponentList["DateFormat"] = "date-format";
    CellsComponentList["CountRow"] = "count-row";
    CellsComponentList["Gender"] = "gender-avatar";
    CellsComponentList["Phone"] = "phone-display";
    CellsComponentList["YesNo"] = "yes-no-display";
    CellsComponentList["CustomerRank"] = "customer-rank";
    CellsComponentList["ItCategory"] = "it-category";
    CellsComponentList["ItStatus"] = "it-status";
    CellsComponentList["CustomIcon"] = "custom-icon";
})(CellsComponentList || (CellsComponentList = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2VsbHNDb21wb25lbnRSZWdpc3RyeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RhYmxlLyIsInNvdXJjZXMiOlsibGliL3NldHRpbmcvQ2VsbHNDb21wb25lbnRSZWdpc3RyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7NkRBSzZEO0FBRTdELE1BQU0sQ0FBTixJQUFZLGtCQWdCWDtBQWhCRCxXQUFZLGtCQUFrQjtJQUM1QixnREFBMEIsQ0FBQTtJQUMxQix5REFBbUMsQ0FBQTtJQUNuQyxrREFBNEIsQ0FBQTtJQUM1QiwyQ0FBcUIsQ0FBQTtJQUNyQix1Q0FBaUIsQ0FBQTtJQUNqQixnREFBMEIsQ0FBQTtJQUMxQixnREFBMEIsQ0FBQTtJQUMxQiw0Q0FBc0IsQ0FBQTtJQUN0Qiw4Q0FBd0IsQ0FBQTtJQUN4Qiw2Q0FBdUIsQ0FBQTtJQUN2Qiw4Q0FBd0IsQ0FBQTtJQUN4QixvREFBOEIsQ0FBQTtJQUM5QixnREFBMEIsQ0FBQTtJQUMxQiw0Q0FBc0IsQ0FBQTtJQUN0QixnREFBMEIsQ0FBQTtBQUM1QixDQUFDLEVBaEJXLGtCQUFrQixLQUFsQixrQkFBa0IsUUFnQjdCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiogIEBwcm9qZWN0IE1TX05vd2JvYXJkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKipcbiAqKiAgQGZpbGUgQ29tcG9uZW50UmVnaXN0cnkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICoqXG4gKiogIEBhdXRob3IgQnJpY2UgRGF1cGlhcmQgPGJyaWNlLmRhdXBpYXJkQHNtYXJ0aWl6LmNvbT4gICoqXG4gKiogIEBEYXRlIDEyLzAzLzIwMjEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICoqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmV4cG9ydCBlbnVtIENlbGxzQ29tcG9uZW50TGlzdCB7XG4gIEJ1dHRvbkxpbmsgPSBcImJ1dHRvbi1saW5rXCIsXG4gIEJ1dHRvbkxpbmtUZXh0ID0gXCJidXR0b24tbGluay10ZXh0XCIsXG4gIEJ1dHRvbkNsaWNrID0gXCJidXR0b24tY2xpY2tcIixcbiAgUHJpb3JpdHkgPSBcInByaW9yaXR5XCIsXG4gIE9yaWdpbiA9IFwib3JpZ2luXCIsXG4gIE5hbWVBdmF0YXIgPSBcIm5hbWUtYXZhdGFyXCIsXG4gIERhdGVGb3JtYXQgPSBcImRhdGUtZm9ybWF0XCIsXG4gIENvdW50Um93ID0gXCJjb3VudC1yb3dcIixcbiAgR2VuZGVyID0gJ2dlbmRlci1hdmF0YXInLFxuICBQaG9uZSA9ICdwaG9uZS1kaXNwbGF5JyxcbiAgWWVzTm8gPSAneWVzLW5vLWRpc3BsYXknLFxuICBDdXN0b21lclJhbmsgPSAnY3VzdG9tZXItcmFuaycsXG4gIEl0Q2F0ZWdvcnkgPSAnaXQtY2F0ZWdvcnknLFxuICBJdFN0YXR1cyA9ICdpdC1zdGF0dXMnLFxuICBDdXN0b21JY29uID0gJ2N1c3RvbS1pY29uJ1xufVxuIl19