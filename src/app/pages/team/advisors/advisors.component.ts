import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-team-advisors',
  imports: [RouterLink],
  template: `
    <section class="module-hero advisors-bg">
      <div class="container">
        <a routerLink="/team" class="back-link">
          <span class="material-symbols-outlined sz-20">arrow_back</span>
          All Teams
        </a>
        <div class="hero-grid">
          <div class="hero-text animate-in">
            <div class="element-badge">
              <span class="el-sym material-symbols-outlined sz-40">school</span>
              <span class="el-nm">Advisory Board</span>
            </div>
            <h1 class="display-medium">Advisory Board</h1>
            <p class="title-large module-tagline">External Scientific &amp; Strategic Advisors</p>
            <p class="body-large hero-desc">
              Distinguished experts from world-leading institutions guiding Skolyn's
              scientific direction, clinical strategy, technology transfer, and commercialization
              pathways. Our advisors provide independent oversight and domain expertise
              across radiology, AI safety, health technology, and pharmaceutical R&amp;D.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Advisory Focus Areas -->
    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center">Advisory Focus Areas</h2>
        <p class="body-large text-secondary text-center section-desc">
          Our advisory board provides guidance across four critical dimensions
          of medical AI development and commercialization.
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

    <!-- Advisors -->
    <section class="section alt-section">
      <div class="container">
        <h2 class="headline-large text-center">Our Advisors</h2>
        <div class="advisor-list">
          @for (a of advisors; track a.name) {
            <div class="advisor-row animate-in">
              <div class="advisor-avatar">
                <span class="material-symbols-outlined sz-48">person</span>
              </div>
              <div class="advisor-details">
                <h3 class="title-large">{{ a.name }}</h3>
                <span class="advisor-title">{{ a.title }}</span>
                <span class="body-medium text-secondary">{{ a.institution }}</span>
                <a class="c-email" [href]="'mailto:' + a.email">
                  <span class="material-symbols-outlined sz-16">mail</span> {{ a.email }}
                </a>
                <p class="body-medium text-secondary">{{ a.bio }}</p>
                <div class="focus-chips">
                  @for (focus of a.focuses; track focus) {
                    <span class="md-chip">{{ focus }}</span>
                  }
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Engagement Model -->
    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center">Engagement Model</h2>
        <div class="pipeline-cards">
          @for (step of engagement; track step.title; let i = $index) {
            <div class="pipe-card animate-in">
              <div class="pipe-num">{{ i + 1 }}</div>
              <h4 class="title-medium">{{ step.title }}</h4>
              <p class="body-small text-secondary">{{ step.desc }}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .module-hero { padding: 120px 0 64px; position: relative; }
    .advisors-bg { background: linear-gradient(135deg, #e8f5e9, #e3f2fd, #f8f9fa); }
    .back-link { display: inline-flex; align-items: center; gap: 4px; font: var(--md-sys-typescale-label-large); color: var(--md-sys-color-on-surface-variant); text-decoration: none; margin-bottom: 32px; }
    .back-link:hover { color: var(--md-sys-color-primary); }
    .element-badge { display: inline-flex; flex-direction: column; align-items: center; padding: 12px 16px; border: 2px solid #2e7d32; border-radius: var(--md-sys-shape-corner-medium); margin-bottom: 24px; background: rgba(255,255,255,0.7); }
    .el-sym { color: #2e7d32; }
    .el-nm { font: var(--md-sys-typescale-label-medium); color: var(--md-sys-color-on-surface-variant); }
    .module-tagline { color: #2e7d32; margin-bottom: 16px; }
    .hero-desc { max-width: 560px; color: var(--md-sys-color-on-surface-variant); }
    .section-desc { max-width: 640px; margin: 16px auto 0; }
    .alt-section { background: var(--md-sys-color-surface-container-low); }

    .subtypes-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 48px; }
    .subtype-card { padding: 24px; border-radius: var(--md-sys-shape-corner-large); border: 1px solid var(--md-sys-color-outline-variant); text-align: center; transition: all 0.3s; }
    .subtype-card:hover { box-shadow: var(--md-sys-elevation-1); border-color: #2e7d32; }
    .subtype-card .material-symbols-outlined { color: #2e7d32; margin-bottom: 12px; }
    .subtype-card h4 { margin-bottom: 6px; }

    .advisor-list { display: flex; flex-direction: column; gap: 20px; margin-top: 48px; }
    .advisor-row { display: flex; gap: 28px; align-items: flex-start; padding: 32px; background: var(--md-sys-color-surface); border-radius: var(--md-sys-shape-corner-extra-large); border: 1px solid var(--md-sys-color-outline-variant); transition: all 0.3s; }
    .advisor-row:hover { border-color: #2e7d32; box-shadow: var(--md-sys-elevation-2); }
    .advisor-avatar { width: 80px; height: 80px; min-width: 80px; border-radius: var(--md-sys-shape-corner-large); background: #e8f5e9; color: #2e7d32; display: flex; align-items: center; justify-content: center; }
    .advisor-details { flex: 1; display: flex; flex-direction: column; gap: 4px; }
    .advisor-title { font: var(--md-sys-typescale-label-large); color: #2e7d32; font-weight: 600; }
    .c-email { display: inline-flex; align-items: center; gap: 4px; font: var(--md-sys-typescale-body-small); color: var(--md-sys-color-on-surface-variant); text-decoration: none; transition: color 0.2s; }
    .c-email:hover { color: var(--md-sys-color-primary); }
    .focus-chips { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 8px; }

    .pipeline-cards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 48px; }
    .pipe-card { padding: 28px; border-radius: var(--md-sys-shape-corner-extra-large); background: var(--md-sys-color-surface-container-low); border: 1px solid var(--md-sys-color-outline-variant); }
    .pipe-num { width: 36px; height: 36px; border-radius: 50%; background: #2e7d32; color: white; display: flex; align-items: center; justify-content: center; font: var(--md-sys-typescale-label-large); margin-bottom: 16px; }
    .pipe-card h4 { margin-bottom: 8px; }

    @media (max-width: 1024px) { .subtypes-grid, .pipeline-cards { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 640px) { .module-hero { padding: 100px 0 48px; } .subtypes-grid, .pipeline-cards { grid-template-columns: 1fr; } .advisor-row { flex-direction: column; } }
  `],
})
export class TeamAdvisorsComponent {
  focusAreas = [
    { name: 'Scientific Direction', icon: 'science', desc: 'AI model validation, research methodology, and publication strategy' },
    { name: 'Clinical Strategy', icon: 'local_hospital', desc: 'Radiologist workflow integration, MRMC study design, clinical evidence' },
    { name: 'Technology Transfer', icon: 'swap_horiz', desc: 'University-to-industry pathways, IP strategy, and licensing models' },
    { name: 'Pharmaceutical R&D', icon: 'medication', desc: 'Diagnostic-therapeutic integration, imaging biomarkers, companion diagnostics' },
  ];

