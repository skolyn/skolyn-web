import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dept-engineering',
  imports: [RouterLink],
  template: `
    <section class="module-hero dept-bg">
      <div class="container">
        <a routerLink="/team" class="back-link">
          <span class="material-symbols-outlined sz-20">arrow_back</span>
          All Teams
        </a>
        <div class="hero-text animate-in">
          <div class="element-badge">
            <span class="el-sym material-symbols-outlined sz-40">code</span>
            <span class="el-nm">Engineering</span>
          </div>
          <h1 class="display-medium">Engineering</h1>
          <p class="title-large module-tagline">Backend, Frontend, Infrastructure &amp; DevOps</p>
          <p class="body-large hero-desc">
            The engineering team builds and maintains Skolyn's production platform:
            backend services, frontend applications, cloud infrastructure, CI/CD pipelines,
            database layer, and quality assurance. We ship production-grade medical AI
            at clinical reliability standards.
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center">Engineering Disciplines</h2>
        <p class="body-large text-secondary text-center section-desc">
          Seven specialized engineering tracks covering the full software stack from
          cloud infrastructure to pixel-perfect frontend delivery.
        </p>
        <div class="subtypes-grid">
          @for (area of disciplines; track area.name) {
            <div class="subtype-card animate-in">
              <span class="material-symbols-outlined sz-40">{{ area.icon }}</span>
              <h4 class="title-medium">{{ area.name }}</h4>
              <p class="body-small text-secondary">{{ area.desc }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section alt-section">
      <div class="container">
        <h2 class="headline-large text-center">Development Pipeline</h2>
        <div class="pipeline-cards">
          @for (step of pipeline; track step.title; let i = $index) {
            <div class="pipe-card animate-in">
              <div class="pipe-num">{{ i + 1 }}</div>
              <h4 class="title-medium">{{ step.title }}</h4>
              <p class="body-small text-secondary">{{ step.desc }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center">Department Staff</h2>
        <div class="staff-grid">
          @for (p of staff; track p.name) {
            <div class="staff-card">
              <div class="staff-avatar" [style.background]="deptColor"><span class="material-symbols-outlined sz-28">person</span></div>
              <div class="staff-info">
                <span class="title-medium">{{ p.name }}</span>
                <span class="body-small" [style.color]="deptColor">{{ p.role }}</span>
                <a class="c-email" [href]="'mailto:' + p.email"><span class="material-symbols-outlined sz-14">mail</span> {{ p.email }}</a>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section alt-section">
      <div class="container">
        <h2 class="headline-large text-center">Technology Stack</h2>
        <div class="caps-grid">
          @for (cap of techStack; track cap.title) {
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
    .dept-bg { background: linear-gradient(135deg, #fff3e0, #fce4ec, #f8f9fa); }
    .back-link { display: inline-flex; align-items: center; gap: 4px; font: var(--md-sys-typescale-label-large); color: var(--md-sys-color-on-surface-variant); text-decoration: none; margin-bottom: 32px; }
    .back-link:hover { color: var(--md-sys-color-primary); }
    .element-badge { display: inline-flex; flex-direction: column; align-items: center; padding: 12px 16px; border: 2px solid #ea8600; border-radius: var(--md-sys-shape-corner-medium); margin-bottom: 24px; background: rgba(255,255,255,0.7); }
    .el-sym { color: #ea8600; }
    .el-nm { font: var(--md-sys-typescale-label-medium); color: var(--md-sys-color-on-surface-variant); }
    .module-tagline { color: #ea8600; margin-bottom: 16px; }
    .hero-desc { max-width: 560px; color: var(--md-sys-color-on-surface-variant); }
    .section-desc { max-width: 640px; margin: 16px auto 0; }
    .alt-section { background: var(--md-sys-color-surface-container-low); }

    .subtypes-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 48px; }
    .subtype-card { padding: 24px; border-radius: var(--md-sys-shape-corner-large); border: 1px solid var(--md-sys-color-outline-variant); text-align: center; transition: all 0.3s; }
    .subtype-card:hover { box-shadow: var(--md-sys-elevation-1); border-color: #ea8600; }
    .subtype-card .material-symbols-outlined { color: #ea8600; margin-bottom: 12px; }
    .subtype-card h4 { margin-bottom: 6px; }

    .pipeline-cards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 48px; }
    .pipe-card { padding: 28px; border-radius: var(--md-sys-shape-corner-extra-large); background: var(--md-sys-color-surface); border: 1px solid var(--md-sys-color-outline-variant); }
    .pipe-num { width: 36px; height: 36px; border-radius: 50%; background: #ea8600; color: white; display: flex; align-items: center; justify-content: center; font: var(--md-sys-typescale-label-large); margin-bottom: 16px; }
    .pipe-card h4 { margin-bottom: 8px; }

    .staff-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); gap: 16px; margin-top: 48px; }
    .staff-card { display: flex; align-items: center; gap: 16px; padding: 20px 24px; background: var(--md-sys-color-surface-container-low); border-radius: var(--md-sys-shape-corner-large); border: 1px solid var(--md-sys-color-outline-variant); transition: all 0.2s; }
    .staff-card:hover { border-color: #ea8600; box-shadow: var(--md-sys-elevation-2); }
    .staff-avatar { width: 52px; height: 52px; min-width: 52px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; }
    .staff-info { display: flex; flex-direction: column; gap: 3px; }
    .c-email { display: inline-flex; align-items: center; gap: 4px; font: var(--md-sys-typescale-body-small); color: var(--md-sys-color-on-surface-variant); text-decoration: none; transition: color 0.2s; }
    .c-email:hover { color: var(--md-sys-color-primary); }

    .caps-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 48px; }
    .cap-item { display: flex; gap: 12px; padding: 20px; border-radius: var(--md-sys-shape-corner-large); border: 1px solid var(--md-sys-color-outline-variant); }
    .cap-item .material-symbols-outlined { color: #ea8600; flex-shrink: 0; }
    .cap-item h4 { margin-bottom: 4px; }

    @media (max-width: 1024px) { .subtypes-grid, .pipeline-cards { grid-template-columns: repeat(2, 1fr); } .caps-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 640px) { .module-hero { padding: 100px 0 48px; } .subtypes-grid, .pipeline-cards, .caps-grid { grid-template-columns: 1fr; } .staff-grid { grid-template-columns: 1fr; } }
  `],
})
export class DeptEngineeringComponent {
  deptColor = '#ea8600';

