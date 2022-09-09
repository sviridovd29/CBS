import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-children-clothes',
  templateUrl: './children-clothes.component.html',
  styleUrls: ['./children-clothes.component.css']
})
export class ChildrenClothesComponent implements OnInit {

  public allChild = [
    {name: 'пижамы', url: 'assets/img/c1.webp', price: 500},
    {name: 'штаны', url: 'assets/img/c2.webp', price: 320},
    {name: 'обувь', url: 'assets/img/c3.webp', price: 550},
    {name: 'перчатки', url: 'assets/img/c4.webp', price: 200},
    {name: 'рубашки', url: 'assets/img/c5.webp', price: 280},

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
