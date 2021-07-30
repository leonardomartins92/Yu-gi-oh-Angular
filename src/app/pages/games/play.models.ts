import { Card } from "../cards/cards.models";
import { Player } from "../players/players.models";

export interface Play {
    player?: Player;
    card?: Card;
    
  }