  disciplines = [
    { name: 'Backend Services', icon: 'dns', desc: 'RESTful APIs, microservices, message queues, and data pipelines' },
    { name: 'Frontend Applications', icon: 'web', desc: 'Angular-based clinical UIs, dashboards, and admin interfaces' },
    { name: 'Cloud Infrastructure', icon: 'cloud', desc: 'Kubernetes, Terraform, multi-region deployment, auto-scaling' },
    { name: 'DevOps & CI/CD', icon: 'deployed_code', desc: 'GitHub Actions, container orchestration, blue-green deployments' },
    { name: 'Database Engineering', icon: 'database', desc: 'PostgreSQL, Redis, time-series stores, DICOM indexed storage' },
    { name: 'Platform Engineering', icon: 'integration_instructions', desc: 'Internal tools, SDK development, developer experience' },
    { name: 'Quality Assurance', icon: 'verified', desc: 'E2E testing, performance testing, security auditing, compliance' },
  ];

  pipeline = [
    { title: 'Design Review', desc: 'RFC-driven architecture review with cross-team feedback before implementation' },
    { title: 'Development', desc: 'Feature branches, pair programming, comprehensive unit and integration tests' },
    { title: 'CI/CD Pipeline', desc: 'Automated build, lint, test, security scan, and staging deployment' },
    { title: 'Production Release', desc: 'Blue-green deployments with automated canary analysis and rollback' },
  ];

  staff = [
    { name: 'Samir Namazov', role: 'Lead Backend Engineer', email: 'samir.namazov@skolyn.se' },
    { name: 'Ulvi Karimov', role: 'Senior Frontend Engineer', email: 'ulvi.karimov@skolyn.se' },
    { name: 'Javid Ismayilov', role: 'Infrastructure Engineer', email: 'javid.ismayilov@skolyn.se' },
    { name: 'Elnur Huseynov', role: 'DevOps Engineer', email: 'elnur.huseynov@skolyn.se' },
    { name: 'Nihad Valiyev', role: 'Platform Engineer', email: 'nihad.valiyev@skolyn.se' },
    { name: 'Turkan Aghayeva', role: 'QA & Test Engineer', email: 'turkan.aghayeva@skolyn.se' },
    { name: 'Aydan Hasanova', role: 'Backend Engineer', email: 'aydan.hasanova@skolyn.se' },
    { name: 'Farid Guliyev', role: 'Frontend Engineer', email: 'farid.guliyev@skolyn.se' },
    { name: 'Tural Mammadov', role: 'Site Reliability Engineer', email: 'tural.mammadov@skolyn.se' },
    { name: 'Laman Rzayeva', role: 'Database Engineer', email: 'laman.rzayeva@skolyn.se' },
  ];

  techStack = [
    { icon: 'language', title: 'Languages', desc: 'Python, TypeScript, Go, SQL, Bash' },
    { icon: 'web', title: 'Frontend', desc: 'Angular 19, RxJS, Material Design 3, Cornerstone.js' },
    { icon: 'dns', title: 'Backend', desc: 'FastAPI, Django, gRPC, Celery, Redis' },
    { icon: 'cloud', title: 'Cloud', desc: 'Azure, Kubernetes, Terraform, Helm, Prometheus' },
    { icon: 'database', title: 'Data', desc: 'PostgreSQL, Redis, MinIO, InfluxDB, Elasticsearch' },
    { icon: 'security', title: 'Security', desc: 'OAuth 2.0, mTLS, Vault, SAST/DAST, SOC 2 Type II' },
  ];
}
