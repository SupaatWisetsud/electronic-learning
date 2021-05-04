import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.scss','../chapter4.component.scss']
})
export class WorkshopComponent implements OnInit {

  public a = [
    {
      id:1,
      title:'4.1 Encoder',
      children:[
        {
          id:1,
          childrentitle:'ตัวต้านทาน (R) 220 ohm (14 ตัว)',
        },
        {
          id:2,
          childrentitle:'หลอด LED (D) (10 ดวง)',
        },
        {
          id:3,
          childrentitle:'สวิตซ์เปิด-ปิด 4 แชนแนล (SW) (1 ตัว)',
        },
        {
          id:4,
          childrentitle:'IC 7445 (1 ตัว)',
        },
      ]
    },
    {
      id:2,
      title:'4.2 Decoder',
      children:[
        {
          id:1,
          childrentitle:'ตัวต้านทาน (R) 220 ohm (13 ตัว)',
        },
        {
          id:2,
          childrentitle:'หลอด LED (D) (4 ดวง)',
        },
        {
          id:3,
          childrentitle:'สวิตซ์เปิด-ปิด 9 แชนแนล (SW) (1 ตัว)',
        },
        {
          id:4,
          childrentitle:'IC 74147 (1 ตัว)',
        },
      ]
    },
    {
      id:3,
      title:'4.3 7-Segment',
      children:[
        {
          id:1,
          childrentitle:' 7-Segment Display (2 ตัว)',
        },
        {
          id:2,
          childrentitle:'สวิตซ์เปิด-ปิด 9 แชนแนล (SW) (2 ตัว)',
        },
      ]
    },
  ];

  constructor() {}

  ngOnInit(): void {
      
  }
  public rotationX = 0.0;
  public rotationY = 0.0;
  public rotationZ = 0.0;

  public translationY = 0.0;

  public cameraPositionX = 30.0;

  public mouseEnter() {
    console.log('mouseEnter');
  }

  public click() {
    console.log('click');
  }

  public mouseExit() {
    console.log('mouseExit');
  }
}
