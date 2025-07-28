import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logo: string = 'assets/images/logo.png';
  isNavOpen = false;

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
    // Prevent body scroll when mobile menu is open
    document.body.style.overflow = this.isNavOpen ? 'hidden' : '';
  }
}
