import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
  public messageSource = new BehaviorSubject<string>('default message');
  public getUserInfo = new BehaviorSubject<boolean>(false);
  public xsrfToken;
  public falconToken;

  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  getUserStatus(status: boolean) {
    this.getUserInfo.next(status);
  }
}
