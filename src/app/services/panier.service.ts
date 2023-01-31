import { Injectable } from '@angular/core';
import { BehaviorSubject, map, take } from 'rxjs';
import { Burger, Menu } from '../models/produit.modele';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  prix = 0;

  constructor() {
    let tabItems = JSON.parse(localStorage.getItem('products') || '[]');
    if (!tabItems) {
      tabItems = [];
    }
    this.itemsSubject.next(tabItems);
  }

  private itemsSubject = new BehaviorSubject<Burger[] | Menu[]>([]);
  items$ = this.itemsSubject.asObservable();

  addToCart(product: Burger | Menu) {
    this.items$.pipe(
      take(1),
      map((products) => {
        const elt = products.find(elt => elt.id === product.id);
        if (!elt) {
          products.push(product);
          localStorage.setItem('products', JSON.stringify(products));
        }
      }),
    ).subscribe();
  }

  removeItem(product: any){
    this.items$.pipe(
      take(1),
      map((products) => {
        products.splice(product, 1);
        localStorage.setItem('products', JSON.stringify(products));
      }),
    ).subscribe();
  }

  totalPrix(product: Burger | Menu){
    this.prix+= product.prix;
  }

  getItems(){
    return this.items$;
  }
  
}
