import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isOpen = false;
  title = 'Ohcoma';
  isNavOpen: boolean = false;
  fillColor: string = '#00d9ff'; // or any other color valu

  logo = "assets/images/logo.png"

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

}
