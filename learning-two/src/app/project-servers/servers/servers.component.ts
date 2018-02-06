import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  //styleUrls: ['./servers.component.css']
  styles: [`
    h1 {
        color: red;
    }
  `]
})
export class ServersComponent implements OnInit {
  
  allowNewServer:Boolean = false;
  serverCreationStatus = "No Server created";
  serverName = "Test";
  serverCreated = false;
  servers = ['Server1', 'Server2'];

  constructor() {
    setInterval(() => {
      this.allowNewServer = !this.allowNewServer;
      this.serverCreationStatus = "No Server created";
    }, 20000);
  }

  ngOnInit() {
  }
  
  onServerCreated() {
    this.serverCreated = true;
    this.serverCreationStatus = this.serverName + " Server Created";
    this.servers.push(this.serverName);
  }
  
  onUpdateServerName(event:Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
