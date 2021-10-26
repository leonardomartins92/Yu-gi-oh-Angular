import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthenticatedComponent } from './authenticated.component';
import { AuthenticatedRoutingModule } from './authenticated.routing';


@NgModule({
  declarations: [
    AuthenticatedComponent,    
  ],
  imports: [
    CommonModule,
    AuthenticatedRoutingModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers:[
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ]
})
export class AuthenticatedModule { }
