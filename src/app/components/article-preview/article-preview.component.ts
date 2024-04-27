import { Component, Input } from '@angular/core';
import { Article } from '../../models/article.model';
import { NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article-preview',
  standalone: true,
  imports: [NgForOf, RouterLink],
  templateUrl: './article-preview.component.html',
})
export class ArticlePreviewComponent {
  @Input() article!: Article;
}
