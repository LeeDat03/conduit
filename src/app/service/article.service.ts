import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article.model';
import { ArticleConfig } from '../models/article-config.model';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private readonly http: HttpClient) {}

  fetchData(
    config: ArticleConfig
  ): Observable<{ articles: Article[]; articlesCount: number }> {
    let params = new HttpParams();

    Object.keys(config.filters).forEach((key) => {
      // @ts-ignore
      params = params.set(key, config.filters[key]);
    });

    return this.http.get<{ articles: Article[]; articlesCount: number }>(
      '/articles',
      { params }
    );
  }
}
