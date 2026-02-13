import { Component } from '@angular/core';

@Component({
  selector: 'app-deployment',
  imports: [],
  template: `
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <div class="hero-badge">
          <span class="material-symbols-outlined">deployed_code</span>
          Deployment
        </div>
        <h1 class="display-medium animate-in">Deployment and Implementation</h1>
        <p class="hero-subtitle body-large animate-in animate-in-delay-1">
          A structured implementation journey with hands-on training, certification programs,
          and multi-tier support to ensure a seamless transition to AI-augmented radiology.
        </p>
      </div>
    </section>

    <!-- Implementation Journey -->
    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center" style="margin-bottom: 48px;">Implementation Journey</h2>
        <div class="journey-timeline">
          <div class="journey-step">
            <div class="step-marker">
              <span class="step-num">1</span>
              <div class="step-connector"></div>
            </div>
            <div class="step-content">
              <h3 class="title-large">Discovery and Assessment</h3>
              <p class="body-medium text-secondary">
                Site assessment covering existing infrastructure (PACS, RIS, EMR, network), current clinical
                workflows, reporting patterns, volume and case-mix analysis, and staffing model review.
              </p>
              <div class="step-chips">
                <span class="step-chip">Infrastructure Audit</span>
                <span class="step-chip">Workflow Mapping</span>
                <span class="step-chip">Stakeholder Alignment</span>
              </div>
            </div>
          </div>
          <div class="journey-step">
            <div class="step-marker">
              <span class="step-num">2</span>
              <div class="step-connector"></div>
            </div>
            <div class="step-content">
              <h3 class="title-large">Technical Integration</h3>
              <p class="body-medium text-secondary">
                DICOM node configuration and testing. PACS routing, HL7/FHIR endpoint setup,
                Single Sign-On via SAML or OpenID Connect, and network security verification.
              </p>
              <div class="step-chips">
                <span class="step-chip">DICOM Setup</span>
                <span class="step-chip">SSO / RBAC</span>
                <span class="step-chip">Network Security</span>
              </div>
            </div>
          </div>
          <div class="journey-step">
            <div class="step-marker">
              <span class="step-num">3</span>
              <div class="step-connector"></div>
            </div>
            <div class="step-content">
              <h3 class="title-large">Shadow Mode</h3>
              <p class="body-medium text-secondary">
                AI processes live studies in the background without clinician-facing output. Results
                compared against ground-truth reads for site-specific calibration and quality baseline.
              </p>
              <div class="step-chips">
                <span class="step-chip">Silent Processing</span>
                <span class="step-chip">Calibration</span>
                <span class="step-chip">Baseline Metrics</span>
              </div>
            </div>
          </div>
          <div class="journey-step">
            <div class="step-marker">
              <span class="step-num">4</span>
              <div class="step-connector"></div>
            </div>
            <div class="step-content">
              <h3 class="title-large">Pilot Launch</h3>
              <p class="body-medium text-secondary">
                Limited rollout with one to two departments or modalities. AI output visible to trained
                users with close clinical oversight, daily performance monitoring, and weekly review meetings.
              </p>
              <div class="step-chips">
                <span class="step-chip">Controlled Rollout</span>
                <span class="step-chip">Daily Monitoring</span>
                <span class="step-chip">Clinical Oversight</span>
              </div>
            </div>
          </div>
          <div class="journey-step">
            <div class="step-marker">
              <span class="step-num">5</span>
              <div class="step-connector"></div>
            </div>
            <div class="step-content">
              <h3 class="title-large">Full Production</h3>
              <p class="body-medium text-secondary">
                Enterprise-wide deployment across all configured modalities and departments.
                Continuous monitoring transitions to standard operations with quarterly model reviews.
              </p>
              <div class="step-chips">
                <span class="step-chip">Enterprise Rollout</span>
                <span class="step-chip">Quarterly Reviews</span>
                <span class="step-chip">Continuous Improvement</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Training Program -->
    <section class="section-tight" style="background: var(--md-sys-color-surface-variant);">
      <div class="container">
        <h2 class="headline-large text-center" style="margin-bottom: 16px;">Training and Credentialing</h2>
        <p class="body-large text-center text-secondary" style="max-width: 680px; margin: 0 auto 48px;">
          Role-based training programs ensure every user understands and can effectively leverage
          AI-augmented workflows within their specific clinical context.
        </p>
        <div class="training-grid">
          <div class="training-card">
            <div class="training-role radiologist">Radiologist</div>
            <ul class="body-medium">
              <li>AI-assisted interpretation workflow</li>
              <li>XAI output interpretation</li>
              <li>Override documentation best practices</li>
              <li>Critical finding alert response protocol</li>
              <li>Longitudinal comparison tools</li>
            </ul>
          </div>
          <div class="training-card">
            <div class="training-role technologist">Technologist</div>
            <ul class="body-medium">
              <li>Image quality requirements for AI processing</li>
              <li>DICOM routing and verification</li>
              <li>Troubleshooting common errors</li>
              <li>Study prioritization flagging</li>
            </ul>
          </div>
          <div class="training-card">
            <div class="training-role admin">IT / Admin</div>
            <ul class="body-medium">
              <li>System administration and monitoring</li>
              <li>User management and access control</li>
              <li>Integration maintenance and updates</li>
              <li>Compliance reporting and audit logs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Support Structure -->
    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center" style="margin-bottom: 48px;">Three-Tier Support Structure</h2>
        <div class="support-grid">
          <div class="support-tier">
            <div class="tier-header tier-1">
              <span class="material-symbols-outlined sz-40">headset_mic</span>
              <h3 class="title-large">Tier 1</h3>
              <span class="body-medium" style="opacity: 0.85;">Help Desk</span>
            </div>
            <div class="tier-body">
              <ul class="body-medium text-secondary">
                <li>24/7 availability via ticketing</li>
                <li>Login and access issues</li>
                <li>Basic troubleshooting</li>
                <li>Knowledge base guidance</li>
                <li>Response SLA: 4 hours</li>
              </ul>
            </div>
          </div>
          <div class="support-tier">
            <div class="tier-header tier-2">
              <span class="material-symbols-outlined sz-40">engineering</span>
              <h3 class="title-large">Tier 2</h3>
              <span class="body-medium" style="opacity: 0.85;">Technical Support</span>
            </div>
            <div class="tier-body">
              <ul class="body-medium text-secondary">
                <li>Integration-specific issues</li>
                <li>DICOM connectivity problems</li>
                <li>Performance anomalies</li>
                <li>Configuration issues</li>
                <li>Response SLA: 8 hours</li>
              </ul>
            </div>
          </div>
          <div class="support-tier">
            <div class="tier-header tier-3">
              <span class="material-symbols-outlined sz-40">biotech</span>
              <h3 class="title-large">Tier 3</h3>
              <span class="body-medium" style="opacity: 0.85;">AI Engineering</span>
            </div>
            <div class="tier-body">
              <ul class="body-medium text-secondary">
                <li>Model performance issues</li>
                <li>Systematic false-positive/negative patterns</li>
                <li>Custom model retraining needs</li>
                <li>Feature requests and roadmap input</li>
                <li>Response SLA: 48 hours</li>
              </ul>
            </div>
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

    .journey-timeline { max-width: 720px; margin: 0 auto; }
    .journey-step { display: flex; gap: 24px; }
    .step-marker { display: flex; flex-direction: column; align-items: center; }
    .step-num {
      width: 48px; height: 48px; border-radius: 50%; flex-shrink: 0;
      background: var(--md-sys-color-primary); color: var(--md-sys-color-on-primary);
      display: flex; align-items: center; justify-content: center;
      font: var(--md-sys-typescale-title-large); font-weight: 700;
    }
    .step-connector { width: 2px; flex: 1; background: var(--md-sys-color-outline-variant); min-height: 24px; }
    .journey-step:last-child .step-connector { display: none; }
    .step-content { padding-bottom: 40px; flex: 1; }
    .step-content h3 { margin-bottom: 8px; }
    .step-chips { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; }
    .step-chip {
      padding: 4px 14px; border-radius: var(--md-sys-shape-corner-full);
      border: 1px solid var(--md-sys-color-outline-variant);
      font: var(--md-sys-typescale-label-medium); color: var(--md-sys-color-on-surface-variant);
    }

    .training-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
    .training-card {
      background: var(--md-sys-color-surface); border-radius: var(--md-sys-shape-corner-large);
      padding: 24px; box-shadow: var(--md-sys-elevation-1);
    }
    .training-role {
      display: inline-block; padding: 6px 16px; border-radius: var(--md-sys-shape-corner-full);
      font: var(--md-sys-typescale-label-large); color: #fff; margin-bottom: 16px;
    }
    .radiologist { background: var(--md-sys-color-primary); }
    .technologist { background: var(--color-seaborgium); }
    .admin { background: var(--color-scandium); }
    .training-card ul {
      padding-left: 20px; display: flex; flex-direction: column; gap: 6px;
      color: var(--md-sys-color-on-surface-variant);
    }

    .support-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
    .support-tier {
      border-radius: var(--md-sys-shape-corner-large); overflow: hidden;
      box-shadow: var(--md-sys-elevation-1);
      transition: box-shadow var(--md-sys-motion-duration-medium2) var(--md-sys-motion-easing-standard);
    }
    .support-tier:hover { box-shadow: var(--md-sys-elevation-3); }
    .tier-header {
      padding: 28px 24px; color: #fff; text-align: center;
      display: flex; flex-direction: column; align-items: center; gap: 4px;
    }
    .tier-1 { background: var(--md-sys-color-primary); }
    .tier-2 { background: var(--color-seaborgium); }
    .tier-3 { background: var(--color-terbium); }
    .tier-body { padding: 24px; background: var(--md-sys-color-surface); }
    .tier-body ul {
      padding-left: 20px; display: flex; flex-direction: column; gap: 6px;
      color: var(--md-sys-color-on-surface-variant);
    }

    @media (max-width: 1024px) { .training-grid, .support-grid { grid-template-columns: 1fr; } }
  `],
})
export class DeploymentComponent {}
