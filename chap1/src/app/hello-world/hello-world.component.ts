// import {things} from whereer
import { Component, OnInit } from '@angular/core';

// 声明组件
@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',// 模板url
  styleUrls: ['./hello-world.component.css'] // 样式文件
})
export class HelloWorldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
