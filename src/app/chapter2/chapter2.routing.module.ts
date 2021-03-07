import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

import { Chapter2Component } from './chapter2.component'
import { PrefaceComponent } from './preface/preface.component'

const router: Routes = [
    {
        path: 'chapter2',
        component: Chapter2Component,
        children: [
            {
                path: '',
                component: PrefaceComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(router)],
    exports: [RouterModule]
})
export class Chapter2RoutingModule {}