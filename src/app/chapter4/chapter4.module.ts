import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chapter4Component } from './chapter4.component';

import { Chapter4RoutingModule } from './chapter4.routing.module'
<<<<<<< HEAD
import { PosttestComponent } from './posttest/posttest.component';
import { PrefaceComponent } from './preface/preface.component';
import { PretestComponent } from './pretest/pretest.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WorkshopComponent } from './workshop/workshop.component';



@NgModule({
  declarations: [Chapter4Component, PosttestComponent, PrefaceComponent, PretestComponent, SidebarComponent, WorkshopComponent],
=======
import { PrefaceComponent } from './preface/preface.component'
import { SidebarComponent } from './sidebar/sidebar.component'


@NgModule({
  declarations: [
    Chapter4Component,
    PrefaceComponent,
    SidebarComponent
  ],
>>>>>>> 8b1ddaa8372fe05d0a3701cfd142cbc68e377d2b
  imports: [
    CommonModule,
    Chapter4RoutingModule
  ]
})
export class Chapter4Module { }
