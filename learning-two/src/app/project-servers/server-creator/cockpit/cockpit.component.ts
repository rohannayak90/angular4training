import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  
  @Output() serverAdded = new EventEmitter<{serverName:string, serverContent:string}>();
  @Output() blueprintAdded = new EventEmitter<{serverName:string, serverContent:string}>();
  
  @ViewChild('serverContentInput') svrContentInput:ElementRef;
  
  //newServerName = "";
  //newServerContent = '';

  constructor() { }

  ngOnInit() {
  }
  
  onAddServer(serverNameElement) {
      this.serverAdded.emit({
        serverName: serverNameElement.value,
        serverContent: this.svrContentInput.nativeElement.value
      });
  }
  
  onAddBlueprint(serverNameElement:HTMLInputElement) {
    this.blueprintAdded.emit({
      serverName: serverNameElement.value, 
      serverContent: this.svrContentInput.nativeElement.value
    });
  }

}
