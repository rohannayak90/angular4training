import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ServersService } from '../servers.service';
import { ICanDeactivateComponent } from './can-deactivate-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, ICanDeactivateComponent {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  constructor(private serversService:ServersService,
    private activatedRoute:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    //console.log(this.activatedRoute.snapshot.queryParams['allowEdit']);
    //console.log(this.activatedRoute.snapshot.fragment);
    
    this.activatedRoute.queryParams.subscribe(
      (data:Params) => {
        //console.log(data['allowEdit']);
        this.allowEdit = data['allowEdit'] === '1' ? true : false;
      }
    );
    /*
    this.activatedRoute.fragment.subscribe(
      (data:Params) => {
        console.log(data);
      }
    );*/
    
    this.server = this.serversService.getServer(+this.activatedRoute.snapshot.params['id']);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }
  
  canDeactivate():Observable<boolean> | Promise<boolean> | boolean {
    if (this.allowEdit) {
      if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved) {
        return confirm("Do you want to discard the changes?");
      }
    }
    return true;
  }

}
