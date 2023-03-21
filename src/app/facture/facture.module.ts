import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { CreatAchatComponent } from './creat-achat/creat-achat.component';
import { EditAchatComponent } from './edit-achat/edit-achat.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    HomeComponent,
    CreatAchatComponent,
    EditAchatComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class FactureModule { }
