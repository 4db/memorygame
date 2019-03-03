import { Component, OnInit, Input } from '@angular/core';
import { GameService } from '../game/game.service';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  constructor(private gameService : GameService) { }

  ngOnInit() {
  }

  getCards() {
    return this.gameService.getCards();
  }
}