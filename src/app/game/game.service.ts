import { Injectable } from '@angular/core';
import { Collection } from '../mock/collection';
import { COLLECTIONS } from '../mock/mock-collections';

 const LOGO_IMG = "https://material.angularjs.org/latest/img/logo.svg";
 const CONGRATULATIONS_IMG = "https://dl.dropboxusercontent.com/s/e1t2hhowjcrs7f5/100daysui_100icon.png";

@Injectable()
export class GameService {
  private cards;
  private enableCount;
  private selectedCard;
  
  constructor() { }

  private startGame() {
    // TODO add a score
    this.setCards();
  }

  private isGameOver() {
    return this.enableCount === 0;
  }

  private getCards() {
    return this.cards;
  }

  private onCardSelected(card) {
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

  private getSelectedCard() {
    return this.selectedCard;
  }

  private setCards() {
    this.cards = [];
    this.enableCount = 0;

    for (let card in COLLECTIONS) {
      this.cards.push(this.generateCard(this.enableCount, COLLECTIONS[card]));
      this.enableCount++;
      this.cards.push(this.generateCard(this.enableCount, COLLECTIONS[card]));
      this.enableCount++;
    }
  }

  private getLogoUrl() {
    return LOGO_IMG;
  }

  private generateCard(id, c) {
    // TODO create a card class
    return {
        id: id,
        subid: c.id,
        name: c.name,
        url: c.url,
        enable: true,
        flipped : false
    };
  }

  private getProgress() {
    return  100 / this.cards.length * (this.cards.length - this.enableCount);
  }

  private getCongratulationImg() {
    return CONGRATULATIONS_IMG;
  }
}