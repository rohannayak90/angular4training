import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-directives',
  templateUrl: './project-directives.component.html',
  styleUrls: ['./project-directives.component.css']
})
export class ProjectDirectivesComponent implements OnInit {
  
  myValue = 15;

  constructor() { }

  ngOnInit() {
  }

}
