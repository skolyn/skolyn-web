import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-team-leadership',
  imports: [RouterLink],
  template: `
    <section class="module-hero leadership-bg">
      <div class="container">
        <a routerLink="/team" class="back-link">
          <span class="material-symbols-outlined sz-20">arrow_back</span>
          All Teams
        </a>
        <div class="hero-grid">
          <div class="hero-text animate-in">
            <div class="element-badge">
              <span class="el-sym material-symbols-outlined sz-40">star</span>
              <span class="el-nm">Executive Leadership</span>
            </div>
            <h1 class="display-medium">Executive Leadership</h1>
            <p class="title-large module-tagline">Founding Team &amp; C-Suite</p>
            <p class="body-large hero-desc">
              The founding team driving Skolyn's vision, strategy, and execution across
              AI research, clinical partnerships, regulatory pathways, and global commercialization.
              Our leadership combines deep expertise in artificial intelligence, radiology,
              healthcare regulation, product development, and operational excellence.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Responsibilities -->
    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center">Leadership Responsibilities</h2>
        <p class="body-large text-secondary text-center section-desc">
          Each executive owns a critical dimension of Skolyn's mission, from AI research
          to regulatory clearance, ensuring integrated decision-making at the highest level.
        </p>
        <div class="subtypes-grid">
          @for (area of leadershipAreas; track area.name) {
            <div class="subtype-card animate-in">
              <span class="material-symbols-outlined sz-40">{{ area.icon }}</span>
              <h4 class="title-medium">{{ area.name }}</h4>
              <p class="body-small text-secondary">{{ area.desc }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Executive Team -->
    <section class="section alt-section">
      <div class="container">
        <h2 class="headline-large text-center">The Executive Team</h2>
        <div class="exec-list">
          @for (exec of executives; track exec.name) {
            <div class="exec-row" [class.featured]="exec.cofounder">
              <div class="exec-avatar" [style.background]="exec.color">
                <span class="material-symbols-outlined sz-48">person</span>
              </div>
              <div class="exec-details">
                <div class="exec-header">
                  <h3 class="title-large">{{ exec.name }}</h3>
                  @if (exec.cofounder) { <span class="cofounder-badge">Co-Founder</span> }
                </div>
                <span class="exec-role" [style.color]="exec.color">{{ exec.role }}</span>
                <a class="c-email" [href]="'mailto:' + exec.email">
                  <span class="material-symbols-outlined sz-16">mail</span> {{ exec.email }}
                </a>
                <p class="body-medium text-secondary">{{ exec.desc }}</p>
                <div class="focus-chips">
                  @for (focus of exec.focuses; track focus) {
                    <span class="md-chip">{{ focus }}</span>
                  }
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Governance -->
    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center">Governance Structure</h2>
        <div class="caps-grid">
          @for (item of governance; track item.title) {
            <div class="cap-item">
              <span class="material-symbols-outlined">{{ item.icon }}</span>
              <div>
                <h4 class="title-small">{{ item.title }}</h4>
                <p class="body-small text-secondary">{{ item.desc }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .module-hero { padding: 120px 0 64px; position: relative; }
    .leadership-bg { background: linear-gradient(135deg, #e8f0fe, #f3e8fd, #f8f9fa); }
    .back-link { display: inline-flex; align-items: center; gap: 4px; font: var(--md-sys-typescale-label-large); color: var(--md-sys-color-on-surface-variant); text-decoration: none; margin-bottom: 32px; }
    .back-link:hover { color: var(--md-sys-color-primary); }
    .element-badge { display: inline-flex; flex-direction: column; align-items: center; padding: 12px 16px; border: 2px solid var(--md-sys-color-primary); border-radius: var(--md-sys-shape-corner-medium); margin-bottom: 24px; background: var(--md-sys-color-surface-container); }
    .el-sym { color: var(--md-sys-color-primary); }
    .el-nm { font: var(--md-sys-typescale-label-medium); color: var(--md-sys-color-on-surface-variant); }
    .module-tagline { color: var(--md-sys-color-primary); margin-bottom: 16px; }
    .hero-desc { max-width: 560px; color: var(--md-sys-color-on-surface-variant); }
    .section-desc { max-width: 640px; margin: 16px auto 0; }
    .alt-section { background: var(--md-sys-color-surface-container-low); }

    .subtypes-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 48px; }
    .subtype-card { padding: 24px; border-radius: var(--md-sys-shape-corner-large); border: 1px solid var(--md-sys-color-outline-variant); text-align: center; transition: all 0.3s; }
    .subtype-card:hover { box-shadow: var(--md-sys-elevation-1); border-color: var(--md-sys-color-primary); }
    .subtype-card .material-symbols-outlined { color: var(--md-sys-color-primary); margin-bottom: 12px; }
    .subtype-card h4 { margin-bottom: 6px; }

    .exec-list { display: flex; flex-direction: column; gap: 20px; margin-top: 48px; }
    .exec-row { display: flex; gap: 28px; align-items: flex-start; padding: 32px; background: var(--md-sys-color-surface); border-radius: var(--md-sys-shape-corner-extra-large); border: 1px solid var(--md-sys-color-outline-variant); transition: all 0.3s; }
    .exec-row:hover { border-color: var(--md-sys-color-primary); box-shadow: var(--md-sys-elevation-2); }
    .exec-row.featured { border: 2px solid var(--md-sys-color-primary); }
    .exec-avatar { width: 80px; height: 80px; min-width: 80px; border-radius: var(--md-sys-shape-corner-large); display: flex; align-items: center; justify-content: center; color: var(--md-sys-color-on-primary); }
    .exec-details { flex: 1; display: flex; flex-direction: column; gap: 6px; }
    .exec-header { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
    .exec-role { font: var(--md-sys-typescale-label-large); font-weight: 600; }
    .cofounder-badge { padding: 3px 12px; border-radius: var(--md-sys-shape-corner-full); font: var(--md-sys-typescale-label-small); background: var(--md-sys-color-tertiary-container); color: var(--md-sys-color-on-tertiary-container); }
    .c-email { display: inline-flex; align-items: center; gap: 4px; font: var(--md-sys-typescale-body-small); color: var(--md-sys-color-on-surface-variant); text-decoration: none; transition: color 0.2s; }
    .c-email:hover { color: var(--md-sys-color-primary); }
    .focus-chips { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 8px; }

    .caps-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 48px; }
    .cap-item { display: flex; gap: 12px; padding: 20px; border-radius: var(--md-sys-shape-corner-large); border: 1px solid var(--md-sys-color-outline-variant); }
    .cap-item .material-symbols-outlined { color: var(--md-sys-color-primary); flex-shrink: 0; }
    .cap-item h4 { margin-bottom: 4px; }

    @media (max-width: 1024px) { .subtypes-grid { grid-template-columns: repeat(2, 1fr); } .caps-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 640px) { .module-hero { padding: 100px 0 48px; } .subtypes-grid, .caps-grid { grid-template-columns: 1fr; } .exec-row { flex-direction: column; } }
  `],
})
export class TeamLeadershipComponent {
  leadershipAreas = [
    { name: 'Corporate Strategy', icon: 'trending_up', desc: 'Long-term vision, market positioning, and growth planning' },
    { name: 'AI Research', icon: 'psychology', desc: 'Model architecture, XAI methodology, and publication strategy' },
    { name: 'Clinical Partnerships', icon: 'local_hospital', desc: 'Hospital integrations, MRMC studies, and clinical evidence' },
    { name: 'Regulatory Affairs', icon: 'verified', desc: 'FDA 510(k)/De Novo, EU MDR CE marking, MHRA pathways' },
    { name: 'Product Development', icon: 'widgets', desc: 'Module roadmap, UX research, and clinician workflow design' },
    { name: 'Finance & Operations', icon: 'account_balance', desc: 'Fundraising, fiscal planning, and operational excellence' },
    { name: 'Legal & Compliance', icon: 'gavel', desc: 'IP protection, HIPAA/GDPR, corporate governance' },
    { name: 'Engineering', icon: 'code', desc: 'Platform architecture, cloud infrastructure, CI/CD pipelines' },
  ];

