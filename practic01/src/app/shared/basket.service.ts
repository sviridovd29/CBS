import { Injectable } from '@angular/core';
import {Cars} from "../interfaces/interfaces";

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor() { }

  saveOrder(prod: Cars){
    const orders: Cars[] =  this.getOrder();


    let dublikate = orders.some(x => x.id == prod.id);
    console.log(dublikate)

    if(!dublikate){
      prod.quantity++;
      orders.push(prod)
    }
    else  {
      orders.find(x => x.id == prod.id)!.quantity++;
    }


    localStorage.setItem('userOrder', JSON.stringify(orders));
  }

getOrder(){
   /* if(!localStorage.getItem('userOrder')){
      console.log(5555)
      localStorage.setItem('userOrder', JSON.stringify([]));
      return;
    }*/
    return JSON.parse(localStorage.getItem('userOrder') || '[]');

}

}
