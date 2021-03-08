import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

import { Chapter3Component } from './chapter3.component'
import { PrefaceComponent } from './preface/preface.component'
import { PretestComponent } from  './pretest/pretest.component'
import { PosttestComponent } from  './posttest/posttest.component'
import { WorkshopComponent } from './workshop/workshop.component'
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
  } from './material/index';

const router: Routes = [
    {
        path: 'chapter3',
        component: Chapter3Component,
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
                path: 'gate-with-more-than-inputs',
                component: GateWithMoreThanInputsComponent
            },
            {
                path: 'logic-integrated-circuits',
                component: LogicIntegratedCircuitsComponent
            },
            {
                path: 'summary-end-chapter',
                component: SummaryEndChapterComponent
            },
            {
                path: 'the-and-gate',
                component: TheAndGateComponent
            },
            {
                path: 'the-exclusive-nor-gate',
                component: TheExclusiveNorGateComponent
            },
            {
                path: 'the-exclusive-or-gate',
                component: TheExclusiveOrGateComponent
            },
            {
                path: 'the-inverter-gate-and-buffer',
                component: TheInverterGateAndBufferComponent
            },
            {
                path: 'the-nand-gate',
                component: TheNandGateComponent
            },
            {
                path: 'the-not-gate',
                component: TheNotGateComponent
            },
            {
                path: 'the-or-gete',
                component: TheOrGeteComponent
            },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(router)],
    exports: [RouterModule]
})
export class Chapter3RoutingModule {}