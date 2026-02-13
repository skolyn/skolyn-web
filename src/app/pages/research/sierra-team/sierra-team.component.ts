import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sierra-team',
  imports: [RouterLink],
  template: `
    <section class="module-hero sierra-bg">
      <div class="container">
        <a routerLink="/research" class="back-link"><span class="material-symbols-outlined sz-20">arrow_back</span> SIERRA Overview</a>
        <div class="hero-text animate-in">
          <div class="element-badge">
            <span class="el-sym material-symbols-outlined sz-40">groups</span>
            <span class="el-nm">Research Team</span>
          </div>
          <h1 class="display-medium">SIERRA Research Team</h1>
          <p class="title-large module-tagline">42 Researchers, Engineers &amp; Clinicians</p>
          <p class="body-large hero-desc">
            A multidisciplinary team of AI researchers, clinical radiologists,
            and biomedical engineers. All SIERRA members use the
            <strong>&#64;sierra.skolyn.se</strong> email domain.
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center">Team Composition</h2>
        <p class="body-large text-secondary text-center section-desc">From institute leadership to research engineers — every role represented.</p>
        <div class="subtypes-grid">
          @for (role of roleCategories; track role.name) {
            <div class="subtype-card animate-in">
              <span class="material-symbols-outlined sz-40">{{ role.icon }}</span>
              <h4 class="title-medium">{{ role.name }}</h4>
              <p class="body-small text-secondary">{{ role.desc }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section alt-section">
      <div class="container">
        <h2 class="headline-large text-center">Institute Leadership</h2>
        <div class="leader-grid">
          @for (lead of leadership; track lead.name) {
            <div class="leader-card animate-in">
              <div class="leader-avatar" [style.background]="lead.color"><span class="material-symbols-outlined sz-48">person</span></div>
              <h3 class="title-large">{{ lead.name }}</h3>
              <span class="body-medium" [style.color]="lead.color">{{ lead.role }}</span>
              <a class="c-email" [href]="'mailto:' + lead.email"><span class="material-symbols-outlined sz-14">mail</span> {{ lead.email }}</a>
              <p class="body-medium text-secondary">{{ lead.bio }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center">Department Heads</h2>
        <div class="staff-grid">
          @for (head of deptHeads; track head.name) {
            <div class="staff-card">
              <div class="staff-avatar" [style.background]="head.color"><span class="material-symbols-outlined sz-28">person</span></div>
              <div class="staff-info">
                <span class="title-medium">{{ head.name }}</span>
                <span class="body-small" [style.color]="head.color">{{ head.role }}</span>
                <span class="dept-tag body-small">{{ head.dept }}</span>
                <a class="c-email" [href]="'mailto:' + head.email"><span class="material-symbols-outlined sz-14">mail</span> {{ head.email }}</a>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section alt-section">
      <div class="container">
        <h2 class="headline-large text-center">Senior Researchers</h2>
        <div class="staff-grid">
          @for (r of seniorResearchers; track r.name) {
            <div class="staff-card">
              <div class="staff-avatar" [style.background]="r.color"><span class="material-symbols-outlined sz-28">person</span></div>
              <div class="staff-info">
                <span class="title-medium">{{ r.name }}</span>
                <span class="body-small" [style.color]="r.color">{{ r.role }}</span>
                <a class="c-email" [href]="'mailto:' + r.email"><span class="material-symbols-outlined sz-14">mail</span> {{ r.email }}</a>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center">Research Engineers</h2>
        <div class="staff-grid">
          @for (e of researchEngineers; track e.name) {
            <div class="staff-card">
              <div class="staff-avatar" [style.background]="e.color"><span class="material-symbols-outlined sz-28">person</span></div>
              <div class="staff-info">
                <span class="title-medium">{{ e.name }}</span>
                <span class="body-small" [style.color]="e.color">{{ e.role }}</span>
                <a class="c-email" [href]="'mailto:' + e.email"><span class="material-symbols-outlined sz-14">mail</span> {{ e.email }}</a>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section alt-section">
      <div class="container">
        <h2 class="headline-large text-center">Research Assistants &amp; Interns</h2>
        <div class="staff-grid">
          @for (a of assistants; track a.name) {
            <div class="staff-card">
              <div class="staff-avatar" [style.background]="a.color"><span class="material-symbols-outlined sz-28">person</span></div>
              <div class="staff-info">
                <span class="title-medium">{{ a.name }}</span>
                <span class="body-small" [style.color]="a.color">{{ a.role }}</span>
                <a class="c-email" [href]="'mailto:' + a.email"><span class="material-symbols-outlined sz-14">mail</span> {{ a.email }}</a>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center">Team Expertise</h2>
        <div class="caps-grid">
          @for (cap of expertise; track cap.title) {
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
    .sierra-bg { background: linear-gradient(135deg, #e8f0fe, #e3f2fd, #f8f9fa); }
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

    .leader-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; margin-top: 48px; }
    .leader-card { background: var(--md-sys-color-surface); border-radius: var(--md-sys-shape-corner-extra-large); padding: 36px; text-align: center; border: 2px solid var(--md-sys-color-primary); }
    .leader-avatar { width: 80px; height: 80px; border-radius: 50%; margin: 0 auto 16px; display: flex; align-items: center; justify-content: center; color: white; }
    .leader-card h3 { margin-bottom: 4px; }

    .staff-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); gap: 16px; margin-top: 48px; }
    .staff-card { display: flex; align-items: center; gap: 16px; padding: 20px 24px; background: var(--md-sys-color-surface-container-low); border-radius: var(--md-sys-shape-corner-large); border: 1px solid var(--md-sys-color-outline-variant); transition: all 0.2s; }
    .staff-card:hover { border-color: #1a73e8; box-shadow: var(--md-sys-elevation-2); }
    .staff-avatar { width: 52px; height: 52px; min-width: 52px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; }
    .staff-info { display: flex; flex-direction: column; gap: 3px; }
    .dept-tag { display: inline-block; padding: 2px 10px; border-radius: var(--md-sys-shape-corner-full); background: var(--md-sys-color-surface-container); color: var(--md-sys-color-on-surface-variant); width: fit-content; }
    .c-email { display: inline-flex; align-items: center; gap: 4px; font: var(--md-sys-typescale-body-small); color: var(--md-sys-color-on-surface-variant); text-decoration: none; transition: color 0.2s; }
    .c-email:hover { color: var(--md-sys-color-primary); }

    .caps-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 48px; }
    .cap-item { display: flex; gap: 12px; padding: 20px; border-radius: var(--md-sys-shape-corner-large); border: 1px solid var(--md-sys-color-outline-variant); }
    .cap-item .material-symbols-outlined { color: #1a73e8; flex-shrink: 0; }
    .cap-item h4 { margin-bottom: 4px; }

    @media (max-width: 1024px) { .subtypes-grid { grid-template-columns: repeat(2, 1fr); } .caps-grid { grid-template-columns: repeat(2, 1fr); } .leader-grid { grid-template-columns: 1fr; } }
    @media (max-width: 640px) { .module-hero { padding: 100px 0 48px; } .subtypes-grid, .caps-grid { grid-template-columns: 1fr; } .staff-grid { grid-template-columns: 1fr; } }
  `],
})
export class SierraTeamComponent {
  roleCategories = [
    { name: 'Institute Leadership', icon: 'star', desc: 'Director & Deputy Director overseeing vision, strategy, and operations' },
    { name: 'Department Heads', icon: 'hub', desc: '6 department heads leading specialized research labs' },
    { name: 'Senior Researchers', icon: 'science', desc: 'PhD-level researchers driving core scientific contributions' },
    { name: 'Research Engineers', icon: 'engineering', desc: 'ML, systems, data, and DevOps engineers supporting research' },
    { name: 'Research Assistants', icon: 'school', desc: 'MSc and PhD candidates contributing to active research' },
    { name: 'Clinical Advisors', icon: 'medical_services', desc: 'Practicing radiologists providing clinical domain expertise' },
    { name: 'Visiting Scholars', icon: 'flight', desc: 'International researchers on sabbatical or exchange programs' },
    { name: 'Operations Staff', icon: 'settings', desc: 'Grant managers, lab coordinators, and research administrators' },
  ];

