import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule/*表单校验*/ }    from '@angular/forms'; // <-- NgModel lives here
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
import {MatInputModule} from '@angular/material/input';
import { AppComponent }  from './app.component';
import { RestApiService } from './rest-api.service';
import {MatButtonModule} from '@angular/material/button';

import {MatSelectModule} from '@angular/material/select';

import {MatDialogModule} from '@angular/material/dialog';


import {MatMenuModule} from '@angular/material/menu';

import { RouterModule, PreloadAllModules }   from '@angular/router';
import { FormComponent } from './form/form.component';
import { CookieService } from './cookie.service';
import { DialogOverviewExample, DialogOverviewExampleDialog } from './dialog/dialog.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule, 
    NoopAnimationsModule,
    MatSelectModule,
    MatDialogModule,
    MatMenuModule,
    RouterModule.forRoot([
    {
      path: 'form',
      component:FormComponent,
    },
    ],{preloadingStrategy: PreloadAllModules,useHash:true}),
    

    
    MatInputModule,
    MatButtonModule,


    HttpModule,
    
  ],

  entryComponents: [DialogOverviewExampleDialog],
  declarations: [
    AppComponent, FormComponent,DialogOverviewExampleDialog],
  providers:[RestApiService,CookieService,DialogOverviewExample],
  bootstrap: [AppComponent ]
})
export class AModule { }
