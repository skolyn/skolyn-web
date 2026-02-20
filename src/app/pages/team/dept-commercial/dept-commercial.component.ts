import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dept-commercial',
  imports: [RouterLink],
  template: `
    <section class="module-hero dept-bg">
      <div class="container">
        <a routerLink="/team" class="back-link"><span class="material-symbols-outlined sz-20">arrow_back</span> All Teams</a>
        <div class="hero-text animate-in">
          <div class="element-badge">
            <span class="el-sym material-symbols-outlined sz-40">storefront</span>
            <span class="el-nm">Commercial</span>
          </div>
          <h1 class="display-medium">Commercial &amp; Growth</h1>
          <p class="title-large module-tagline">Sales, Marketing, Partnerships &amp; Market Expansion</p>
          <p class="body-large hero-desc">
            Driving Skolyn's commercial success through strategic sales, digital marketing,
            hospital network partnerships, conference presence, and market expansion across
            healthcare systems in Europe, the Middle East, and the Asia-Pacific region.
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center">Commercial Disciplines</h2>
        <p class="body-large text-secondary text-center section-desc">Seven revenue-driving tracks from brand awareness to enterprise deployment.</p>
        <div class="subtypes-grid">
          @for (area of disciplines; track area.name) {
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
        <h2 class="headline-large text-center">Sales Pipeline</h2>
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
        <h2 class="headline-large text-center">Market Strategy</h2>
        <div class="caps-grid">
          @for (cap of strategy; track cap.title) {
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
    .dept-bg { background: linear-gradient(135deg, #e3f2fd, #f3e5f5, #f8f9fa); }
    .back-link { display: inline-flex; align-items: center; gap: 4px; font: var(--md-sys-typescale-label-large); color: var(--md-sys-color-on-surface-variant); text-decoration: none; margin-bottom: 32px; }
    .back-link:hover { color: var(--md-sys-color-primary); }
    .element-badge { display: inline-flex; flex-direction: column; align-items: center; padding: 12px 16px; border: 2px solid #7b1fa2; border-radius: var(--md-sys-shape-corner-medium); margin-bottom: 24px; background: rgba(255,255,255,0.7); }
    .el-sym { color: #7b1fa2; }
    .el-nm { font: var(--md-sys-typescale-label-medium); color: var(--md-sys-color-on-surface-variant); }
    .module-tagline { color: #7b1fa2; margin-bottom: 16px; }
    .hero-desc { max-width: 560px; color: var(--md-sys-color-on-surface-variant); }
    .section-desc { max-width: 640px; margin: 16px auto 0; }
    .alt-section { background: var(--md-sys-color-surface-container-low); }
    .subtypes-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 48px; }
    .subtype-card { padding: 24px; border-radius: var(--md-sys-shape-corner-large); border: 1px solid var(--md-sys-color-outline-variant); text-align: center; transition: all 0.3s; }
    .subtype-card:hover { box-shadow: var(--md-sys-elevation-1); border-color: #7b1fa2; }
    .subtype-card .material-symbols-outlined { color: #7b1fa2; margin-bottom: 12px; }
    .subtype-card h4 { margin-bottom: 6px; }
    .pipeline-cards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 48px; }
    .pipe-card { padding: 28px; border-radius: var(--md-sys-shape-corner-extra-large); background: var(--md-sys-color-surface); border: 1px solid var(--md-sys-color-outline-variant); }
    .pipe-num { width: 36px; height: 36px; border-radius: 50%; background: #7b1fa2; color: white; display: flex; align-items: center; justify-content: center; font: var(--md-sys-typescale-label-large); margin-bottom: 16px; }
    .pipe-card h4 { margin-bottom: 8px; }
    .staff-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); gap: 16px; margin-top: 48px; }
    .staff-card { display: flex; align-items: center; gap: 16px; padding: 20px 24px; background: var(--md-sys-color-surface-container-low); border-radius: var(--md-sys-shape-corner-large); border: 1px solid var(--md-sys-color-outline-variant); transition: all 0.2s; }
    .staff-card:hover { border-color: #7b1fa2; box-shadow: var(--md-sys-elevation-2); }
    .staff-avatar { width: 52px; height: 52px; min-width: 52px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; }
    .staff-info { display: flex; flex-direction: column; gap: 3px; }
    .c-email { display: inline-flex; align-items: center; gap: 4px; font: var(--md-sys-typescale-body-small); color: var(--md-sys-color-on-surface-variant); text-decoration: none; transition: color 0.2s; }
    .c-email:hover { color: var(--md-sys-color-primary); }
    .caps-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 48px; }
    .cap-item { display: flex; gap: 12px; padding: 20px; border-radius: var(--md-sys-shape-corner-large); border: 1px solid var(--md-sys-color-outline-variant); }
    .cap-item .material-symbols-outlined { color: #7b1fa2; flex-shrink: 0; }
    .cap-item h4 { margin-bottom: 4px; }
    @media (max-width: 1024px) { .subtypes-grid, .pipeline-cards { grid-template-columns: repeat(2, 1fr); } .caps-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 640px) { .module-hero { padding: 100px 0 48px; } .subtypes-grid, .pipeline-cards, .caps-grid { grid-template-columns: 1fr; } .staff-grid { grid-template-columns: 1fr; } }
  `],
})
export class DeptCommercialComponent {
  deptColor = '#7b1fa2';

