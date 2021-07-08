import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  images = [
    'assets/cards/Fusão das Figuras.png',
    'assets/cards/Guarda-costas Imperiais.png',
    'assets/cards/O Cavaleiro do Coringa.png',
    'assets/cards/Sequência do Coringa.png',
    'assets/cards/Triunfo Coringa Arcano.png'

  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
