import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chapter4Component } from './chapter4.component';
import { KatexModule } from 'ng-katex';


import { Chapter4RoutingModule } from './chapter4.routing.module'
import { PosttestComponent } from './posttest/posttest.component';
import { PrefaceComponent } from './preface/preface.component';
import { PretestComponent } from './pretest/pretest.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import {
  BooleanAlgebraLawComponent,
  ConvertingTruthTablesIntoBooleanExpressionsComponent,
  DeMorganTheoremComponent,
  SimplifyingBooleanExpressionsComponent,
  StandardBooleanFormsComponent,
  SumOfProductsExpressionsComponent,
  SummaryEndChapterComponent,
 } from './material/index'



@NgModule({
  declarations: [  
    BooleanAlgebraLawComponent,
    ConvertingTruthTablesIntoBooleanExpressionsComponent,
    DeMorganTheoremComponent,
    SimplifyingBooleanExpressionsComponent,
    StandardBooleanFormsComponent,
    SumOfProductsExpressionsComponent,
    SummaryEndChapterComponent,
    Chapter4Component, 
    PosttestComponent, 
    PrefaceComponent, 
    PretestComponent, 
    SidebarComponent, 
    WorkshopComponent],
  imports: [
    CommonModule,
    Chapter4RoutingModule,
    KatexModule,
    ReactiveFormsModule, 
    FormsModule
  ]
})
export class Chapter4Module { }
