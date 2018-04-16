import {Component, Input, OnInit} from '@angular/core';
import {Article} from "./article.model";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host: {
    class: 'row'
  }
})
export class ArticleComponent implements OnInit {

  @Input() article: Article;

/*  constructor() {
    this.article = new Article(
      'Angular 2',
      'http://angular.io',
      10
    )
  }*/
  // 如果不返回false，事件会冒泡给上级，相当于触发空链接的点击
  // 返回false，则代表事件不会向上冒泡
  voteUp(): boolean{
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean{
    this.article.voteDown();
    return false;
  }

  ngOnInit() {
  }

}