  disciplines = [
    { name: 'Enterprise Sales', icon: 'business_center', desc: 'Hospital network deals, radiology group contracts, and procurement navigation' },
    { name: 'Digital Marketing', icon: 'campaign', desc: 'SEO, content marketing, webinars, and medical conference presence' },
    { name: 'Channel Partnerships', icon: 'handshake', desc: 'Distributor networks, PACS vendor integrations, and reseller programs' },
    { name: 'Customer Success', icon: 'support_agent', desc: 'Onboarding, training, clinical workflow optimization, and account management' },
    { name: 'Market Intelligence', icon: 'insights', desc: 'Competitive analysis, market sizing, and pricing strategy research' },
    { name: 'Events & Conferences', icon: 'event', desc: 'RSNA, ECR, SIIM booth presence, workshops, and speaking engagements' },
    { name: 'Brand & Communications', icon: 'newspaper', desc: 'Press releases, case studies, white papers, and social media strategy' },
  ];

  pipeline = [
    { title: 'Lead Generation', desc: 'Inbound marketing, conference leads, referral programs, and targeted outreach' },
    { title: 'Qualification', desc: 'Needs assessment, clinical fit analysis, technical compatibility review' },
    { title: 'Pilot Program', desc: '60-90 day clinical pilot with dedicated success manager and outcome tracking' },
    { title: 'Enterprise Contract', desc: 'Multi-year licensing, SLA negotiation, deployment planning, and onboarding' },
  ];

  staff = [
    { name: 'Vugar Aliyev', role: 'VP of Commercial', email: 'vugar.aliyev@skolyn.se' },
    { name: 'Aytac Mammadova', role: 'Enterprise Sales Director', email: 'aytac.mammadova@skolyn.se' },
    { name: 'Togrul Hasanov', role: 'Senior Account Executive', email: 'togrul.hasanov@skolyn.se' },
    { name: 'Sevinj Rustamova', role: 'Marketing Manager', email: 'sevinj.rustamova@skolyn.se' },
    { name: 'Fariz Guliyev', role: 'Content & Communications Lead', email: 'fariz.guliyev@skolyn.se' },
    { name: 'Lamiya Babayeva', role: 'Customer Success Manager', email: 'lamiya.babayeva@skolyn.se' },
    { name: 'Nihad Alasgarov', role: 'Channel Partnerships Manager', email: 'nihad.alasgarov@skolyn.se' },
    { name: 'Aytan Jafarova', role: 'Sales Development Rep', email: 'aytan.jafarova@skolyn.se' },
    { name: 'Elshad Huseynov', role: 'Market Intelligence Analyst', email: 'elshad.huseynov@skolyn.se' },
  ];

  strategy = [
    { icon: 'public', title: 'Geographic Expansion', desc: 'Priority markets: Nordics, DACH, Benelux, GCC, and APAC' },
    { icon: 'local_hospital', title: 'Hospital Networks', desc: 'Target enterprise deals with 500+ bed academic medical centers' },
    { icon: 'integration_instructions', title: 'PACS Integration', desc: 'Pre-built connectors for Sectra, Philips, GE, and Fujifilm PACS systems' },
    { icon: 'school', title: 'Academic Partnerships', desc: 'Collaborative research agreements with teaching hospitals for evidence generation' },
    { icon: 'trending_up', title: 'Land & Expand', desc: 'Single-module pilot to multi-module enterprise adoption pathway' },
    { icon: 'payments', title: 'Flexible Pricing', desc: 'Per-study, per-seat, and enterprise-wide licensing models' },
  ];
}
