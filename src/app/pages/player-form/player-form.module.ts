import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerFormComponent } from './player-form.component';
import { PlayerFormRoutingModule } from './player-form.routing';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PlayerFormComponent
  ],
  imports: [
    CommonModule,
    PlayerFormRoutingModule,
    ReactiveFormsModule
  ]
})
export class PlayerFormModule { }