  advisors = [
    { name: 'Aasa Feragen', title: 'Professor, DTU Compute', institution: 'Department of Applied Mathematics and Computer Science, Technical University of Denmark', email: 'afhar@dtu.dk', bio: 'Specializes in geometric and topological methods in machine learning, with applications to medical image analysis. Leads research on shape analysis and representation learning for anatomical structures. Advises SIERRA on advanced mathematical foundations for medical imaging AI.', focuses: ['Shape Analysis', 'Topological ML', 'Medical Image Analysis', 'Representation Learning'] },
    { name: 'Rolf Henrik Berg', title: 'Professor, Head of Innovation, DTU Health Tech', institution: 'Department of Health Technology, Technical University of Denmark', email: 'robe@dtu.dk', bio: 'Expert in biosensor technologies and health technology innovation. Leads DTU\'s health technology innovation programs including university-industry collaboration frameworks. Guides Skolyn on translational research methodologies, technology transfer strategies, and academic partnership models.', focuses: ['Health Tech Innovation', 'Biosensors', 'Tech Transfer', 'Academic Partnerships'] },
    { name: 'Tomas Landh', title: 'Principal Investigator, Novo Nordisk', institution: 'Global R&D Business Development / Search & Evaluation', email: 'tolh@novonordisk.com', bio: 'Leads pharmaceutical R&D search and evaluation at Novo Nordisk, identifying breakthrough technologies for clinical development. Extensive experience in diagnostic-therapeutic integration and companion diagnostics. Advises on AI-pharmaceutical partnerships and commercialization pathways.', focuses: ['Pharma R&D', 'Companion Diagnostics', 'Business Development', 'Clinical Integration'] },
  ];

  engagement = [
    { title: 'Strategic Review', desc: 'Bi-annual deep-dive sessions reviewing research direction, clinical strategy, and market positioning' },
    { title: 'Technical Consultation', desc: 'Quarterly one-on-one sessions with department heads on specific technical and scientific challenges' },
    { title: 'Publication Review', desc: 'Pre-submission review of high-impact manuscripts, providing senior academic perspective and institutional endorsement' },
    { title: 'Network Access', desc: 'Introduction and facilitation of partnerships with academic institutions, clinical sites, and industry collaborators' },
  ];
}
