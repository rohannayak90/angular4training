import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverID:number = 10;
  serverStatus:string = 'online';
  
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit() {
  }

  getServerStatus() {
    return this.serverStatus;
  }
  
  getColor() {
    if (this.serverStatus === 'online')
      return 'green';
    else
      return 'orange';
  }
}
