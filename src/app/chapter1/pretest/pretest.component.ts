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
            c1_q1: ''
        })    
        this.myForm.valueChanges.subscribe(console.log)
    }

    ngOnInit(): void {
        
    }
}