import { Component } from '@angular/core';

@Component({
  selector: 'app-validation',
  imports: [],
  template: `
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <div class="hero-badge">
          <span class="material-symbols-outlined">science</span>
          Clinical Validation
        </div>
        <h1 class="display-medium animate-in">Clinical Evidence Framework</h1>
        <p class="hero-subtitle body-large animate-in animate-in-delay-1">
          A four-level validation hierarchy modeled after regulatory science best practices, ensuring every
          model ships with clinical evidence across diverse populations, scanners, and clinical contexts.
        </p>
      </div>
    </section>

    <!-- Validation Pyramid -->
    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center" style="margin-bottom: 48px;">Validation Hierarchy</h2>
        <div class="pyramid">
          <div class="pyramid-level level-4">
            <div class="level-badge">Level 4</div>
            <h3 class="title-large">Randomized Controlled Trials</h3>
            <p class="body-medium">
              Head-to-head prospective multi-center RCTs measuring real diagnostic outcomes
              (diagnostic accuracy, time-to-diagnosis, patient outcome metrics) versus standard of care
              in blinded protocol with independent monitoring.
            </p>
          </div>
          <div class="pyramid-level level-3">
            <div class="level-badge">Level 3</div>
            <h3 class="title-large">Prospective Observational Studies</h3>
            <p class="body-medium">
              Real-world clinical deployment under IRB oversight measuring clinical utility,
              diagnostic performance, and radiologist workflow impact using AI-assisted vs.
              standard pathways in live patient care environments.
            </p>
          </div>
          <div class="pyramid-level level-2">
            <div class="level-badge">Level 2</div>
            <h3 class="title-large">External Retrospective Validation</h3>
            <p class="body-medium">
              Testing on external hold-out datasets collected from institutions not represented in the
              training data, covering multi-ethnic, multi-scanner, and multi-geographic cohorts. Minimum
              of three independent institutions for Class IIb/Class III pathways.
            </p>
          </div>
          <div class="pyramid-level level-1">
            <div class="level-badge">Level 1</div>
            <h3 class="title-large">Internal Validation</h3>
            <p class="body-medium">
              Cross-validation and stratified hold-out testing on internal datasets with bootstrap
              confidence intervals, sub-group analysis, and calibration curve assessment.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Bias Assessment -->
    <section class="section-tight" style="background: var(--md-sys-color-surface-variant);">
      <div class="container">
        <h2 class="headline-large text-center" style="margin-bottom: 16px;">Bias and Fairness Assessment</h2>
        <p class="body-large text-center text-secondary" style="max-width: 680px; margin: 0 auto 48px;">
          Mandatory subgroup stratification across demographic and technical variables ensures equitable
          model performance for all patient populations.
        </p>
        <div class="bias-grid">
          <div class="bias-card">
            <h3 class="title-medium">
              <span class="material-symbols-outlined">person</span>
              Demographic
            </h3>
            <ul class="body-medium">
              <li>Age group (pediatric, adult, elderly)</li>
              <li>Sex (biological)</li>
              <li>Ethnicity and ancestral background</li>
              <li>BMI and body habitus</li>
            </ul>
          </div>
          <div class="bias-card">
            <h3 class="title-medium">
              <span class="material-symbols-outlined">devices</span>
              Technical
            </h3>
            <ul class="body-medium">
              <li>Scanner manufacturer and model</li>
              <li>Field strength (MRI: 1.5T, 3T, 7T)</li>
              <li>Acquisition protocol variations</li>
              <li>Image quality (noise, motion, artifacts)</li>
            </ul>
          </div>
          <div class="bias-card">
            <h3 class="title-medium">
              <span class="material-symbols-outlined">local_hospital</span>
              Clinical
            </h3>
            <ul class="body-medium">
              <li>Disease prevalence by geography</li>
              <li>Comorbidity profiles</li>
              <li>Post-treatment vs. treatment-naive</li>
              <li>Acute vs. chronic presentation</li>
            </ul>
          </div>
          <div class="bias-card">
            <h3 class="title-medium">
              <span class="material-symbols-outlined">public</span>
              Geographic
            </h3>
            <ul class="body-medium">
              <li>Regional disease prevalence</li>
              <li>Scanner fleet composition</li>
              <li>Low-resource vs. high-resource settings</li>
              <li>Imaging protocol variations by region</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Performance Monitoring -->
    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center" style="margin-bottom: 48px;">Continuous Monitoring</h2>
        <div class="monitor-grid">
          <div class="monitor-card">
            <span class="material-symbols-outlined sz-40">monitoring</span>
            <h3 class="title-medium">Drift Detection</h3>
            <p class="body-medium text-secondary">
              Automated statistical monitoring for input distribution shift, prediction confidence
              drift, and decision boundary changes. Alert at 5% degradation threshold.
            </p>
          </div>
          <div class="monitor-card">
            <span class="material-symbols-outlined sz-40">feedback</span>
            <h3 class="title-medium">Override Analytics</h3>
            <p class="body-medium text-secondary">
              Systematic tracking of clinician overrides by module, finding type, and severity.
              Overrides feed back into the active learning queue for targeted retraining.
            </p>
          </div>
          <div class="monitor-card">
            <span class="material-symbols-outlined sz-40">assessment</span>
            <h3 class="title-medium">Quarterly Reporting</h3>
            <p class="body-medium text-secondary">
              Comprehensive model performance reports published quarterly per module with
              subgroup breakdowns, AUC trends, and critical finding sensitivity tracking.
            </p>
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
      display: inline-flex; align-items: center; gap: 8px; padding: 6px 16px;
      border-radius: var(--md-sys-shape-corner-full);
      background: var(--md-sys-color-primary); color: var(--md-sys-color-on-primary);
      font: var(--md-sys-typescale-label-large); margin-bottom: 24px;
    }
    .hero-subtitle { max-width: 720px; color: var(--md-sys-color-on-surface-variant); margin-top: 16px; }

    .pyramid { display: flex; flex-direction: column; gap: 16px; max-width: 800px; margin: 0 auto; }
    .pyramid-level {
      padding: 28px 32px; border-radius: var(--md-sys-shape-corner-large);
      box-shadow: var(--md-sys-elevation-1);
      transition: box-shadow var(--md-sys-motion-duration-medium2) var(--md-sys-motion-easing-standard);
    }
    .pyramid-level:hover { box-shadow: var(--md-sys-elevation-3); }
    .level-4 { background: linear-gradient(135deg, #e8f0fe, #d2e3fc); border-left: 4px solid var(--md-sys-color-primary); }
    .level-3 { background: linear-gradient(135deg, #fef0e1, #fce2b6); border-left: 4px solid var(--color-seaborgium); }
    .level-2 { background: linear-gradient(135deg, #e6f4ea, #ceead6); border-left: 4px solid var(--md-sys-color-tertiary); }
    .level-1 { background: var(--md-sys-color-surface-container); border-left: 4px solid var(--md-sys-color-outline); }
    .level-badge {
      display: inline-block; padding: 4px 12px; border-radius: var(--md-sys-shape-corner-full);
      background: rgba(0,0,0,0.08); font: var(--md-sys-typescale-label-large); margin-bottom: 8px;
    }
    .pyramid-level h3 { margin-bottom: 8px; }
    .pyramid-level .body-medium { color: var(--md-sys-color-on-surface-variant); }

    .bias-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
    .bias-card {
      background: var(--md-sys-color-surface); border-radius: var(--md-sys-shape-corner-large);
      padding: 24px; box-shadow: var(--md-sys-elevation-1);
    }
    .bias-card h3 { display: flex; align-items: center; gap: 8px; margin-bottom: 12px; }
    .bias-card .material-symbols-outlined { color: var(--md-sys-color-primary); }
    .bias-card ul { padding-left: 20px; display: flex; flex-direction: column; gap: 4px; color: var(--md-sys-color-on-surface-variant); }

    .monitor-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
    .monitor-card {
      background: var(--md-sys-color-surface-container); border-radius: var(--md-sys-shape-corner-large);
      padding: 28px 24px; text-align: center;
      transition: box-shadow var(--md-sys-motion-duration-medium2) var(--md-sys-motion-easing-standard);
    }
    .monitor-card:hover { box-shadow: var(--md-sys-elevation-2); }
    .monitor-card .material-symbols-outlined { color: var(--md-sys-color-primary); margin-bottom: 12px; }
    .monitor-card h3 { margin-bottom: 8px; }

    @media (max-width: 1024px) { .bias-grid { grid-template-columns: repeat(2, 1fr); } .monitor-grid { grid-template-columns: 1fr; } }
    @media (max-width: 600px) { .bias-grid { grid-template-columns: 1fr; } }
  `],
})
export class ValidationComponent {}
