import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private readonly http: HttpClient) {}

  fetchData(): Observable<{ articles: Article[]; articlesCount: number }> {
    return this.http.get<{ articles: Article[]; articlesCount: number }>(
      '/articles'
    );
  }
}
