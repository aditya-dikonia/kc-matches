import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  show_loader: boolean = false;
  constructor(private router: Router) {
    this.router.events.subscribe(
      () => window.scrollTo(0, 0)
    );
  }
}
