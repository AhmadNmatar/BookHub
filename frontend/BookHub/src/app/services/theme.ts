import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private darkMode = false;

  constructor() {

    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {

      this.enableDarkMode();
    }
  }

  toggleTheme() {
    console.log(this.darkMode)
    this.darkMode = !this.darkMode;

    if (this.darkMode) {

      this.enableDarkMode();

    } else {

      this.enableLightMode();
    }
  }

  enableDarkMode() {

    document.body.classList.add('dark-theme');

    localStorage.setItem('theme', 'dark');

    this.darkMode = true;
  }

  enableLightMode() {

    document.body.classList.remove('dark-theme');

    localStorage.setItem('theme', 'light');

    this.darkMode = false;
  }

  isDarkMode(): boolean {

    return this.darkMode;
  }
}