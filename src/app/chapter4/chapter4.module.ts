import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chapter4Component } from './chapter4.component';

import { Chapter4RoutingModule } from './chapter4.routing.module'
import { PrefaceComponent } from './preface/preface.component'
import { SidebarComponent } from './sidebar/sidebar.component'


@NgModule({
  declarations: [
    Chapter4Component,
    PrefaceComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    Chapter4RoutingModule
  ]
})
export class Chapter4Module { }
