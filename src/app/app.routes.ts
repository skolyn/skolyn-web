import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Skolyn - Early. Accurate. Trusted.'
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'About - Skolyn'
  },
  {
    path: 'platform',
    loadComponent: () => import('./pages/platform/platform.component').then(m => m.PlatformComponent),
    title: 'Platform - Skolyn'
  },
  {
    path: 'modules',
    loadComponent: () => import('./pages/modules/modules.component').then(m => m.ModulesComponent),
    title: 'Modules - Skolyn'
  },
  {
    path: 'modules/rhenium',
    loadComponent: () => import('./pages/modules/rhenium/rhenium.component').then(m => m.RheniumComponent),
    title: 'Rhenium OS - MRI Intelligence - Skolyn'
  },
  {
    path: 'modules/seaborgium',
    loadComponent: () => import('./pages/modules/seaborgium/seaborgium.component').then(m => m.SeaborgiumComponent),
    title: 'Seaborgium OS - CT Intelligence - Skolyn'
  },
  {
    path: 'modules/scandium',
    loadComponent: () => import('./pages/modules/scandium/scandium.component').then(m => m.ScandiumComponent),
    title: 'Scandium OS - Ultrasound Intelligence - Skolyn'
  },
  {
    path: 'modules/terbium',
    loadComponent: () => import('./pages/modules/terbium/terbium.component').then(m => m.TerbiumComponent),
    title: 'Terbium OS - X-Ray Intelligence - Skolyn'
  },
  {
    path: 'technology',
    loadComponent: () => import('./pages/technology/technology.component').then(m => m.TechnologyComponent),
    title: 'Technology - Skolyn'
  },
  {
    path: 'security',
    loadComponent: () => import('./pages/security/security.component').then(m => m.SecurityComponent),
    title: 'Security & Compliance - Skolyn'
  },
  {
    path: 'pipeline',
    loadComponent: () => import('./pages/pipeline/pipeline.component').then(m => m.PipelineComponent),
    title: 'Diagnostic Pipeline - Skolyn'
  },
  {
    path: 'interface',
    loadComponent: () => import('./pages/interface/interface.component').then(m => m.InterfaceComponent),
    title: 'Clinician Interface - Skolyn'
  },
  {
    path: 'infrastructure',
    loadComponent: () => import('./pages/infrastructure/infrastructure.component').then(m => m.InfrastructureComponent),
    title: 'AI Infrastructure - Skolyn'
  },
  {
    path: 'interoperability',
    loadComponent: () => import('./pages/interoperability/interoperability.component').then(m => m.InteroperabilityComponent),
    title: 'Interoperability - Skolyn'
  },
  {
    path: 'roadmap',
    loadComponent: () => import('./pages/roadmap/roadmap.component').then(m => m.RoadmapComponent),
    title: 'R&D Roadmap - Skolyn'
  },
  {
    path: 'validation',
    loadComponent: () => import('./pages/validation/validation.component').then(m => m.ValidationComponent),
    title: 'Clinical Validation - Skolyn'
  },
  {
    path: 'deployment',
    loadComponent: () => import('./pages/deployment/deployment.component').then(m => m.DeploymentComponent),
    title: 'Deployment - Skolyn'
  },
  {
    path: 'careers',
    loadComponent: () => import('./pages/careers/careers.component').then(m => m.CareersComponent),
    title: 'Careers - Skolyn'
  },
  {
    path: 'team',
    loadComponent: () => import('./pages/team/team.component').then(m => m.TeamComponent),
    title: 'Team - Skolyn'
  },
  {
    path: 'team/leadership',
    loadComponent: () => import('./pages/team/leadership/leadership.component').then(m => m.TeamLeadershipComponent),
    title: 'Executive Leadership - Skolyn'
  },
  {
    path: 'team/ai-rd',
    loadComponent: () => import('./pages/team/dept-ai-rd/dept-ai-rd.component').then(m => m.DeptAiRdComponent),
    title: 'AI Research & Development - Skolyn'
  },
  {
    path: 'team/engineering',
    loadComponent: () => import('./pages/team/dept-engineering/dept-engineering.component').then(m => m.DeptEngineeringComponent),
    title: 'Engineering - Skolyn'
  },
  {
    path: 'team/clinical',
    loadComponent: () => import('./pages/team/dept-clinical/dept-clinical.component').then(m => m.DeptClinicalComponent),
    title: 'Clinical & Radiology - Skolyn'
  },
  {
    path: 'team/regulatory',
    loadComponent: () => import('./pages/team/dept-regulatory/dept-regulatory.component').then(m => m.DeptRegulatoryComponent),
    title: 'Regulatory & Compliance - Skolyn'
  },
  {
    path: 'team/legal',
    loadComponent: () => import('./pages/team/dept-legal/dept-legal.component').then(m => m.DeptLegalComponent),
    title: 'Legal & IP - Skolyn'
  },
  {
    path: 'team/product',
    loadComponent: () => import('./pages/team/dept-product/dept-product.component').then(m => m.DeptProductComponent),
    title: 'Product & Design - Skolyn'
  },
  {
    path: 'team/commercial',
    loadComponent: () => import('./pages/team/dept-commercial/dept-commercial.component').then(m => m.DeptCommercialComponent),
    title: 'Commercial & Partnerships - Skolyn'
  },
  {
    path: 'team/finance',
    loadComponent: () => import('./pages/team/dept-finance/dept-finance.component').then(m => m.DeptFinanceComponent),
    title: 'Finance & Operations - Skolyn'
  },
  {
    path: 'team/advisors',
    loadComponent: () => import('./pages/team/advisors/advisors.component').then(m => m.TeamAdvisorsComponent),
    title: 'Advisory Board - Skolyn'
  },
  {
    path: 'privacy',
    loadComponent: () => import('./pages/privacy/privacy.component').then(m => m.PrivacyComponent),
    title: 'Privacy Policy - Skolyn'
  },
  {
    path: 'terms',
    loadComponent: () => import('./pages/terms/terms.component').then(m => m.TermsComponent),
    title: 'Terms of Service - Skolyn'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact - Skolyn'
  },
  {
    path: 'faq',
    loadComponent: () => import('./pages/faq/faq.component').then(m => m.FaqComponent),
    title: 'FAQ - Skolyn'
  },
  {
    path: 'blog',
    loadComponent: () => import('./pages/blog/blog.component').then(m => m.BlogComponent),
    title: 'Blog & News - Skolyn'
  },
  {
    path: 'docs',
    loadComponent: () => import('./pages/docs/docs.component').then(m => m.DocsComponent),
    title: 'Documentation - Skolyn'
  },
  {
    path: 'partners',
    loadComponent: () => import('./pages/partners/partners.component').then(m => m.PartnersComponent),
    title: 'Partners - Skolyn'
  },
  {
    path: 'investors',
    loadComponent: () => import('./pages/investors/investors.component').then(m => m.InvestorsComponent),
    title: 'Investors - Skolyn'
  },
  {
    path: 'cookies',
    loadComponent: () => import('./pages/cookies/cookies.component').then(m => m.CookiesComponent),
    title: 'Cookie Policy - Skolyn'
  },
  {
    path: 'accessibility',
    loadComponent: () => import('./pages/accessibility/accessibility.component').then(m => m.AccessibilityComponent),
    title: 'Accessibility - Skolyn'
  },
  {
    path: 'research',
    loadComponent: () => import('./pages/research/research.component').then(m => m.ResearchComponent),
    title: 'SIERRA - Skolyn Institute for Engineering, Research, Radiology & AI'
  },
  {
    path: 'research/departments',
    loadComponent: () => import('./pages/research/departments/departments.component').then(m => m.SierraDepartmentsComponent),
    title: 'Research Departments - SIERRA - Skolyn'
  },
  {
    path: 'research/team',
    loadComponent: () => import('./pages/research/sierra-team/sierra-team.component').then(m => m.SierraTeamComponent),
    title: 'Research Team - SIERRA - Skolyn'
  },
  {
    path: 'research/publications',
    loadComponent: () => import('./pages/research/publications/publications.component').then(m => m.SierraPublicationsComponent),
    title: 'Publications - SIERRA - Skolyn'
  },
  {
    path: 'research/programs',
    loadComponent: () => import('./pages/research/programs/programs.component').then(m => m.SierraProgramsComponent),
    title: 'Programs - SIERRA - Skolyn'
  },
  {
    path: 'research/impact',
    loadComponent: () => import('./pages/research/impact/impact.component').then(m => m.SierraImpactComponent),
    title: 'Research Impact - SIERRA - Skolyn'
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent),
    title: 'Hospital Dashboard Login - Skolyn'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
