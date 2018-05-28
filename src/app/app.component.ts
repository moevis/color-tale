import { Component, Input, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Color, ColorInfo, colorSetName, ColorSet } from './colors';
import { colorMap } from './colors.data';
import { imgSub, resetImgSub } from './imageEvent';
import { trigger, transition, style, animate, group } from '@angular/animations';

declare function ColorThief(): void;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('itemAnim', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(900)
      ]),
      transition(':leave', [
        animate('0.5s 0.2s ease', style({
          opacity: 0
        }))
      ])
    ]),
    trigger('titleAnim', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)'}),
        animate(300),
      ])
    ])
  ],
})
export class AppComponent implements OnInit {
  colors: Color[];
  standardColors: ColorInfo[];
  colorSet: ColorSet;
  colorNum = 6;
  standarColorBannerShow: boolean;

  getColor(img: HTMLImageElement) {
    this.standarColorBannerShow = true;
    const colorThief = new ColorThief();
    const cs = colorThief.getPalette(img, this.colorNum);
    const colors = cs.map((c) => {
      return Color.fromRGB(c);
    });


    if (this.colors.length === colors.length) {
      this.colors.forEach((c, i) => {
        c.copyFrom(colors[i]);
      });
    } else {
      this.colors = cs.map((c) => {
        return Color.fromRGB(c);
      });
    }


    const colorSet = new Set<ColorInfo>();
    colors.forEach((color) => {
      let mostSimilarColorIndex = 0;
      let similarity = 0.0;

      colorMap[this.colorSet].forEach((colorInfo, index) => {
        const cosSimilarity = colorInfo.color.distanceTo(color);
        if (cosSimilarity > similarity) {
          mostSimilarColorIndex = index;
          similarity = cosSimilarity;
        }
      });

      colorSet.add(colorMap[this.colorSet][mostSimilarColorIndex]);
    });

    const newStandardColors = Array.from(colorSet);
    if (this.standardColors.length === newStandardColors.length) {
      this.standardColors.forEach((c, i) => {
        c.copyFrom(newStandardColors[i]);
      });
    } else {
      this.standardColors = newStandardColors;
    }
  }

  feelingLucky() {
    this.colors = [];
    this.standarColorBannerShow = false;
    if (this.standardColors.length === this.colorNum) {
    } else {
      this.standardColors = Array(this.colorNum);
      for (let i = 0; i < this.colorNum; i++) {
        this.standardColors[i] = new ColorInfo('', '', '#000000');
      }
    }
    const colorInfos = colorMap[this.colorSet];
    for (let i = 0; i < this.colorNum; i++) {
      const index = Math.floor(Math.random() * colorInfos.length);
      this.standardColors[i].copyFrom(colorInfos[index]);
    }
    resetImgSub.next(0);
  }

  showAll() {
    this.standarColorBannerShow = false;
    const colorInfos = colorMap[this.colorSet];

    for (let i = 0; i < colorInfos.length; i++) {
      const tmpColor = new ColorInfo('', '', '#000000');
      tmpColor.copyFrom(colorInfos[i]);
      this.standardColors[i] = tmpColor;
    }
    resetImgSub.next(0);
  }

  ngOnInit(): void {
    this.standardColors = [];
    this.colors = [];
    colorSetName.subscribe((e) => {
      this.colorSet = e;
      this.colors = [];
      this.standarColorBannerShow = false;
      this.standardColors = [];
    });
    this.standarColorBannerShow = false;
    imgSub.subscribe((img) => {
      this.getColor(img);
    })
  }
}
