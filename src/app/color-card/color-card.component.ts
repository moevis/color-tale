import { Component, OnInit, Input } from '@angular/core';
import { ColorInfo } from '../colors';

@Component({
  selector: 'app-color-card',
  templateUrl: './color-card.component.html',
  styleUrls: ['./color-card.component.css']
})

export class ColorCardComponent implements OnInit {
  @Input('colorInfo') colorInfo: ColorInfo;
  constructor() { }

  ngOnInit() {
  }
}
