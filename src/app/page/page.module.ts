import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page.routing.module';

import { PageComponent } from './page.component'
import { InitPageComponent } from './init/init.component';
import { LearningComponent } from './learning/learning.component';

import { HeaderComponent } from '../layouts/header/header.component'

@NgModule({
    declarations: [
        PageComponent,
        InitPageComponent,
        LearningComponent,
        HeaderComponent
    ],
    imports: [
        CommonModule,
        PageRoutingModule
    ]
})
export class PageModule { }