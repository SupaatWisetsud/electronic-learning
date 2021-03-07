import { Routes, RouterModule } from '@angular/router'
import { Component, NgModule } from '@angular/core'

import { Chapter1Component1 } from './chapter1.component'
import { PreFaceComponent } from './preface/preface.component'
import { PretestComponent } from  './pretest/pretest.component'
import { PosttestComponent } from './posttest/posttest.component'
import { WorkshopComponent } from './workshop/workshop.component'

import {
    AnalogAndDigitalComponent,
    DigitalApplicationComponent,
    DigitalLimitationsComponent,
    DigitalSignalComponent,
    ElectronicDigitalSystemComponent,
    SummaryEndChapterComponent,
    TheAdvantagesOfDigitalComponent,
    TheProcessOfConvertingAnalogDataToDigitalComponent,
} from './material'

const router: Routes = [
    {
        path: 'chapter1',
        component: Chapter1Component1,
        children: [
            {
                path: '',
                component: PreFaceComponent
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
                path: 'analog-and-digital',
                component: AnalogAndDigitalComponent
            },
            {
                path: 'digital-application',
                component: DigitalApplicationComponent
            },
            {
                path: 'digital-limitations',
                component: DigitalLimitationsComponent
            },
            {
                path: 'digital-signal',
                component: DigitalSignalComponent
            },
            {
                path: 'electronic-digital-system',
                component: ElectronicDigitalSystemComponent
            },
            {
                path: 'summary-end-chapter',
                component: SummaryEndChapterComponent
            },
            {
                path: 'the-advantages-of-digital',
                component: TheAdvantagesOfDigitalComponent
            },
            {
                path: 'the-process-of-converting-analog-data-to-digital',
                component: TheProcessOfConvertingAnalogDataToDigitalComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(router)],
    exports: [RouterModule]
})
export class Chapter1RoutingModule {}