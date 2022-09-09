import { Component, OnInit } from '@angular/core';
import {TakeProductsService} from "./take-products.service";
import { Cars} from "../../interfaces/interfaces";
import {BasketService} from "../../shared/basket.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private takeProductsService: TakeProductsService,
              private basket: BasketService) { }

  products!: Cars[];

  ngOnInit(): void {
      this.takeProductsService.getCars()
      .subscribe(response=> {
        this.products = response;
     console.log(response)
    })
  }

  buy(product: Cars){
    this.basket.saveOrder(product)
  }

}
