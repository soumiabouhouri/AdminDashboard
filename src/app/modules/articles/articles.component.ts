import { Component, OnInit } from '@angular/core';
import {Article} from '../../Article';
import {ArticlesService} from '../../shared/shared/services/articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles : Article[];
  constructor(private service: ArticlesService) { }

  ngOnInit(): void {
    this.getArticles();
  }
  getArticles(): void {
    this.service.getArticles()
      .subscribe(article => this.articles = article);
  }

}
