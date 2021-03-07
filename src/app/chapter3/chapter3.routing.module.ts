import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

import { Chapter3Component } from './chapter3.component'
import { PrefaceComponent } from './preface/preface.component'
import { PretestComponent } from  './pretest/pretest.component'

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
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(router)],
    exports: [RouterModule]
})
export class Chapter3RoutingModule {}