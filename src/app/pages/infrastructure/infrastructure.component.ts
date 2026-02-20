import { Component } from '@angular/core';

@Component({
  selector: 'app-infrastructure',
  imports: [],
  template: `
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <div class="hero-badge">
          <span class="material-symbols-outlined">memory</span>
          Technical Infrastructure
        </div>
        <h1 class="display-medium animate-in">AI Architecture and Infrastructure</h1>
        <p class="hero-subtitle body-large animate-in animate-in-delay-1">
          A modular, cloud-native AI infrastructure built on state-of-the-art vision models,
          temporal networks, and multi-modal fusion architectures.
        </p>
      </div>
    </section>

    <!-- Model Architecture -->
    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center" style="margin-bottom: 48px;">AI Model Architecture</h2>
        <div class="arch-grid">
          <div class="arch-category">
            <div class="arch-header vision-header">
              <span class="material-symbols-outlined sz-40">visibility</span>
              <h3 class="title-large">Vision Models</h3>
            </div>
            <ul class="arch-list">
              <li>
                <span class="label-large">CNN</span>
                <span class="body-small text-secondary">EfficientNet-V2, DenseNet, ResNet, SE-Net</span>
              </li>
              <li>
                <span class="label-large">Vision Transformers</span>
                <span class="body-small text-secondary">ViT, DeiT, Swin Transformer</span>
              </li>
              <li>
                <span class="label-large">Hybrid CNN-Transformer</span>
                <span class="body-small text-secondary">CMT, CoAtNet, MaxViT</span>
              </li>
              <li>
                <span class="label-large">3D Volumetric</span>
                <span class="body-small text-secondary">3D U-Net, nnU-Net, V-Net, UNETR</span>
              </li>
              <li>
                <span class="label-large">Segmentation</span>
                <span class="body-small text-secondary">Mask2Former, SAM-adapted, Segment Anything Medical</span>
              </li>
            </ul>
          </div>
          <div class="arch-category">
            <div class="arch-header temporal-header">
              <span class="material-symbols-outlined sz-40">timeline</span>
              <h3 class="title-large">Temporal Models</h3>
            </div>
            <ul class="arch-list">
              <li>
                <span class="label-large">LSTM and GRU</span>
                <span class="body-small text-secondary">Longitudinal study tracking over time</span>
              </li>
              <li>
                <span class="label-large">Temporal Transformer</span>
                <span class="body-small text-secondary">Change detection between sequential studies</span>
              </li>
            </ul>
          </div>
          <div class="arch-category">
            <div class="arch-header fusion-header">
              <span class="material-symbols-outlined sz-40">merge</span>
              <h3 class="title-large">Fusion Models</h3>
            </div>
            <ul class="arch-list">
              <li>
                <span class="label-large">Graph Neural Networks</span>
                <span class="body-small text-secondary">Multi-lesion relationship modeling</span>
              </li>
              <li>
                <span class="label-large">Multi-Modal Attention</span>
                <span class="body-small text-secondary">Cross-modality feature fusion</span>
              </li>
              <li>
                <span class="label-large">Clinical Context</span>
                <span class="body-small text-secondary">Patient data + imaging integration</span>
              </li>
            </ul>
          </div>
          <div class="arch-category">
            <div class="arch-header report-header">
              <span class="material-symbols-outlined sz-40">auto_awesome</span>
              <h3 class="title-large">Report Generation</h3>
            </div>
            <ul class="arch-list">
              <li>
                <span class="label-large">NLG</span>
                <span class="body-small text-secondary">Natural language report impression drafting</span>
              </li>
              <li>
                <span class="label-large">Structured Output</span>
                <span class="body-small text-secondary">Scoring system auto-population</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Training Standards -->
    <section class="section-tight" style="background: var(--md-sys-color-surface-variant);">
      <div class="container">
        <h2 class="headline-large text-center" style="margin-bottom: 16px;">Training and Validation Standards</h2>
        <p class="body-large text-center text-secondary" style="max-width: 720px; margin: 0 auto 48px;">
          All models are developed with multi-institutional, multi-ethnic, and multi-scanner datasets
          following evidence-based protocols with dual-reader annotation and gold-standard consensus.
        </p>
        <div class="standards-cards">
          <div class="standard-card">
            <span class="material-symbols-outlined">storage</span>
            <h3 class="title-medium">Dataset Scale</h3>
            <p class="body-medium text-secondary">
              10,000+ annotated cases for rare conditions to 500,000+ for common findings.
              Curated from multi-institutional, multi-ethnic sources.
            </p>
          </div>
          <div class="standard-card">
            <span class="material-symbols-outlined">group</span>
            <h3 class="title-medium">Annotation Quality</h3>
            <p class="body-medium text-secondary">
              Board-certified radiologists with dual-reader agreement and gold-standard
              consensus arbitration for disagreements.
            </p>
          </div>
          <div class="standard-card">
            <span class="material-symbols-outlined">verified</span>
            <h3 class="title-medium">External Validation</h3>
            <p class="body-medium text-secondary">
              Independent validation from institutions not represented in training.
              Mandatory before any model deployment.
            </p>
          </div>
          <div class="standard-card">
            <span class="material-symbols-outlined">sync</span>
            <h3 class="title-medium">Federated Learning</h3>
            <p class="body-medium text-secondary">
              Privacy-preserving model updates through federated learning partnerships.
              Anonymized case aggregation across partner institutions.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Performance Targets -->
    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center" style="margin-bottom: 48px;">Inference Performance Targets</h2>
        <div class="perf-table-wrap">
          <table class="perf-table">
            <thead>
              <tr>
                <th>Metric</th>
                <th>Target</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sensitivity for Critical Findings</td>
                <td><span class="target-badge green">95% or above</span></td>
              </tr>
              <tr>
                <td>Specificity Across Subtypes</td>
                <td><span class="target-badge green">90% or above</span></td>
              </tr>
              <tr>
                <td>Average Inference Time per Study</td>
                <td><span class="target-badge blue">Under 10 seconds</span></td>
              </tr>
              <tr>
                <td>Critical Finding Alert Time</td>
                <td><span class="target-badge blue">Under 30 seconds</span></td>
              </tr>
              <tr>
                <td>System Uptime SLA</td>
                <td><span class="target-badge green">99.9% per month</span></td>
              </tr>
              <tr>
                <td>Model Update Frequency</td>
                <td><span class="target-badge">Quarterly major, monthly patches</span></td>
              </tr>
              <tr>
                <td>Drift Monitoring</td>
                <td><span class="target-badge">Continuous, alert at 5% degradation</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Deployment Options -->
    <section class="section-tight" style="background: var(--md-sys-color-surface-variant);">
      <div class="container">
        <h2 class="headline-large text-center" style="margin-bottom: 48px;">Deployment Options</h2>
        <div class="deploy-grid">
          <div class="deploy-card">
            <div class="deploy-icon cloud">
              <span class="material-symbols-outlined sz-48">cloud</span>
            </div>
            <h3 class="title-large">Cloud SaaS</h3>
            <ul class="deploy-features">
              <li>Hosted on AWS, Azure, and GCP across multiple regions</li>
              <li>HIPAA BAA and GDPR DPA in place</li>
              <li>Auto-scaling GPU clusters (NVIDIA A100, H100)</li>
              <li>Zero-downtime model updates</li>
            </ul>
          </div>
          <div class="deploy-card">
            <div class="deploy-icon onprem">
              <span class="material-symbols-outlined sz-48">dns</span>
            </div>
            <h3 class="title-large">On-Premise</h3>
            <ul class="deploy-features">
              <li>Fully containerized via Docker and Kubernetes</li>
              <li>Compatible with NVIDIA DGX, Dell, HPE hardware</li>
              <li>Minimum: NVIDIA A10 GPU (24GB), 128GB RAM, 10GbE</li>
              <li>Air-gapped option with signed offline updates</li>
            </ul>
          </div>
          <div class="deploy-card">
            <div class="deploy-icon hybrid">
              <span class="material-symbols-outlined sz-48">lan</span>
            </div>
            <h3 class="title-large">Hybrid</h3>
            <ul class="deploy-features">
              <li>On-premise inference with cloud analytics</li>
              <li>Local data sovereignty with cloud convenience</li>
              <li>Federated model update management</li>
              <li>Audit logging and dashboard in the cloud</li>
            </ul>
          </div>
          <div class="deploy-card">
            <div class="deploy-icon edge">
              <span class="material-symbols-outlined sz-48">developer_board</span>
            </div>
            <h3 class="title-large">Edge</h3>
            <ul class="deploy-features">
              <li>INT8 quantized and pruned model variants</li>
              <li>Portable ultrasound and field hospital deployment</li>
              <li>Low-bandwidth telemedicine units</li>
              <li>Minimum: NVIDIA Jetson Orin or equivalent</li>
            </ul>
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
      display: inline-flex; align-items: center; gap: 8px;
      padding: 6px 16px; border-radius: var(--md-sys-shape-corner-full);
      background: var(--md-sys-color-primary); color: var(--md-sys-color-on-primary);
      font: var(--md-sys-typescale-label-large); margin-bottom: 24px;
    }
    .hero-subtitle { max-width: 720px; color: var(--md-sys-color-on-surface-variant); margin-top: 16px; }

    .arch-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
    .arch-category {
      background: var(--md-sys-color-surface-container); border-radius: var(--md-sys-shape-corner-large);
      overflow: hidden;
    }
    .arch-header {
      display: flex; align-items: center; gap: 16px; padding: 20px 24px; color: var(--md-sys-color-on-primary);
    }
    .vision-header { background: var(--md-sys-color-primary); }
    .temporal-header { background: var(--color-seaborgium); }
    .fusion-header { background: var(--color-scandium); }
    .report-header { background: var(--color-terbium); }
    .arch-list {
      list-style: none; padding: 16px 24px 20px; display: flex; flex-direction: column; gap: 12px;
    }
    .arch-list li { display: flex; flex-direction: column; gap: 2px; }

    .standards-cards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
    .standard-card {
      background: var(--md-sys-color-surface); padding: 24px; border-radius: var(--md-sys-shape-corner-large);
      box-shadow: var(--md-sys-elevation-1);
    }
    .standard-card .material-symbols-outlined { color: var(--md-sys-color-primary); margin-bottom: 12px; }
    .standard-card h3 { margin-bottom: 8px; }

    .perf-table-wrap { overflow-x: auto; }
    .perf-table {
      width: 100%; max-width: 720px; margin: 0 auto; border-collapse: collapse;
      background: var(--md-sys-color-surface); border-radius: var(--md-sys-shape-corner-large);
      overflow: hidden; box-shadow: var(--md-sys-elevation-1);
    }
    .perf-table th, .perf-table td {
      padding: 16px 24px; text-align: left;
      border-bottom: 1px solid var(--md-sys-color-outline-variant);
    }
    .perf-table th {
      font: var(--md-sys-typescale-label-large);
      background: var(--md-sys-color-surface-container);
    }
    .perf-table td { font: var(--md-sys-typescale-body-medium); }
    .target-badge {
      display: inline-block; padding: 4px 12px; border-radius: var(--md-sys-shape-corner-full);
      font: var(--md-sys-typescale-label-medium);
      background: var(--md-sys-color-surface-container-high);
      color: var(--md-sys-color-on-surface);
    }
    .target-badge.green { background: var(--md-sys-color-tertiary-container); color: var(--md-sys-color-on-tertiary-container); }
    .target-badge.blue { background: var(--md-sys-color-primary-container); color: var(--md-sys-color-on-primary-container); }

    .deploy-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
    .deploy-card {
      background: var(--md-sys-color-surface); border-radius: var(--md-sys-shape-corner-large);
      padding: 28px 24px; box-shadow: var(--md-sys-elevation-1); text-align: center;
      transition: box-shadow var(--md-sys-motion-duration-medium2) var(--md-sys-motion-easing-standard);
    }
    .deploy-card:hover { box-shadow: var(--md-sys-elevation-3); }
    .deploy-icon {
      width: 80px; height: 80px; border-radius: 50%; margin: 0 auto 16px;
      display: flex; align-items: center; justify-content: center;
    }
    .cloud { background: var(--md-sys-color-primary-container); color: var(--md-sys-color-primary); }
    .onprem { background: #fef0e1; color: var(--color-seaborgium); }
    .hybrid { background: var(--md-sys-color-tertiary-container); color: var(--md-sys-color-tertiary); }
    .edge { background: var(--color-terbium-light); color: var(--color-terbium); }
    .deploy-card h3 { margin-bottom: 16px; }
    .deploy-features {
      list-style: none; text-align: left; display: flex; flex-direction: column; gap: 8px;
      font: var(--md-sys-typescale-body-medium); color: var(--md-sys-color-on-surface-variant);
    }

    @media (max-width: 1024px) {
      .arch-grid { grid-template-columns: 1fr; }
      .standards-cards { grid-template-columns: repeat(2, 1fr); }
      .deploy-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 600px) {
      .standards-cards, .deploy-grid { grid-template-columns: 1fr; }
    }
  `],
})
export class InfrastructureComponent {}
