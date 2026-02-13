import { Component } from '@angular/core';

@Component({
  selector: 'app-pipeline',
  imports: [],
  template: `
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <div class="hero-badge">
          <span class="material-symbols-outlined">account_tree</span>
          Diagnostic Pipeline
        </div>
        <h1 class="display-medium animate-in">Four-Stage Diagnostic Pipeline</h1>
        <p class="hero-subtitle body-large animate-in animate-in-delay-1">
          Every image processed through any Skolyn module passes through the same structured
          four-stage pipeline, progressively narrowing the diagnostic space from binary abnormality
          detection through to precise disease staging.
        </p>
      </div>
    </section>

    <!-- Pipeline Flow Visual -->
    <section class="section">
      <div class="container">
        <div class="pipeline-flow">
          <div class="pipeline-entry">
            <div class="flow-icon input-icon">
              <span class="material-symbols-outlined sz-40">image</span>
            </div>
            <span class="label-large">Medical Image Input</span>
            <span class="body-small text-secondary">DICOM / NIfTI / JPEG</span>
          </div>
          <div class="flow-arrow">
            <span class="material-symbols-outlined">arrow_downward</span>
          </div>
          <div class="pipeline-entry">
            <div class="flow-icon qc-icon">
              <span class="material-symbols-outlined sz-40">verified</span>
            </div>
            <span class="label-large">Quality Control</span>
            <span class="body-small text-secondary">Preprocessing and Validation</span>
          </div>
          <div class="flow-arrow">
            <span class="material-symbols-outlined">arrow_downward</span>
          </div>
          <div class="modality-router">
            <span class="label-large">Modality Router</span>
            <div class="modality-chips">
              <span class="mod-chip rhenium">Rhenium OS / MRI</span>
              <span class="mod-chip seaborgium">Seaborgium OS / CT</span>
              <span class="mod-chip scandium">Scandium OS / Ultrasound</span>
              <span class="mod-chip terbium">Terbium OS / X-Ray</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Four Stages -->
    <section class="section-tight" style="background: var(--md-sys-color-surface-variant);">
      <div class="container">
        <h2 class="headline-large text-center" style="margin-bottom: 48px;">The Four Stages</h2>
        <div class="stages-grid">

          <div class="stage-card">
            <div class="stage-header stage-1">
              <span class="stage-num">1</span>
              <h3 class="title-large">Detection</h3>
            </div>
            <p class="stage-question headline-small">"Is there a pathology?"</p>
            <p class="body-large">Binary abnormality detection using highly sensitive models tuned to minimize false negatives.</p>
            <ul class="stage-outputs">
              <li>
                <span class="material-symbols-outlined">check_circle</span>
                Normal vs. Abnormal classification with confidence score
              </li>
              <li>
                <span class="material-symbols-outlined">location_on</span>
                Anatomical localization of detected abnormalities
              </li>
              <li>
                <span class="material-symbols-outlined">priority_high</span>
                Priority Flag assignment (Routine, Urgent, STAT, Critical)
              </li>
              <li>
                <span class="material-symbols-outlined">timer</span>
                Processing time estimation for time-sensitive conditions
              </li>
            </ul>
          </div>

          <div class="stage-card">
            <div class="stage-header stage-2">
              <span class="stage-num">2</span>
              <h3 class="title-large">Classification</h3>
            </div>
            <p class="stage-question headline-small">"What disease is it?"</p>
            <p class="body-large">Multi-class classification using a hierarchical taxonomy of diseases specific to each modality and anatomy.</p>
            <ul class="stage-outputs">
              <li>
                <span class="material-symbols-outlined">diagnosis</span>
                Primary disease prediction
              </li>
              <li>
                <span class="material-symbols-outlined">format_list_numbered</span>
                Ranked differential diagnosis list (up to 5 alternatives)
              </li>
              <li>
                <span class="material-symbols-outlined">description</span>
                Imaging features as natural language descriptors
              </li>
              <li>
                <span class="material-symbols-outlined">insert_chart</span>
                Probability distribution heatmap across candidates
              </li>
            </ul>
          </div>

          <div class="stage-card">
            <div class="stage-header stage-3">
              <span class="stage-num">3</span>
              <h3 class="title-large">Subtyping</h3>
            </div>
            <p class="stage-question headline-small">"What subtype is it?"</p>
            <p class="body-large">Fine-grained subtype classification within the identified disease category.</p>
            <ul class="stage-outputs">
              <li>
                <span class="material-symbols-outlined">science</span>
                Histological subtype prediction from imaging biomarkers
              </li>
              <li>
                <span class="material-symbols-outlined">shapes</span>
                Morphological pattern classification
              </li>
              <li>
                <span class="material-symbols-outlined">compare</span>
                Benign vs. malignant differentiation with probability
              </li>
              <li>
                <span class="material-symbols-outlined">genetics</span>
                Molecular biomarker imaging pattern identification
              </li>
            </ul>
          </div>

          <div class="stage-card">
            <div class="stage-header stage-4">
              <span class="stage-num">4</span>
              <h3 class="title-large">Staging</h3>
            </div>
            <p class="stage-question headline-small">"What stage is it?"</p>
            <p class="body-large">Clinical severity quantification using recognized staging and grading frameworks.</p>
            <ul class="stage-outputs">
              <li>
                <span class="material-symbols-outlined">speed</span>
                Disease stage or grade classification
              </li>
              <li>
                <span class="material-symbols-outlined">straighten</span>
                Quantitative metrics (size, volume, burden, ratios)
              </li>
              <li>
                <span class="material-symbols-outlined">trending_up</span>
                Temporal evolution (stable, progressing, responding)
              </li>
              <li>
                <span class="material-symbols-outlined">calendar_month</span>
                Follow-up recommendation with timeframe
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Post-Pipeline -->
    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center" style="margin-bottom: 48px;">After the Pipeline</h2>
        <div class="post-pipeline">
          <div class="post-step">
            <div class="post-icon">
              <span class="material-symbols-outlined sz-40">psychology</span>
            </div>
            <h3 class="title-medium">XAI Engine</h3>
            <p class="body-medium text-secondary">Grad-CAM++, SHAP, LIME, Attention Maps, and Uncertainty Quantification generate full transparency for every prediction.</p>
          </div>
          <div class="post-arrow"><span class="material-symbols-outlined">arrow_forward</span></div>
          <div class="post-step">
            <div class="post-icon">
              <span class="material-symbols-outlined sz-40">summarize</span>
            </div>
            <h3 class="title-medium">Structured Report</h3>
            <p class="body-medium text-secondary">Auto-generated radiology report in standard RIS-compatible format with scoring fields pre-filled.</p>
          </div>
          <div class="post-arrow"><span class="material-symbols-outlined">arrow_forward</span></div>
          <div class="post-step">
            <div class="post-icon">
              <span class="material-symbols-outlined sz-40">dashboard</span>
            </div>
            <h3 class="title-medium">Clinician Dashboard</h3>
            <p class="body-medium text-secondary">Priority-ordered worklist with one-click agreement or structured override with reason selection.</p>
          </div>
          <div class="post-arrow"><span class="material-symbols-outlined">arrow_forward</span></div>
          <div class="post-step">
            <div class="post-icon">
              <span class="material-symbols-outlined sz-40">cloud_upload</span>
            </div>
            <h3 class="title-medium">Archive</h3>
            <p class="body-medium text-secondary">Final report archived to PACS, RIS, and EMR. Overrides feed into federated learning queue.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Priority System -->
    <section class="section-tight" style="background: var(--md-sys-color-surface-variant);">
      <div class="container">
        <h2 class="headline-large text-center" style="margin-bottom: 48px;">Priority Classification System</h2>
        <div class="priority-grid">
          <div class="priority-card p1">
            <div class="priority-level">Priority 1</div>
            <div class="priority-label">Critical</div>
            <div class="priority-time">Under 30 seconds</div>
            <p class="body-medium">SMS + In-App + Email + Pager. Auto-escalation after 15 min without acknowledgment.</p>
            <ul class="body-small">
              <li>Intracranial hemorrhage</li>
              <li>Tension pneumothorax</li>
              <li>Aortic dissection or rupture</li>
              <li>PE with right heart strain</li>
              <li>NGT malposition in lung</li>
              <li>Large vessel occlusion</li>
            </ul>
          </div>
          <div class="priority-card p2">
            <div class="priority-level">Priority 2</div>
            <div class="priority-label">Urgent</div>
            <div class="priority-time">Under 5 minutes</div>
            <p class="body-medium">In-App + Email notifications for urgent findings requiring same-session review.</p>
          </div>
          <div class="priority-card p3">
            <div class="priority-level">Priority 3</div>
            <div class="priority-label">Significant</div>
            <div class="priority-time">Same session</div>
            <p class="body-medium">Flagged for same-session review with worklist prioritization above routine cases.</p>
          </div>
          <div class="priority-card p4">
            <div class="priority-level">Priority 4</div>
            <div class="priority-label">Routine</div>
            <div class="priority-time">Standard workflow</div>
            <p class="body-medium">Standard worklist ordering within regular clinical workflow.</p>
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

    .pipeline-flow { display: flex; flex-direction: column; align-items: center; gap: 8px; }
    .pipeline-entry { display: flex; flex-direction: column; align-items: center; gap: 4px; }
    .flow-icon {
      width: 80px; height: 80px; border-radius: var(--md-sys-shape-corner-large);
      display: flex; align-items: center; justify-content: center;
      background: var(--md-sys-color-primary-container); color: var(--md-sys-color-primary);
    }
    .qc-icon { background: var(--md-sys-color-tertiary-container); color: var(--md-sys-color-tertiary); }
    .flow-arrow { color: var(--md-sys-color-outline); }
    .modality-router {
      display: flex; flex-direction: column; align-items: center; gap: 16px;
      padding: 24px 32px; border-radius: var(--md-sys-shape-corner-extra-large);
      border: 2px dashed var(--md-sys-color-outline); width: 100%; max-width: 560px;
    }
    .modality-chips { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
    .mod-chip {
      padding: 6px 16px; border-radius: var(--md-sys-shape-corner-full);
      font: var(--md-sys-typescale-label-medium); color: #fff;
    }
    .mod-chip.rhenium { background: var(--color-rhenium); }
    .mod-chip.seaborgium { background: var(--color-seaborgium); }
    .mod-chip.scandium { background: var(--color-scandium); }
    .mod-chip.terbium { background: var(--color-terbium); }

    .stages-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
    .stage-card {
      background: var(--md-sys-color-surface); border-radius: var(--md-sys-shape-corner-large);
      box-shadow: var(--md-sys-elevation-1); overflow: hidden;
      transition: box-shadow var(--md-sys-motion-duration-medium2) var(--md-sys-motion-easing-standard);
    }
    .stage-card:hover { box-shadow: var(--md-sys-elevation-3); }
    .stage-header {
      display: flex; align-items: center; gap: 16px; padding: 20px 24px; color: #fff;
    }
    .stage-1 { background: var(--md-sys-color-primary); }
    .stage-2 { background: var(--color-seaborgium); }
    .stage-3 { background: var(--color-scandium); }
    .stage-4 { background: var(--color-terbium); }
    .stage-num {
      width: 40px; height: 40px; border-radius: 50%; border: 2px solid rgba(255,255,255,0.5);
      display: flex; align-items: center; justify-content: center;
      font: var(--md-sys-typescale-title-large); font-weight: 700;
    }
    .stage-question { padding: 20px 24px 0; color: var(--md-sys-color-on-surface); }
    .stage-card > .body-large { padding: 8px 24px 0; color: var(--md-sys-color-on-surface-variant); }
    .stage-outputs {
      list-style: none; padding: 16px 24px 24px; display: flex; flex-direction: column; gap: 10px;
    }
    .stage-outputs li {
      display: flex; align-items: flex-start; gap: 10px;
      font: var(--md-sys-typescale-body-medium); color: var(--md-sys-color-on-surface-variant);
    }
    .stage-outputs .material-symbols-outlined { font-size: 20px; color: var(--md-sys-color-primary); flex-shrink: 0; margin-top: 1px; }

    .post-pipeline { display: flex; align-items: flex-start; gap: 8px; }
    .post-step {
      flex: 1; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 8px;
    }
    .post-icon {
      width: 72px; height: 72px; border-radius: 50%; display: flex; align-items: center; justify-content: center;
      background: var(--md-sys-color-surface-container-high); color: var(--md-sys-color-primary);
    }
    .post-arrow { color: var(--md-sys-color-outline); margin-top: 24px; }

    .priority-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
    .priority-card {
      background: var(--md-sys-color-surface); border-radius: var(--md-sys-shape-corner-large);
      padding: 24px; border-top: 4px solid;
      box-shadow: var(--md-sys-elevation-1);
    }
    .priority-card.p1 { border-color: var(--md-sys-color-error); }
    .priority-card.p2 { border-color: var(--color-seaborgium); }
    .priority-card.p3 { border-color: #fbbc04; }
    .priority-card.p4 { border-color: var(--md-sys-color-tertiary); }
    .priority-level { font: var(--md-sys-typescale-label-medium); color: var(--md-sys-color-on-surface-variant); }
    .priority-label { font: var(--md-sys-typescale-title-large); margin: 4px 0 8px; }
    .priority-time { font: var(--md-sys-typescale-label-large); color: var(--md-sys-color-primary); margin-bottom: 12px; }
    .priority-card ul { padding-top: 12px; display: flex; flex-direction: column; gap: 4px; color: var(--md-sys-color-on-surface-variant); }

    @media (max-width: 1024px) {
      .stages-grid { grid-template-columns: 1fr; }
      .priority-grid { grid-template-columns: repeat(2, 1fr); }
      .post-pipeline { flex-direction: column; align-items: center; }
      .post-arrow .material-symbols-outlined::before { content: 'arrow_downward'; }
    }
    @media (max-width: 600px) {
      .priority-grid { grid-template-columns: 1fr; }
    }
  `],
})
export class PipelineComponent {}
