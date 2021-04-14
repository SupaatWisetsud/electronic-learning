import { Injectable } from '@angular/core';
import pretest1 from './pretest1';
import { BehaviorSubject } from 'rxjs'

@Injectable({
    providedIn: "root"
})
export class CheckAswerComponent {
    
    pretest_c1 = new BehaviorSubject(false);
    
    constructor(){
        if(localStorage.getItem("pretest_chapter1_score") !== null){
            this.pretest_c1.next(true)
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

    }

    // chapter 2
    checkAswerPretestChapter2(): number {
        return 0;
    }
    checkAswerPosttestChapter2(): number {
        return 0;
    }

    // chapter3
    checkAswerPretestChapter3(): number {
        return 0;
    }
    checkAswerPosttestChapter3(): number {
        return 0;
    }

}