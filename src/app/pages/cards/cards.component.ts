import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CardDeleteComponent } from './card-delete/card-delete.component';
import { CardFormComponent } from './card-form/card-form.component';
import { Card } from './cards.models';
import { CardsService } from './cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  cards: Card[] = [];
  
  constructor(private cardsService: CardsService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.cardsService.getAll().subscribe(cards=>this.cards=cards);
  }

  add() {
    const modalRef = this.modalService.open(CardFormComponent);
    modalRef.result.then(card=>this.cards.push(card));
  }

  edit(card: Card) {
    const modalRef = this.modalService.open(CardFormComponent);
    modalRef.componentInstance.card = card;
    modalRef.result.then(card => {
      const cardIndex = this.cards.findIndex(x => x.id == card.id);
      this.cards[cardIndex] = card;
    })
  }

  delete(card: Card) {
    const modalRef = this.modalService.open(CardDeleteComponent);
    modalRef.componentInstance.card = card;
    modalRef.result.then(card=> this.cards = this.cards.filter(x => x.id !== card.id));
  }

}


