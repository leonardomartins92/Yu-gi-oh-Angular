import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Draw } from './draw.models';

@Injectable({
  providedIn: 'root'
})
export class DrawService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getDeckDraw(): Observable<Draw> {
    return this.httpClient.get<Draw>(`${environment.deckApi}/deck/new/draw/?count=4`);
  }
  
}
