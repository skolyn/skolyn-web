import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sierra-publications',
  imports: [RouterLink],
  template: `
    <section class="module-hero sierra-bg">
      <div class="container">
        <a routerLink="/research" class="back-link"><span class="material-symbols-outlined sz-20">arrow_back</span> SIERRA Overview</a>
        <div class="hero-text animate-in">
          <div class="element-badge">
            <span class="el-sym material-symbols-outlined sz-40">menu_book</span>
            <span class="el-nm">Publications</span>
          </div>
          <h1 class="display-medium">Publications</h1>
          <p class="title-large module-tagline">Peer-Reviewed Research in Medical Imaging AI</p>
          <p class="body-large hero-desc">
            SIERRA's research portfolio spans 90+ publications across Nature Medicine,
            Radiology, MICCAI, CVPR, and FAccT — covering explainable AI, clinical
            validation, federated learning, multi-modal vision, and AI fairness.
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center">Research Areas</h2>
        <p class="body-large text-secondary text-center section-desc">Publications span six core research areas across medical imaging AI.</p>
        <div class="subtypes-grid">
          @for (area of researchAreas; track area.name) {
            <div class="subtype-card animate-in">
              <span class="material-symbols-outlined sz-40">{{ area.icon }}</span>
              <h4 class="title-medium">{{ area.name }}</h4>
              <p class="body-small text-secondary">{{ area.desc }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section alt-section">
      <div class="container">
        <h2 class="headline-large text-center">Publication Pipeline</h2>
        <div class="pipeline-cards">
          @for (step of pipeline; track step.title; let i = $index) {
            <div class="pipe-card animate-in">
              <div class="pipe-num">{{ i + 1 }}</div>
              <h4 class="title-medium">{{ step.title }}</h4>
              <p class="body-small text-secondary">{{ step.desc }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center">Selected Publications</h2>
        <div class="pub-filters">
          @for (filter of pubFilters; track filter) {
            <button class="filter-chip" [class.active]="activePubFilter === filter" (click)="activePubFilter = filter">{{ filter }}</button>
          }
        </div>
        <div class="pub-list">
          @for (pub of filteredPublications; track pub.title) {
            <div class="pub-card animate-in">
              <div class="pub-venue-badge" [class]="'venue-' + pub.venueType">{{ pub.venue }}</div>
              <h3 class="title-large pub-title">{{ pub.title }}</h3>
              <p class="body-medium text-secondary pub-authors">{{ pub.authors }}</p>
              <p class="body-medium text-secondary pub-abstract">{{ pub.abstract }}</p>
              <div class="pub-meta">
                <span class="body-small text-secondary"><span class="material-symbols-outlined sz-16">calendar_today</span> {{ pub.date }}</span>
                <span class="body-small text-secondary"><span class="material-symbols-outlined sz-16">format_quote</span> {{ pub.citations }} citations</span>
                <span class="pub-tag body-small">{{ pub.area }}</span>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section alt-section">
      <div class="container">
        <h2 class="headline-large text-center">Publication Metrics</h2>
        <div class="caps-grid">
          @for (cap of metrics; track cap.title) {
            <div class="cap-item">
              <span class="material-symbols-outlined">{{ cap.icon }}</span>
              <div>
                <h4 class="title-small">{{ cap.title }}</h4>
                <p class="body-small text-secondary">{{ cap.desc }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .module-hero { padding: 120px 0 64px; }
    .sierra-bg { background: linear-gradient(135deg, #e8f0fe, #e3f2fd, #f8f9fa); }
    .back-link { display: inline-flex; align-items: center; gap: 4px; font: var(--md-sys-typescale-label-large); color: var(--md-sys-color-on-surface-variant); text-decoration: none; margin-bottom: 32px; }
    .back-link:hover { color: var(--md-sys-color-primary); }
    .element-badge { display: inline-flex; flex-direction: column; align-items: center; padding: 12px 16px; border: 2px solid #1a73e8; border-radius: var(--md-sys-shape-corner-medium); margin-bottom: 24px; background: rgba(255,255,255,0.7); }
    .el-sym { color: #1a73e8; }
    .el-nm { font: var(--md-sys-typescale-label-medium); color: var(--md-sys-color-on-surface-variant); }
    .module-tagline { color: #1a73e8; margin-bottom: 16px; }
    .hero-desc { max-width: 560px; color: var(--md-sys-color-on-surface-variant); }
    .section-desc { max-width: 640px; margin: 16px auto 0; }
    .alt-section { background: var(--md-sys-color-surface-container-low); }

    .subtypes-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 48px; }
    .subtype-card { padding: 24px; border-radius: var(--md-sys-shape-corner-large); border: 1px solid var(--md-sys-color-outline-variant); text-align: center; transition: all 0.3s; }
    .subtype-card:hover { box-shadow: var(--md-sys-elevation-1); border-color: #1a73e8; }
    .subtype-card .material-symbols-outlined { color: #1a73e8; margin-bottom: 12px; }
    .subtype-card h4 { margin-bottom: 6px; }

    .pipeline-cards { display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px; margin-top: 48px; }
    .pipe-card { padding: 28px; border-radius: var(--md-sys-shape-corner-extra-large); background: var(--md-sys-color-surface); border: 1px solid var(--md-sys-color-outline-variant); }
    .pipe-num { width: 36px; height: 36px; border-radius: 50%; background: #1a73e8; color: white; display: flex; align-items: center; justify-content: center; font: var(--md-sys-typescale-label-large); margin-bottom: 16px; }
    .pipe-card h4 { margin-bottom: 8px; }

    .pub-filters { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 32px; justify-content: center; }
    .filter-chip { padding: 8px 20px; border: 1px solid var(--md-sys-color-outline-variant); background: none; border-radius: var(--md-sys-shape-corner-full); font: var(--md-sys-typescale-label-large); color: var(--md-sys-color-on-surface-variant); cursor: pointer; transition: all 0.3s; }
    .filter-chip:hover { border-color: var(--md-sys-color-primary); color: var(--md-sys-color-primary); }
    .filter-chip.active { background: var(--md-sys-color-primary); color: var(--md-sys-color-on-primary); border-color: var(--md-sys-color-primary); }
    .pub-list { display: flex; flex-direction: column; gap: 20px; }
    .pub-card { background: var(--md-sys-color-surface-container-lowest); border: 1px solid var(--md-sys-color-outline-variant); border-radius: var(--md-sys-shape-corner-large); padding: 28px 32px; transition: all 0.3s; }
    .pub-card:hover { border-color: var(--md-sys-color-primary); box-shadow: var(--md-sys-elevation-1); }
    .pub-venue-badge { display: inline-block; padding: 3px 12px; border-radius: var(--md-sys-shape-corner-full); font: var(--md-sys-typescale-label-small); font-weight: 600; margin-bottom: 12px; }
    .venue-journal { background: #e8f5e9; color: #2e7d32; }
    .venue-conference { background: #e3f2fd; color: #1565c0; }
    .venue-preprint { background: #fff3e0; color: #e65100; }
    .pub-title { margin-bottom: 6px; }
    .pub-authors { font-style: italic; margin-bottom: 8px; }
    .pub-abstract { margin-bottom: 12px; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
    .pub-meta { display: flex; flex-wrap: wrap; gap: 16px; align-items: center; }
    .pub-meta span { display: flex; align-items: center; gap: 4px; }
    .pub-tag { padding: 3px 10px; background: var(--md-sys-color-surface-container); border-radius: var(--md-sys-shape-corner-full); color: var(--md-sys-color-on-surface-variant); }

    .caps-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 48px; }
    .cap-item { display: flex; gap: 12px; padding: 20px; border-radius: var(--md-sys-shape-corner-large); border: 1px solid var(--md-sys-color-outline-variant); }
    .cap-item .material-symbols-outlined { color: #1a73e8; flex-shrink: 0; }
    .cap-item h4 { margin-bottom: 4px; }

    @media (max-width: 1024px) { .subtypes-grid, .pipeline-cards { grid-template-columns: repeat(2, 1fr); } .caps-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 640px) { .module-hero { padding: 100px 0 48px; } .subtypes-grid, .pipeline-cards, .caps-grid { grid-template-columns: 1fr; } }
  `],
})
export class SierraPublicationsComponent {
  activePubFilter = 'All';
  pubFilters = ['All', 'Explainable AI', 'Clinical Validation', 'Multi-Modal', 'Fairness', 'Infrastructure'];

