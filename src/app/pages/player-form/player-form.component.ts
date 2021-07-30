import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from '../players/players.models';
import { PlayersService } from '../players/players.service';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss']
})
export class PlayerFormComponent implements OnInit {

   player!: Player;
   op: string ='';
   action ='Create';
   block = false;
  
  public playerForm = new FormGroup({
    id: new FormControl(null),
    nome: new FormControl(null, [Validators.required]),
    cpf: new FormControl(null),
    email: new FormControl(null)
  });


  constructor(
    private activatedRoute: ActivatedRoute, 
    private playersService: PlayersService, 
    private route: Router) { }

  ngOnInit(): void {
    this.op = this.activatedRoute.snapshot.queryParamMap.get('op') || '';
    const playerId = this.activatedRoute.snapshot.paramMap.get('id') || '';
    this.playersService.getOne(playerId).subscribe(player =>{
       this.player = player,
       this.loadForm(),
       this.setAction();}
       );
       
  }

  setAction(){
    if(this.op == 'del'){
      this.action = 'Delete';
      this.block = true;
    }
    if(this.op === 'edit'){
      this.action = 'Edit';
    }
  }

  loadForm() {
    if (this.player) {
      this.playerForm.patchValue(this.player);
    }
    
  }

  close(){
    this.route.navigate(['/players']);
  }

  submit(){
    this.player = this.playerForm.value;
    if(this.op==='del'){
      this.playersService
      .delete(this.player.id)
      .subscribe(() => this.close());
    }
    else{
      this.playersService
      .save(this.player)
      .subscribe(() => this.close());
    }
  }

}
