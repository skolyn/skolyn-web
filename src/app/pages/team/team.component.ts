import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-team',
  imports: [RouterLink],
  template: `
    <section class="page-hero">
      <div class="container">
        <div class="hero-badge"><span class="material-symbols-outlined">groups</span> Our Team</div>
        <h1 class="display-medium animate-in">The People Behind Skolyn</h1>
        <p class="hero-subtitle body-large animate-in animate-in-delay-1">
          A multidisciplinary team of AI researchers, software engineers, radiologists, regulatory
          specialists, and clinical scientists united by a shared mission.
        </p>
      </div>
    </section>

    <!-- Leadership Card -->
    <section class="section">
      <div class="container">
        <a routerLink="/team/leadership" class="overview-card leadership-card">
          <div class="oc-icon"><span class="material-symbols-outlined sz-40">star</span></div>
          <div class="oc-info">
            <h2 class="headline-medium">Executive Leadership</h2>
            <p class="body-large text-secondary">The founding team driving Skolyn's vision, strategy, and execution. 8 C-suite leaders.</p>
          </div>
          <span class="material-symbols-outlined oc-arrow">arrow_forward</span>
        </a>
      </div>
    </section>

    <!-- Department Grid -->
    <section class="section dept-section">
      <div class="container">
        <div class="section-header text-center">
          <h2 class="display-small">Departments</h2>
          <p class="body-large text-secondary section-desc">
            Eight specialized departments, each with a dedicated team driving Skolyn forward.
          </p>
        </div>
        <div class="dept-grid">
          @for (dept of departments; track dept.id) {
            <a [routerLink]="'/team/' + dept.id" class="dept-card">
              <div class="dept-card-header" [style.border-left-color]="dept.color">
                <div class="dept-icon" [style.background]="dept.color + '14'" [style.color]="dept.color">
                  <span class="material-symbols-outlined">{{ dept.icon }}</span>
                </div>
                <div>
                  <h3 class="title-large">{{ dept.name }}</h3>
                  <span class="body-small" [style.color]="dept.color">{{ dept.count }} members</span>
                </div>
              </div>
              <p class="body-medium text-secondary">{{ dept.desc }}</p>
              <span class="dept-link" [style.color]="dept.color">
                View department <span class="material-symbols-outlined sz-16">arrow_forward</span>
              </span>
            </a>
          }
        </div>
      </div>
    </section>

    <!-- SIERRA Banner -->
    <section class="section">
      <div class="container">
        <div class="sierra-banner">
          <div class="sierra-banner-content">
            <span class="material-symbols-outlined sz-40 text-primary">science</span>
            <div>
              <h3 class="headline-small">SIERRA Research Institute</h3>
              <p class="body-large text-secondary">
                SIERRA (Skolyn Institute for Engineering, Research, Radiology & AI) operates
                as our dedicated research arm with 6 specialized research departments and 42 research staff.
              </p>
              <a routerLink="/research" class="sierra-link">
                Explore SIERRA <span class="material-symbols-outlined sz-20">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Advisory Card -->
    <section class="section">
      <div class="container">
        <a routerLink="/team/advisors" class="overview-card advisor-oc">
          <div class="oc-icon advisor-icon"><span class="material-symbols-outlined sz-40">school</span></div>
          <div class="oc-info">
            <h2 class="headline-medium">Advisory Board</h2>
            <p class="body-large text-secondary">Distinguished experts from DTU and Novo Nordisk guiding our scientific and strategic direction.</p>
          </div>
          <span class="material-symbols-outlined oc-arrow">arrow_forward</span>
        </a>
      </div>
    </section>

    <!-- Offices -->
    <section class="section">
      <div class="container">
        <div class="section-header text-center">
          <h2 class="display-small">Our Offices</h2>
        </div>
        <div class="location-grid">
          <div class="loc-card primary-office">
            <span class="material-symbols-outlined sz-40">apartment</span>
            <h3 class="title-medium">Baku, Azerbaijan</h3>
            <span class="loc-badge">Physical HQ</span>
            <p class="body-small text-secondary">Main headquarters. Home to executive leadership, operations, clinical partnerships, and core R&D.</p>
            <p class="body-small text-secondary address-text">79 Zaur Nudiraliyev Street, Narimanov District, AZ1078</p>
          </div>
          <div class="loc-card">
            <span class="material-symbols-outlined sz-40">cloud</span>
            <h3 class="title-medium">Stockholm, Sweden</h3>
            <span class="loc-badge online-badge">Online Office</span>
            <p class="body-small text-secondary">Virtual engineering and research office. Remote development, infrastructure, and Nordic regulatory affairs.</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .page-hero { padding: 96px 0 48px; background: linear-gradient(180deg, var(--md-sys-color-primary-container) 0%, var(--md-sys-color-surface) 100%); text-align: center; }
    .hero-badge { display: inline-flex; align-items: center; gap: 8px; padding: 6px 16px; border-radius: var(--md-sys-shape-corner-full); background: var(--md-sys-color-primary); color: var(--md-sys-color-on-primary); font: var(--md-sys-typescale-label-large); margin-bottom: 24px; }
    .hero-subtitle { max-width: 720px; color: var(--md-sys-color-on-surface-variant); margin: 16px auto 0; }
    .section-header { margin-bottom: 48px; }
    .section-desc { max-width: 680px; margin: 16px auto 0; }

    /* Overview Cards */
    .overview-card {
      display: flex; align-items: center; gap: 24px; padding: 32px 40px;
      background: var(--md-sys-color-surface-container-low); border-radius: var(--md-sys-shape-corner-extra-large);
      text-decoration: none; color: inherit; border: 2px solid var(--md-sys-color-outline-variant);
      transition: all 0.3s;
    }
    .overview-card:hover { border-color: var(--md-sys-color-primary); box-shadow: var(--md-sys-elevation-3); }
    .oc-icon { width: 72px; height: 72px; min-width: 72px; border-radius: var(--md-sys-shape-corner-large); display: flex; align-items: center; justify-content: center; }
    .leadership-card .oc-icon { background: var(--md-sys-color-primary); color: var(--md-sys-color-on-primary); }
    .advisor-icon { background: var(--md-sys-color-tertiary-container); color: var(--md-sys-color-on-tertiary-container); }
    .oc-info { flex: 1; }
    .oc-info h2 { margin-bottom: 4px; }
    .oc-arrow { color: var(--md-sys-color-primary); transition: transform 0.3s; }
    .overview-card:hover .oc-arrow { transform: translateX(6px); }

    /* Department Grid */
    .dept-section { background: var(--md-sys-color-surface-container-low); }
    .dept-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
    .dept-card {
      display: flex; flex-direction: column; gap: 12px; padding: 28px;
      background: var(--md-sys-color-surface); border-radius: var(--md-sys-shape-corner-large);
      border: 1px solid var(--md-sys-color-outline-variant); text-decoration: none; color: inherit;
      transition: all 0.3s;
    }
    .dept-card:hover { border-color: var(--md-sys-color-primary); box-shadow: var(--md-sys-elevation-2); transform: translateY(-2px); }
    .dept-card-header { display: flex; align-items: center; gap: 16px; border-left: 4px solid; padding-left: 12px; }
    .dept-icon { width: 48px; height: 48px; min-width: 48px; border-radius: var(--md-sys-shape-corner-medium); display: flex; align-items: center; justify-content: center; }
    .dept-link { display: inline-flex; align-items: center; gap: 6px; font: var(--md-sys-typescale-label-large); font-weight: 600; margin-top: auto; }

    /* SIERRA Banner */
    .sierra-banner { background: linear-gradient(135deg, var(--md-sys-color-primary-container), #e8f0fe); border-radius: var(--md-sys-shape-corner-extra-large); padding: 48px; border: 1px solid var(--md-sys-color-primary); }
    .sierra-banner-content { display: flex; align-items: flex-start; gap: 24px; }
    .sierra-banner-content h3 { margin-bottom: 8px; }
    .sierra-link { display: inline-flex; align-items: center; gap: 6px; margin-top: 16px; font: var(--md-sys-typescale-label-large); color: var(--md-sys-color-primary); text-decoration: none; font-weight: 600; }
    .sierra-link:hover { text-decoration: underline; }

    /* Offices */
    .location-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; max-width: 800px; margin: 0 auto; }
    .loc-card { background: var(--md-sys-color-surface-container-low); border-radius: var(--md-sys-shape-corner-extra-large); padding: 32px 28px; text-align: center; box-shadow: var(--md-sys-elevation-1); display: flex; flex-direction: column; align-items: center; gap: 8px; }
    .loc-card .material-symbols-outlined { color: var(--md-sys-color-primary); margin-bottom: 4px; }
    .loc-badge { display: inline-block; padding: 4px 12px; border-radius: var(--md-sys-shape-corner-full); font: var(--md-sys-typescale-label-small); background: var(--md-sys-color-primary); color: var(--md-sys-color-on-primary); }
    .loc-badge.online-badge { background: var(--md-sys-color-tertiary); color: white; }
    .primary-office { border: 2px solid var(--md-sys-color-primary); }
    .address-text { font-style: italic; opacity: 0.8; }

    @media (max-width: 1024px) {
      .dept-grid { grid-template-columns: 1fr; }
      .sierra-banner-content { flex-direction: column; }
      .location-grid { grid-template-columns: 1fr; }
    }
    @media (max-width: 768px) {
      .overview-card { flex-direction: column; text-align: center; padding: 24px; }
      .oc-arrow { display: none; }
      .sierra-banner { padding: 28px; }
    }
  `],
})
export class TeamComponent {
  departments = [
    { name: 'AI Research & Development', id: 'ai-rd', icon: 'psychology', color: '#1a73e8', count: 10, desc: 'AI Engineering, MLOps, Infrastructure, and clinical-grade model deployment.' },
    { name: 'Engineering', id: 'engineering', icon: 'code', color: '#ea8600', count: 6, desc: 'Backend, frontend, infrastructure, DevOps, and platform engineering at scale.' },
    { name: 'Clinical & Radiology', id: 'clinical', icon: 'local_hospital', color: '#d93025', count: 4, desc: 'Radiologists and clinical scientists who validate models and manage clinical trials.' },
    { name: 'Regulatory & Compliance', id: 'regulatory', icon: 'shield', color: '#9c27b0', count: 3, desc: 'FDA, CE Mark pathways. ISO 13485, ISO 27001, and GDPR/HIPAA compliance.' },
    { name: 'Legal & IP', id: 'legal', icon: 'gavel', color: '#0d652d', count: 2, desc: 'IP protection, corporate governance, contracts, and international data privacy law.' },
    { name: 'Product & Design', id: 'product', icon: 'space_dashboard', color: '#5c6bc0', count: 3, desc: 'User research, clinician workflow design, and product strategy.' },
    { name: 'Commercial & Partnerships', id: 'commercial', icon: 'trending_up', color: '#b06000', count: 3, desc: 'Sales, partnerships, customer success, and health system alliances.' },
    { name: 'Finance & Operations', id: 'finance', icon: 'account_balance', color: '#00796b', count: 2, desc: 'Financial planning, investor relations, audit coordination, and fiscal compliance.' },
  ];
}
