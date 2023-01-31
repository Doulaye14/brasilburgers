import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Burger, Menu } from '../models/produit.modele';
import { PanierService } from '../services/panier.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  @Input() produit!: Burger | Menu;

  constructor(private router: Router, private sanitizer:DomSanitizer, private panier: PanierService) {}

  ngOnInit(): void {
    
  }

  onViewFaceSnap() {
    this.router.navigateByUrl(`produits/${this.produit.id}`);
  }

  transform(params: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64, '+params);
  }

  addToCart(produit: Burger | Menu){
     this.panier.addToCart(produit);
  }

}
