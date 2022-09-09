import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ProductsComponent } from './components/products/products.component';
import { PageNotComponent } from './components/page-not/page-not.component';
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {BackendServiceService} from "./backend-service/backend-service.service";
import { BasketComponent } from './components/basket/basket.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ContactsComponent,
    ProductsComponent,
    PageNotComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(BackendServiceService),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
