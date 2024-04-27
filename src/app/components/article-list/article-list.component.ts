import { Component, Input, OnInit } from '@angular/core';
import { ArticleService } from '../../service/article.service';
import { Article } from '../../models/article.model';
import { ProfileComponent } from '../profile/profile.component';
import { ArticlePreviewComponent } from '../article-preview/article-preview.component';
import { NgForOf, NgIf } from '@angular/common';
import { LoadingStatus } from '../../models/loading-status.model';
import { ArticlePreviewSkeletonComponent } from '../article-preview/article-preview-skeleton/article-preview-skeleton.component';
import { ArticleConfig } from '../../models/article-config.model';

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
export class ArticleListComponent {
  query!: ArticleConfig;
  articles: Article[] = [];
  loading = LoadingStatus.NOT_LOADED;
  currentPage = 3;

  @Input() limit!: number;
  @Input() set config(config: ArticleConfig) {
    if (config) {
      this.query = config;
      this.getArticles();
    }
  }

  constructor(private articleService: ArticleService) {}

  getArticles() {
    this.loading = LoadingStatus.LOADING;
    this.articles = [];

    if (this.limit) {
      this.query.filters.limit = this.limit;
      this.query.filters.offset = (this.currentPage - 1) * this.limit;
    }

    console.log(this.query);

    this.articleService.fetchData(this.query).subscribe((data) => {
      this.loading = LoadingStatus.LOADED;
      this.articles = data.articles;
    });
  }
}
