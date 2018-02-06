import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';

@Component({
  selector: 'app-assignment5',
  templateUrl: './assignment5.component.html',
  styleUrls: ['./assignment5.component.css'],
  providers: [UserService]
})
export class Assignment5Component implements OnInit {
  
  activeUsers = [];
  inactiveUsers = [];

  constructor(private userService:UserService) {
    
  }

  ngOnInit() {
    this.activeUsers = this.userService.activeUsers;
    this.inactiveUsers = this.userService.inactiveUsers;
  }
  
  /*onActivate(index) {
    this.userService.onActivate(index);
  }
  
  onDeactivate(index) {
    const item = this.activeUsers.splice(index, 1);
    this.inactiveUsers.push(item[0]);
  }*/

}
