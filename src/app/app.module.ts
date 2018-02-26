import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule/*表单校验*/ }    from '@angular/forms'; // <-- NgModel lives here
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
import {MatInputModule} from '@angular/material/input';
import { AppComponent }  from './app.component';
import { EditComponent } from './edit/edit.component';
import { RestApiService } from './rest-api.service';
// import { LoginComponent } from './login/login.component';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './login/login.component';

import {MatSelectModule} from '@angular/material/select';

import {MatDialogModule} from '@angular/material/dialog';

import { RouterModule }   from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { GuardService } from './guard-service.service';
import { FormComponent } from './form/form.component';
import { TestApiComponent } from './test-api/test-api.component';
import { CookieService } from './cookie.service';
import { DialogOverviewExample, DialogOverviewExampleDialog } from './dialog/dialog.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule, 
    NoopAnimationsModule,
    MatSelectModule,
    MatDialogModule,


    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent 
      },
      
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
        path: 'edit',
        component:EditComponent,
        canActivate: [GuardService]
      },
      {
        path: 'form',
        component:FormComponent,
        canActivate: [GuardService]
      },
      {
        path:'api',
        component:TestApiComponent

      },
      {
        path:'dialog',
        component:DialogOverviewExample

      }
    ]),
    

    
    MatInputModule,
    MatButtonModule,


    HttpModule,
    
  ],

  entryComponents: [DialogOverviewExampleDialog],
  declarations: [
    AppComponent, EditComponent, LoginComponent, HeaderComponent, FormComponent, TestApiComponent,DialogOverviewExampleDialog
  ],
  providers:[RestApiService,GuardService,CookieService,DialogOverviewExample],
  bootstrap: [AppComponent ]
})
export class AppModule { }