  executives = [
    { name: 'Murad Mammadov', role: 'Chief Executive Officer (CEO)', color: '#1a73e8', cofounder: true, email: 'murad.mammadov@skolyn.se', desc: 'Leads corporate strategy, fundraising, board relations, and the overall vision for building clinically validated, transparent, and scalable diagnostic intelligence platforms. Drives Skolyn\'s partnerships with hospital networks and regulatory bodies across three continents.', focuses: ['Corporate Strategy', 'Fundraising', 'Board Relations', 'Market Expansion'] },
    { name: 'Olaf Yunus Laitinen Imanov', role: 'Chief Technology Officer (CTO)', color: '#ea8600', cofounder: true, email: 'olaf.laitinen@skolyn.se', desc: 'Oversees all engineering, platform architecture, cloud infrastructure, DevOps, and AI model integration. Responsible for technical roadmap execution, system scalability, and production-grade deployment across all four imaging modules.', focuses: ['Platform Architecture', 'Cloud Infrastructure', 'DevOps', 'System Scalability'] },
    { name: 'Nurgul Abbasova', role: 'Chief Medical Officer (CMO)', color: '#d93025', cofounder: false, email: 'nurgul.abbasova@skolyn.se', desc: 'Leads clinical validation design, advisory board coordination, institutional partnerships, and regulatory submission for FDA and CE Mark pathways. Bridges the gap between AI research output and real-world clinical deployment.', focuses: ['Clinical Validation', 'Regulatory Strategy', 'Advisory Board', 'Clinical Trials'] },
    { name: 'Ahmet Yasir Duman', role: 'Chief Scientific Officer (CSO)', color: '#9c27b0', cofounder: false, email: 'ahmet.duman@skolyn.se', desc: 'Directs AI research strategy, model architecture design, XAI methodology, federated learning infrastructure, and academic publication pipeline. Leads SIERRA research operations and academic collaboration programs.', focuses: ['AI Research Strategy', 'XAI Methodology', 'Federated Learning', 'Academic Publications'] },
    { name: 'Said Aliyev', role: 'Chief Operating Officer (COO)', color: '#5c6bc0', cofounder: true, email: 'said.aliyev@skolyn.se', desc: 'Manages day-to-day operations, organizational scaling, talent acquisition, process optimization, and cross-functional coordination. Ensures operational efficiency across all departments and geographic offices.', focuses: ['Operations', 'Talent Acquisition', 'Process Optimization', 'Org Scaling'] },
    { name: 'Giymat Valiyeva', role: 'Chief Financial Officer (CFO)', color: '#185abc', cofounder: false, email: 'giymat.valiyeva@skolyn.se', desc: 'Oversees financial planning, investor relations, revenue operations, fiscal compliance, and sustainable growth strategy. Manages financial modeling for multi-year R&D investment cycles and commercialization timelines.', focuses: ['Financial Planning', 'Investor Relations', 'Revenue Operations', 'Fiscal Compliance'] },
    { name: 'Nurana Abdullayeva', role: 'Chief Legal Officer (CLO)', color: '#0d652d', cofounder: false, email: 'nurana.abdullayeva@skolyn.se', desc: 'Manages all legal affairs, regulatory compliance, intellectual property protection, contract negotiations, corporate governance, and data privacy frameworks across HIPAA, GDPR, and international jurisdictions.', focuses: ['IP Protection', 'HIPAA/GDPR', 'Corporate Governance', 'Contract Law'] },
    { name: 'Habib Mammadov', role: 'Chief Product Officer (CPO)', color: '#b06000', cofounder: true, email: 'habib.mammadov@skolyn.se', desc: 'Drives product vision, UX research, clinician workflow design, and feature prioritization across all four imaging modules. Leads user research programs with radiologists and clinical partners to ensure product-market fit.', focuses: ['Product Vision', 'UX Research', 'Clinician Workflow', 'Feature Prioritization'] },
  ];

  governance = [
    { icon: 'groups', title: 'Weekly Executive Sync', desc: 'All C-suite members meet weekly for cross-functional alignment and decision-making' },
    { icon: 'calendar_today', title: 'Quarterly Board Reviews', desc: 'Formal board presentations with financial, clinical, and technical progress reports' },
    { icon: 'analytics', title: 'OKR Framework', desc: 'Company-wide objectives and key results aligned quarterly with department-level cascading' },
    { icon: 'security', title: 'Risk Committee', desc: 'Monthly risk assessment covering regulatory, technical, financial, and operational dimensions' },
    { icon: 'handshake', title: 'Advisory Board Sessions', desc: 'Bi-annual strategic advisory sessions with external academic and clinical advisors' },
    { icon: 'diversity_3', title: 'Department Leads Forum', desc: 'Monthly cross-departmental forum for project coordination and resource allocation' },
  ];
}
