import { Component, OnInit } from '@angular/core';
import {BasketService} from "../../shared/basket.service";
import {Cars} from "../../interfaces/interfaces";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor(private basketServ: BasketService) { }

  basketOrders!: Cars[];


  ngOnInit(): void {
    this.basketOrders = this.basketServ.getOrder()
    console.log(this.basketOrders)
  }

}
