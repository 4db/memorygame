import { Injectable } from '@angular/core';
import { Collection } from '../mock/collection';
import { COLLECTIONS } from '../mock/mock-collections';

 const URL = "https://aldb.github.io/memorygame/src/assets/";
 const LOGO_IMG = "logo.png";
 const CONGRATULATIONS_IMG = "cong.png";

@Injectable()
export class GameService {
  cards;
  enableCount;
  selectedCard;
  
  constructor() { }

  startGame() {
    // TODO add a score
    this.setCards();
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
      this.enableCount -= 2;
    }
    else {
      setTimeout((s)=>{
        card.flipped = false;
        s.flipped = false; 
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

  getLogoUrl() {
    return URL + LOGO_IMG;
  }

  generateCard(id, c) {
    // TODO create a card class
    return {
        id: id,
        subid: c.id,
        name: c.name,
        url: URL + c.url,
        enable: true,
        flipped : false
    };
  }

  getProgress() {
    return  100 / this.cards.length * (this.cards.length - this.enableCount);
  }

  getCongratulationImg() {
    return URL + CONGRATULATIONS_IMG;
  }
}