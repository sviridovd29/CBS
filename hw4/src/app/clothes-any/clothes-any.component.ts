import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clothes-any',
  templateUrl: './clothes-any.component.html',
  styleUrls: ['./clothes-any.component.css']
})
export class ClothesAnyComponent implements OnInit {
  public allCloth = [
    {name: 'для детей', url: 'assets/img/c1.webp', link: 'child'},
    {name: 'для женщин', url: 'assets/img/f5.jfif', link: 'female'},
    {name: 'для мужчин', url: 'assets/img/m1.jfif', link: 'male'},


  ]
  constructor() { }

  ngOnInit(): void {
  }

}
