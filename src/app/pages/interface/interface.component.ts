import { Component } from '@angular/core';

@Component({
  selector: 'app-interface',
  imports: [],
  template: `
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <div class="hero-badge">
          <span class="material-symbols-outlined">dashboard</span>
          Clinician Interface
        </div>
        <h1 class="display-medium animate-in">Doctor-Facing Interface</h1>
        <p class="hero-subtitle body-large animate-in animate-in-delay-1">
          Designed to integrate seamlessly into the existing clinical workflow without disrupting it:
          enhancing speed and confidence, never adding friction.
        </p>
      </div>
    </section>

    <!-- Workflow Integration -->
    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center" style="margin-bottom: 16px;">Workflow Integration</h2>
        <p class="body-large text-center text-secondary" style="max-width: 680px; margin: 0 auto 48px;">
          Skolyn slots into your existing PACS, RIS, and EMR ecosystem with zero disruption.
        </p>
        <div class="workflow-flow">
          <div class="wf-node wf-source">
            <span class="material-symbols-outlined sz-40">perm_media</span>
            <span class="title-small">PACS</span>
            <span class="body-small text-secondary">DICOM Push</span>
          </div>
          <div class="wf-connector"><span class="material-symbols-outlined">arrow_forward</span></div>
          <div class="wf-node wf-core">
            <span class="material-symbols-outlined sz-40">hub</span>
            <span class="title-small">Skolyn Platform</span>
            <span class="body-small text-secondary">AI Analysis</span>
          </div>
          <div class="wf-connector"><span class="material-symbols-outlined">arrow_forward</span></div>
          <div class="wf-node wf-dash">
            <span class="material-symbols-outlined sz-40">space_dashboard</span>
            <span class="title-small">Dashboard</span>
            <span class="body-small text-secondary">Priority Worklist</span>
          </div>
          <div class="wf-connector"><span class="material-symbols-outlined">arrow_forward</span></div>
          <div class="wf-node wf-clinician">
            <span class="material-symbols-outlined sz-40">person</span>
            <span class="title-small">Radiologist</span>
            <span class="body-small text-secondary">Review and Sign-off</span>
          </div>
          <div class="wf-connector"><span class="material-symbols-outlined">arrow_forward</span></div>
          <div class="wf-node wf-output">
            <span class="material-symbols-outlined sz-40">cloud_done</span>
            <span class="title-small">EMR / RIS / PACS</span>
            <span class="body-small text-secondary">Final Report</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Dashboard Features -->
    <section class="section-tight" style="background: var(--md-sys-color-surface-variant);">
      <div class="container">
        <h2 class="headline-large text-center" style="margin-bottom: 48px;">Clinician Dashboard Features</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <span class="material-symbols-outlined sz-40">view_list</span>
            </div>
            <h3 class="title-medium">Worklist View</h3>
            <p class="body-medium text-secondary">
              Cases organized by AI-assigned priority (Critical, STAT, Urgent, Routine) with color coding.
              Displays estimated AI confidence level, organ system, and patient demographics.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <span class="material-symbols-outlined sz-40">image_search</span>
            </div>
            <h3 class="title-medium">Image Viewer</h3>
            <p class="body-medium text-secondary">
              DICOM-compatible zero-footprint viewer with side-by-side AI overlay toggle,
              synchronized scrolling for prior comparison, windowing presets, and measurement tools.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <span class="material-symbols-outlined sz-40">article</span>
            </div>
            <h3 class="title-medium">AI Report Panel</h3>
            <p class="body-medium text-secondary">
              Full structured analysis output with expandable XAI explanations per finding.
              Grad-CAM++ overlays, SHAP values, and uncertainty flags in one view.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <span class="material-symbols-outlined sz-40">rate_review</span>
            </div>
            <h3 class="title-medium">Clinician Override</h3>
            <p class="body-medium text-secondary">
              One-click agreement or override with mandatory structured reason selection.
              Optional free-text justification. Every decision logged in the learning loop.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <span class="material-symbols-outlined sz-40">straighten</span>
            </div>
            <h3 class="title-medium">Measurement Tools</h3>
            <p class="body-medium text-secondary">
              AI-generated measurements combined with manual calibration tools for verification.
              Automated volume, diameter, and angle calculations across all modalities.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <span class="material-symbols-outlined sz-40">compare</span>
            </div>
            <h3 class="title-medium">Comparison Mode</h3>
            <p class="body-medium text-secondary">
              Prior studies side-by-side with automated change quantification. Delta measurements,
              new vs. resolved vs. stable finding classification for longitudinal tracking.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Report Generation -->
    <section class="section">
      <div class="container">
        <div class="report-split">
          <div class="report-info">
            <h2 class="headline-large">Automated Report Generation</h2>
            <p class="body-large text-secondary" style="margin: 16px 0 24px;">
              AI-drafted structured reports follow RIS and PACS-standard templates specific to each
              body region and modality. Natural language impression generation is trained on annotated
              radiology report corpora from multiple institutions.
            </p>
            <ul class="report-features">
              <li>
                <span class="material-symbols-outlined">check</span>
                Physician review, edit, and sign-off workflow
              </li>
              <li>
                <span class="material-symbols-outlined">check</span>
                Automatic population of standardized scoring fields (BI-RADS, PI-RADS, LI-RADS, Lung-RADS, TI-RADS)
              </li>
              <li>
                <span class="material-symbols-outlined">check</span>
                Medico-legal documentation compliance
              </li>
            </ul>
          </div>
          <div class="report-formats">
            <h3 class="title-medium" style="margin-bottom: 16px;">Export Formats</h3>
            <div class="format-chips">
              <div class="format-chip">
                <span class="material-symbols-outlined">picture_as_pdf</span>
                PDF
              </div>
              <div class="format-chip">
                <span class="material-symbols-outlined">code</span>
                HL7 CDA
              </div>
              <div class="format-chip">
                <span class="material-symbols-outlined">scan</span>
                DICOM SR
              </div>
              <div class="format-chip">
                <span class="material-symbols-outlined">send</span>
                HL7 FHIR
              </div>
              <div class="format-chip">
                <span class="material-symbols-outlined">integration_instructions</span>
                EMR Direct Push
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Critical Finding Alert -->
    <section class="section-tight" style="background: var(--md-sys-color-surface-variant);">
      <div class="container">
        <h2 class="headline-large text-center" style="margin-bottom: 16px;">Critical Finding Alert System</h2>
        <p class="body-large text-center text-secondary" style="max-width: 640px; margin: 0 auto 48px;">
          Time-critical findings trigger immediate clinician notification with automatic escalation
          if not acknowledged within 15 minutes.
        </p>
        <div class="alert-flow">
          <div class="alert-step">
            <div class="alert-icon detect-icon">
              <span class="material-symbols-outlined sz-48">warning</span>
            </div>
            <span class="title-small">Critical Finding Detected</span>
          </div>
          <div class="alert-arrow"><span class="material-symbols-outlined">arrow_forward</span></div>
          <div class="alert-step">
            <div class="alert-icon classify-icon">
              <span class="material-symbols-outlined sz-48">filter_list</span>
            </div>
            <span class="title-small">Severity Classification</span>
          </div>
          <div class="alert-arrow"><span class="material-symbols-outlined">arrow_forward</span></div>
          <div class="alert-step">
            <div class="alert-icon notify-icon">
              <span class="material-symbols-outlined sz-48">notifications_active</span>
            </div>
            <span class="title-small">STAT Alert Sent</span>
            <span class="body-small text-secondary">SMS + In-App + Email + Pager</span>
          </div>
          <div class="alert-arrow"><span class="material-symbols-outlined">arrow_forward</span></div>
          <div class="alert-step">
            <div class="alert-icon ack-icon">
              <span class="material-symbols-outlined sz-48">task_alt</span>
            </div>
            <span class="title-small">Clinician Acknowledges</span>
            <span class="body-small text-secondary">Logged with timestamp and ID</span>
          </div>
        </div>
        <div class="escalation-note md-card md-card-outlined" style="margin-top: 32px; text-align: center;">
          <span class="material-symbols-outlined" style="color: var(--md-sys-color-error);">escalator_warning</span>
          <span class="body-medium">
            No response within 15 minutes triggers automatic escalation to backup clinician.
          </span>
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

    .workflow-flow {
      display: flex; align-items: center; justify-content: center; gap: 12px; flex-wrap: wrap;
    }
    .wf-node {
      display: flex; flex-direction: column; align-items: center; gap: 4px;
      padding: 20px 24px; border-radius: var(--md-sys-shape-corner-large);
      background: var(--md-sys-color-surface-container); min-width: 120px; text-align: center;
    }
    .wf-core { background: var(--md-sys-color-primary); color: var(--md-sys-color-on-primary); }
    .wf-core .text-secondary { color: rgba(255,255,255,0.7); }
    .wf-connector { color: var(--md-sys-color-outline); }

    .features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
    .feature-card {
      background: var(--md-sys-color-surface); border-radius: var(--md-sys-shape-corner-large);
      padding: 28px 24px; box-shadow: var(--md-sys-elevation-1);
      transition: box-shadow var(--md-sys-motion-duration-medium2) var(--md-sys-motion-easing-standard);
    }
    .feature-card:hover { box-shadow: var(--md-sys-elevation-3); }
    .feature-icon {
      width: 56px; height: 56px; border-radius: var(--md-sys-shape-corner-medium);
      background: var(--md-sys-color-primary-container); color: var(--md-sys-color-primary);
      display: flex; align-items: center; justify-content: center; margin-bottom: 16px;
    }
    .feature-card h3 { margin-bottom: 8px; }

    .report-split { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: start; }
    .report-features { list-style: none; display: flex; flex-direction: column; gap: 12px; }
    .report-features li {
      display: flex; align-items: flex-start; gap: 10px;
      font: var(--md-sys-typescale-body-medium); color: var(--md-sys-color-on-surface-variant);
    }
    .report-features .material-symbols-outlined { color: var(--md-sys-color-tertiary); font-size: 20px; margin-top: 1px; }
    .report-formats {
      background: var(--md-sys-color-surface-container); border-radius: var(--md-sys-shape-corner-large);
      padding: 28px;
    }
    .format-chips { display: flex; flex-direction: column; gap: 10px; }
    .format-chip {
      display: flex; align-items: center; gap: 12px; padding: 12px 16px;
      border-radius: var(--md-sys-shape-corner-small); background: var(--md-sys-color-surface);
      font: var(--md-sys-typescale-label-large); color: var(--md-sys-color-on-surface);
    }
    .format-chip .material-symbols-outlined { color: var(--md-sys-color-primary); font-size: 20px; }

    .alert-flow { display: flex; align-items: center; justify-content: center; gap: 16px; flex-wrap: wrap; }
    .alert-step { display: flex; flex-direction: column; align-items: center; gap: 8px; text-align: center; }
    .alert-icon {
      width: 80px; height: 80px; border-radius: 50%; display: flex; align-items: center; justify-content: center;
    }
    .detect-icon { background: #fce8e6; color: var(--md-sys-color-error); }
    .classify-icon { background: #fef0e1; color: var(--color-seaborgium); }
    .notify-icon { background: var(--md-sys-color-primary-container); color: var(--md-sys-color-primary); }
    .ack-icon { background: var(--md-sys-color-tertiary-container); color: var(--md-sys-color-tertiary); }
    .alert-arrow { color: var(--md-sys-color-outline); }
    .escalation-note {
      display: flex; align-items: center; justify-content: center; gap: 10px;
      max-width: 560px; margin-left: auto; margin-right: auto;
    }

    @media (max-width: 1024px) {
      .features-grid { grid-template-columns: repeat(2, 1fr); }
      .report-split { grid-template-columns: 1fr; }
    }
    @media (max-width: 600px) {
      .features-grid { grid-template-columns: 1fr; }
      .alert-flow { flex-direction: column; }
      .workflow-flow { flex-direction: column; }
    }
  `],
})
export class InterfaceComponent {}
