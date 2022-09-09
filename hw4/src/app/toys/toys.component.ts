import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toys',
  templateUrl: './toys.component.html',
  styleUrls: ['./toys.component.css']
})
export class ToysComponent implements OnInit {
  public allToy = [
    {name: 'робот', url: 'assets/img/t1.jpg', price: 800},
    {name: 'пистолет', url: 'assets/img/t2.jpg', price: 200},
    {name: 'велосипед', url: 'assets/img/t3.jpg', price: 2800},
    {name: 'машинка', url: 'assets/img/t4.jpg', price: 150},
    {name: 'мягкая игрушка', url: 'assets/img/t5.jpg', price: 320}

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
