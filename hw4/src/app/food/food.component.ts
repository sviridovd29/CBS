import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  public listFood = [
    {name: 'Фрукты', url: 'assets/img/all-fruite.jfif', link: 'fruit'},
    {name: 'Сладости', url: 'assets/img/all-candy.jfif', link: 'candy'},
    {name: 'Пироженое', url: 'assets/img/cookie.jfif', link: 'cookie'},
    {name: 'Соки', url: 'assets/img/juice.jfif', link: 'juice'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
