import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dept-legal',
  imports: [RouterLink],
  template: `
    <section class="module-hero dept-bg">
      <div class="container">
        <a routerLink="/team" class="back-link"><span class="material-symbols-outlined sz-20">arrow_back</span> All Teams</a>
        <div class="hero-text animate-in">
          <div class="element-badge">
            <span class="el-sym material-symbols-outlined sz-40">gavel</span>
            <span class="el-nm">Legal</span>
          </div>
          <h1 class="display-medium">Legal &amp; Compliance</h1>
          <p class="title-large module-tagline">IP Protection, Data Privacy, Corporate Governance &amp; Contracts</p>
          <p class="body-large hero-desc">
            Protecting Skolyn's intellectual property, ensuring regulatory compliance,
            managing corporate governance, and navigating the complex legal landscape
            of medical AI across multiple jurisdictions including HIPAA, GDPR, and
            international data protection frameworks.
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center">Legal Practice Areas</h2>
        <p class="body-large text-secondary text-center section-desc">Eight legal specializations spanning the full scope of medical AI company operations.</p>
        <div class="subtypes-grid">
          @for (area of practiceAreas; track area.name) {
            <div class="subtype-card animate-in">
              <span class="material-symbols-outlined sz-40">{{ area.icon }}</span>
              <h4 class="title-medium">{{ area.name }}</h4>
              <p class="body-small text-secondary">{{ area.desc }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section alt-section">
      <div class="container">
        <h2 class="headline-large text-center">Contract Lifecycle</h2>
        <div class="pipeline-cards">
          @for (step of lifecycle; track step.title; let i = $index) {
            <div class="pipe-card animate-in">
              <div class="pipe-num">{{ i + 1 }}</div>
              <h4 class="title-medium">{{ step.title }}</h4>
              <p class="body-small text-secondary">{{ step.desc }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center">Department Staff</h2>
        <div class="staff-grid">
          @for (p of staff; track p.name) {
            <div class="staff-card">
              <div class="staff-avatar" [style.background]="deptColor"><span class="material-symbols-outlined sz-28">person</span></div>
              <div class="staff-info">
                <span class="title-medium">{{ p.name }}</span>
                <span class="body-small" [style.color]="deptColor">{{ p.role }}</span>
                <a class="c-email" [href]="'mailto:' + p.email"><span class="material-symbols-outlined sz-14">mail</span> {{ p.email }}</a>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section alt-section">
      <div class="container">
        <h2 class="headline-large text-center">Compliance Framework</h2>
        <div class="caps-grid">
          @for (cap of compliance; track cap.title) {
            <div class="cap-item">
              <span class="material-symbols-outlined">{{ cap.icon }}</span>
              <div>
                <h4 class="title-small">{{ cap.title }}</h4>
                <p class="body-small text-secondary">{{ cap.desc }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .module-hero { padding: 120px 0 64px; }
    .dept-bg { background: linear-gradient(135deg, #e8f5e9, #e8eaf6, #f8f9fa); }
    .back-link { display: inline-flex; align-items: center; gap: 4px; font: var(--md-sys-typescale-label-large); color: var(--md-sys-color-on-surface-variant); text-decoration: none; margin-bottom: 32px; }
    .back-link:hover { color: var(--md-sys-color-primary); }
    .element-badge { display: inline-flex; flex-direction: column; align-items: center; padding: 12px 16px; border: 2px solid #0d652d; border-radius: var(--md-sys-shape-corner-medium); margin-bottom: 24px; background: rgba(255,255,255,0.7); }
    .el-sym { color: #0d652d; }
    .el-nm { font: var(--md-sys-typescale-label-medium); color: var(--md-sys-color-on-surface-variant); }
    .module-tagline { color: #0d652d; margin-bottom: 16px; }
    .hero-desc { max-width: 560px; color: var(--md-sys-color-on-surface-variant); }
    .section-desc { max-width: 640px; margin: 16px auto 0; }
    .alt-section { background: var(--md-sys-color-surface-container-low); }
    .subtypes-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 48px; }
    .subtype-card { padding: 24px; border-radius: var(--md-sys-shape-corner-large); border: 1px solid var(--md-sys-color-outline-variant); text-align: center; transition: all 0.3s; }
    .subtype-card:hover { box-shadow: var(--md-sys-elevation-1); border-color: #0d652d; }
    .subtype-card .material-symbols-outlined { color: #0d652d; margin-bottom: 12px; }
    .subtype-card h4 { margin-bottom: 6px; }
    .pipeline-cards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 48px; }
    .pipe-card { padding: 28px; border-radius: var(--md-sys-shape-corner-extra-large); background: var(--md-sys-color-surface); border: 1px solid var(--md-sys-color-outline-variant); }
    .pipe-num { width: 36px; height: 36px; border-radius: 50%; background: #0d652d; color: white; display: flex; align-items: center; justify-content: center; font: var(--md-sys-typescale-label-large); margin-bottom: 16px; }
    .pipe-card h4 { margin-bottom: 8px; }
    .staff-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); gap: 16px; margin-top: 48px; }
    .staff-card { display: flex; align-items: center; gap: 16px; padding: 20px 24px; background: var(--md-sys-color-surface-container-low); border-radius: var(--md-sys-shape-corner-large); border: 1px solid var(--md-sys-color-outline-variant); transition: all 0.2s; }
    .staff-card:hover { border-color: #0d652d; box-shadow: var(--md-sys-elevation-2); }
    .staff-avatar { width: 52px; height: 52px; min-width: 52px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; }
    .staff-info { display: flex; flex-direction: column; gap: 3px; }
    .c-email { display: inline-flex; align-items: center; gap: 4px; font: var(--md-sys-typescale-body-small); color: var(--md-sys-color-on-surface-variant); text-decoration: none; transition: color 0.2s; }
    .c-email:hover { color: var(--md-sys-color-primary); }
    .caps-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 48px; }
    .cap-item { display: flex; gap: 12px; padding: 20px; border-radius: var(--md-sys-shape-corner-large); border: 1px solid var(--md-sys-color-outline-variant); }
    .cap-item .material-symbols-outlined { color: #0d652d; flex-shrink: 0; }
    .cap-item h4 { margin-bottom: 4px; }
    @media (max-width: 1024px) { .subtypes-grid, .pipeline-cards { grid-template-columns: repeat(2, 1fr); } .caps-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 640px) { .module-hero { padding: 100px 0 48px; } .subtypes-grid, .pipeline-cards, .caps-grid { grid-template-columns: 1fr; } .staff-grid { grid-template-columns: 1fr; } }
  `],
})
export class DeptLegalComponent {
  deptColor = '#0d652d';

