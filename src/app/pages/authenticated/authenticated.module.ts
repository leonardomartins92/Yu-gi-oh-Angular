import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticatedComponent } from './authenticated.component';
import { AuthenticatedRoutingModule } from './authenticated.routing';


@NgModule({
  declarations: [
    AuthenticatedComponent
  ],
  imports: [
    CommonModule,
    AuthenticatedRoutingModule  
  ]
})
export class AuthenticatedModule { }
