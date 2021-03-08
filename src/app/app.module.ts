import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageModule } from './page/page.module'
<<<<<<< HEAD
import { Chapter1Module } from './chapter1/chapter1.module'
import { Chapter2Module } from './chapter2/chapter2.module'
import { Chapter3Module } from './chapter3/chapter3.module'
import { Chapter4Module } from './chapter4/chapter4.module'
=======
import { Chapter1Module } from './chapter1/chapter1.module';
import { Chapter2Module } from './chapter2/chapter2.module';
import { Chapter3Module } from './chapter3/chapter3.module';
import { Chapter4Module } from './chapter4/chapter4.module';


>>>>>>> 8b1ddaa8372fe05d0a3701cfd142cbc68e377d2b

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PageModule,
    Chapter1Module,
    Chapter2Module,
    Chapter3Module,
    Chapter4Module,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
