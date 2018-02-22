import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms'; // <-- NgModel lives here
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
import { DefineModuleComponent } from './material/template';
import {MatInputModule} from '@angular/material/input';
import { AppComponent }  from './app.component';
import { EditComponent } from './edit/edit.component';
import { RestApiService } from './rest-api.service';
// import { LoginComponent } from './login/login.component';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './login/login.component';

import {MatSelectModule} from '@angular/material/select';

import { RouterModule }   from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { GuardService } from './guard-service.service';







@NgModule({
  imports: [
    BrowserModule,
    FormsModule, 
    NoopAnimationsModule,
    MatSelectModule,


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
      }
    ]),
    

    
    MatInputModule,
    MatButtonModule,


    HttpModule,
    
  ],
  declarations: [
    AppComponent,DefineModuleComponent, EditComponent, LoginComponent, HeaderComponent, // LoginComponent
  ],
  providers:[RestApiService,GuardService],
  bootstrap: [AppComponent ]
})
export class AppModule { }
