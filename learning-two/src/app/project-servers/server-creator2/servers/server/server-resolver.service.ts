import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ServersService } from '../servers.service';

interface Server {
    id:number;
    name:string;
    status:string;
}

@Injectable()
export class ServerResolver implements Resolve<Server> {
    constructor(private serversService:ServersService) {}
    resolve(activatedRouteSnapshot:ActivatedRouteSnapshot, routerStateSnapshot:RouterStateSnapshot):Observable<Server> | Promise<Server> | Server {
        
        return this.serversService.getServer(+activatedRouteSnapshot.params['id']);
    }
}