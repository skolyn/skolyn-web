import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-research',
  imports: [RouterLink],
  template: `
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <div class="hero-label">
          <span class="material-symbols-outlined sz-20">science</span>
          SIERRA
        </div>
        <h1 class="display-medium animate-in">Skolyn Institute for Engineering,<br>Research, Radiology & AI</h1>
        <p class="body-large text-secondary hero-desc animate-in animate-in-delay-1">
          SIERRA is Skolyn's dedicated research institute advancing the frontier of
          explainable artificial intelligence in medical imaging. Established February 2026,
          the institute operates across six specialized departments spanning fundamental
          AI research, clinical validation, and production-grade inference engineering.
        </p>
        <div class="hero-chips animate-in animate-in-delay-2">
          <span class="md-chip chip-outlined"><span class="material-symbols-outlined sz-16">calendar_today</span> Est. February 2026</span>
          <span class="md-chip chip-outlined"><span class="material-symbols-outlined sz-16">groups</span> 42 Researchers</span>
          <span class="md-chip chip-outlined"><span class="material-symbols-outlined sz-16">science</span> 6 Departments</span>
          <span class="md-chip chip-outlined"><span class="material-symbols-outlined sz-16">mail</span> sierra.skolyn.se</span>
        </div>
      </div>
    </section>

    <!-- Overview Cards -->
    <section class="section">
      <div class="container">
        <div class="overview-grid">
          @for (card of overviewCards; track card.route) {
            <a [routerLink]="card.route" class="overview-card">
              <div class="oc-icon" [style.background]="card.color + '14'" [style.color]="card.color">
                <span class="material-symbols-outlined sz-32">{{ card.icon }}</span>
              </div>
              <div class="oc-content">
                <h3 class="title-large">{{ card.title }}</h3>
                <p class="body-medium text-secondary">{{ card.desc }}</p>
              </div>
              <span class="material-symbols-outlined oc-arrow" [style.color]="card.color">arrow_forward</span>
            </a>
          }
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section cta-section">
      <div class="container text-center">
        <h2 class="headline-large animate-in">Collaborate With SIERRA</h2>
        <p class="body-large text-secondary section-desc animate-in animate-in-delay-1">
          We are always seeking talented researchers, clinical partners, and academic
          institutions to drive the next breakthrough in medical imaging AI.
        </p>
        <div class="cta-buttons animate-in animate-in-delay-2">
          <a routerLink="/careers" class="btn-primary">View Open Positions</a>
          <a routerLink="/contact" class="btn-outline">Partner With Us</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .page-hero {
      padding: 120px 0 64px;
      background: var(--md-sys-color-surface-container-low);
      text-align: center;
    }
    .hero-label {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 6px 16px 6px 12px;
      background: rgba(26, 115, 232, 0.08);
      border-radius: var(--md-sys-shape-corner-full);
      font: var(--md-sys-typescale-label-large);
      color: var(--md-sys-color-primary);
      margin-bottom: 24px;
    }
    .hero-desc { max-width: 700px; margin: 16px auto 0; font-size: 18px; line-height: 28px; }
    .hero-chips { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; margin-top: 32px; }
    .chip-outlined {
      display: inline-flex; align-items: center; gap: 6px;
      border: 1px solid var(--md-sys-color-outline-variant);
      background: var(--md-sys-color-surface);
      padding: 6px 16px; border-radius: var(--md-sys-shape-corner-full);
      font: var(--md-sys-typescale-label-large); color: var(--md-sys-color-on-surface-variant);
    }
    .section-desc { max-width: 680px; margin: 16px auto 0; }

    /* Overview Grid */
    .overview-grid { display: flex; flex-direction: column; gap: 16px; }
    .overview-card {
      display: flex; align-items: center; gap: 24px; padding: 28px 32px;
      background: var(--md-sys-color-surface-container-low);
      border-radius: var(--md-sys-shape-corner-extra-large);
      border: 1px solid var(--md-sys-color-outline-variant);
      text-decoration: none; color: inherit; transition: all 0.3s;
    }
    .overview-card:hover { border-color: var(--md-sys-color-primary); box-shadow: var(--md-sys-elevation-2); }
    .oc-icon {
      width: 64px; height: 64px; min-width: 64px;
      border-radius: var(--md-sys-shape-corner-large);
      display: flex; align-items: center; justify-content: center;
    }
    .oc-content { flex: 1; }
    .oc-content h3 { margin-bottom: 4px; }
    .oc-arrow { transition: transform 0.3s; }
    .overview-card:hover .oc-arrow { transform: translateX(6px); }

    /* CTA */
    .cta-section { background: var(--md-sys-color-surface-container-low); }
    .cta-buttons { display: flex; gap: 16px; justify-content: center; margin-top: 24px; }
    .btn-primary {
      display: inline-flex; align-items: center; padding: 14px 32px;
      background: var(--md-sys-color-primary); color: var(--md-sys-color-on-primary);
      border-radius: var(--md-sys-shape-corner-full); font: var(--md-sys-typescale-label-large);
      text-decoration: none; transition: all 0.3s;
    }
    .btn-primary:hover { box-shadow: var(--md-sys-elevation-2); }
    .btn-outline {
      display: inline-flex; align-items: center; padding: 14px 32px;
      border: 1px solid var(--md-sys-color-outline); color: var(--md-sys-color-primary);
      border-radius: var(--md-sys-shape-corner-full); font: var(--md-sys-typescale-label-large);
      text-decoration: none; transition: all 0.3s;
    }
    .btn-outline:hover { background: var(--md-sys-color-primary-container); border-color: var(--md-sys-color-primary); }

    @media (max-width: 768px) {
      .page-hero { padding: 100px 0 48px; }
      .overview-card { flex-direction: column; text-align: center; }
      .oc-arrow { display: none; }
      .cta-buttons { flex-direction: column; align-items: center; }
    }
  `],
})
export class ResearchComponent {
  overviewCards = [
    { title: 'Research Departments', desc: '6 specialized departments: XAI, Multi-Modal Vision, Clinical Validation, Federated Learning, AI Fairness, and Inference Engineering.', icon: 'hub', color: '#1a73e8', route: '/research/departments' },
    { title: 'Research Team', desc: '42 researchers including institute leadership, department heads, senior researchers, and research engineers.', icon: 'groups', color: '#34a853', route: '/research/team' },
    { title: 'Publications', desc: '90+ peer-reviewed papers across Nature Medicine, Radiology, MICCAI, CVPR, and FAccT.', icon: 'menu_book', color: '#ea4335', route: '/research/publications' },
    { title: 'Programs', desc: 'Research residency, clinical fellowship, collaboration grants, and open source contributions.', icon: 'school', color: '#9c27b0', route: '/research/programs' },
    { title: 'Impact', desc: 'Clinical milestones, regulatory clearances, and the research-to-product pipeline.', icon: 'trending_up', color: '#00897b', route: '/research/impact' },
  ];
}
