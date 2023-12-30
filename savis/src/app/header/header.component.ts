import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  showMenu = false

  toogleMenu() {
    console.log(this.showMenu)

    this.showMenu = !this.showMenu;
    console.log(this.showMenu)
  }
}
