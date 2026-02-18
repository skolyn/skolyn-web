import { Component } from '@angular/core';

@Component({
  selector: 'app-docs',
  imports: [],
  template: `
    <section class="page-hero">
      <div class="container">
        <div class="hero-label"><span class="material-symbols-outlined sz-20">description</span> Documentation</div>
        <h1 class="display-medium animate-in">Developer & Integration Docs</h1>
        <p class="body-large text-secondary hero-desc animate-in animate-in-delay-1">
          Technical documentation for integrating Skolyn into your clinical infrastructure.
          All documents are available for download.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container docs-layout">
        <nav class="docs-sidebar">
          <h3 class="title-medium">Categories</h3>
          @for (cat of categories; track cat.title) {
            <button type="button" class="sidebar-link" [class.active]="selectedCategory === cat.title" (click)="selectedCategory = cat.title">
              <span class="material-symbols-outlined sz-20">{{ cat.icon }}</span>
              {{ cat.title }}
              <span class="sidebar-count">{{ cat.docs.length }}</span>
            </button>
          }

          <div class="sidebar-divider"></div>
          <div class="sidebar-info">
            <span class="material-symbols-outlined sz-20">info</span>
            <span class="body-small text-secondary">Enterprise-grade technical documentation: reviewed, versioned, and maintained to regulatory compliance standards.</span>
          </div>
        </nav>

        <div class="docs-content">
          @for (cat of categories; track cat.title) {
            @if (selectedCategory === cat.title) {
              <h2 class="headline-medium">{{ cat.title }}</h2>
              <p class="body-large text-secondary" style="margin-bottom: 32px;">{{ cat.desc }}</p>
              <div class="docs-grid">
                @for (doc of cat.docs; track doc.title) {
                  <a class="doc-card" [href]="getDocUrl(doc.file)" target="_blank" rel="noopener noreferrer">
                    <div class="doc-icon" [style.background]="doc.color">
                      <span class="material-symbols-outlined">{{ doc.icon }}</span>
                    </div>
                    <div class="doc-info">
                      <h4 class="title-medium">{{ doc.title }}</h4>
                      <p class="body-small text-secondary">{{ doc.desc }}</p>
                      <div class="doc-meta">
                        <span class="body-small doc-tag">{{ doc.tag }}</span>
                        <div class="doc-actions">
                          <a class="doc-btn view-btn" [href]="getDocUrl(doc.file)" target="_blank" rel="noopener noreferrer" title="View Document">
                            <span class="material-symbols-outlined sz-18">open_in_new</span> View
                          </a>
                          <button class="doc-btn download-btn" (click)="downloadDoc(doc.file, doc.title); $event.preventDefault(); $event.stopPropagation();" title="Save as PDF">
                            <span class="material-symbols-outlined sz-18">picture_as_pdf</span> PDF
                          </button>
                        </div>
                      </div>
                    </div>
                  </a>
                }
              </div>
            }
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .page-hero { padding: 120px 0 64px; background: var(--md-sys-color-surface-container-low); text-align: center; }
    .hero-label { display: inline-flex; align-items: center; gap: 8px; padding: 6px 16px 6px 12px; background: rgba(26,115,232,0.08); border-radius: var(--md-sys-shape-corner-full); font: var(--md-sys-typescale-label-large); color: var(--md-sys-color-primary); margin-bottom: 24px; }
    .hero-desc { max-width: 640px; margin: 16px auto 0; font-size: 18px; line-height: 28px; }
    .docs-layout { display: grid; grid-template-columns: 280px 1fr; gap: 48px; align-items: start; }
    .docs-sidebar { position: sticky; top: 80px; background: var(--md-sys-color-surface-container-low); border-radius: var(--md-sys-shape-corner-large); padding: 24px; }
    .docs-sidebar h3 { margin-bottom: 16px; color: var(--md-sys-color-on-surface); }
    .sidebar-link { width: 100%; border: 0; background: transparent; display: flex; align-items: center; gap: 10px; padding: 10px 14px; border-radius: var(--md-sys-shape-corner-small); font: var(--md-sys-typescale-body-medium); color: var(--md-sys-color-on-surface-variant); text-decoration: none; cursor: pointer; transition: all 0.2s; margin-bottom: 2px; text-align: left; }
    .sidebar-link:hover { background: var(--md-sys-color-surface-container); color: var(--md-sys-color-on-surface); }
    .sidebar-link.active { background: var(--md-sys-color-primary-container); color: var(--md-sys-color-primary); font-weight: 500; }
    .sidebar-count { margin-left: auto; font-size: 12px; background: var(--md-sys-color-surface-container-highest); padding: 2px 8px; border-radius: 10px; color: var(--md-sys-color-on-surface-variant); }
    .sidebar-link.active .sidebar-count { background: rgba(26,115,232,0.15); color: var(--md-sys-color-primary); }
    .sidebar-divider { height: 1px; background: var(--md-sys-color-outline-variant); margin: 16px 0; }
    .sidebar-info { display: flex; gap: 8px; align-items: flex-start; padding: 12px; background: var(--md-sys-color-surface-container); border-radius: var(--md-sys-shape-corner-small); }
    .sidebar-info .material-symbols-outlined { color: var(--md-sys-color-primary); flex-shrink: 0; margin-top: 2px; }
    .docs-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
    .doc-card { display: flex; gap: 20px; padding: 24px; border: 1px solid var(--md-sys-color-outline-variant); border-radius: var(--md-sys-shape-corner-medium); transition: all 0.2s; cursor: pointer; text-decoration: none; color: inherit; }
    .doc-card:hover { border-color: var(--md-sys-color-primary); box-shadow: var(--md-sys-elevation-1); transform: translateY(-2px); }
    .doc-icon { width: 48px; height: 48px; border-radius: var(--md-sys-shape-corner-small); display: flex; align-items: center; justify-content: center; color: white; flex-shrink: 0; }
    .doc-info { flex: 1; min-width: 0; }
    .doc-card h4 { margin-bottom: 4px; }
    .doc-card p { margin-bottom: 10px; }
    .doc-meta { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; }
    .doc-tag { color: var(--md-sys-color-primary); font-weight: 500; }
    .doc-actions { display: flex; gap: 8px; }
    .doc-btn { display: inline-flex; align-items: center; gap: 4px; padding: 6px 14px; border-radius: var(--md-sys-shape-corner-full); font: var(--md-sys-typescale-label-medium); cursor: pointer; border: none; transition: all 0.2s; }
    .view-btn { background: var(--md-sys-color-surface-container); color: var(--md-sys-color-on-surface); }
    .view-btn:hover { background: var(--md-sys-color-surface-container-highest); }
    .download-btn { background: var(--md-sys-color-primary); color: var(--md-sys-color-on-primary); }
    .download-btn:hover { background: var(--md-sys-color-primary-container); color: var(--md-sys-color-primary); box-shadow: var(--md-sys-elevation-1); }
    .sz-18 { font-size: 18px !important; }
    @media (max-width: 1024px) { .docs-layout { grid-template-columns: 1fr; } .docs-sidebar { position: static; } }
    @media (max-width: 640px) {
      .page-hero { padding: 100px 0 48px; }
      .doc-meta { flex-direction: column; align-items: flex-start; }
      .doc-actions { width: 100%; }
      .doc-btn { flex: 1; justify-content: center; }
    }
  `],
})
export class DocsComponent {
  selectedCategory = 'Getting Started';

