import { Player } from "../players/players.models";
import { Play } from "./play.models";

export interface Game {
    id?:number;
    plays: Play[],
    players: Player []
  }