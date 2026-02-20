import { Component, ViewChild, ElementRef, OnInit, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink, NgFor],
  template: `
    <!-- Hero Section -->
    <section class="hero">
      <div class="container hero-content">
        <div class="hero-text animate-in">
          <div class="hero-label">
            <span class="material-symbols-outlined sz-20">psychology</span>
            Medical Imaging AI Platform
          </div>
          <h1 class="display-large hero-title">
            Early. Accurate.<br>
            <span class="text-primary">Trusted.</span>
          </h1>
          <p class="hero-subtitle">
            Redefining medical imaging through Explainable Artificial Intelligence.
            AI-powered diagnostic analysis across MRI, CT, Ultrasound, and X-Ray.
          </p>
          <div class="hero-actions">
            <a routerLink="/platform" class="md-button md-button-filled md-button-large">
              Explore Platform
              <span class="material-symbols-outlined sz-20">arrow_forward</span>
            </a>
            <a routerLink="/modules" class="md-button md-button-outlined md-button-large">
              View Modules
            </a>
          </div>
        </div>
        <div class="hero-visual animate-in animate-in-delay-2">
          <div class="hero-diagram">
            <div class="diagram-center">
              <img src="assets/skolyn-logo-icon.svg" alt="Skolyn" class="brand-logo-center" />
            </div>
            <div class="diagram-orbit orbit-1">
              <div class="orbit-node rhenium" title="Rhenium OS - MRI">
                <span class="material-symbols-outlined">neurology</span>
              </div>
              <div class="orbit-node seaborgium" title="Seaborgium OS - CT">
                <span class="material-symbols-outlined">scan</span>
              </div>
              <div class="orbit-node scandium" title="Scandium OS - Ultrasound">
                <span class="material-symbols-outlined">ecg</span>
              </div>
              <div class="orbit-node terbium" title="Terbium OS - X-Ray">
                <span class="material-symbols-outlined">orthopedics</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-gradient"></div>
    </section>

    <!-- Stats Section -->
    <section class="section stats-section">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item animate-in">
            <span class="stat-number">4</span>
            <span class="stat-label">Imaging Modalities</span>
          </div>
          <div class="stat-item animate-in animate-in-delay-1">
            <span class="stat-number">50+</span>
            <span class="stat-label">Imaging Subtypes</span>
          </div>
          <div class="stat-item animate-in animate-in-delay-2">
            <span class="stat-number">6</span>
            <span class="stat-label">XAI Techniques</span>
          </div>
          <div class="stat-item animate-in animate-in-delay-3">
            <span class="stat-number">500K+</span>
            <span class="stat-label">Training Cases</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Partners Scroll -->
    <section class="partners-section">
      <div class="container">
        <div class="partners-header">
          <span class="partners-label">Trusted by leading institutions</span>
        </div>
      </div>
      <div class="partners-marquee"
           (mousedown)="onDragStart($event)"
           (mousemove)="onDragMove($event)"
           (mouseup)="onDragEnd()"
           (mouseleave)="onDragEnd()"
           (touchstart)="onTouchStart($event)"
           (touchmove)="onTouchMove($event)"
           (touchend)="onDragEnd()">
        <div class="partners-scroll-wrapper">
          <div class="partners-track" #track>
            <a class="partner-item" *ngFor="let partner of partners"
               [href]="partner.url" target="_blank" rel="noopener noreferrer"
               (click)="onPartnerClick($event)">
              <img [src]="partner.logo" [alt]="partner.name" [title]="partner.name" loading="lazy" draggable="false" />
            </a>
            <a class="partner-item" *ngFor="let partner of partners"
               [href]="partner.url" target="_blank" rel="noopener noreferrer"
               (click)="onPartnerClick($event)">
              <img [src]="partner.logo" [alt]="partner.name" [title]="partner.name" loading="lazy" draggable="false" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Market Highlights -->
    <section class="market-highlights-section">
      <div class="container">
        <div class="market-highlights-header">
          <h2 class="headline-large">Market at a Glance</h2>
          <a routerLink="/investors" class="market-link">Full market analysis →</a>
        </div>
        <div class="market-highlights-grid">
          <div class="market-highlight-card">
            <span class="market-highlight-value" style="color: var(--color-rhenium);">$18.5B</span>
            <span class="market-highlight-label">TAM by 2032</span>
            <span class="market-highlight-sub">Global medical imaging AI</span>
          </div>
          <div class="market-highlight-card">
            <span class="market-highlight-value" style="color: var(--color-scandium);">30%+</span>
            <span class="market-highlight-label">Annual CAGR</span>
            <span class="market-highlight-sub">Fastest-growing health-tech segment</span>
          </div>
          <div class="market-highlight-card">
            <span class="market-highlight-value" style="color: var(--color-seaborgium);">49</span>
            <span class="market-highlight-label">Partner Institutions</span>
            <span class="market-highlight-sub">Across 7 countries</span>
          </div>
          <div class="market-highlight-card">
            <span class="market-highlight-value" style="color: var(--color-terbium);">77%</span>
            <span class="market-highlight-label">Rad Shortage</span>
            <span class="market-highlight-sub">Critical global workforce gap</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Modules Overview -->
    <section class="section">
      <div class="container">
        <div class="section-header text-center">
          <h2 class="display-small">Four Modules. One Platform.</h2>
          <p class="body-large text-secondary section-desc">
            Each module is named after a chemical element from the periodic table,
            reflecting precision, scientific foundation, and the elemental role
            each imaging modality plays in modern medicine.
          </p>
        </div>

        <div class="modules-grid">
          <a routerLink="/modules/rhenium" class="module-card rhenium-card animate-in">
            <div class="module-element">
              <span class="element-number">75</span>
              <span class="element-symbol">Re</span>
              <span class="element-name">Rhenium</span>
            </div>
            <div class="module-info">
              <h3 class="title-large">Rhenium OS</h3>
              <p class="module-modality">MRI Intelligence Module</p>
              <p class="body-medium text-secondary">
                High-fidelity MRI analysis across Brain, Breast, Spine, Cardiac,
                and 10 more subtypes with multi-sequence support.
              </p>
              <span class="module-link">
                Learn more
                <span class="material-symbols-outlined sz-20">arrow_forward</span>
              </span>
            </div>
          </a>

          <a routerLink="/modules/seaborgium" class="module-card seaborgium-card animate-in animate-in-delay-1">
            <div class="module-element">
              <span class="element-number">106</span>
              <span class="element-symbol">Sg</span>
              <span class="element-name">Seaborgium</span>
            </div>
            <div class="module-info">
              <h3 class="title-large">Seaborgium OS</h3>
              <p class="module-modality">CT Intelligence Module</p>
              <p class="body-medium text-secondary">
                Rapid cross-sectional CT analysis for emergency, oncology,
                and trauma with 13 specialized subtypes.
              </p>
              <span class="module-link">
                Learn more
                <span class="material-symbols-outlined sz-20">arrow_forward</span>
              </span>
            </div>
          </a>

          <a routerLink="/modules/scandium" class="module-card scandium-card animate-in animate-in-delay-2">
            <div class="module-element">
              <span class="element-number">21</span>
              <span class="element-symbol">Sc</span>
              <span class="element-name">Scandium</span>
            </div>
            <div class="module-info">
              <h3 class="title-large">Scandium OS</h3>
              <p class="module-modality">Ultrasound Intelligence Module</p>
              <p class="body-medium text-secondary">
                Universal ultrasound analysis from fetal imaging to cardiac echo,
                covering 16 comprehensive subtypes.
              </p>
              <span class="module-link">
                Learn more
                <span class="material-symbols-outlined sz-20">arrow_forward</span>
              </span>
            </div>
          </a>

          <a routerLink="/modules/terbium" class="module-card terbium-card animate-in animate-in-delay-3">
            <div class="module-element">
              <span class="element-number">65</span>
              <span class="element-symbol">Tb</span>
              <span class="element-name">Terbium</span>
            </div>
            <div class="module-info">
              <h3 class="title-large">Terbium OS</h3>
              <p class="module-modality">X-Ray Intelligence Module</p>
              <p class="body-medium text-secondary">
                Foundational X-ray analysis including Chest, Bone, Dental, DXA,
                Mammography, and 8 more subtypes.
              </p>
              <span class="module-link">
                Learn more
                <span class="material-symbols-outlined sz-20">arrow_forward</span>
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- XAI Section -->
    <section class="section xai-section">
      <div class="container">
        <div class="xai-layout">
          <div class="xai-text animate-in">
            <div class="section-label">
              <span class="material-symbols-outlined sz-20">visibility</span>
              Explainable AI
            </div>
            <h2 class="display-small">Transparency at the Core</h2>
            <p class="body-large text-secondary">
              Every prediction Skolyn makes is accompanied by a full explanation.
              No output is presented without a visual and textual rationale that
              the clinician can evaluate independently.
            </p>
            <div class="xai-techniques">
              <div class="xai-chip">
                <span class="material-symbols-outlined sz-20">gradient</span>
                Grad-CAM++
              </div>
              <div class="xai-chip">
                <span class="material-symbols-outlined sz-20">analytics</span>
                SHAP
              </div>
              <div class="xai-chip">
                <span class="material-symbols-outlined sz-20">lens_blur</span>
                LIME
              </div>
              <div class="xai-chip">
                <span class="material-symbols-outlined sz-20">center_focus_strong</span>
                Attention Maps
              </div>
              <div class="xai-chip">
                <span class="material-symbols-outlined sz-20">query_stats</span>
                Uncertainty Quantification
              </div>
            </div>
            <a routerLink="/technology" class="md-button md-button-tonal">
              Explore Technology
              <span class="material-symbols-outlined sz-20">arrow_forward</span>
            </a>
          </div>
          <div class="xai-visual animate-in animate-in-delay-2">
            <div class="confidence-card">
              <div class="confidence-header">
                <span class="material-symbols-outlined">verified</span>
                AI Confidence Score
              </div>
              <div class="confidence-bar-wrapper">
                <div class="confidence-bar">
                  <div class="confidence-fill green" style="width: 94%"></div>
                </div>
                <span class="confidence-value">94%</span>
              </div>
              <div class="confidence-label">High Confidence</div>
              <hr class="md-divider" />
              <div class="confidence-detail">
                <span class="material-symbols-outlined sz-20 filled">check_circle</span>
                Primary: Glioblastoma (GBM Grade IV)
              </div>
              <div class="confidence-detail secondary">
                <span class="material-symbols-outlined sz-20">radio_button_unchecked</span>
                Differential: Metastasis (4.2%)
              </div>
              <div class="confidence-detail secondary">
                <span class="material-symbols-outlined sz-20">radio_button_unchecked</span>
                Differential: CNS Lymphoma (1.8%)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pipeline Section -->
    <section class="section">
      <div class="container text-center">
        <h2 class="display-small">Four-Stage Diagnostic Pipeline</h2>
        <p class="body-large text-secondary section-desc">
          Every image passes through a structured pipeline, progressively
          narrowing the diagnostic space from detection to precise staging.
        </p>

        <div class="pipeline-flow">
          <div class="pipeline-stage animate-in">
            <div class="stage-icon">
              <span class="material-symbols-outlined sz-40">search</span>
            </div>
            <h4 class="title-medium">Stage 1</h4>
            <p class="label-large">Detection</p>
            <p class="body-small text-secondary">Binary abnormality detection with high sensitivity</p>
          </div>
          <div class="pipeline-connector">
            <span class="material-symbols-outlined">arrow_forward</span>
          </div>
          <div class="pipeline-stage animate-in animate-in-delay-1">
            <div class="stage-icon">
              <span class="material-symbols-outlined sz-40">category</span>
            </div>
            <h4 class="title-medium">Stage 2</h4>
            <p class="label-large">Classification</p>
            <p class="body-small text-secondary">Multi-class disease identification</p>
          </div>
          <div class="pipeline-connector">
            <span class="material-symbols-outlined">arrow_forward</span>
          </div>
          <div class="pipeline-stage animate-in animate-in-delay-2">
            <div class="stage-icon">
              <span class="material-symbols-outlined sz-40">account_tree</span>
            </div>
            <h4 class="title-medium">Stage 3</h4>
            <p class="label-large">Subtyping</p>
            <p class="body-small text-secondary">Fine-grained characterization</p>
          </div>
          <div class="pipeline-connector">
            <span class="material-symbols-outlined">arrow_forward</span>
          </div>
          <div class="pipeline-stage animate-in animate-in-delay-3">
            <div class="stage-icon">
              <span class="material-symbols-outlined sz-40">monitoring</span>
            </div>
            <h4 class="title-medium">Stage 4</h4>
            <p class="label-large">Staging</p>
            <p class="body-small text-secondary">Clinical severity quantification</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section cta-section">
      <div class="container text-center">
        <div class="cta-content animate-in">
          <h2 class="display-small cta-title">Ready to Transform Diagnostics?</h2>
          <p class="body-large cta-desc">
            Discover how Skolyn brings AI-powered, fully transparent medical
            imaging analysis to your institution.
          </p>
          <div class="cta-actions">
            <a routerLink="/contact" class="md-button md-button-filled md-button-large">
              Get in Touch
              <span class="material-symbols-outlined sz-20">arrow_forward</span>
            </a>
            <a routerLink="/about" class="md-button md-button-outlined md-button-large cta-outlined">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      position: relative;
      min-height: 90vh;
      display: flex;
      align-items: center;
      overflow: hidden;
      background: linear-gradient(135deg, var(--md-sys-color-surface) 0%, var(--md-sys-color-surface-container) 50%, var(--md-sys-color-primary-container) 100%);
    }

    .hero-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 64px;
      align-items: center;
      position: relative;
      z-index: 2;
      padding: 80px 24px;
    }

    .hero-gradient {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 120px;
      background: linear-gradient(to bottom, transparent, var(--md-sys-color-surface));
      z-index: 1;
    }

    .hero-label {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 6px 16px 6px 12px;
      background: rgba(26, 115, 232, 0.08);
      border-radius: var(--md-sys-shape-corner-full);
      font: var(--md-sys-typescale-label-large);
      color: var(--md-sys-color-primary);
      margin-bottom: 24px;
    }

    .hero-title {
      margin-bottom: 20px;
      letter-spacing: -1px;
    }

    .hero-subtitle {
      font: var(--md-sys-typescale-body-large);
      color: var(--md-sys-color-on-surface-variant);
      max-width: 520px;
      margin-bottom: 32px;
      font-size: 18px;
      line-height: 28px;
    }

    .hero-actions {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }

    /* Hero Diagram */
    .hero-visual {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .hero-diagram {
      position: relative;
      width: 400px;
      height: 400px;
    }

    .diagram-center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
    }

    .brand-logo-center {
      width: 76px;
      height: 76px;
      filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2));
    }

    .diagram-orbit {
      position: absolute;
      inset: 0;
      border: 1.5px dashed var(--md-sys-color-outline);
      border-radius: 50%;
      animation: spin 40s linear infinite;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .orbit-node {
      position: absolute;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--md-sys-color-on-primary);
      box-shadow: var(--md-sys-elevation-2);
      animation: counter-spin 40s linear infinite;
    }

    @keyframes counter-spin {
      to { transform: rotate(-360deg); }
    }

    .orbit-node.rhenium {
      background: var(--color-rhenium);
      top: -28px;
      left: 50%;
      margin-left: -28px;
    }

    .orbit-node.seaborgium {
      background: var(--color-seaborgium);
      right: -28px;
      top: 50%;
      margin-top: -28px;
    }

    .orbit-node.scandium {
      background: var(--color-scandium);
      bottom: -28px;
      left: 50%;
      margin-left: -28px;
    }

    .orbit-node.terbium {
      background: var(--color-terbium);
      left: -28px;
      top: 50%;
      margin-top: -28px;
    }

    /* Stats */
    .stats-section {
      background: var(--md-sys-color-surface);
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 32px;
    }

    .stat-item {
      text-align: center;
      padding: 32px 16px;
      border-radius: var(--md-sys-shape-corner-large);
      background: var(--md-sys-color-surface-container-low);
    }

    .stat-number {
      display: block;
      font: var(--md-sys-typescale-display-medium);
      color: var(--md-sys-color-primary);
      margin-bottom: 4px;
    }

    .stat-label {
      font: var(--md-sys-typescale-label-large);
      color: var(--md-sys-color-on-surface-variant);
    }

    /* Section header */
    .section-header {
      margin-bottom: 48px;
    }

    .section-desc {
      max-width: 640px;
      margin: 16px auto 0;
    }

    /* Module Cards */
    .modules-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;
    }

    .module-card {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 24px;
      padding: 32px;
      border-radius: var(--md-sys-shape-corner-extra-large);
      border: 1px solid var(--md-sys-color-outline-variant);
      background: var(--md-sys-color-surface);
      text-decoration: none;
      color: inherit;
      transition: all var(--md-sys-motion-duration-medium2) var(--md-sys-motion-easing-standard);
    }

    .module-card:hover {
      box-shadow: var(--md-sys-elevation-2);
      text-decoration: none;
      border-color: transparent;
    }

    .rhenium-card:hover { background: var(--color-rhenium-light); }
    .seaborgium-card:hover { background: var(--color-seaborgium-light); }
    .scandium-card:hover { background: var(--color-scandium-light); }
    .terbium-card:hover { background: var(--color-terbium-light); }

    .module-element {
      width: 88px;
      height: 100px;
      border: 2px solid var(--md-sys-color-outline);
      border-radius: var(--md-sys-shape-corner-medium);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0;
      padding: 8px;
      flex-shrink: 0;
    }

    .element-number {
      font: var(--md-sys-typescale-label-small);
      color: var(--md-sys-color-on-surface-variant);
    }

    .element-symbol {
      font-size: 32px;
      font-weight: 700;
      line-height: 1;
    }

    .rhenium-card .element-symbol { color: var(--color-rhenium); }
    .seaborgium-card .element-symbol { color: var(--color-seaborgium); }
    .scandium-card .element-symbol { color: var(--color-scandium); }
    .terbium-card .element-symbol { color: var(--color-terbium); }

    .element-name {
      font: var(--md-sys-typescale-label-small);
      color: var(--md-sys-color-on-surface-variant);
    }

    .module-modality {
      font: var(--md-sys-typescale-label-large);
      color: var(--md-sys-color-primary);
      margin-bottom: 8px;
    }

    .module-link {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font: var(--md-sys-typescale-label-large);
      color: var(--md-sys-color-primary);
      margin-top: 12px;
    }

    /* XAI Section */
    .xai-section {
      background: var(--md-sys-color-surface-container-low);
    }

    .xai-layout {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 64px;
      align-items: center;
    }

    .section-label {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font: var(--md-sys-typescale-label-large);
      color: var(--md-sys-color-primary);
      margin-bottom: 16px;
    }

    .xai-text h2 {
      margin-bottom: 16px;
    }

    .xai-text p {
      margin-bottom: 24px;
    }

    .xai-techniques {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 32px;
    }

    .xai-chip {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 8px 16px;
      border-radius: var(--md-sys-shape-corner-full);
      background: var(--md-sys-color-surface);
      border: 1px solid var(--md-sys-color-outline);
      font: var(--md-sys-typescale-label-large);
      color: var(--md-sys-color-on-surface);
    }

    .confidence-card {
      background: var(--md-sys-color-surface);
      border-radius: var(--md-sys-shape-corner-extra-large);
      padding: 32px;
      box-shadow: var(--md-sys-elevation-2);
    }

    .confidence-header {
      display: flex;
      align-items: center;
      gap: 8px;
      font: var(--md-sys-typescale-title-medium);
      margin-bottom: 20px;
      color: var(--md-sys-color-primary);
    }

    .confidence-bar-wrapper {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .confidence-bar {
      flex: 1;
      height: 12px;
      background: var(--md-sys-color-surface-container);
      border-radius: var(--md-sys-shape-corner-full);
      overflow: hidden;
    }

    .confidence-fill {
      height: 100%;
      border-radius: var(--md-sys-shape-corner-full);
      transition: width 1s var(--md-sys-motion-easing-emphasized);
    }

    .confidence-fill.green { background: var(--md-sys-color-tertiary); }
    .confidence-fill.yellow { background: #f9ab00; }
    .confidence-fill.red { background: var(--md-sys-color-error); }

    .confidence-value {
      font: var(--md-sys-typescale-title-large);
      font-weight: 700;
      color: var(--md-sys-color-tertiary);
    }

    .confidence-label {
      font: var(--md-sys-typescale-label-large);
      color: var(--md-sys-color-tertiary);
      margin-top: 8px;
    }

    .confidence-detail {
      display: flex;
      align-items: center;
      gap: 8px;
      font: var(--md-sys-typescale-body-medium);
      margin-bottom: 8px;
    }

    .confidence-detail .filled {
      color: var(--md-sys-color-tertiary);
    }

    .confidence-detail.secondary {
      color: var(--md-sys-color-on-surface-variant);
    }

    /* Pipeline */
    .pipeline-flow {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      gap: 8px;
      margin-top: 48px;
      flex-wrap: wrap;
    }

    .pipeline-stage {
      flex: 1;
      min-width: 180px;
      max-width: 240px;
      text-align: center;
      padding: 32px 16px;
      border-radius: var(--md-sys-shape-corner-extra-large);
      background: var(--md-sys-color-surface-container-low);
      transition: all var(--md-sys-motion-duration-medium2) var(--md-sys-motion-easing-standard);
    }

    .pipeline-stage:hover {
      background: var(--md-sys-color-primary-container);
    }

    .stage-icon {
      width: 72px;
      height: 72px;
      border-radius: 50%;
      background: var(--md-sys-color-primary-container);
      color: var(--md-sys-color-primary);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 16px;
    }

    .pipeline-stage:hover .stage-icon {
      background: var(--md-sys-color-primary);
      color: var(--md-sys-color-on-primary);
    }

    .pipeline-connector {
      display: flex;
      align-items: center;
      padding-top: 64px;
      color: var(--md-sys-color-outline);
    }

    /* CTA */
    .cta-section {
      background: linear-gradient(135deg, var(--md-sys-color-primary) 0%, #174ea6 100%);
      color: var(--md-sys-color-on-primary);
    }

    .cta-content {
      max-width: 640px;
      margin: 0 auto;
    }

    .cta-title {
      color: var(--md-sys-color-on-primary);
    }

    .cta-desc {
      color: var(--md-sys-color-on-primary-container);
      margin: 16px 0 32px;
    }

    .cta-actions {
      display: flex;
      gap: 12px;
      justify-content: center;
      flex-wrap: wrap;
    }

    /* Market Highlights */
    .market-highlights-section {
      padding: 64px 0;
      background: var(--md-sys-color-surface-container-low);
      border-top: 1px solid var(--md-sys-color-outline-variant);
    }
    .market-highlights-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 32px;
    }
    .market-link {
      font: var(--md-sys-typescale-label-large);
      color: var(--md-sys-color-primary);
      text-decoration: none;
      font-weight: 500;
    }
    .market-link:hover { text-decoration: underline; }
    .market-highlights-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
    }
    .market-highlight-card {
      background: var(--md-sys-color-surface);
      border-radius: var(--md-sys-shape-corner-extra-large);
      padding: 32px 24px;
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 4px;
      border: 1px solid var(--md-sys-color-outline-variant);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .market-highlight-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--md-sys-elevation-2);
    }
    .market-highlight-value {
      font-size: 40px;
      font-weight: 800;
      line-height: 1;
      letter-spacing: -1px;
    }
    .market-highlight-label {
      font: var(--md-sys-typescale-title-small);
      color: var(--md-sys-color-on-surface);
      font-weight: 600;
      margin-top: 8px;
    }
    .market-highlight-sub {
      font: var(--md-sys-typescale-body-small);
      color: var(--md-sys-color-on-surface-variant);
    }
    @media (max-width: 1024px) {
      .market-highlights-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 640px) {
      .market-highlights-header { flex-direction: column; gap: 8px; text-align: center; }
      .market-highlights-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
      .market-highlight-value { font-size: 28px; }
    }

    .cta-section .md-button-filled {
      background: var(--md-sys-color-on-primary);
      color: var(--md-sys-color-primary);
    }

    .cta-outlined {
      border-color: var(--md-sys-color-outline);
      color: var(--md-sys-color-on-primary);
    }

    /* Partners Scroll - Google Style */
    .partners-section {
      background: var(--md-sys-color-surface);
      padding: 48px 0 56px;
      border-top: 1px solid var(--md-sys-color-outline-variant);
      overflow: hidden;
    }

    .partners-header {
      text-align: center;
      margin-bottom: 32px;
    }

    .partners-label {
      font: var(--md-sys-typescale-title-small);
      color: var(--md-sys-color-on-surface-variant);
      text-transform: uppercase;
      letter-spacing: 1.2px;
      font-size: 12px;
    }

    .partners-marquee {
      position: relative;
      width: 100%;
      overflow: hidden;
      mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
      -webkit-mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
      cursor: grab;
      user-select: none;
      -webkit-user-select: none;
    }

    .partners-marquee:active {
      cursor: grabbing;
    }

    .partners-scroll-wrapper {
      display: flex;
      width: max-content;
      animation: partnersScroll 90s linear infinite;
      will-change: transform;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
    }

    .partners-track {
      display: flex;
      align-items: center;
      gap: 64px;
      width: max-content;
      padding: 16px 0;
      will-change: transform;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
    }

    @keyframes partnersScroll {
      0% { transform: translate3d(0, 0, 0); }
      100% { transform: translate3d(-50%, 0, 0); }
    }

    .partner-item {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 56px;
    }

    .partner-item img {
      height: 48px;
      width: auto;
      max-width: 200px;
      object-fit: contain;
      filter: grayscale(100%) opacity(0.45);
      transition: filter 0.3s ease, transform 0.3s ease;
      cursor: pointer;
    }

    .partner-item img:hover {
      filter: grayscale(0%) opacity(1);
      transform: scale(1.05);
    }

    /* Responsive */
    @media (max-width: 1024px) {
      .hero-content {
        grid-template-columns: 1fr;
        gap: 40px;
        text-align: center;
      }

      .hero-subtitle {
        margin: 0 auto 32px;
      }

      .hero-actions {
        justify-content: center;
      }

      .hero-diagram {
        width: 300px;
        height: 300px;
      }

      .brand-logo-center {
        width: 60px;
        height: 60px;
      }

      .orbit-node {
        width: 44px;
        height: 44px;
      }

      .orbit-node.rhenium { top: -22px; margin-left: -22px; }
      .orbit-node.seaborgium { right: -22px; margin-top: -22px; }
      .orbit-node.scandium { bottom: -22px; margin-left: -22px; }
      .orbit-node.terbium { left: -22px; margin-top: -22px; }

      .modules-grid {
        grid-template-columns: 1fr;
      }

      .xai-layout {
        grid-template-columns: 1fr;
        gap: 40px;
      }

      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 640px) {
      .hero {
        min-height: auto;
      }

      .hero-content {
        padding: 40px 16px;
      }

      .module-card {
        grid-template-columns: 1fr;
        gap: 16px;
        padding: 24px;
      }

      .module-element {
        width: 72px;
        height: 84px;
      }

      .pipeline-connector {
        display: none;
      }

      .pipeline-flow {
        gap: 16px;
      }

      .pipeline-stage {
        min-width: 100%;
      }
    }
  `],
})
export class HomeComponent {
  @ViewChild('track') trackRef!: ElementRef<HTMLDivElement>;

