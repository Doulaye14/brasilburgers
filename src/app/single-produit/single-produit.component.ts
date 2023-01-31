import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Burger, Menu } from '../models/produit.modele';
import { CatalogueService } from '../services/catalogue.service';

@Component({
  selector: 'app-single-produit',
  templateUrl: './single-produit.component.html',
  styleUrls: ['./single-produit.component.css']
})
export class SingleProduitComponent implements OnInit {

  singleProd!: Burger | Menu;

  constructor(private route: ActivatedRoute,
              private catalogueService: CatalogueService,
              private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    const produitId = +this.route.snapshot.params['id'];
    this.catalogueService.getProduitById(produitId).subscribe(
      (value) => {
          this.singleProd = value;
      }
    )
  }
  
  transform(params: any){
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64, '+params);
  }

}
