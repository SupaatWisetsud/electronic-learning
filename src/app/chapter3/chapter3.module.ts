import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chapter3Component } from './chapter3.component';
import { KatexModule } from 'ng-katex';


import { Chapter3RoutingModule } from './chapter3.routing.module'
import { PosttestComponent } from './posttest/posttest.component';
import { PrefaceComponent } from './preface/preface.component';
import { PretestComponent } from './pretest/pretest.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import {     
  GateWithMoreThanInputsComponent,
  LogicIntegratedCircuitsComponent,
  SummaryEndChapterComponent,
  TheAndGateComponent,
  TheExclusiveNorGateComponent,
  TheExclusiveOrGateComponent,
  TheInverterGateAndBufferComponent,
  TheNandGateComponent,
  TheNotGateComponent,
  TheOrGeteComponent, 
} from './material/index'


@NgModule({
  declarations: [
    GateWithMoreThanInputsComponent,
    LogicIntegratedCircuitsComponent,
    SummaryEndChapterComponent,
    TheAndGateComponent,
    TheExclusiveNorGateComponent,
    TheExclusiveOrGateComponent,
    TheInverterGateAndBufferComponent,
    TheNandGateComponent,
    TheNotGateComponent,
    TheOrGeteComponent,
    Chapter3Component,
    PosttestComponent, 
    PrefaceComponent, 
    PretestComponent, 
    SidebarComponent, 
    WorkshopComponent],
  imports: [
    CommonModule,
    Chapter3RoutingModule,
    KatexModule,
    ReactiveFormsModule, 
    FormsModule
  ]
})
export class Chapter3Module { }
