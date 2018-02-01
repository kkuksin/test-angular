import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { SubmitRegistration } from './submit-registration.component';
import { ReCaptchaCustom } from './re-captcha.component';
import { InterceptorModule } from './interceptor.module';
import { RecaptchaModule, RECAPTCHA_SETTINGS } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { DataService } from './data.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SubmitRegistration,
    ReCaptchaCustom
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InterceptorModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaFormsModule,
    RecaptchaModule.forRoot(),
  ],
  providers: [
  DataService,
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: '6LcKNEIUAAAAAPGe3VDGzUcqXyi5iyMD-IPhiXej',
      },
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
