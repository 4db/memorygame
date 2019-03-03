import { Injectable } from '@angular/core';
import { Collection } from '../mock/collection';
import { COLLECTIONS } from '../mock/mock-collections';

//const URL = "/assets/";
const URL = "/memorygame/src/assets/";
const LOGO_IMG = "logo.png";
const CONGRATULATIONS_IMG = "cong.png";

@Injectable()
export class GameService {
  cards;
  enableCount;
  selectedCard;
  
  constructor() {
  }

  startGame() {
    // TODO add a score
    this.setCards();
    this.cards = this.shuffle(this.cards);
  }

  isGameOver() {
    return this.enableCount === 0;
  }

  getCards() {
    return this.cards;
  }

  onCardSelected(card) {
    card.flipped = true;
    if (!this.selectedCard) {
      this.selectedCard = card;
      return;
    }
    if (this.selectedCard.subid === card.subid && this.selectedCard.id !== card.id) {
      this.selectedCard.enable = false;
      card.enable = false;
      this.selectedCard.flipped = true;
      card.flipped = true;
      this.enableCount -= 2;
    }
    else {
      setTimeout((selected)=> {
        card.flipped = false;
        selected.flipped = false;

        selected.enable = true;
        card.enable = true;
      }, 600, this.selectedCard);
    }
    this.selectedCard = undefined;
  }

  getSelectedCard() {
    return this.selectedCard;
  }

  setCards() {
    this.cards = [];
    this.enableCount = 0;

    for (let card in COLLECTIONS) {
      this.cards.push(this.generateCard(this.enableCount, COLLECTIONS[card]));
      this.enableCount++;
      this.cards.push(this.generateCard(this.enableCount, COLLECTIONS[card]));
      this.enableCount++;
    }
  }

  // Fisher--Yates Algorithm
  shuffle(array) {
    let counter = array.length, temp, index;
    while (counter > 0) {
      // Pick a random index
      index = Math.floor(Math.random() * counter);
      // Decrease counter by 1
      counter--;
      // And swap the last element with it
      temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }
    return array;
  }

  getLogoUrl() {
    return this.getURL() + LOGO_IMG;
  }

  generateCard(id, c) {
    // TODO create a card class
    return {
        id: id,
        subid: c.id,
        name: c.name,
        url: this.getURL() + c.url,
        enable: true,
        flipped : false
    };
  }

  getProgress() {
    return  100 / this.cards.length * (this.cards.length - this.enableCount);
  }

  getCongratulationImg() {
    return this.getURL() + CONGRATULATIONS_IMG;
  }

  getURL() {
    return URL;
  }
}