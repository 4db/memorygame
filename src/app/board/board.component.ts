import { Component, OnInit, Input } from '@angular/core';
import { Collection } from '../game/collection'

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Input() cards: Collection;

  constructor() { }

  ngOnInit() {
  }

}