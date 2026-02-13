import { Component } from '@angular/core';

@Component({
  selector: 'app-cookies',
  imports: [],
  template: `
    <section class="page-hero">
      <div class="container">
        <div class="hero-label"><span class="material-symbols-outlined sz-20">cookie</span> Cookie Policy</div>
        <h1 class="display-medium animate-in">Cookie Policy</h1>
        <p class="body-large text-secondary hero-desc animate-in animate-in-delay-1">
          Last updated: February 1, 2026
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container legal-container">
        <div class="legal-section">
          <h2 class="headline-small">1. What Are Cookies</h2>
          <p class="body-medium text-secondary">
            Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better
            experience by remembering your preferences, analyzing how you use the site, and supporting essential functionality.
          </p>
        </div>

        <div class="legal-section">
          <h2 class="headline-small">2. Types of Cookies We Use</h2>
          <div class="cookie-table">
            <div class="cookie-row header">
              <span class="title-small">Category</span>
              <span class="title-small">Purpose</span>
              <span class="title-small">Duration</span>
              <span class="title-small">Required</span>
            </div>
            @for (c of cookies; track c.name) {
              <div class="cookie-row">
                <span class="body-medium"><strong>{{ c.name }}</strong></span>
                <span class="body-small text-secondary">{{ c.purpose }}</span>
                <span class="body-small text-secondary">{{ c.duration }}</span>
                <span class="body-small" [style.color]="c.required ? 'var(--md-sys-color-primary)' : 'var(--md-sys-color-on-surface-variant)'">{{ c.required ? 'Yes' : 'No' }}</span>
              </div>
            }
          </div>
        </div>

        <div class="legal-section">
          <h2 class="headline-small">3. Essential Cookies</h2>
          <p class="body-medium text-secondary">
            These cookies are strictly necessary for the website to function. They enable core features such as security, session management,
            and accessibility. You cannot disable these cookies without impacting the functionality of the website.
          </p>
        </div>

        <div class="legal-section">
          <h2 class="headline-small">4. Analytics Cookies</h2>
          <p class="body-medium text-secondary">
            We use analytics cookies to understand how visitors interact with our website. This data is collected anonymously and helps us
            improve the user experience. We use privacy-focused analytics that do not track individual users across websites.
          </p>
        </div>

        <div class="legal-section">
          <h2 class="headline-small">5. How to Manage Cookies</h2>
          <p class="body-medium text-secondary">
            You can control and manage cookies through your browser settings. Most browsers allow you to block or delete cookies. Please note that
            blocking essential cookies may affect website functionality.
          </p>
          <ul class="legal-list">
            <li class="body-medium text-secondary"><strong>Chrome:</strong> Settings → Privacy and Security → Cookies</li>
            <li class="body-medium text-secondary"><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
            <li class="body-medium text-secondary"><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
            <li class="body-medium text-secondary"><strong>Edge:</strong> Settings → Cookies and Site Permissions</li>
          </ul>
        </div>

        <div class="legal-section">
          <h2 class="headline-small">6. Third-Party Cookies</h2>
          <p class="body-medium text-secondary">
            We do not use third-party advertising cookies. Any third-party services integrated into our website (such as analytics) are
            configured to respect user privacy and comply with GDPR and applicable data protection regulations.
          </p>
        </div>

        <div class="legal-section">
          <h2 class="headline-small">7. GDPR Compliance</h2>
          <p class="body-medium text-secondary">
            In accordance with the General Data Protection Regulation (GDPR), we ensure that non-essential cookies are only set after obtaining
            your explicit consent. You may withdraw your consent at any time by adjusting your cookie preferences or clearing cookies from your browser.
          </p>
        </div>

        <div class="legal-section">
          <h2 class="headline-small">8. Updates to This Policy</h2>
          <p class="body-medium text-secondary">
            We may update this Cookie Policy from time to time to reflect changes in legislation, technology, or our business practices.
            We encourage you to review this page periodically for the latest information on our cookie practices.
          </p>
        </div>

        <div class="legal-section">
          <h2 class="headline-small">9. Contact</h2>
          <p class="body-medium text-secondary">
            If you have any questions about our use of cookies, please contact us at
            <a href="mailto:privacy@skolyn.se">privacy&#64;skolyn.se</a>.
          </p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .page-hero { padding: 120px 0 48px; background: var(--md-sys-color-surface-container-low); text-align: center; }
    .hero-label { display: inline-flex; align-items: center; gap: 8px; padding: 6px 16px 6px 12px; background: rgba(26,115,232,0.08); border-radius: var(--md-sys-shape-corner-full); font: var(--md-sys-typescale-label-large); color: var(--md-sys-color-primary); margin-bottom: 24px; }
    .hero-desc { max-width: 640px; margin: 16px auto 0; }
    .legal-container { max-width: 800px; margin: 0 auto; }
    .legal-section { margin-bottom: 36px; }
    .legal-section h2 { margin-bottom: 12px; }
    .legal-section p { line-height: 1.7; margin-bottom: 12px; }
    .legal-section a { color: var(--md-sys-color-primary); text-decoration: none; }
    .legal-section a:hover { text-decoration: underline; }
    .legal-list { padding-left: 24px; margin-top: 12px; }
    .legal-list li { margin-bottom: 8px; line-height: 1.6; }
    .cookie-table { border: 1px solid var(--md-sys-color-outline-variant); border-radius: var(--md-sys-shape-corner-medium); overflow: hidden; margin-top: 16px; }
    .cookie-row { display: grid; grid-template-columns: 1.2fr 2fr 1fr 0.6fr; padding: 12px 16px; gap: 12px; align-items: center; }
    .cookie-row:not(:last-child) { border-bottom: 1px solid var(--md-sys-color-outline-variant); }
    .cookie-row.header { background: var(--md-sys-color-surface-container); }
    @media (max-width: 640px) { .page-hero { padding: 100px 0 40px; } .cookie-row { grid-template-columns: 1fr; gap: 4px; } }
  `],
})
export class CookiesComponent {
  cookies = [
    { name: 'Essential', purpose: 'Session management, CSRF protection, load balancing, accessibility preferences', duration: 'Session', required: true },
    { name: 'Performance', purpose: 'Page load times, error rates, server response metrics', duration: '30 days', required: false },
    { name: 'Analytics', purpose: 'Page views, navigation paths, feature usage (anonymized)', duration: '90 days', required: false },
    { name: 'Preferences', purpose: 'Language, theme, layout preferences', duration: '1 year', required: false },
  ];
}
