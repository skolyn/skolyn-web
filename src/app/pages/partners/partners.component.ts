import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-partners',
  imports: [RouterLink],
  template: `
    <section class="page-hero">
      <div class="container">
        <div class="hero-label"><span class="material-symbols-outlined sz-20">handshake</span> Partners</div>
        <h1 class="display-medium animate-in">Our Partners &amp; Collaborators</h1>
        <p class="body-large text-secondary hero-desc animate-in animate-in-delay-1">
          Building the future of medical AI through strategic clinical, academic, and technology partnerships.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center" style="margin-bottom: 16px;">Academic Partners</h2>
        <p class="body-large text-center text-secondary" style="max-width: 640px; margin: 0 auto 48px;">
          World-class research institutions advancing the science behind our models.
        </p>
        <div class="partner-grid">
          @for (p of academicPartners; track p.name) {
            <div class="partner-card">
              <div class="partner-icon" [style.background]="p.color">
                <span class="material-symbols-outlined sz-40">{{ p.icon }}</span>
              </div>
              <h3 class="title-large">{{ p.name }}</h3>
              <span class="body-small partner-type">{{ p.type }}</span>
              <p class="body-medium text-secondary">{{ p.desc }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section-tight" style="background: var(--md-sys-color-surface-variant);">
      <div class="container">
        <h2 class="headline-large text-center" style="margin-bottom: 16px;">Clinical Partners</h2>
        <p class="body-large text-center text-secondary" style="max-width: 640px; margin: 0 auto 48px;">
          Healthcare system partners deploying and validating Skolyn in real clinical environments.
        </p>
        <div class="partner-grid">
          @for (p of clinicalPartners; track p.name) {
            <div class="partner-card">
              <div class="partner-icon" [style.background]="p.color">
                <span class="material-symbols-outlined sz-40">{{ p.icon }}</span>
              </div>
              <h3 class="title-large">{{ p.name }}</h3>
              <span class="body-small partner-type">{{ p.type }}</span>
              <p class="body-medium text-secondary">{{ p.desc }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center" style="margin-bottom: 16px;">Technology Partners</h2>
        <p class="body-large text-center text-secondary" style="max-width: 640px; margin: 0 auto 48px;">
          Infrastructure and platform partners powering our cloud, security, and deployment stack.
        </p>
        <div class="partner-grid">
          @for (p of techPartners; track p.name) {
            <div class="partner-card">
              <div class="partner-icon" [style.background]="p.color">
                <span class="material-symbols-outlined sz-40">{{ p.icon }}</span>
              </div>
              <h3 class="title-large">{{ p.name }}</h3>
              <span class="body-small partner-type">{{ p.type }}</span>
              <p class="body-medium text-secondary">{{ p.desc }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section cta-section">
      <div class="container text-center">
        <h2 class="headline-large" style="margin-bottom: 12px;">Become a Partner</h2>
        <p class="body-large text-secondary" style="max-width: 600px; margin: 0 auto 32px;">
          We are actively expanding our partner ecosystem. Whether you are a research institution, hospital, or technology provider, we want to hear from you.
        </p>
        <a routerLink="/contact" class="md-filled-button">Get in Touch</a>
      </div>
    </section>
  `,
  styles: [`
    .page-hero { padding: 120px 0 64px; background: var(--md-sys-color-surface-container-low); text-align: center; }
    .hero-label { display: inline-flex; align-items: center; gap: 8px; padding: 6px 16px 6px 12px; background: rgba(26,115,232,0.08); border-radius: var(--md-sys-shape-corner-full); font: var(--md-sys-typescale-label-large); color: var(--md-sys-color-primary); margin-bottom: 24px; }
    .hero-desc { max-width: 640px; margin: 16px auto 0; font-size: 18px; line-height: 28px; }
    .partner-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
    .partner-card { background: var(--md-sys-color-surface); border-radius: var(--md-sys-shape-corner-extra-large); padding: 32px; text-align: center; border: 1px solid var(--md-sys-color-outline-variant); transition: all 0.3s; }
    .partner-card:hover { border-color: var(--md-sys-color-primary); box-shadow: var(--md-sys-elevation-2); transform: translateY(-4px); }
    .partner-icon { width: 80px; height: 80px; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; color: white; }
    .partner-card h3 { margin-bottom: 4px; }
    .partner-type { color: var(--md-sys-color-primary); font-weight: 500; display: block; margin-bottom: 12px; }
    .cta-section { padding: 80px 0; background: linear-gradient(135deg, var(--md-sys-color-primary-container), #e8f0fe); }
    @media (max-width: 1024px) { .partner-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 640px) { .page-hero { padding: 100px 0 48px; } .partner-grid { grid-template-columns: 1fr; } }
  `],
})
export class PartnersComponent {
  academicPartners = [
    { name: 'Technical University of Denmark (DTU)', type: 'Research & Advisory', icon: 'school', color: 'linear-gradient(135deg, #990000, #cc0000)', desc: 'Advisory collaboration through DTU Compute and DTU Health Tech. Home to our academic advisors Prof. Feragen and Prof. Berg.' },
    { name: 'Novo Nordisk A/S', type: 'Industry Research', icon: 'biotech', color: 'linear-gradient(135deg, #004d94, #0066cc)', desc: 'Collaborative research partnership in global R&D through Principal Investigator Tomas Landh.' },
    { name: 'Innoland Incubation Center', type: 'Incubation & Acceleration', icon: 'domain', color: 'linear-gradient(135deg, #1a73e8, #4285f4)', desc: 'Azerbaijan\'s premier technology hub providing strategic mentoring, infrastructure, and deep-tech startup acceleration.' },
  ];

  clinicalPartners = [
    { name: 'Radiology Departments', type: 'Clinical Validation', icon: 'local_hospital', color: 'linear-gradient(135deg, #d93025, #ef4444)', desc: 'Multi-institutional clinical validation programs across radiology departments for prospective and retrospective model performance evaluation.' },
    { name: 'Emergency Medicine Networks', type: 'Acute Care Integration', icon: 'emergency', color: 'linear-gradient(135deg, #ea8600, #f59e0b)', desc: 'Emergency department partners for validating real-time acute pathology detection in time-critical clinical workflows.' },
    { name: 'Pathology Institutions', type: 'Ground Truth Annotation', icon: 'biotech', color: 'linear-gradient(135deg, #9334e6, #a855f7)', desc: 'Expert annotation partnerships ensuring gold-standard ground truth labels for model training and validation datasets.' },
  ];

  techPartners = [
    { name: 'Cloud Infrastructure Providers', type: 'IaaS & GPU Compute', icon: 'cloud', color: 'linear-gradient(135deg, #1a73e8, #4285f4)', desc: 'Enterprise-grade cloud infrastructure for scalable AI inference, model training, and global deployment with GPU acceleration.' },
    { name: 'PACS Vendors', type: 'Integration Partners', icon: 'hub', color: 'linear-gradient(135deg, #1e8e3e, #34a853)', desc: 'Direct integration partnerships with leading PACS vendors for seamless DICOM connectivity and radiology workflow embedding.' },
    { name: 'Cybersecurity Firms', type: 'Security Auditing', icon: 'security', color: 'linear-gradient(135deg, #00796b, #0d9488)', desc: 'Independent security audit and penetration testing partners ensuring platform integrity and compliance certification.' },
  ];
}
