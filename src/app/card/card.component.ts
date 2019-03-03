import { Component, OnInit, Input } from '@angular/core';
import { GameService } from '../game/game.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card;

  constructor(private gameService : GameService) { }

  ngOnInit() {
  }

  onSelect() {
    if (this.card.enable) {
      this.gameService.onCardSelected(this.card);
    }
  }

  isSelectedCard() {
    const selected = this.gameService.getSelectedCard();
    return selected && selected.id === this.card.id;
  }

}