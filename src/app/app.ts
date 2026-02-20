import { Component, HostListener, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToastComponent } from './components/toast/toast.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { CookieBannerComponent } from './components/cookie-banner/cookie-banner.component';
import { ThemeService } from './services/theme.service';
import { ToastService } from './services/toast.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, ToastComponent, DialogComponent, CookieBannerComponent],
  template: `
    <app-navbar />
    <main>
      <router-outlet />
    </main>
    <app-footer />
    <app-toast />
    <app-dialog />
    <app-cookie-banner />
  `,
  styles: [`
    main {
      min-height: calc(100vh - var(--navbar-height));
      padding-top: var(--navbar-height);
    }
  `],
})
export class App {
  private toastService = inject(ToastService);

  constructor(private themeService: ThemeService) {}

  @HostListener('window:offline')
  onOffline() {
    this.toastService.show('You are currently offline. Some features may be unavailable.', 'error', 0); // 0 means it won't auto-dismiss until online
  }

  @HostListener('window:online')
  onOnline() {
    this.toastService.show('Connection restored!', 'success', 3000);
  }
}
