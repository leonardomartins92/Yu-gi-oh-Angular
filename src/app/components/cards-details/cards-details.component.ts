import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card, cards } from 'src/app/cards';

@Component({
  selector: 'app-cards-details',
  templateUrl: './cards-details.component.html',
  styleUrls: ['./cards-details.component.scss']
})
export class CardsDetailsComponent implements OnInit {

  card: Card | undefined;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const cardIdFromRoute = Number(routeParams.get('cardId'));

    this.card = cards.find(card=> card.id === cardIdFromRoute);
  }

}
