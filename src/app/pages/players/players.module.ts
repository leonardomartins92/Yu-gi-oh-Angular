import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersComponent } from './players.component';
import { PlayersRoutingModule } from './players.routing';
import { PlayersService } from './players.service';




@NgModule({
  declarations: [
    PlayersComponent
  ],
  imports: [
    CommonModule,
    PlayersRoutingModule,
  ],
  providers:[
    PlayersService
  ]
})
export class PlayersModule { }
