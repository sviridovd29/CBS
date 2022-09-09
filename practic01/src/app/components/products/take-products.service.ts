import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cars} from "../../interfaces/interfaces";

@Injectable({
  providedIn: 'root'
})
export class TakeProductsService {

  constructor(private http: HttpClient) { }

  getCars() {
    return  this.http.get<Cars[]>('/api/products')
  }
}
