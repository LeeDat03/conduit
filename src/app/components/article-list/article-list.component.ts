import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../service/article.service';
import { Article } from '../../models/article.model';
import { ProfileComponent } from '../profile/profile.component';
import { ArticlePreviewComponent } from '../article-preview/article-preview.component';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [ProfileComponent, ArticlePreviewComponent, NgForOf],
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
