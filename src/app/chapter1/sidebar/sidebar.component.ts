import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { CheckAswerComponent } from '../../services/check-aswer.service'
// import chapter from '../../../model/chapter';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public score_pretest1 = true;
  public url: string;
  // public id: number;
  // public title: string;
  // public description: Array<any>;

  constructor(
    private router: Router,
    private checkAswer: CheckAswerComponent
    // private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    console.log(this.score_pretest1);
    
    this.url = this.router.url
    if(localStorage.getItem("pretest_chapter1_score") !== null) {
      this.score_pretest1 = true
    }
    
    this.checkAswer.pretest_c1.subscribe(result => {
      this.score_pretest1 = result
    })

    // this.score_pretest1 = true
    // let params = this.route.snapshot.paramMap;
    // if(params.has('id')){
    //   this.id = parseInt(params.get('id'));
    // }
    // console.log("sider", this.id);
    // this.title = chapter[this.id - 1].title  
  }

}
