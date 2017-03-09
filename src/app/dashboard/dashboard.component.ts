/**
 * Created by 44007238 on 3/9/2017.
 */
import {Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'Dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  @Input() user;
  @Output() cancleUser = new EventEmitter();;

  ngOnInit(): void {
    console.log('Initializing Dashboard Component.');
  }

  clearData(){
    this.cancleUser.emit();
  }
}

