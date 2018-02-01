import { Component, OnInit } from '@angular/core';
import { DataService} from './data.service';

@Component({
  selector: 're-captcha-custom',
  template: `<re-captcha 
    (resolved)="$event && submit($event)"
    required
    siteKey="6LcKNEIUAAAAAPGe3VDGzUcqXyi5iyMD-IPhiXej">
  </re-captcha> {{captchaCode}}`,
})

export class ReCaptchaCustom implements OnInit{
  constructor(private dataService: DataService) { }

  ngOnInit() {
    console.log(this.dataService);
  }

   submit(captchaResponse: string) {
    this.dataService.changeMessage(captchaResponse);
  }
}
