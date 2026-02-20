import { Component } from '@angular/core';

@Component({
  selector: 'app-technology',
  imports: [],
  template: `
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <div class="hero-badge">
          <span class="material-symbols-outlined">psychology</span>
          Technology
        </div>
        <h1 class="display-medium animate-in">Explainable AI Framework<br>& Infrastructure</h1>
        <p class="hero-subtitle body-large animate-in animate-in-delay-1">
          Transparency is not a feature. It is the foundation. Every prediction is accompanied
          by a full visual and textual explanation.
        </p>
      </div>
    </section>

    <!-- XAI Techniques -->
    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center">XAI Techniques</h2>
        <p class="body-large text-secondary text-center section-desc">
          Six complementary explainability techniques integrated at the core of every inference.
        </p>
        <div class="xai-grid">
          @for (technique of xaiTechniques; track technique.name) {
            <div class="xai-card animate-in">
              <div class="xai-icon-wrap">
                <span class="material-symbols-outlined sz-40">{{ technique.icon }}</span>
              </div>
              <h3 class="title-large">{{ technique.name }}</h3>
              <p class="body-medium text-secondary">{{ technique.description }}</p>
              <div class="xai-output">
                <span class="label-medium text-primary">Output:</span>
                <span class="body-small text-secondary">{{ technique.output }}</span>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Confidence System -->
    <section class="section confidence-section">
      <div class="container">
        <h2 class="headline-large text-center">Confidence Flag System</h2>
        <p class="body-large text-secondary text-center section-desc">
          Calibrated uncertainty quantification with three-tier confidence flags.
        </p>
        <div class="flags-grid">
          <div class="flag-card green-flag animate-in">
            <div class="flag-indicator green"></div>
            <h4 class="title-large">High Confidence</h4>
            <p class="headline-small flag-range">Above 90%</p>
            <p class="body-medium text-secondary">
              Prediction space is tight and well-calibrated. Model is highly certain of its output.
            </p>
          </div>
          <div class="flag-card yellow-flag animate-in animate-in-delay-1">
            <div class="flag-indicator yellow"></div>
            <h4 class="title-large">Moderate Confidence</h4>
            <p class="headline-small flag-range">70% to 90%</p>
            <p class="body-medium text-secondary">
              Clinician should review with particular attention. Model has moderate certainty.
            </p>
          </div>
          <div class="flag-card red-flag animate-in animate-in-delay-2">
            <div class="flag-indicator red"></div>
            <h4 class="title-large">Low Confidence</h4>
            <p class="headline-small flag-range">Below 70%</p>
            <p class="body-medium text-secondary">
              Additional imaging, expert review, or clinical correlation strongly recommended.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- AI Architecture -->
    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center">AI Model Architecture</h2>
        <div class="arch-grid">
          <div class="arch-card animate-in">
            <span class="material-symbols-outlined sz-40">grid_view</span>
            <h4 class="title-medium">Vision Models</h4>
            <div class="arch-tags">
              <span class="md-chip">EfficientNet-V2</span>
              <span class="md-chip">DenseNet</span>
              <span class="md-chip">ViT</span>
              <span class="md-chip">Swin Transformer</span>
              <span class="md-chip">3D U-Net</span>
              <span class="md-chip">nnU-Net</span>
              <span class="md-chip">Mask2Former</span>
            </div>
          </div>
          <div class="arch-card animate-in animate-in-delay-1">
            <span class="material-symbols-outlined sz-40">timeline</span>
            <h4 class="title-medium">Temporal Models</h4>
            <div class="arch-tags">
              <span class="md-chip">LSTM</span>
              <span class="md-chip">GRU</span>
              <span class="md-chip">Temporal Transformer</span>
            </div>
          </div>
          <div class="arch-card animate-in animate-in-delay-2">
            <span class="material-symbols-outlined sz-40">merge</span>
            <h4 class="title-medium">Fusion Models</h4>
            <div class="arch-tags">
              <span class="md-chip">Graph Neural Networks</span>
              <span class="md-chip">Multi-Modal Attention</span>
              <span class="md-chip">Clinical Context</span>
            </div>
          </div>
          <div class="arch-card animate-in animate-in-delay-3">
            <span class="material-symbols-outlined sz-40">edit_note</span>
            <h4 class="title-medium">Report Generation</h4>
            <div class="arch-tags">
              <span class="md-chip">NLG</span>
              <span class="md-chip">Structured Output</span>
              <span class="md-chip">Scoring Systems</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Performance -->
    <section class="section perf-section">
      <div class="container">
        <h2 class="headline-large text-center">Inference Performance Targets</h2>
        <div class="table-wrapper">
          <table class="perf-table">
            <thead>
              <tr>
                <th>Metric</th>
                <th>Target</th>
              </tr>
            </thead>
            <tbody>
              @for (metric of metrics; track metric.name) {
                <tr>
                  <td>
                    <span class="material-symbols-outlined sz-20">{{ metric.icon }}</span>
                    {{ metric.name }}
                  </td>
                  <td><strong>{{ metric.value }}</strong></td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Clinician Output -->
    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center">XAI Output for Clinicians</h2>
        <p class="body-large text-secondary text-center section-desc">
          Every analysis generates a comprehensive output package with multiple layers of evidence.
        </p>
        <div class="output-grid">
          @for (item of outputItems; track item.title) {
            <div class="output-item animate-in">
              <span class="material-symbols-outlined">{{ item.icon }}</span>
              <div>
                <h4 class="title-small">{{ item.title }}</h4>
                <p class="body-small text-secondary">{{ item.desc }}</p>
              </div>
            </div>
          }
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
    .section-desc { max-width: 640px; margin: 16px auto 0; }

    .xai-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 48px; }
    .xai-card {
      padding: 32px; border-radius: var(--md-sys-shape-corner-extra-large);
      border: 1px solid var(--md-sys-color-outline-variant); background: var(--md-sys-color-surface);
      transition: all var(--md-sys-motion-duration-medium2) var(--md-sys-motion-easing-standard);
    }
    .xai-card:hover { box-shadow: var(--md-sys-elevation-2); border-color: transparent; }
    .xai-icon-wrap {
      width: 64px; height: 64px; border-radius: var(--md-sys-shape-corner-large);
      background: var(--md-sys-color-primary-container); color: var(--md-sys-color-primary);
      display: flex; align-items: center; justify-content: center; margin-bottom: 16px;
    }
    .xai-card h3 { margin-bottom: 8px; }
    .xai-output {
      margin-top: 16px; padding: 12px 16px;
      background: var(--md-sys-color-surface-container-low);
      border-radius: var(--md-sys-shape-corner-small);
      display: flex; flex-direction: column; gap: 2px;
    }

    .confidence-section { background: var(--md-sys-color-surface-container-low); }
    .flags-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 48px; }
    .flag-card {
      padding: 32px; border-radius: var(--md-sys-shape-corner-extra-large);
      background: var(--md-sys-color-surface); text-align: center;
      border: 1px solid var(--md-sys-color-outline-variant);
    }
    .flag-indicator {
      width: 48px; height: 48px; border-radius: 50%; margin: 0 auto 16px;
    }
    .flag-indicator.green { background: var(--md-sys-color-tertiary); }
    .flag-indicator.yellow { background: #f9ab00; }
    .flag-indicator.red { background: var(--md-sys-color-error); }
    .flag-range { margin: 8px 0 12px; }
    .green-flag .flag-range { color: var(--md-sys-color-tertiary); }
    .yellow-flag .flag-range { color: #f9ab00; }
    .red-flag .flag-range { color: var(--md-sys-color-error); }

    .arch-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; margin-top: 48px; }
    .arch-card {
      padding: 32px; border-radius: var(--md-sys-shape-corner-extra-large);
      border: 1px solid var(--md-sys-color-outline-variant);
    }
    .arch-card .material-symbols-outlined { color: var(--md-sys-color-primary); margin-bottom: 12px; }
    .arch-card h4 { margin-bottom: 16px; }
    .arch-tags { display: flex; flex-wrap: wrap; gap: 8px; }

    .perf-section { background: var(--md-sys-color-surface-container-low); }
    .table-wrapper { overflow-x: auto; margin-top: 32px; max-width: 700px; margin-left: auto; margin-right: auto; }
    .perf-table {
      width: 100%; border-collapse: collapse; background: var(--md-sys-color-surface);
      border-radius: var(--md-sys-shape-corner-large); overflow: hidden;
      box-shadow: var(--md-sys-elevation-1);
    }
    .perf-table th, .perf-table td {
      padding: 16px 24px; text-align: left;
      border-bottom: 1px solid var(--md-sys-color-outline-variant);
      font: var(--md-sys-typescale-body-medium);
    }
    .perf-table th {
      background: var(--md-sys-color-surface-container); font: var(--md-sys-typescale-label-large);
    }
    .perf-table td .material-symbols-outlined {
      color: var(--md-sys-color-primary); margin-right: 8px;
    }

    .output-grid {
      display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 48px;
    }
    .output-item {
      display: flex; gap: 12px; align-items: flex-start;
      padding: 20px; border-radius: var(--md-sys-shape-corner-large);
      border: 1px solid var(--md-sys-color-outline-variant);
      transition: all var(--md-sys-motion-duration-short4) var(--md-sys-motion-easing-standard);
    }
    .output-item:hover { background: var(--md-sys-color-surface-container-low); }
    .output-item .material-symbols-outlined { color: var(--md-sys-color-primary); flex-shrink: 0; }

    @media (max-width: 1024px) {
      .xai-grid { grid-template-columns: repeat(2, 1fr); }
      .output-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 640px) {
      .page-hero { padding: 100px 0 48px; }
      .xai-grid, .flags-grid, .arch-grid, .output-grid { grid-template-columns: 1fr; }
    }
  `],
})
export class TechnologyComponent {
  xaiTechniques = [
    { name: 'Grad-CAM++', icon: 'gradient', description: 'High-resolution heatmap overlays on natural images highlighting regions contributing most to each prediction.', output: 'Color overlay with opacity control' },
    { name: 'SHAP', icon: 'analytics', description: 'Feature-level attribution scores quantifying how much each image feature contributed to the prediction.', output: 'Waterfall chart and force plot' },
    { name: 'LIME', icon: 'lens_blur', description: 'Locally faithful explanations via input perturbation producing superpixel-based explanations.', output: 'Superpixel relevance map' },
    { name: 'Attention Maps', icon: 'center_focus_strong', description: 'Multi-head attention visualization from Vision Transformer architectures showing reasoning focus.', output: 'Multi-head attention heatmaps' },
    { name: 'Saliency Maps', icon: 'blur_on', description: 'Pixel-level sensitivity analysis via Integrated Gradients and Guided Backpropagation.', output: 'Integrated gradient overlay' },
    { name: 'Uncertainty Quantification', icon: 'query_stats', description: 'Calibrated confidence scores using Monte Carlo Dropout and Deep Ensemble methods with OOD detection.', output: 'Green / Yellow / Red flag with %' }
  ];

