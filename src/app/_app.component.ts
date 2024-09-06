import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './_app.component.html',
  styleUrl: './_app.component.css'
})
export class AppComponent {
  title = 'tres';
}
