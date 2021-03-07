import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CourseRoutingModule } from './course.routing.module'

import { CourseComponent } from './course.component'
import { PreFaceComponent } from './preface/preface.component'

import { SidebarComponent } from '../layouts/sidebar/sidebar.component'
@NgModule({
    declarations: [
        CourseComponent,
        PreFaceComponent,
        SidebarComponent
    ],
    imports: [
        CommonModule,
        CourseRoutingModule
    ]
})
export class CourseModule {}