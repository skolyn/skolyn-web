import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sierra-departments',
  imports: [RouterLink],
  template: `
    <section class="module-hero sierra-bg">
      <div class="container">
        <a routerLink="/research" class="back-link"><span class="material-symbols-outlined sz-20">arrow_back</span> SIERRA Overview</a>
        <div class="hero-text animate-in">
          <div class="element-badge">
            <span class="el-sym material-symbols-outlined sz-40">hub</span>
            <span class="el-nm">Departments</span>
          </div>
          <h1 class="display-medium">Research Departments</h1>
          <p class="title-large module-tagline">Six Specialized Labs Advancing Medical Imaging AI</p>
          <p class="body-large hero-desc">
            SIERRA's six research departments span the full spectrum of medical AI — from
            fundamental explainability research and multi-modal vision to federated learning,
            clinical validation, AI ethics, and inference optimization. Each department is
            led by a domain expert and supported by a dedicated team of researchers and engineers.
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center">Research Departments</h2>
        <p class="body-large text-secondary text-center section-desc">Each department focuses on a critical dimension of medical imaging AI.</p>
        <div class="dept-list">
          @for (dept of departments; track dept.id) {
            <div class="dept-row animate-in">
              <div class="dept-icon-lg" [style.border-color]="dept.color">
                <span class="material-symbols-outlined sz-40" [style.color]="dept.color">{{ dept.icon }}</span>
              </div>
              <div class="dept-details">
                <h3 class="headline-small">{{ dept.name }}</h3>
                <p class="title-small dept-head" [style.color]="dept.color">
                  <span class="material-symbols-outlined sz-16">person</span> Head: {{ dept.head }}
                </p>
                <p class="body-large text-secondary">{{ dept.description }}</p>
                <div class="focus-chips">
                  @for (focus of dept.focuses; track focus) {
                    <span class="md-chip">{{ focus }}</span>
                  }
                </div>
                <div class="dept-stats">
                  <span class="body-small text-secondary"><span class="material-symbols-outlined sz-16">groups</span> {{ dept.members }} members</span>
                  <span class="body-small text-secondary"><span class="material-symbols-outlined sz-16">description</span> {{ dept.papers }} papers</span>
                  <span class="body-small text-secondary"><span class="material-symbols-outlined sz-16">folder</span> {{ dept.projects }} projects</span>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section alt-section">
      <div class="container">
        <h2 class="headline-large text-center">Research Methodology</h2>
        <div class="pipeline-cards">
          @for (step of methodology; track step.title; let i = $index) {
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
        <h2 class="headline-large text-center">SIERRA Philosophy</h2>
        <div class="philosophy-grid">
          <div class="philosophy-text">
            <p class="body-large text-secondary">
              We believe impactful medical AI research lives at the intersection of rigorous
              machine learning science and deep clinical domain expertise. Every initiative
              begins with a clinical question from practicing radiologists and ends with
              validated, deployable technology.
            </p>
            <p class="body-large text-secondary">
              Transparency is non-negotiable. We will not deploy a model we cannot explain.
              This drives our investment in XAI methods that produce clinically meaningful rationales.
            </p>
            <p class="body-large text-secondary">
              We publish openly. Our findings are shared through peer-reviewed publications,
              open-source tools, and collaborative research programs.
            </p>
          </div>
          <div class="stats-grid">
            @for (stat of stats; track stat.label) {
              <div class="stat-card">
                <span class="stat-value headline-large">{{ stat.value }}</span>
                <span class="body-small text-secondary">{{ stat.label }}</span>
              </div>
            }
          </div>
        </div>
      </div>
    </section>

    <section class="section alt-section">
      <div class="container">
        <h2 class="headline-large text-center">Core Research Infrastructure</h2>
        <div class="caps-grid">
          @for (cap of infra; track cap.title) {
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

    .dept-list { display: flex; flex-direction: column; gap: 24px; margin-top: 48px; }
    .dept-row { display: flex; gap: 32px; align-items: flex-start; background: var(--md-sys-color-surface-container-lowest); border: 1px solid var(--md-sys-color-outline-variant); border-radius: var(--md-sys-shape-corner-extra-large); padding: 40px; transition: all 0.3s; }
    .dept-row:hover { box-shadow: var(--md-sys-elevation-2); }
    .dept-icon-lg { width: 80px; height: 80px; min-width: 80px; border-radius: var(--md-sys-shape-corner-large); display: flex; align-items: center; justify-content: center; border: 2px solid; background: rgba(255,255,255,0.5); }
    .dept-details { flex: 1; display: flex; flex-direction: column; gap: 8px; }
    .dept-head { display: flex; align-items: center; gap: 6px; font-weight: 500; }
    .focus-chips { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 4px; }
    .dept-stats { display: flex; gap: 20px; margin-top: 8px; padding-top: 12px; border-top: 1px solid var(--md-sys-color-outline-variant); }
    .dept-stats span { display: flex; align-items: center; gap: 4px; }

    .pipeline-cards { display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px; margin-top: 48px; }
    .pipe-card { padding: 28px; border-radius: var(--md-sys-shape-corner-extra-large); background: var(--md-sys-color-surface); border: 1px solid var(--md-sys-color-outline-variant); }
    .pipe-num { width: 36px; height: 36px; border-radius: 50%; background: #1a73e8; color: white; display: flex; align-items: center; justify-content: center; font: var(--md-sys-typescale-label-large); margin-bottom: 16px; }
    .pipe-card h4 { margin-bottom: 8px; }

    .philosophy-grid { display: grid; grid-template-columns: 1.5fr 1fr; gap: 48px; align-items: start; margin-top: 48px; }
    .philosophy-text { display: flex; flex-direction: column; gap: 16px; }
    .stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    .stat-card { background: var(--md-sys-color-surface-container-low); border-radius: var(--md-sys-shape-corner-large); padding: 24px; display: flex; flex-direction: column; gap: 4px; text-align: center; border: 1px solid var(--md-sys-color-outline-variant); }
    .stat-value { color: var(--md-sys-color-primary); }

    .caps-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 48px; }
    .cap-item { display: flex; gap: 12px; padding: 20px; border-radius: var(--md-sys-shape-corner-large); border: 1px solid var(--md-sys-color-outline-variant); }
    .cap-item .material-symbols-outlined { color: #1a73e8; flex-shrink: 0; }
    .cap-item h4 { margin-bottom: 4px; }

    @media (max-width: 1024px) { .pipeline-cards { grid-template-columns: repeat(3, 1fr); } .philosophy-grid { grid-template-columns: 1fr; } .caps-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 640px) { .module-hero { padding: 100px 0 48px; } .dept-row { flex-direction: column; padding: 28px; } .pipeline-cards, .caps-grid { grid-template-columns: 1fr; } .stats-grid { grid-template-columns: 1fr; } }
  `],
})
export class SierraDepartmentsComponent {
  departments = [
    { id: 'xai', name: 'Explainable AI Lab', icon: 'visibility', color: '#1a73e8', head: 'Dr. Kamran Ahmadov', description: 'Developing interpretability methods that produce clinically meaningful explanations for AI-driven diagnostic decisions, including attention heatmaps, counterfactual reasoning, and natural-language rationales.', focuses: ['Grad-CAM++', 'SHAP', 'Counterfactual XAI', 'NLG Rationales', 'Confidence Calibration'], members: 8, papers: 23, projects: 4 },
    { id: 'multimodal', name: 'Multi-Modal Vision', icon: 'radiology', color: '#34a853', head: 'Dr. Leyla Hasanova', description: 'Designing architectures that jointly learn from MRI, CT, Ultrasound, and X-Ray data to enable cross-modality knowledge transfer and unified multi-modal diagnostic reasoning.', focuses: ['Cross-Modal Fusion', 'Transfer Learning', 'Domain Adaptation', '3D Vision Transformers'], members: 12, papers: 18, projects: 5 },
    { id: 'clinical', name: 'Clinical Validation', icon: 'clinical_notes', color: '#ea4335', head: 'Dr. Rana Mammadova', description: 'Rigorous multi-site, multi-reader clinical studies that validate AI performance against expert radiologists and establish the clinical evidence required for regulatory approval.', focuses: ['MRMC Studies', 'STARD Compliance', 'Prospective Trials', 'PMCF'], members: 6, papers: 15, projects: 3 },
    { id: 'federated', name: 'Federated Learning', icon: 'lock', color: '#fbbc04', head: 'Dr. Elvin Hasanov', description: 'Training AI models across institutions without centralizing patient data, using federated averaging with differential privacy guarantees and secure aggregation protocols.', focuses: ['Federated Averaging', 'Differential Privacy', 'Homomorphic Encryption', 'Data Sovereignty'], members: 5, papers: 11, projects: 2 },
    { id: 'fairness', name: 'AI Fairness & Ethics', icon: 'balance', color: '#9c27b0', head: 'Dr. Nigar Aliyeva', description: 'Ensuring equitable AI performance across demographic groups through bias detection, fairness-constrained training, and disaggregated performance reporting.', focuses: ['Equalized Odds', 'Demographic Parity', 'Adversarial Debiasing', 'Subgroup Analysis'], members: 4, papers: 9, projects: 2 },
    { id: 'inference', name: 'Inference Engineering', icon: 'speed', color: '#00897b', head: 'Dr. Tural Guliyev', description: 'Optimizing deep learning inference for clinical-grade latency requirements across GPU, edge, and cloud deployment targets using quantization, pruning, and ONNX runtime.', focuses: ['Model Distillation', 'INT8 Quantization', 'TensorRT', 'Edge Deployment', 'ONNX'], members: 7, papers: 14, projects: 3 },
  ];

