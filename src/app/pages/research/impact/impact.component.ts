import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sierra-impact',
  imports: [RouterLink],
  template: `
    <section class="module-hero sierra-bg">
      <div class="container">
        <a routerLink="/research" class="back-link"><span class="material-symbols-outlined sz-20">arrow_back</span> SIERRA Overview</a>
        <div class="hero-text animate-in">
          <div class="element-badge">
            <span class="el-sym material-symbols-outlined sz-40">trending_up</span>
            <span class="el-nm">Impact</span>
          </div>
          <h1 class="display-medium">Research Impact</h1>
          <p class="title-large module-tagline">From Lab to Clinic — Measurable, Translational Outcomes</p>
          <p class="body-large hero-desc">
            Measuring how SIERRA research translates into clinical outcomes,
            real-world deployments, regulatory clearances, and advancing the
            global state of the art in medical imaging AI.
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center">Impact Metrics</h2>
        <p class="body-large text-secondary text-center section-desc">Key performance indicators across research, clinical, and regulatory dimensions.</p>
        <div class="subtypes-grid">
          @for (metric of impactMetrics; track metric.label) {
            <div class="subtype-card animate-in">
              <span class="material-symbols-outlined sz-40">{{ metric.icon }}</span>
              <span class="impact-value display-small">{{ metric.value }}</span>
              <h4 class="title-medium">{{ metric.label }}</h4>
              <p class="body-small text-secondary">{{ metric.trend }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section alt-section">
      <div class="container">
        <h2 class="headline-large text-center">Research to Product Pipeline</h2>
        <div class="pipeline-cards">
          @for (step of r2pStages; track step.label; let i = $index) {
            <div class="pipe-card animate-in">
              <div class="pipe-num">{{ i + 1 }}</div>
              <h4 class="title-medium">{{ step.label }}</h4>
              <p class="body-small text-secondary">{{ step.desc }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center">Clinical Research Milestones</h2>
        <div class="milestones-timeline">
          @for (milestone of milestones; track milestone.title) {
            <div class="milestone-item animate-in">
              <div class="milestone-dot"></div>
              <div class="milestone-card">
                <span class="label-large" style="color: var(--md-sys-color-primary);">{{ milestone.date }}</span>
                <h4 class="title-large">{{ milestone.title }}</h4>
                <p class="body-medium text-secondary">{{ milestone.description }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section alt-section">
      <div class="container">
        <h2 class="headline-large text-center">Impact Dimensions</h2>
        <div class="caps-grid">
          @for (cap of impactDimensions; track cap.title) {
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

    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center">Clinical Outcomes</h2>
        <p class="body-large text-secondary text-center section-desc">
          Measured improvements from AI-assisted diagnostics across deployed clinical sites.
        </p>
        <div class="outcomes-grid">
          @for (outcome of clinicalOutcomes; track outcome.title) {
            <div class="outcome-card animate-in">
              <span class="outcome-value headline-medium">{{ outcome.value }}</span>
              <h4 class="title-medium">{{ outcome.title }}</h4>
              <p class="body-small text-secondary">{{ outcome.desc }}</p>
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
    .subtype-card { padding: 28px; border-radius: var(--md-sys-shape-corner-large); border: 1px solid var(--md-sys-color-outline-variant); text-align: center; transition: all 0.3s; }
    .subtype-card:hover { box-shadow: var(--md-sys-elevation-1); border-color: #1a73e8; transform: translateY(-2px); }
    .subtype-card .material-symbols-outlined { color: #1a73e8; margin-bottom: 8px; }
    .subtype-card h4 { margin-bottom: 4px; }
    .impact-value { color: var(--md-sys-color-primary); display: block; margin-bottom: 4px; }

    .pipeline-cards { display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px; margin-top: 48px; }
    .pipe-card { padding: 28px; border-radius: var(--md-sys-shape-corner-extra-large); background: var(--md-sys-color-surface); border: 1px solid var(--md-sys-color-outline-variant); }
    .pipe-num { width: 36px; height: 36px; border-radius: 50%; background: #1a73e8; color: white; display: flex; align-items: center; justify-content: center; font: var(--md-sys-typescale-label-large); margin-bottom: 16px; }
    .pipe-card h4 { margin-bottom: 8px; }

    .milestones-timeline { position: relative; max-width: 800px; margin: 48px auto 0; padding-left: 40px; }
    .milestones-timeline::before { content: ''; position: absolute; left: 15px; top: 0; bottom: 0; width: 2px; background: var(--md-sys-color-outline-variant); }
    .milestone-item { position: relative; margin-bottom: 28px; }
    .milestone-dot { position: absolute; left: -40px; top: 4px; width: 22px; height: 22px; border-radius: 50%; background: var(--md-sys-color-primary-container); border: 3px solid var(--md-sys-color-primary); }
    .milestone-card { background: var(--md-sys-color-surface-container-lowest); border: 1px solid var(--md-sys-color-outline-variant); border-radius: var(--md-sys-shape-corner-large); padding: 24px; display: flex; flex-direction: column; gap: 6px; transition: all 0.3s; }
    .milestone-card:hover { border-color: var(--md-sys-color-primary); box-shadow: var(--md-sys-elevation-1); }

    .caps-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 48px; }
    .cap-item { display: flex; gap: 12px; padding: 20px; border-radius: var(--md-sys-shape-corner-large); border: 1px solid var(--md-sys-color-outline-variant); }
    .cap-item .material-symbols-outlined { color: #1a73e8; flex-shrink: 0; }
    .cap-item h4 { margin-bottom: 4px; }

    .outcomes-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 48px; }
    .outcome-card { padding: 28px; border-radius: var(--md-sys-shape-corner-large); border: 1px solid var(--md-sys-color-outline-variant); text-align: center; transition: all 0.3s; }
    .outcome-card:hover { box-shadow: var(--md-sys-elevation-1); border-color: #1a73e8; }
    .outcome-value { color: var(--md-sys-color-primary); display: block; margin-bottom: 8px; }
    .outcome-card h4 { margin-bottom: 6px; }

    @media (max-width: 1024px) { .subtypes-grid { grid-template-columns: repeat(2, 1fr); } .pipeline-cards { grid-template-columns: repeat(3, 1fr); } .caps-grid { grid-template-columns: repeat(2, 1fr); } .outcomes-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 640px) { .module-hero { padding: 100px 0 48px; } .subtypes-grid, .pipeline-cards, .caps-grid, .outcomes-grid { grid-template-columns: 1fr; } }
  `],
})
export class SierraImpactComponent {
  impactMetrics = [
    { icon: 'description', value: '90+', label: 'Published Papers', trend: '+18 in 2025' },
    { icon: 'format_quote', value: '4,200+', label: 'Total Citations', trend: '+1,400 in 2025' },
    { icon: 'local_hospital', value: '12', label: 'Clinical Trial Sites', trend: '+4 in 2025' },
    { icon: 'groups', value: '42', label: 'Research Staff', trend: '+11 in 2025' },
    { icon: 'verified', value: '3', label: 'Regulatory Clearances', trend: 'FDA, EU MDR, MHRA' },
    { icon: 'radiology', value: '4', label: 'Imaging Modalities', trend: 'MRI, CT, US, X-Ray' },
  ];

