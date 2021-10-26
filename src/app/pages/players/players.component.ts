import { Router} from '@angular/router'; 
import { Component, OnInit } from '@angular/core';
import { Player } from './players.models';
import { PlayersService } from './players.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  players$!: Observable<Player[]>;
  
  constructor(private playersService: PlayersService, private route: Router) { }

  ngOnInit(): void {
    this.players$ = this.playersService.getAll();
  }

  add() {
    this.route.navigate(['/register']);
  }

  edit(player: Player) {
    this.route.navigate(['/register', player.id], { queryParams: { op: 'edit' } });
  }

  delete(player: Player) {
    this.route.navigate(['/register', player.id], { queryParams: { op: 'del' } });
  }

}
