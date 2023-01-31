export interface Burger {
	id: number;
	nom: string;
	image: string;
	prix: number;
};

export interface Boisson {
	id: number;
	nom: string;
	image: string;
	prix: number;
};

export interface Frite {
	id: number;
	nom: string;
	image: string;
	prix: number;
};

export interface Menu {
	id: number;
	nom: string;
	prix: number;
	image: string;
	burgers?:Burger[];
	frites?:Frite[];
	boissons?:Boisson[];
};

export interface Catalogue {
	burgers: Burger[];
	menus: Menu[];
}
