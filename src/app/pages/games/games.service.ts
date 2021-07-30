import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Game } from './games.models';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private httpClient: HttpClient) { }

  save(game: Game){
       return this.httpClient.post<Game>(`${environment.api}/games`, game);
    }
  
}
