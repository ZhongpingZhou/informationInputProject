import {  NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import {MatButtonModule} from '@angular/material/button';


import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';



import {MatInputModule} from '@angular/material/input';

import { AppComponent }  from './app.component';
import {  DefineModuleComponent } from './material/template';
import { SimpletemplateComponent } from './simpletemplate/simpletemplate.component';
import { HeroComponent } from './hero/hero.component';
import { TableBasicExample } from './table-basic-example/table-basic-example.component';
import { EditComponent } from './edit/edit.component';
import { EdittestComponent } from './edittest/edittest.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule, 
    NoopAnimationsModule,

    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    HttpModule
  ],
  declarations: [
    AppComponent,DefineModuleComponent, SimpletemplateComponent,  HeroComponent, TableBasicExample, EditComponent, EdittestComponent
  ],
  bootstrap: [AppComponent ]
})
export class AppModule { }
