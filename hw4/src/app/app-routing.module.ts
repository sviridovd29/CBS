import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FoodComponent} from "./food/food.component";
import {ToysComponent} from "./toys/toys.component";
import {ClothesAnyComponent} from "./clothes-any/clothes-any.component";
import {FemaleClothesComponent} from "./clothes-any/female-clothes/female-clothes.component";
import {MaleClothesComponent} from "./clothes-any/male-clothes/male-clothes.component";
import {ChildrenClothesComponent} from "./clothes-any/children-clothes/children-clothes.component";
import {CandiesComponent} from "./food/candies/candies.component";
import {CookieComponent} from "./food/cookie/cookie.component";
import {JuiceComponent} from "./food/juice/juice.component";
import {AllFruitComponent} from "./food/all-fruit/all-fruit.component";
import {ContentComponent} from "./content/content.component";



const routes: Routes = [
  {path: '', component: ContentComponent},

  {path: 'food', component: FoodComponent},
  {path: 'toys', component: ToysComponent},
  {path: 'clothes', component: ClothesAnyComponent},

  {path: 'female', component: FemaleClothesComponent},
  {path: 'male', component: MaleClothesComponent},
  {path: 'child', component: ChildrenClothesComponent },

  {path: 'fruit', component: AllFruitComponent},
  {path: 'candy', component: CandiesComponent},
  {path: 'cookie', component: CookieComponent},
  {path: 'juice', component: JuiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
