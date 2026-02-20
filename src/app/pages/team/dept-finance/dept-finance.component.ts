import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dept-finance',
  imports: [RouterLink],
  template: `
    <section class="module-hero dept-bg">
      <div class="container">
        <a routerLink="/team" class="back-link"><span class="material-symbols-outlined sz-20">arrow_back</span> All Teams</a>
        <div class="hero-text animate-in">
          <div class="element-badge">
            <span class="el-sym material-symbols-outlined sz-40">account_balance</span>
            <span class="el-nm">Finance</span>
          </div>
          <h1 class="display-medium">Finance &amp; Accounting</h1>
          <p class="title-large module-tagline">Financial Planning, Investor Relations &amp; Fiscal Operations</p>
          <p class="body-large hero-desc">
            Managing Skolyn's financial health, investor relations, revenue operations,
            and fiscal compliance. We drive sustainable growth through rigorous financial
            modeling, capital allocation optimization, and strategic fundraising across
            venture capital, grants, and commercial revenue streams.
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center">Finance Functions</h2>
        <p class="body-large text-secondary text-center section-desc">Six core finance functions supporting Skolyn's long-term growth trajectory.</p>
        <div class="subtypes-grid">
          @for (area of functions; track area.name) {
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
        <h2 class="headline-large text-center">Fiscal Planning Cycle</h2>
        <div class="pipeline-cards">
          @for (step of cycle; track step.title; let i = $index) {
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
        <h2 class="headline-large text-center">Financial Governance</h2>
        <div class="caps-grid">
          @for (cap of governance; track cap.title) {
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
    .dept-bg { background: linear-gradient(135deg, #e3f2fd, #e8eaf6, #f8f9fa); }
    .back-link { display: inline-flex; align-items: center; gap: 4px; font: var(--md-sys-typescale-label-large); color: var(--md-sys-color-on-surface-variant); text-decoration: none; margin-bottom: 32px; }
    .back-link:hover { color: var(--md-sys-color-primary); }
    .element-badge { display: inline-flex; flex-direction: column; align-items: center; padding: 12px 16px; border: 2px solid #185abc; border-radius: var(--md-sys-shape-corner-medium); margin-bottom: 24px; background: rgba(255,255,255,0.7); }
    .el-sym { color: #185abc; }
    .el-nm { font: var(--md-sys-typescale-label-medium); color: var(--md-sys-color-on-surface-variant); }
    .module-tagline { color: #185abc; margin-bottom: 16px; }
    .hero-desc { max-width: 560px; color: var(--md-sys-color-on-surface-variant); }
    .section-desc { max-width: 640px; margin: 16px auto 0; }
    .alt-section { background: var(--md-sys-color-surface-container-low); }
    .subtypes-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 48px; }
    .subtype-card { padding: 24px; border-radius: var(--md-sys-shape-corner-large); border: 1px solid var(--md-sys-color-outline-variant); text-align: center; transition: all 0.3s; }
    .subtype-card:hover { box-shadow: var(--md-sys-elevation-1); border-color: #185abc; }
    .subtype-card .material-symbols-outlined { color: #185abc; margin-bottom: 12px; }
    .subtype-card h4 { margin-bottom: 6px; }
    .pipeline-cards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 48px; }
    .pipe-card { padding: 28px; border-radius: var(--md-sys-shape-corner-extra-large); background: var(--md-sys-color-surface); border: 1px solid var(--md-sys-color-outline-variant); }
    .pipe-num { width: 36px; height: 36px; border-radius: 50%; background: #185abc; color: white; display: flex; align-items: center; justify-content: center; font: var(--md-sys-typescale-label-large); margin-bottom: 16px; }
    .pipe-card h4 { margin-bottom: 8px; }
    .staff-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); gap: 16px; margin-top: 48px; }
    .staff-card { display: flex; align-items: center; gap: 16px; padding: 20px 24px; background: var(--md-sys-color-surface-container-low); border-radius: var(--md-sys-shape-corner-large); border: 1px solid var(--md-sys-color-outline-variant); transition: all 0.2s; }
    .staff-card:hover { border-color: #185abc; box-shadow: var(--md-sys-elevation-2); }
    .staff-avatar { width: 52px; height: 52px; min-width: 52px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; }
    .staff-info { display: flex; flex-direction: column; gap: 3px; }
    .c-email { display: inline-flex; align-items: center; gap: 4px; font: var(--md-sys-typescale-body-small); color: var(--md-sys-color-on-surface-variant); text-decoration: none; transition: color 0.2s; }
    .c-email:hover { color: var(--md-sys-color-primary); }
    .caps-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 48px; }
    .cap-item { display: flex; gap: 12px; padding: 20px; border-radius: var(--md-sys-shape-corner-large); border: 1px solid var(--md-sys-color-outline-variant); }
    .cap-item .material-symbols-outlined { color: #185abc; flex-shrink: 0; }
    .cap-item h4 { margin-bottom: 4px; }
    @media (max-width: 1024px) { .subtypes-grid, .pipeline-cards { grid-template-columns: repeat(2, 1fr); } .caps-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 640px) { .module-hero { padding: 100px 0 48px; } .subtypes-grid, .pipeline-cards, .caps-grid { grid-template-columns: 1fr; } .staff-grid { grid-template-columns: 1fr; } }
  `],
})
export class DeptFinanceComponent {
  deptColor = '#185abc';

