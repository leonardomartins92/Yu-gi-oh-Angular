import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Card } from '../cards.models';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnInit {

  @Input() card!: Card;
  
  public cardForm = new FormGroup({
    id: new FormControl(null),
    nome: new FormControl(null, [Validators.required]),
    descricao: new FormControl(null),
    atributo_ataque: new FormControl(null),
    atributo_defesa: new FormControl(null)
  });

  public showFeedbackOnlyPlay = false;

  private subscriptions = new Subscription();

  constructor(
    private cardsService: CardsService,
    private activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
    this.loadForm();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  loadForm() {
    if (this.card) {
      this.cardForm.patchValue(this.card);
    }
    
  }

  close(card?: Card) {
    this.activeModal.close(card);
  }

  submit() {
    const card: Card = this.cardForm.value;

    debugger;

    if (this.cardForm.invalid) {
      return;
    }

    this.cardsService
      .save(card)
      .subscribe(card => this.close(card));
  }

  
}
