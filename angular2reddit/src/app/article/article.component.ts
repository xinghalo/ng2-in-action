import { Component, OnInit, Input } from '@angular/core';
import {Article} from './article.model';

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

  // constructor() {
  //   this.article = new Article('Angular 2', 'http://angular.io', 10 )
  //   // this.title = 'Angular 2';
  //   // this.link = 'http://angular.io';
  //   // this.votes = 10;
  // }
  voteUp() {
    // this.votes += 1;
    // this.article.votes += 1;
    this.article.voteUp();
    return false;
  }
  voteDown() {
    // this.votes -= 1;
    // this.article.votes -= 1;
    this.article.voteDown();
    return false; // 避免冒泡
  }

  ngOnInit() {
  }

}
