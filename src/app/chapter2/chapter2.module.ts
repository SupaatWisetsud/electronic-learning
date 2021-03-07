import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chapter2Component } from './chapter2.component';

import { Chapter2RoutingModule } from './chapter2.routing.module'
import { PrefaceComponent } from './preface/preface.component'
import { SidebarComponent } from './sidebar/sidebar.component'

@NgModule({
  declarations: [
    Chapter2Component,
    PrefaceComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    Chapter2RoutingModule
  ]
})
export class Chapter2Module { }