import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {HeaderComponent} from './header/header.component';
import { TagComponent } from './tag/tag.component';
import { JobComponent } from './job/job.component';
import { BetterHighlightDirective } from './better-highlight.directive'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TagComponent,
    JobComponent,
    BetterHighlightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
