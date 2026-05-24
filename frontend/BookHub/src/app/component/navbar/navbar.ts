import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';
import { ThemeService } from '../../services/theme';
@Component({
  selector: 'app-navbar',
  standalone: true, 
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  constructor(
  private authService: Auth,
  private router: Router,
  public themeService: ThemeService
) {}


toggleTheme() {

  this.themeService.toggleTheme();
}

isLoggedIn(): boolean {
  return this.authService.isLoggedIn();
}

logout() {

  this.authService.logout();

  this.router.navigate(['/login']);
}

}
