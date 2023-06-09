import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KeyValuePipe } from '@angular/common';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [KeyValuePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
