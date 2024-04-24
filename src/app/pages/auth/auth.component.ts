import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [],
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  authType = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.authType = this.route.snapshot.url[0].path;
  }
}
