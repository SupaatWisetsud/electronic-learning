import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { CheckAswerComponent } from '../../services/check-aswer.service'
@Component({
  selector: 'app-posttest',
  templateUrl: './posttest.component.html',
  styleUrls: ['./posttest.component.scss','../chapter2.component.scss']
})
export class PosttestComponent implements OnInit {

  public myForm: FormGroup;

  constructor(
      private fb: FormBuilder,
      private checkAswer: CheckAswerComponent,
      private router: Router
  ) {
      this.myForm = this.fb.group({
          c2_q1: '',
          c2_q2: '',
          c2_q3: '',
          c2_q4: '',
          c2_q5: '',
          c2_q6: '',
          c2_q7: '',
          c2_q8: '',
          c2_q9: '',
          c2_q10: '',
          c2_q11: '',
          c2_q12: '',
          c2_q13: '',
          c2_q14: '',
          c2_q15: '',
          c2_q16: '',
          c2_q17: '',
          c2_q18: '',
          c2_q19: '',
          c2_q20: '',
      })    
      this.myForm.valueChanges.subscribe(console.log)
  }

  ngOnInit() {
  }
  sendQuestion() {

    for (const [_, value] of Object.entries(this.myForm.value)) {
        if (value === null) {
            alert("กรุณาตอบคำถามให้ครบ!")
            return;
        }
    }

    this.checkAswer.checkAswerPosttestChapter2(this.myForm.value);
    this.router.navigateByUrl("/page/learning")
}
}
