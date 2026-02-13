import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-seaborgium',
  imports: [RouterLink],
  template: `
    <section class="module-hero seaborgium-bg">
      <div class="container">
        <a routerLink="/modules" class="back-link">
          <span class="material-symbols-outlined sz-20">arrow_back</span>
          All Modules
        </a>
        <div class="hero-text animate-in">
          <div class="element-badge">
            <span class="el-num">106</span>
            <span class="el-sym">Sg</span>
            <span class="el-nm">Seaborgium</span>
          </div>
          <h1 class="display-medium">Seaborgium OS</h1>
          <p class="title-large module-tagline">CT Intelligence Module</p>
          <p class="body-large hero-desc">
            Rapid cross-sectional CT analysis for emergency, oncology, and trauma imaging
            with sub-minute critical finding alerts and automated RECIST measurements.
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center">Supported CT Subtypes</h2>
        <p class="body-large text-secondary text-center section-desc">
          13 specialized subtypes optimized for high-speed volumetric analysis.
        </p>
        <div class="subtypes-grid">
          @for (subtype of subtypes; track subtype.name) {
            <div class="subtype-card animate-in">
              <span class="material-symbols-outlined sz-40">{{ subtype.icon }}</span>
              <h4 class="title-medium">{{ subtype.name }}</h4>
              <p class="body-small text-secondary">{{ subtype.desc }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section alt-section">
      <div class="container">
        <h2 class="headline-large text-center">CT Processing Pipeline</h2>
        <div class="pipeline-cards">
          <div class="pipe-card animate-in">
            <div class="pipe-num">1</div>
            <h4 class="title-medium">DICOM Ingestion</h4>
            <p class="body-small text-secondary">
              Automated series sorting, contrast phase identification, and multi-phase alignment
              for dynamic contrast studies.
            </p>
          </div>
          <div class="pipe-card animate-in animate-in-delay-1">
            <div class="pipe-num">2</div>
            <h4 class="title-medium">Preprocessing</h4>
            <p class="body-small text-secondary">
              Hounsfield unit calibration, windowing optimization, noise reduction,
              and motion artifact correction for volumetric data.
            </p>
          </div>
          <div class="pipe-card animate-in animate-in-delay-2">
            <div class="pipe-num">3</div>
            <h4 class="title-medium">4-Stage Analysis</h4>
            <p class="body-small text-secondary">
              Detection, classification, subtyping, and staging with 3D spatial
              localization and multi-organ analysis.
            </p>
          </div>
          <div class="pipe-card animate-in animate-in-delay-3">
            <div class="pipe-num">4</div>
            <h4 class="title-medium">Reporting</h4>
            <p class="body-small text-secondary">
              RECIST-based measurement, volumetric quantification, structured
              reports with scoring systems (LIRADS, Lung-RADS).
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center">Key Capabilities</h2>
        <div class="caps-grid">
          <div class="cap-item">
            <span class="material-symbols-outlined">emergency</span>
            <div>
              <h4 class="title-small">Emergency Triage</h4>
              <p class="body-small text-secondary">Sub-30-second intracranial hemorrhage and PE detection with STAT alerts</p>
            </div>
          </div>
          <div class="cap-item">
            <span class="material-symbols-outlined">view_in_ar</span>
            <div>
              <h4 class="title-small">3D Volumetric</h4>
              <p class="body-small text-secondary">Automated organ segmentation and lesion volumetric quantification</p>
            </div>
          </div>
          <div class="cap-item">
            <span class="material-symbols-outlined">straighten</span>
            <div>
              <h4 class="title-small">RECIST Automation</h4>
              <p class="body-small text-secondary">Automated target lesion measurement for oncology response assessment</p>
            </div>
          </div>
          <div class="cap-item">
            <span class="material-symbols-outlined">cardiology</span>
            <div>
              <h4 class="title-small">Calcium Scoring</h4>
              <p class="body-small text-secondary">Automated Agatston scoring and coronary artery analysis</p>
            </div>
          </div>
          <div class="cap-item">
            <span class="material-symbols-outlined">personal_injury</span>
            <div>
              <h4 class="title-small">Trauma Protocol</h4>
              <p class="body-small text-secondary">Multi-organ injury detection with hemorrhage and fracture identification</p>
            </div>
          </div>
          <div class="cap-item">
            <span class="material-symbols-outlined">water_drop</span>
            <div>
              <h4 class="title-small">Vascular Analysis</h4>
              <p class="body-small text-secondary">CTA stenosis quantification, aneurysm, and dissection detection</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .module-hero { padding: 120px 0 64px; }
    .seaborgium-bg { background: linear-gradient(135deg, var(--color-seaborgium-light), #fff3e0, #f8f9fa); }
    .back-link { display: inline-flex; align-items: center; gap: 4px; font: var(--md-sys-typescale-label-large); color: var(--md-sys-color-on-surface-variant); text-decoration: none; margin-bottom: 32px; }
    .back-link:hover { color: var(--md-sys-color-primary); text-decoration: none; }
    .element-badge { display: inline-flex; flex-direction: column; align-items: center; padding: 12px 16px; border: 2px solid var(--color-seaborgium); border-radius: var(--md-sys-shape-corner-medium); margin-bottom: 24px; background: rgba(255,255,255,0.7); }
    .el-num { font: var(--md-sys-typescale-label-small); color: var(--md-sys-color-on-surface-variant); }
    .el-sym { font-size: 40px; font-weight: 700; color: var(--color-seaborgium); line-height: 1.1; }
    .el-nm { font: var(--md-sys-typescale-label-medium); color: var(--md-sys-color-on-surface-variant); }
    .module-tagline { color: var(--color-seaborgium); margin-bottom: 16px; }
    .hero-desc { max-width: 560px; color: var(--md-sys-color-on-surface-variant); }
    .section-desc { max-width: 640px; margin: 16px auto 0; }
    .subtypes-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 48px; }
    .subtype-card { padding: 24px; border-radius: var(--md-sys-shape-corner-large); border: 1px solid var(--md-sys-color-outline-variant); text-align: center; transition: all var(--md-sys-motion-duration-medium2) var(--md-sys-motion-easing-standard); }
    .subtype-card:hover { box-shadow: var(--md-sys-elevation-1); border-color: var(--color-seaborgium); }
    .subtype-card .material-symbols-outlined { color: var(--color-seaborgium); margin-bottom: 12px; }
    .subtype-card h4 { margin-bottom: 6px; }
    .alt-section { background: var(--md-sys-color-surface-container-low); }
    .pipeline-cards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 48px; }
    .pipe-card { padding: 28px; border-radius: var(--md-sys-shape-corner-extra-large); background: var(--md-sys-color-surface); border: 1px solid var(--md-sys-color-outline-variant); }
    .pipe-num { width: 36px; height: 36px; border-radius: 50%; background: var(--color-seaborgium); color: white; display: flex; align-items: center; justify-content: center; font: var(--md-sys-typescale-label-large); margin-bottom: 16px; }
    .pipe-card h4 { margin-bottom: 8px; }
    .caps-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 48px; }
    .cap-item { display: flex; gap: 12px; padding: 20px; border-radius: var(--md-sys-shape-corner-large); border: 1px solid var(--md-sys-color-outline-variant); }
    .cap-item .material-symbols-outlined { color: var(--color-seaborgium); flex-shrink: 0; }
    .cap-item h4 { margin-bottom: 4px; }
    @media (max-width: 1024px) { .subtypes-grid, .pipeline-cards { grid-template-columns: repeat(2, 1fr); } .caps-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 640px) { .module-hero { padding: 100px 0 48px; } .subtypes-grid, .pipeline-cards, .caps-grid { grid-template-columns: 1fr; } }
  `],
})
export class SeaborgiumComponent {
  subtypes = [
    { name: 'Brain CT', icon: 'psychology', desc: 'Hemorrhage, stroke, tumors, hydrocephalus' },
    { name: 'Chest CT', icon: 'respiratory_rate', desc: 'Lung nodules, PE, ILD, Lung-RADS' },
    { name: 'Abdominal CT', icon: 'gastroenterology', desc: 'Liver, pancreas, kidney, bowel pathology' },
    { name: 'Vascular CTA', icon: 'water_drop', desc: 'Stenosis, aneurysm, dissection' },
    { name: 'Cardiac CTA', icon: 'cardiology', desc: 'Coronary artery, calcium scoring' },
    { name: 'Head & Neck CT', icon: 'face', desc: 'Sinuses, orbits, temporal bone' },
    { name: 'MSK CT', icon: 'skeleton', desc: 'Complex fractures, joint assessment' },
    { name: 'Trauma CT', icon: 'emergency', desc: 'Multi-organ injury, hemorrhage detection' },
    { name: 'Spine CT', icon: 'straighten', desc: 'Fractures, stenosis, disc pathology' },
    { name: 'Pediatric CT', icon: 'child_care', desc: 'Low-dose protocols, age-adjusted analysis' },
    { name: 'Oncology CT', icon: 'biotech', desc: 'Staging, RECIST measurement, response' },
    { name: 'Dental CBCT', icon: 'dentistry', desc: 'TMJ, implant planning, pathology' },
    { name: 'Virtual Colonoscopy', icon: 'science', desc: 'Polyp detection, C-RADS reporting' }
  ];
}
