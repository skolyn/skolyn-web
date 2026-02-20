import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  imports: [],
  template: `
    <section class="page-hero">
      <div class="container">
        <div class="hero-label"><span class="material-symbols-outlined sz-20">help</span> FAQ</div>
        <h1 class="display-medium animate-in">Frequently Asked Questions</h1>
        <p class="body-large text-secondary hero-desc animate-in animate-in-delay-1">
          Answers to the most common questions about Skolyn's platform, deployment, and clinical integration.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container faq-container">
        @for (cat of categories; track cat.title) {
          <div class="faq-category">
            <h2 class="headline-small cat-heading">
              <span class="material-symbols-outlined">{{ cat.icon }}</span>
              {{ cat.title }}
            </h2>
            @for (q of cat.items; track q.question) {
              <div class="faq-item" (click)="q.open = !q.open" [class.open]="q.open">
                <div class="faq-question">
                  <span class="title-medium">{{ q.question }}</span>
                  <span class="material-symbols-outlined chevron">expand_more</span>
                </div>
                @if (q.open) {
                  <p class="body-medium text-secondary faq-answer">{{ q.answer }}</p>
                }
              </div>
            }
          </div>
        }
      </div>
    </section>
  `,
  styles: [`
    .page-hero { padding: 120px 0 64px; background: var(--md-sys-color-surface-container-low); text-align: center; }
    .hero-label { display: inline-flex; align-items: center; gap: 8px; padding: 6px 16px 6px 12px; background: rgba(26,115,232,0.08); border-radius: var(--md-sys-shape-corner-full); font: var(--md-sys-typescale-label-large); color: var(--md-sys-color-primary); margin-bottom: 24px; }
    .hero-desc { max-width: 640px; margin: 16px auto 0; font-size: 18px; line-height: 28px; }
    .faq-container { max-width: 800px; margin: 0 auto; }
    .faq-category { margin-bottom: 48px; }
    .cat-heading { display: flex; align-items: center; gap: 12px; color: var(--md-sys-color-primary); margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid var(--md-sys-color-primary-container); }
    .faq-item { border: 1px solid var(--md-sys-color-outline-variant); border-radius: var(--md-sys-shape-corner-medium); margin-bottom: 8px; cursor: pointer; transition: all 0.2s; overflow: hidden; }
    .faq-item:hover { border-color: var(--md-sys-color-primary); }
    .faq-item.open { border-color: var(--md-sys-color-primary); background: var(--md-sys-color-primary-container); }
    .faq-question { display: flex; align-items: center; justify-content: space-between; padding: 16px 20px; gap: 12px; }
    .chevron { transition: transform 0.2s; color: var(--md-sys-color-on-surface-variant); }
    .faq-item.open .chevron { transform: rotate(180deg); color: var(--md-sys-color-primary); }
    .faq-answer { padding: 0 20px 16px; line-height: 1.6; }
    @media (max-width: 640px) { .page-hero { padding: 100px 0 48px; } }
  `],
})
export class FaqComponent {
  categories = [
    {
      title: 'General', icon: 'info',
      items: [
        { question: 'What is Skolyn?', answer: 'Skolyn is an advanced medical AI company that delivers end-to-end intelligent analysis of medical imaging across four major modalities: MRI, CT, Ultrasound, and X-Ray. Each modality is powered by a dedicated operating module with full explainability.', open: false },
        { question: 'What imaging modalities does Skolyn support?', answer: 'Skolyn supports four modalities through dedicated modules: Rhenium OS (MRI), Seaborgium OS (CT), Scandium OS (Ultrasound), and Terbium OS (X-Ray). Each module is purpose-built for its imaging type.', open: false },
        { question: 'Is Skolyn intended to replace radiologists?', answer: 'No. Skolyn is designed as a clinical decision-support tool that augments radiologists and clinicians. The final diagnostic authority always rests with the medical professional. Our AI serves as a second pair of eyes that never tires.', open: false },
        { question: 'Where is Skolyn headquartered?', answer: 'Skolyn is headquartered in Baku, Azerbaijan, with an online office in Stockholm, Sweden. The company is incubated within the Innoland Incubation and Acceleration Center.', open: false },
      ]
    },
    {
      title: 'Technology', icon: 'psychology',
      items: [
        { question: 'What makes Skolyn different from other medical AI solutions?', answer: 'Skolyn provides full explainability (XAI) for every prediction. Every AI output includes visual heatmaps, attention maps, and natural-language rationale so clinicians can understand, verify, and trust the results independently.', open: false },
        { question: 'What AI architectures does Skolyn use?', answer: 'Skolyn employs state-of-the-art vision transformers, convolutional neural networks, and multi-modal fusion architectures. All models are trained on ethnically diverse, multi-institutional datasets with rigorous validation protocols.', open: false },
        { question: 'Does Skolyn support federated learning?', answer: 'Yes. Skolyn supports federated learning, allowing institutions to contribute to model improvement without sharing raw patient data. Models are trained locally and only aggregated updates are shared.', open: false },
        { question: 'What interoperability standards does Skolyn support?', answer: 'Skolyn supports DICOM, HL7 FHIR, and integrates seamlessly with existing PACS, RIS, and EHR systems through standardized APIs and connectors.', open: false },
      ]
    },
    {
      title: 'Deployment & Integration', icon: 'deployed_code',
      items: [
        { question: 'How is Skolyn deployed?', answer: 'Skolyn offers flexible deployment options: cloud-based (SaaS), on-premise, hybrid, and edge deployments. The platform adapts to institutional infrastructure requirements and data sovereignty regulations.', open: false },
        { question: 'How long does integration take?', answer: 'Typical integration with existing PACS infrastructure takes 2-4 weeks, depending on institutional requirements. Our integration team provides full support throughout the process.', open: false },
        { question: 'What are the minimum system requirements?', answer: 'Requirements vary by deployment model. Cloud deployments need only a modern browser and DICOM connectivity. On-premise deployments require GPU-capable servers with specifications provided during consultation.', open: false },
      ]
    },
    {
      title: 'Security & Compliance', icon: 'shield',
      items: [
        { question: 'Is Skolyn HIPAA compliant?', answer: 'Yes. Skolyn is designed from the ground up with HIPAA compliance. All patient data is encrypted at rest and in transit, with strict access controls, audit logging, and data retention policies.', open: false },
        { question: 'What regulatory certifications does Skolyn hold?', answer: 'Skolyn is pursuing ISO 13485 (medical device quality management), ISO 27001 (information security), CE Mark, and FDA 510(k) clearance. GDPR and HIPAA compliance are built into the platform architecture.', open: false },
        { question: 'How does Skolyn handle patient data?', answer: 'Patient data is processed with end-to-end encryption, anonymized where possible, and never shared with third parties. Data processing complies with GDPR, HIPAA, and local data protection laws.', open: false },
      ]
    },
    {
      title: 'Commercial', icon: 'business',
      items: [
        { question: 'What is the pricing model?', answer: 'Skolyn offers flexible pricing models including per-study, subscription, and enterprise licensing. Pricing is tailored to institutional volume and deployment requirements. Contact our sales team for a custom quote.', open: false },
        { question: 'Is there a trial or demo available?', answer: 'Yes. We offer guided demonstrations and pilot programs for qualified healthcare institutions. Contact us through the Contact page to schedule a demo with our clinical team.', open: false },
        { question: 'Does Skolyn offer training and support?', answer: 'Yes. Every deployment includes comprehensive onboarding, clinician training, 24/7 technical support, and ongoing model updates as part of our service commitment.', open: false },
      ]
    },
  ];
}
