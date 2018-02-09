import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router'

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  // The errorMessage can be string-interpolated to the html view.
  errorMessage:string;
  
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.errorMessage = this.activatedRoute.snapshot.data['message'];
    // One can also subscribe to changes in the data.
    this.activatedRoute.data.subscribe((data:Data) => {
      this.errorMessage = data['message'];
    });
  }

}
