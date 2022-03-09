import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './services/auth.service';
import { GuardGuard } from './services/guard.guard';
import { TokenGuard } from './services/token.guard';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {AutosizeModule} from 'ngx-autosize';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClient, HttpClientModule , HTTP_INTERCEPTORS,} from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

import { InterceptorService } from './interceptor.service';
import { ForgotComponent } from './forgot/forgot.component';
import { ResetComponent } from './reset/reset.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { ForgotdoctorComponent } from './forgotdoctor/forgotdoctor.component';
import { ForgotpatientComponent } from './forgotpatient/forgotpatient.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list'; 
import { QuillModule } from 'ngx-quill';
import { Ng5SliderModule } from 'ng5-slider';
import { DialogBodyComponent } from './companent/dialog-body/dialog-body.component';
import {MatTooltipModule} from '@angular/material/tooltip';
 @NgModule({
  declarations: [
    AppComponent,
    ForgotComponent,
    ResetComponent,
    LoginComponent,
    ForgotdoctorComponent,
    ForgotpatientComponent,
    DialogBodyComponent
  

  ],
  imports: [
    Ng5SliderModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    AutosizeModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatSelectModule,
    MatIconModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatListModule,
    ToastrModule.forRoot(),
    NgbModule,
    HttpClientModule,
    ChartsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MatSnackBarModule,
    QuillModule.forRoot(),

  ],
  exports: [
    MatInputModule
],
  providers: [AuthService, GuardGuard, TokenGuard ,HttpClient,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  },
  {provide: LocationStrategy, useClass: HashLocationStrategy}
  
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogBodyComponent]
})
export class AppModule { }
