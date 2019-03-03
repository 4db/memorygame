import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material-module';


import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { GameComponent } from './game/game.component';
import { CardComponent } from './card/card.component';
import { GameService } from './game/game.service';

@NgModule({
  imports:      [
      BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule
    ],
  declarations: [ AppComponent, BoardComponent, GameComponent, CardComponent ],
  bootstrap:    [ AppComponent ],
  providers: [GameService]
})
export class AppModule { }
