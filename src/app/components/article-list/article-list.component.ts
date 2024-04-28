import { Component, Input } from '@angular/core';
import { ArticleService } from '../../service/article.service';
import { Article } from '../../models/article.model';
import { ProfileComponent } from '../profile/profile.component';
import { ArticlePreviewComponent } from '../article-preview/article-preview.component';
import { NgClass, NgForOf, NgIf, ViewportScroller } from '@angular/common';
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
    NgClass,
    NgIf,
  ],
  templateUrl: './article-list.component.html',
})
export class ArticleListComponent {
  query!: ArticleConfig;
  articles: Article[] = [];
  loading = LoadingStatus.NOT_LOADED;
  currentPage = 1;
  totalPages: Array<number> = [];

  @Input() limit!: number;
  @Input() set config(config: ArticleConfig) {
    if (config) {
      this.query = config;
      this.getArticles();
    }
  }

  constructor(
    private articleService: ArticleService,
    private viewportScroller: ViewportScroller
  ) {}

  scrollToTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  setPage(pageNumber: number) {
    this.currentPage = pageNumber;
    this.getArticles();
    this.scrollToTop();
  }

  getArticles() {
    this.loading = LoadingStatus.LOADING;
    this.articles = [];

    if (this.limit) {
      this.query.filters.limit = this.limit;
      this.query.filters.offset = (this.currentPage - 1) * this.limit;
    }

    this.articleService.fetchData(this.query).subscribe((data) => {
      this.loading = LoadingStatus.LOADED;
      this.articles = data.articles;

      this.totalPages = Array.from(
        new Array(Math.ceil(data.articlesCount / this.limit)),
        (val, index) => index + 1
      );
      console.log(this.totalPages);
    });
  }
}
