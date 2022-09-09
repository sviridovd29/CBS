import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-female-clothes',
  templateUrl: './female-clothes.component.html',
  styleUrls: ['./female-clothes.component.css']
})
export class FemaleClothesComponent implements OnInit {

  public allFM = [
    {name: 'верхняя одежда', url: 'assets/img/f1.jfif', price: 2000},
    {name: 'юбки', url: 'assets/img/f2.jfif', price: 420},
    {name: 'обувь', url: 'assets/img/f3.jfif', price: 1800},
    {name: 'майки', url: 'assets/img/f4.jfif', price: 300},
    {name: 'кофты', url: 'assets/img/f5.jfif', price: 380},

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