  researchAreas = [
    { name: 'Explainable AI', icon: 'visibility', desc: 'Attention heatmaps, counterfactual reasoning, NLG rationales, confidence calibration' },
    { name: 'Clinical Validation', icon: 'clinical_notes', desc: 'MRMC reader studies, prospective trials, STARD compliance, PMCF reports' },
    { name: 'Multi-Modal Vision', icon: 'radiology', desc: 'Cross-modality architectures, 3D vision transformers, domain adaptation' },
    { name: 'Federated Learning', icon: 'lock', desc: 'Privacy-preserving training, differential privacy, secure aggregation' },
    { name: 'AI Fairness', icon: 'balance', desc: 'Bias detection, equalized odds, demographic parity, subgroup analysis' },
    { name: 'Inference Engineering', icon: 'speed', desc: 'Model distillation, quantization, TensorRT, edge deployment' },
  ];

  pipeline = [
    { title: 'Hypothesis', desc: 'Clinical question identification with radiologist advisory panel' },
    { title: 'Experimentation', desc: 'Model development, ablation studies, and internal benchmarking' },
    { title: 'Internal Review', desc: 'Cross-departmental peer review and reproducibility checks' },
    { title: 'Submission', desc: 'Journal and conference submission with top-tier venue targeting' },
    { title: 'Open Access', desc: 'Post-publication open-access archiving and dataset release' },
  ];

