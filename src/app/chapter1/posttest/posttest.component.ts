import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { CheckAswerComponent } from '../../services/check-aswer.service'

@Component({
    selector: "app-posttest-chapter1",
    templateUrl: './posttest.component.html',
    styleUrls: ['./posttest.component.scss', '../chapter1.component.scss']
})
export class PosttestComponent implements OnInit {

    public myForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private checkAswer: CheckAswerComponent,
        private router: Router
    ) {
        this.myForm = this.fb.group({
            c1_q1: null,
            c1_q2: null,
            c1_q3: null,
            c1_q4: null,
            c1_q5: null,
            c1_q6: null,
            c1_q7: null,
            c1_q8: null,
            c1_q9: null,
            c1_q10: null,
            c1_q11: null,
            c1_q12: null,
            c1_q13: null,
            c1_q14: null,
            c1_q15: null,
            c1_q16: null,
            c1_q17: null,
            c1_q18: null,
            c1_q19: null,
            c1_q20: null,
        })    
        this.myForm.valueChanges.subscribe(console.log)
    }

    ngOnInit(): void {

    }

    sendQuestion() {

        for (const [_, value] of Object.entries(this.myForm.value)) {
            if (value === null) {
                alert("กรุณาตอบคำถามให้ครบ!")
                return;
            }
        }
        this.checkAswer.checkAswerPosttestChapter1(this.myForm.value);
        this.router.navigateByUrl("/page/learning")
    }
}