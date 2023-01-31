import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Burger, Menu } from '../models/produit.modele';
import { PanierService } from '../services/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  sum: number = 0;
  items!: Burger[] | Menu[];
  
  constructor(private panierService: PanierService,) {
  }
  
  items$ = this.panierService.items$;
  
  ngOnInit(): void {
    this.items$.subscribe(
      ((value)=>{
        value.forEach(item=>{
          this.sum += item.prix;
        })
      })
    )

    this.items$.subscribe(
        (value => this.items = value)
    );
  }
  //----- calculate total

}
