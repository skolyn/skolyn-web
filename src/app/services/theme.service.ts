import { Injectable, effect, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  themeSignal = signal<'light' | 'dark'>('light');

  constructor() {
    this.initTheme();

    // Effect to apply the theme to the document when it changes
    effect(() => {
      const currentTheme = this.themeSignal();
      if (typeof window !== 'undefined') {
        document.documentElement.setAttribute('data-theme', currentTheme);
        localStorage.setItem('theme', currentTheme);
      }
    });
  }

  initTheme() {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      
      if (storedTheme === 'dark' || storedTheme === 'light') {
        // Use stored preference if available
        this.themeSignal.set(storedTheme);
      } else {
        // Fallback to system preference
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.themeSignal.set(prefersDark ? 'dark' : 'light');
      }
    }
  }

  toggleTheme() {
    this.themeSignal.update(theme => theme === 'light' ? 'dark' : 'light');
  }

  setTheme(theme: 'light' | 'dark') {
    this.themeSignal.set(theme);
  }
}
