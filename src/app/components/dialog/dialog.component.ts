import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-dialog',
  imports: [CommonModule],
  template: `
    @if (dialogService.isOpen()) {
      <div class="dialog-overlay" (click)="closeDialog(false)">
        <div class="dialog-surface" (click)="$event.stopPropagation()" role="dialog" aria-modal="true" [attr.aria-labelledby]="'dialog-title'">
          
          @if (options?.icon) {
            <div class="dialog-icon-container" [style.color]="options?.iconColor || 'var(--md-sys-color-primary)'">
              <span class="material-symbols-outlined sz-24">{{ options?.icon }}</span>
            </div>
          }

          <h2 id="dialog-title" class="dialog-title">{{ options?.title }}</h2>
          <p class="dialog-content">{{ options?.message }}</p>

          <div class="dialog-actions">
            @if (options?.cancelText) {
              <button class="md-button md-button-text" (click)="closeDialog(false)">
                {{ options?.cancelText }}
              </button>
            }
            <button class="md-button" (click)="closeDialog(true)">
              {{ options?.confirmText || 'OK' }}
            </button>
          </div>
        </div>
      </div>
    }
  `,
  styles: [`
    .dialog-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.32);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      z-index: 10000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
      animation: fadeIn 0.15s ease-out forwards;
    }

    .dialog-surface {
      background: var(--md-sys-color-surface-container-high);
      border-radius: var(--md-sys-shape-corner-extra-large);
      padding: 24px;
      width: 100%;
      max-width: 400px;
      box-shadow: var(--md-sys-elevation-3);
      animation: scaleIn 0.2s cubic-bezier(0.2, 0, 0, 1) forwards;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .dialog-icon-container {
      display: flex;
      justify-content: center;
      margin-bottom: -8px; 
    }

    .dialog-title {
      font: var(--md-sys-typescale-headline-small);
      color: var(--md-sys-color-on-surface);
      text-align: center;
      margin: 0;
    }

    .dialog-content {
      font: var(--md-sys-typescale-body-medium);
      color: var(--md-sys-color-on-surface-variant);
      text-align: center;
      margin: 0;
    }

    .dialog-actions {
      display: flex;
      justify-content: flex-end;
      gap: 8px;
      margin-top: 8px;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes scaleIn {
      from { 
        opacity: 0;
        transform: scale(0.9) translateY(10px);
      }
      to { 
        opacity: 1;
        transform: scale(1) translateY(0);
      }
    }
  `]
})
export class DialogComponent {
  dialogService = inject(DialogService);

  get options() {
    return this.dialogService.options();
  }

  closeDialog(result: boolean) {
    this.dialogService.close(result);
  }

  @HostListener('window:keydown.escape')
  onEscape() {
    if (this.dialogService.isOpen()) {
      this.closeDialog(false);
    }
  }
}
