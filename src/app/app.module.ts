import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ScrollAnimationDirective } from './shared/directives/scroll-animation.directive';

@NgModule({
  declarations: [
    ScrollAnimationDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
