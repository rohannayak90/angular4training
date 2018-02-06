import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    
    title = 'header';
    @Output() featureSelected = new EventEmitter<string>();
    
    selectFeature(feature:string) {
        this.featureSelected.emit(feature);
    }
}