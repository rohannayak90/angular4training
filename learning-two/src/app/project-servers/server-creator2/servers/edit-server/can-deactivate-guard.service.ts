import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';

export interface ICanDeactivateComponent {
    canDeactivate:() => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGuard implements CanDeactivate<ICanDeactivateComponent> {
    canDeactivate(component:ICanDeactivateComponent,
        activatedRouteSnapshot:ActivatedRouteSnapshot,
        currentStateSnapshot:RouterStateSnapshot,
        nextStateSnapshot?:RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean {
        
        return component.canDeactivate();
    }
}