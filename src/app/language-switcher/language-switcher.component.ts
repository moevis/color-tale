import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { colorSetName, ColorSet } from '../colors';
import { debug } from 'util';
import { resetImgSub } from '../imageEvent';


@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.css'],
})
export class LanguageSwitcherComponent implements OnInit {
  @ViewChild('switcher') switcher: ElementRef;
  @ViewChild('switchHighlight') switchHighlight: ElementRef;

  languages = [{
    label: '中文',
    value: 'cn',
  }, {
    label: '日語',
    value: 'jp',
  }, {
    label: 'US',
    value: 'us',
  }, {
    label: 'UK',
    value: 'uk',
  }, {
    label: 'FR',
    value: 'fr',
  }];
  buttons: HTMLButtonElement[];
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.buttons = this.switcher.nativeElement.querySelectorAll('button');
      this.switchTo('cn', 0);
    }, 100);
  }
  switchTo(language: ColorSet, index: number) {
    colorSetName.next(language);
    this.buttons.forEach(b => b.classList.remove('active'));
    this.buttons[index].classList.add('active');

    const w = this.buttons[index].offsetWidth;
    const x = this.buttons[index].offsetLeft;

    this.switchHighlight.nativeElement.style.width = `${w}px`;
    this.switchHighlight.nativeElement.style.transform = `translateX(${x}px)`;

    resetImgSub.next(0);
  }
}

