import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chapter2Component } from './chapter2.component'

import { Chapter2RoutingModule } from './chapter2.routing.module'
import { PosttestComponent } from './posttest/posttest.component';
import { PrefaceComponent } from './preface/preface.component';
import { PretestComponent } from './pretest/pretest.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WorkshopComponent } from './workshop/workshop.component';



@NgModule({
  declarations: [Chapter2Component,PosttestComponent, PrefaceComponent, PretestComponent, SidebarComponent, WorkshopComponent],
  imports: [
    CommonModule,
    Chapter2RoutingModule
  ]
})
export class Chapter2Module { }
