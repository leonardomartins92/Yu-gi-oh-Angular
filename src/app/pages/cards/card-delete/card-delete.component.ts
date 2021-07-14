import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Card } from '../cards.models';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-card-delete',
  templateUrl: './card-delete.component.html',
  styleUrls: ['./card-delete.component.scss']
})
export class CardDeleteComponent implements OnInit {

  @Input() card!: Card;

  constructor(
    private cardsService: CardsService,
    private activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

  close(card?: Card) {
    this.activeModal.close(card);
  }

  delete() {
    this.cardsService
      .delete(this.card.id)
      .subscribe(() => this.close(this.card));
  }


}
