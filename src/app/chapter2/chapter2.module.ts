import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chapter2Component } from './chapter2.component'
import { KatexModule } from 'ng-katex';

import { AtftModule } from 'atft';
import { Chapter2RoutingModule } from './chapter2.routing.module'
import { PosttestComponent } from './posttest/posttest.component';
import { PrefaceComponent } from './preface/preface.component';
import { PretestComponent } from './pretest/pretest.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import {     
  BinaryAdditionComponent,
  BinaryDivisionComponent,
  BinaryMultiplicationComponent,
  BinarySubtractionComponent,
  ComplementOfNumbersComponent,
  NumberSystemComponent,
  NumberSystemConversionComponent,
  RelationOfNumbersComponent,
  SummaryEndChapterComponent,
  OctalToHexadecimalConversionComponent 
} from './material/index'


@NgModule({
  declarations: [
    Chapter2Component,
    PosttestComponent, 
    PrefaceComponent, 
    PretestComponent, 
    SidebarComponent, 
    WorkshopComponent,
    BinaryAdditionComponent,
    BinaryDivisionComponent,
    BinaryMultiplicationComponent,
    BinarySubtractionComponent,
    ComplementOfNumbersComponent,
    NumberSystemComponent,
    NumberSystemConversionComponent,
    RelationOfNumbersComponent,
    SummaryEndChapterComponent,
    OctalToHexadecimalConversionComponent
  ],
  imports: [
    CommonModule,
    Chapter2RoutingModule,
    KatexModule,
    ReactiveFormsModule, 
    FormsModule,
    AtftModule
  ]
})
export class Chapter2Module { }
