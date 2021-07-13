import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards/cards.service';
import {Card} from '../cards/cards.models';
import { CardDeck } from './draw.models';
import { DrawService } from './draw.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cards: Card[] = [];
  deckCards: CardDeck[] = []; 
  active = 1;

  constructor(private cardsService: CardsService, private drawService: DrawService) { }

  ngOnInit(): void {
    this.cardsService.getAll().subscribe(cards => this.cards = cards);
    this.drawService.getDeckDraw().subscribe(draw=>{ this.deckCards = draw.cards,
      console.log(this.deckCards)} )
    
  }

}
