import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.scss']
})
export class NewCardComponent implements OnInit {

  newCardForm = this.formBuilder.group({
    name: '',
    description: ''
  })

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(){
     this.newCardForm.reset();
     window.location.reload();
  }

}
