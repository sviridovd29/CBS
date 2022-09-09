import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClothesAnyComponent, ChildrenClothesComponent, FemaleClothesComponent, MaleClothesComponent} from "./index";




@NgModule({
  declarations: [
    ClothesAnyComponent,
    ChildrenClothesComponent,
    FemaleClothesComponent,
    MaleClothesComponent
  ],
    exports: [
        FemaleClothesComponent,
        MaleClothesComponent,
        ChildrenClothesComponent,
        ClothesAnyComponent
    ],
  imports: [
    CommonModule
  ]
})
export class ClothesModule { }
