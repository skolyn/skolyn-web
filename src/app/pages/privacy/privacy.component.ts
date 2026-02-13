import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy',
  imports: [],
  template: `
    <section class="page-hero">
      <div class="container">
        <div class="hero-badge">
          <span class="material-symbols-outlined">shield</span>
          Legal
        </div>
        <h1 class="display-medium animate-in">Privacy Policy</h1>
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
            <li><a href="/privacy#intro">Introduction</a></li>
            <li><a href="/privacy#info-collect">Information We Collect</a></li>
            <li><a href="/privacy#use">How We Use Your Information</a></li>
            <li><a href="/privacy#sharing">Information Sharing</a></li>
            <li><a href="/privacy#retention">Data Retention</a></li>
            <li><a href="/privacy#security">Data Security</a></li>
            <li><a href="/privacy#rights">Your Rights</a></li>
            <li><a href="/privacy#cookies">Cookies and Tracking</a></li>
            <li><a href="/privacy#children">Children's Privacy</a></li>
            <li><a href="/privacy#international">International Transfers</a></li>
            <li><a href="/privacy#changes">Changes to This Policy</a></li>
            <li><a href="/privacy#contact">Contact Us</a></li>
          </ol>
        </div>

        <div class="legal-body">
          <div id="intro" class="legal-section">
            <h2 class="headline-medium">1. Introduction</h2>
            <p>Skolyn ("we," "our," or "us") is committed to protecting your privacy. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your information when you
            visit our website (www.skolyn.se), use our platform, or interact with our services.</p>
            <p>We process data in accordance with the General Data Protection Regulation (GDPR),
            the Health Insurance Portability and Accountability Act (HIPAA), and other applicable
            data protection laws. By accessing or using our services, you agree to the terms of
            this Privacy Policy.</p>
          </div>

          <div id="info-collect" class="legal-section">
            <h2 class="headline-medium">2. Information We Collect</h2>
            <h3 class="title-large">2.1 Personal Information</h3>
            <p>We may collect the following categories of personal information:</p>
            <ul>
              <li><strong>Identity Data:</strong> Name, title, employer or institutional affiliation</li>
              <li><strong>Contact Data:</strong> Email address, phone number, postal address</li>
              <li><strong>Professional Data:</strong> Medical license number, specialty, board certification</li>
              <li><strong>Account Data:</strong> Username, password, account preferences</li>
              <li><strong>Employment Data:</strong> Resume, cover letter, work history (for career applicants)</li>
            </ul>

            <h3 class="title-large">2.2 Protected Health Information (PHI)</h3>
            <p>In the course of providing our AI diagnostic services, we may process Protected
            Health Information as defined under HIPAA. All PHI processing is governed by a
            Business Associate Agreement (BAA) executed with the covered entity. PHI is:</p>
            <ul>
              <li>Encrypted at rest (AES-256) and in transit (TLS 1.3)</li>
              <li>Subject to minimum necessary access controls</li>
              <li>Logged and auditable through immutable audit trails</li>
              <li>De-identified where possible using Safe Harbor or Expert Determination methods</li>
            </ul>

            <h3 class="title-large">2.3 Technical Data</h3>
            <ul>
              <li>IP address and approximate location (country/region level)</li>
              <li>Browser type, version, and operating system</li>
              <li>Pages visited, time spent, referral source</li>
              <li>Device identifiers and session data</li>
            </ul>
          </div>

          <div id="use" class="legal-section">
            <h2 class="headline-medium">3. How We Use Your Information</h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul>
              <li>Providing, operating, and maintaining our AI diagnostic platform</li>
              <li>Processing and responding to your inquiries and requests</li>
              <li>Improving our AI models and services through anonymized, aggregated analytics</li>
              <li>Complying with legal and regulatory obligations (FDA, CE Mark, HIPAA, GDPR)</li>
              <li>Communicating product updates, security notices, and service changes</li>
              <li>Processing employment applications</li>
              <li>Ensuring the security and integrity of our systems</li>
            </ul>
            <p>We do not sell your personal information. We do not use PHI for marketing purposes.
            AI model training uses only de-identified, aggregated datasets with appropriate
            institutional review and consent.</p>
          </div>

          <div id="sharing" class="legal-section">
            <h2 class="headline-medium">4. Information Sharing</h2>
            <p>We may share information with:</p>
            <ul>
              <li><strong>Healthcare Institutions:</strong> Under BAA, as required for clinical operations</li>
              <li><strong>Service Providers:</strong> Cloud hosting (with HIPAA-compliant infrastructure), analytics, and support tools</li>
              <li><strong>Regulatory Bodies:</strong> FDA, notified bodies, data protection authorities as required by law</li>
              <li><strong>Legal Compliance:</strong> When required by law, court order, or to protect our rights</li>
            </ul>
            <p>All third-party service providers are contractually obligated to maintain the
            confidentiality and security of your information and to use it only for the purposes
            for which it was disclosed.</p>
          </div>

          <div id="retention" class="legal-section">
            <h2 class="headline-medium">5. Data Retention</h2>
            <p>We retain personal information for as long as necessary to fulfill the purposes for
            which it was collected, including:</p>
            <ul>
              <li><strong>Account Data:</strong> Duration of the account plus 30 days after deletion request</li>
              <li><strong>Clinical Data:</strong> As required by applicable medical record retention laws</li>
              <li><strong>Employment Applications:</strong> 24 months from submission</li>
              <li><strong>Audit Logs:</strong> Minimum 7 years per regulatory requirements</li>
              <li><strong>Anonymized Analytics:</strong> Retained indefinitely in aggregate form</li>
            </ul>
          </div>

          <div id="security" class="legal-section">
            <h2 class="headline-medium">6. Data Security</h2>
            <p>We implement industry-leading security measures to protect your data:</p>
            <ul>
              <li>ISO 27001 certified Information Security Management System</li>
              <li>ISO 13485 certified Quality Management System</li>
              <li>SOC 2 Type II compliance</li>
              <li>AES-256 encryption at rest, TLS 1.3 in transit</li>
              <li>Role-based access control (RBAC) with multi-factor authentication</li>
              <li>Continuous vulnerability scanning and annual penetration testing</li>
              <li>Immutable, tamper-evident audit logging</li>
            </ul>
          </div>

          <div id="rights" class="legal-section">
            <h2 class="headline-medium">7. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have the following rights:</p>
            <div class="rights-grid">
              <div class="right-item">
                <span class="material-symbols-outlined">visibility</span>
                <div>
                  <strong>Right of Access</strong>
                  <p>Request a copy of the personal data we hold about you</p>
                </div>
              </div>
              <div class="right-item">
                <span class="material-symbols-outlined">edit</span>
                <div>
                  <strong>Right to Rectification</strong>
                  <p>Request correction of inaccurate or incomplete data</p>
                </div>
              </div>
              <div class="right-item">
                <span class="material-symbols-outlined">delete</span>
                <div>
                  <strong>Right to Erasure</strong>
                  <p>Request deletion of your personal data (subject to legal obligations)</p>
                </div>
              </div>
              <div class="right-item">
                <span class="material-symbols-outlined">download</span>
                <div>
                  <strong>Right to Portability</strong>
                  <p>Receive your data in a structured, machine-readable format</p>
                </div>
              </div>
              <div class="right-item">
                <span class="material-symbols-outlined">block</span>
                <div>
                  <strong>Right to Object</strong>
                  <p>Object to processing based on legitimate interests or direct marketing</p>
                </div>
              </div>
              <div class="right-item">
                <span class="material-symbols-outlined">pause_circle</span>
                <div>
                  <strong>Right to Restriction</strong>
                  <p>Request limitation of processing in certain circumstances</p>
                </div>
              </div>
            </div>
            <p>To exercise your rights, contact our Data Protection Officer at
            <strong>privacy&#64;skolyn.se</strong>. We will respond within 30 days.</p>
          </div>

          <div id="cookies" class="legal-section">
            <h2 class="headline-medium">8. Cookies and Tracking</h2>
            <p>We use essential cookies required for site functionality. We do not use
            third-party advertising trackers. Analytics cookies are used only with your
            consent and collect anonymized, aggregate data. You can manage cookie preferences
            through your browser settings.</p>
          </div>

          <div id="children" class="legal-section">
            <h2 class="headline-medium">9. Children's Privacy</h2>
            <p>Our services are not directed to individuals under the age of 18. We do not
            knowingly collect personal information from children. If we become aware that we
            have inadvertently collected data from a child, we will delete it promptly.</p>
          </div>

          <div id="international" class="legal-section">
            <h2 class="headline-medium">10. International Data Transfers</h2>
            <p>Skolyn operates globally. Data may be transferred to and processed in countries
            outside your jurisdiction, including Sweden and Azerbaijan. We ensure
            appropriate safeguards through:</p>
            <ul>
              <li>EU Standard Contractual Clauses (SCCs)</li>
              <li>Adequacy decisions by the European Commission</li>
              <li>Binding Corporate Rules where applicable</li>
            </ul>
          </div>

          <div id="changes" class="legal-section">
            <h2 class="headline-medium">11. Changes to This Policy</h2>
            <p>We may update this Privacy Policy periodically. Material changes will be
            communicated through our website, email notification, or in-platform alert.
            The "Last Updated" date at the top of this page indicates the most recent revision.</p>
          </div>

          <div id="contact" class="legal-section">
            <h2 class="headline-medium">12. Contact Us</h2>
            <p>If you have questions about this Privacy Policy or our data practices:</p>
            <div class="contact-info">
              <p><strong>Data Protection Officer</strong></p>
              <p>Skolyn</p>
              <p>79 Zaur Nudiraliyev Street, Narimanov District</p>
              <p>Baku, AZ1078, Azerbaijan</p>
              <p>Email: privacy&#64;skolyn.se</p>
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

    .rights-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin: 20px 0; }
    .right-item {
      display: flex; gap: 12px; padding: 16px; border-radius: var(--md-sys-shape-corner-medium);
      background: var(--md-sys-color-surface-container-low);
    }
    .right-item .material-symbols-outlined { color: var(--md-sys-color-primary); font-size: 28px; flex-shrink: 0; }
    .right-item strong { display: block; margin-bottom: 4px; }
    .right-item p { font-size: 14px; margin: 0; }

    .contact-info {
      padding: 20px; background: var(--md-sys-color-surface-container-low);
      border-radius: var(--md-sys-shape-corner-medium);
    }
    .contact-info p { margin-bottom: 4px; }

    @media (max-width: 1024px) { .legal-content { grid-template-columns: 1fr; } .legal-nav { position: static; } }
    @media (max-width: 640px) { .rights-grid { grid-template-columns: 1fr; } }
  `],
})
export class PrivacyComponent {}
