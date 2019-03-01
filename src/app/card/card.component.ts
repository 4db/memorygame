import { Component, OnInit, Input } from '@angular/core';
import { Collection } from '../game/collection'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card : Collection;

  constructor() { }

  ngOnInit() {
  }

}