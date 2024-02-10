import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from'@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner'; 
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { PipePipe } from './pipe.pipe';
import { OnScrollDirective } from './App.CustomScrollDirective';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    PipePipe,OnScrollDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,BrowserAnimationsModule,NgxSpinnerModule,FormsModule,NgxPaginationModule,NgxPaginationModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
