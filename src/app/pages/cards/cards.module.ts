import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards.component';
import { CardsRoutingModule } from './cards.routing';
import { CardFormComponent } from './card-form/card-form.component';
import { CardDeleteComponent } from './card-delete/card-delete.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardsService } from './cards.service';


@NgModule({
  declarations: [
    CardsComponent,
    CardFormComponent,
    CardDeleteComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    ReactiveFormsModule
  ],
  providers:[
    CardsService
  ]
})
export class CardsModule { }
