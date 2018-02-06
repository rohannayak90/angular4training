import { EventEmitter } from '@angular/core';

export class AccountsService {
    accounts = [
      {
        name: "Master ACcount",
        status: "online"
      },
      {
        name: "Test Account",
        status: "active"
      },
      {
        name: "Hidden Account",
        status: "ianctive"
      }
    ];
    
    statusUpdated = new EventEmitter<string>();
    
    addAccount(newAccount:{name:string, status:string}) {
        this.accounts.push(newAccount)
    }
    
    updateStatus(id:number, status:string) {
        this.accounts[id].status = status;
    }
}