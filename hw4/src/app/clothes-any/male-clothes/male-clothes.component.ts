import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-male-clothes',
  templateUrl: './male-clothes.component.html',
  styleUrls: ['./male-clothes.component.css']
})
export class MaleClothesComponent implements OnInit {

  public allM = [
    {name: 'верхняя одежда', url: 'assets/img/m1.jfif', price: 2500},
    {name: 'рубашки', url: 'assets/img/m2.jfif', price: 520},
    {name: 'обувь', url: 'assets/img/m3.jfif', price: 1950},
    {name: 'пиджаки', url: 'assets/img/m4.jfif', price: 3010},
    {name: 'спорт', url: 'assets/img/m5.jfif', price: 2240},

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
