import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-investors',
  imports: [RouterLink],
  template: `
    <section class="page-hero">
      <div class="container">
        <div class="hero-label"><span class="material-symbols-outlined sz-20">trending_up</span> Investors</div>
        <h1 class="display-medium animate-in">Invest in the Future of Medical AI</h1>
        <p class="body-large text-secondary hero-desc animate-in animate-in-delay-1">
          Skolyn is building the operating system for intelligent medical imaging - explainable, scalable, and clinically validated.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="metrics-grid">
          @for (m of metrics; track m.label) {
            <div class="metric-card">
              <span class="display-small metric-value" [style.color]="m.color">{{ m.value }}</span>
              <span class="title-small">{{ m.label }}</span>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section-tight" style="background: var(--md-sys-color-surface-variant);">
      <div class="container">
        <h2 class="headline-large text-center" style="margin-bottom: 48px;">Why Skolyn?</h2>
        <div class="reasons-grid">
          @for (r of reasons; track r.title) {
            <div class="reason-card">
              <div class="reason-icon" [style.background]="r.color">
                <span class="material-symbols-outlined sz-32">{{ r.icon }}</span>
              </div>
              <h3 class="title-large">{{ r.title }}</h3>
              <p class="body-medium text-secondary">{{ r.desc }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center" style="margin-bottom: 16px;">Market Opportunity</h2>
        <p class="body-large text-center text-secondary" style="max-width: 640px; margin: 0 auto 48px;">
          The global medical imaging AI market is projected to grow from $2.3B (2024) to $18.5B by 2032, representing a 30%+ CAGR.
        </p>
        <div class="market-grid">
          @for (item of marketData; track item.title) {
            <div class="market-card">
              <span class="material-symbols-outlined sz-32" style="color: var(--md-sys-color-primary);">{{ item.icon }}</span>
              <h4 class="title-medium">{{ item.title }}</h4>
              <p class="body-small text-secondary">{{ item.desc }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center" style="margin-bottom: 48px;">Our Roadmap</h2>
        <div class="timeline">
          @for (phase of roadmap; track phase.year) {
            <div class="timeline-item">
              <div class="timeline-dot" [style.background]="phase.color"></div>
              <div class="timeline-content">
                <span class="label-large" [style.color]="phase.color">{{ phase.year }}</span>
                <h4 class="title-medium">{{ phase.title }}</h4>
                <p class="body-small text-secondary">{{ phase.desc }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section cta-section">
      <div class="container text-center">
        <h2 class="headline-large" style="margin-bottom: 12px;">Interested in Investing?</h2>
        <p class="body-large text-secondary" style="max-width: 600px; margin: 0 auto 32px;">
          We welcome conversations with investors who share our vision of transforming medical imaging through transparent AI.
        </p>
        <a routerLink="/contact" class="md-filled-button">Request Investor Deck</a>
      </div>
    </section>
  `,
  styles: [`
    .page-hero { padding: 120px 0 64px; background: linear-gradient(180deg, var(--md-sys-color-primary-container) 0%, var(--md-sys-color-surface) 100%); text-align: center; }
    .hero-label { display: inline-flex; align-items: center; gap: 8px; padding: 6px 16px 6px 12px; background: rgba(26,115,232,0.08); border-radius: var(--md-sys-shape-corner-full); font: var(--md-sys-typescale-label-large); color: var(--md-sys-color-primary); margin-bottom: 24px; }
    .hero-desc { max-width: 680px; margin: 16px auto 0; font-size: 18px; line-height: 28px; }
    .metrics-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
    .metric-card { background: var(--md-sys-color-surface-container-low); border-radius: var(--md-sys-shape-corner-extra-large); padding: 40px 28px; text-align: center; display: flex; flex-direction: column; gap: 8px; }
    .metric-value { font-weight: 700; }
    .reasons-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
    .reason-card { background: var(--md-sys-color-surface); border-radius: var(--md-sys-shape-corner-large); padding: 32px 24px; box-shadow: var(--md-sys-elevation-1); }
    .reason-icon { width: 56px; height: 56px; border-radius: var(--md-sys-shape-corner-medium); display: flex; align-items: center; justify-content: center; color: white; margin-bottom: 16px; }
    .reason-card h3 { margin-bottom: 8px; }
    .market-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
    .market-card { background: var(--md-sys-color-surface-container-low); border-radius: var(--md-sys-shape-corner-medium); padding: 24px; text-align: center; }
    .market-card h4 { margin: 12px 0 6px; }
    .timeline { position: relative; padding-left: 40px; max-width: 700px; margin: 0 auto; }
    .timeline::before { content: ''; position: absolute; left: 12px; top: 0; bottom: 0; width: 2px; background: var(--md-sys-color-outline-variant); }
    .timeline-item { position: relative; margin-bottom: 32px; }
    .timeline-dot { position: absolute; left: -34px; top: 4px; width: 16px; height: 16px; border-radius: 50%; }
    .timeline-content h4 { margin: 4px 0; }
    .cta-section { padding: 80px 0; background: linear-gradient(135deg, var(--md-sys-color-primary-container), #e8f0fe); }
    @media (max-width: 1024px) { .metrics-grid, .market-grid { grid-template-columns: repeat(2, 1fr); } .reasons-grid { grid-template-columns: 1fr; } }
    @media (max-width: 640px) { .page-hero { padding: 100px 0 48px; } .metrics-grid { grid-template-columns: 1fr 1fr; } }
  `],
})
export class InvestorsComponent {
  metrics = [
    { value: '4', label: 'Imaging Modules', color: '#1a73e8' },
    { value: '8', label: 'C-Level Executives', color: '#1e8e3e' },
    { value: '3', label: 'Advisory Board Members', color: '#ea8600' },
    { value: '30%+', label: 'Market CAGR', color: '#9334e6' },
  ];

