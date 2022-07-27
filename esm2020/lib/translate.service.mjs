import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class TranslateService {
    constructor() {
        this.lang = {
            'fr': {
                'SEARCH': `Recherche...`,
                'OPEN': 'Ouvrir',
                'CANCEL_SEARCH': 'Annuler la recherche',
                'NO_RESULT': 'Aucun résultat correspondant',
                'DETAILS': 'Détails'
            },
            'en': {
                'SEARCH': `Search...`,
                'OPEN': 'Open',
                'CANCEL_SEARCH': 'Cancel search',
                'NO_RESULT': 'No corresponding result',
                'DETAILS': 'Details'
            }
        };
    }
    translate(l, word) {
        return this.lang[l][word];
    }
}
TranslateService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TranslateService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
TranslateService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TranslateService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TranslateService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy90YWJsZS9zcmMvbGliL3RyYW5zbGF0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDLE1BQU0sT0FBTyxnQkFBZ0I7SUFrQjNCO1FBakJRLFNBQUksR0FBRztZQUNYLElBQUksRUFBRTtnQkFDRixRQUFRLEVBQUUsY0FBYztnQkFDeEIsTUFBTSxFQUFFLFFBQVE7Z0JBQ2hCLGVBQWUsRUFBRSxzQkFBc0I7Z0JBQ3ZDLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxTQUFTO2FBQ3ZCO1lBQ0QsSUFBSSxFQUFFO2dCQUNGLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixNQUFNLEVBQUUsTUFBTTtnQkFDZCxlQUFlLEVBQUUsZUFBZTtnQkFDaEMsV0FBVyxFQUFFLHlCQUF5QjtnQkFDdEMsU0FBUyxFQUFFLFNBQVM7YUFDdkI7U0FDSixDQUFBO0lBRWUsQ0FBQztJQUVWLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSTtRQUN0QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7OEdBdEJVLGdCQUFnQjtrSEFBaEIsZ0JBQWdCLGNBRmYsTUFBTTs0RkFFUCxnQkFBZ0I7a0JBSDVCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBsYW5nID0ge1xuICAgICAgJ2ZyJzoge1xuICAgICAgICAgICdTRUFSQ0gnOiBgUmVjaGVyY2hlLi4uYCxcbiAgICAgICAgICAnT1BFTic6ICdPdXZyaXInLFxuICAgICAgICAgICdDQU5DRUxfU0VBUkNIJzogJ0FubnVsZXIgbGEgcmVjaGVyY2hlJyxcbiAgICAgICAgICAnTk9fUkVTVUxUJzogJ0F1Y3VuIHLDqXN1bHRhdCBjb3JyZXNwb25kYW50JyxcbiAgICAgICAgICAnREVUQUlMUyc6ICdEw6l0YWlscydcbiAgICAgIH0sXG4gICAgICAnZW4nOiB7XG4gICAgICAgICAgJ1NFQVJDSCc6IGBTZWFyY2guLi5gLFxuICAgICAgICAgICdPUEVOJzogJ09wZW4nLFxuICAgICAgICAgICdDQU5DRUxfU0VBUkNIJzogJ0NhbmNlbCBzZWFyY2gnLFxuICAgICAgICAgICdOT19SRVNVTFQnOiAnTm8gY29ycmVzcG9uZGluZyByZXN1bHQnLFxuICAgICAgICAgICdERVRBSUxTJzogJ0RldGFpbHMnXG4gICAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHB1YmxpYyB0cmFuc2xhdGUobCwgd29yZCkge1xuICAgIHJldHVybiB0aGlzLmxhbmdbbF1bd29yZF07XG4gIH1cbn1cbiJdfQ==