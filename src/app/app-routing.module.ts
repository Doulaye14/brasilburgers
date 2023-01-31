import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CatalogueComponent } from "./catalogue/catalogue.component";
import { SingleProduitComponent } from "./single-produit/single-produit.component";
import { HttpClientModule } from "@angular/common/http";
import { PanierComponent } from "./panier/panier.component";


const routes: Routes = [
	{path: '', component: CatalogueComponent},
	{path: 'produits', component: CatalogueComponent},
	{path: 'produits/:id', component: SingleProduitComponent},
	{path: 'panier', component: PanierComponent}
]

@NgModule({
	imports:[
		RouterModule.forRoot(routes),
		HttpClientModule
	],
	exports:[
		RouterModule,
	]
})

export class AppRoutingModule{}