import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent implements OnInit {
  @Input() account:{ name:string, status:string };
  @Input() id:number;
  //@Output() statusChanged = new EventEmitter<{id:number, newStatus:string}>();
  
  constructor(private loggingService:LoggingService,
              private accountsService:AccountsService) {
                
  }

  ngOnInit() {
  }
  
  onSetTo(status) {
    //this.statusChanged.emit({id:this.id, newStatus:status});
    
    this.accountsService.updateStatus(this.id, status);
    // Method 1
    // console.log("Server status changed. New status is " + status);
    
    // Method 2
    // this.loggingService.logStatusChange(status);
    
    // Method 3
    this.accountsService.statusUpdated.emit(status);
  }

}
