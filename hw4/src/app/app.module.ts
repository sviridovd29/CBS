import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ClothesModule} from "./clothes/clothes.module";
import {AllModule} from "./all/all.module";




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClothesModule,
    AllModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
