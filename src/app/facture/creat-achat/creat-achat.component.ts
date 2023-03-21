import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from 'src/app/produit/produit';
import { ProduitService } from 'src/app/produit/produit.service';
import { Achat } from '../achat';
import { AchatService } from '../achat.service';

@Component({
  selector: 'app-creat-achat',
  templateUrl: './creat-achat.component.html',
  styleUrls: ['./creat-achat.component.css']
})

export class CreatAchatComponent implements OnInit{
  allProduits: Produit[]=[];
  currentProduct!: Produit;
    achatForm: Achat = {

      id: 0,
      quantity: 0,
      price: 0,
        tax: 0,
        discount: 0,
        facture: {
          id: 0 ,  
          total: 0,
            tax: 0,
            stamp: 0,
            date: new Date(),
            discount: 0,
            client: {
              id : 0,
              nameClient : '' ,
              email:''
            } ,     
        } , 
        produit: {
          id:0,
          name:'',
          price:0,
          tax:0
        },
      


    };

  
    constructor(private saleService:AchatService,
      private productService: ProduitService,
      private router:Router) {}
   
    ngOnInit(): void {
      
      this.get();
  
    }
    get()
    {
      this.productService.get().subscribe((data)=>{this.allProduits=data;
       // console.log(data);
    });
  }

  onChangeName(e:any): void {
  console.log("idProduct  : ",e.target.value);
    this.productService.getById(this.achatForm.produit.id).subscribe((data)=>{
      console.log("data : ", data);
      this.currentProduct=data;
      this.achatForm.produit = data;
      console.log("price : ", this.achatForm.price);
   });
   //this.saleForm.product = this.currentProduct;
   
  }

   /*
    create(): void{
      this.saleService.create(this.saleForm)
      .subscribe({
        next:(data: any) => {
          console.log('saving sale ');
         // this.router.navigate(["/sale/home"])
        },
        error:(err: any) => {
          console.log(err);
        }
      });
    }
    */
  }

