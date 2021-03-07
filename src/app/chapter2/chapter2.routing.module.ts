import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

import { Chapter2Component } from './chapter2.component'
import { PrefaceComponent } from './preface/preface.component'
import { PretestComponent } from  './pretest/pretest.component'
import { PosttestComponent } from  './posttest/posttest.component'
import { WorkshopComponent } from './workshop/workshop.component';
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

const router: Routes = [
    {
        path: 'chapter2',
        component: Chapter2Component,
        children: [
            {
                path: '',
                component: PrefaceComponent
            },
            {
                path: 'pretest',
                component: PretestComponent
            },
            {
                path: 'posttest',
                component: PosttestComponent
            },
            {
                path: 'workshop',
                component: WorkshopComponent
            },
            {
                path: 'binary-addition',
                component: BinaryAdditionComponent
            },
            {
                path: 'binary-division',
                component: BinaryDivisionComponent
            },
            {
                path: 'binary-multiplication',
                component: BinaryMultiplicationComponent
            },
            {
                path: 'binary-subtraction',
                component: BinarySubtractionComponent
            },
            {
                path: 'complement-of-numbers',
                component: ComplementOfNumbersComponent
            },
            {
                path: 'summary-end-chapter',
                component: SummaryEndChapterComponent
            },
            {
                path: 'number-system',
                component: NumberSystemComponent
            },
            {
                path: 'number-system-conversion',
                component: NumberSystemConversionComponent
            },
            {
                path: 'relation-of-numbers',
                component: RelationOfNumbersComponent
            },
            {
                path: 'octalTo-hexadecimal-conversion',
                component: OctalToHexadecimalConversionComponent
            },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(router)],
    exports: [RouterModule]
})
export class Chapter2RoutingModule {}