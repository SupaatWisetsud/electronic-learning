import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
// import chapter from '../../../model/chapter';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public url: string;
  // public id: number;
  // public title: string;
  // public description: Array<any>;

  constructor(
    private router: Router
    // private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.url = this.router.url
    
    // let params = this.route.snapshot.paramMap;
    // if(params.has('id')){
    //   this.id = parseInt(params.get('id'));
    // }
    // console.log("sider", this.id);
    // this.title = chapter[this.id - 1].title  
  }

}