  categories = [
    { title: 'Getting Started', icon: 'rocket_launch', desc: 'Essential guides to begin integrating Skolyn into your clinical workflow.',
      docs: [
        { title: 'Platform Overview', desc: 'Architecture, modules, and core concepts of the Skolyn diagnostic platform.', icon: 'architecture', color: '#1a73e8', tag: 'Guide', file: 'platform-overview.html' },
        { title: 'Quick Start Guide', desc: 'Get up and running with Skolyn in under 30 minutes with this step-by-step guide.', icon: 'play_circle', color: '#1e8e3e', tag: 'Tutorial', file: 'quick-start-guide.html' },
        { title: 'Installation Guide', desc: 'Detailed installation instructions for Docker, Kubernetes, and Bare Metal.', icon: 'download', color: '#00796b', tag: 'Guide', file: 'installation-guide.html' },
        { title: 'Configuration Reference', desc: 'Complete reference for environment variables and YAML configuration.', icon: 'settings', color: '#607d8b', tag: 'Reference', file: 'configuration-reference.html' },
        { title: 'Deployment Guide', desc: 'Cloud, on-premise, hybrid, and edge deployment models with sizing.', icon: 'deployed_code', color: '#ea8600', tag: 'DevOps', file: 'deployment-guide.html' },
        { title: 'Architecture Overview', desc: 'Deep dive into Skolyn\'s system design, microservices, and data flow.', icon: 'schema', color: '#d93025', tag: 'Technical', file: 'architecture-overview.html' },
      ]
    },
    { title: 'Integration', icon: 'integration_instructions', desc: 'Connect Skolyn with your existing radiology and clinical infrastructure.',
      docs: [
        { title: 'DICOM Integration', desc: 'Configure DICOM endpoints, transfer syntaxes, and routing rules.', icon: 'share', color: '#1a73e8', tag: 'Guide', file: 'dicom-integration.html' },
        { title: 'HL7 FHIR API', desc: 'RESTful API for DiagnosticReport and ImagingStudy resources.', icon: 'api', color: '#d93025', tag: 'API', file: 'fhir-api-reference.html' },
        { title: 'EHR Integration', desc: 'Epic/Cerner integration via SMART on FHIR and CDS Hooks.', icon: 'dataset', color: '#1e8e3e', tag: 'Guide', file: 'ehr-integration.html' },
        { title: 'PACS Connectivity', desc: 'Connecting to vendor PACS (Sectra, Fuji, GE, Phillips).', icon: 'router', color: '#ea8600', tag: 'Connectivity', file: 'pacs-connectivity.html' },
        { title: 'RIS Integration', desc: 'HL7v2 ORM/ORU messaging for order and report synchronization.', icon: 'sync', color: '#673ab7', tag: 'Guide', file: 'ris-integration.html' },
        { title: 'HL7v2 Messaging', desc: 'Specification for supported HL7v2.5.1 messages and segments.', icon: 'message', color: '#0097a7', tag: 'Spec', file: 'hl7v2-messaging.html' },
        { title: 'DICOMweb API', desc: 'WADO-RS, QIDO-RS, and STOW-RS standard implementation.', icon: 'cloud_sync', color: '#c2185b', tag: 'API', file: 'dicomweb-api.html' },
        { title: 'Worklist Management', desc: 'DICOM MWL SCU/SCP configuration and prioritization logic.', icon: 'list_alt', color: '#455a64', tag: 'Guide', file: 'worklist-management.html' },
      ]
    },
    { title: 'Module Overviews', icon: 'view_module', desc: 'High-level documentation for each imaging modality operating system.',
      docs: [
        { title: 'Rhenium OS - MRI', desc: 'Cross-attention fusion and volumetric analysis for Neuro/Body MRI.', icon: 'psychology', color: 'var(--color-rhenium)', tag: 'Module', file: 'rhenium-os-mri.html' },
        { title: 'Seaborgium OS - CT', desc: '3D processing and STAT triage for Chest/Abdomen/Neuro CT.', icon: 'scan', color: 'var(--color-seaborgium)', tag: 'Module', file: 'seaborgium-os-ct.html' },
        { title: 'Scandium OS - Ultrasound', desc: 'Real-time streaming and speckle-aware processing for US.', icon: 'ecg', color: 'var(--color-scandium)', tag: 'Module', file: 'scandium-os-ultrasound.html' },
        { title: 'Terbium OS - X-Ray', desc: 'Multi-scale encoder for CR/DR fracture and lung analysis.', icon: 'orthopedics', color: 'var(--color-terbium)', tag: 'Module', file: 'terbium-os-xray.html' },
      ]
    },
    { title: 'MRI Analysis', icon: 'psychology', desc: 'Specific clinical applications within the Rhenium MRI module.',
      docs: [
        { title: 'Brain MRI Analysis', desc: 'Stroke, Tumor, MS, and Dementia quantification protocols.', icon: 'psychology', color: 'var(--color-rhenium)', tag: 'Clinical', file: 'brain-mri-analysis.html' },
        { title: 'Cardiac MRI', desc: 'Function, Flow, and Tissue Characterization (LGE/Mapping).', icon: 'favorite', color: 'var(--color-rhenium)', tag: 'Clinical', file: 'cardiac-mri-analysis.html' },
        { title: 'Breast MRI', desc: 'Kinetic analysis and CAD for lesion detection.', icon: 'diversity_1', color: 'var(--color-rhenium)', tag: 'Clinical', file: 'breast-mri-analysis.html' },
        { title: 'MSK MRI', desc: 'Meniscus, ACL, and Rotator Cuff tear detection.', icon: 'accessibility_new', color: 'var(--color-rhenium)', tag: 'Clinical', file: 'msk-mri-analysis.html' },
      ]
    },
    { title: 'CT Analysis', icon: 'scan', desc: 'Specific clinical applications within the Seaborgium CT module.',
      docs: [
        { title: 'Chest CT Analysis', desc: 'Lung nodule, PE, COPD, and ILD quantification.', icon: 'respiratory_rate', color: 'var(--color-seaborgium)', tag: 'Clinical', file: 'chest-ct-analysis.html' },
        { title: 'Cardiac CTA', desc: 'Coronary stenosis (CAD-RADS) and plaque analysis.', icon: 'monitor_heart', color: 'var(--color-seaborgium)', tag: 'Clinical', file: 'cardiac-cta-guide.html' },
        { title: 'Trauma CT', desc: 'Automated fracture and hemorrhage detection for ER.', icon: 'emergency', color: 'var(--color-seaborgium)', tag: 'Clinical', file: 'trauma-ct-guide.html' },
        { title: 'Pulmonary Nodules', desc: 'Lung-RADS classification and volumetric growth tracking.', icon: 'radio_button_checked', color: 'var(--color-seaborgium)', tag: 'Clinical', file: 'pulmonary-nodule-management.html' },
      ]
    },
    { title: 'Ultrasound Analysis', icon: 'ecg', desc: 'Specific clinical applications within the Scandium US module.',
      docs: [
        { title: 'Echocardiography', desc: 'Automated EF, Strain (GLS), and Valve analysis.', icon: 'favorite_border', color: 'var(--color-scandium)', tag: 'Clinical', file: 'echocardiography-guide.html' },
        { title: 'Obstetric US', desc: 'Fetal biometry, anatomy scan, and growth charting.', icon: 'child_care', color: 'var(--color-scandium)', tag: 'Clinical', file: 'obstetric-ultrasound-guide.html' },
        { title: 'POCUS', desc: 'eFAST, RUSH, and Lung protocols for emergency care.', icon: 'medical_services', color: 'var(--color-scandium)', tag: 'Clinical', file: 'point-of-care-ultrasound.html' },
        { title: 'Thyroid US', desc: 'TI-RADS scoring and lymph node characterization.', icon: 'gesture', color: 'var(--color-scandium)', tag: 'Clinical', file: 'thyroid-ultrasound-guide.html' },
      ]
    },
    { title: 'X-Ray Analysis', icon: 'orthopedics', desc: 'Specific clinical applications within the Terbium X-Ray module.',
      docs: [
        { title: 'Chest X-Ray', desc: 'Pneumonia and Pneumothorax detection (Heatmaps).', icon: 'respiratory_rate', color: 'var(--color-terbium)', tag: 'Clinical', file: 'chest-xray-analysis.html' },
        { title: 'MSK X-Ray', desc: 'Fracture detection and Osteoarthritis grading.', icon: 'accessibility', color: 'var(--color-terbium)', tag: 'Clinical', file: 'musculoskeletal-xray.html' },
        { title: 'Mammography', desc: 'Mass and Calcification detection for screening.', icon: 'female', color: 'var(--color-terbium)', tag: 'Clinical', file: 'mammography-screening.html' },
        { title: 'Bone Age', desc: 'Automated skeletal maturity assessment (Greulich-Pyle).', icon: 'calendar_today', color: 'var(--color-terbium)', tag: 'Clinical', file: 'bone-age-assessment.html' },
      ]
    },
    { title: 'Security & Compliance', icon: 'shield', desc: 'Security architecture, regulatory compliance, and data protection.',
      docs: [
        { title: 'Security Architecture', desc: 'Zero trust, network isolation, and identity management.', icon: 'lock', color: '#d32f2f', tag: 'Security', file: 'security-architecture.html' },
        { title: 'HIPAA Compliance', desc: 'Technical and administrative safeguards for PHI.', icon: 'verified_user', color: '#d32f2f', tag: 'Compliance', file: 'hipaa-compliance.html' },
        { title: 'GDPR Compliance', desc: 'Data subject rights and data processing agreements.', icon: 'policy', color: '#d32f2f', tag: 'Compliance', file: 'gdpr-compliance.html' },
        { title: 'Audit Logging', desc: 'Immutable audit trails for all system access.', icon: 'fact_check', color: '#d32f2f', tag: 'Security', file: 'audit-logging.html' },
        { title: 'Access Control', desc: 'RBAC, SSO, and MFA configuration.', icon: 'admin_panel_settings', color: '#d32f2f', tag: 'Security', file: 'access-control.html' },
        { title: 'Data Encryption', desc: 'Encryption at rest and in transit (AES-256, TLS 1.3).', icon: 'key', color: '#d32f2f', tag: 'Security', file: 'data-encryption.html' },
      ]
    },
    { title: 'Operations & Reliability', icon: 'dns', desc: 'Ensuring system stability, performance, and recoverability.',
      docs: [
        { title: 'High Availability', desc: 'Load balancing, clustering, and redundancy strategies.', icon: 'domain', color: '#7cb342', tag: 'Ops', file: 'high-availability.html' },
        { title: 'Disaster Recovery', desc: 'RTO/RPO objectives and failover procedures.', icon: 'warning', color: '#7cb342', tag: 'Ops', file: 'disaster-recovery.html' },
        { title: 'Monitoring & Alerting', desc: 'Prometheus metrics, Grafana dashboards, and alerts.', icon: 'monitoring', color: '#7cb342', tag: 'Ops', file: 'monitoring-alerting.html' },
        { title: 'Performance Tuning', desc: 'Optimizing PostgreSQL, Search, and Inference latency.', icon: 'speed', color: '#7cb342', tag: 'Ops', file: 'performance-tuning.html' },
        { title: 'Backup & Restore', desc: 'Backup schedules, retention policies, and restoration.', icon: 'backup', color: '#7cb342', tag: 'Ops', file: 'backup-restore.html' },
      ]
    },
    { title: 'AI & Clinical Research', icon: 'science', desc: 'Governance, validation, and ethical considerations for AI.',
      docs: [
        { title: 'AI Governance', desc: 'Framework for ethical AI development and deployment.', icon: 'gavel', color: '#673ab7', tag: 'Research', file: 'ai-governance.html' },
        { title: 'Clinical Validation', desc: 'Methodology for internal and external validation studies.', icon: 'biotech', color: '#673ab7', tag: 'Research', file: 'clinical-validation.html' },
        { title: 'Regulatory Approval', desc: 'FDA 510(k), CE Mark (MDR), and QMS documentation.', icon: 'approval', color: '#673ab7', tag: 'Regulatory', file: 'regulatory-approval.html' },
        { title: 'Bias & Fairness', desc: 'Assessment and mitigation of algorithmic bias.', icon: 'diversity_3', color: '#673ab7', tag: 'Research', file: 'bias-fairness.html' },
        { title: 'Explainable AI', desc: 'Saliency maps, uncertainty quantification, and transparency.', icon: 'visibility', color: '#673ab7', tag: 'Research', file: 'explainable-ai.html' },
        { title: 'Continuous Learning', desc: 'Monitoring data drift and retraining protocols.', icon: 'model_training', color: '#673ab7', tag: 'Research', file: 'continuous-learning.html' },
      ]
    },
  ];

  getDocUrl(file: string): string {
    return `/docs/${encodeURIComponent(file)}`;
  }

  downloadDoc(file: string, title: string): void {
    const pdfName = file.replace('.html', '.pdf');
    const printWindow = window.open(this.getDocUrl(file), '_blank');
    if (printWindow) {
      printWindow.addEventListener('load', () => {
        printWindow.document.title = pdfName;
        printWindow.print();
      });
    }
  }
}
