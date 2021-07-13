import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards/cards.service';
import {Card} from '../cards/cards.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cards: Card[] = [];
  
  constructor(private cardsService: CardsService) { }

  ngOnInit(): void {
    this.cardsService.getAll().subscribe(cards => this.cards = cards);
  }

}
