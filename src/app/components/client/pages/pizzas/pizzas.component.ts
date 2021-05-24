import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClientService } from '../../client.service';
import { Product } from '../../shared/product.model';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.scss']
})
export class PizzasComponent implements OnInit, OnDestroy {


  pizzas: Product[] = []
  sub: Subscription;

  constructor(private service: ClientService,) { }

  ngOnInit(): void {
    this.sub = this.service.listAll().subscribe((items) => {
      this.pizzas = items;
    })    
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

}
