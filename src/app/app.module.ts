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
//import { LoginComponent } from './login/login.component';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './login/login.component';

import {MatSelectModule} from '@angular/material/select';




@NgModule({
  imports: [
    BrowserModule,
    FormsModule, 
    NoopAnimationsModule,
    
    
    MatSelectModule,
    
    MatInputModule,
    MatButtonModule,


    HttpModule,
    
  ],
  declarations: [
    AppComponent,DefineModuleComponent, EditComponent, LoginComponent,// LoginComponent
  ],
  providers:[RestApiService],
  bootstrap: [AppComponent ]
})
export class AppModule { }
