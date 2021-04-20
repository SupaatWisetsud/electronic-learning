import { Injectable } from '@angular/core';
import pretest1 from './pretest1';
import posttest1 from './posttest1';

import pretest2 from './pretest2';
import posttest2 from './posttest2';

import pretest3 from './pretest3';
import posttest3 from './posttest3';

import pretest4 from './pretest4';
import posttest4 from './posttest4';
import { BehaviorSubject } from 'rxjs'

@Injectable({
    providedIn: "root"
})
export class CheckAswerComponent {
    
    pretest_c1 = new BehaviorSubject(false);
    posttest_c1 = new BehaviorSubject(false);
    
    pretest_c2 = new BehaviorSubject(false);
    posttest_c2 = new BehaviorSubject(false);
    
    pretest_c3 = new BehaviorSubject(false);
    posttest_c3 = new BehaviorSubject(false);
    
    pretest_c4 = new BehaviorSubject(false);
    posttest_c4 = new BehaviorSubject(false);

    constructor(){
        
        if(localStorage.getItem("pretest_chapter1_score") !== null){
            this.pretest_c1.next(true)
        }
        if(localStorage.getItem("posttest_chapter1_score") !== null){
            this.posttest_c1.next(true)
        }

        if(localStorage.getItem("pretest_chapter2_score") !== null){
            this.pretest_c2.next(true)
        }
        if(localStorage.getItem("posttest_chapter2_score") !== null){
            this.posttest_c2.next(true)
        }

        if(localStorage.getItem("pretest_chapter3_score") !== null){
            this.pretest_c3.next(true)
        }
        if(localStorage.getItem("posttest_chapter3_score") !== null){
            this.posttest_c3.next(true)
        }

        if(localStorage.getItem("pretest_chapter4_score") !== null){
            this.pretest_c4.next(true)
        }
        if(localStorage.getItem("posttest_chapter4_score") !== null){
            this.posttest_c4.next(true)
        }
    }
    
    // chapter 1
    checkAswerPretestChapter1(exam: any) {
        let i = 0;
        let score = 0;

        for (const [_, value] of Object.entries(exam)) {
            if(value == pretest1[i].answer) {
                score += 1;
            }
            i += 1;
        }
        localStorage.setItem("pretest_chapter1_score", score.toString())
        this.pretest_c1.next(true)
        alert("your score is: " + score + "/20");
    }
    checkAswerPosttestChapter1(exam: any) {
        let i = 0;
        let score = 0;

        for (const [_, value] of Object.entries(exam)) {
            if(value == posttest1[i].answer) {
                score += 1;
            }
            i += 1;
        }
        localStorage.setItem("posttest_chapter1_score", score.toString())
        this.posttest_c1.next(true)
        alert("your score is: " + score + "/20");
    }

    // chapter 2
    checkAswerPretestChapter2(exam: any): any {
        let i = 0;
        let score = 0;

        for (const [_, value] of Object.entries(exam)) {
            if(value == pretest2[i].answer) {
                score += 1;
            }
            i += 1;
        }
        localStorage.setItem("pretest_chapter2_score", score.toString())
        this.pretest_c2.next(true)
        alert("your score is: " + score + "/20");
    }
    checkAswerPosttestChapter2(exam: any): any {
        let i = 0;
        let score = 0;

        for (const [_, value] of Object.entries(exam)) {
            if(value == posttest2[i].answer) {
                score += 1;
            }
            i += 1;
        }
        localStorage.setItem("posttest_chapter2_score", score.toString())
        this.posttest_c2.next(true)
        alert("your score is: " + score + "/20");
    }

    // chapter3
    checkAswerPretestChapter3(exam: any): any {
        let i = 0;
        let score = 0;

        for (const [_, value] of Object.entries(exam)) {
            if(value == pretest3[i].answer) {
                score += 1;
            }
            i += 1;
        }
        localStorage.setItem("pretest_chapter3_score", score.toString())
        this.pretest_c3.next(true)
        alert("your score is: " + score + "/20");
    }
    checkAswerPosttestChapter3(exam: any): any {
        let i = 0;
        let score = 0;

        for (const [_, value] of Object.entries(exam)) {
            if(value == posttest3[i].answer) {
                score += 1;
            }
            i += 1;
        }
        localStorage.setItem("posttest_chapter3_score", score.toString())
        this.posttest_c3.next(true)
        alert("your score is: " + score + "/20");
    }
    
    // chapter4
    checkAswerPretestChapter4(exam: any): any {
        let i = 0;
        let score = 0;

        for (const [_, value] of Object.entries(exam)) {
            if(value == pretest4[i].answer) {
                score += 1;
            }
            i += 1;
        }
        localStorage.setItem("pretest_chapter4_score", score.toString())
        this.pretest_c4.next(true)
        alert("your score is: " + score + "/20");
    }
    checkAswerPosttestChapter4(exam: any): any {
        let i = 0;
        let score = 0;

        for (const [_, value] of Object.entries(exam)) {
            if(value == posttest4[i].answer) {
                score += 1;
            }
            i += 1;
        }
        localStorage.setItem("posttest_chapter4_score", score.toString())
        this.posttest_c4.next(true)
        alert("your score is: " + score + "/20");
    }

}