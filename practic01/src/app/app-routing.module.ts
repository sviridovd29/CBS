import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./components/main-page/main-page.component";
import {ContactsComponent} from "./components/contacts/contacts.component";
import {ProductsComponent} from "./components/products/products.component";
import {PageNotComponent} from "./components/page-not/page-not.component";
import {BasketComponent} from "./components/basket/basket.component";

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'contact', component: ContactsComponent},
  {path: 'product', component: ProductsComponent},
  {path: 'basket', component: BasketComponent},
  {path: '**', component: PageNotComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