  practiceAreas = [
    { name: 'Intellectual Property', icon: 'lightbulb', desc: 'Patent strategy, trade secret protection, trademark registration, and IP portfolio management' },
    { name: 'Data Privacy (GDPR)', icon: 'shield', desc: 'EU GDPR compliance, data processing agreements, DPIAs, and Data Protection Officer support' },
    { name: 'HIPAA Compliance', icon: 'health_and_safety', desc: 'Protected health information safeguards, BAAs, and security rule implementation' },
    { name: 'Corporate Governance', icon: 'corporate_fare', desc: 'Board resolutions, shareholder agreements, corporate structure, and statutory filings' },
    { name: 'Commercial Contracts', icon: 'description', desc: 'SaaS agreements, licensing, SLAs, NDAs, and vendor procurement contracts' },
    { name: 'Employment Law', icon: 'work', desc: 'Employment contracts, stock options, labor law compliance across multiple jurisdictions' },
    { name: 'Medical Device Law', icon: 'local_hospital', desc: 'SaMD classification, MDR compliance advice, and medical device liability management' },
    { name: 'AI Ethics & Regulation', icon: 'balance', desc: 'EU AI Act compliance, algorithmic transparency obligations, and AI liability frameworks' },
  ];

  lifecycle = [
    { title: 'Initiation', desc: 'Legal intake, risk classification, and template selection from contract playbook' },
    { title: 'Drafting', desc: 'Custom clause development, IP assignment, indemnification, and liability provisions' },
    { title: 'Negotiation', desc: 'Redline management, counterparty discussions, and fallback position escalation' },
    { title: 'Execution', desc: 'Digital signing, repository archival, milestone tracking, and renewal management' },
  ];

  staff = [
    { name: 'Eldar Huseynov', role: 'General Counsel', email: 'eldar.huseynov@skolyn.se' },
    { name: 'Matanat Aliyeva', role: 'Senior IP Attorney', email: 'matanat.aliyeva@skolyn.se' },
    { name: 'Farid Mammadov', role: 'Privacy & Data Protection Counsel', email: 'farid.mammadov@skolyn.se' },
    { name: 'Aygul Rzayeva', role: 'Commercial Contracts Manager', email: 'aygul.rzayeva@skolyn.se' },
    { name: 'Rashad Hasanov', role: 'Corporate Governance Specialist', email: 'rashad.hasanov@skolyn.se' },
    { name: 'Sevil Jafarova', role: 'Employment Law Advisor', email: 'sevil.jafarova@skolyn.se' },
    { name: 'Jeyhun Guliyev', role: 'Medical Device Legal Specialist', email: 'jeyhun.guliyev@skolyn.se' },
    { name: 'Konul Babayeva', role: 'Legal Operations Coordinator', email: 'konul.babayeva@skolyn.se' },
  ];

  compliance = [
    { icon: 'shield', title: 'GDPR Program', desc: 'Article 30 records, ROPA, cookie consent, DSAR handling, and breach notification' },
    { icon: 'health_and_safety', title: 'HIPAA Program', desc: 'Security risk assessments, access controls, audit logs, and incident response' },
    { icon: 'gavel', title: 'EU AI Act', desc: 'High-risk AI system documentation, conformity assessment, and transparency obligations' },
    { icon: 'fact_check', title: 'Contract Repository', desc: 'CLM platform with automated renewal alerts, redline tracking, and compliance tagging' },
    { icon: 'lightbulb', title: 'IP Portfolio', desc: '14 pending patents, 8 registered trademarks, trade secret inventory management' },
    { icon: 'school', title: 'Legal Training', desc: 'Quarterly compliance training for all employees on data protection and IP awareness' },
  ];
}
