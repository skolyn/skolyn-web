import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-modules',
  imports: [RouterLink],
  template: `
    <section class="page-hero">
      <div class="container">
        <div class="hero-label">
          <span class="material-symbols-outlined sz-20">view_module</span>
          Diagnostic Modules
        </div>
        <h1 class="display-medium animate-in">Four Modules.<br>Every Modality.</h1>
        <p class="body-large text-secondary hero-desc animate-in animate-in-delay-1">
          Purpose-built AI operating systems for each major medical imaging modality,
          named after chemical elements reflecting their scientific nature.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="modules-list">
          @for (mod of modules; track mod.symbol) {
            <a [routerLink]="mod.route" class="module-row" [class]="mod.class">
              <div class="module-element-tile">
                <span class="el-num">{{ mod.atomicNumber }}</span>
                <span class="el-sym">{{ mod.symbol }}</span>
                <span class="el-nm">{{ mod.name }}</span>
              </div>
              <div class="module-details">
                <h2 class="headline-medium">{{ mod.osName }}</h2>
                <p class="title-medium module-modality">{{ mod.modality }} Intelligence Module</p>
                <p class="body-large text-secondary">{{ mod.description }}</p>
                <div class="subtype-chips">
                  @for (sub of mod.subtypes; track sub) {
                    <span class="md-chip">{{ sub }}</span>
                  }
                </div>
              </div>
              <div class="module-arrow">
                <span class="material-symbols-outlined">arrow_forward</span>
              </div>
            </a>
          }
        </div>
      </div>
    </section>

    <section class="section comparison-section">
      <div class="container">
        <h2 class="headline-large text-center">Module Comparison</h2>
        <div class="table-wrapper">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th><span class="th-dot rhenium"></span>Rhenium OS</th>
                <th><span class="th-dot seaborgium"></span>Seaborgium OS</th>
                <th><span class="th-dot scandium"></span>Scandium OS</th>
                <th><span class="th-dot terbium"></span>Terbium OS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Modality</td>
                <td>MRI</td>
                <td>CT</td>
                <td>Ultrasound</td>
                <td>X-Ray</td>
              </tr>
              <tr>
                <td>Subtypes</td>
                <td>14</td>
                <td>13</td>
                <td>16</td>
                <td>13</td>
              </tr>
              <tr>
                <td>Real-Time Inference</td>
                <td><span class="material-symbols-outlined sz-20 check">check_circle</span></td>
                <td><span class="material-symbols-outlined sz-20 check">check_circle</span></td>
                <td><span class="material-symbols-outlined sz-20 check">check_circle</span></td>
                <td><span class="material-symbols-outlined sz-20 check">check_circle</span></td>
              </tr>
              <tr>
                <td>XAI Overlays</td>
                <td><span class="material-symbols-outlined sz-20 check">check_circle</span></td>
                <td><span class="material-symbols-outlined sz-20 check">check_circle</span></td>
                <td><span class="material-symbols-outlined sz-20 check">check_circle</span></td>
                <td><span class="material-symbols-outlined sz-20 check">check_circle</span></td>
              </tr>
              <tr>
                <td>STAT Alerts</td>
                <td><span class="material-symbols-outlined sz-20 check">check_circle</span></td>
                <td><span class="material-symbols-outlined sz-20 check">check_circle</span></td>
                <td><span class="material-symbols-outlined sz-20 check">check_circle</span></td>
                <td><span class="material-symbols-outlined sz-20 check">check_circle</span></td>
              </tr>
              <tr>
                <td>Structured Reporting</td>
                <td><span class="material-symbols-outlined sz-20 check">check_circle</span></td>
                <td><span class="material-symbols-outlined sz-20 check">check_circle</span></td>
                <td><span class="material-symbols-outlined sz-20 check">check_circle</span></td>
                <td><span class="material-symbols-outlined sz-20 check">check_circle</span></td>
              </tr>
              <tr>
                <td>Pediatric Models</td>
                <td><span class="material-symbols-outlined sz-20 check">check_circle</span></td>
                <td><span class="material-symbols-outlined sz-20 check">check_circle</span></td>
                <td><span class="material-symbols-outlined sz-20 check">check_circle</span></td>
                <td><span class="material-symbols-outlined sz-20 check">check_circle</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .page-hero {
      padding: 120px 0 64px; background: var(--md-sys-color-surface-container-low); text-align: center;
    }
    .hero-label {
      display: inline-flex; align-items: center; gap: 8px; padding: 6px 16px 6px 12px;
      background: rgba(26,115,232,0.08); border-radius: var(--md-sys-shape-corner-full);
      font: var(--md-sys-typescale-label-large); color: var(--md-sys-color-primary); margin-bottom: 24px;
    }
    .hero-desc { max-width: 640px; margin: 16px auto 0; font-size: 18px; line-height: 28px; }

    .modules-list { display: flex; flex-direction: column; gap: 24px; }

    .module-row {
      display: grid; grid-template-columns: auto 1fr auto; gap: 32px; align-items: center;
      padding: 40px; border-radius: var(--md-sys-shape-corner-extra-large);
      border: 1px solid var(--md-sys-color-outline-variant); background: var(--md-sys-color-surface);
      text-decoration: none; color: inherit;
      transition: all var(--md-sys-motion-duration-medium2) var(--md-sys-motion-easing-standard);
    }
    .module-row:hover { box-shadow: var(--md-sys-elevation-2); text-decoration: none; border-color: transparent; }
    .module-row.rhenium:hover { background: var(--color-rhenium-light); }
    .module-row.seaborgium:hover { background: var(--color-seaborgium-light); }
    .module-row.scandium:hover { background: var(--color-scandium-light); }
    .module-row.terbium:hover { background: var(--color-terbium-light); }

    .module-element-tile {
      width: 110px; height: 130px; border: 2px solid var(--md-sys-color-outline);
      border-radius: var(--md-sys-shape-corner-medium);
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      gap: 0; padding: 12px; flex-shrink: 0;
    }
    .el-num { font: var(--md-sys-typescale-label-small); color: var(--md-sys-color-on-surface-variant); }
    .el-sym { font-size: 40px; font-weight: 700; line-height: 1.1; }
    .rhenium .el-sym { color: var(--color-rhenium); }
    .seaborgium .el-sym { color: var(--color-seaborgium); }
    .scandium .el-sym { color: var(--color-scandium); }
    .terbium .el-sym { color: var(--color-terbium); }
    .el-nm { font: var(--md-sys-typescale-label-medium); color: var(--md-sys-color-on-surface-variant); }

    .module-modality { color: var(--md-sys-color-primary); margin-bottom: 8px; }
    .module-details p { margin-bottom: 12px; }

    .subtype-chips { display: flex; flex-wrap: wrap; gap: 6px; }
    .module-arrow { color: var(--md-sys-color-on-surface-variant); }

    .comparison-section { background: var(--md-sys-color-surface-container-low); }
    .table-wrapper { overflow-x: auto; margin-top: 32px; }
    .comparison-table {
      width: 100%; border-collapse: collapse;
      background: var(--md-sys-color-surface);
      border-radius: var(--md-sys-shape-corner-large); overflow: hidden;
      box-shadow: var(--md-sys-elevation-1);
    }
    .comparison-table th, .comparison-table td {
      padding: 16px 20px; text-align: left;
      border-bottom: 1px solid var(--md-sys-color-outline-variant);
      font: var(--md-sys-typescale-body-medium);
    }
    .comparison-table th {
      background: var(--md-sys-color-surface-container);
      font: var(--md-sys-typescale-label-large);
    }
    .th-dot {
      display: inline-block; width: 8px; height: 8px; border-radius: 50%;
      margin-right: 6px; vertical-align: middle;
    }
    .th-dot.rhenium { background: var(--color-rhenium); }
    .th-dot.seaborgium { background: var(--color-seaborgium); }
    .th-dot.scandium { background: var(--color-scandium); }
    .th-dot.terbium { background: var(--color-terbium); }
    .check { color: var(--md-sys-color-tertiary); }

    @media (max-width: 768px) {
      .module-row { grid-template-columns: 1fr; gap: 20px; padding: 24px; }
      .module-element-tile { width: 90px; height: 110px; }
      .el-sym { font-size: 32px; }
      .module-arrow { display: none; }
      .page-hero { padding: 100px 0 48px; }
    }
  `],
})
export class ModulesComponent {
  modules = [
    {
      name: 'Rhenium', symbol: 'Re', atomicNumber: 75, osName: 'Rhenium OS',
      modality: 'MRI', class: 'rhenium', route: '/modules/rhenium',
      description: 'High-fidelity MRI analysis with multi-sequence support covering the full spectrum of neurological, musculoskeletal, oncological, and cardiovascular imaging.',
      subtypes: ['Brain MRI', 'Breast MRI', 'Spine MRI', 'Cardiac MRI', 'Abdominal MRI', 'MSK MRI', 'Head & Neck', 'Prostate MRI', 'Whole-Body', 'Pediatric', 'Vascular MRA', 'Fetal MRI']
    },
    {
      name: 'Seaborgium', symbol: 'Sg', atomicNumber: 106, osName: 'Seaborgium OS',
      modality: 'CT', class: 'seaborgium', route: '/modules/seaborgium',
      description: 'Rapid cross-sectional CT analysis for emergency, oncology, trauma, and cardiac imaging with sub-minute critical finding alerts.',
      subtypes: ['Brain CT', 'Chest CT', 'Abdominal CT', 'Vascular CTA', 'Cardiac CTA', 'Head & Neck', 'MSK CT', 'Trauma CT', 'Spine CT', 'Pediatric', 'Oncology']
    },
    {
      name: 'Scandium', symbol: 'Sc', atomicNumber: 21, osName: 'Scandium OS',
      modality: 'Ultrasound', class: 'scandium', route: '/modules/scandium',
      description: 'The most accessible imaging modality, from fetal and obstetric ultrasound to cardiac echocardiography and POCUS protocols.',
      subtypes: ['Obstetric US', 'Breast US', 'Abdominal US', 'Thyroid US', 'Echocardiography', 'Vascular Doppler', 'MSK US', 'POCUS', 'Neonatal Cranial', 'CEUS', 'Gynecological']
    },
    {
      name: 'Terbium', symbol: 'Tb', atomicNumber: 65, osName: 'Terbium OS',
      modality: 'X-Ray', class: 'terbium', route: '/modules/terbium',
      description: 'Foundational X-ray analysis covering chest, bone, dental, DXA, mammography, and pediatric radiography with critical finding STAT alerts.',
      subtypes: ['Chest X-Ray', 'Bone X-Ray', 'Spine X-Ray', 'Joint X-Ray', 'Abdominal X-Ray', 'Dental OPG', 'Pediatric', 'DXA', 'Mammography', 'Trauma Series']
    }
  ];
}
