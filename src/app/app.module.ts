import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms'; // <-- NgModel lives here
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';



import {MatSelectModule} from '@angular/material/select';
import { DefineModuleComponent } from './material/template';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';




import { AppComponent }  from './app.component';

import { EditComponent } from './edit/edit.component';

import { RestApiService } from './rest-api.service';
import { LoginComponent } from './login/login.component';




@NgModule({
  imports: [
    BrowserModule,
    FormsModule, 
    NoopAnimationsModule,
    MatButtonModule,
    
    
    
    MatSelectModule,
    
    MatInputModule,


    HttpModule,
    
  ],
  declarations: [
    AppComponent,DefineModuleComponent, EditComponent, LoginComponent
  ],
  providers:[RestApiService],
  bootstrap: [AppComponent ]
})
export class AppModule { }
