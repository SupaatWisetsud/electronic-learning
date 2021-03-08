import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chapter4Component } from './chapter4.component';

import { Chapter4RoutingModule } from './chapter4.routing.module'
import { PosttestComponent } from './posttest/posttest.component';
import { PrefaceComponent } from './preface/preface.component';
import { PretestComponent } from './pretest/pretest.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WorkshopComponent } from './workshop/workshop.component';



@NgModule({
  declarations: [Chapter4Component, PosttestComponent, PrefaceComponent, PretestComponent, SidebarComponent, WorkshopComponent],
  imports: [
    CommonModule,
    Chapter4RoutingModule
  ]
})
export class Chapter4Module { }
