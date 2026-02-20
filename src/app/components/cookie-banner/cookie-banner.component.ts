import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cookie-banner',
  imports: [CommonModule, RouterLink],
  template: `
    @if (isVisible()) {
      <div class="cookie-banner-container">
        <div class="cookie-banner-content">
          <div class="cookie-text">
            <h3 class="cookie-title">We use cookies</h3>
            <p class="cookie-description">
              Skolyn uses cookies to improve your experience, analyze site traffic, and assist in our marketing efforts. 
              By clicking "Accept All", you agree to the storing of cookies on your device. 
              Read our <a routerLink="/privacy" class="cookie-link">Privacy Policy</a> to learn more.
            </p>
          </div>
          <div class="cookie-actions">
            <button class="md-button md-button-text" (click)="decline()">Decline Optional</button>
            <button class="md-button" (click)="accept()">Accept All</button>
          </div>
        </div>
      </div>
    }
  `,
  styles: [`
    .cookie-banner-container {
      position: fixed;
      bottom: 24px;
      left: 50%;
      transform: translateX(-50%);
      width: calc(100% - 48px);
      max-width: 900px;
      background: var(--md-sys-color-surface-container-high);
      border-radius: var(--md-sys-shape-corner-large);
      padding: 24px;
      box-shadow: var(--md-sys-elevation-4);
      z-index: 9998; /* Just below toast/dialogs */
      animation: slideUp 0.4s cubic-bezier(0.2, 0, 0, 1) forwards;
      border: 1px solid var(--md-sys-color-outline-variant);
    }

    .cookie-banner-content {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
    }

    .cookie-text {
      flex: 1;
    }

    .cookie-title {
      font: var(--md-sys-typescale-title-medium);
      color: var(--md-sys-color-on-surface);
      margin: 0 0 8px 0;
    }

    .cookie-description {
      font: var(--md-sys-typescale-body-medium);
      color: var(--md-sys-color-on-surface-variant);
      margin: 0;
    }

    .cookie-link {
      color: var(--md-sys-color-primary);
      text-decoration: none;
      font-weight: 500;
    }

    .cookie-link:hover {
      text-decoration: underline;
    }

    .cookie-actions {
      display: flex;
      gap: 12px;
      flex-shrink: 0;
    }

    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translate(-50%, 40px);
      }
      to {
        opacity: 1;
        transform: translate(-50%, 0);
      }
    }

    @media (max-width: 768px) {
      .cookie-banner-container {
        bottom: 0;
        left: 0;
        width: 100%;
        transform: none;
        border-radius: var(--md-sys-shape-corner-large) var(--md-sys-shape-corner-large) 0 0;
        animation: slideUpMobile 0.4s cubic-bezier(0.2, 0, 0, 1) forwards;
      }

      .cookie-banner-content {
        flex-direction: column;
        align-items: flex-start;
      }

      .cookie-actions {
        width: 100%;
        justify-content: flex-end;
      }

      @keyframes slideUpMobile {
        from {
          opacity: 0;
          transform: translateY(100%);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    }
  `]
})
export class CookieBannerComponent implements OnInit {
  isVisible = signal<boolean>(false);

  ngOnInit() {
    // Only show if the user hasn't made a choice yet
    const consent = localStorage.getItem('skolyn_cookie_consent');
    if (!consent) {
      // Slight delay so it doesn't jarringly appear before paint finishes
      setTimeout(() => this.isVisible.set(true), 1500);
    }
  }

  accept() {
    localStorage.setItem('skolyn_cookie_consent', 'accepted');
    this.isVisible.set(false);
  }

  decline() {
    localStorage.setItem('skolyn_cookie_consent', 'declined');
    this.isVisible.set(false);
  }
}
