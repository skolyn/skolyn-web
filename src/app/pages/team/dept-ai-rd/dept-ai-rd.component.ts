import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dept-ai-rd',
  imports: [RouterLink],
  template: `
    <section class="module-hero dept-bg">
      <div class="container">
        <a routerLink="/team" class="back-link">
          <span class="material-symbols-outlined sz-20">arrow_back</span>
          All Teams
        </a>
        <div class="hero-text animate-in">
          <div class="element-badge">
            <span class="el-sym material-symbols-outlined sz-40">psychology</span>
            <span class="el-nm">AI Engineering</span>
          </div>
          <h1 class="display-medium">AI Engineering &amp; Research</h1>
          <p class="title-large module-tagline">Deep Learning, MLOps, Edge AI &amp; Generative Models</p>
          <p class="body-large hero-desc">
            The engineering powerhouse of Skolyn. We architect, train, and deploy the clinical-grade AI 
            models that power our diagnostic platform. From massive GPU clusters to edge devices, 
            we build the intelligence that saves lives.
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center">Engineering Domains</h2>
        <p class="body-large text-secondary text-center section-desc">
          Specialized tracks transforming cutting-edge research into robust clinical products.
        </p>
        <div class="subtypes-grid">
          @for (area of focusAreas; track area.name) {
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
        <h2 class="headline-large text-center">Development Pipeline</h2>
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
        <h2 class="headline-large text-center">The Team</h2>
        <div class="staff-grid">
          @for (p of staff; track p.name) {
            <div class="staff-card">
              <div class="staff-avatar" [style.background]="deptColor"><span class="material-symbols-outlined sz-28">person</span></div>
              <div class="staff-info">
                <span class="title-medium">{{ p.name }}</span>
                <span class="body-small" [style.color]="deptColor">{{ p.role }}</span>
                <a class="c-email" [href]="'mailto:' + p.email"><span class="material-symbols-outlined sz-14">mail</span> {{ p.email }}</a>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section alt-section">
      <div class="container">
        <h2 class="headline-large text-center">Infrastructure &amp; Scale</h2>
        <div class="caps-grid">
          @for (cap of capabilities; track cap.title) {
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
    .dept-bg { background: linear-gradient(135deg, #e8f0fe, #dcedc8, #f8f9fa); }
    .back-link { display: inline-flex; align-items: center; gap: 4px; font: var(--md-sys-typescale-label-large); color: var(--md-sys-color-on-surface-variant); text-decoration: none; margin-bottom: 32px; }
    .back-link:hover { color: var(--md-sys-color-primary); }
    .element-badge { display: inline-flex; flex-direction: column; align-items: center; padding: 12px 16px; border: 2px solid #1a73e8; border-radius: var(--md-sys-shape-corner-medium); margin-bottom: 24px; background: rgba(255,255,255,0.7); }
    .el-sym { color: #1a73e8; }
    .el-nm { font: var(--md-sys-typescale-label-medium); color: var(--md-sys-color-on-surface-variant); }
    .module-tagline { color: #1a73e8; margin-bottom: 16px; }
    .hero-desc { max-width: 560px; color: var(--md-sys-color-on-surface-variant); }
    .section-desc { max-width: 640px; margin: 16px auto 0; }
    .alt-section { background: var(--md-sys-color-surface-container-low); }

    .subtypes-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 48px; }
    .subtype-card { padding: 24px; border-radius: var(--md-sys-shape-corner-large); border: 1px solid var(--md-sys-color-outline-variant); text-align: center; transition: all 0.3s; }
    .subtype-card:hover { box-shadow: var(--md-sys-elevation-1); border-color: #1a73e8; }
    .subtype-card .material-symbols-outlined { color: #1a73e8; margin-bottom: 12px; }
    .subtype-card h4 { margin-bottom: 6px; }

    .pipeline-cards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 48px; }
    .pipe-card { padding: 28px; border-radius: var(--md-sys-shape-corner-extra-large); background: var(--md-sys-color-surface); border: 1px solid var(--md-sys-color-outline-variant); }
    .pipe-num { width: 36px; height: 36px; border-radius: 50%; background: #1a73e8; color: white; display: flex; align-items: center; justify-content: center; font: var(--md-sys-typescale-label-large); margin-bottom: 16px; }
    .pipe-card h4 { margin-bottom: 8px; }

    .staff-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); gap: 16px; margin-top: 48px; }
    .staff-card { display: flex; align-items: center; gap: 16px; padding: 20px 24px; background: var(--md-sys-color-surface-container-low); border-radius: var(--md-sys-shape-corner-large); border: 1px solid var(--md-sys-color-outline-variant); transition: all 0.2s; }
    .staff-card:hover { border-color: #1a73e8; box-shadow: var(--md-sys-elevation-2); }
    .staff-avatar { width: 52px; height: 52px; min-width: 52px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; }
    .staff-info { display: flex; flex-direction: column; gap: 3px; }
    .c-email { display: inline-flex; align-items: center; gap: 4px; font: var(--md-sys-typescale-body-small); color: var(--md-sys-color-on-surface-variant); text-decoration: none; transition: color 0.2s; }
    .c-email:hover { color: var(--md-sys-color-primary); }

    .caps-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 48px; }
    .cap-item { display: flex; gap: 12px; padding: 20px; border-radius: var(--md-sys-shape-corner-large); border: 1px solid var(--md-sys-color-outline-variant); }
    .cap-item .material-symbols-outlined { color: #1a73e8; flex-shrink: 0; }
    .cap-item h4 { margin-bottom: 4px; }

    @media (max-width: 1024px) { .subtypes-grid, .pipeline-cards { grid-template-columns: repeat(2, 1fr); } .caps-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 640px) { .module-hero { padding: 100px 0 48px; } .subtypes-grid, .pipeline-cards, .caps-grid { grid-template-columns: 1fr; } .staff-grid { grid-template-columns: 1fr; } }
  `],
})
export class DeptAiRdComponent {
  deptColor = '#1a73e8';

