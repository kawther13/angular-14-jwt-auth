import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

 
  constructor(private http: HttpClient) { }
  get() {
    return this.http.get<Client[]>('http://localhost:8080/Client');
  }
  create(clt: Client) {
    return this.http.post<Client>('http://localhost:8080/Client', clt);
  }
  getById(id: number) {
    return this.http.get<Client>(`http://localhost:8080/Client/${id}`);
   }
    
   update(clt:Client){
    return this.http.put(`http://localhost:8080/Client`,clt);
   }
   delete(id:number){
    return this.http.delete<Client>(`http://localhost:8080/Client/${id}`);
 }
}
