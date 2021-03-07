import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitPageComponent } from './init/init.component';
import { LearningComponent } from './learning/learning.component';
import { AboutComponent } from './about/about.component';
import { PageComponent } from './page.component';

const routes: Routes = [
    {
        path: 'page',
        component: PageComponent,
        children: [
            {
                path: '',
                component: InitPageComponent
            },
            {
                path: 'learning',
                component: LearningComponent
            },
            {
                path: 'about',
                component: AboutComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
