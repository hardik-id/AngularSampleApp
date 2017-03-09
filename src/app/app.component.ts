import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './bootstrap.min.css'],
})
export class AppComponent implements OnInit {
  public title = 'Sample Angular Application!';

  @Input()
  public newUser: User = {};

  @Input()
  public users: Array<User> = [];

  ngOnInit(): void {
    console.log('test Working');
    this.users.push({name:'Sandeep', address: 'Address 1', phone_number: 1234});
    this.users.push({name:'Amol', address: 'Address 2', phone_number:232323});
  }

  addToList(){
    this.users.push({name:this.newUser.name, address: this.newUser.address, phone_number:this.newUser.phone_number});
  }

  deleteUser(i){
    this.users.splice(i, 1);
  }
}

export interface User {
  name?: string;
  address?: string;
  phone_number?: number;
  state?: string;
}