  leadership = [
    { name: 'Dr. Farid Mammadov', role: 'Director of SIERRA', color: '#1a73e8', email: 'farid.mammadov@sierra.skolyn.se', bio: 'Leads the overall research vision and strategy of SIERRA. Oversees cross-departmental coordination, research pipeline, and academic partnerships. 15+ years in computational radiology.' },
    { name: 'Dr. Ayla Huseynova', role: 'Deputy Director of SIERRA', color: '#185abc', email: 'ayla.huseynova@sierra.skolyn.se', bio: 'Manages day-to-day research operations, grant administration, publication pipeline, and institutional collaborations. Specializes in clinical AI governance and regulatory science.' },
  ];

  deptHeads = [
    { name: 'Dr. Kamran Ahmadov', role: 'Head of Explainable AI Lab', dept: 'XAI Lab', color: '#1a73e8', email: 'kamran.ahmadov@sierra.skolyn.se' },
    { name: 'Dr. Leyla Hasanova', role: 'Head of Multi-Modal Vision', dept: 'Multi-Modal', color: '#34a853', email: 'leyla.hasanova@sierra.skolyn.se' },
    { name: 'Dr. Rana Mammadova', role: 'Head of Clinical Validation', dept: 'Clinical', color: '#ea4335', email: 'rana.mammadova@sierra.skolyn.se' },
    { name: 'Dr. Elvin Hasanov', role: 'Head of Federated Learning', dept: 'Federated ML', color: '#fbbc04', email: 'elvin.hasanov@sierra.skolyn.se' },
    { name: 'Dr. Nigar Aliyeva', role: 'Head of AI Fairness & Ethics', dept: 'Fairness', color: '#9c27b0', email: 'nigar.aliyeva@sierra.skolyn.se' },
    { name: 'Dr. Tural Guliyev', role: 'Head of Inference Engineering', dept: 'Inference', color: '#00897b', email: 'tural.guliyev@sierra.skolyn.se' },
  ];

