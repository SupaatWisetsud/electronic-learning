import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { CheckAswerComponent } from '../../services/check-aswer.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['../../chapter1/sidebar/sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public score_pretest4:boolean
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
    
    this.url = this.router.url
    if(localStorage.getItem("pretest_chapter2_score") !== null) {
      this.score_pretest4 = true
    }
    if(this.score_pretest4 == undefined){
      this.score_pretest4 = false
    }
    // else {
    //   this.score_pretest4 = false
    // }
    console.log(this.score_pretest4);
    
    this.checkAswer.pretest_c4.subscribe(result => {
      console.log(result);
      
      this.score_pretest4 = result
    })

    // this.score_pretest4 = true
    // let params = this.route.snapshot.paramMap;
    // if(params.has('id')){
    //   this.id = parseInt(params.get('id'));
    // }
    // console.log("sider", this.id);
    // this.title = chapter[this.id - 1].title  
  }
  

}
