import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-posttest-chapter1",
  templateUrl: "./workshop.component.html",
  styleUrls: ["./workshop.component.scss", "../chapter1.component.scss"],
})
export class WorkshopComponent implements OnInit {
  public a = [
    {
      id:1,
      title:'1.1 วงจร Active High',
      children:[
        {
          id:1,
          childrentitle:'ตัวต้านทาน (R) 220 ohm (4 ตัว)',
        },
        {
          id:2,
          childrentitle:'ตัวเก็บประจุ (C) 10uF (1 ตัว)',
        },
        {
          id:3,
          childrentitle:'สวิตซ์กดติดปล่อยดับ (SW) (3 ตัว)',
        },
        {
          id:4,
          childrentitle:'หลอด LED (D) (3 ดวง)',
        },
      ]
    },
    {
      id:2,
      title:'1.2 วงจร สวิตช์แบบ active low และ active high ',
      children:[
        {
          id:1,
          childrentitle:'ตัวต้านทาน (R) 220 ohm (3 ตัว)',
        },
        {
          id:2,
          childrentitle:'สวิตซ์เปิด-ปิด (SW) (1 ตัว)',
        },
        {
          id:3,
          childrentitle:'สวิตซ์กดติดปล่อยดับ (SW) (2 ตัว)',
        },
        {
          id:4,
          childrentitle:'หลอด LED (D) (3 ดวง)',
        },
      ]
    },
    {
      id:3,
      title:'1.3 วงจร Logic gate',
      children:[
        {
          id:1,
          childrentitle:'ตัวต้านทาน (R) 220 ohm (2 ตัว)',
        },
        {
          id:2,
          childrentitle:'IC 74LS00 (1 ตัว)',
        },
        {
          id:3,
          childrentitle:'สวิตซ์กดติดปล่อยดับ (SW) (2 ตัว)',
        },
        {
          id:4,
          childrentitle:'หลอด LED (D) (1 ดวง)',
        },
      ]
    },
    {
      id:4,
      title:'1.4 วงจร Logic circuit',
      children:[
        {
          id:1,
          childrentitle:'ตัวต้านทาน (R) 470 ohm (2 ตัว)',
        },
        {
          id:2,
          childrentitle:'ตัวต้านทาน (R) 1.5k ohm (2 ตัว)',
        },
        {
          id:2,
          childrentitle:'ตัวเก็บประจุ (C) 100uF (1 ตัว)',
        },
        {
          id:3,
          childrentitle:'IC 555 (1 ตัว)',
        },
        {
          id:4,
          childrentitle:'หลอด LED (D) (2 ดวง)',
        },
      ]
    },
  ];

  constructor() {}

  ngOnInit(): void {}
  public rotationX = 0.0;
  public rotationY = 0.0;
  public rotationZ = 0.0;

  public translationY = 0.0;

  public cameraPositionX = 30.0;

  public mouseEnter() {
    console.log("mouseEnter");
  }

  public click() {
    console.log("click");
  }

  public mouseExit() {
    console.log("mouseExit");
  }
}
