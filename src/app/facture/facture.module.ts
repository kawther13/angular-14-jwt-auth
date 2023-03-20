import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { CreatAchatComponent } from './creat-achat/creat-achat.component';



@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    HomeComponent,
    CreatAchatComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FactureModule { }
