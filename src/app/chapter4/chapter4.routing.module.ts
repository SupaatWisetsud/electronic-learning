import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

import { Chapter4Component } from './chapter4.component'
import { PosttestComponent } from './posttest/posttest.component';
import { PrefaceComponent } from './preface/preface.component';
import { PretestComponent } from './pretest/pretest.component';
import { WorkshopComponent } from './workshop/workshop.component';
import {
    BooleanAlgebraLawComponent,
    ConvertingTruthTablesIntoBooleanExpressionsComponent,
    DeMorganTheoremComponent,
    SimplifyingBooleanExpressionsComponent,
    StandardBooleanFormsComponent,
    SumOfProductsExpressionsComponent,
    SummaryEndChapterComponent,
   } from './material/index'
const router: Routes = [
    {
        path: 'chapter4',
        component: Chapter4Component,
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
                path: 'boolean-algebra-law',
                component: BooleanAlgebraLawComponent
            },
            {
                path: 'converting-truth-tables-into-boolean-expressions',
                component: ConvertingTruthTablesIntoBooleanExpressionsComponent
            },
            {
                path: 'de-morgan-theorem',
                component: DeMorganTheoremComponent
            },
            {
                path: 'simplifying-boolean-expressions',
                component: SimplifyingBooleanExpressionsComponent
            },
            {
                path: 'standard-boolean-forms',
                component: StandardBooleanFormsComponent
            },
            {
                path: 'sum-of-products-expressions',
                component: SumOfProductsExpressionsComponent
            },
            {
                path: 'summary-end-chapter',
                component: SummaryEndChapterComponent
            },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(router)],
    exports: [RouterModule]
})
export class Chapter4RoutingModule {}