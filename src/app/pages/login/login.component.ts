import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  template: `
    <div class="login-page animate-in">
      <div class="login-card">
        <div class="login-header">
          <img src="assets/skolyn-logo-icon.svg" alt="Skolyn Dashboard" class="login-logo" onerror="this.src='https://placehold.co/48x48?text=S'" />
          <h1 class="headline-small">Sign in to Platform</h1>
          <p class="body-medium text-secondary">Skolyn AI Diagnostic Dashboard</p>
        </div>
        
        <div class="restriction-warning">
          <span class="material-symbols-outlined sz-20 info-icon">admin_panel_settings</span>
          <p class="body-small text-secondary">
            <strong>Restricted Access:</strong> This dashboard is strictly limited to verified hospital and clinical partners. Public registration is closed.
          </p>
        </div>

        <form class="login-form" [formGroup]="loginForm" (ngSubmit)="onSubmit()">

          <div class="form-group">
            <label class="label-large">Hospital ID or Email</label>
            <input type="text" class="md-input" formControlName="hospitalId" 
                   [class.invalid]="loginForm.get('hospitalId')?.invalid && loginForm.get('hospitalId')?.touched"
                   placeholder="Hospital ID" />
          </div>
          
          <div class="form-group">
            <label class="label-large">Password</label>
            <input type="password" class="md-input" formControlName="password" 
                   [class.invalid]="loginForm.get('password')?.invalid && loginForm.get('password')?.touched"
                   placeholder="••••••••" />
          </div>

          <div class="form-actions">
            <a href="#" class="forgot-link text-primary label-large">Forgot password?</a>
            <button type="submit" class="md-button md-button-filled" [disabled]="loginForm.invalid || isLoading">
              {{ isLoading ? 'Authenticating...' : 'Sign In' }}
            </button>
          </div>
        </form>
      </div>

      <div class="login-footer">
        <div class="language-picker">
          <span>English (United States)</span>
          <span class="material-symbols-outlined sz-16">arrow_drop_down</span>
        </div>
        <div class="footer-links">
          <a routerLink="/faq">Help</a>
          <a routerLink="/privacy">Privacy</a>
          <a routerLink="/terms">Terms</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .login-page {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: var(--md-sys-color-surface-container-lowest);
      padding: 24px;
    }

    .login-card {
      background: var(--md-sys-color-surface);
      border-radius: var(--md-sys-shape-corner-extra-large);
      border: 1px solid var(--md-sys-color-outline-variant);
      width: 100%;
      max-width: 448px;
      padding: 48px 40px 36px;
      box-shadow: var(--md-sys-elevation-1);
    }

    .login-header {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin-bottom: 32px;
    }

    .login-logo {
      width: 48px;
      height: 48px;
      margin-bottom: 16px;
    }

    .login-header h1 {
      margin-bottom: 8px;
      font-weight: 400;
    }

    .restriction-warning {
      display: flex;
      gap: 12px;
      padding: 16px;
      background: var(--md-sys-color-surface-container);
      border-radius: var(--md-sys-shape-corner-medium);
      margin-bottom: 32px;
      align-items: flex-start;
      border-left: 4px solid var(--md-sys-color-primary);
    }

    .info-icon {
      color: var(--md-sys-color-primary);
      flex-shrink: 0;
      margin-top: 2px;
    }

    .login-form {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .md-input {
      width: 100%;
      padding: 16px;
      border: 1px solid var(--md-sys-color-outline);
      border-radius: var(--md-sys-shape-corner-extra-small);
      background: var(--md-sys-color-surface);
      color: var(--md-sys-color-on-surface);
      font: var(--md-sys-typescale-body-large);
      transition: all 0.2s;
    }

    .md-input:disabled {
      background: var(--md-sys-color-surface-container-low);
      color: var(--md-sys-color-on-surface-variant);
      cursor: not-allowed;
    }

    .error-banner {
      display: flex; gap: 8px; padding: 12px;
      background: var(--md-sys-color-error-container);
      color: var(--md-sys-color-on-error-container);
      border-radius: var(--md-sys-shape-corner-small);
      align-items: center;
    }

    .error-icon { color: var(--md-sys-color-error); }
    .text-error { color: var(--md-sys-color-on-error-container); margin: 0; }

    .success-banner {
      display: flex; gap: 8px; padding: 12px;
      background: var(--md-sys-color-tertiary-container);
      color: var(--md-sys-color-on-tertiary-container);
      border-radius: var(--md-sys-shape-corner-small);
      align-items: center;
    }

    .success-icon { color: var(--md-sys-color-tertiary); }
    .text-success { color: var(--md-sys-color-on-tertiary-container); margin: 0; }

    .form-actions {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 32px;
    }

    .forgot-link {
      text-decoration: none;
      font-weight: 500;
    }

    .forgot-link:hover {
      text-decoration: underline;
    }

    .md-button-filled:disabled {
      background: var(--md-sys-color-surface-container);
      color: var(--md-sys-color-on-surface-variant);
      box-shadow: none;
      cursor: not-allowed;
    }

    .login-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      max-width: 448px;
      margin-top: 24px;
      padding: 0 16px;
    }

    .language-picker {
      display: flex;
      align-items: center;
      gap: 4px;
      font: var(--md-sys-typescale-body-small);
      color: var(--md-sys-color-on-surface-variant);
      cursor: pointer;
      padding: 8px;
      border-radius: var(--md-sys-shape-corner-small);
      transition: background 0.2s;
    }

    .language-picker:hover {
      background: var(--md-sys-color-surface-container);
      color: var(--md-sys-color-on-surface);
    }

    .footer-links {
      display: flex;
      gap: 24px;
    }

    .footer-links a {
      font: var(--md-sys-typescale-body-small);
      color: var(--md-sys-color-on-surface-variant);
      text-decoration: none;
      padding: 8px;
      border-radius: var(--md-sys-shape-corner-small);
      transition: background 0.2s;
    }

    .footer-links a:hover {
      background: var(--md-sys-color-surface-container);
      color: var(--md-sys-color-on-surface);
    }

    @media (max-width: 600px) {
      .login-card {
        padding: 32px 24px;
        border: none;
        box-shadow: none;
        background: transparent;
      }
      .login-page {
        background: var(--md-sys-color-surface);
        padding: 0;
      }
      .login-footer {
        flex-direction: column;
        gap: 16px;
        margin-top: 0;
        padding-bottom: 24px;
      }
    }
  `]
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading = false;
  
  private toastService = inject(ToastService);

  private readonly API_URL = `${environment.apiUrl}/api/login`;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      hospitalId: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;

    const payload = this.loginForm.value;

    this.http.post<any>(this.API_URL, payload).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.toastService.show('Authentication successful! Redirecting...', 'success', 2000);
        
        // Mock redirect
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 1500);
      },
      error: (err) => {
        this.isLoading = false;
        let msg = err.error?.error || 'A network error occurred. Please try again.';
        if (err.status === 0) {
          msg = 'Authentication Server is currently unreachable. Please try again later.';
        }
        this.toastService.show(msg, 'error', 5000);
      }
    });
  }
}
