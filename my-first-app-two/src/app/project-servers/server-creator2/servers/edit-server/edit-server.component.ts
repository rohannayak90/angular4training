import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';

  constructor(private serversService: ServersService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.queryParams['allowEdit']);
    console.log(this.activatedRoute.snapshot.fragment);
    
    this.activatedRoute.queryParams.subscribe(
      (data:Params) => {
        console.log(data['allowEdit']);
      }
    );
    /*
    this.activatedRoute.fragment.subscribe(
      (data:Params) => {
        console.log(data);
      }
    );*/
    
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
