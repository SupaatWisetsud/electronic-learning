import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

import { Chapter1Component1 } from './chapter1.component'
import { PreFaceComponent } from './preface/preface.component'
import { PretestComponent } from  './pretest/pretest.component'

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
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(router)],
    exports: [RouterModule]
})
export class Chapter1RoutingModule {}