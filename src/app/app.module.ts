import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColorCardComponent } from './color-card/color-card.component';
import { LanguageSwitcherComponent } from './language-switcher/language-switcher.component';
import {ClipboardModule} from 'ngx-clipboard';
import { DropFieldComponent } from './drop-field/drop-field.component';
import { TooltipModule } from 'ng2-tooltip-directive';


@NgModule({
  declarations: [
    AppComponent,
    ColorCardComponent,
    LanguageSwitcherComponent,
    DropFieldComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClipboardModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
