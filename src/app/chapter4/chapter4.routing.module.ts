import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

import { Chapter4Component } from './chapter4.component'
import { PrefaceComponent } from './preface/preface.component'
import { PretestComponent } from  './pretest/pretest.component'

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
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(router)],
    exports: [RouterModule]
})
export class Chapter4RoutingModule {}