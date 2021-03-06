import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-posttest',
  templateUrl: './posttest.component.html',
  styleUrls: ['./posttest.component.scss','../chapter4.component.scss']
})
export class PosttestComponent implements OnInit {


  public myForm: FormGroup;

  constructor(
      private fb: FormBuilder
  ) {
      this.myForm = this.fb.group({
          c4_q1: '',
          c4_q2: '',
          c4_q3: '',
          c4_q4: '',
          c4_q5: '',
          c4_q6: '',
          c4_q7: '',
          c4_q8: '',
          c4_q9: '',
          c4_q10: '',
          c4_q11: '',
          c4_q12: '',
          c4_q13: '',
          c4_q14: '',
          c4_q15: '',
          c4_q16: '',
          c4_q17: '',
          c4_q18: '',
          c4_q19: '',
          c4_q20: '',
      })    
      this.myForm.valueChanges.subscribe(console.log)
  }

  ngOnInit() {
  }

}
