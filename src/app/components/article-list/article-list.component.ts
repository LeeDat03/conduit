import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../service/article.service';
import { Article } from '../../models/article.model';
import { ProfileComponent } from '../profile/profile.component';
import { ArticlePreviewComponent } from '../article-preview/article-preview.component';
import { NgForOf, NgIf } from '@angular/common';
import { LoadingStatus } from '../../models/loading-status.model';
import { ArticlePreviewSkeletonComponent } from '../article-preview/article-preview-skeleton/article-preview-skeleton.component';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [
    ProfileComponent,
    ArticlePreviewComponent,
    ArticlePreviewSkeletonComponent,
    NgForOf,
    NgIf,
  ],
  templateUrl: './article-list.component.html',
})
export class ArticleListComponent implements OnInit {
  articles: Article[] = [];
  loading = LoadingStatus.NOT_LOADED;

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles() {
    this.loading = LoadingStatus.LOADING;
    this.articles = [];

    this.articleService.fetchData().subscribe((data) => {
      this.loading = LoadingStatus.LOADED;
      this.articles = data.articles;
    });
  }
}
