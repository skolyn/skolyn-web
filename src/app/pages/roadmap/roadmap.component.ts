import { Component } from '@angular/core';

@Component({
  selector: 'app-roadmap',
  imports: [],
  template: `
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <div class="hero-badge">
          <span class="material-symbols-outlined">rocket_launch</span>
          R&D Roadmap
        </div>
        <h1 class="display-medium animate-in">Research and Development Roadmap</h1>
        <p class="hero-subtitle body-large animate-in animate-in-delay-1">
          A structured multi-phase roadmap from platform launch through global expansion,
          with milestones in multimodal AI, radiogenomics, and digital pathology.
        </p>
      </div>
    </section>

    <!-- Timeline -->
    <section class="section">
      <div class="container">
        <!-- Phase 1 -->
        <div class="phase-block">
          <div class="phase-header phase-1">
            <div class="phase-label">Phase 1</div>
            <h2 class="headline-medium">Launch</h2>
            <p class="body-large" style="opacity: 0.85;">0 to 12 months</p>
          </div>
          <div class="milestone-grid">
            <div class="milestone-card">
              <span class="material-symbols-outlined">launch</span>
              <h3 class="title-small">Platform Launch</h3>
              <p class="body-small text-secondary">Full production launch of all four modules with core subtype support across Rhenium, Seaborgium, Scandium, and Terbium OS.</p>
            </div>
            <div class="milestone-card">
              <span class="material-symbols-outlined">psychology</span>
              <h3 class="title-small">XAI Dashboard v1.0</h3>
              <p class="body-small text-secondary">Grad-CAM++ and SHAP visualization integrated into the clinician interface.</p>
            </div>
            <div class="milestone-card">
              <span class="material-symbols-outlined">perm_media</span>
              <h3 class="title-small">PACS Integration</h3>
              <p class="body-small text-secondary">Certification with the top five vendor systems by installed base.</p>
            </div>
            <div class="milestone-card">
              <span class="material-symbols-outlined">verified</span>
              <h3 class="title-small">CE Mark Submission</h3>
              <p class="body-small text-secondary">Class IIb medical device submission under EU MDR 2017/745.</p>
            </div>
            <div class="milestone-card">
              <span class="material-symbols-outlined">medication</span>
              <h3 class="title-small">FDA Breakthrough</h3>
              <p class="body-small text-secondary">Breakthrough Device Designation application for lung cancer detection and stroke alert.</p>
            </div>
            <div class="milestone-card">
              <span class="material-symbols-outlined">location_on</span>
              <h3 class="title-small">Pilot Deployments</h3>
              <p class="body-small text-secondary">Partner hospitals in Azerbaijan, Sweden, Finland, Kazakhstan, Denmark, and Germany with prospective monitoring.</p>
            </div>
            <div class="milestone-card">
              <span class="material-symbols-outlined">shield</span>
              <h3 class="title-small">ISO Certifications</h3>
              <p class="body-small text-secondary">ISO 13485 certification audit and ISO 27001 surveillance audit completion.</p>
            </div>
          </div>
        </div>

        <!-- Phase 2 -->
        <div class="phase-block">
          <div class="phase-header phase-2">
            <div class="phase-label">Phase 2</div>
            <h2 class="headline-medium">Expansion</h2>
            <p class="body-large" style="opacity: 0.85;">12 to 36 months</p>
          </div>
          <div class="milestone-grid">
            <div class="milestone-card">
              <span class="material-symbols-outlined">merge</span>
              <h3 class="title-small">Multimodal AI Fusion</h3>
              <p class="body-small text-secondary">Cross-modality correlation (CT + MRI + PET) for comprehensive oncology staging in a single unified report.</p>
            </div>
            <div class="milestone-card">
              <span class="material-symbols-outlined">timeline</span>
              <h3 class="title-small">Longitudinal Tracking</h3>
              <p class="body-small text-secondary">Automated measurement comparison with statistical change significance testing between prior and current studies.</p>
            </div>
            <div class="milestone-card">
              <span class="material-symbols-outlined">text_snippet</span>
              <h3 class="title-small">NLP Integration</h3>
              <p class="body-small text-secondary">Clinical note and pathology report correlation for multi-source diagnostic context.</p>
            </div>
            <div class="milestone-card">
              <span class="material-symbols-outlined">genetics</span>
              <h3 class="title-small">Radiogenomics</h3>
              <p class="body-small text-secondary">Molecular subtype and mutation status prediction (IDH, EGFR, KRAS, BRCA, MSI, TMB) from imaging features.</p>
            </div>
            <div class="milestone-card">
              <span class="material-symbols-outlined">pregnant_woman</span>
              <h3 class="title-small">Real-Time Fetal Screening</h3>
              <p class="body-small text-secondary">Live AI overlay guidance for sonographers during fetal anomaly ultrasound scans.</p>
            </div>
          </div>
        </div>

        <!-- Phase 3 -->
        <div class="phase-block">
          <div class="phase-header phase-3">
            <div class="phase-label">Phase 3</div>
            <h2 class="headline-medium">Advanced</h2>
            <p class="body-large" style="opacity: 0.85;">36+ months</p>
          </div>
          <div class="milestone-grid">
            <div class="milestone-card">
              <span class="material-symbols-outlined">person_search</span>
              <h3 class="title-small">Whole-Patient AI</h3>
              <p class="body-small text-secondary">Integrating imaging, laboratory, genomic, and clinical data for holistic diagnostic synthesis across the full patient timeline.</p>
            </div>
            <div class="milestone-card bohrium">
              <span class="material-symbols-outlined">biotech</span>
              <h3 class="title-small">Bohrium OS - Digital Pathology</h3>
              <p class="body-small text-secondary">Element 107: AI-powered whole-slide image analysis for histopathological diagnosis, grading, and biomarker quantification.</p>
            </div>
            <div class="milestone-card">
              <span class="material-symbols-outlined">precision_manufacturing</span>
              <h3 class="title-small">AI-Guided Intervention</h3>
              <p class="body-small text-secondary">Surgical simulation, biopsy trajectory optimization, and radiotherapy target volume contouring.</p>
            </div>
            <div class="milestone-card">
              <span class="material-symbols-outlined">public</span>
              <h3 class="title-small">Global Expansion</h3>
              <p class="body-small text-secondary">Regulatory clearance in 50+ countries with region-specific performance validation on locally representative datasets.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .page-hero {
      padding: 96px 0 48px;
      background: linear-gradient(180deg, var(--md-sys-color-primary-container) 0%, var(--md-sys-color-surface) 100%);
    }
    .hero-badge {
      display: inline-flex; align-items: center; gap: 8px; padding: 6px 16px;
      border-radius: var(--md-sys-shape-corner-full);
      background: var(--md-sys-color-primary); color: var(--md-sys-color-on-primary);
      font: var(--md-sys-typescale-label-large); margin-bottom: 24px;
    }
    .hero-subtitle { max-width: 720px; color: var(--md-sys-color-on-surface-variant); margin-top: 16px; }

    .phase-block { margin-bottom: 64px; }
    .phase-header {
      padding: 32px; border-radius: var(--md-sys-shape-corner-extra-large);
      color: #fff; margin-bottom: 24px;
    }
    .phase-1 { background: linear-gradient(135deg, var(--md-sys-color-primary), #174ea6); }
    .phase-2 { background: linear-gradient(135deg, var(--color-seaborgium), #c26200); }
    .phase-3 { background: linear-gradient(135deg, var(--color-terbium), #7627bb); }
    .phase-label {
      display: inline-block; padding: 4px 12px; border-radius: var(--md-sys-shape-corner-full);
      background: rgba(255,255,255,0.2); font: var(--md-sys-typescale-label-large); margin-bottom: 8px;
    }

    .milestone-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
    .milestone-card {
      background: var(--md-sys-color-surface-container); border-radius: var(--md-sys-shape-corner-large);
      padding: 24px; transition: box-shadow var(--md-sys-motion-duration-medium2) var(--md-sys-motion-easing-standard);
    }
    .milestone-card:hover { box-shadow: var(--md-sys-elevation-2); }
    .milestone-card .material-symbols-outlined { color: var(--md-sys-color-primary); margin-bottom: 12px; }
    .milestone-card h3 { margin-bottom: 8px; }
    .milestone-card.bohrium { border: 2px solid var(--color-terbium); background: var(--color-terbium-light); }
    .milestone-card.bohrium .material-symbols-outlined { color: var(--color-terbium); }

    @media (max-width: 1024px) { .milestone-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 600px) { .milestone-grid { grid-template-columns: 1fr; } }
  `],
})
export class RoadmapComponent {}
