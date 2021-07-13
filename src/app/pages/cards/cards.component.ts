import { Component, OnInit } from '@angular/core';
import { Card } from './cards.models';
import { CardsService } from './cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  cards: Card[] = [];
  
  constructor(private cardsService: CardsService) { }

  ngOnInit(): void {
    this.cardsService.getAll().subscribe(cards=>this.cards=cards);
  }

  add() {
    
  }

  edit(card: Card) {
    
  }

  delete(card: Card) {
    
  }

}
