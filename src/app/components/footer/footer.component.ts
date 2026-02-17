import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  template: `
    <footer class="footer">
      <div class="footer-main container-wide">
        <div class="footer-grid">
          <div class="footer-col brand-col">
            <a routerLink="/" class="footer-brand">
              <img src="assets/skolyn-logo-wide.svg" alt="Skolyn" class="footer-logo" />
            </a>
            <p class="tagline">Early. Accurate. Trusted.</p>
            <p class="description">Redefining Medical Imaging Through Explainable Artificial Intelligence</p>
            <div class="social-links">
              <a href="https://linkedin.com/company/skolyn" target="_blank" rel="noopener" aria-label="LinkedIn" title="LinkedIn">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://twitter.com/skolyn_ai" target="_blank" rel="noopener" aria-label="X (Twitter)" title="X (Twitter)">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://github.com/skolyn" target="_blank" rel="noopener" aria-label="GitHub" title="GitHub">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              </a>
              <a href="https://youtube.com/@skolyn" target="_blank" rel="noopener" aria-label="YouTube" title="YouTube">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          <div class="footer-col">
            <h4 class="footer-heading">Platform</h4>
            <a routerLink="/platform">Architecture</a>
            <a routerLink="/pipeline">Diagnostic Pipeline</a>
            <a routerLink="/interface">Clinician Interface</a>
            <a routerLink="/infrastructure">AI Infrastructure</a>
            <a routerLink="/interoperability">Interoperability</a>
            <a routerLink="/validation">Clinical Validation</a>
            <a routerLink="/deployment">Deployment</a>
          </div>

          <div class="footer-col">
            <h4 class="footer-heading">Modules</h4>
            <a routerLink="/modules/rhenium">Rhenium OS / MRI</a>
            <a routerLink="/modules/seaborgium">Seaborgium OS / CT</a>
            <a routerLink="/modules/scandium">Scandium OS / Ultrasound</a>
            <a routerLink="/modules/terbium">Terbium OS / X-Ray</a>
          </div>

          <div class="footer-col">
            <h4 class="footer-heading">Technology</h4>
            <a routerLink="/technology">XAI Framework</a>
            <a routerLink="/security">Security and Compliance</a>
            <a routerLink="/roadmap">R&D Roadmap</a>
          </div>

          <div class="footer-col">
            <h4 class="footer-heading">Company</h4>
            <a routerLink="/about">About</a>
            <a routerLink="/team">Team</a>
            <a routerLink="/careers">Careers</a>
            <a routerLink="/blog">Blog & News</a>
            <a routerLink="/partners">Partners</a>
            <a routerLink="/investors">Investors</a>
            <a routerLink="/contact">Contact</a>
          </div>

          <div class="footer-col">
            <h4 class="footer-heading">Resources</h4>
            <a routerLink="/docs">Documentation</a>
            <a routerLink="/faq">FAQ</a>
            <a href="https://www.skolyn.se" target="_blank" rel="noopener">www.skolyn.se</a>
            <div class="office-info">
              <div class="office">
                <span class="material-symbols-outlined sz-16">apartment</span>
                <span>Baku, Azerbaijan (HQ)</span>
              </div>
              <div class="office">
                <span class="material-symbols-outlined sz-16">cloud</span>
                <span>Stockholm, Sweden (Online)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="container-wide footer-bottom-inner">
          <div class="incubated-by">
            <span class="body-small text-secondary">Incubated by</span>
            <a href="https://innoland.az" target="_blank" rel="noopener" class="innoland-footer-link">
              <img src="assets/innoland-logo.svg" alt="Innoland Incubation Center" class="innoland-footer-logo" />
            </a>
          </div>
          <p class="copyright">&copy; 2026 Skolyn. All rights reserved.</p>
          <div class="footer-legal">
            <a routerLink="/privacy">Privacy Policy</a>
            <span class="divider">|</span>
            <a routerLink="/terms">Terms of Service</a>
            <span class="divider">|</span>
            <a routerLink="/cookies">Cookie Policy</a>
            <span class="divider">|</span>
            <a routerLink="/accessibility">Accessibility</a>
          </div>
          <div class="footer-badges">
            <span class="md-chip">ISO 13485</span>
            <span class="md-chip">ISO 27001</span>
            <span class="md-chip">HIPAA</span>
            <span class="md-chip">GDPR</span>
            <span class="md-chip">CE Mark</span>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer { background: var(--md-sys-color-surface-container-low); border-top: 1px solid var(--md-sys-color-outline-variant); margin-top: auto; }
    .footer-main { padding: 64px 24px 48px; }
    .footer-grid { display: grid; grid-template-columns: 1.4fr 1fr 1fr 1fr 1.1fr 1fr; gap: 32px; }
    .footer-brand { display: block; text-decoration: none; margin-bottom: 16px; }
    .footer-brand:hover { text-decoration: none; }
    .footer-logo { height: 24px; width: auto; display: block; }
    .tagline { font: var(--md-sys-typescale-label-large); color: var(--md-sys-color-primary); margin-bottom: 8px; }
    .description { font: var(--md-sys-typescale-body-medium); color: var(--md-sys-color-on-surface-variant); max-width: 280px; margin-bottom: 20px; }
    .social-links { display: flex; gap: 8px; }
    .social-links a {
      width: 36px; height: 36px; border-radius: var(--md-sys-shape-corner-full);
      background: var(--md-sys-color-surface-container); color: var(--md-sys-color-on-surface-variant);
      display: flex; align-items: center; justify-content: center; text-decoration: none;
      transition: all var(--md-sys-motion-duration-short4) var(--md-sys-motion-easing-standard);
    }
    .social-links a:hover { background: var(--md-sys-color-primary); color: var(--md-sys-color-on-primary); text-decoration: none; }
    .footer-heading {
      font: var(--md-sys-typescale-title-small); color: var(--md-sys-color-on-surface);
      margin-bottom: 16px; text-transform: uppercase; letter-spacing: 0.5px;
    }
    .footer-col { display: flex; flex-direction: column; gap: 10px; }
    .footer-col a {
      font: var(--md-sys-typescale-body-medium); color: var(--md-sys-color-on-surface-variant);
      text-decoration: none; transition: color var(--md-sys-motion-duration-short4) var(--md-sys-motion-easing-standard);
      width: fit-content;
    }
    .footer-col a:hover { color: var(--md-sys-color-primary); text-decoration: none; }
    .office-info { display: flex; flex-direction: column; gap: 6px; margin-top: 4px; }
    .office {
      display: flex; align-items: center; gap: 6px;
      font: var(--md-sys-typescale-body-small); color: var(--md-sys-color-on-surface-variant);
    }
    .office .material-symbols-outlined { color: var(--md-sys-color-on-surface-variant); }
    .footer-bottom { border-top: 1px solid var(--md-sys-color-outline-variant); padding: 20px 24px; }
    .footer-bottom-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; }
    .copyright { font: var(--md-sys-typescale-body-small); color: var(--md-sys-color-on-surface-variant); }
    .footer-legal { display: flex; align-items: center; gap: 8px; }
    .footer-legal a { font: var(--md-sys-typescale-body-small); color: var(--md-sys-color-on-surface-variant); text-decoration: none; transition: color 0.2s; }
    .footer-legal a:hover { color: var(--md-sys-color-primary); }
    .footer-legal .divider { color: var(--md-sys-color-outline); }
    .footer-badges { display: flex; gap: 8px; flex-wrap: wrap; }
    .incubated-by { display: flex; align-items: center; gap: 10px; }
    .innoland-footer-link { display: flex; align-items: center; text-decoration: none; transition: opacity 0.2s; }
    .innoland-footer-link:hover { opacity: 0.7; }
    .innoland-footer-logo { height: 28px; width: auto; }
    @media (max-width: 1024px) { .footer-grid { grid-template-columns: 1fr 1fr 1fr; gap: 40px; } }
    @media (max-width: 640px) {
      .footer-grid { grid-template-columns: 1fr; gap: 32px; }
      .footer-main { padding: 40px 16px 32px; }
      .footer-bottom-inner { flex-direction: column; align-items: flex-start; }
    }
  `],
})
export class FooterComponent {}
