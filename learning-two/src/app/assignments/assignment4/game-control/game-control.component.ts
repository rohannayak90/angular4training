import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  timer;
  counter = 0;
  //@Output() counterIncremented = new EventEmitter<{value}>();
  @Output() counterIncremented = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit() {
  }
  
  onStartClick() {
    this.timer = setInterval(() => {
      this.counter++;
      //this.counterIncremented.emit({value: this.counter});
      this.counterIncremented.emit(this.counter);
    }, 1000);
  }
  
  onStopClick() {
    clearInterval(this.timer);
    console.log("stopped");
  }
}
