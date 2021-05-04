import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.scss','../chapter3.component.scss']
})
export class WorkshopComponent implements OnInit {

  public a = [
    {
      id:1,
      title:'3.1  Phase shift oscillator',
      children:[
        {
          id:1,
          childrentitle:'IC TL072 (1 ตัว)',
        },
        {
          id:2,
          childrentitle:'ตัวต้านทาน (R) 220 ohm (3 ตัว)',
        },
        {
          id:3,
          childrentitle:'ตัวเก็บประจุ (C) 100uF (3 ตัว)',
        },
      ]
    },
    {
      id:2,
      title:'3.2 Wien Bridge oscillator',
      children:[
        {
          id:1,
          childrentitle:'IC TL072 (1 ตัว)',
        },
        {
          id:2,
          childrentitle:'ตัวต้านทาน (R) 10k ohm (3 ตัว)',
        },
        {
          id:3,
          childrentitle:'ตัวเก็บประจุ (C) 10u (3 ตัว)',
        },
      ]
    },
    {
      id:3,
      title:'3.3 Quadrature Oscillator',
      children:[
        {
          id:1,
          childrentitle:'IC TL072 (1 ตัว)',
        },
        {
          id:2,
          childrentitle:'ตัวต้านทาน (R) 5k ohm (3 ตัว)',
        },
        {
          id:3,
          childrentitle:'ตัวต้านทาน (R) 220 ohm (3 ตัว)',
        },
        {
          id:4,
          childrentitle:'ตัวเก็บประจุ (C) 100uF (3 ตัว)',
        },
      ]
    },
    {
      id:4,
      title:'3.4 Square Wave Generator (Astable Multi-vibrator) using CMOS Inverter',
      children:[
        {
          id:1,
          childrentitle:'IC 74HCT04 (1 ตัว)',
        },
        {
          id:2,
          childrentitle:'ตัวต้านทาน (R) 10k ohm (1 ตัว)',
        },
        {
          id:3,
          childrentitle:'ตัวเก็บประจุ (C) 10n (1 ตัว)',
        },
      ]
    },
    {
      id:5,
      title:'3.5 Triangle/Square Wave Generator',
      children:[
        {
          id:1,
          childrentitle:'IC TL072 (1 ตัว)',
        },
        {
          id:2,
          childrentitle:'ตัวต้านทาน (R) 2k ohm (4 ตัว)',
        },
        {
          id:3,
          childrentitle:'ตัวต้านทาน (R) 100k ohm (1 ตัว)',
        },
        {
          id:4,
          childrentitle:'ตัวเก็บประจุ (C) 10u (2 ตัว)',
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
