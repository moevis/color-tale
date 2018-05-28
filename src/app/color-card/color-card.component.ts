import { Component, OnInit, Input } from '@angular/core';
import { ColorInfo } from '../colors';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-color-card',
  templateUrl: './color-card.component.html',
  styleUrls: ['./color-card.component.css'],
  animations: [
    trigger('cardAnim', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(300),
      ])
    ])
  ]
})

export class ColorCardComponent implements OnInit {
  @Input('colorInfo') colorInfo: ColorInfo;
  constructor() { }

  ngOnInit() {
  }
}
