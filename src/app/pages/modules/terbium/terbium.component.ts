import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-terbium',
  imports: [RouterLink],
  template: `
    <section class="module-hero terbium-bg">
      <div class="container">
        <a routerLink="/modules" class="back-link">
          <span class="material-symbols-outlined sz-20">arrow_back</span>
          All Modules
        </a>
        <div class="hero-text animate-in">
          <div class="element-badge">
            <span class="el-num">65</span>
            <span class="el-sym">Tb</span>
            <span class="el-nm">Terbium</span>
          </div>
          <h1 class="display-medium">Terbium OS</h1>
          <p class="title-large module-tagline">X-Ray Intelligence Module</p>
          <p class="body-large hero-desc">
            Foundational X-ray analysis covering chest radiography, bone imaging,
            dental, DXA, mammography, and pediatric radiography with sub-second inference.
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center">Supported X-Ray Subtypes</h2>
        <p class="body-large text-secondary text-center section-desc">
          13 subtypes providing comprehensive plain radiography analysis with critical finding detection.
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
        <h2 class="headline-large text-center">X-Ray Processing Pipeline</h2>
        <div class="pipeline-cards">
          <div class="pipe-card animate-in">
            <div class="pipe-num">1</div>
            <h4 class="title-medium">Image Input</h4>
            <p class="body-small text-secondary">
              DICOM and standard image formats with automated view classification
              (PA, AP, Lateral) and quality assessment.
            </p>
          </div>
          <div class="pipe-card animate-in animate-in-delay-1">
            <div class="pipe-num">2</div>
            <h4 class="title-medium">Preprocessing</h4>
            <p class="body-small text-secondary">
              Histogram equalization, windowing optimization, rotation correction,
              and collimation detection.
            </p>
          </div>
          <div class="pipe-card animate-in animate-in-delay-2">
            <div class="pipe-num">3</div>
            <h4 class="title-medium">4-Stage Analysis</h4>
            <p class="body-small text-secondary">
              Multi-label detection with anatomical localization, disease classification,
              severity grading, and measurement extraction.
            </p>
          </div>
          <div class="pipe-card animate-in animate-in-delay-3">
            <div class="pipe-num">4</div>
            <h4 class="title-medium">Reporting</h4>
            <p class="body-small text-secondary">
              Structured reports, Cobb angle measurement, bone age assessment,
              and automated STAT alerts for critical findings.
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
            <span class="material-symbols-outlined">speed</span>
            <div>
              <h4 class="title-small">Sub-Second Inference</h4>
              <p class="body-small text-secondary">Fastest module with single 2D image processing under 1 second</p>
            </div>
          </div>
          <div class="cap-item">
            <span class="material-symbols-outlined">emergency</span>
            <div>
              <h4 class="title-small">Pneumothorax STAT</h4>
              <p class="body-small text-secondary">Immediate critical alerts for pneumothorax, tension, and tube malposition</p>
            </div>
          </div>
          <div class="cap-item">
            <span class="material-symbols-outlined">straighten</span>
            <div>
              <h4 class="title-small">Cobb Angle</h4>
              <p class="body-small text-secondary">Automated scoliosis measurement with vertebral segmentation</p>
            </div>
          </div>
          <div class="cap-item">
            <span class="material-symbols-outlined">child_care</span>
            <div>
              <h4 class="title-small">Bone Age</h4>
              <p class="body-small text-secondary">Greulich-Pyle assessment with percentile-based reporting</p>
            </div>
          </div>
          <div class="cap-item">
            <span class="material-symbols-outlined">grid_on</span>
            <div>
              <h4 class="title-small">DXA Analysis</h4>
              <p class="body-small text-secondary">T-score and Z-score calculation with WHO fracture risk output</p>
            </div>
          </div>
          <div class="cap-item">
            <span class="material-symbols-outlined">dentistry</span>
            <div>
              <h4 class="title-small">Dental OPG</h4>
              <p class="body-small text-secondary">Tooth-level numbering, caries, periapical pathology detection</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .module-hero { padding: 120px 0 64px; }
    .terbium-bg { background: linear-gradient(135deg, var(--color-terbium-light), #f3e5f5, #f8f9fa); }
    .back-link { display: inline-flex; align-items: center; gap: 4px; font: var(--md-sys-typescale-label-large); color: var(--md-sys-color-on-surface-variant); text-decoration: none; margin-bottom: 32px; }
    .back-link:hover { color: var(--md-sys-color-primary); text-decoration: none; }
    .element-badge { display: inline-flex; flex-direction: column; align-items: center; padding: 12px 16px; border: 2px solid var(--color-terbium); border-radius: var(--md-sys-shape-corner-medium); margin-bottom: 24px; background: rgba(255,255,255,0.7); }
    .el-num { font: var(--md-sys-typescale-label-small); color: var(--md-sys-color-on-surface-variant); }
    .el-sym { font-size: 40px; font-weight: 700; color: var(--color-terbium); line-height: 1.1; }
    .el-nm { font: var(--md-sys-typescale-label-medium); color: var(--md-sys-color-on-surface-variant); }
    .module-tagline { color: var(--color-terbium); margin-bottom: 16px; }
    .hero-desc { max-width: 560px; color: var(--md-sys-color-on-surface-variant); }
    .section-desc { max-width: 640px; margin: 16px auto 0; }
    .subtypes-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 48px; }
    .subtype-card { padding: 24px; border-radius: var(--md-sys-shape-corner-large); border: 1px solid var(--md-sys-color-outline-variant); text-align: center; transition: all var(--md-sys-motion-duration-medium2) var(--md-sys-motion-easing-standard); }
    .subtype-card:hover { box-shadow: var(--md-sys-elevation-1); border-color: var(--color-terbium); }
    .subtype-card .material-symbols-outlined { color: var(--color-terbium); margin-bottom: 12px; }
    .subtype-card h4 { margin-bottom: 6px; }
    .alt-section { background: var(--md-sys-color-surface-container-low); }
    .pipeline-cards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 48px; }
    .pipe-card { padding: 28px; border-radius: var(--md-sys-shape-corner-extra-large); background: var(--md-sys-color-surface); border: 1px solid var(--md-sys-color-outline-variant); }
    .pipe-num { width: 36px; height: 36px; border-radius: 50%; background: var(--color-terbium); color: white; display: flex; align-items: center; justify-content: center; font: var(--md-sys-typescale-label-large); margin-bottom: 16px; }
    .pipe-card h4 { margin-bottom: 8px; }
    .caps-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 48px; }
    .cap-item { display: flex; gap: 12px; padding: 20px; border-radius: var(--md-sys-shape-corner-large); border: 1px solid var(--md-sys-color-outline-variant); }
    .cap-item .material-symbols-outlined { color: var(--color-terbium); flex-shrink: 0; }
    .cap-item h4 { margin-bottom: 4px; }
    @media (max-width: 1024px) { .subtypes-grid, .pipeline-cards { grid-template-columns: repeat(2, 1fr); } .caps-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 640px) { .module-hero { padding: 100px 0 48px; } .subtypes-grid, .pipeline-cards, .caps-grid { grid-template-columns: 1fr; } }
  `],
})
export class TerbiumComponent {
  subtypes = [
    { name: 'Chest X-Ray', icon: 'respiratory_rate', desc: 'Pneumonia, pneumothorax, cardiomegaly, nodules' },
    { name: 'Bone X-Ray', icon: 'orthopedics', desc: 'Fractures, tumors, metabolic bone disease' },
    { name: 'Spine X-Ray', icon: 'straighten', desc: 'Scoliosis, fractures, alignment, degeneration' },
    { name: 'Joint X-Ray', icon: 'accessibility_new', desc: 'Arthritis, dislocations, joint space analysis' },
    { name: 'Abdominal X-Ray', icon: 'gastroenterology', desc: 'Obstruction, free air, calcifications' },
    { name: 'Dental OPG', icon: 'dentistry', desc: 'Caries, periapical lesions, TMJ, tooth numbering' },
    { name: 'Pediatric X-Ray', icon: 'child_care', desc: 'Bone age, growth plate, foreign body' },
    { name: 'DXA', icon: 'grid_on', desc: 'Bone density, T-score, fracture risk' },
    { name: 'Mammography', icon: 'ecg_heart', desc: 'BI-RADS, mass, calcification, asymmetry' },
    { name: 'Fluoroscopy', icon: 'movie', desc: 'Barium swallow, voiding, dynamic studies' },
    { name: 'Trauma Series', icon: 'emergency', desc: 'Multi-view trauma assessment, fracture detection' },
    { name: 'Hand/Wrist', icon: 'pan_tool', desc: 'Bone age, fractures, arthritis assessment' },
    { name: 'Intraoperative', icon: 'precision_manufacturing', desc: 'Implant positioning, alignment verification' }
  ];
}
