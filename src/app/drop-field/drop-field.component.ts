import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { imgSub, resetImgSub } from '../imageEvent';

@Component({
  selector: 'app-drop-field',
  templateUrl: './drop-field.component.html',
  styleUrls: ['./drop-field.component.css']
})
export class DropFieldComponent implements OnInit {

  @ViewChild('inputFile') inputFile: ElementRef;
  @ViewChild('previewImage') previewImage: ElementRef;

  constructor() { }

  ngOnInit() {
    resetImgSub.subscribe(() => {
      this.previewImage.nativeElement.src = '';
    })
  }

  changeFile(ev: Event) {
    console.log(ev);
    const files: File[] = (ev.target as any).files;
    if (files.length > 0) {
        const file = files[0];
        if (file.type.match('image/*')) {
            this.loadImage(file);
        }
    }
  }

  loadImage(f) {
    const reader = new FileReader();
  
    reader.onload = e => {
      this.previewImage.nativeElement.src = (e.target as any).result;
      setTimeout(() => {
        imgSub.next(this.previewImage.nativeElement);
      }, 100);
    };

    reader.readAsDataURL(f);
  }

  drop(ev: DragEvent) {
    ev.preventDefault();

    if (ev.dataTransfer.items) {
      for (let i = 0; i < ev.dataTransfer.items.length; i++) {
        if (ev.dataTransfer.items[i].kind === 'file') {
            const file = ev.dataTransfer.items[i].getAsFile();
            if (file.type.match('image/*')) {
                this.loadImage(file);
                break;
            }
        }
      }
    }
  }

  dragover(ev: Event) {
    ev.stopPropagation();
    ev.preventDefault();
  }
}
