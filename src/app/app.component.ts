import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './bootstrap.min.css'],
})
export class AppComponent {
  title = 'Sample Angular Application!';
  name: string;
  address: string;

  @Input()
  public users : Array<User> = [];

  ngOnInit(): void {
    console.log('test Working');
    this.users.push({name:'Mubarak', address: 'Address 1'});
    this.users.push({name:'Amol', address: 'Address 2'});
  }

  addToList(){
    this.users.push({name: this.name, address: this.address});
  }
}

export interface User{
  name: string;
  address: string;
}
