import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dept-regulatory',
  imports: [RouterLink],
  template: `
    <section class="module-hero dept-bg">
      <div class="container">
        <a routerLink="/team" class="back-link"><span class="material-symbols-outlined sz-20">arrow_back</span> All Teams</a>
        <div class="hero-text animate-in">
          <div class="element-badge">
            <span class="el-sym material-symbols-outlined sz-40">verified</span>
            <span class="el-nm">Regulatory</span>
          </div>
          <h1 class="display-medium">Regulatory Affairs</h1>
          <p class="title-large module-tagline">FDA, EU MDR, MHRA &amp; Quality Management</p>
          <p class="body-large hero-desc">
            We navigate global regulatory landscapes to bring AI-powered diagnostic tools
            to market. Our team manages FDA submissions, EU MDR conformity, MHRA registration,
            quality management systems, and post-market surveillance across all imaging modules.
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center">Regulatory Pathways</h2>
        <p class="body-large text-secondary text-center section-desc">Six critical regulatory tracks enabling global market access for Skolyn's AI diagnostic platform.</p>
        <div class="subtypes-grid">
          @for (area of pathways; track area.name) {
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
        <h2 class="headline-large text-center">Submission Pipeline</h2>
        <div class="pipeline-cards">
          @for (step of pipeline; track step.title; let i = $index) {
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
        <h2 class="headline-large text-center">Quality &amp; Compliance</h2>
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
    .dept-bg { background: linear-gradient(135deg, #e8f5e9, #e0f2f1, #f8f9fa); }
    .back-link { display: inline-flex; align-items: center; gap: 4px; font: var(--md-sys-typescale-label-large); color: var(--md-sys-color-on-surface-variant); text-decoration: none; margin-bottom: 32px; }
    .back-link:hover { color: var(--md-sys-color-primary); }
    .element-badge { display: inline-flex; flex-direction: column; align-items: center; padding: 12px 16px; border: 2px solid #2e7d32; border-radius: var(--md-sys-shape-corner-medium); margin-bottom: 24px; background: rgba(255,255,255,0.7); }
    .el-sym { color: #2e7d32; }
    .el-nm { font: var(--md-sys-typescale-label-medium); color: var(--md-sys-color-on-surface-variant); }
    .module-tagline { color: #2e7d32; margin-bottom: 16px; }
    .hero-desc { max-width: 560px; color: var(--md-sys-color-on-surface-variant); }
    .section-desc { max-width: 640px; margin: 16px auto 0; }
    .alt-section { background: var(--md-sys-color-surface-container-low); }
    .subtypes-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 48px; }
    .subtype-card { padding: 24px; border-radius: var(--md-sys-shape-corner-large); border: 1px solid var(--md-sys-color-outline-variant); text-align: center; transition: all 0.3s; }
    .subtype-card:hover { box-shadow: var(--md-sys-elevation-1); border-color: #2e7d32; }
    .subtype-card .material-symbols-outlined { color: #2e7d32; margin-bottom: 12px; }
    .subtype-card h4 { margin-bottom: 6px; }
    .pipeline-cards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 48px; }
    .pipe-card { padding: 28px; border-radius: var(--md-sys-shape-corner-extra-large); background: var(--md-sys-color-surface); border: 1px solid var(--md-sys-color-outline-variant); }
    .pipe-num { width: 36px; height: 36px; border-radius: 50%; background: #2e7d32; color: white; display: flex; align-items: center; justify-content: center; font: var(--md-sys-typescale-label-large); margin-bottom: 16px; }
    .pipe-card h4 { margin-bottom: 8px; }
    .staff-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); gap: 16px; margin-top: 48px; }
    .staff-card { display: flex; align-items: center; gap: 16px; padding: 20px 24px; background: var(--md-sys-color-surface-container-low); border-radius: var(--md-sys-shape-corner-large); border: 1px solid var(--md-sys-color-outline-variant); transition: all 0.2s; }
    .staff-card:hover { border-color: #2e7d32; box-shadow: var(--md-sys-elevation-2); }
    .staff-avatar { width: 52px; height: 52px; min-width: 52px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; }
    .staff-info { display: flex; flex-direction: column; gap: 3px; }
    .c-email { display: inline-flex; align-items: center; gap: 4px; font: var(--md-sys-typescale-body-small); color: var(--md-sys-color-on-surface-variant); text-decoration: none; transition: color 0.2s; }
    .c-email:hover { color: var(--md-sys-color-primary); }
    .caps-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 48px; }
    .cap-item { display: flex; gap: 12px; padding: 20px; border-radius: var(--md-sys-shape-corner-large); border: 1px solid var(--md-sys-color-outline-variant); }
    .cap-item .material-symbols-outlined { color: #2e7d32; flex-shrink: 0; }
    .cap-item h4 { margin-bottom: 4px; }
    @media (max-width: 1024px) { .subtypes-grid, .pipeline-cards { grid-template-columns: repeat(2, 1fr); } .caps-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 640px) { .module-hero { padding: 100px 0 48px; } .subtypes-grid, .pipeline-cards, .caps-grid { grid-template-columns: 1fr; } .staff-grid { grid-template-columns: 1fr; } }
  `],
})
export class DeptRegulatoryComponent {
  deptColor = '#2e7d32';

