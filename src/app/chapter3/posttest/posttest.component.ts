import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-posttest',
  templateUrl: './posttest.component.html',
  styleUrls: ['./posttest.component.scss','../chapter3.component.scss']
})
export class PosttestComponent implements OnInit {

  public myForm: FormGroup;

  constructor(
      private fb: FormBuilder
  ) {
      this.myForm = this.fb.group({
          c3_q1: '',
          c3_q2: '',
          c3_q3: '',
          c3_q4: '',
          c3_q5: '',
          c3_q6: '',
          c3_q7: '',
          c3_q8: '',
          c3_q9: '',
          c3_q10: '',
          c3_q11: '',
          c3_q12: '',
          c3_q13: '',
          c3_q14: '',
          c3_q15: '',
          c3_q16: '',
          c3_q17: '',
          c3_q18: '',
          c3_q19: '',
          c3_q20: '',
      })    
      this.myForm.valueChanges.subscribe(console.log)
  }

  ngOnInit() {
  }

}

