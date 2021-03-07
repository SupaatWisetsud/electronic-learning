import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chapter3Component } from './chapter3.component';

import { Chapter3RoutingModule } from './chapter3.routing.module'
import { PrefaceComponent } from './preface/preface.component'
import { SidebarComponent } from './sidebar/sidebar.component'

@NgModule({
  declarations: [
    Chapter3Component,
    PrefaceComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    Chapter3RoutingModule
  ]
})
export class Chapter3Module { }
