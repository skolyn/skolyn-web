import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sierra-programs',
  imports: [RouterLink],
  template: `
    <section class="module-hero sierra-bg">
      <div class="container">
        <a routerLink="/research" class="back-link"><span class="material-symbols-outlined sz-20">arrow_back</span> SIERRA Overview</a>
        <div class="hero-text animate-in">
          <div class="element-badge">
            <span class="el-sym material-symbols-outlined sz-40">school</span>
            <span class="el-nm">Programs</span>
          </div>
          <h1 class="display-medium">Research Programs</h1>
          <p class="title-large module-tagline">Residencies, Fellowships, Grants &amp; Open-Source Initiatives</p>
          <p class="body-large hero-desc">
            SIERRA invests in the next generation of medical AI researchers through
            structured residency programs, clinical fellowships, academic collaboration
            grants, and open-source community contributions.
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center">Program Types</h2>
        <p class="body-large text-secondary text-center section-desc">Four structured pathways for researchers, clinicians, and academics to contribute to medical imaging AI.</p>
        <div class="subtypes-grid">
          @for (type of programTypes; track type.name) {
            <div class="subtype-card animate-in">
              <span class="material-symbols-outlined sz-40">{{ type.icon }}</span>
              <h4 class="title-medium">{{ type.name }}</h4>
              <p class="body-small text-secondary">{{ type.desc }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section alt-section">
      <div class="container">
        <h2 class="headline-large text-center">Application Process</h2>
        <div class="pipeline-cards">
          @for (step of applicationProcess; track step.title; let i = $index) {
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
        <h2 class="headline-large text-center">Active Programs</h2>
        <div class="programs-list">
          @for (program of programs; track program.title) {
            <div class="program-row animate-in">
              <div class="program-icon-lg">
                <span class="material-symbols-outlined sz-40">{{ program.icon }}</span>
              </div>
              <div class="program-details">
                <div class="program-badge body-small">{{ program.type }}</div>
                <h3 class="headline-small">{{ program.title }}</h3>
                <p class="body-large text-secondary">{{ program.description }}</p>
                <ul class="program-bullets">
                  @for (detail of program.details; track detail) {
                    <li class="body-small text-secondary">{{ detail }}</li>
                  }
                </ul>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section alt-section">
      <div class="container">
        <h2 class="headline-large text-center">Academic Partners</h2>
        <p class="body-large text-secondary text-center section-desc">Institutional collaborations across three continents.</p>
        <div class="partners-grid">
          @for (partner of academicPartners; track partner) {
            <div class="partner-chip">
              <span class="material-symbols-outlined sz-20">school</span>
              {{ partner }}
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center">Program Outcomes</h2>
        <div class="caps-grid">
          @for (cap of outcomes; track cap.title) {
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
    .sierra-bg { background: linear-gradient(135deg, #e8f0fe, #e3f2fd, #f8f9fa); }
    .back-link { display: inline-flex; align-items: center; gap: 4px; font: var(--md-sys-typescale-label-large); color: var(--md-sys-color-on-surface-variant); text-decoration: none; margin-bottom: 32px; }
    .back-link:hover { color: var(--md-sys-color-primary); }
    .element-badge { display: inline-flex; flex-direction: column; align-items: center; padding: 12px 16px; border: 2px solid #1a73e8; border-radius: var(--md-sys-shape-corner-medium); margin-bottom: 24px; background: rgba(255,255,255,0.7); }
    .el-sym { color: #1a73e8; }
    .el-nm { font: var(--md-sys-typescale-label-medium); color: var(--md-sys-color-on-surface-variant); }
    .module-tagline { color: #1a73e8; margin-bottom: 16px; }
    .hero-desc { max-width: 560px; color: var(--md-sys-color-on-surface-variant); }
    .section-desc { max-width: 640px; margin: 16px auto 0; }
    .alt-section { background: var(--md-sys-color-surface-container-low); }

    .subtypes-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 48px; }
    .subtype-card { padding: 24px; border-radius: var(--md-sys-shape-corner-large); border: 1px solid var(--md-sys-color-outline-variant); text-align: center; transition: all 0.3s; }
    .subtype-card:hover { box-shadow: var(--md-sys-elevation-1); border-color: #1a73e8; }
    .subtype-card .material-symbols-outlined { color: #1a73e8; margin-bottom: 12px; }
    .subtype-card h4 { margin-bottom: 6px; }

    .pipeline-cards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 48px; }
    .pipe-card { padding: 28px; border-radius: var(--md-sys-shape-corner-extra-large); background: var(--md-sys-color-surface); border: 1px solid var(--md-sys-color-outline-variant); }
    .pipe-num { width: 36px; height: 36px; border-radius: 50%; background: #1a73e8; color: white; display: flex; align-items: center; justify-content: center; font: var(--md-sys-typescale-label-large); margin-bottom: 16px; }
    .pipe-card h4 { margin-bottom: 8px; }

    .programs-list { display: flex; flex-direction: column; gap: 24px; margin-top: 48px; }
    .program-row { display: flex; gap: 32px; align-items: flex-start; background: var(--md-sys-color-surface-container-lowest); border: 1px solid var(--md-sys-color-outline-variant); border-radius: var(--md-sys-shape-corner-extra-large); padding: 40px; transition: all 0.3s; }
    .program-row:hover { box-shadow: var(--md-sys-elevation-2); }
    .program-icon-lg { width: 72px; height: 72px; min-width: 72px; border-radius: var(--md-sys-shape-corner-large); background: var(--md-sys-color-primary-container); display: flex; align-items: center; justify-content: center; color: var(--md-sys-color-on-primary-container); }
    .program-details { flex: 1; display: flex; flex-direction: column; gap: 8px; }
    .program-badge { display: inline-block; width: fit-content; padding: 3px 12px; border-radius: var(--md-sys-shape-corner-full); background: var(--md-sys-color-tertiary-container); color: var(--md-sys-color-on-tertiary-container); font-weight: 600; }
    .program-bullets { margin: 8px 0 0 20px; display: flex; flex-direction: column; gap: 4px; }

    .partners-grid { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; margin-top: 48px; }
    .partner-chip { display: flex; align-items: center; gap: 8px; padding: 12px 24px; background: var(--md-sys-color-surface); border: 1px solid var(--md-sys-color-outline-variant); border-radius: var(--md-sys-shape-corner-full); font: var(--md-sys-typescale-label-large); color: var(--md-sys-color-on-surface-variant); transition: all 0.3s; }
    .partner-chip:hover { border-color: #1a73e8; box-shadow: var(--md-sys-elevation-1); }
    .partner-chip .material-symbols-outlined { color: #1a73e8; }

    .caps-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 48px; }
    .cap-item { display: flex; gap: 12px; padding: 20px; border-radius: var(--md-sys-shape-corner-large); border: 1px solid var(--md-sys-color-outline-variant); }
    .cap-item .material-symbols-outlined { color: #1a73e8; flex-shrink: 0; }
    .cap-item h4 { margin-bottom: 4px; }

    @media (max-width: 1024px) { .subtypes-grid, .pipeline-cards { grid-template-columns: repeat(2, 1fr); } .caps-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 640px) { .module-hero { padding: 100px 0 48px; } .subtypes-grid, .pipeline-cards, .caps-grid { grid-template-columns: 1fr; } .program-row { flex-direction: column; padding: 28px; } }
  `],
})
export class SierraProgramsComponent {
  programTypes = [
    { name: 'Research Residency', icon: 'school', desc: '12-month full-time position for PhD graduates and postdocs' },
    { name: 'Clinical Fellowship', icon: 'medical_services', desc: '6-12 month fellowship for board-certified radiologists' },
    { name: 'Academic Grants', icon: 'handshake', desc: 'Up to $100K for aligned research projects at partner institutions' },
    { name: 'Open Source', icon: 'code', desc: 'Community-driven tools, benchmarks, and pre-trained weights' },
  ];

