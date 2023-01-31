import { Component, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { observable, Observable } from 'rxjs';
import { Burger, Catalogue, Menu } from '../models/produit.modele';
import { CatalogueService } from '../services/catalogue.service';
import { PanierService } from '../services/panier.service';
import { ProduitsService } from '../services/produits.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  status = '';
  catalogue!: Catalogue;
  burgers!: Burger[];
  menus!: Menu[];

  constructor(private catalogueService: CatalogueService,
              private panierService: PanierService) { }

  items$?: Observable<any>  = this.panierService.items$

  ngOnInit(): void {
    const observable: Observable<Catalogue> = this.catalogueService.getAllProduitObs();
    observable.subscribe(
        (catalogue) => {
          this.burgers = catalogue.burgers;
          this.menus = catalogue.menus;
        }
    );
  }

  

}
