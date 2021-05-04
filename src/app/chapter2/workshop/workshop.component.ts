import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.scss','../chapter2.component.scss']
})
export class WorkshopComponent implements OnInit {
  public a = [
    {
      id:1,
      title:'2.1 Haft Adder',
      children:[
        {
          id:1,
          childrentitle:'ตัวต้านทาน (R) 220 ohm (9 ตัว)',
        },
        {
          id:2,
          childrentitle:'หลอด LED (D) (4 ดวง)',
        },
        {
          id:3,
          childrentitle:'สวิตซ์เปิด-ปิด 5 แชนแนล (SW) (1 ตัว)',
        },
        {
          id:4,
          childrentitle:'IC 7408 (1 ตัว)',
        },
        {
          id:5,
          childrentitle:'IC 74LS386 (1 ตัว)',
        },
      ]
    },
    {
      id:2,
      title:'2.2 Full Adder',
      children:[
        {
          id:1,
          childrentitle:'ตัวต้านทาน (R) 220 ohm (14 ตัว)',
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
          childrentitle:'IC 7408 (2 ตัว)',
        },
        {
          id:5,
          childrentitle:'IC 74LS386 (3 ตัว)',
        },
      ]
    },
    {
      id:3,
      title:'1.3 วงจร Logic gate',
      children:[
        {
          id:1,
          childrentitle:'ตัวต้านทาน (R) 220 ohm (9 ตัว)',
        },
        {
          id:2,
          childrentitle:'หลอด LED (D) (6 ดวง)',
        },
        {
          id:3,
          childrentitle:'สวิตซ์เปิด-ปิด 9 แชนแนล (SW) (1 ตัว)',
        },
        {
          id:4,
          childrentitle:'IC 7408 (4 ตัว)',
        },
        {
          id:5,
          childrentitle:'IC 74LS386 (3 ตัว)',
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
