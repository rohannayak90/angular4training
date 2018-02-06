import { Component } from '@angular/core';

@Component({
    selector: 'app-success-alert',
    //templateUrl: './success-alert.component.html',
    template: '<p>This is success alert component</p>',
    //styleUrls: ['./success-alert.component.css']
    styles: [`
            p {
                color: green;
            }
        `]
})
export class SuccessAlert {
    
}