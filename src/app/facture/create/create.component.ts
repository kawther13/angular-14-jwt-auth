import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/produit/produit';
import{Achat} from 'src/app/facture/achat';
import { AchatService } from '../achat.service';
import { ProduitService } from 'src/app/produit/produit.service';
import { Router } from '@angular/router';
import { Facture } from '../facture';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  invoiceForm:Facture={

    id: 0 ,   
	total: 0,
    tax: 0,
    stamp: 0,
    date: new Date(),
    discount: 0,
    client:  {
      id: 0,
      nameClient: '',
      email:''
    } }}
  
