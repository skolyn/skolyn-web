import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  template: `
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <div class="hero-label">
          <span class="material-symbols-outlined sz-20">info</span>
          About Skolyn
        </div>
        <h1 class="display-medium animate-in">Redefining Medical Imaging<br>Through Explainable AI</h1>
        <p class="body-large text-secondary hero-desc animate-in animate-in-delay-1">
          Skolyn is an advanced medical AI company that delivers end-to-end
          intelligent analysis of medical imaging across all four major modalities.
        </p>
      </div>
    </section>

    <!-- Company Overview -->
    <section class="section">
      <div class="container">
        <div class="overview-grid">
          <div class="overview-text animate-in">
            <h2 class="headline-large">Company Overview</h2>
            <p class="body-large text-secondary">
              Founded with the conviction that artificial intelligence should serve as a
              transparent, reliable partner for clinicians, Skolyn has built a multi-modal
              diagnostic platform that not only identifies pathologies but explains why it
              reached each conclusion, in language and visual formats that clinical
              professionals can trust, verify, and act upon with confidence.
            </p>
            <p class="body-large text-secondary">
              The platform is organized into four modality-specific operating modules:
              Rhenium OS, Seaborgium OS, Scandium OS, and Terbium OS, each purpose-built
              for its imaging type and housing all relevant subtypes beneath a unified,
              doctor-friendly interface.
            </p>
            <p class="body-large text-secondary">
              Skolyn does not aim to replace the radiologist or the physician. It aims to
              provide them with a second pair of eyes that never tires, a memory that never
              forgets, and an explanation engine that always shows its reasoning.
            </p>
          </div>
          <div class="overview-card animate-in animate-in-delay-2">
            <div class="overview-item">
              <span class="material-symbols-outlined sz-40">location_on</span>
              <div>
                <h4 class="title-medium">Headquarters</h4>
                <p class="body-medium text-secondary">Baku, Azerbaijan</p>
              </div>
            </div>
            <hr class="md-divider">
            <div class="overview-item">
              <span class="material-symbols-outlined sz-40">language</span>
              <div>
                <h4 class="title-medium">Website</h4>
                <a href="https://www.skolyn.se" target="_blank" class="body-medium">www.skolyn.se</a>
              </div>
            </div>
            <hr class="md-divider">
            <div class="overview-item">
              <span class="material-symbols-outlined sz-40">biotech</span>
              <div>
                <h4 class="title-medium">Focus</h4>
                <p class="body-medium text-secondary">Medical Imaging AI</p>
              </div>
            </div>
            <hr class="md-divider">
            <div class="overview-item">
              <span class="material-symbols-outlined sz-40">translate</span>
              <div>
                <h4 class="title-medium">Languages</h4>
                <p class="body-medium text-secondary">English, Azerbaijani, Swedish, Turkish, German, Arabic</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="section mv-section">
      <div class="container">
        <div class="mv-grid">
          <div class="mv-card animate-in">
            <div class="mv-icon mission-icon">
              <span class="material-symbols-outlined sz-40">flag</span>
            </div>
            <h3 class="headline-small">Mission</h3>
            <p class="body-large text-secondary">
              To provide clinicians with an AI-powered, fully transparent medical imaging
              analysis system that covers every stage of diagnosis, enabling earlier, more
              accurate, and more trusted clinical decisions at every level of the healthcare system.
            </p>
          </div>
          <div class="mv-card animate-in animate-in-delay-1">
            <div class="mv-icon vision-icon">
              <span class="material-symbols-outlined sz-40">visibility</span>
            </div>
            <h3 class="headline-small">Vision</h3>
            <p class="body-large text-secondary">
              A world where no disease goes undetected due to delayed or inaccessible imaging
              expertise, and where every patient benefits from the same level of AI-augmented
              diagnostic precision regardless of geography, institutional size, or resource availability.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Values -->
    <section class="section">
      <div class="container">
        <div class="section-header text-center">
          <h2 class="display-small">Core Values</h2>
          <p class="body-large text-secondary section-desc">
            The principles that guide every decision Skolyn makes.
          </p>
        </div>

        <div class="values-grid">
          <div class="value-card animate-in">
            <span class="material-symbols-outlined sz-48 value-icon">visibility</span>
            <h4 class="title-large">Transparency First</h4>
            <p class="body-medium text-secondary">
              Every prediction is accompanied by a full explanation. No output is presented
              without a visual and textual rationale that the clinician can evaluate independently.
            </p>
          </div>
          <div class="value-card animate-in animate-in-delay-1">
            <span class="material-symbols-outlined sz-48 value-icon">handshake</span>
            <h4 class="title-large">Clinical Partnership</h4>
            <p class="body-medium text-secondary">
              Skolyn amplifies the radiologist and clinician but does not replace them.
              The final authority always rests with the medical professional.
            </p>
          </div>
          <div class="value-card animate-in animate-in-delay-2">
            <span class="material-symbols-outlined sz-48 value-icon">science</span>
            <h4 class="title-large">Scientific Rigor</h4>
            <p class="body-medium text-secondary">
              All models are developed, validated, and updated following evidence-based protocols
              with multi-institutional, ethnically diverse datasets.
            </p>
          </div>
          <div class="value-card animate-in animate-in-delay-3">
            <span class="material-symbols-outlined sz-48 value-icon">diversity_3</span>
            <h4 class="title-large">Inclusivity</h4>
            <p class="body-medium text-secondary">
              Designed to bring advanced imaging AI to facilities across all economic tiers
              and geographies with lightweight deployment options.
            </p>
          </div>
          <div class="value-card animate-in">
            <span class="material-symbols-outlined sz-48 value-icon">shield</span>
            <h4 class="title-large">Patient Safety</h4>
            <p class="body-medium text-secondary">
              Every architectural decision is made with the singular priority of improving
              patient outcomes and minimizing diagnostic error.
            </p>
          </div>
          <div class="value-card animate-in animate-in-delay-1">
            <span class="material-symbols-outlined sz-48 value-icon">autorenew</span>
            <h4 class="title-large">Continuous Learning</h4>
            <p class="body-medium text-secondary">
              Every clinician interaction, override, and validated outcome feeds into a
              continuous improvement cycle for progressively better accuracy.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Innoland Incubation Center -->
    <section class="section">
      <div class="container">
        <div class="innoland-banner">
          <div class="innoland-content">
            <a href="https://innoland.az" target="_blank" rel="noopener" class="innoland-logo-link">
              <img src="assets/innoland-logo.svg" alt="Innoland Incubation Center" class="innoland-logo" />
            </a>
            <div>
              <h3 class="headline-small">Innoland Incubation Center</h3>
              <p class="body-large text-secondary">
                Skolyn is an incubated startup within the Innoland Incubation and Acceleration Center,
                Azerbaijan's premier technology and innovation hub. The center provides strategic mentoring,
                infrastructure, and networking to support high-potential startups in deep-tech sectors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Element Naming -->
    <section class="section naming-section">
      <div class="container">
        <div class="text-center">
          <h2 class="headline-large">The Periodic Table of Diagnostics</h2>
          <p class="body-large text-secondary section-desc">
            Each module is named after a chemical element, reflecting precision,
            scientific foundation, and the elemental role each imaging modality plays.
          </p>
        </div>
        <div class="elements-row">
          <div class="element-tile rhenium animate-in">
            <span class="el-number">75</span>
            <span class="el-symbol">Re</span>
            <span class="el-name">Rhenium</span>
            <span class="el-desc">MRI</span>
          </div>
          <div class="element-tile seaborgium animate-in animate-in-delay-1">
            <span class="el-number">106</span>
            <span class="el-symbol">Sg</span>
            <span class="el-name">Seaborgium</span>
            <span class="el-desc">CT</span>
          </div>
          <div class="element-tile scandium animate-in animate-in-delay-2">
            <span class="el-number">21</span>
            <span class="el-symbol">Sc</span>
            <span class="el-name">Scandium</span>
            <span class="el-desc">Ultrasound</span>
          </div>
          <div class="element-tile terbium animate-in animate-in-delay-3">
            <span class="el-number">65</span>
            <span class="el-symbol">Tb</span>
            <span class="el-name">Terbium</span>
            <span class="el-desc">X-Ray</span>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .page-hero {
      padding: 120px 0 64px;
      background: var(--md-sys-color-surface-container-low);
      text-align: center;
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

    .hero-desc {
      max-width: 640px;
      margin: 16px auto 0;
      font-size: 18px;
      line-height: 28px;
    }

    .overview-grid {
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      gap: 64px;
      align-items: start;
    }

    .overview-text {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .overview-card {
      background: var(--md-sys-color-surface-container-low);
      border-radius: var(--md-sys-shape-corner-extra-large);
      padding: 32px;
    }

    .overview-item {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .overview-item .material-symbols-outlined {
      color: var(--md-sys-color-primary);
    }

    .mv-section {
      background: var(--md-sys-color-surface-container-low);
    }

    .mv-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px;
    }

    .mv-card {
      background: var(--md-sys-color-surface);
      border-radius: var(--md-sys-shape-corner-extra-large);
      padding: 40px;
    }

    .mv-icon {
      width: 64px;
      height: 64px;
      border-radius: var(--md-sys-shape-corner-large);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
    }

    .mission-icon {
      background: var(--md-sys-color-primary-container);
      color: var(--md-sys-color-primary);
    }

    .vision-icon {
      background: var(--md-sys-color-tertiary-container);
      color: var(--md-sys-color-tertiary);
    }

    .mv-card h3 { margin-bottom: 12px; }

    .section-header { margin-bottom: 48px; }
    .section-desc { max-width: 640px; margin: 16px auto 0; }

    .values-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }

    .value-card {
      padding: 32px;
      border-radius: var(--md-sys-shape-corner-extra-large);
      border: 1px solid var(--md-sys-color-outline-variant);
      transition: all var(--md-sys-motion-duration-medium2) var(--md-sys-motion-easing-standard);
    }

    .value-card:hover {
      box-shadow: var(--md-sys-elevation-2);
      border-color: transparent;
    }

    .value-icon {
      color: var(--md-sys-color-primary);
      margin-bottom: 16px;
    }

    .value-card h4 { margin-bottom: 8px; }

    .naming-section {
      background: linear-gradient(135deg, #1f1f1f, #303134);
      color: white;
    }

    .innoland-banner { background: linear-gradient(135deg, var(--md-sys-color-primary-container), #e8f0fe); border-radius: var(--md-sys-shape-corner-extra-large); padding: 48px; border: 1px solid var(--md-sys-color-primary); }
    .innoland-content { display: flex; align-items: flex-start; gap: 24px; }
    .innoland-content .material-symbols-outlined { color: var(--md-sys-color-primary); flex-shrink: 0; }
    .innoland-logo-link { flex-shrink: 0; }
    .innoland-logo { height: 40px; width: auto; transition: opacity 0.2s; }
    .innoland-logo-link:hover .innoland-logo { opacity: 0.8; }
    .innoland-content h3 { margin-bottom: 8px; }
    .innoland-content p { max-width: 640px; }

    .naming-section .text-secondary { color: rgba(255,255,255,0.7); }

    .elements-row {
      display: flex;
      justify-content: center;
      gap: 24px;
      margin-top: 48px;
      flex-wrap: wrap;
    }

    .element-tile {
      width: 140px;
      height: 170px;
      border-radius: var(--md-sys-shape-corner-large);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2px;
      padding: 16px;
      border: 2px solid;
      transition: transform var(--md-sys-motion-duration-medium2) var(--md-sys-motion-easing-standard);
    }

    .element-tile:hover {
      transform: translateY(-8px);
    }

    .element-tile.rhenium { border-color: var(--color-rhenium); background: rgba(26,115,232,0.12); }
    .element-tile.seaborgium { border-color: var(--color-seaborgium); background: rgba(227,116,0,0.12); }
    .element-tile.scandium { border-color: var(--color-scandium); background: rgba(30,142,62,0.12); }
    .element-tile.terbium { border-color: var(--color-terbium); background: rgba(147,52,230,0.12); }

    .el-number { font: var(--md-sys-typescale-label-small); opacity: 0.7; }
    .el-symbol { font-size: 44px; font-weight: 700; line-height: 1.1; }
    .element-tile.rhenium .el-symbol { color: var(--color-rhenium); }
    .element-tile.seaborgium .el-symbol { color: var(--color-seaborgium); }
    .element-tile.scandium .el-symbol { color: var(--color-scandium); }
    .element-tile.terbium .el-symbol { color: var(--color-terbium); }
    .el-name { font: var(--md-sys-typescale-label-medium); }
    .el-desc { font: var(--md-sys-typescale-label-small); opacity: 0.6; }

    @media (max-width: 1024px) {
      .overview-grid { grid-template-columns: 1fr; gap: 40px; }
      .mv-grid { grid-template-columns: 1fr; }
      .values-grid { grid-template-columns: repeat(2, 1fr); }
    }

    @media (max-width: 640px) {
      .page-hero { padding: 100px 0 48px; }
      .values-grid { grid-template-columns: 1fr; }
      .element-tile { width: 120px; height: 150px; }
      .el-symbol { font-size: 36px; }
    }
  `],
})
export class AboutComponent {}
