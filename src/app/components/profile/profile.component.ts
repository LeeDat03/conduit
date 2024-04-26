import { Component, Input } from '@angular/core';
import { Article } from '../../models/article.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  @Input() article!: Article;
}
