import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-platform',
  imports: [RouterLink],
  template: `
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <div class="hero-label">
          <span class="material-symbols-outlined sz-20">hub</span>
          Platform Architecture
        </div>
        <h1 class="display-medium animate-in">Unified AI Platform<br>for Medical Imaging</h1>
        <p class="body-large text-secondary hero-desc animate-in animate-in-delay-1">
          A modular, cloud-native AI infrastructure with full on-premise
          deployment options that processes medical images through a structured
          four-stage diagnostic pipeline.
        </p>
      </div>
    </section>

    <!-- Architecture Overview -->
    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center">Platform Architecture</h2>
        <p class="body-large text-secondary text-center section-desc">
          Layered components serving distinct functions in the journey from raw image to actionable clinical insight.
        </p>

        <div class="arch-flow">
          <div class="arch-layer animate-in">
            <div class="layer-header ingestion-layer">
              <span class="material-symbols-outlined">upload_file</span>
              <h4 class="title-medium">Image Ingestion</h4>
            </div>
            <p class="body-small text-secondary">DICOM, NIfTI, JPEG, PNG with automated format detection</p>
          </div>

          <div class="arch-connector">
            <span class="material-symbols-outlined">arrow_downward</span>
          </div>

          <div class="arch-layer animate-in animate-in-delay-1">
            <div class="layer-header qc-layer">
              <span class="material-symbols-outlined">verified</span>
              <h4 class="title-medium">Quality Control</h4>
            </div>
            <p class="body-small text-secondary">Image validation, normalization, and preprocessing</p>
          </div>

          <div class="arch-connector">
            <span class="material-symbols-outlined">arrow_downward</span>
          </div>

          <div class="arch-layer animate-in animate-in-delay-2">
            <div class="layer-header router-layer">
              <span class="material-symbols-outlined">alt_route</span>
              <h4 class="title-medium">Modality Router</h4>
            </div>
            <div class="router-targets">
              <a routerLink="/modules/rhenium" class="router-chip rhenium">MRI</a>
              <a routerLink="/modules/seaborgium" class="router-chip seaborgium">CT</a>
              <a routerLink="/modules/scandium" class="router-chip scandium">Ultrasound</a>
              <a routerLink="/modules/terbium" class="router-chip terbium">X-Ray</a>
            </div>
          </div>

          <div class="arch-connector">
            <span class="material-symbols-outlined">arrow_downward</span>
          </div>

          <div class="arch-layer animate-in animate-in-delay-3">
            <div class="layer-header pipeline-layer">
              <span class="material-symbols-outlined">linear_scale</span>
              <h4 class="title-medium">Four-Stage Diagnostic Pipeline</h4>
            </div>
            <div class="stage-chips">
              <span class="stage-chip">Detection</span>
              <span class="material-symbols-outlined sz-20">arrow_forward</span>
              <span class="stage-chip">Classification</span>
              <span class="material-symbols-outlined sz-20">arrow_forward</span>
              <span class="stage-chip">Subtyping</span>
              <span class="material-symbols-outlined sz-20">arrow_forward</span>
              <span class="stage-chip">Staging</span>
            </div>
          </div>

          <div class="arch-connector">
            <span class="material-symbols-outlined">arrow_downward</span>
          </div>

          <div class="arch-layer animate-in">
            <div class="layer-header xai-layer">
              <span class="material-symbols-outlined">psychology</span>
              <h4 class="title-medium">XAI Engine</h4>
            </div>
            <p class="body-small text-secondary">Grad-CAM++, SHAP, LIME, Attention Maps, Uncertainty Quantification</p>
          </div>

          <div class="arch-connector">
            <span class="material-symbols-outlined">arrow_downward</span>
          </div>

          <div class="arch-layer animate-in animate-in-delay-1">
            <div class="layer-header output-layer">
              <span class="material-symbols-outlined">description</span>
              <h4 class="title-medium">Clinician Dashboard</h4>
            </div>
            <p class="body-small text-secondary">Priority Worklist, Structured Reports, Override Controls</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Capabilities -->
    <section class="section capabilities-section">
      <div class="container">
        <h2 class="headline-large text-center">Core Platform Capabilities</h2>
        <div class="caps-grid">
          <div class="cap-card animate-in">
            <span class="material-symbols-outlined sz-40">image_search</span>
            <h4 class="title-medium">Multi-Modal Ingestion</h4>
            <p class="body-medium text-secondary">
              DICOM, NIfTI, JPEG, PNG, and raw formats with automated detection and normalization.
            </p>
          </div>
          <div class="cap-card animate-in animate-in-delay-1">
            <span class="material-symbols-outlined sz-40">speed</span>
            <h4 class="title-medium">Real-Time Processing</h4>
            <p class="body-medium text-secondary">
              Urgent single-study analysis and overnight bulk processing with sub-10-second inference.
            </p>
          </div>
          <div class="cap-card animate-in animate-in-delay-2">
            <span class="material-symbols-outlined sz-40">dashboard</span>
            <h4 class="title-medium">Unified Dashboard</h4>
            <p class="body-medium text-secondary">
              All four modules surfaced in a single prioritized worklist with zero context switching.
            </p>
          </div>
          <div class="cap-card animate-in animate-in-delay-3">
            <span class="material-symbols-outlined sz-40">edit_note</span>
            <h4 class="title-medium">Structured Reporting</h4>
            <p class="body-medium text-secondary">
              Automated reports with NLG-based impression generation trained on radiology corpora.
            </p>
          </div>
          <div class="cap-card animate-in">
            <span class="material-symbols-outlined sz-40">query_stats</span>
            <h4 class="title-medium">Confidence Scoring</h4>
            <p class="body-medium text-secondary">
              Calibrated uncertainty quantification with Green/Yellow/Red confidence flags.
            </p>
          </div>
          <div class="cap-card animate-in animate-in-delay-1">
            <span class="material-symbols-outlined sz-40">timeline</span>
            <h4 class="title-medium">Longitudinal Tracking</h4>
            <p class="body-medium text-secondary">
              Automated measurement comparison between prior and current studies.
            </p>
          </div>
          <div class="cap-card animate-in animate-in-delay-2">
            <span class="material-symbols-outlined sz-40">security</span>
            <h4 class="title-medium">Federated Learning</h4>
            <p class="body-medium text-secondary">
              Privacy-preserving model updates without patient data leaving institutional infrastructure.
            </p>
          </div>
          <div class="cap-card animate-in animate-in-delay-3">
            <span class="material-symbols-outlined sz-40">translate</span>
            <h4 class="title-medium">Multi-Language Support</h4>
            <p class="body-medium text-secondary">
              English, Azerbaijani, Swedish, Turkish, German, and Arabic interfaces.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Data Flow -->
    <section class="section">
      <div class="container text-center">
        <h2 class="headline-large">Data Flow Architecture</h2>
        <p class="body-large text-secondary section-desc">
          From medical image upload to finalized clinical report in under 30 seconds for critical findings.
        </p>

        <div class="flow-timeline">
          <div class="flow-step animate-in">
            <div class="flow-number">1</div>
            <div class="flow-content">
              <h4 class="title-medium">Image Upload</h4>
              <p class="body-small text-secondary">DICOM push from PACS or direct upload</p>
            </div>
          </div>
          <div class="flow-step animate-in animate-in-delay-1">
            <div class="flow-number">2</div>
            <div class="flow-content">
              <h4 class="title-medium">Preprocessing</h4>
              <p class="body-small text-secondary">Quality checks, normalization, augmentation</p>
            </div>
          </div>
          <div class="flow-step animate-in animate-in-delay-2">
            <div class="flow-number">3</div>
            <div class="flow-content">
              <h4 class="title-medium">AI Analysis</h4>
              <p class="body-small text-secondary">4-stage pipeline through appropriate module</p>
            </div>
          </div>
          <div class="flow-step animate-in animate-in-delay-3">
            <div class="flow-number">4</div>
            <div class="flow-content">
              <h4 class="title-medium">XAI Generation</h4>
              <p class="body-small text-secondary">Heatmaps, SHAP values, uncertainty scoring</p>
            </div>
          </div>
          <div class="flow-step animate-in">
            <div class="flow-number">5</div>
            <div class="flow-content">
              <h4 class="title-medium">Report Draft</h4>
              <p class="body-small text-secondary">Structured report with NLG impression</p>
            </div>
          </div>
          <div class="flow-step animate-in animate-in-delay-1">
            <div class="flow-number">6</div>
            <div class="flow-content">
              <h4 class="title-medium">Clinician Review</h4>
              <p class="body-small text-secondary">Agree, override, or modify with feedback</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Deployment -->
    <section class="section deploy-section">
      <div class="container">
        <h2 class="headline-large text-center">Deployment Options</h2>
        <p class="body-large text-secondary text-center section-desc">
          Flexible deployment models to meet the needs of any institution.
        </p>
        <div class="deploy-grid">
          <div class="deploy-card animate-in">
            <span class="material-symbols-outlined sz-48">cloud</span>
            <h4 class="title-large">Cloud SaaS</h4>
            <p class="body-medium text-secondary">
              Hosted on AWS, Azure, and GCP with auto-scaling GPU clusters.
              99.9% uptime SLA with zero-downtime model updates.
            </p>
            <div class="deploy-chips">
              <span class="md-chip">AWS</span>
              <span class="md-chip">Azure</span>
              <span class="md-chip">GCP</span>
            </div>
          </div>
          <div class="deploy-card animate-in animate-in-delay-1">
            <span class="material-symbols-outlined sz-48">dns</span>
            <h4 class="title-large">On-Premise</h4>
            <p class="body-medium text-secondary">
              Containerized Docker/Kubernetes deployment on institution-owned hardware.
              Air-gapped option with offline model updates.
            </p>
            <div class="deploy-chips">
              <span class="md-chip">Docker</span>
              <span class="md-chip">K8s</span>
              <span class="md-chip">Air-Gap</span>
            </div>
          </div>
          <div class="deploy-card animate-in animate-in-delay-2">
            <span class="material-symbols-outlined sz-48">sync_alt</span>
            <h4 class="title-large">Hybrid</h4>
            <p class="body-medium text-secondary">
              Local inference with cloud analytics dashboard and federated model management.
              Data sovereignty with cloud convenience.
            </p>
            <div class="deploy-chips">
              <span class="md-chip">Local Inference</span>
              <span class="md-chip">Cloud Admin</span>
            </div>
          </div>
          <div class="deploy-card animate-in animate-in-delay-3">
            <span class="material-symbols-outlined sz-48">edgesensor_high</span>
            <h4 class="title-large">Edge</h4>
            <p class="body-medium text-secondary">
              Lightweight INT8 quantized models for portable ultrasound,
              field hospitals, and telemedicine in low-bandwidth environments.
            </p>
            <div class="deploy-chips">
              <span class="md-chip">Jetson</span>
              <span class="md-chip">INT8</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .page-hero {
      padding: 120px 0 64px;
      background: var(--md-sys-color-surface-container-low);
      text-align: center;
    }
    .hero-label {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 6px 16px 6px 12px; background: rgba(26,115,232,0.08);
      border-radius: var(--md-sys-shape-corner-full);
      font: var(--md-sys-typescale-label-large); color: var(--md-sys-color-primary);
      margin-bottom: 24px;
    }
    .hero-desc { max-width: 640px; margin: 16px auto 0; font-size: 18px; line-height: 28px; }
    .section-desc { max-width: 640px; margin: 16px auto 0; }

    /* Architecture Flow */
    .arch-flow {
      max-width: 600px;
      margin: 48px auto 0;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .arch-layer {
      width: 100%;
      padding: 24px;
      border-radius: var(--md-sys-shape-corner-large);
      border: 1px solid var(--md-sys-color-outline-variant);
      background: var(--md-sys-color-surface);
      text-align: center;
    }
    .layer-header {
      display: flex; align-items: center; justify-content: center; gap: 8px;
      margin-bottom: 8px;
    }
    .layer-header .material-symbols-outlined { color: var(--md-sys-color-primary); }
    .arch-connector {
      padding: 8px; color: var(--md-sys-color-outline);
    }
    .router-targets {
      display: flex; gap: 8px; justify-content: center; margin-top: 8px; flex-wrap: wrap;
    }
    .router-chip {
      padding: 6px 16px; border-radius: var(--md-sys-shape-corner-full);
      font: var(--md-sys-typescale-label-large); color: var(--md-sys-color-on-primary); text-decoration: none;
      transition: transform var(--md-sys-motion-duration-short4) var(--md-sys-motion-easing-standard);
    }
    .router-chip:hover { transform: scale(1.05); text-decoration: none; }
    .router-chip.rhenium { background: var(--color-rhenium); }
    .router-chip.seaborgium { background: var(--color-seaborgium); }
    .router-chip.scandium { background: var(--color-scandium); }
    .router-chip.terbium { background: var(--color-terbium); }

    .stage-chips {
      display: flex; gap: 8px; justify-content: center; align-items: center;
      margin-top: 8px; flex-wrap: wrap;
    }
    .stage-chip {
      padding: 6px 14px; border-radius: var(--md-sys-shape-corner-full);
      background: var(--md-sys-color-primary-container); color: var(--md-sys-color-on-primary-container);
      font: var(--md-sys-typescale-label-large);
    }
    .stage-chips .material-symbols-outlined { color: var(--md-sys-color-outline); }

    /* Capabilities */
    .capabilities-section { background: var(--md-sys-color-surface-container-low); }
    .caps-grid {
      display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; margin-top: 48px;
    }
    .cap-card {
      padding: 28px; border-radius: var(--md-sys-shape-corner-extra-large);
      background: var(--md-sys-color-surface);
      border: 1px solid var(--md-sys-color-outline-variant);
      transition: all var(--md-sys-motion-duration-medium2) var(--md-sys-motion-easing-standard);
    }
    .cap-card:hover { box-shadow: var(--md-sys-elevation-2); border-color: transparent; }
    .cap-card .material-symbols-outlined { color: var(--md-sys-color-primary); margin-bottom: 16px; }
    .cap-card h4 { margin-bottom: 8px; }

    /* Data Flow */
    .flow-timeline {
      display: grid; grid-template-columns: repeat(6, 1fr);
      gap: 16px; margin-top: 48px;
    }
    .flow-step {
      text-align: center;
      padding: 24px 12px;
      border-radius: var(--md-sys-shape-corner-large);
      background: var(--md-sys-color-surface-container-low);
      position: relative;
    }
    .flow-number {
      width: 36px; height: 36px; border-radius: 50%;
      background: var(--md-sys-color-primary); color: var(--md-sys-color-on-primary);
      display: flex; align-items: center; justify-content: center;
      font: var(--md-sys-typescale-label-large);
      margin: 0 auto 12px;
    }

    /* Deployment */
    .deploy-section { background: var(--md-sys-color-surface-container-low); }
    .deploy-grid {
      display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; margin-top: 48px;
    }
    .deploy-card {
      padding: 32px; border-radius: var(--md-sys-shape-corner-extra-large);
      background: var(--md-sys-color-surface);
      border: 1px solid var(--md-sys-color-outline-variant);
      text-align: center;
      transition: all var(--md-sys-motion-duration-medium2) var(--md-sys-motion-easing-standard);
    }
    .deploy-card:hover { box-shadow: var(--md-sys-elevation-2); border-color: transparent; }
    .deploy-card .material-symbols-outlined { color: var(--md-sys-color-primary); margin-bottom: 16px; }
    .deploy-card h4 { margin-bottom: 8px; }
    .deploy-chips { display: flex; gap: 6px; justify-content: center; margin-top: 16px; flex-wrap: wrap; }

    @media (max-width: 1024px) {
      .caps-grid { grid-template-columns: repeat(2, 1fr); }
      .deploy-grid { grid-template-columns: repeat(2, 1fr); }
      .flow-timeline { grid-template-columns: repeat(3, 1fr); }
    }
    @media (max-width: 640px) {
      .page-hero { padding: 100px 0 48px; }
      .caps-grid { grid-template-columns: 1fr; }
      .deploy-grid { grid-template-columns: 1fr; }
      .flow-timeline { grid-template-columns: repeat(2, 1fr); }
      .stage-chips { flex-direction: column; }
    }
  `],
})
export class PlatformComponent {}
