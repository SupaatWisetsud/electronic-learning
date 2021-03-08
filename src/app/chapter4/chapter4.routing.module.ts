import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

import { Chapter4Component } from './chapter4.component'
import { PrefaceComponent } from './preface/preface.component'
<<<<<<< HEAD
import { PretestComponent } from  './pretest/pretest.component'
=======
>>>>>>> 8b1ddaa8372fe05d0a3701cfd142cbc68e377d2b

const router: Routes = [
    {
        path: 'chapter4',
        component: Chapter4Component,
        children: [
            {
                path: '',
                component: PrefaceComponent
<<<<<<< HEAD
            },
            {
                path: 'pretest',
                component: PretestComponent
=======
>>>>>>> 8b1ddaa8372fe05d0a3701cfd142cbc68e377d2b
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(router)],
    exports: [RouterModule]
})
export class Chapter4RoutingModule {}