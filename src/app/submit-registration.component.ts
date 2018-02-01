import { Component, OnInit, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { Md5 } from 'ts-md5/dist/md5';


@Component({
  selector: 'submit-registration',
  template: `<button type="button" (click)="sendInfo($event)">Login</button>`,
})
export class SubmitRegistration implements OnInit {
  postRequest: any;
  fromReCaptchaComponent: string;

  constructor(private httpClient: HttpClient, private data: DataService) {}

  @Input() UserEmail: string;
  @Input() UserPassword: string;

  ngOnInit() {
    this.data.messageSource.subscribe(message => {
      this.fromReCaptchaComponent = message;
    });
  }

  sendInfo(event: any) {
    this.postRequest = event.target.value;

    this.httpClient.post('https://api.amalyze.com/0.0.12/system.user.login',{
      "captcha": this.fromReCaptchaComponent,
      "username": this.UserEmail,
      "password_md5": Md5.hashStr(this.UserPassword)
    }, {observe: 'response'})
      .subscribe(
        res => {
          this.data.falconToken = res.headers.get('X-FALCON-TOKEN');
          this.data.xsrfToken = res.headers.get('X-XSRF-TOKEN');

          this.data.getUserStatus(true);
        },
        error => {
          console.log('error', error);
        }
      );
  }
}
