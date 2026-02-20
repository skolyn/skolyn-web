import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rhenium',
  imports: [RouterLink],
  template: `
    <section class="module-hero rhenium-bg">
      <div class="container">
        <a routerLink="/modules" class="back-link">
          <span class="material-symbols-outlined sz-20">arrow_back</span>
          All Modules
        </a>
        <div class="hero-grid">
          <div class="hero-text animate-in">
            <div class="element-badge">
              <span class="el-num">75</span>
              <span class="el-sym">Re</span>
              <span class="el-nm">Rhenium</span>
            </div>
            <h1 class="display-medium">Rhenium OS</h1>
            <p class="title-large module-tagline">MRI Intelligence Module</p>
            <p class="body-large hero-desc">
              High-fidelity MRI analysis with multi-sequence support covering the full
              spectrum of neurological, musculoskeletal, oncological, and cardiovascular imaging.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center">Supported MRI Subtypes</h2>
        <p class="body-large text-secondary text-center section-desc">
          14 specialized subtypes, each with tailored models, sequence-aware preprocessing,
          and specific XAI overlays.
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
        <h2 class="headline-large text-center">MRI Processing Pipeline</h2>
        <div class="pipeline-cards">
          <div class="pipe-card animate-in">
            <div class="pipe-num">1</div>
            <h4 class="title-medium">Multi-Sequence Input</h4>
            <p class="body-small text-secondary">
              T1, T1+C, T2, FLAIR, DWI, ADC, SWI, and more. Automated sequence
              recognition from DICOM header metadata.
            </p>
          </div>
          <div class="pipe-card animate-in animate-in-delay-1">
            <div class="pipe-num">2</div>
            <h4 class="title-medium">Preprocessing</h4>
            <p class="body-small text-secondary">
              Skull stripping, bias field correction, co-registration, intensity
              normalization, and motion artifact detection.
            </p>
          </div>
          <div class="pipe-card animate-in animate-in-delay-2">
            <div class="pipe-num">3</div>
            <h4 class="title-medium">4-Stage Analysis</h4>
            <p class="body-small text-secondary">
              Detection, classification, subtyping, and staging with multi-class
              probability outputs and differential diagnosis ranking.
            </p>
          </div>
          <div class="pipe-card animate-in animate-in-delay-3">
            <div class="pipe-num">4</div>
            <h4 class="title-medium">XAI Output</h4>
            <p class="body-small text-secondary">
              Grad-CAM++ overlays on original sequences, SHAP feature attribution,
              and calibrated confidence scoring.
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
            <span class="material-symbols-outlined">view_in_ar</span>
            <div>
              <h4 class="title-small">3D Volumetric Analysis</h4>
              <p class="body-small text-secondary">Lesion volumetrics, tumor measurements, and structured 3D segmentation</p>
            </div>
          </div>
          <div class="cap-item">
            <span class="material-symbols-outlined">timeline</span>
            <div>
              <h4 class="title-small">Longitudinal Comparison</h4>
              <p class="body-small text-secondary">Auto-registered prior comparisons for treatment response tracking</p>
            </div>
          </div>
          <div class="cap-item">
            <span class="material-symbols-outlined">psychology</span>
            <div>
              <h4 class="title-small">Multi-Sequence Fusion</h4>
              <p class="body-small text-secondary">Cross-sequence feature extraction for complex diagnostic cases</p>
            </div>
          </div>
          <div class="cap-item">
            <span class="material-symbols-outlined">notification_important</span>
            <div>
              <h4 class="title-small">STAT Alerts</h4>
              <p class="body-small text-secondary">Sub-30-second critical finding escalation for acute pathologies</p>
            </div>
          </div>
          <div class="cap-item">
            <span class="material-symbols-outlined">child_care</span>
            <div>
              <h4 class="title-small">Pediatric Models</h4>
              <p class="body-small text-secondary">Age-adjusted normative data and pediatric-specific pathology detection</p>
            </div>
          </div>
          <div class="cap-item">
            <span class="material-symbols-outlined">description</span>
            <div>
              <h4 class="title-small">Structured Reporting</h4>
              <p class="body-small text-secondary">Automated BI-RADS, PI-RADS, and custom structured templates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .module-hero {
      padding: 120px 0 64px; position: relative;
    }
    .rhenium-bg {
      background: linear-gradient(135deg, var(--color-rhenium-light), #e8f0fe, #f8f9fa);
    }
    .back-link {
      display: inline-flex; align-items: center; gap: 4px;
      font: var(--md-sys-typescale-label-large); color: var(--md-sys-color-on-surface-variant);
      text-decoration: none; margin-bottom: 32px;
    }
    .back-link:hover { color: var(--md-sys-color-primary); text-decoration: none; }
    .element-badge {
      display: inline-flex; flex-direction: column; align-items: center;
      padding: 12px 16px; border: 2px solid var(--color-rhenium);
      border-radius: var(--md-sys-shape-corner-medium); margin-bottom: 24px;
      background: var(--md-sys-color-surface-container);
    }
    .el-num { font: var(--md-sys-typescale-label-small); color: var(--md-sys-color-on-surface-variant); }
    .el-sym { font-size: 40px; font-weight: 700; color: var(--color-rhenium); line-height: 1.1; }
    .el-nm { font: var(--md-sys-typescale-label-medium); color: var(--md-sys-color-on-surface-variant); }
    .module-tagline { color: var(--color-rhenium); margin-bottom: 16px; }
    .hero-desc { max-width: 560px; color: var(--md-sys-color-on-surface-variant); }
    .section-desc { max-width: 640px; margin: 16px auto 0; }

    .subtypes-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 48px; }
    .subtype-card {
      padding: 24px; border-radius: var(--md-sys-shape-corner-large);
      border: 1px solid var(--md-sys-color-outline-variant); text-align: center;
      transition: all var(--md-sys-motion-duration-medium2) var(--md-sys-motion-easing-standard);
    }
    .subtype-card:hover { box-shadow: var(--md-sys-elevation-1); border-color: var(--color-rhenium); }
    .subtype-card .material-symbols-outlined { color: var(--color-rhenium); margin-bottom: 12px; }
    .subtype-card h4 { margin-bottom: 6px; }

    .alt-section { background: var(--md-sys-color-surface-container-low); }
    .pipeline-cards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 48px; }
    .pipe-card {
      padding: 28px; border-radius: var(--md-sys-shape-corner-extra-large);
      background: var(--md-sys-color-surface); border: 1px solid var(--md-sys-color-outline-variant);
    }
    .pipe-num {
      width: 36px; height: 36px; border-radius: 50%;
      background: var(--color-rhenium); color: var(--md-sys-color-on-primary);
      display: flex; align-items: center; justify-content: center;
      font: var(--md-sys-typescale-label-large); margin-bottom: 16px;
    }
    .pipe-card h4 { margin-bottom: 8px; }

    .caps-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 48px; }
    .cap-item {
      display: flex; gap: 12px; padding: 20px;
      border-radius: var(--md-sys-shape-corner-large);
      border: 1px solid var(--md-sys-color-outline-variant);
    }
    .cap-item .material-symbols-outlined { color: var(--color-rhenium); flex-shrink: 0; }
    .cap-item h4 { margin-bottom: 4px; }

    @media (max-width: 1024px) {
      .subtypes-grid, .pipeline-cards { grid-template-columns: repeat(2, 1fr); }
      .caps-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 640px) {
      .module-hero { padding: 100px 0 48px; }
      .subtypes-grid, .pipeline-cards, .caps-grid { grid-template-columns: 1fr; }
    }
  `],
})
export class RheniumComponent {
  subtypes = [
    { name: 'Brain MRI', icon: 'psychology', desc: 'Tumors, strokes, MS, neurodegenerative diseases' },
    { name: 'Breast MRI', icon: 'ecg_heart', desc: 'Dynamic contrast: BI-RADS, mass characterization' },
    { name: 'Spine MRI', icon: 'straighten', desc: 'Disc herniation, stenosis, cord compression' },
    { name: 'Cardiac MRI', icon: 'cardiology', desc: 'Function, perfusion, viability mapping' },
    { name: 'Abdominal MRI', icon: 'gastroenterology', desc: 'Liver (LI-RADS), pancreas, kidney lesions' },
    { name: 'MSK MRI', icon: 'orthopedics', desc: 'Joint, ligament, tendon, bone marrow' },
    { name: 'Head & Neck', icon: 'face', desc: 'Orbits, sinuses, skull base pathology' },
    { name: 'Prostate MRI', icon: 'biotech', desc: 'Multi-parametric: PI-RADS scoring' },
    { name: 'Whole-Body MRI', icon: 'accessibility_new', desc: 'Oncologic staging, metastasis screening' },
    { name: 'Pediatric MRI', icon: 'child_care', desc: 'Age-adjusted models, congenital anomalies' },
    { name: 'Vascular MRA', icon: 'water_drop', desc: 'Arterial and venous malformations, stenosis' },
    { name: 'Fetal MRI', icon: 'pregnant_woman', desc: 'Prenatal brain, body, and placental assessment' },
    { name: 'Liver MRI', icon: 'science', desc: 'Dedicated hepatocyte phase and MRCP analysis' },
    { name: 'Pelvic MRI', icon: 'scan', desc: 'Gynecologic, rectal, and bladder imaging' }
  ];
}
