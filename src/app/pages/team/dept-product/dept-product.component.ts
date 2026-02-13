import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dept-product',
  imports: [RouterLink],
  template: `
    <section class="module-hero dept-bg">
      <div class="container">
        <a routerLink="/team" class="back-link"><span class="material-symbols-outlined sz-20">arrow_back</span> All Teams</a>
        <div class="hero-text animate-in">
          <div class="element-badge">
            <span class="el-sym material-symbols-outlined sz-40">widgets</span>
            <span class="el-nm">Product</span>
          </div>
          <h1 class="display-medium">Product &amp; Design</h1>
          <p class="title-large module-tagline">Vision, UX Research, Clinician Workflow &amp; Feature Strategy</p>
          <p class="body-large hero-desc">
            We translate clinical needs into intuitive product experiences. Our team leads
            product strategy, user research with radiologists, interaction design, rapid
            prototyping, and feature prioritization across all four imaging modules.
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center">Product Disciplines</h2>
        <p class="body-large text-secondary text-center section-desc">Eight specializations driving product excellence from vision to pixel-perfect delivery.</p>
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
        <h2 class="headline-large text-center">Product Development Cycle</h2>
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
        <h2 class="headline-large text-center">Design System &amp; Tools</h2>
        <div class="caps-grid">
          @for (cap of tools; track cap.title) {
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
    .dept-bg { background: linear-gradient(135deg, #fff3e0, #e8eaf6, #f8f9fa); }
    .back-link { display: inline-flex; align-items: center; gap: 4px; font: var(--md-sys-typescale-label-large); color: var(--md-sys-color-on-surface-variant); text-decoration: none; margin-bottom: 32px; }
    .back-link:hover { color: var(--md-sys-color-primary); }
    .element-badge { display: inline-flex; flex-direction: column; align-items: center; padding: 12px 16px; border: 2px solid #b06000; border-radius: var(--md-sys-shape-corner-medium); margin-bottom: 24px; background: rgba(255,255,255,0.7); }
    .el-sym { color: #b06000; }
    .el-nm { font: var(--md-sys-typescale-label-medium); color: var(--md-sys-color-on-surface-variant); }
    .module-tagline { color: #b06000; margin-bottom: 16px; }
    .hero-desc { max-width: 560px; color: var(--md-sys-color-on-surface-variant); }
    .section-desc { max-width: 640px; margin: 16px auto 0; }
    .alt-section { background: var(--md-sys-color-surface-container-low); }
    .subtypes-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 48px; }
    .subtype-card { padding: 24px; border-radius: var(--md-sys-shape-corner-large); border: 1px solid var(--md-sys-color-outline-variant); text-align: center; transition: all 0.3s; }
    .subtype-card:hover { box-shadow: var(--md-sys-elevation-1); border-color: #b06000; }
    .subtype-card .material-symbols-outlined { color: #b06000; margin-bottom: 12px; }
    .subtype-card h4 { margin-bottom: 6px; }
    .pipeline-cards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 48px; }
    .pipe-card { padding: 28px; border-radius: var(--md-sys-shape-corner-extra-large); background: var(--md-sys-color-surface); border: 1px solid var(--md-sys-color-outline-variant); }
    .pipe-num { width: 36px; height: 36px; border-radius: 50%; background: #b06000; color: white; display: flex; align-items: center; justify-content: center; font: var(--md-sys-typescale-label-large); margin-bottom: 16px; }
    .pipe-card h4 { margin-bottom: 8px; }
    .staff-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); gap: 16px; margin-top: 48px; }
    .staff-card { display: flex; align-items: center; gap: 16px; padding: 20px 24px; background: var(--md-sys-color-surface-container-low); border-radius: var(--md-sys-shape-corner-large); border: 1px solid var(--md-sys-color-outline-variant); transition: all 0.2s; }
    .staff-card:hover { border-color: #b06000; box-shadow: var(--md-sys-elevation-2); }
    .staff-avatar { width: 52px; height: 52px; min-width: 52px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; }
    .staff-info { display: flex; flex-direction: column; gap: 3px; }
    .c-email { display: inline-flex; align-items: center; gap: 4px; font: var(--md-sys-typescale-body-small); color: var(--md-sys-color-on-surface-variant); text-decoration: none; transition: color 0.2s; }
    .c-email:hover { color: var(--md-sys-color-primary); }
    .caps-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 48px; }
    .cap-item { display: flex; gap: 12px; padding: 20px; border-radius: var(--md-sys-shape-corner-large); border: 1px solid var(--md-sys-color-outline-variant); }
    .cap-item .material-symbols-outlined { color: #b06000; flex-shrink: 0; }
    .cap-item h4 { margin-bottom: 4px; }
    @media (max-width: 1024px) { .subtypes-grid, .pipeline-cards { grid-template-columns: repeat(2, 1fr); } .caps-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 640px) { .module-hero { padding: 100px 0 48px; } .subtypes-grid, .pipeline-cards, .caps-grid { grid-template-columns: 1fr; } .staff-grid { grid-template-columns: 1fr; } }
  `],
})
export class DeptProductComponent {
  deptColor = '#b06000';

