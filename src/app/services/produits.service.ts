import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Burger, Catalogue } from '../models/produit.modele';


@Injectable({
  providedIn: 'root'
})
export class ProduitsService implements OnInit {

  url = "http://localhost:4200/src/data/db.json";

  produits!: Object[];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
      const tab: Catalogue = {
        burgers: [
          {
            "id": 1,
            "nom": "Burger Royal",
            "image": "https://www.planb77.fr/produit/1614_192.png",
            "prix": 1000
          },
          {
            "id": 2,
            "nom": "Burger Royal",
            "image": "https://fastburger-lens.fr/wp-content/uploads/2021/08/Boursin-FastBurger.png",
            "prix": 1000
          },
          {
            "id": 3,
            "nom": "Burger Royal",
            "image": "https://chamasburger.com/wp-content/uploads/2020/09/CHEESEBURGER-BOURSIN.png",
            "prix": 1000
          },
          {
            "id": 4,
            "nom": "Burger Royal",
            "image": "https://www.burger-king.sk/assets/frontend/images/productImages/product_img_d3c6300ce125408ac155077d4f7018de.png",
            "prix": 1000
          },
          {
            "id": 5,
            "nom": "Burger Royal",
            "image": "https://media.timeout.com/images/105182876/630/472/image.jpg",
            "prix": 1000
          },
        ],
        menus:[
          {
            "id": 6,
            "nom": "Menus de burgers raclletes",
            "image": "https://images.deliveryhero.io/image/fd-kh/LH/t7dv-hero.jpg",
            "prix": 5500,
            "burgers": [
              {
                "id": 2,
                "nom": "Burger Royal",
                "image": "https://fastburger-lens.fr/wp-content/uploads/2021/08/Boursin-FastBurger.png",
                "prix": 1000
              }
            ]
          },
          {
            "id": 7,
            "nom": "Menus du jour",
            "image": "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/3/b/t/p3683-164007826661c19bba6cb1d.jpg?tr=tr:n-xlarge",
            "prix": 3000,
            "burgers": [
              {
                "id": 2,
                "nom": "Burger Royal",
                "image": "https://fastburger-lens.fr/wp-content/uploads/2021/08/Boursin-FastBurger.png",
                "prix": 1000
              }
            ]
          },
          {
            "id": 8,
            "nom": "Menus Régaleur",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS99vGj8W-HTIrKTazl_hpjec7oo3Fv7Jrf5A&usqp=CAU",
            "prix": 3500,
            "burgers": [
              {
                "id": 2,
                "nom": "Burger Royal",
                "image": "https://fastburger-lens.fr/wp-content/uploads/2021/08/Boursin-FastBurger.png",
                "prix": 1000
              }
            ]
          },
          {
            "id": 9,
            "nom": "Menus Régaleur",
            "image": "https://imageproxy.wolt.com/venue/5e0e06b46b59ea70a1743bd1/7a50a7c4-4434-11ea-9302-0a586474862c_BK%20menubillede.png",
            "prix": 3500,
            "burgers": [
              {
                "id": 2,
                "nom": "Burger Royal",
                "image": "https://fastburger-lens.fr/wp-content/uploads/2021/08/Boursin-FastBurger.png",
                "prix": 1000
              }
            ]
          },
          {
            "id": 10,
            "nom": "Menus Régaleur",
            "image": "https://s3.me-south-1.amazonaws.com/api-mena.production/images/discount_images/2022-05-06/fc30fabbb3cf008ac3a3a0fe53997433.jpeg",
            "prix": 3500,
            "burgers": [
              {
                "id": 2,
                "nom": "Burger Royal",
                "image": "https://fastburger-lens.fr/wp-content/uploads/2021/08/Boursin-FastBurger.png",
                "prix": 1000
              }
            ]
          }
        ]
      }

      this.produits = tab.burgers.concat(tab.menus);
  }

  
  
}
