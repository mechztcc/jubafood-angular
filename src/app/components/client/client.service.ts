import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {catchError } from 'rxjs/operators';


import { Product } from './shared/product.model';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private readonly API = environment.API;


  constructor(private http: HttpClient) { }

  listAll() {
    return this.http.get<Product[]>(`${this.API}/pizzas`)

  }

}
