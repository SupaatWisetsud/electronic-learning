import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Chapter1Component1 } from './chapter1.component'

import { Chapter1RoutingModule } from './chapter1.routing.module'
import { PreFaceComponent } from './preface/preface.component'
import { SidebarComponent } from './sidebar/sidebar.component'
import { PretestComponent } from './pretest/pretest.component'
import { PosttestComponent } from './posttest/posttest.component'
import { WorkshopComponent } from './workshop/workshop.component'

import { ReactiveFormsModule, FormsModule } from '@angular/forms'
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
@NgModule({
    declarations: [
        Chapter1Component1,
        PreFaceComponent,
        SidebarComponent,
        PretestComponent,
        PosttestComponent,
        WorkshopComponent,
        AnalogAndDigitalComponent,
        DigitalApplicationComponent,
        DigitalLimitationsComponent,
        DigitalSignalComponent,
        ElectronicDigitalSystemComponent,
        SummaryEndChapterComponent,
        TheAdvantagesOfDigitalComponent,
        TheProcessOfConvertingAnalogDataToDigitalComponent
    ],
    imports: [
        CommonModule,
        Chapter1RoutingModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class Chapter1Module {}