  publications = [
    { title: 'Attention-Guided Explainability for Multi-Pathology Chest X-Ray Classification', authors: 'Ahmadov K., Rustamova S., Mammadov F., et al.', venue: 'Nature Medicine', venueType: 'journal', date: 'March 2026', citations: 12, area: 'Explainable AI', abstract: 'We present a novel attention-guided explainability framework that simultaneously localizes and explains 14 thoracic pathologies on chest radiographs. The framework integrates Grad-CAM++ heatmaps with a medical language model to produce natural-language rationales.' },
    { title: 'Federated Learning for Multi-Institutional Brain MRI Segmentation with Differential Privacy', authors: 'Hasanov E., Hajiyev V., Mammadov F., et al.', venue: 'MICCAI 2026', venueType: 'conference', date: 'February 2026', citations: 3, area: 'Multi-Modal', abstract: 'We demonstrate that federated learning with differential privacy guarantees can achieve brain tumor segmentation performance within 1.2% Dice score of centralized training.' },
    { title: 'Multi-Reader Multi-Case Validation of AI-Assisted Mammography Screening', authors: 'Mammadova R., Karimova A., Mammadov F., et al.', venue: 'Radiology', venueType: 'journal', date: 'February 2026', citations: 5, area: 'Clinical Validation', abstract: 'A prospective multi-site MRMC study across 5 institutions and 15 radiologists demonstrates that AI-assisted mammography reading improves cancer detection rate by 14% while reducing false positive recall by 22%.' },
    { title: 'Equalized Odds in Pulmonary Nodule Detection Across Demographic Subgroups', authors: 'Aliyeva N., Suleymanova N., Mammadov F.', venue: 'FAccT 2026', venueType: 'conference', date: 'March 2026', citations: 1, area: 'Fairness', abstract: 'We identify and mitigate systematic performance disparities in CT pulmonary nodule detection across age, sex, and body habitus subgroups, achieving equalized odds within 3% TPR difference.' },
    { title: 'Sub-Second Inference for 3D Medical Image Analysis via Progressive Knowledge Distillation', authors: 'Guliyev T., Alasgarov E., Huseynov E.', venue: 'arXiv preprint', venueType: 'preprint', date: 'February 2026', citations: 0, area: 'Infrastructure', abstract: 'We present a progressive knowledge distillation pipeline that compresses 3D ResNet-152 teacher models achieving 40x inference speedup with less than 1% accuracy degradation.' },
    { title: 'Counterfactual Explanations for Cardiac MRI Segmentation Decisions', authors: 'Jafarov R., Ahmadov K., Hasanova L.', venue: 'CVPR 2026', venueType: 'conference', date: 'March 2026', citations: 2, area: 'Explainable AI', abstract: 'We introduce a counterfactual explanation framework for cardiac MRI segmentation that identifies the minimal set of voxel-level changes required to alter the model prediction.' },
    { title: 'Domain-Adaptive Ultrasound Feature Learning for Cross-Scanner Generalization', authors: 'Hasanova L., Mammadli G., Babayev O.', venue: 'IEEE TMI', venueType: 'journal', date: 'January 2026', citations: 8, area: 'Multi-Modal', abstract: 'We propose a domain-adaptive pre-training strategy that enables ultrasound models to generalize across scanner manufacturers with less than 2% performance drop on unseen devices.' },
    { title: 'Fairness-Constrained Optimization for Chest CT Screening in Underrepresented Populations', authors: 'Aliyeva N., Mammadov F.', venue: 'The Lancet Digital Health', venueType: 'journal', date: 'December 2025', citations: 15, area: 'Fairness', abstract: 'We demonstrate that fairness-constrained training objectives can reduce performance gaps across racial and ethnic groups in low-dose CT lung cancer screening without significant accuracy loss.' },
  ];

  metrics = [
    { icon: 'description', title: '90+ Total Papers', desc: 'Across Nature Medicine, Radiology, MICCAI, CVPR, FAccT, IEEE TMI, and Lancet Digital Health' },
    { icon: 'format_quote', title: '4,200+ Citations', desc: 'Growing 35% year-over-year with increasing impact in clinical AI' },
    { icon: 'workspace_premium', title: '3 Best Paper Awards', desc: 'MICCAI 2025 Best Paper, CVPR Workshop 2024, IEEE TMI Editor\'s Choice' },
    { icon: 'public', title: '10 Open Datasets', desc: 'Released with standardized benchmarks for reproducible medical AI research' },
    { icon: 'code', title: '15 Open-Source Tools', desc: 'XAI visualization, fairness auditing, federated simulation frameworks' },
    { icon: 'school', title: '6 Invited Keynotes', desc: 'Keynote presentations at RSNA, ECR, MICCAI, NeurIPS workshop, AAAI' },
  ];

  get filteredPublications() {
    if (this.activePubFilter === 'All') return this.publications;
    return this.publications.filter(p => p.area === this.activePubFilter);
  }
}
