import { Component } from '@angular/core';

@Component({
  selector: 'app-security',
  imports: [],
  template: `
    <section class="page-hero">
      <div class="container">
        <div class="hero-label">
          <span class="material-symbols-outlined sz-20">shield</span>
          Security & Compliance
        </div>
        <h1 class="display-medium animate-in">Patient Data Protection<br>& Regulatory Compliance</h1>
        <p class="body-large text-secondary hero-desc animate-in animate-in-delay-1">
          End-to-end data protection with medical-grade encryption,
          privacy-preserving AI, and multi-jurisdiction regulatory compliance.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center">Regulatory Compliance</h2>
        <p class="body-large text-secondary text-center section-desc">
          Skolyn is designed to comply with the most rigorous healthcare and data protection standards worldwide.
        </p>
        <div class="compliance-grid">
          @for (item of complianceItems; track item.name) {
            <div class="compliance-card animate-in">
              <span class="material-symbols-outlined sz-48">{{ item.icon }}</span>
              <h3 class="title-large">{{ item.name }}</h3>
              <p class="body-medium text-secondary">{{ item.description }}</p>
              <span class="md-chip-filled compliance-chip">{{ item.status }}</span>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section encrypt-section">
      <div class="container">
        <h2 class="headline-large text-center">Data Protection Architecture</h2>
        <div class="protect-grid">
          @for (item of protectionItems; track item.title) {
            <div class="protect-card animate-in">
              <span class="material-symbols-outlined sz-40">{{ item.icon }}</span>
              <h4 class="title-medium">{{ item.title }}</h4>
              <p class="body-medium text-secondary">{{ item.description }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center">Access Control & Audit</h2>
        <div class="access-grid">
          <div class="access-card animate-in">
            <span class="material-symbols-outlined sz-40">admin_panel_settings</span>
            <h4 class="title-medium">Role-Based Access Control (RBAC)</h4>
            <p class="body-medium text-secondary">
              Granular role definitions including Radiologist, Referring Physician,
              Technologist, Administrator, and Auditor with principle of least privilege.
            </p>
          </div>
          <div class="access-card animate-in animate-in-delay-1">
            <span class="material-symbols-outlined sz-40">key</span>
            <h4 class="title-medium">Multi-Factor Authentication</h4>
            <p class="body-medium text-secondary">
              SSO integration via SAML 2.0 and OIDC, with MFA enforcement
              and session management including automatic lockout.
            </p>
          </div>
          <div class="access-card animate-in animate-in-delay-2">
            <span class="material-symbols-outlined sz-40">history</span>
            <h4 class="title-medium">Immutable Audit Logging</h4>
            <p class="body-medium text-secondary">
              Tamper-proof audit logs covering every data access, model inference,
              and administrative action with ISO 8601 timestamps.
            </p>
          </div>
          <div class="access-card animate-in animate-in-delay-3">
            <span class="material-symbols-outlined sz-40">health_and_safety</span>
            <h4 class="title-medium">Incident Response</h4>
            <p class="body-medium text-secondary">
              Documented breach notification procedures within 72 hours per GDPR,
              with forensic analysis and automated containment.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section privacy-section">
      <div class="container">
        <h2 class="headline-large text-center">Privacy-Preserving AI</h2>
        <div class="privacy-grid">
          <div class="privacy-card animate-in">
            <span class="material-symbols-outlined sz-48">security</span>
            <h4 class="title-large">Federated Learning</h4>
            <p class="body-medium text-secondary">
              Model training occurs at the institutional level. Only model weight updates
              are shared. Patient data never leaves the institution.
            </p>
          </div>
          <div class="privacy-card animate-in animate-in-delay-1">
            <span class="material-symbols-outlined sz-48">noise_aware</span>
            <h4 class="title-large">Differential Privacy</h4>
            <p class="body-medium text-secondary">
              Mathematical guarantees that no individual patient record can be
              reverse-engineered from model outputs.
            </p>
          </div>
          <div class="privacy-card animate-in animate-in-delay-2">
            <span class="material-symbols-outlined sz-48">lock</span>
            <h4 class="title-large">Secure Enclaves</h4>
            <p class="body-medium text-secondary">
              TEE-based inference using Intel SGX and ARM TrustZone for
              sensitive computation on encrypted data.
            </p>
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
    .section-desc { max-width: 640px; margin: 16px auto 0; }

    .compliance-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 48px; }
    .compliance-card {
      padding: 32px; border-radius: var(--md-sys-shape-corner-extra-large);
      border: 1px solid var(--md-sys-color-outline-variant); background: var(--md-sys-color-surface);
      text-align: center;
      transition: all var(--md-sys-motion-duration-medium2) var(--md-sys-motion-easing-standard);
    }
    .compliance-card:hover { box-shadow: var(--md-sys-elevation-2); border-color: transparent; }
    .compliance-card .material-symbols-outlined { color: var(--md-sys-color-primary); margin-bottom: 16px; }
    .compliance-card h3 { margin-bottom: 8px; }
    .compliance-card p { margin-bottom: 16px; }
    .compliance-chip {
      display: inline-block; padding: 4px 14px; border-radius: var(--md-sys-shape-corner-full);
      background: var(--md-sys-color-tertiary-container); color: var(--md-sys-color-on-tertiary-container);
      font: var(--md-sys-typescale-label-medium);
    }

    .encrypt-section { background: var(--md-sys-color-surface-container-low); }
    .protect-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 48px; }
    .protect-card {
      padding: 28px; border-radius: var(--md-sys-shape-corner-extra-large);
      background: var(--md-sys-color-surface); border: 1px solid var(--md-sys-color-outline-variant);
    }
    .protect-card .material-symbols-outlined { color: var(--md-sys-color-primary); margin-bottom: 12px; }
    .protect-card h4 { margin-bottom: 8px; }

    .access-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; margin-top: 48px; }
    .access-card {
      padding: 32px; border-radius: var(--md-sys-shape-corner-extra-large);
      border: 1px solid var(--md-sys-color-outline-variant);
    }
    .access-card .material-symbols-outlined { color: var(--md-sys-color-primary); margin-bottom: 12px; }
    .access-card h4 { margin-bottom: 8px; }

    .privacy-section { background: var(--md-sys-color-surface-container-low); }
    .privacy-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 48px; }
    .privacy-card {
      padding: 32px; border-radius: var(--md-sys-shape-corner-extra-large);
      background: var(--md-sys-color-surface); text-align: center;
      border: 1px solid var(--md-sys-color-outline-variant);
      transition: all var(--md-sys-motion-duration-medium2) var(--md-sys-motion-easing-standard);
    }
    .privacy-card:hover { box-shadow: var(--md-sys-elevation-2); border-color: transparent; }
    .privacy-card .material-symbols-outlined { color: var(--md-sys-color-primary); margin-bottom: 16px; }
    .privacy-card h4 { margin-bottom: 8px; }

    @media (max-width: 1024px) {
      .compliance-grid, .protect-grid, .privacy-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 640px) {
      .page-hero { padding: 100px 0 48px; }
      .compliance-grid, .protect-grid, .access-grid, .privacy-grid { grid-template-columns: 1fr; }
    }
  `],
})
export class SecurityComponent {
  complianceItems = [
    { name: 'HIPAA', icon: 'local_hospital', description: 'Full compliance with the Health Insurance Portability and Accountability Act including PHI safeguards.', status: 'Compliant' },
    { name: 'GDPR', icon: 'gavel', description: 'EU General Data Protection Regulation compliance with data minimization and right to erasure.', status: 'Compliant' },
    { name: 'CE Mark (EU MDR)', icon: 'verified', description: 'EU Medical Device Regulation Class IIa conformity for AI-assisted diagnostic software.', status: 'In Progress' },
    { name: 'FDA 510(k)', icon: 'approval', description: 'U.S. Food and Drug Administration clearance pathway for CADx and CADe applications.', status: 'Planned' },
    { name: 'ISO 13485', icon: 'workspace_premium', description: 'Quality Management System certification for medical device design and manufacturing.', status: 'Compliant' },
    { name: 'SOC 2 Type II', icon: 'fact_check', description: 'Trust service criteria compliance for security, availability, processing integrity, and confidentiality.', status: 'In Progress' }
  ];

  protectionItems = [
    { icon: 'enhanced_encryption', title: 'AES-256 Encryption at Rest', description: 'All patient data encrypted with AES-256-GCM using hardware-backed key management.' },
    { icon: 'vpn_lock', title: 'TLS 1.3 in Transit', description: 'All data transmission protected by TLS 1.3 with mutual authentication and certificate pinning.' },
    { icon: 'manage_accounts', title: 'De-Identification', description: 'DICOM header stripping, face de-identification for 3D volumes, k-anonymity guarantees.' },
    { icon: 'delete_forever', title: 'Data Retention Policies', description: 'Configurable retention and auto-purge policies meeting institutional and regulatory requirements.' },
    { icon: 'backup', title: 'Encrypted Backups', description: 'Point-in-time recovery with geo-redundant encrypted backups and disaster recovery procedures.' },
    { icon: 'token', title: 'Key Management', description: 'HSM-backed key management with automated rotation, separation of duties, and key escrow.' }
  ];
}
