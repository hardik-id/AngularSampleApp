/**
 * Created by 44007238 on 3/9/2017.
 */
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";

@Injectable()
export class AppService {
  constructor(private http:Http) {}

  getData(){
    //this.http.get().subscribe();
    return this.http.get('https://hardik-patel.firebaseio.com/users.json')
      .map((res:any) => res.json())
  }
}
