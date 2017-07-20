import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class HttpService {
  
  
  constructor(private _http: Http) { }

  retrieveTasks(user) {
    // Code...
    //  var username = "gregraudenbush";
     return this._http.get("https://api.github.com/users/"+user).map(data=>data.json()).toPromise()
  }
}
