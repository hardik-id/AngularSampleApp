import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './bootstrap.min.css'],
})
export class AppComponent implements OnInit {
  public title = 'Sample Angular Application!';

  @Input()
  public users: Array<User> = [];

  ngOnInit(): void {
    console.log('test Working');
    this.users.push({name:"Sandeep", address: "Address 1", phone_number:"sdfdf", state :0});
    this.users.push({name:"Amol", address: "Address 2", phone_number:"test", state :1});


  }
}

export interface User {
  name: string;
  address: string;
  phone_number: number;
}
