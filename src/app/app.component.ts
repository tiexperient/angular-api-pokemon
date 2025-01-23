import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>ANGULAR CLI</h1>
  <h2>Uso de Services e API</h2><br>
  <app-card></app-card>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'services';
}
