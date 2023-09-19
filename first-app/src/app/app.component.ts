import { Component } from '@angular/core';

@Component({
  selector: 'root',
  styleUrls: ['./app.component.css'],
  // templateUrl: './app.component.html',
  template: `
    <h1>Hello World!</h1>
    <p>This is my first component!</p>
  `,
})
export class AppComponent {
  title = 'first-app';
}
