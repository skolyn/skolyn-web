import { Component, inject } from '@angular/core';
import { ToastService } from '../../services/toast.service';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-toast',
  imports: [CommonModule, NgClass],
  template: `
    <div class="toast-container">
      @for (toast of toastService.toasts(); track toast.id) {
        <div 
          class="toast-message" 
          [ngClass]="toast.type"
          role="alert">
          <span class="material-symbols-outlined sz-20 icon">
            {{ getIcon(toast.type) }}
          </span>
          <span class="message">{{ toast.message }}</span>
          <button class="close-btn" (click)="toastService.remove(toast.id)" aria-label="Dismiss">
            <span class="material-symbols-outlined sz-16">close</span>
          </button>
        </div>
      }
    </div>
  `,
  styles: [`
    .toast-container {
      position: fixed;
      bottom: 24px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      gap: 12px;
      z-index: 9999;
      pointer-events: none;
    }

    .toast-message {
      background: var(--md-sys-color-inverse-surface);
      color: var(--md-sys-color-inverse-on-surface);
      border-radius: var(--md-sys-shape-corner-extra-small);
      padding: 14px 16px;
      display: flex;
      align-items: center;
      gap: 12px;
      min-width: 300px;
      max-width: 600px;
      box-shadow: var(--md-sys-elevation-3);
      pointer-events: auto;
      animation: slideUp 0.3s cubic-bezier(0.2, 0, 0, 1) forwards;
      font: var(--md-sys-typescale-body-medium);
    }

    .toast-message.error {
      background: var(--md-sys-color-error-container);
      color: var(--md-sys-color-on-error-container);
    }

    .toast-message.success {
      background: var(--md-sys-color-primary-container);
      color: var(--md-sys-color-on-primary-container);
    }

    .icon {
      flex-shrink: 0;
    }

    .toast-message.success .icon { color: #1e8e3e; }
    .toast-message.error .icon { color: var(--md-sys-color-error); }
    .toast-message.info .icon { color: var(--md-sys-color-inverse-primary); }

    .message {
      flex: 1;
    }

    .close-btn {
      background: transparent;
      border: none;
      color: inherit;
      opacity: 0.7;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4px;
      border-radius: var(--md-sys-shape-corner-full);
      transition: opacity 0.2s, background-color 0.2s;
    }

    .close-btn:hover {
      opacity: 1;
      background-color: rgba(255, 255, 255, 0.1);
    }

    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 600px) {
      .toast-container {
        bottom: 16px;
        left: 16px;
        right: 16px;
        transform: none;
      }
      .toast-message {
        min-width: 0;
        width: 100%;
      }
    }
  `]
})
export class ToastComponent {
  toastService = inject(ToastService);

  getIcon(type: string): string {
    switch (type) {
      case 'success': return 'check_circle';
      case 'error': return 'error';
      default: return 'info';
    }
  }
}