  functions = [
    { name: 'Financial Planning & Analysis', icon: 'analytics', desc: 'Multi-year financial models, scenario planning, and variance analysis' },
    { name: 'Investor Relations', icon: 'handshake', desc: 'VC fundraising, quarterly investor updates, and board financial reporting' },
    { name: 'Revenue Operations', icon: 'payments', desc: 'Billing systems, contract management, and revenue recognition (ASC 606)' },
    { name: 'Accounting & Compliance', icon: 'receipt_long', desc: 'IFRS/GAAP reporting, tax compliance, and statutory financial statements' },
    { name: 'Grant Management', icon: 'savings', desc: 'Research grant applications, EU Horizon funding, and innovation vouchers' },
    { name: 'Treasury & Cash', icon: 'account_balance', desc: 'Cash flow management, foreign exchange, and working capital optimization' },
  ];

  cycle = [
    { title: 'Annual Budget', desc: 'Department-level budgeting aligned with strategic OKRs and board-approved growth targets' },
    { title: 'Quarterly Review', desc: 'Revenue vs. forecast analysis, burn rate monitoring, and capital allocation adjustments' },
    { title: 'Monthly Close', desc: 'Financial statement preparation, accruals, reconciliations, and management reports' },
    { title: 'Board Reporting', desc: 'Board deck financials, KPI dashboards, and capital raise progress updates' },
  ];

  staff = [
    { name: 'Tamerlan Mammadov', role: 'VP of Finance', email: 'tamerlan.mammadov@skolyn.se' },
    { name: 'Gunay Hasanova', role: 'Senior Financial Analyst', email: 'gunay.hasanova@skolyn.se' },
    { name: 'Ruslan Guliyev', role: 'Revenue Operations Manager', email: 'ruslan.guliyev@skolyn.se' },
    { name: 'Nailya Aliyeva', role: 'Controller', email: 'nailya.aliyeva@skolyn.se' },
    { name: 'Mahmud Karimov', role: 'Grant & Funding Manager', email: 'mahmud.karimov@skolyn.se' },
    { name: 'Shabnam Huseynova', role: 'Accounts Payable Specialist', email: 'shabnam.huseynova@skolyn.se' },
    { name: 'Ilkin Babayev', role: 'Financial Planning Analyst', email: 'ilkin.babayev@skolyn.se' },
    { name: 'Gulay Abdullayeva', role: 'Payroll & Benefits Coordinator', email: 'gulay.abdullayeva@skolyn.se' },
  ];

  governance = [
    { icon: 'security', title: 'Internal Controls', desc: 'SOX-ready internal controls framework with segregation of duties' },
    { icon: 'gavel', title: 'Audit Readiness', desc: 'Annual external audit preparation with Big 4 firm engagement' },
    { icon: 'monitoring', title: 'KPI Dashboards', desc: 'Real-time financial KPIs: ARR, burn multiple, CAC/LTV, gross margin' },
    { icon: 'description', title: 'Financial Policies', desc: 'Formal procurement, expense, travel, and delegation of authority policies' },
    { icon: 'savings', title: 'Capital Allocation', desc: 'R&D vs. commercial spend optimization with quarterly board review' },
    { icon: 'public', title: 'Multi-Currency', desc: 'SEK, EUR, USD, GBP operational currency management and hedging' },
  ];
}
