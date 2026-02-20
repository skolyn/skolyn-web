import { Injectable, signal } from '@angular/core';

export interface DialogOptions {
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  icon?: string;
  iconColor?: string;
}

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  isOpen = signal<boolean>(false);
  options = signal<DialogOptions | null>(null);
  
  private resolveFn: ((value: boolean) => void) | null = null;

  open(options: DialogOptions): Promise<boolean> {
    this.options.set(options);
    this.isOpen.set(true);

    return new Promise((resolve) => {
      this.resolveFn = resolve;
    });
  }

  close(result: boolean) {
    this.isOpen.set(false);
    if (this.resolveFn) {
      this.resolveFn(result);
      this.resolveFn = null;
    }
  }
}
