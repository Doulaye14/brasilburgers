import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Burger, Menu } from 'src/app/models/produit.modele';
import { PanierService } from 'src/app/services/panier.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(private panierService: PanierService, private sanitizer:DomSanitizer,
              private _router: Router) { }

  @Input() quantity!: number;

  @Input() produit!: Burger | Menu

  tab$: Observable<Burger[] | Menu[]>  = this.panierService.items$

  ngOnInit(): void {
    this.tab$ = this.panierService.items$
    this.quantity= 1;
  }

  transform(params: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64, '+params);
  }

  removeItem(product: Burger | Menu){
    return this.panierService.removeItem(product);
  }

  addQuantity(){
    this.quantity++;
  }
  
  removeQuantity(){
    if(this.quantity > 1){
      this.quantity--;
    }
  }

}