  r2pStages = [
    { label: 'Research', desc: 'Hypothesis formation, literature review, and experimental design' },
    { label: 'Publication', desc: 'Peer review, validation, and open-access archiving' },
    { label: 'Engineering', desc: 'Production implementation, optimization, and integration' },
    { label: 'Regulatory', desc: 'Clearance submission, conformity assessment, and certification' },
    { label: 'Deployment', desc: 'Clinical integration, monitoring, and post-market follow-up' },
  ];

  milestones = [
    { date: 'Feb 2026', title: 'SIERRA Officially Established', description: 'Skolyn Institute for Engineering, Research, Radiology & AI formally launched with 6 departments and 42 research staff.' },
    { date: 'Q1 2026', title: 'FDA De Novo Clearance for Multi-Pathology CXR', description: 'First AI system cleared for simultaneous 14-pathology chest X-ray analysis with integrated explainability output.' },
    { date: 'Q4 2025', title: 'MICCAI Best Paper Award', description: 'Federated learning paper on privacy-preserving brain MRI segmentation received the Best Paper Award at MICCAI 2025.' },
    { date: 'Q3 2025', title: 'Multi-Site MRMC Study Published in Radiology', description: 'Landmark 5-site, 15-reader study demonstrating statistically significant improvement in mammography screening with AI assistance.' },
    { date: 'Q2 2025', title: 'EU MDR CE Marking for Terbium OS', description: 'Achieved Class IIa CE marking under EU MDR 2017/745 for the Terbium OS X-Ray analysis module.' },
    { date: 'Q1 2025', title: 'Federated Learning Network Launch', description: 'Launched multi-institutional federated learning network across 8 clinical partner sites with differential privacy guarantees.' },
  ];

  impactDimensions = [
    { icon: 'science', title: 'Scientific Impact', desc: 'Publications in top-tier venues, citations, open-source tools, and benchmark datasets' },
    { icon: 'local_hospital', title: 'Clinical Impact', desc: 'Improved diagnostic accuracy, reduced reading time, and fewer missed findings' },
    { icon: 'verified', title: 'Regulatory Impact', desc: 'FDA, EU MDR, and MHRA clearances establishing evidence-based AI approval pathways' },
    { icon: 'public', title: 'Global Health Impact', desc: 'Broadening access to expert-level diagnostics in underserved healthcare settings' },
    { icon: 'balance', title: 'Equity Impact', desc: 'Fairness-constrained models reducing demographic performance disparities' },
    { icon: 'school', title: 'Talent Impact', desc: '28 alumni, 6 startups, and training next-generation medical AI researchers' },
  ];

  clinicalOutcomes = [
    { value: '+14%', title: 'Cancer Detection', desc: 'Improvement in mammography screening detection rate' },
    { value: '-22%', title: 'False Positives', desc: 'Reduction in false positive recall rate' },
    { value: '-35%', title: 'Reading Time', desc: 'Reduction in radiologist interpretation time per study' },
    { value: '99.2%', title: 'Sensitivity', desc: 'Multi-pathology CXR sensitivity on prospective data' },
    { value: '<100ms', title: 'Inference Latency', desc: 'End-to-end inference time for all production modules' },
    { value: '1.2%', title: 'Dice Gap', desc: 'Federated vs. centralized brain MRI segmentation gap' },
    { value: '<3%', title: 'Fairness Gap', desc: 'Maximum TPR difference across demographic subgroups' },
    { value: '98.7%', title: 'System Uptime', desc: 'Production availability across all deployed clinical sites' },
  ];
}
