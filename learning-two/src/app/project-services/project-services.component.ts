import { Component, OnInit, Input } from '@angular/core';

import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-project-services',
  templateUrl: './project-services.component.html',
  styleUrls: ['./project-services.component.css'],
  providers: [AccountsService]
})
export class ProjectServicesComponent implements OnInit {
  
  accounts:{name:string, status:string}[] = [];

  constructor(private accountsService:AccountsService) { }

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }
  
  

}
