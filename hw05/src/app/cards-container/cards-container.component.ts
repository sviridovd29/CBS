import {Component, OnInit, ViewChild} from '@angular/core';
import {CardBlockComponent} from "../card-block/card-block.component";

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})
export class CardsContainerComponent implements OnInit {

 public showMore: any;


  public cars = [
    {id: 1, name: 'BMW 535', price: 14700, url: './assets/bmw_535.webp', description: 'BMW 535 M5 2011. Объём 3л - бензин. Родного пробега 200 тыс !!!', color: 'blue'},
    {id: 2, name: 'Audi Q7', price: 57500, url: './assets/audi_q7.webp', description: 'Audi Q7 2017. Объём 3л - дизель. Пробег 80 тыс. Идеал', color: 'yellow'},
    {id: 3, name: 'BMW X5', price: 10900, url: './assets/bmw_x5.webp', description: 'BMW X5 2008. Объём 3л - газ/бензин. Пробег 190', color: 'red'},
    {id: 4, name: 'Mercedes CLS 500', price: 8700, url: './assets/cls-500.webp', description: 'Mercedes-Benz CLS 500 2005 год. Объём 5л - бензин. Пробега 200 тыс', color: 'green'},
    {id: 5, name: 'Audi A6', price: 64900, url: './assets/audi_a6.webp', description: 'Audi A6 2018. Объём 3л - дизель. 85тыс пробега', color: 'gold'},
  ]

  public flag: boolean = true;

  constructor() { }

  public fHandler(value: any) {
        this.showMore = this.cars.filter(function (el, i) {
          return el.id == value
        })
  }
@ViewChild(CardBlockComponent) getBlok!: CardBlockComponent;
  public getSale(){
    this.getBlok.newPrice();
    this.flag = !this.flag;
  }


  ngOnInit(): void {
  }

}
