import { Component, OnInit } from '@angular/core'
// import { ActivatedRoute } from '@angular/router';
// import chapter from '../../../model/chapter'

@Component({
    selector: "app-preface",
    templateUrl: './preface.component.html',
    styleUrls: ['./preface.component.scss', '../chapter1.component.scss']
})
export class PreFaceComponent implements OnInit {
    
    // private id: number;
    // public preface: string;
    // public title: string;

    constructor(
        // private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        // let params = this.route.snapshot.paramMap;
        // if(params.has('id')){
        //     this.id = parseInt(params.get('id'));
        // }
        // this.title = chapter[this.id - 1].title    
        // this.preface = chapter[this.id - 1].preface    
    }
}