  private isDragging = false;
  private hasDragged = false;
  private startX = 0;
  private dragOffset = 0;

  onPartnerClick(e: Event) {
    if (this.hasDragged) {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  onDragStart(e: MouseEvent) {
    this.isDragging = true;
    this.hasDragged = false;
    this.startX = e.clientX;
    this.dragOffset = 0;
    const track = this.trackRef.nativeElement;
    track.style.transition = 'none';
    track.style.transform = 'translate3d(0, 0, 0)';
  }

  onDragMove(e: MouseEvent) {
    if (!this.isDragging) return;
    e.preventDefault();
    const delta = e.clientX - this.startX;
    if (Math.abs(delta) > 3) this.hasDragged = true;
    this.dragOffset = delta;
    this.trackRef.nativeElement.style.transform = `translate3d(${delta}px, 0, 0)`;
  }

  onDragEnd() {
    if (!this.isDragging) return;
    this.isDragging = false;
    const track = this.trackRef.nativeElement;
    // Smoothly animate back to 0 offset
    track.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    track.style.transform = 'translate3d(0, 0, 0)';
    // Clean up transition after it completes
    setTimeout(() => {
      track.style.transition = '';
      track.style.transform = '';
    }, 450);
  }

  onTouchStart(e: TouchEvent) {
    this.isDragging = true;
    this.hasDragged = false;
    this.startX = e.touches[0].clientX;
    this.dragOffset = 0;
    const track = this.trackRef.nativeElement;
    track.style.transition = 'none';
    track.style.transform = 'translate3d(0, 0, 0)';
  }

  onTouchMove(e: TouchEvent) {
    if (!this.isDragging) return;
    const delta = e.touches[0].clientX - this.startX;
    if (Math.abs(delta) > 3) this.hasDragged = true;
    this.dragOffset = delta;
    this.trackRef.nativeElement.style.transform = `translate3d(${delta}px, 0, 0)`;
  }
  partners = [
    // Azerbaijan
    { name: 'TƏBİB', logo: 'partners/azerbaijan/tabib.png', country: 'Azerbaijan', url: 'https://www.tabib.gov.az/' },
    { name: 'Azərbaycan Respublikası Səhiyyə Nazirliyi', logo: 'partners/azerbaijan/ministry-of-health-az.png', country: 'Azerbaijan', url: 'https://www.sehiyye.gov.az/' },
    { name: 'İcbari Tibbi Sığorta üzrə Dövlət Agentliyi', logo: 'partners/azerbaijan/state-agency-health-insurance.png', country: 'Azerbaijan', url: 'https://www.its.gov.az/' },
    { name: 'Milli Onkologiya Mərkəzi', logo: 'partners/azerbaijan/national-oncology-center.png', country: 'Azerbaijan', url: 'https://www.mom.gov.az/' },
    { name: 'IDDA (IRIA)', logo: 'partners/azerbaijan/iria.png', country: 'Azerbaijan', url: 'https://www.idda.az/' },
    { name: 'Azərbaycan Tibb Universiteti', logo: 'partners/azerbaijan/azerbaijan-medical-university.png', country: 'Azerbaijan', url: 'https://www.amu.edu.az/' },
    { name: 'Elmi-Tədqiqat Ağ Ciyər Xəstəlikləri İnstitutu', logo: 'partners/azerbaijan/lung-diseases-institute.png', country: 'Azerbaijan', url: 'https://www.etacxi.az/' },
    { name: 'C4IR Azerbaijan / 4SİM', logo: 'partners/azerbaijan/c4ir-azerbaijan.png', country: 'Azerbaijan', url: 'https://www.c4irazerbaijan.org/' },
    { name: 'Mərkəzi Gömrük Hospitalı', logo: 'partners/azerbaijan/customs-hospital.png', country: 'Azerbaijan', url: 'https://www.customshospital.az/' },
    // Sweden
    { name: 'Region Stockholm', logo: 'partners/sweden/region-stockholm.png', country: 'Sweden', url: 'https://www.regionstockholm.se/' },
    { name: 'Karolinska University Hospital', logo: 'partners/sweden/karolinska.png', country: 'Sweden', url: 'https://www.karolinska.se/' },
    { name: 'Vinnova', logo: 'partners/sweden/vinnova.png', country: 'Sweden', url: 'https://www.vinnova.se/en/' },
    { name: 'Sahlgrenska University Hospital', logo: 'partners/sweden/sahlgrenska.png', country: 'Sweden', url: 'https://www.sahlgrenska.se/en' },
    { name: 'Swedish eHealth Agency', logo: 'partners/sweden/swedish-ehealth-agency.png', country: 'Sweden', url: 'https://www.ehalsomyndigheten.se/' },
    { name: 'Uppsala University Hospital', logo: 'partners/sweden/uppsala-university-hospital.png', country: 'Sweden', url: 'https://www.akademiska.se/en/' },
    { name: 'Skåne University Hospital', logo: 'partners/sweden/skane-university-hospital.png', country: 'Sweden', url: 'https://vard.skane.se/skanes-universitetssjukhus-sus' },
    { name: 'RISE', logo: 'partners/sweden/rise.png', country: 'Sweden', url: 'https://www.ri.se/en' },
    { name: 'Socialstyrelsen', logo: 'partners/sweden/socialstyrelsen.png', country: 'Sweden', url: 'https://www.socialstyrelsen.se/en/' },
    { name: 'SciLifeLab', logo: 'partners/sweden/scilifelab.png', country: 'Sweden', url: 'https://www.scilifelab.se/' },
    // Finland
    { name: 'HUS Helsinki University Hospital', logo: 'partners/finland/hus-helsinki.png', country: 'Finland', url: 'https://www.hus.fi/en' },
    { name: 'Business Finland', logo: 'partners/finland/business-finland.png', country: 'Finland', url: 'https://www.businessfinland.fi/en' },
    { name: 'Findata', logo: 'partners/finland/findata.png', country: 'Finland', url: 'https://www.findata.fi/en/' },
    { name: 'VTT', logo: 'partners/finland/vtt.png', country: 'Finland', url: 'https://www.vttresearch.com/en' },
    { name: 'TAYS Tampere University Hospital', logo: 'partners/finland/tays.png', country: 'Finland', url: 'https://www.pirha.fi/web/english/services/hospital-care' },
    { name: 'Health Capital Helsinki', logo: 'partners/finland/health-capital-helsinki.png', country: 'Finland', url: 'https://www.healthcapitalhelsinki.fi/' },
    // Denmark
    { name: 'Rigshospitalet', logo: 'partners/denmark/rigshospitalet.png', country: 'Denmark', url: 'https://www.rigshospitalet.dk/english/Pages/default.aspx' },
    { name: 'Danish Health Data Authority', logo: 'partners/denmark/danish-health-data-authority.png', country: 'Denmark', url: 'https://english.sundhedsdatastyrelsen.dk/' },
    { name: 'Aarhus University Hospital', logo: 'partners/denmark/aarhus-university-hospital.png', country: 'Denmark', url: 'https://www.en.auh.dk/' },
    { name: 'Innovation Fund Denmark', logo: 'partners/denmark/innovation-fund-denmark.png', country: 'Denmark', url: 'https://www.innovationsfonden.dk/en' },
    { name: 'Odense University Hospital', logo: 'partners/denmark/odense-university-hospital.png', country: 'Denmark', url: 'https://en.ouh.dk/' },
    { name: 'MedCom', logo: 'partners/denmark/medcom.png', country: 'Denmark', url: 'https://www.medcom.dk/medcom-in-english/' },
    // Estonia
    { name: 'North Estonia Medical Centre', logo: 'partners/estonia/north-estonia-medical-centre.png', country: 'Estonia', url: 'https://www.regionaalhaigla.ee/' },
    { name: 'Tartu University Hospital', logo: 'partners/estonia/tartu-university-hospital.png', country: 'Estonia', url: 'https://www.kliinikum.ee/' },
    { name: 'Estonian Health Insurance Fund', logo: 'partners/estonia/estonian-health-insurance-fund.png', country: 'Estonia', url: 'https://www.tervisekassa.ee/' },
    { name: 'TEHIK', logo: 'partners/estonia/tehik.png', country: 'Estonia', url: 'https://www.tehik.ee/' },
    { name: 'Tehnopol', logo: 'partners/estonia/tehnopol.png', country: 'Estonia', url: 'https://www.tehnopol.ee/' },
    { name: 'Ministry of Social Affairs (Estonia)', logo: 'partners/estonia/ministry-of-social-affairs-ee.png', country: 'Estonia', url: 'https://www.sm.ee/' },
    // Latvia
    { name: 'Riga East Clinical University Hospital', logo: 'partners/latvia/riga-east-hospital.png', country: 'Latvia', url: 'https://www.aslimnica.lv/' },
    { name: 'Pauls Stradiņš Clinical University Hospital', logo: 'partners/latvia/pauls-stradins-hospital.png', country: 'Latvia', url: 'https://www.stradini.lv/' },
    { name: 'National Health Service Latvia', logo: 'partners/latvia/national-health-service-lv.png', country: 'Latvia', url: 'https://www.vmnvd.gov.lv/' },
    { name: 'LIAA', logo: 'partners/latvia/liaa.png', country: 'Latvia', url: 'https://www.liaa.gov.lv/' },
    { name: 'Children\'s Clinical University Hospital', logo: 'partners/latvia/childrens-hospital-lv.png', country: 'Latvia', url: 'https://www.bkus.lv/' },
    { name: 'Riga Stradiņš University', logo: 'partners/latvia/riga-stradins-university.png', country: 'Latvia', url: 'https://www.rsu.lv/' },
    // Lithuania
    { name: 'Santaros Klinikos', logo: 'partners/lithuania/vilnius-university-hospital.png', country: 'Lithuania', url: 'https://www.santa.lt/' },
    { name: 'Kauno Klinikos', logo: 'partners/lithuania/kauno-klinikos.png', country: 'Lithuania', url: 'https://www.kaunoklinikos.lt/' },
    { name: 'Ministry of Health (Lithuania)', logo: 'partners/lithuania/ministry-of-health-lt.png', country: 'Lithuania', url: 'https://sam.lrv.lt/' },
    { name: 'Innovation Agency Lithuania', logo: 'partners/lithuania/innovation-agency-lithuania.png', country: 'Lithuania', url: 'https://www.inovacijuagentura.lt/' },
    { name: 'National Cancer Institute (Lithuania)', logo: 'partners/lithuania/national-cancer-institute-lt.png', country: 'Lithuania', url: 'https://www.nvi.lt/' },
    { name: 'National Health Insurance Fund (VLK)', logo: 'partners/lithuania/vlk.png', country: 'Lithuania', url: 'https://ligoniukasa.lrv.lt/' },
  ];
}
