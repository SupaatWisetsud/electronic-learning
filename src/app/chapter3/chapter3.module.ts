import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chapter3Component } from './chapter3.component';

import { Chapter3RoutingModule } from './chapter3.routing.module'
import { PosttestComponent } from './posttest/posttest.component';
import { PrefaceComponent } from './preface/preface.component';
import { PretestComponent } from './pretest/pretest.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WorkshopComponent } from './workshop/workshop.component';



@NgModule({
  declarations: [Chapter3Component, PosttestComponent, PrefaceComponent, PretestComponent, SidebarComponent, WorkshopComponent],
  imports: [
    CommonModule,
    Chapter3RoutingModule
  ]
})
export class Chapter3Module { }
