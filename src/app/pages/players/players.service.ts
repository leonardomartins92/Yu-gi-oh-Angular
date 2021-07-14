import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Player } from './players.models';


@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private httpClient: HttpClient) { }

  
  getAll(){
    return this.httpClient.get<Player[]>(`${environment.api}/players`);
  }

  getOne(id: string){
    return this.httpClient.get<Player>(`${environment.api}/players/${id}`);
  }

  delete(id: number){
    return this.httpClient.delete<Player>(`${environment.api}/players/${id}`);
  }

  save(card: Player){
    if(card.id){
      return this.httpClient.put<Player>(`${environment.api}/players/${card.id}`, card);
    }else {
      return this.httpClient.post<Player>(`${environment.api}/players`, card);
    }
  }
}
