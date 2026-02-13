import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dept-clinical',
  imports: [RouterLink],
  template: `
    <section class="module-hero dept-bg">
      <div class="container">
        <a routerLink="/team" class="back-link">
          <span class="material-symbols-outlined sz-20">arrow_back</span>
          All Teams
        </a>
        <div class="hero-text animate-in">
          <div class="element-badge">
            <span class="el-sym material-symbols-outlined sz-40">local_hospital</span>
            <span class="el-nm">Clinical</span>
          </div>
          <h1 class="display-medium">Clinical Operations</h1>
          <p class="title-large module-tagline">Validation, Partnerships &amp; Clinical Evidence</p>
          <p class="body-large hero-desc">
            Bridging AI research and real-world clinical deployment. We design and execute
            multi-site clinical studies, manage hospital partnerships, coordinate advisory boards,
            and generate the clinical evidence required for regulatory submissions.
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center">Clinical Focus Areas</h2>
        <p class="body-large text-secondary text-center section-desc">
          Six specialized areas ensuring our AI models meet the highest clinical standards.
        </p>
        <div class="subtypes-grid">
          @for (area of focusAreas; track area.name) {
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
        <h2 class="headline-large text-center">Validation Pipeline</h2>
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
        <h2 class="headline-large text-center">Key Capabilities</h2>
        <div class="caps-grid">
          @for (cap of capabilities; track cap.title) {
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
    .dept-bg { background: linear-gradient(135deg, #fce4ec, #e8f5e9, #f8f9fa); }
    .back-link { display: inline-flex; align-items: center; gap: 4px; font: var(--md-sys-typescale-label-large); color: var(--md-sys-color-on-surface-variant); text-decoration: none; margin-bottom: 32px; }
    .back-link:hover { color: var(--md-sys-color-primary); }
    .element-badge { display: inline-flex; flex-direction: column; align-items: center; padding: 12px 16px; border: 2px solid #d93025; border-radius: var(--md-sys-shape-corner-medium); margin-bottom: 24px; background: rgba(255,255,255,0.7); }
    .el-sym { color: #d93025; }
    .el-nm { font: var(--md-sys-typescale-label-medium); color: var(--md-sys-color-on-surface-variant); }
    .module-tagline { color: #d93025; margin-bottom: 16px; }
    .hero-desc { max-width: 560px; color: var(--md-sys-color-on-surface-variant); }
    .section-desc { max-width: 640px; margin: 16px auto 0; }
    .alt-section { background: var(--md-sys-color-surface-container-low); }
    .subtypes-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 48px; }
    .subtype-card { padding: 24px; border-radius: var(--md-sys-shape-corner-large); border: 1px solid var(--md-sys-color-outline-variant); text-align: center; transition: all 0.3s; }
    .subtype-card:hover { box-shadow: var(--md-sys-elevation-1); border-color: #d93025; }
    .subtype-card .material-symbols-outlined { color: #d93025; margin-bottom: 12px; }
    .subtype-card h4 { margin-bottom: 6px; }
    .pipeline-cards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 48px; }
    .pipe-card { padding: 28px; border-radius: var(--md-sys-shape-corner-extra-large); background: var(--md-sys-color-surface); border: 1px solid var(--md-sys-color-outline-variant); }
    .pipe-num { width: 36px; height: 36px; border-radius: 50%; background: #d93025; color: white; display: flex; align-items: center; justify-content: center; font: var(--md-sys-typescale-label-large); margin-bottom: 16px; }
    .pipe-card h4 { margin-bottom: 8px; }
    .staff-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); gap: 16px; margin-top: 48px; }
    .staff-card { display: flex; align-items: center; gap: 16px; padding: 20px 24px; background: var(--md-sys-color-surface-container-low); border-radius: var(--md-sys-shape-corner-large); border: 1px solid var(--md-sys-color-outline-variant); transition: all 0.2s; }
    .staff-card:hover { border-color: #d93025; box-shadow: var(--md-sys-elevation-2); }
    .staff-avatar { width: 52px; height: 52px; min-width: 52px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; }
    .staff-info { display: flex; flex-direction: column; gap: 3px; }
    .c-email { display: inline-flex; align-items: center; gap: 4px; font: var(--md-sys-typescale-body-small); color: var(--md-sys-color-on-surface-variant); text-decoration: none; transition: color 0.2s; }
    .c-email:hover { color: var(--md-sys-color-primary); }
    .caps-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 48px; }
    .cap-item { display: flex; gap: 12px; padding: 20px; border-radius: var(--md-sys-shape-corner-large); border: 1px solid var(--md-sys-color-outline-variant); }
    .cap-item .material-symbols-outlined { color: #d93025; flex-shrink: 0; }
    .cap-item h4 { margin-bottom: 4px; }
    @media (max-width: 1024px) { .subtypes-grid, .pipeline-cards { grid-template-columns: repeat(2, 1fr); } .caps-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 640px) { .module-hero { padding: 100px 0 48px; } .subtypes-grid, .pipeline-cards, .caps-grid { grid-template-columns: 1fr; } .staff-grid { grid-template-columns: 1fr; } }
  `],
})
export class DeptClinicalComponent {
  deptColor = '#d93025';

