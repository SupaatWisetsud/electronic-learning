import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
    selector: "app-posttest-chapter1",
    templateUrl: './posttest.component.html',
    styleUrls: ['./posttest.component.scss', '../chapter1.component.scss']
})
export class PosttestComponent implements OnInit {

    public myForm: FormGroup;

    constructor(
        private fb: FormBuilder
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
}