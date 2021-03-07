import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Chapter1Component1 } from './chapter1.component'

import { Chapter1RoutingModule } from './chapter1.routing.module'
import { PreFaceComponent } from './preface/preface.component'
import { SidebarComponent } from './sidebar/sidebar.component'

@NgModule({
    declarations: [
        Chapter1Component1,
        PreFaceComponent,
        SidebarComponent
    ],
    imports: [
        CommonModule,
        Chapter1RoutingModule
    ]
})
export class Chapter1Module {}