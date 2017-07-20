import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  tasks = []
  user = {
    name: ""
  }
  ;
  username= ""

  constructor(public _httpService: HttpService){
    this.getGit()
  }
 
  getGit(){
    this._httpService.retrieveTasks(this.username)
    .then( tasks => { this.tasks = tasks })
    .catch( err => { console.log(err); })
  }
  onSubmit(){
    this.username = this.user.name
    this.getGit()
  }
  
}