  applicationProcess = [
    { title: 'Application', desc: 'Submit CV, research statement, and 2 letters of recommendation online' },
    { title: 'Review', desc: 'Department heads evaluate alignment with SIERRA research priorities' },
    { title: 'Interview', desc: 'Technical presentation and panel interview with research committee' },
    { title: 'Offer', desc: 'Onboarding with compute access, dataset orientation, and mentor assignment' },
  ];

  programs = [
    { title: 'SIERRA Research Residency', icon: 'school', type: 'Residency Program', description: 'A 12-month full-time research residency for PhD graduates and postdoctoral researchers to conduct independent research at the intersection of medical imaging and explainable AI.', details: ['Full-time, 12-month program with competitive stipend', 'Access to multi-modal clinical datasets across 4 imaging modalities', 'Mentorship from department heads', 'Publication support and conference travel funding', 'Pathway to full-time research positions'] },
    { title: 'Clinical Research Fellowship', icon: 'medical_services', type: 'Fellowship', description: 'A joint fellowship for practicing radiologists who want to dedicate research time to AI-assisted diagnostic imaging.', details: ['6-month or 12-month options', 'Designed for board-certified radiologists', 'Co-supervised by clinical and ML leads', 'Clinical dataset annotation and study design training', 'CME credit eligible'] },
    { title: 'Academic Collaboration Grants', icon: 'handshake', type: 'Grants', description: 'Funding for academic research groups working on problems aligned with SIERRA priorities. Grants support data sharing, compute resources, and joint publications.', details: ['Up to $100K per project, 1-2 year duration', 'Open to all accredited research institutions', 'Shared compute infrastructure and dataset access', 'Quarterly review meetings with SIERRA researchers', 'Joint intellectual property framework'] },
    { title: 'Open Source Contributions', icon: 'code', type: 'Community', description: 'We open-source foundational tools, benchmarks, and pre-trained model weights to accelerate research across the medical imaging AI community.', details: ['XAI visualization libraries for medical imaging', 'Benchmark datasets with standardized evaluation protocols', 'Pre-trained encoder weights for MRI, CT, US, and X-Ray', 'Federated learning simulation frameworks', 'Fairness auditing toolkits for health AI'] },
  ];

  academicPartners = [
    'Karolinska Institute', 'ETH Zurich', 'Stanford Medicine', 'Johns Hopkins Radiology',
    'University of Oxford', 'Charité Berlin', 'ADA University', 'MIT CSAIL',
    'Imperial College London', 'University of Toronto',
  ];

  outcomes = [
    { icon: 'groups', title: '28 Alumni', desc: 'Residency and fellowship graduates now at leading AI research labs' },
    { icon: 'description', title: '45 Joint Papers', desc: 'Co-authored publications with academic partners across 3 continents' },
    { icon: 'code', title: '15 Open-Source Tools', desc: 'Released under Apache 2.0 license with active community maintenance' },
    { icon: 'savings', title: '$2.4M Grants Awarded', desc: 'Funding distributed to 18 research projects at 12 institutions' },
    { icon: 'stars', title: '6 Startups Spun Out', desc: 'Resident alumni who launched medical AI companies from SIERRA research' },
    { icon: 'public', title: '10 Countries', desc: 'International researchers from US, UK, Germany, Sweden, Canada, and more' },
  ];
}