  disciplines = [
    { name: 'Product Strategy', icon: 'strategy', desc: 'Long-term product vision, competitive analysis, market positioning' },
    { name: 'UX Research', icon: 'person_search', desc: 'Contextual inquiry, usability testing, and workflow observation with radiologists' },
    { name: 'Interaction Design', icon: 'draw', desc: 'Clinical UI patterns, DICOM viewer integration, and annotation tools' },
    { name: 'Visual Design', icon: 'palette', desc: 'Design system, component library, and brand-consistent visual language' },
    { name: 'Prototyping', icon: 'build', desc: 'Rapid prototyping and interactive mockups for user validation' },
    { name: 'Product Analytics', icon: 'analytics', desc: 'Feature adoption, engagement metrics, and clinical impact measurement' },
    { name: 'Accessibility', icon: 'accessibility', desc: 'WCAG 2.1 AA compliance, screen reader support, keyboard navigation' },
    { name: 'Localization', icon: 'translate', desc: 'Multi-language support for global clinical deployment' },
  ];

  pipeline = [
    { title: 'Discovery', desc: 'User research, clinical shadowing, competitive analysis, and opportunity framing' },
    { title: 'Definition', desc: 'PRD authoring, wireframes, user stories, and acceptance criteria' },
    { title: 'Design', desc: 'High-fidelity mockups, interactive prototypes, and design review with clinicians' },
    { title: 'Delivery', desc: 'Engineering handoff, sprint execution, QA validation, and release' },
  ];

  staff = [
    { name: 'Anar Hasanov', role: 'Head of Product Management', email: 'anar.hasanov@skolyn.se' },
    { name: 'Nigar Mammadova', role: 'Senior Product Manager', email: 'nigar.mammadova@skolyn.se' },
    { name: 'Leyla Aliyeva', role: 'UX Research Lead', email: 'leyla.aliyeva@skolyn.se' },
    { name: 'Fidan Rzayeva', role: 'Senior UX Designer', email: 'fidan.rzayeva@skolyn.se' },
    { name: 'Rashad Mammadov', role: 'UI/Visual Designer', email: 'rashad.mammadov@skolyn.se' },
    { name: 'Gunay Huseynova', role: 'Product Designer', email: 'gunay.huseynova@skolyn.se' },
    { name: 'Elchin Babayev', role: 'Product Analyst', email: 'elchin.babayev@skolyn.se' },
    { name: 'Aygun Jafarova', role: 'UX Researcher', email: 'aygun.jafarova@skolyn.se' },
    { name: 'Murad Aliyev', role: 'Localization Manager', email: 'murad.aliyev@skolyn.se' },
  ];

  tools = [
    { icon: 'design_services', title: 'Design System', desc: 'Material Design 3-based component library with medical domain extensions' },
    { icon: 'web', title: 'Figma', desc: 'Collaborative design platform for prototyping and design reviews' },
    { icon: 'analytics', title: 'Mixpanel', desc: 'Product analytics for feature adoption and clinical workflow metrics' },
    { icon: 'forum', title: 'User Research Platform', desc: 'Internal tool for scheduling, recording, and analyzing clinician interviews' },
    { icon: 'assignment', title: 'Jira', desc: 'Product roadmap, sprint planning, and cross-team coordination' },
    { icon: 'accessibility', title: 'axe DevTools', desc: 'Automated accessibility testing integrated into CI/CD pipeline' },
  ];
}
