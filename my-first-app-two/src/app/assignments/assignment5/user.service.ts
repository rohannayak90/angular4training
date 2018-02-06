import { Injectable } from '@angular/core';

import { CounterService } from './counter.service';

@Injectable()
export class UserService {
    activeUsers = [
        'Manu', 'Chris', 'Christopher'
    ];
    inactiveUsers = [
        'Soanu', 'Raja', 'Somewhe'
    ];
    
    constructor(private counterService:CounterService) {
        
    }
    
    onActivate(index) {
        const item = this.inactiveUsers.splice(index, 1);
        this.activeUsers.push(item[0]);
        this.counterService.registerChange(true);
    }
      
    onDeactivate(index) {
        const item = this.activeUsers.splice(index, 1);
        this.inactiveUsers.push(item[0]);
        this.counterService.registerChange(false);
    }
}