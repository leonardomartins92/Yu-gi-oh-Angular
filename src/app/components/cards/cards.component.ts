import { Component, OnInit } from '@angular/core';
import { cards } from 'src/app/cards';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
 
  cards = cards;
    
  constructor() { }

  ngOnInit(): void {
  }

}
