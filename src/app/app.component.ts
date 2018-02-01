import { Component, OnInit } from '@angular/core';
import {DataService} from './data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private httpClient: HttpClient, private data: DataService) {}

  emailField: string;
  passwordField: string;
  userInformation: any;

  onKeyEmail(event: any) {
   this.emailField = event.target.value;
  }

  onKeyPassword(event: any) {
    this.passwordField = event.target.value;
  }

  ngOnInit() {
    this.data.getUserInfo.subscribe(status => {
      if (status === true) {
        this.httpClient.post('https://api.amalyze.com/0.0.12/system.user.status',{}, {
          headers: {
            'X-FALCON-TOKEN': this.data.falconToken,
            // 'X-XRSF-TOKEN': this.xrsfToken, // from documentation
            'X-XSRF-TOKEN': this.data.xsrfToken, // from server response
            // 'X-XSREF-TOKEN': this.xrsfToken // from server error about missing token
          }
        })
          .subscribe(
            (res: any) => {
              this.userInformation = res.user;
            },
            error => {
              this.userInformation = error;
              console.log('error', error);
            }
          )
      }
    });
  }
}
