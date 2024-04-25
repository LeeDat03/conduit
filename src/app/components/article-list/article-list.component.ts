import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../service/article.service';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [],
  templateUrl: './article-list.component.html',
})
export class ArticleListComponent implements OnInit {
  articles: Article[] = [];

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articleService.fetchData().subscribe((data) => {
      this.articles = data.articles;
      console.log(data);
    });
  }
}
