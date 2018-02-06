import { Component } from '@angular/core';

@Component({
    selector: 'app-project-recipes',
    templateUrl: './project-recipes.component.html'    
})
export class ProjectRecipesComponent {
    
    selectedFeature:string = 'recipe';
    
    onFeatureSelected(event) {
        this.selectedFeature = event;
    }
    
    
}