  methodology = [
    { title: 'Clinical Question', desc: 'Identify unmet clinical needs through radiologist advisory panels' },
    { title: 'Literature Review', desc: 'Systematic review of SOTA approaches and clinical evidence gaps' },
    { title: 'Model Development', desc: 'Architecture design, training, and iterative XAI integration' },
    { title: 'Validation', desc: 'Multi-reader multi-case studies at partner clinical sites' },
    { title: 'Deployment', desc: 'Production-grade engineering and regulatory submission' },
  ];

  stats = [
    { value: '90+', label: 'Published Papers' },
    { value: '42', label: 'Research Staff' },
    { value: '12', label: 'Clinical Partners' },
    { value: '4', label: 'Imaging Modalities' },
    { value: '6', label: 'Departments' },
    { value: '3', label: 'Regulatory Markets' },
  ];

  infra = [
    { icon: 'dns', title: 'GPU Compute Cluster', desc: '128 NVIDIA A100 GPUs across 16 DGX nodes for distributed training' },
    { icon: 'storage', title: 'Clinical Data Lake', desc: '2.5M+ anonymized medical images across MRI, CT, US, and X-Ray' },
    { icon: 'security', title: 'HIPAA-Compliant Enclave', desc: 'Air-gapped data processing environment with full audit logging' },
    { icon: 'science', title: 'Experiment Tracking', desc: 'MLflow + Weights & Biases for experiment management and model registry' },
    { icon: 'cloud', title: 'Multi-Cloud Inference', desc: 'GCP, Azure, and AWS inference endpoints with sub-100ms latency' },
    { icon: 'code', title: 'CI/CD Pipeline', desc: 'Automated training, validation, and deployment with model governance gates' },
  ];
}