  focusAreas = [
    { name: 'MRMC Studies', icon: 'clinical_notes', desc: 'Multi-reader multi-case validation studies across partner institutions' },
    { name: 'Hospital Partnerships', icon: 'apartment', desc: 'Long-term clinical integration partnerships with academic medical centers' },
    { name: 'Prospective Trials', icon: 'science', desc: 'Real-time prospective studies measuring AI impact on clinical outcomes' },
    { name: 'Advisory Board', icon: 'groups', desc: 'External radiologist advisory board coordination and guided feedback' },
    { name: 'Data Annotation', icon: 'edit_note', desc: 'Expert-reviewed ground truth labeling with consensus scoring protocols' },
    { name: 'Outcome Tracking', icon: 'monitoring', desc: 'Post-deployment clinical outcome measurement and long-term monitoring' },
  ];

  pipeline = [
    { title: 'Study Design', desc: 'Protocol development with biostatisticians and clinical PIs per STARD/EQUATOR guidelines' },
    { title: 'Site Activation', desc: 'IRB/ethics committee approvals, data sharing agreements, and site training' },
    { title: 'Data Collection', desc: 'Standardized DICOM ingestion, anonymization, and expert annotation workflows' },
    { title: 'Results & Filing', desc: 'Statistical analysis, regulatory evidence generation, and journal submission' },
  ];

  staff = [
    { name: 'Dr. Rana Mammadova', role: 'Head of Clinical Operations', email: 'rana.mammadova@skolyn.se' },
    { name: 'Dr. Aysel Karimova', role: 'Clinical Research Director', email: 'aysel.karimova@skolyn.se' },
    { name: 'Dr. Sevinj Aliyeva', role: 'Senior Clinical Scientist', email: 'sevinj.aliyeva@skolyn.se' },
    { name: 'Aynur Mammadova', role: 'Clinical Project Manager', email: 'aynur.mammadova@skolyn.se' },
    { name: 'Ilaha Huseynova', role: 'Clinical Data Manager', email: 'ilaha.huseynova@skolyn.se' },
    { name: 'Dr. Fuad Hasanov', role: 'Biostatistician', email: 'fuad.hasanov@skolyn.se' },
    { name: 'Samira Abdullayeva', role: 'Clinical Research Coordinator', email: 'samira.abdullayeva@skolyn.se' },
    { name: 'Rufat Guliyev', role: 'Data Annotation Lead', email: 'rufat.guliyev@skolyn.se' },
    { name: 'Naila Jafarova', role: 'Partnership Manager', email: 'naila.jafarova@skolyn.se' },
  ];

  capabilities = [
    { icon: 'analytics', title: 'Statistical Rigor', desc: 'Pre-registered study protocols, power analysis, and Bayesian inference frameworks' },
    { icon: 'verified', title: 'STARD Compliance', desc: 'All studies follow STARD guidelines for diagnostic accuracy reporting' },
    { icon: 'storage', title: 'Clinical Data Warehouse', desc: 'Centralized repository for multi-site anonymized clinical imaging data' },
    { icon: 'handshake', title: '12 Partner Sites', desc: 'Active clinical partnerships with academic medical centers worldwide' },
    { icon: 'description', title: 'Evidence Dossiers', desc: 'FDA- and EU MDR-compliant clinical evidence packages for submissions' },
    { icon: 'monitoring', title: 'Real-Time Dashboards', desc: 'Live study enrollment, annotation progress, and quality metrics tracking' },
  ];
}
