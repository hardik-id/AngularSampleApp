import {Component, Input, OnInit} from '@angular/core';
import {AppService} from "./app.service.ts";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './bootstrap.min.css'],
})
export class AppComponent implements OnInit {
  public title = 'Sample Angular Application!';
  public data;

  constructor(private appService: AppService){
  }

  @Input()
  public newUser: User = {};

  @Input()
  public users: Array<User> = [];

  ngOnInit(): void {
    console.log('Initializing App Component.');
    this.users.push({name: 'Sandeep', address: 'Address 1', phone_number: 1234});
    this.users.push({name: 'Amol', address: 'Address 2', phone_number: 232323});
    this.appService.getData().subscribe(data => {
      this.data = data;
      this.processResult();
    });
  }
  processResult(){
    console.log(this.data);
    this.users=[];
    for(var k in this.data) {
      this.users.push(this.data[k]);
    }
  }

  addToList() {
    this.users.push({name: this.newUser.name, address: this.newUser.address, phone_number: this.newUser.phone_number});
  }

  deleteUser(i) {
    this.users.splice(i, 1);
  }
  clearNewUser() {
    this.newUser = {};
  }


}

export interface User {
  name?: string;
  address?: string;
  phone_number?: number;
  state?: string;
}