  seniorResearchers = [
    { name: 'Dr. Sabina Rustamova', role: 'Senior Researcher, XAI', color: '#1a73e8', email: 'sabina.rustamova@sierra.skolyn.se' },
    { name: 'Dr. Rashad Jafarov', role: 'Senior Researcher, XAI', color: '#1a73e8', email: 'rashad.jafarov@sierra.skolyn.se' },
    { name: 'Dr. Gunel Mammadli', role: 'Senior Researcher, Multi-Modal', color: '#34a853', email: 'gunel.mammadli@sierra.skolyn.se' },
    { name: 'Dr. Orkhan Babayev', role: 'Senior Researcher, Multi-Modal', color: '#34a853', email: 'orkhan.babayev@sierra.skolyn.se' },
    { name: 'Dr. Aysel Karimova', role: 'Senior Researcher, Clinical', color: '#ea4335', email: 'aysel.karimova@sierra.skolyn.se' },
    { name: 'Dr. Vusal Hajiyev', role: 'Senior Researcher, Federated ML', color: '#fbbc04', email: 'vusal.hajiyev@sierra.skolyn.se' },
    { name: 'Dr. Narmin Suleymanova', role: 'Senior Researcher, Fairness', color: '#9c27b0', email: 'narmin.suleymanova@sierra.skolyn.se' },
    { name: 'Dr. Emil Alasgarov', role: 'Senior Researcher, Inference', color: '#00897b', email: 'emil.alasgarov@sierra.skolyn.se' },
  ];

  researchEngineers = [
    { name: 'Samir Namazov', role: 'ML Engineer, XAI', color: '#1a73e8', email: 'samir.namazov@sierra.skolyn.se' },
    { name: 'Ulvi Karimov', role: 'ML Engineer, Multi-Modal', color: '#34a853', email: 'ulvi.karimov@sierra.skolyn.se' },
    { name: 'Javid Ismayilov', role: 'ML Engineer, Federated ML', color: '#fbbc04', email: 'javid.ismayilov@sierra.skolyn.se' },
    { name: 'Elnur Huseynov', role: 'Systems Engineer, Inference', color: '#00897b', email: 'elnur.huseynov@sierra.skolyn.se' },
    { name: 'Turkan Aghayeva', role: 'Data Engineer, Clinical', color: '#ea4335', email: 'turkan.aghayeva@sierra.skolyn.se' },
    { name: 'Nihad Valiyev', role: 'DevOps Engineer, Infrastructure', color: '#5f6368', email: 'nihad.valiyev@sierra.skolyn.se' },
    { name: 'Laman Ibrahimova', role: 'ML Ops Engineer', color: '#1a73e8', email: 'laman.ibrahimova@sierra.skolyn.se' },
    { name: 'Togrul Mustafayev', role: 'Frontend Engineer, Viz Tools', color: '#34a853', email: 'togrul.mustafayev@sierra.skolyn.se' },
  ];

  assistants = [
    { name: 'Fidan Gasimova', role: 'PhD Candidate, XAI', color: '#1a73e8', email: 'fidan.gasimova@sierra.skolyn.se' },
    { name: 'Murad Hasanli', role: 'PhD Candidate, Multi-Modal', color: '#34a853', email: 'murad.hasanli@sierra.skolyn.se' },
    { name: 'Sevinj Mammadova', role: 'MSc Researcher, Fairness', color: '#9c27b0', email: 'sevinj.mammadova@sierra.skolyn.se' },
    { name: 'Tural Nasirov', role: 'Research Intern, Federated ML', color: '#fbbc04', email: 'tural.nasirov@sierra.skolyn.se' },
    { name: 'Aydan Rzayeva', role: 'Research Intern, Clinical', color: '#ea4335', email: 'aydan.rzayeva@sierra.skolyn.se' },
    { name: 'Elchin Guliyev', role: 'Lab Coordinator', color: '#5f6368', email: 'elchin.guliyev@sierra.skolyn.se' },
  ];

  expertise = [
    { icon: 'psychology', title: 'Deep Learning', desc: 'CNNs, Vision Transformers, U-Nets, diffusion models, attention mechanisms' },
    { icon: 'visibility', title: 'Explainability', desc: 'Grad-CAM, SHAP, LIME, counterfactual reasoning, NLG rationales' },
    { icon: 'radiology', title: 'Medical Imaging', desc: 'MRI, CT, Ultrasound, X-Ray across neuro, MSK, oncology, cardio' },
    { icon: 'lock', title: 'Privacy-Preserving ML', desc: 'Federated learning, differential privacy, homomorphic encryption' },
    { icon: 'balance', title: 'AI Ethics', desc: 'Fairness metrics, bias auditing, disaggregated evaluation, governance' },
    { icon: 'speed', title: 'Inference Optimization', desc: 'Quantization, distillation, TensorRT, ONNX, edge deployment' },
  ];
}
