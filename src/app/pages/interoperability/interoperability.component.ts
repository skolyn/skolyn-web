import { Component } from '@angular/core';

@Component({
  selector: 'app-interoperability',
  imports: [],
  template: `
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <div class="hero-badge">
          <span class="material-symbols-outlined">share</span>
          Interoperability
        </div>
        <h1 class="display-medium animate-in">Integration Standards</h1>
        <p class="hero-subtitle body-large animate-in animate-in-delay-1">
          Skolyn integrates seamlessly with existing clinical infrastructure through industry-standard
          protocols, developer-friendly APIs, and certified vendor partnerships.
        </p>
      </div>
    </section>

    <!-- Standards Grid -->
    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center" style="margin-bottom: 48px;">Standards Compliance</h2>
        <div class="standards-grid">
          <div class="std-section">
            <div class="std-header imaging-hdr">
              <span class="material-symbols-outlined">scan</span>
              <h3 class="title-large">Imaging Standards</h3>
            </div>
            <div class="std-body">
              <div class="std-item"><span class="label-large">DICOM Part 10</span><span class="body-small text-secondary">Full compliance</span></div>
              <div class="std-item"><span class="label-large">NIfTI Format</span><span class="body-small text-secondary">Research pipelines</span></div>
              <div class="std-item"><span class="label-large">DICOMweb</span><span class="body-small text-secondary">WADO-RS / STOW-RS / QIDO-RS</span></div>
              <div class="std-item"><span class="label-large">IHE Profiles</span><span class="body-small text-secondary">RAD-TF integration</span></div>
            </div>
          </div>
          <div class="std-section">
            <div class="std-header clinical-hdr">
              <span class="material-symbols-outlined">local_hospital</span>
              <h3 class="title-large">Clinical Systems</h3>
            </div>
            <div class="std-body">
              <div class="std-item"><span class="label-large">PACS</span><span class="body-small text-secondary">GE, Siemens, Philips, Agfa, Fujifilm, Sectra, Intelerad, Orthanc</span></div>
              <div class="std-item"><span class="label-large">RIS</span><span class="body-small text-secondary">Worklist pull and report push</span></div>
              <div class="std-item"><span class="label-large">EMR</span><span class="body-small text-secondary">Epic, Cerner, Meditech, OpenMRS, OpenEHR</span></div>
              <div class="std-item"><span class="label-large">LIS</span><span class="body-small text-secondary">Lab value correlation</span></div>
              <div class="std-item"><span class="label-large">HL7 FHIR R4</span><span class="body-small text-secondary">DiagnosticReport, ImagingStudy, Observation, Condition, Patient</span></div>
            </div>
          </div>
          <div class="std-section">
            <div class="std-header dev-hdr">
              <span class="material-symbols-outlined">code</span>
              <h3 class="title-large">Developer Access</h3>
            </div>
            <div class="std-body">
              <div class="std-item"><span class="label-large">REST API</span><span class="body-small text-secondary">OpenAPI 3.0 specification</span></div>
              <div class="std-item"><span class="label-large">Python SDK</span><span class="body-small text-secondary">pip install skolyn</span></div>
              <div class="std-item"><span class="label-large">JavaScript/TypeScript SDK</span><span class="body-small text-secondary">npm install skolyn</span></div>
              <div class="std-item"><span class="label-large">Webhook Events</span><span class="body-small text-secondary">Real-time notifications</span></div>
              <div class="std-item"><span class="label-large">GraphQL API</span><span class="body-small text-secondary">Complex queries</span></div>
            </div>
          </div>
          <div class="std-section">
            <div class="std-header term-hdr">
              <span class="material-symbols-outlined">dictionary</span>
              <h3 class="title-large">Terminology</h3>
            </div>
            <div class="std-body">
              <div class="std-item"><span class="label-large">SNOMED-CT</span><span class="body-small text-secondary">Diagnosis coding</span></div>
              <div class="std-item"><span class="label-large">ICD-10-CM</span><span class="body-small text-secondary">Diagnosis mapping</span></div>
              <div class="std-item"><span class="label-large">LOINC</span><span class="body-small text-secondary">Observation coding</span></div>
              <div class="std-item"><span class="label-large">RadLex</span><span class="body-small text-secondary">Radiology lexicon</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- DICOM Services -->
    <section class="section-tight" style="background: var(--md-sys-color-surface-variant);">
      <div class="container">
        <h2 class="headline-large text-center" style="margin-bottom: 48px;">DICOM Services Supported</h2>
        <div class="dicom-grid">
          <div class="dicom-item"><span class="material-symbols-outlined">download</span><div><span class="label-large">C-STORE SCP</span><span class="body-small text-secondary">Incoming studies</span></div></div>
          <div class="dicom-item"><span class="material-symbols-outlined">search</span><div><span class="label-large">C-FIND SCU/SCP</span><span class="body-small text-secondary">Worklist querying</span></div></div>
          <div class="dicom-item"><span class="material-symbols-outlined">swap_horiz</span><div><span class="label-large">C-MOVE SCU/SCP</span><span class="body-small text-secondary">Study retrieval</span></div></div>
          <div class="dicom-item"><span class="material-symbols-outlined">download_for_offline</span><div><span class="label-large">C-GET</span><span class="body-small text-secondary">Targeted instance retrieval</span></div></div>
          <div class="dicom-item"><span class="material-symbols-outlined">summarize</span><div><span class="label-large">DICOM SR</span><span class="body-small text-secondary">Structured reporting output</span></div></div>
          <div class="dicom-item"><span class="material-symbols-outlined">layers</span><div><span class="label-large">DICOM PR / GSP</span><span class="body-small text-secondary">Presentation state and windowing</span></div></div>
          <div class="dicom-item"><span class="material-symbols-outlined">view_in_ar</span><div><span class="label-large">DICOM SEG</span><span class="body-small text-secondary">Segmentation masks</span></div></div>
          <div class="dicom-item"><span class="material-symbols-outlined">target</span><div><span class="label-large">DICOM RT Struct</span><span class="body-small text-secondary">Radiotherapy contour export</span></div></div>
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

    .standards-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
    .std-section { border-radius: var(--md-sys-shape-corner-large); overflow: hidden; background: var(--md-sys-color-surface-container); }
    .std-header { display: flex; align-items: center; gap: 12px; padding: 20px 24px; color: #fff; }
    .imaging-hdr { background: var(--md-sys-color-primary); }
    .clinical-hdr { background: var(--color-seaborgium); }
    .dev-hdr { background: var(--color-scandium); }
    .term-hdr { background: var(--color-terbium); }
    .std-body { padding: 16px 24px 20px; display: flex; flex-direction: column; gap: 12px; }
    .std-item { display: flex; flex-direction: column; gap: 2px; }

    .dicom-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
    .dicom-item {
      background: var(--md-sys-color-surface); border-radius: var(--md-sys-shape-corner-medium);
      padding: 20px; display: flex; align-items: flex-start; gap: 12px; box-shadow: var(--md-sys-elevation-1);
    }
    .dicom-item .material-symbols-outlined { color: var(--md-sys-color-primary); flex-shrink: 0; }
    .dicom-item div { display: flex; flex-direction: column; gap: 2px; }

    @media (max-width: 1024px) {
      .standards-grid { grid-template-columns: 1fr; }
      .dicom-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 600px) { .dicom-grid { grid-template-columns: 1fr; } }
  `],
})
export class InteroperabilityComponent {}
