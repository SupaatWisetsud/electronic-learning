import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

import { CourseComponent } from './course.component';
import { PreFaceComponent } from './preface/preface.component'

const router: Routes = [
    {
        path: 'course',
        component: CourseComponent,
        children: [
            {
                path: ':id/preface',
                component: PreFaceComponent,
            },
            // {
                // path: ':id/pretest',
                // component: PreTestComponent
            // }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(router)],
    exports: [RouterModule]
})
export class CourseRoutingModule {}