  pathways = [
    { name: 'FDA 510(k) / De Novo', icon: 'flag', desc: 'Pre-submission, clinical evidence, and De Novo classification for AI/ML SaMD' },
    { name: 'EU MDR CE Marking', icon: 'euro', desc: 'Class IIa conformity assessment under EU MDR 2017/745 with notified body audits' },
    { name: 'MHRA UK CA Marking', icon: 'public', desc: 'Post-Brexit UK regulatory pathway for SaMD medical device registration' },
    { name: 'QMS (ISO 13485)', icon: 'security', desc: 'Quality Management System certifying design, development, and production processes' },
    { name: 'IEC 62304 Software', icon: 'code', desc: 'Software lifecycle compliance for medical device software development and maintenance' },
    { name: 'Post-Market Surveillance', icon: 'monitoring', desc: 'PMCF plans, vigilance reporting, adverse event tracking, and periodic safety updates' },
  ];

  pipeline = [
    { title: 'Gap Analysis', desc: 'Regulatory requirement mapping, risk assessment, and submission strategy definition' },
    { title: 'Documentation', desc: 'Technical file preparation: IFU, risk management, clinical evaluation report' },
    { title: 'Audit & Review', desc: 'Internal quality audits, notified body interaction, and pre-submission consultations' },
    { title: 'Market Access', desc: 'Clearance/approval achievement, country-specific registrations, and launch coordination' },
  ];

  staff = [
    { name: 'Dr. Zaur Mammadov', role: 'VP Regulatory Affairs', email: 'zaur.mammadov@skolyn.se' },
    { name: 'Kamala Hasanova', role: 'Senior Regulatory Specialist', email: 'kamala.hasanova@skolyn.se' },
    { name: 'Dr. Rauf Aliyev', role: 'Quality Manager (ISO 13485)', email: 'rauf.aliyev@skolyn.se' },
    { name: 'Gulnar Jafarova', role: 'Regulatory Submissions Lead', email: 'gulnar.jafarova@skolyn.se' },
    { name: 'Parviz Huseynov', role: 'IEC 62304 Compliance Lead', email: 'parviz.huseynov@skolyn.se' },
    { name: 'Sevda Abdullayeva', role: 'Clinical Evaluator', email: 'sevda.abdullayeva@skolyn.se' },
    { name: 'Orkhan Mammadov', role: 'Risk Management Specialist', email: 'orkhan.mammadov.ra@skolyn.se' },
    { name: 'Narmina Guliyeva', role: 'Post-Market Surveillance Analyst', email: 'narmina.guliyeva@skolyn.se' },
  ];

  compliance = [
    { icon: 'fact_check', title: 'ISO 14971 Risk Management', desc: 'Comprehensive hazard analysis, risk estimation, and residual risk evaluation' },
    { icon: 'description', title: 'Technical Documentation', desc: 'Annex II/III-compliant technical files for EU MDR conformity assessment' },
    { icon: 'science', title: 'Clinical Evaluation', desc: 'Literature reviews, equivalence analysis, and PMCF planning per MEDDEV 2.7/1' },
    { icon: 'security', title: 'Cybersecurity', desc: 'Pre-market and post-market cybersecurity documentation per FDA guidance' },
    { icon: 'update', title: 'Change Management', desc: 'Formal change control process for software modifications per IEC 62304' },
    { icon: 'diversity_3', title: 'Notified Body Relations', desc: 'Ongoing audits, design dossier reviews, and certificate maintenance' },
  ];
}
