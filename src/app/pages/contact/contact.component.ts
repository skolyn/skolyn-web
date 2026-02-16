import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  template: `
    <section class="page-hero">
      <div class="container">
        <div class="hero-label">
          <span class="material-symbols-outlined sz-20">mail</span>
          Contact Us
        </div>
        <h1 class="display-medium animate-in">Get in Touch</h1>
        <p class="body-large text-secondary hero-desc animate-in animate-in-delay-1">
          Ready to transform your diagnostic imaging workflow? Reach out to
          our team to learn how Skolyn can be deployed at your institution.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-form-wrapper animate-in">
            <h2 class="headline-medium">Send a Message</h2>
            <p class="body-large text-secondary form-desc">
              Fill out the form below and our team will respond within 24 hours.
            </p>
            <form class="contact-form" (submit)="onSubmit($event)">
              <div class="form-row">
                <div class="form-group">
                  <label class="label-large" for="firstName">First Name</label>
                  <input type="text" id="firstName" name="firstName" class="form-input" placeholder="Enter your first name" required>
                </div>
                <div class="form-group">
                  <label class="label-large" for="lastName">Last Name</label>
                  <input type="text" id="lastName" name="lastName" class="form-input" placeholder="Enter your last name" required>
                </div>
              </div>
              <div class="form-group">
                <label class="label-large" for="email">Email Address</label>
                <input type="email" id="email" name="email" class="form-input" placeholder="you&#64;institution.org" required>
              </div>
              <div class="form-group">
                <label class="label-large" for="organization">Organization</label>
                <input type="text" id="organization" name="organization" class="form-input" placeholder="Hospital, clinic, or institution name">
              </div>
              <div class="form-group">
                <label class="label-large" for="role">Your Role</label>
                <select id="role" name="role" class="form-input">
                  <option value="" disabled selected>Select your role</option>
                  <option value="radiologist">Radiologist</option>
                  <option value="physician">Physician</option>
                  <option value="administrator">Hospital Administrator</option>
                  <option value="it">IT / Technical Lead</option>
                  <option value="research">Researcher / Academic</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div class="form-group">
                <label class="label-large" for="interest">Area of Interest</label>
                <select id="interest" name="interest" class="form-input">
                  <option value="" disabled selected>Select module or topic</option>
                  <option value="rhenium">Rhenium OS (MRI)</option>
                  <option value="seaborgium">Seaborgium OS (CT)</option>
                  <option value="scandium">Scandium OS (Ultrasound)</option>
                  <option value="terbium">Terbium OS (X-Ray)</option>
                  <option value="platform">Full Platform</option>
                  <option value="partnership">Partnership / Research</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div class="form-group">
                <label class="label-large" for="message">Message</label>
                <textarea id="message" name="message" class="form-input form-textarea" placeholder="Tell us about your needs..." rows="5" required></textarea>
              </div>
              <button type="submit" class="md-button md-button-filled md-button-large submit-btn" [disabled]="isSubmitting">
                <span class="material-symbols-outlined sz-20">{{ isSubmitting ? 'hourglass_top' : 'send' }}</span>
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
              <p class="form-status body-medium" [class.error]="submitError" *ngIf="submitMessage">{{ submitMessage }}</p>
            </form>
          </div>

          <div class="contact-info animate-in animate-in-delay-2">
            <div class="info-card">
              <h3 class="headline-small">Contact Information</h3>

              <div class="info-item">
                <span class="material-symbols-outlined">location_on</span>
                <div>
                  <h4 class="title-small">Address</h4>
                  <p class="body-medium text-secondary">
                    79 Zaur Nudiraliyev Street<br>
                    Narimanov District<br>
                    Baku, AZ1078<br>
                    Azerbaijan
                  </p>
                </div>
              </div>

              <hr class="md-divider">

              <div class="info-item">
                <span class="material-symbols-outlined">language</span>
                <div>
                  <h4 class="title-small">Website</h4>
                  <a href="https://www.skolyn.se" target="_blank" class="body-medium">www.skolyn.se</a>
                </div>
              </div>

              <hr class="md-divider">

              <div class="info-item">
                <span class="material-symbols-outlined">schedule</span>
                <div>
                  <h4 class="title-small">Business Hours</h4>
                  <p class="body-medium text-secondary">
                    Monday to Friday<br>
                    09:00 to 18:00 (AZT, UTC+4)
                  </p>
                </div>
              </div>

              <hr class="md-divider">

              <div class="info-item">
                <span class="material-symbols-outlined">translate</span>
                <div>
                  <h4 class="title-small">Languages Supported</h4>
                  <div class="lang-chips">
                    <span class="md-chip">English</span>
                    <span class="md-chip">Azerbaijani</span>
                    <span class="md-chip">Swedish</span>
                    <span class="md-chip">Turkish</span>
                    <span class="md-chip">German</span>
                    <span class="md-chip">Arabic</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="info-card interest-card">
              <h3 class="title-large">Interested in Partnership?</h3>
              <p class="body-medium text-secondary">
                Skolyn actively works with academic medical centers, imaging research groups,
                and healthcare technology partners to advance AI-driven diagnostics.
              </p>
              <div class="partner-types">
                <div class="partner-type">
                  <span class="material-symbols-outlined sz-20">school</span>
                  <span class="body-medium">Academic Research</span>
                </div>
                <div class="partner-type">
                  <span class="material-symbols-outlined sz-20">local_hospital</span>
                  <span class="body-medium">Clinical Trials</span>
                </div>
                <div class="partner-type">
                  <span class="material-symbols-outlined sz-20">integration_instructions</span>
                  <span class="body-medium">Technology Integration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .page-hero {
      padding: 120px 0 64px; background: var(--md-sys-color-surface-container-low); text-align: center;
    }
    .hero-label {
      display: inline-flex; align-items: center; gap: 8px; padding: 6px 16px 6px 12px;
      background: rgba(26,115,232,0.08); border-radius: var(--md-sys-shape-corner-full);
      font: var(--md-sys-typescale-label-large); color: var(--md-sys-color-primary); margin-bottom: 24px;
    }
    .hero-desc { max-width: 640px; margin: 16px auto 0; font-size: 18px; line-height: 28px; }

    .contact-grid {
      display: grid; grid-template-columns: 1.3fr 1fr; gap: 64px; align-items: start;
    }

    .form-desc { margin-bottom: 32px; }

    .contact-form { display: flex; flex-direction: column; gap: 20px; }

    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }

    .form-group { display: flex; flex-direction: column; gap: 6px; }

    .form-group label { color: var(--md-sys-color-on-surface); }

    .form-input {
      height: 48px; padding: 0 16px;
      border: 1px solid var(--md-sys-color-outline);
      border-radius: var(--md-sys-shape-corner-small);
      font: var(--md-sys-typescale-body-large);
      color: var(--md-sys-color-on-surface);
      background: var(--md-sys-color-surface);
      transition: border-color var(--md-sys-motion-duration-short4) var(--md-sys-motion-easing-standard);
      outline: none;
    }

    .form-input:focus {
      border-color: var(--md-sys-color-primary);
      box-shadow: 0 0 0 1px var(--md-sys-color-primary);
    }

    .form-textarea {
      height: auto; padding: 12px 16px; resize: vertical; min-height: 120px;
      font-family: 'Inter', 'Segoe UI', Roboto, Arial, sans-serif;
    }

    select.form-input {
      appearance: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%235f6368' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 12px center;
      padding-right: 40px;
    }

    .submit-btn { width: 100%; margin-top: 8px; }
    .submit-btn[disabled] { opacity: 0.7; cursor: wait; }

    .form-status { margin-top: 8px; color: var(--md-sys-color-primary); }
    .form-status.error { color: var(--md-sys-color-error); }

    .contact-info { display: flex; flex-direction: column; gap: 24px; }

    .info-card {
      padding: 32px; border-radius: var(--md-sys-shape-corner-extra-large);
      background: var(--md-sys-color-surface-container-low);
    }

    .info-card h3 { margin-bottom: 24px; }

    .info-item {
      display: flex; gap: 16px; align-items: flex-start;
    }

    .info-item .material-symbols-outlined {
      color: var(--md-sys-color-primary); margin-top: 2px;
    }

    .info-item h4 { margin-bottom: 4px; }

    .lang-chips { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 8px; }

    .interest-card {
      background: linear-gradient(135deg, var(--md-sys-color-primary-container), #e8f0fe);
    }

    .interest-card h3 { margin-bottom: 8px; }
    .interest-card p { margin-bottom: 16px; }

    .partner-types { display: flex; flex-direction: column; gap: 12px; }

    .partner-type {
      display: flex; align-items: center; gap: 8px;
      color: var(--md-sys-color-on-primary-container);
    }

    @media (max-width: 1024px) {
      .contact-grid { grid-template-columns: 1fr; gap: 48px; }
    }

    @media (max-width: 640px) {
      .page-hero { padding: 100px 0 48px; }
      .form-row { grid-template-columns: 1fr; }
    }
  `],
})
export class ContactComponent {
  isSubmitting = false;
  submitError = false;
  submitMessage = '';

  private readonly contactApiUrl = '/api/contact';

  async onSubmit(event: Event) {
    event.preventDefault();

    if (this.isSubmitting) {
      return;
    }

    const form = event.target as HTMLFormElement;
    const data = new FormData(form);

    const payload = {
      firstName: String(data.get('firstName') ?? '').trim(),
      lastName: String(data.get('lastName') ?? '').trim(),
      email: String(data.get('email') ?? '').trim(),
      organization: String(data.get('organization') ?? '').trim(),
      role: String(data.get('role') ?? '').trim(),
      interest: String(data.get('interest') ?? '').trim(),
      message: String(data.get('message') ?? '').trim(),
    };

    this.isSubmitting = true;
    this.submitError = false;
    this.submitMessage = '';

    try {
      const response = await fetch(this.contactApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Contact API failed with status ${response.status}`);
      }

      this.submitMessage = 'Thank you for your message. Our team will reach out within 24 hours.';
      form.reset();
    } catch (error) {
      console.error('Failed to submit contact form.', error);
      this.submitError = true;
      this.submitMessage = 'We could not send your message right now. Please try again shortly.';
    } finally {
      this.isSubmitting = false;
    }
  }
}
