import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produit } from './produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  
  constructor(private http: HttpClient) { }
  get() {
    return this.http.get<Produit[]>('http://localhost:8080/produit');
  }
  create(payload: Produit) {
    return this.http.post<Produit>('http://localhost:8080/produit', payload);
  }
  getById(id: number) {
    return this.http.get<Produit>(`http://localhost:8080/produit/${id}`);
   }
    
   update(payload:Produit){
    return this.http.put(`http://localhost:8080/produit`,payload);
   }
   delete(id:number){
    return this.http.delete<Produit>(`http://localhost:8080/produit/${id}`);
 }
   

}
