import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Card } from '../cards/cards.models';
import { CardsService } from '../cards/cards.service';
import { Player } from '../players/players.models';
import { PlayersService } from '../players/players.service';
import { Game } from './games.models';
import { GamesService } from './games.service';
import { Play } from './play.models';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  players: Player[] = [];
  cards: Card[] = [];
  playersInGame: Player[]=[];
   
  play: Play ={
    card: this.cards[0],
    player: this.players[0]
  };

  clicked1 = false;
  clicked2 = false;
  clicked3 = false;
  clicked4 = false;

  playRealized = [false,false,false, false];
  
  game: Game = {
    plays: []
  }
     
  constructor(
    private playerService: PlayersService, 
    private cardService: CardsService, 
    private gameService:GamesService) { }

  ngOnInit(): void {
    this.playerService.getAll().subscribe(p => this.players = p),
    this.cardService.getAll().subscribe(c=>this.cards = c)
    }

  addPlayer(playerId: string) {
    this.playerService.getOne(playerId).subscribe(player => {
      this.playersInGame.push(player),
        this.players = this.players.filter(p => p.id != playerId)
    });
  }

  addCard(cardId: number, playerIndex:number){
    this.playRealized[playerIndex] = true;
    this.cardService.getOne(cardId).subscribe(c=>{
      this.play.card = c,
      this.play.player = this.playersInGame[playerIndex],
      this.game.plays.push(Object.assign({}, this.play))            
    });
    setTimeout(()=>{this.playRealized[playerIndex] = false;}, 3000)  
    
  }

  submit(){
    this.gameService.save(this.game).subscribe(()=> window.location.reload())
  }

  
}
