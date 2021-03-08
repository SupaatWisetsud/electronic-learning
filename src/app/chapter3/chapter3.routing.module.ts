import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

import { Chapter3Component } from './chapter3.component'
import { PrefaceComponent } from './preface/preface.component'
<<<<<<< HEAD
import { PretestComponent } from  './pretest/pretest.component'
=======
>>>>>>> 8b1ddaa8372fe05d0a3701cfd142cbc68e377d2b

const router: Routes = [
    {
        path: 'chapter3',
        component: Chapter3Component,
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
export class Chapter3RoutingModule {}