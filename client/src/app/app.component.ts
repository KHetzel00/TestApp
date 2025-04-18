import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any;

  constructor(private http: HttpClient) {

  }
  ngOnInit() {
    this.http.get('https://localhost:5001/api/v1/users').subscribe(res => {
      this.users = res;
    }, error => {
      console.log(error);
    })
  }
}
