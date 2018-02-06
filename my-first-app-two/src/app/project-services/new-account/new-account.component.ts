import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {
  
  @Output() newAccountAdded = new EventEmitter<{name:string, status:string}>();

  constructor(private loggingService:LoggingService,
              private accountsService:AccountsService) {
                
    // Using Cross-Component communication
    this.accountsService.statusUpdated.subscribe(
      (status:string) => {
        alert("status is: " + status);
      }
    );
  }

  ngOnInit() {
  }
  
  onCreateAccount(accountName:string, accountStatus:string) {
    /*this.newAccountAdded.emit({
      name: accountName,
      status: accountStatus
    });*/
    
    this.accountsService.addAccount({name:accountName, status:accountStatus});
    
    // 1 - Doing it directly
    //console.log("A new server with status " + accountStatus + " created: " + accountName)
    
    // 2 - Doing it with services and instantiating them directly.
    // Not the right way.
    /* const loggingService:LoggingService = new LoggingService();
    loggingService.logStatusChange(accountStatus); */
    
    // 3 - Doing it the Angular way.
    // For this, the service is initialized in the constructor and also added to the providers array in the declaration.
    // this.loggingService.logStatusChange(accountStatus);
    
  }

}
