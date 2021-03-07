import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { Chapter2Component } from './chapter2.component'

import { Chapter2RoutingModule } from './chapter2.routing.module'
import { PosttestComponent } from './posttest/posttest.component';
import { PrefaceComponent } from './preface/preface.component';
import { PretestComponent } from './pretest/pretest.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WorkshopComponent } from './workshop/workshop.component';



@NgModule({
  declarations: [Chapter2Component,PosttestComponent, PrefaceComponent, PretestComponent, SidebarComponent, WorkshopComponent],
=======
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
>>>>>>> 8b1ddaa8372fe05d0a3701cfd142cbc68e377d2b
  imports: [
    CommonModule,
    Chapter2RoutingModule
  ]
})
<<<<<<< HEAD
export class Chapter2Module { }
=======
export class Chapter2Module { }
>>>>>>> 8b1ddaa8372fe05d0a3701cfd142cbc68e377d2b