  metrics = [
    { name: 'Sensitivity for Critical Findings', value: '95% or above', icon: 'trending_up' },
    { name: 'Specificity', value: '90% or above', icon: 'target' },
    { name: 'Average Inference Time', value: 'Under 10 seconds', icon: 'timer' },
    { name: 'Critical Finding Alert Time', value: 'Under 30 seconds', icon: 'notification_important' },
    { name: 'System Uptime SLA', value: '99.9%', icon: 'cloud_done' },
    { name: 'Model Update Frequency', value: 'Quarterly major, monthly patches', icon: 'update' },
    { name: 'Drift Monitoring', value: 'Continuous, 5% degradation alert', icon: 'monitoring' }
  ];

  outputItems = [
    { icon: 'diagnosis', title: 'Primary Diagnosis', desc: 'Predicted condition with confidence score and calibrated probability' },
    { icon: 'list_alt', title: 'Differential Diagnoses', desc: 'Up to 3 ranked alternatives with individual confidence scores' },
    { icon: 'map', title: 'Visual Evidence Map', desc: 'Color-coded Grad-CAM++ overlay on the original image' },
    { icon: 'table_chart', title: 'Feature Attribution Table', desc: 'Key imaging features with SHAP values' },
    { icon: 'flag', title: 'Uncertainty Flag', desc: 'Green / Yellow / Red indicator with confidence percentage' },
    { icon: 'grade', title: 'Staging & Grading', desc: 'Disease stage or classification per recognized system' },
    { icon: 'straighten', title: 'Measurement Data', desc: 'Automated lesion dimensions, volumes, angles, ratios' },
    { icon: 'menu_book', title: 'Supporting Literature', desc: 'Hyperlinked references to clinical evidence' },
    { icon: 'description', title: 'Structured Report Draft', desc: 'Pre-filled radiology report in RIS-compatible format' }
  ];
}
