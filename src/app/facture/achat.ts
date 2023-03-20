import { Produit } from "../produit/produit";
import { Facture } from "./facture";

export interface Achat {
    id: number ;  
	quantity: number; 
	price: number;
    tax: number;
    discount: number;
    facture:Facture ; 
    produit: Produit;

}
