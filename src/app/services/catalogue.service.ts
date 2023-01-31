

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Catalogue, Menu } from '../models/produit.modele';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  url = "https://127.0.0.1:8000/api/catalogues";
  singleProdUrl = "https://127.0.0.1:8000/api/produits/";
  

  constructor(private httpClient: HttpClient, private sanitizer: DomSanitizer) { }

  getAllProduitObs():Observable<Catalogue>{
    return this.httpClient.get<Catalogue>(this.url);
  }

  getProduitById(produitId: number):Observable<any>{
      return this.httpClient.get<any>(this.singleProdUrl+''+produitId);
  }
  
  transform(params: any){
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64, '+params);
  }
}
