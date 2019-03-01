import { Component, OnInit } from '@angular/core';
import { Collection } from './collection';
import { COLLECTIONS } from './mock-collections';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  cards = [];

  constructor() { }

  ngOnInit() {
    this.startGame();
  }

  startGame() {
    this.setCards();
  }

  setCards() {
    this.cards = COLLECTIONS.concat(COLLECTIONS);
  }

}