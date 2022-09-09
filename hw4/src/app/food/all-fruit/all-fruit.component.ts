import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-fruit',
  templateUrl: './all-fruit.component.html',
  styleUrls: ['./all-fruit.component.css']
})
export class AllFruitComponent implements OnInit {

public allFruite = [
  {name: 'яблоки', url: 'assets/img/frut-1.jfif', price: 321},
  {name: 'бананы', url: 'assets/img/frut-2.jfif', price: 280},
  {name: 'апельсины', url: 'assets/img/frut-3.jpg', price: 155},
  {name: 'манго', url: 'assets/img/frut-4.jfif', price: 447},
  {name: 'киви', url: 'assets/img/frut-5.jpg', price: 178},
  {name: 'виноград', url: 'assets/img/frut-6.jfif', price: 266},
]


  constructor() {

  }



  ngOnInit(): void {
  }

  addFruite(){

      }



}