  focusAreas = [
    { name: 'Computer Vision', icon: 'visibility', desc: 'ViT, Swin, and 3D CNN architectures for medical image analysis' },
    { name: 'MLOps & Infrastructure', icon: 'settings_suggest', desc: 'Kubernetes, MLflow, and distributed GPU training pipelines' },
    { name: 'Edge AI', icon: 'memory', desc: 'Quantized inference on embedded devices (Jetson, Edge TPU)' },
    { name: 'Generative AI', icon: 'auto_awesome', desc: 'LLMs and RAG for automated radiology reporting' },
    { name: 'Data Engineering', icon: 'database', desc: 'Petabyte-scale medical data lakehouse and ETL pipelines' },
    { name: 'Inference Engine', icon: 'speed', desc: 'TensorRT and ONNX runtime optimization for sub-100ms latency' },
    { name: 'Explainable AI', icon: 'psychology', desc: 'Grad-CAM++, SHAP, and clinical decision support rationales' },
    { name: 'Federated Learning', icon: 'security', desc: 'Privacy-preserving distributed training networks' },
  ];

  pipeline = [
    { title: 'Training', desc: 'Distributed training of large-scale vision models on H100 clusters' },
    { title: 'Optimization', desc: 'Quantization, pruning, and compilation for target hardware' },
    { title: 'Validation', desc: 'Rigorous clinical evaluation and bias testing' },
    { title: 'Deployment', desc: 'Seamless rollout to cloud and edge with A/B testing' },
  ];

  staff = [
    { name: 'Dr. Kamran Ahmadov', role: 'Director of AI Engineering', email: 'kamran.ahmadov@skolyn.se' },
    { name: 'Dr. Rashad Jafarov', role: 'Staff Machine Learning Engineer', email: 'rashad.jafarov@skolyn.se' },
    { name: 'Vusal Hajiyev', role: 'Senior MLOps Engineer', email: 'vusal.hajiyev@skolyn.se' },
    { name: 'Orkhan Babayev', role: 'Senior Computer Vision Engineer', email: 'orkhan.babayev@skolyn.se' },
    { name: 'Gunel Mammadli', role: 'Generative AI Engineer', email: 'gunel.mammadli@skolyn.se' },
    { name: 'Emil Alasgarov', role: 'AI Infrastructure Engineer', email: 'emil.alasgarov@skolyn.se' },
    { name: 'Dr. Tural Guliyev', role: 'Inference Optimization Engineer', email: 'tural.guliyev@skolyn.se' },
    { name: 'Narmin Suleymanova', role: 'Data Engineering Lead', email: 'narmin.suleymanova@skolyn.se' },
    { name: 'Dr. Elvin Hasanov', role: 'Embedded AI Engineer', email: 'elvin.hasanov@skolyn.se' },
    { name: 'Sabina Rustamova', role: 'Full Stack AI Engineer', email: 'sabina.rustamova@skolyn.se' },
  ];

  capabilities = [
    { icon: 'view_in_ar', title: '3D Volumetric Models', desc: 'Native 3D convolutional and transformer architectures for volumetric medical data' },
    { icon: 'memory', title: 'GPU Cluster', desc: 'Dedicated NVIDIA A100 compute cluster for large-scale model training' },
    { icon: 'hub', title: 'Model Zoo', desc: 'Internal repository of 200+ pre-trained medical imaging models' },
    { icon: 'science', title: 'Experiment Tracking', desc: 'MLflow-based experiment management with reproducibility guarantees' },
    { icon: 'security', title: 'Secure Data Pipeline', desc: 'HIPAA-compliant training data ingestion and anonymization pipeline' },
    { icon: 'description', title: 'Publication Pipeline', desc: '15+ peer-reviewed publications annually across top-tier venues' },
  ];
}
