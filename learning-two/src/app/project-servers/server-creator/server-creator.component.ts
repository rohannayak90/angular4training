import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-creator',
  templateUrl: './server-creator.component.html',
  styleUrls: ['./server-creator.component.css']
})
export class ServerCreatorComponent implements OnInit {
  
  serverElements = 
    [
      { type: 'server', name: 'Test Server', content: 'Just a test content' }
    ];

  constructor() { }

  ngOnInit() {
  }
  
  onServerAdded(serverData:{serverName:string, serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }
  
  onBlueprintAdded(serverData:{serverName:string, serverContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }
}
