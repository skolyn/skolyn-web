import { Component } from '@angular/core';

@Component({
  selector: 'app-terms',
  imports: [],
  template: `
    <section class="page-hero">
      <div class="container">
        <div class="hero-badge">
          <span class="material-symbols-outlined">gavel</span>
          Legal
        </div>
        <h1 class="display-medium animate-in">Terms of Service</h1>
        <p class="hero-subtitle body-large animate-in animate-in-delay-1">
          Effective Date: January 1, 2026. Last Updated: February 10, 2026.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container legal-content">
        <div class="legal-nav">
          <h3 class="title-medium">Contents</h3>
          <ol>
            <li><a href="/terms#acceptance">Acceptance of Terms</a></li>
            <li><a href="/terms#eligibility">Eligibility</a></li>
            <li><a href="/terms#services">Description of Services</a></li>
            <li><a href="/terms#accounts">Account Registration</a></li>
            <li><a href="/terms#use">Permitted Use</a></li>
            <li><a href="/terms#restrictions">Restrictions</a></li>
            <li><a href="/terms#ip">Intellectual Property</a></li>
            <li><a href="/terms#medical">Medical Disclaimer</a></li>
            <li><a href="/terms#liability">Limitation of Liability</a></li>
            <li><a href="/terms#indemnification">Indemnification</a></li>
            <li><a href="/terms#termination">Termination</a></li>
            <li><a href="/terms#governing">Governing Law</a></li>
            <li><a href="/terms#changes">Changes to Terms</a></li>
            <li><a href="/terms#contact">Contact</a></li>
          </ol>
        </div>

        <div class="legal-body">
          <div id="acceptance" class="legal-section">
            <h2 class="headline-medium">1. Acceptance of Terms</h2>
            <p>By accessing or using the Skolyn platform, website (www.skolyn.se), API, or any
            associated services (collectively, the "Services"), you agree to be bound by these
            Terms of Service ("Terms"). If you are using the Services on behalf of an organization,
            you are agreeing to these Terms on behalf of that organization and represent that you
            have the authority to do so.</p>
            <p>If you do not agree with these Terms, you must not access or use our Services.</p>
          </div>

          <div id="eligibility" class="legal-section">
            <h2 class="headline-medium">2. Eligibility</h2>
            <p>The Services are designed for use by licensed healthcare professionals, healthcare
            institutions, and authorized personnel within clinical or research settings. By using
            the Services, you represent and warrant that:</p>
            <ul>
              <li>You are at least 18 years of age</li>
              <li>You possess the necessary medical or professional qualifications to interpret AI-assisted diagnostic results</li>
              <li>You are authorized by your institution to access and use the Services</li>
              <li>Your use complies with all applicable laws, regulations, and professional standards</li>
            </ul>
          </div>

          <div id="services" class="legal-section">
            <h2 class="headline-medium">3. Description of Services</h2>
            <p>Skolyn provides an AI-powered medical imaging analysis platform that includes:</p>
            <ul>
              <li><strong>Rhenium OS:</strong> MRI intelligence module with 15 imaging subtypes</li>
              <li><strong>Seaborgium OS:</strong> CT intelligence module with 13 imaging subtypes</li>
              <li><strong>Scandium OS:</strong> Ultrasound intelligence module with 16 imaging subtypes</li>
              <li><strong>Terbium OS:</strong> X-Ray intelligence module with 13 imaging subtypes</li>
            </ul>
            <p>The Services include AI-generated diagnostic suggestions, explainability reports,
            priority classifications, and clinical decision support. All Services are provided as
            decision-support tools and are intended to augment, not replace, clinical judgment.</p>
          </div>

          <div id="accounts" class="legal-section">
            <h2 class="headline-medium">4. Account Registration</h2>
            <p>To access certain features of the Services, you must register for an account.
            You agree to:</p>
            <ul>
              <li>Provide accurate, current, and complete registration information</li>
              <li>Maintain and promptly update your account information</li>
              <li>Maintain the security and confidentiality of your login credentials</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>
          </div>

          <div id="use" class="legal-section">
            <h2 class="headline-medium">5. Permitted Use</h2>
            <p>Subject to these Terms, we grant you a limited, non-exclusive, non-transferable,
            revocable license to use the Services for:</p>
            <ul>
              <li>Clinical decision support in medical imaging interpretation</li>
              <li>Research and academic study in accordance with institutional review board approval</li>
              <li>Integration with authorized clinical information systems (PACS, RIS, EMR)</li>
              <li>Quality assurance and second-opinion analysis workflows</li>
            </ul>
          </div>

          <div id="restrictions" class="legal-section">
            <h2 class="headline-medium">6. Restrictions</h2>
            <p>You shall not:</p>
            <ul>
              <li>Use the Services as a sole or primary basis for clinical diagnosis</li>
              <li>Reverse engineer, decompile, or disassemble any portion of the software</li>
              <li>Remove, alter, or obscure any proprietary notices or labels</li>
              <li>Share account credentials or allow unauthorized access</li>
              <li>Use the Services to develop a competing product or service</li>
              <li>Transmit any malicious code, viruses, or harmful data</li>
              <li>Use the Services in violation of any applicable law, regulation, or professional standard</li>
              <li>Attempt to access any system, data, or account beyond your authorization</li>
            </ul>
          </div>

          <div id="ip" class="legal-section">
            <h2 class="headline-medium">7. Intellectual Property</h2>
            <p>All intellectual property rights in the Services, including but not limited to software,
            algorithms, models, documentation, trademarks, and trade secrets, are owned by
            Skolyn or its licensors. Nothing in these Terms grants you any ownership rights.
            "Skolyn," "Rhenium OS," "Seaborgium OS," "Scandium OS," "Terbium OS," and
            "Bohrium OS" are trademarks of Skolyn.</p>
            <p>You retain ownership of any patient data or clinical content you submit to the
            Services, subject to the license necessary for us to provide the Services.</p>
          </div>

          <div id="medical" class="legal-section">
            <h2 class="headline-medium">8. Medical Disclaimer</h2>
            <div class="disclaimer-box">
              <span class="material-symbols-outlined">warning</span>
              <div>
                <strong>Important Clinical Notice</strong>
                <p>The Skolyn platform is a clinical decision-support tool designed to assist
                qualified healthcare professionals. It is not intended to replace the clinical
                judgment, expertise, or responsibility of a licensed physician or radiologist.
                All AI-generated outputs must be independently reviewed, validated, and approved
                by a qualified clinician before any clinical action is taken. Skolyn does not
                provide medical advice, diagnosis, or treatment recommendations directly to
                patients.</p>
              </div>
            </div>
          </div>

          <div id="liability" class="legal-section">
            <h2 class="headline-medium">9. Limitation of Liability</h2>
            <p>To the maximum extent permitted by applicable law, Skolyn, its officers, directors,
            employees, and affiliates shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages arising out of or related to your use of the
            Services. Our total aggregate liability shall not exceed the total fees paid by you
            in the twelve (12) months preceding the claim.</p>
            <p>This limitation applies regardless of the theory of liability (contract, tort,
            strict liability, or otherwise), even if we have been advised of the possibility
            of such damages.</p>
          </div>

          <div id="indemnification" class="legal-section">
            <h2 class="headline-medium">10. Indemnification</h2>
            <p>You agree to indemnify, defend, and hold harmless Skolyn and its affiliates from
            any claims, damages, losses, liabilities, and expenses arising from your use of the
            Services, your violation of these Terms, or your violation of any rights of a third
            party, including but not limited to patient rights and privacy regulations.</p>
          </div>

          <div id="termination" class="legal-section">
            <h2 class="headline-medium">11. Termination</h2>
            <p>We may suspend or terminate your access to the Services at any time, with or without
            cause or notice, including for violation of these Terms. Upon termination:</p>
            <ul>
              <li>Your license to use the Services ceases immediately</li>
              <li>You must discontinue all use of the Services</li>
              <li>Provisions relating to intellectual property, limitation of liability, and indemnification survive termination</li>
              <li>We will provide reasonable access to export your data upon request within 30 days</li>
            </ul>
          </div>

          <div id="governing" class="legal-section">
            <h2 class="headline-medium">12. Governing Law</h2>
            <p>These Terms are governed by and construed in accordance with the laws of Sweden,
            without regard to its conflict of laws principles. Any dispute arising from these
            Terms shall be subject to the exclusive jurisdiction of the courts located in
            Stockholm, Sweden.</p>
          </div>

          <div id="changes" class="legal-section">
            <h2 class="headline-medium">13. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms at any time. Material changes will be
            communicated at least 30 days in advance through our website, email, or in-platform
            notification. Your continued use of the Services after the effective date of any
            modifications constitutes your acceptance of the revised Terms.</p>
          </div>

          <div id="contact" class="legal-section">
            <h2 class="headline-medium">14. Contact</h2>
            <p>For questions about these Terms of Service:</p>
            <div class="contact-info">
              <p><strong>Legal Department</strong></p>
              <p>Skolyn</p>
              <p>79 Zaur Nudiraliyev Street, Narimanov District</p>
              <p>Baku, AZ1078, Azerbaijan</p>
              <p>Email: legal&#64;skolyn.se</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .page-hero {
      padding: 96px 0 48px;
      background: linear-gradient(180deg, var(--md-sys-color-surface-container-low) 0%, var(--md-sys-color-surface) 100%);
    }
    .hero-badge {
      display: inline-flex; align-items: center; gap: 8px; padding: 6px 16px;
      border-radius: var(--md-sys-shape-corner-full);
      background: var(--md-sys-color-primary); color: var(--md-sys-color-on-primary);
      font: var(--md-sys-typescale-label-large); margin-bottom: 24px;
    }
    .hero-subtitle { max-width: 720px; color: var(--md-sys-color-on-surface-variant); margin-top: 16px; }

    .legal-content { display: grid; grid-template-columns: 240px 1fr; gap: 48px; }
    .legal-nav {
      position: sticky; top: 80px; align-self: start;
      background: var(--md-sys-color-surface-container); border-radius: var(--md-sys-shape-corner-large);
      padding: 24px;
    }
    .legal-nav h3 { margin-bottom: 16px; }
    .legal-nav ol { padding-left: 20px; display: flex; flex-direction: column; gap: 8px; }
    .legal-nav a {
      font: var(--md-sys-typescale-body-small); color: var(--md-sys-color-on-surface-variant);
      text-decoration: none;
    }
    .legal-nav a:hover { color: var(--md-sys-color-primary); }

    .legal-section { margin-bottom: 40px; }
    .legal-section h2 { margin-bottom: 16px; color: var(--md-sys-color-on-surface); }
    .legal-section h3 { margin: 20px 0 12px; }
    .legal-section p { font: var(--md-sys-typescale-body-large); color: var(--md-sys-color-on-surface-variant); line-height: 1.8; margin-bottom: 12px; }
    .legal-section ul { padding-left: 24px; margin-bottom: 16px; }
    .legal-section li { font: var(--md-sys-typescale-body-large); color: var(--md-sys-color-on-surface-variant); line-height: 1.8; margin-bottom: 4px; }

    .disclaimer-box {
      display: flex; gap: 16px; padding: 24px; border-radius: var(--md-sys-shape-corner-large);
      background: #fef7e0; border: 1px solid #f9ab00;
    }
    .disclaimer-box .material-symbols-outlined { color: #f9ab00; font-size: 32px; flex-shrink: 0; }
    .disclaimer-box strong { display: block; margin-bottom: 8px; color: var(--md-sys-color-on-surface); }
    .disclaimer-box p { margin: 0; font-size: 14px; }

    .contact-info {
      padding: 20px; background: var(--md-sys-color-surface-container-low);
      border-radius: var(--md-sys-shape-corner-medium);
    }
    .contact-info p { margin-bottom: 4px; }

    @media (max-width: 1024px) { .legal-content { grid-template-columns: 1fr; } .legal-nav { position: static; } }
  `],
})
export class TermsComponent {}
