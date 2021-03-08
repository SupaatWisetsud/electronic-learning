import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
@Component({
    selector: "app-posttest-chapter1",
    templateUrl: './pretest.component.html',
    styleUrls: ['./pretest.component.scss', '../chapter1.component.scss']
})
export class PretestComponent implements OnInit {

    public myForm: FormGroup;

    constructor(
        private fb: FormBuilder
    ) {
        this.myForm = this.fb.group({
            c1_q1: '',
            c1_q2: '',
            c1_q3: '',
            c1_q4: '',
            c1_q5: '',
            c1_q6: '',
            c1_q7: '',
            c1_q8: '',
            c1_q9: '',
            c1_q10: '',
            c1_q11: '',
            c1_q12: '',
            c1_q13: '',
            c1_q14: '',
            c1_q15: '',
            c1_q16: '',
            c1_q17: '',
            c1_q18: '',
            c1_q19: '',
            c1_q20: '',
        })    
        this.myForm.valueChanges.subscribe(console.log)
    }

    ngOnInit(): void {
        
    }
}