/**
 * Created by 44007238 on 3/8/2017.
 */
import { Observable } from 'rxjs/Observable';
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";

@Injectable()
export class AppService {

  constructor(private http:Http) {
  }

  stopStream(){
    this.http.get(this.url + '/tweets/stop-stream').subscribe();
    return;
  }
  
}
