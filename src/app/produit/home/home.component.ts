import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  allProducts: Produit[]=[];
  deleteModal: any;
    idTodelete!: number; product= 0;
  constructor (private productService: ProduitService){}
    
  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
      this.get();
      
    }
    get()
    {
      this.productService.get().subscribe((data)=>{this.allProducts=data;
       // console.log(data);
      });
    }
    openDeleteModal(id: number) {
      this.idTodelete = id;
      this.deleteModal.show();
    }
      delete() {
        this.productService.delete(this.idTodelete).subscribe({
          next: (data) => {
            this.allProducts = this.allProducts.filter(_ => _.id != this.idTodelete)
            this.deleteModal.hide();
          },
        });
      }
    }
  