  reasons = [
    { title: 'Full Explainability (XAI)', icon: 'visibility', color: 'linear-gradient(135deg, #1a73e8, #4285f4)', desc: 'Every prediction includes visual heatmaps and natural-language rationale. Clinicians can verify and trust results - a critical differentiator for regulatory approval and clinical adoption.' },
    { title: 'Multi-Modal Platform', icon: 'view_module', color: 'linear-gradient(135deg, #1e8e3e, #34a853)', desc: 'Four dedicated operating modules covering MRI, CT, Ultrasound, and X-Ray. No competitor offers this breadth with modality-specific optimization and a unified clinician interface.' },
    { title: 'Regulatory-First Design', icon: 'verified', color: 'linear-gradient(135deg, #ea8600, #f59e0b)', desc: 'Architected from day one for FDA and CE Mark compliance paths. ISO 13485 and ISO 27001 certified processes with full audit trails.' },
    { title: 'Federated Learning', icon: 'share', color: 'linear-gradient(135deg, #9334e6, #a855f7)', desc: 'Train models across institutions without moving data. Solves the critical data access problem in medical AI while ensuring patient privacy and data sovereignty.' },
    { title: 'Scalable SaaS + On-Prem', icon: 'cloud', color: 'linear-gradient(135deg, #d93025, #ef4444)', desc: 'Flexible deployment - cloud, on-premise, hybrid, or edge. Revenue scales with studies processed, institutional contracts, and geographic expansion.' },
    { title: 'World-Class Advisory', icon: 'groups', color: 'linear-gradient(135deg, #00796b, #0d9488)', desc: 'Guided by professors from the Technical University of Denmark (DTU) and principal investigators from Novo Nordisk, ensuring scientific rigor and clinical relevance.' },
  ];

  marketData = [
    { title: '$18.5B by 2032', icon: 'monetization_on', desc: 'Total addressable market for medical imaging AI globally.' },
    { title: '3.6B Scans/Year', icon: 'scan', desc: 'Annual medical imaging studies performed worldwide.' },
    { title: '77% Shortage', icon: 'person_off', desc: 'Of countries report a shortage of trained radiologists.' },
    { title: '30-min Savings', icon: 'timer', desc: 'Average time saved per radiologist per shift with AI triage.' },
  ];

  roadmap = [
    { year: '2025', title: 'Foundation', desc: 'Core platform launch, Innoland incubation, advisory board formation, seed fundraising.', color: '#1a73e8' },
    { year: '2026', title: 'Clinical Validation', desc: 'Multi-site clinical trials, regulatory submissions (CE Mark, FDA), Series A fundraising.', color: '#1e8e3e' },
    { year: '2027', title: 'Market Entry', desc: 'Commercial launch in EMEA, PACS vendor partnerships, enterprise customer acquisition.', color: '#ea8600' },
    { year: '2028+', title: 'Global Scale', desc: 'US market entry, federated learning network, expansion to 50+ institutions, Series B.', color: '#9334e6' },
  ];
}
