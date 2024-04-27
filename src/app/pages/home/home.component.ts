import { Component } from '@angular/core';
import { HeroComponent } from './_components/hero/hero.component';
import { ArticleListComponent } from '../../components/article-list/article-list.component';
import { NgFor } from '@angular/common';
import { ArticleConfig } from '../../models/article-config.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ArticleListComponent, NgFor],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  listConfig: ArticleConfig = {
    type: 'all',
    filters: {},
  };
}
