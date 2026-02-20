import { Component } from '@angular/core';

@Component({
  selector: 'app-accessibility',
  imports: [],
  template: `
    <section class="page-hero">
      <div class="container">
        <div class="hero-label"><span class="material-symbols-outlined sz-20">accessibility_new</span> Accessibility</div>
        <h1 class="display-medium animate-in">Accessibility Statement</h1>
        <p class="body-large text-secondary hero-desc animate-in animate-in-delay-1">
          Last updated: February 1, 2026
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container legal-container">
        <div class="legal-section">
          <h2 class="headline-small">Our Commitment</h2>
          <p class="body-medium text-secondary">
            Skolyn is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience
            for everyone and applying the relevant accessibility standards to ensure we provide equal access to all users.
          </p>
        </div>

        <div class="legal-section">
          <h2 class="headline-small">Conformance Status</h2>
          <p class="body-medium text-secondary">
            We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. These guidelines define requirements for designers
            and developers to improve accessibility for people with disabilities, including visual, auditory, cognitive, and motor impairments.
          </p>
          <div class="standards-grid">
            @for (s of standards; track s.title) {
              <div class="standard-card">
                <span class="material-symbols-outlined sz-32" [style.color]="s.color">{{ s.icon }}</span>
                <h4 class="title-small">{{ s.title }}</h4>
                <p class="body-small text-secondary">{{ s.desc }}</p>
              </div>
            }
          </div>
        </div>

        <div class="legal-section">
          <h2 class="headline-small">Accessibility Features</h2>
          <p class="body-medium text-secondary">We have implemented the following measures to ensure accessibility:</p>
          <ul class="legal-list">
            <li class="body-medium text-secondary"><strong>Semantic HTML:</strong> Proper heading hierarchy, landmark regions, and ARIA labels throughout all pages.</li>
            <li class="body-medium text-secondary"><strong>Keyboard Navigation:</strong> All interactive elements are fully accessible via keyboard. Focus indicators are visible on all focusable elements.</li>
            <li class="body-medium text-secondary"><strong>Color Contrast:</strong> Text and interactive elements meet WCAG 2.1 AA contrast ratio requirements (minimum 4.5:1 for normal text, 3:1 for large text).</li>
            <li class="body-medium text-secondary"><strong>Responsive Design:</strong> Content is accessible across all device sizes and orientations, with support for text resizing up to 200%.</li>
            <li class="body-medium text-secondary"><strong>Alt Text:</strong> All meaningful images include descriptive alternative text. Decorative images are properly marked.</li>
            <li class="body-medium text-secondary"><strong>Motion Preferences:</strong> Animations respect the <code>prefers-reduced-motion</code> media query for users who are sensitive to motion.</li>
            <li class="body-medium text-secondary"><strong>Screen Reader Support:</strong> Pages are tested with popular screen readers including NVDA, JAWS, and VoiceOver.</li>
            <li class="body-medium text-secondary"><strong>Focus Management:</strong> Dynamic content changes are announced to assistive technologies using ARIA live regions.</li>
          </ul>
        </div>

        <div class="legal-section">
          <h2 class="headline-small">Clinical Platform Accessibility</h2>
          <p class="body-medium text-secondary">
            Our clinical diagnostic platform (separate from this marketing website) follows additional accessibility standards specific to medical
            software, including IEC 62366 (usability engineering for medical devices) and relevant FDA guidance on human factors engineering.
            The clinician interface is designed for high-contrast radiology environments and supports customizable display settings.
          </p>
        </div>

        <div class="legal-section">
          <h2 class="headline-small">Known Limitations</h2>
          <p class="body-medium text-secondary">
            While we strive for full accessibility, some areas may have limitations:
          </p>
          <ul class="legal-list">
            <li class="body-medium text-secondary">Some data visualization components in technical pages may not be fully accessible to screen readers. We provide text alternatives where possible.</li>
            <li class="body-medium text-secondary">Third-party embedded content may not meet our accessibility standards. We work with our partners to improve these experiences.</li>
          </ul>
        </div>

        <div class="legal-section">
          <h2 class="headline-small">Feedback & Contact</h2>
          <p class="body-medium text-secondary">
            We welcome your feedback on the accessibility of the Skolyn website. If you encounter any accessibility barriers or have suggestions
            for improvement, please contact us:
          </p>
          <div class="contact-info">
            <div class="contact-row">
              <span class="material-symbols-outlined sz-20">mail</span>
              <a href="mailto:accessibility@skolyn.se">accessibility&#64;skolyn.se</a>
            </div>
            <div class="contact-row">
              <span class="material-symbols-outlined sz-20">schedule</span>
              <span class="body-medium text-secondary">We aim to respond to accessibility feedback within 5 business days.</span>
            </div>
          </div>
        </div>

        <div class="legal-section">
          <h2 class="headline-small">Assessment & Review</h2>
          <p class="body-medium text-secondary">
            Accessibility of the Skolyn website is assessed through a combination of automated testing tools (axe-core, Lighthouse),
            manual testing with assistive technologies, and periodic expert reviews. We review and update our accessibility practices at least
            twice per year.
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
    .legal-list li { margin-bottom: 10px; line-height: 1.6; }
    .legal-list code { background: var(--md-sys-color-surface-container); padding: 2px 6px; border-radius: 4px; font-size: 13px; }
    .standards-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 20px; }
    .standard-card { background: var(--md-sys-color-surface-container-low); border-radius: var(--md-sys-shape-corner-medium); padding: 20px; text-align: center; }
    .standard-card h4 { margin: 8px 0 4px; }
    .contact-info { margin-top: 16px; display: flex; flex-direction: column; gap: 12px; }
    .contact-row { display: flex; align-items: center; gap: 10px; }
    .contact-row .material-symbols-outlined { color: var(--md-sys-color-primary); }
    @media (max-width: 640px) { .page-hero { padding: 100px 0 40px; } .standards-grid { grid-template-columns: repeat(2, 1fr); } }
  `],
})
export class AccessibilityComponent {
  standards = [
    { title: 'Perceivable', icon: 'visibility', color: '#1a73e8', desc: 'Content is presentable in ways all users can perceive.' },
    { title: 'Operable', icon: 'touch_app', color: '#1e8e3e', desc: 'Interface components are navigable and operable by all.' },
    { title: 'Understandable', icon: 'psychology', color: '#ea8600', desc: 'Information and UI operation are understandable.' },
    { title: 'Robust', icon: 'verified', color: '#9334e6', desc: 'Content is compatible with current and future technologies.' },
  ];
}
