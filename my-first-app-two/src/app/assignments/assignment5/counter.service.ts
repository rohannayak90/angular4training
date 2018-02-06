import { EventEmitter } from '@angular/core';

export class CounterService {
    counterActivating:number = 0;
    counterDeactivating:number = 0;
    
    registerChange(isActivating) {
        if (isActivating)
            this.counterActivating++;
        else
            this.counterDeactivating++;
            
        console.log("Activated: " + this.counterActivating + ", Deactivated: " + this.counterDeactivating);
    }
}