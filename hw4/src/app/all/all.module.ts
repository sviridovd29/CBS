import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent, ToysComponent, CookieComponent, FoodComponent, AllFruitComponent, JuiceComponent, CandiesComponent, FruitComponent} from './index';




@NgModule({
  declarations: [
    FoodComponent,
    AllFruitComponent,
    CandiesComponent,
    CookieComponent,
    FruitComponent,
    JuiceComponent,

    HeaderComponent,
    ToysComponent
  ],
  exports: [
    AllFruitComponent,
    FoodComponent,
    HeaderComponent,

  ],
  imports: [
    CommonModule
  ]
})
export class AllModule { }
