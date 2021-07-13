import { Component, OnInit } from '@angular/core';
import { Player } from './players.models';
import { PlayersService } from './players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  players: Player[] = [];
  
  constructor(private playersService: PlayersService) { }

  ngOnInit(): void {
    this.playersService.getAll().subscribe(player=>this.players=player);
  }

  add() {
    
  }

  edit(player: Player) {
    
  }

  delete(player: Player) {
    
  }

}
