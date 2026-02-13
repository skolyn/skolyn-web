import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-scandium',
  imports: [RouterLink],
  template: `
    <section class="module-hero scandium-bg">
      <div class="container">
        <a routerLink="/modules" class="back-link">
          <span class="material-symbols-outlined sz-20">arrow_back</span>
          All Modules
        </a>
        <div class="hero-text animate-in">
          <div class="element-badge">
            <span class="el-num">21</span>
            <span class="el-sym">Sc</span>
            <span class="el-nm">Scandium</span>
          </div>
          <h1 class="display-medium">Scandium OS</h1>
          <p class="title-large module-tagline">Ultrasound Intelligence Module</p>
          <p class="body-large hero-desc">
            Universal ultrasound analysis from fetal imaging to cardiac echocardiography and
            point-of-care protocols, with real-time video stream processing.
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center">Supported Ultrasound Subtypes</h2>
        <p class="body-large text-secondary text-center section-desc">
          16 subtypes covering every clinical ultrasound application with real-time and archived analysis.
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
        <h2 class="headline-large text-center">Ultrasound Processing Pipeline</h2>
        <div class="pipeline-cards">
          <div class="pipe-card animate-in">
            <div class="pipe-num">1</div>
            <h4 class="title-medium">Real-Time Stream</h4>
            <p class="body-small text-secondary">
              Live video feed analysis with frame-by-frame inference and temporal
              consistency enforcement across cine loops.
            </p>
          </div>
          <div class="pipe-card animate-in animate-in-delay-1">
            <div class="pipe-num">2</div>
            <h4 class="title-medium">Preprocessing</h4>
            <p class="body-small text-secondary">
              Speckle noise reduction, time-gain compensation normalization,
              and B-mode/Doppler signal separation.
            </p>
          </div>
          <div class="pipe-card animate-in animate-in-delay-2">
            <div class="pipe-num">3</div>
            <h4 class="title-medium">4-Stage Analysis</h4>
            <p class="body-small text-secondary">
              Anatomy recognition, pathology detection, classification, and
              standardized scoring with biometric measurements.
            </p>
          </div>
          <div class="pipe-card animate-in animate-in-delay-3">
            <div class="pipe-num">4</div>
            <h4 class="title-medium">Measurement</h4>
            <p class="body-small text-secondary">
              Automated biometric measurements, TI-RADS/BI-RADS scoring,
              and standardized reporting templates.
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
            <span class="material-symbols-outlined">videocam</span>
            <div>
              <h4 class="title-small">Real-Time Processing</h4>
              <p class="body-small text-secondary">Live video stream analysis for point-of-care and intraoperative guidance</p>
            </div>
          </div>
          <div class="cap-item">
            <span class="material-symbols-outlined">pregnant_woman</span>
            <div>
              <h4 class="title-small">Fetal Biometry</h4>
              <p class="body-small text-secondary">Automated BPD, HC, AC, FL measurements with growth percentile tracking</p>
            </div>
          </div>
          <div class="cap-item">
            <span class="material-symbols-outlined">cardiology</span>
            <div>
              <h4 class="title-small">Echocardiography</h4>
              <p class="body-small text-secondary">EF calculation, wall motion analysis, and valve assessment</p>
            </div>
          </div>
          <div class="cap-item">
            <span class="material-symbols-outlined">edgesensor_high</span>
            <div>
              <h4 class="title-small">Edge Deployment</h4>
              <p class="body-small text-secondary">Lightweight INT8 models for portable ultrasound devices and field use</p>
            </div>
          </div>
          <div class="cap-item">
            <span class="material-symbols-outlined">school</span>
            <div>
              <h4 class="title-small">Guided Acquisition</h4>
              <p class="body-small text-secondary">Real-time feedback for probe positioning and image quality optimization</p>
            </div>
          </div>
          <div class="cap-item">
            <span class="material-symbols-outlined">water_drop</span>
            <div>
              <h4 class="title-small">Doppler Analysis</h4>
              <p class="body-small text-secondary">Spectral and color Doppler waveform analysis with velocity measurements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .module-hero { padding: 120px 0 64px; }
    .scandium-bg { background: linear-gradient(135deg, var(--color-scandium-light), #e8f5e9, #f8f9fa); }
    .back-link { display: inline-flex; align-items: center; gap: 4px; font: var(--md-sys-typescale-label-large); color: var(--md-sys-color-on-surface-variant); text-decoration: none; margin-bottom: 32px; }
    .back-link:hover { color: var(--md-sys-color-primary); text-decoration: none; }
    .element-badge { display: inline-flex; flex-direction: column; align-items: center; padding: 12px 16px; border: 2px solid var(--color-scandium); border-radius: var(--md-sys-shape-corner-medium); margin-bottom: 24px; background: rgba(255,255,255,0.7); }
    .el-num { font: var(--md-sys-typescale-label-small); color: var(--md-sys-color-on-surface-variant); }
    .el-sym { font-size: 40px; font-weight: 700; color: var(--color-scandium); line-height: 1.1; }
    .el-nm { font: var(--md-sys-typescale-label-medium); color: var(--md-sys-color-on-surface-variant); }
    .module-tagline { color: var(--color-scandium); margin-bottom: 16px; }
    .hero-desc { max-width: 560px; color: var(--md-sys-color-on-surface-variant); }
    .section-desc { max-width: 640px; margin: 16px auto 0; }
    .subtypes-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 48px; }
    .subtype-card { padding: 24px; border-radius: var(--md-sys-shape-corner-large); border: 1px solid var(--md-sys-color-outline-variant); text-align: center; transition: all var(--md-sys-motion-duration-medium2) var(--md-sys-motion-easing-standard); }
    .subtype-card:hover { box-shadow: var(--md-sys-elevation-1); border-color: var(--color-scandium); }
    .subtype-card .material-symbols-outlined { color: var(--color-scandium); margin-bottom: 12px; }
    .subtype-card h4 { margin-bottom: 6px; }
    .alt-section { background: var(--md-sys-color-surface-container-low); }
    .pipeline-cards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 48px; }
    .pipe-card { padding: 28px; border-radius: var(--md-sys-shape-corner-extra-large); background: var(--md-sys-color-surface); border: 1px solid var(--md-sys-color-outline-variant); }
    .pipe-num { width: 36px; height: 36px; border-radius: 50%; background: var(--color-scandium); color: white; display: flex; align-items: center; justify-content: center; font: var(--md-sys-typescale-label-large); margin-bottom: 16px; }
    .pipe-card h4 { margin-bottom: 8px; }
    .caps-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 48px; }
    .cap-item { display: flex; gap: 12px; padding: 20px; border-radius: var(--md-sys-shape-corner-large); border: 1px solid var(--md-sys-color-outline-variant); }
    .cap-item .material-symbols-outlined { color: var(--color-scandium); flex-shrink: 0; }
    .cap-item h4 { margin-bottom: 4px; }
    @media (max-width: 1024px) { .subtypes-grid, .pipeline-cards { grid-template-columns: repeat(2, 1fr); } .caps-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 640px) { .module-hero { padding: 100px 0 48px; } .subtypes-grid, .pipeline-cards, .caps-grid { grid-template-columns: 1fr; } }
  `],
})
export class ScandiumComponent {
  subtypes = [
    { name: 'Obstetric US', icon: 'pregnant_woman', desc: 'Fetal biometry, anatomy, growth tracking' },
    { name: 'Breast US', icon: 'ecg_heart', desc: 'Mass characterization, BI-RADS scoring' },
    { name: 'Abdominal US', icon: 'gastroenterology', desc: 'Liver, gallbladder, kidney, spleen' },
    { name: 'Thyroid US', icon: 'biotech', desc: 'Nodule assessment, TI-RADS scoring' },
    { name: 'Echocardiography', icon: 'cardiology', desc: 'Ejection fraction, wall motion, valves' },
    { name: 'Vascular Doppler', icon: 'water_drop', desc: 'DVT, carotid stenosis, ABI' },
    { name: 'MSK US', icon: 'skeleton', desc: 'Tendon, ligament, joint assessment' },
    { name: 'POCUS', icon: 'local_hospital', desc: 'eFAST, lung US, cardiac POCUS' },
    { name: 'Neonatal Cranial', icon: 'child_care', desc: 'IVH, hydrocephalus, PVL screening' },
    { name: 'CEUS', icon: 'science', desc: 'Contrast-enhanced liver, kidney, focal lesions' },
    { name: 'Gynecological', icon: 'health_and_safety', desc: 'Ovarian, uterine, adnexal pathology' },
    { name: 'Scrotal US', icon: 'scan', desc: 'Testicular torsion, masses, varicocele' },
    { name: 'Renal US', icon: 'nephrology', desc: 'Stones, hydronephrosis, RAS Doppler' },
    { name: 'Lung US', icon: 'respiratory_rate', desc: 'Pleural effusion, consolidation, B-lines' },
    { name: 'Pediatric US', icon: 'escalator_warning', desc: 'Hip dysplasia, pyloric stenosis, appendix' },
    { name: 'Interventional', icon: 'precision_manufacturing', desc: 'Needle guidance, biopsy assistance' }
  ];
}
