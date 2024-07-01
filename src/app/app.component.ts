import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RootComponent } from '../../Components/root/root.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RootComponent,
    RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hierarchy';
}
