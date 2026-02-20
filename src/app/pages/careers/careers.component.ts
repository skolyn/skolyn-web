import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment';
import { ToastService } from '../../services/toast.service';
import { DialogService } from '../../services/dialog.service';

interface JobListing {
  id: string;
  title: string;
  department: string;
  deptIcon: string;
  deptColor: string;
  location: string;
  workModel: string;
  type: string;
  level: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  preferred: string[];
  benefits: string[];
}

@Component({
  selector: 'app-careers',
  imports: [RouterLink],
  template: `
    <section class="module-hero careers-bg">
      <div class="container">
        <a routerLink="/" class="back-link"><span class="material-symbols-outlined sz-20">arrow_back</span> Home</a>
        <div class="hero-text animate-in">
          <div class="element-badge">
            <span class="el-sym material-symbols-outlined sz-40">work</span>
            <span class="el-nm">Careers</span>
          </div>
          <h1 class="display-medium">Join Skolyn</h1>
          <p class="title-large module-tagline">Build the Future of Medical Imaging AI</p>
          <p class="body-large hero-desc">
            We're looking for passionate engineers, researchers, designers, and operators
            to help us redefine diagnostic radiology with explainable artificial intelligence.
            Explore open positions across {{ departments.length }} departments.
          </p>
        </div>
      </div>
    </section>

    <!-- Why Join -->
    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center">Why Skolyn?</h2>
        <p class="body-large text-secondary text-center section-desc">What makes working here different.</p>
        <div class="perks-grid">
          @for (perk of perks; track perk.title) {
            <div class="perk-card animate-in">
              <span class="material-symbols-outlined sz-40">{{ perk.icon }}</span>
              <h4 class="title-medium">{{ perk.title }}</h4>
              <p class="body-small text-secondary">{{ perk.desc }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Filters -->
    <section class="section alt-section" id="openings">
      <div class="container">
        <h2 class="headline-large text-center">Open Positions</h2>
        <p class="body-large text-secondary text-center section-desc">{{ filteredJobs.length }} open roles across {{ departments.length }} departments</p>

        <div class="filter-bar">
          <div class="filter-group">
            <span class="label-medium filter-label"><span class="material-symbols-outlined sz-16">location_on</span> Location</span>
            <div class="chip-row">
              @for (l of locations; track l) {
                <button class="filter-chip" [class.active]="selLocations.has(l)" (click)="toggle(selLocations, l)">{{ l }}</button>
              }
            </div>
          </div>
          <div class="filter-group">
            <span class="label-medium filter-label"><span class="material-symbols-outlined sz-16">home_work</span> Work Model</span>
            <div class="chip-row">
              @for (w of workModels; track w) {
                <button class="filter-chip" [class.active]="selWorkModels.has(w)" (click)="toggle(selWorkModels, w)">{{ w }}</button>
              }
            </div>
          </div>
          <div class="filter-group">
            <span class="label-medium filter-label"><span class="material-symbols-outlined sz-16">domain</span> Department</span>
            <div class="chip-row">
              @for (d of departments; track d) {
                <button class="filter-chip" [class.active]="selDepts.has(d)" (click)="toggle(selDepts, d)">{{ d }}</button>
              }
            </div>
          </div>
          <div class="filter-group">
            <span class="label-medium filter-label"><span class="material-symbols-outlined sz-16">schedule</span> Type</span>
            <div class="chip-row">
              @for (t of types; track t) {
                <button class="filter-chip" [class.active]="selTypes.has(t)" (click)="toggle(selTypes, t)">{{ t }}</button>
              }
            </div>
          </div>
          <div class="filter-group">
            <span class="label-medium filter-label"><span class="material-symbols-outlined sz-16">trending_up</span> Level</span>
            <div class="chip-row">
              @for (lv of levels; track lv) {
                <button class="filter-chip" [class.active]="selLevels.has(lv)" (click)="toggle(selLevels, lv)">{{ lv }}</button>
              }
            </div>
          </div>
          @if (hasActiveFilters) {
            <button class="clear-btn" (click)="clearFilters()"><span class="material-symbols-outlined sz-16">close</span> Clear all</button>
          }
        </div>

        <!-- Job Listings -->
        <div class="jobs-list">
          @for (job of filteredJobs; track job.id) {
            <div class="job-card animate-in" [class.expanded]="expandedJob === job.id">
              <div class="job-header" (click)="toggleJob(job.id)">
                <div class="job-header-left">
                  <div class="job-dept-icon" [style.background]="job.deptColor + '18'" [style.color]="job.deptColor">
                    <span class="material-symbols-outlined sz-24">{{ job.deptIcon }}</span>
                  </div>
                  <div class="job-header-info">
                    <h3 class="title-large">{{ job.title }}</h3>
                    <div class="job-meta-chips">
                      <span class="meta-chip" [style.background]="job.deptColor + '14'" [style.color]="job.deptColor">{{ job.department }}</span>
                      <span class="meta-chip neutral"><span class="material-symbols-outlined sz-14">location_on</span> {{ job.location }}</span>
                      <span class="meta-chip neutral"><span class="material-symbols-outlined sz-14">home_work</span> {{ job.workModel }}</span>
                      <span class="meta-chip neutral"><span class="material-symbols-outlined sz-14">schedule</span> {{ job.type }}</span>
                      <span class="meta-chip neutral"><span class="material-symbols-outlined sz-14">trending_up</span> {{ job.level }}</span>
                    </div>
                  </div>
                </div>
                <span class="material-symbols-outlined expand-icon" [class.rotated]="expandedJob === job.id">expand_more</span>
              </div>

              @if (expandedJob === job.id) {
                <div class="job-body">
                  <div class="job-description">
                    <p class="body-large">{{ job.description }}</p>
                  </div>

                  <div class="job-section">
                    <h4 class="title-medium section-label"><span class="material-symbols-outlined sz-20">check_circle</span> Responsibilities</h4>
                    <ul class="job-list">
                      @for (r of job.responsibilities; track r) {
                        <li class="body-medium">{{ r }}</li>
                      }
                    </ul>
                  </div>

                  <div class="job-section">
                    <h4 class="title-medium section-label"><span class="material-symbols-outlined sz-20">school</span> Minimum Qualifications</h4>
                    <ul class="job-list">
                      @for (r of job.requirements; track r) {
                        <li class="body-medium">{{ r }}</li>
                      }
                    </ul>
                  </div>

                  <div class="job-section">
                    <h4 class="title-medium section-label"><span class="material-symbols-outlined sz-20">star</span> Preferred Qualifications</h4>
                    <ul class="job-list">
                      @for (p of job.preferred; track p) {
                        <li class="body-medium">{{ p }}</li>
                      }
                    </ul>
                  </div>

                  <div class="job-section">
                    <h4 class="title-medium section-label"><span class="material-symbols-outlined sz-20">redeem</span> What We Offer</h4>
                    <ul class="job-list">
                      @for (b of job.benefits; track b) {
                        <li class="body-medium">{{ b }}</li>
                      }
                    </ul>
                  </div>

                  <!-- Application Form -->
                  <div class="apply-section">
                    <h4 class="title-medium section-label"><span class="material-symbols-outlined sz-20">edit_note</span> Apply for this Position</h4>
                    <form class="apply-form" (submit)="$event.preventDefault(); submitApplication(job.id)" [id]="'form-' + job.id">
                      <div class="form-row">
                        <div class="form-group">
                          <label class="label-large" for="fname-{{job.id}}">First Name *</label>
                          <input type="text" [id]="'fname-' + job.id" required placeholder="First name" />
                        </div>
                        <div class="form-group">
                          <label class="label-large" for="lname-{{job.id}}">Last Name *</label>
                          <input type="text" [id]="'lname-' + job.id" required placeholder="Last name" />
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="form-group">
                          <label class="label-large" for="email-{{job.id}}">Email *</label>
                          <input type="email" [id]="'email-' + job.id" required placeholder="you&#64;example.com" />
                        </div>
                        <div class="form-group">
                          <label class="label-large" for="phone-{{job.id}}">Phone</label>
                          <input type="tel" [id]="'phone-' + job.id" placeholder="+1 (555) 000-0000" />
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="label-large" for="linkedin-{{job.id}}">LinkedIn Profile</label>
                        <input type="url" [id]="'linkedin-' + job.id" placeholder="https://linkedin.com/in/yourprofile" />
                      </div>
                      <div class="form-group">
                        <label class="label-large" for="resume-{{job.id}}">Resume / CV *</label>
                        <div class="file-upload">
                          <span class="material-symbols-outlined sz-24">upload_file</span>
                          <span class="body-medium">Drop your resume here or click to browse</span>
                          <span class="body-small text-secondary">PDF, DOC, DOCX (max 5MB)</span>
                          <input type="file" [id]="'resume-' + job.id" accept=".pdf,.doc,.docx" required />
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="label-large" for="cover-{{job.id}}">Cover Letter</label>
                        <textarea [id]="'cover-' + job.id" rows="4" placeholder="Tell us why you're interested in this role and what makes you a great fit..."></textarea>
                      </div>
                      <div class="form-group">
                        <label class="label-large" for="portfolio-{{job.id}}">Portfolio / GitHub / Publications</label>
                        <input type="url" [id]="'portfolio-' + job.id" placeholder="https://github.com/yourprofile" />
                      </div>
                      <button type="submit" class="submit-btn" [disabled]="isSubmittingApplication">
                        <span class="material-symbols-outlined sz-20">{{ isSubmittingApplication ? 'hourglass_empty' : 'send' }}</span>
                        {{ isSubmittingApplication ? 'Submitting...' : 'Submit Application' }}
                      </button>
                    </form>
                  </div>
                </div>
              }
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Hiring Process -->
    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center">Hiring Process</h2>
        <div class="pipeline-cards">
          @for (step of hiringProcess; track step.title; let i = $index) {
            <div class="pipe-card animate-in">
              <div class="pipe-num">{{ i + 1 }}</div>
              <h4 class="title-medium">{{ step.title }}</h4>
              <p class="body-small text-secondary">{{ step.desc }}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .module-hero { padding: 120px 0 64px; }
    .careers-bg { background: linear-gradient(135deg, #e8f5e9, #e3f2fd, #f8f9fa); }
    .back-link { display: inline-flex; align-items: center; gap: 4px; font: var(--md-sys-typescale-label-large); color: var(--md-sys-color-on-surface-variant); text-decoration: none; margin-bottom: 32px; }
    .back-link:hover { color: var(--md-sys-color-primary); }
    .element-badge { display: inline-flex; flex-direction: column; align-items: center; padding: 12px 16px; border: 2px solid #1a73e8; border-radius: var(--md-sys-shape-corner-medium); margin-bottom: 24px; background: var(--md-sys-color-surface-container); }
    .el-sym { color: #1a73e8; }
    .el-nm { font: var(--md-sys-typescale-label-medium); color: var(--md-sys-color-on-surface-variant); }
    .module-tagline { color: #1a73e8; margin-bottom: 16px; }
    .hero-desc { max-width: 560px; color: var(--md-sys-color-on-surface-variant); }
    .section-desc { max-width: 640px; margin: 16px auto 0; }
    .alt-section { background: var(--md-sys-color-surface-container-low); }

    /* Perks */
    .perks-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 48px; }
    .perk-card { padding: 28px; border-radius: var(--md-sys-shape-corner-large); border: 1px solid var(--md-sys-color-outline-variant); text-align: center; transition: all 0.3s; }
    .perk-card:hover { box-shadow: var(--md-sys-elevation-1); border-color: #1a73e8; }
    .perk-card .material-symbols-outlined { color: #1a73e8; margin-bottom: 12px; }
    .perk-card h4 { margin-bottom: 6px; }

    /* Filters */
    .filter-bar { display: flex; flex-direction: column; gap: 16px; margin: 48px 0 32px; padding: 24px; border-radius: var(--md-sys-shape-corner-extra-large); background: var(--md-sys-color-surface); border: 1px solid var(--md-sys-color-outline-variant); }
    .filter-group { display: flex; flex-direction: column; gap: 8px; }
    .filter-label { display: flex; align-items: center; gap: 4px; color: var(--md-sys-color-on-surface-variant); font-weight: 600; }
    .chip-row { display: flex; flex-wrap: wrap; gap: 8px; }
    .filter-chip { padding: 6px 16px; border: 1px solid var(--md-sys-color-outline-variant); background: none; border-radius: var(--md-sys-shape-corner-full); font: var(--md-sys-typescale-label-large); color: var(--md-sys-color-on-surface-variant); cursor: pointer; transition: all 0.2s; white-space: nowrap; }
    .filter-chip:hover { border-color: var(--md-sys-color-primary); color: var(--md-sys-color-primary); }
    .filter-chip.active { background: #e8f0fe; color: #1a73e8; border-color: #1a73e8; font-weight: 600; }
    .clear-btn { display: inline-flex; align-items: center; gap: 4px; padding: 6px 16px; border: none; background: none; font: var(--md-sys-typescale-label-large); color: var(--md-sys-color-error); cursor: pointer; align-self: flex-start; border-radius: var(--md-sys-shape-corner-full); transition: background 0.2s; }
    .clear-btn:hover { background: rgba(179,38,30,0.08); }

    /* Job Cards */
    .jobs-list { display: flex; flex-direction: column; gap: 16px; }
    .job-card { background: var(--md-sys-color-surface); border: 1px solid var(--md-sys-color-outline-variant); border-radius: var(--md-sys-shape-corner-extra-large); overflow: hidden; transition: all 0.3s; }
    .job-card:hover { box-shadow: var(--md-sys-elevation-1); }
    .job-card.expanded { border-color: var(--md-sys-color-primary); box-shadow: var(--md-sys-elevation-2); }
    .job-header { display: flex; align-items: center; justify-content: space-between; padding: 24px 32px; cursor: pointer; gap: 16px; }
    .job-header-left { display: flex; align-items: center; gap: 16px; }
    .job-dept-icon { width: 48px; height: 48px; min-width: 48px; border-radius: var(--md-sys-shape-corner-medium); display: flex; align-items: center; justify-content: center; }
    .job-header-info { display: flex; flex-direction: column; gap: 8px; }
    .job-meta-chips { display: flex; flex-wrap: wrap; gap: 6px; }
    .meta-chip { display: inline-flex; align-items: center; gap: 4px; padding: 3px 12px; border-radius: var(--md-sys-shape-corner-full); font: var(--md-sys-typescale-label-small); font-weight: 600; }
    .meta-chip.neutral { background: var(--md-sys-color-surface-container); color: var(--md-sys-color-on-surface-variant); }
    .expand-icon { color: var(--md-sys-color-on-surface-variant); transition: transform 0.3s; }
    .expand-icon.rotated { transform: rotate(180deg); }

    /* Job Body */
    .job-body { padding: 0 32px 32px; border-top: 1px solid var(--md-sys-color-outline-variant); }
    .job-description { padding: 24px 0 16px; color: var(--md-sys-color-on-surface-variant); }
    .job-section { margin-bottom: 24px; }
    .section-label { display: flex; align-items: center; gap: 8px; margin-bottom: 12px; color: var(--md-sys-color-on-surface); }
    .section-label .material-symbols-outlined { color: #1a73e8; }
    .job-list { margin: 0 0 0 20px; display: flex; flex-direction: column; gap: 6px; }
    .job-list li { color: var(--md-sys-color-on-surface-variant); }

    /* Application Form */
    .apply-section { margin-top: 32px; padding-top: 32px; border-top: 2px solid var(--md-sys-color-outline-variant); }
    .apply-form { display: flex; flex-direction: column; gap: 20px; margin-top: 20px; }
    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    .form-group { display: flex; flex-direction: column; gap: 6px; }
    .form-group label { color: var(--md-sys-color-on-surface); }
    .form-group input, .form-group textarea {
      padding: 12px 16px; border: 1px solid var(--md-sys-color-outline-variant);
      border-radius: var(--md-sys-shape-corner-medium); font: var(--md-sys-typescale-body-large);
      color: var(--md-sys-color-on-surface); background: var(--md-sys-color-surface);
      transition: border-color 0.2s, box-shadow 0.2s; outline: none;
    }
    .form-group input:focus, .form-group textarea:focus { border-color: var(--md-sys-color-primary); box-shadow: 0 0 0 2px rgba(26,115,232,0.15); }
    .form-group textarea { resize: vertical; min-height: 100px; }
    .file-upload {
      display: flex; flex-direction: column; align-items: center; gap: 6px;
      padding: 32px; border: 2px dashed var(--md-sys-color-outline-variant);
      border-radius: var(--md-sys-shape-corner-large); cursor: pointer;
      position: relative; transition: all 0.3s;
    }
    .file-upload:hover { border-color: var(--md-sys-color-primary); background: rgba(26,115,232,0.04); }
    .file-upload .material-symbols-outlined { color: #1a73e8; }
    .file-upload input { position: absolute; inset: 0; opacity: 0; cursor: pointer; }
    .submit-btn {
      display: inline-flex; align-items: center; gap: 8px; padding: 14px 32px;
      background: var(--md-sys-color-primary); color: var(--md-sys-color-on-primary);
      border: none; border-radius: var(--md-sys-shape-corner-full);
      font: var(--md-sys-typescale-label-large); cursor: pointer;
      transition: all 0.3s; align-self: flex-start;
    }
    .submit-btn:hover { box-shadow: var(--md-sys-elevation-2); opacity: 0.92; }
    .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }
    .apply-status { display: flex; align-items: center; gap: 10px; padding: 16px 20px; border-radius: var(--md-sys-shape-corner-large); margin-bottom: 16px; }
    .apply-status.success { background: rgba(30,142,62,0.1); color: #1e8e3e; }
    .apply-status.error { background: rgba(217,48,37,0.1); color: #d93025; }

    /* Hiring Pipeline */
    .pipeline-cards { display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px; margin-top: 48px; }
    .pipe-card { padding: 28px; border-radius: var(--md-sys-shape-corner-extra-large); background: var(--md-sys-color-surface-container-low); border: 1px solid var(--md-sys-color-outline-variant); }
    .pipe-num { width: 36px; height: 36px; border-radius: 50%; background: #1a73e8; color: var(--md-sys-color-on-primary); display: flex; align-items: center; justify-content: center; font: var(--md-sys-typescale-label-large); margin-bottom: 16px; }
    .pipe-card h4 { margin-bottom: 8px; }

    @media (max-width: 1024px) { .perks-grid { grid-template-columns: repeat(2, 1fr); } .pipeline-cards { grid-template-columns: repeat(3, 1fr); } .form-row { grid-template-columns: 1fr; } }
    @media (max-width: 640px) { .module-hero { padding: 100px 0 48px; } .perks-grid, .pipeline-cards { grid-template-columns: 1fr; } .job-header { flex-direction: column; align-items: flex-start; } .job-header-left { flex-direction: column; } }
  `],
})
export class CareersComponent {
  selDepts = new Set<string>();
  selLocations = new Set<string>();
  selWorkModels = new Set<string>();
  selTypes = new Set<string>();
  selLevels = new Set<string>();
  expandedJob: string | null = null;

  locations = ['Baku', 'Stockholm'];
  workModels = ['On-site', 'Remote', 'Hybrid'];
  types = ['Full-time', 'Part-time', 'Contract', 'Internship'];
  levels = ['Principal', 'Lead', 'Senior', 'Manager', 'Mid', 'Junior', 'Intern'];

  departments = [
    'AI Research & Development',
    'Engineering',
    'Clinical Operations',
    'Product & Design',
    'Regulatory Affairs',
    'Commercial & Growth',
    'Finance & Accounting',
    'Legal & Compliance',
  ];

  perks = [
    { icon: 'psychology', title: 'Frontier AI Research', desc: 'Work on state-of-the-art medical imaging models published in Nature Medicine, Radiology, and MICCAI' },
    { icon: 'healing', title: 'Real Clinical Impact', desc: 'Your work directly improves patient outcomes at partner hospitals across 3 continents' },
    { icon: 'rocket_launch', title: 'Early-Stage Equity', desc: 'Competitive salary with meaningful equity in a Series A medical AI company' },
    { icon: 'diversity_3', title: 'World-Class Team', desc: 'Join 70+ researchers and engineers from Stanford, Karolinska, ETH Zurich, and more' },
    { icon: 'school', title: 'Learning Budget', desc: '$3,000/year conference travel, courses, and publications support' },
    { icon: 'laptop_mac', title: 'Remote-First', desc: 'Work from anywhere with quarterly team offsites in Baku and Stockholm' },
    { icon: 'health_and_safety', title: 'Full Benefits', desc: 'Comprehensive health, dental, vision, and mental health support' },
    { icon: 'schedule', title: 'Flexible Hours', desc: 'Core hours 11am–3pm CET, async-first culture with deep work time' },
  ];

  hiringProcess = [
    { title: 'Application', desc: 'Submit your resume, cover letter, and portfolio through the form below' },
    { title: 'Screening', desc: 'Recruiter call (30 min) to discuss background, interests, and role fit' },
    { title: 'Technical', desc: 'Take-home assignment or live coding / research presentation (varies by role)' },
    { title: 'Team Interview', desc: 'Panel interview with hiring manager, team lead, and cross-functional partner' },
    { title: 'Offer', desc: 'Reference checks, compensation discussion, and formal offer letter' },
  ];

  jobs: JobListing[] = [
    // AI Research & Development
    {
      id: 'ai-01', title: 'Director of AI Engineering', department: 'AI Research & Development', deptIcon: 'psychology', deptColor: '#1a73e8',
      location: 'Baku', workModel: 'Hybrid', type: 'Full-time', level: 'Lead',
      description: 'Lead the engineering efforts for Skolyn\'s core AI technologies, bridging the gap between research prototypes and clinical-grade production systems. You will manage a high-performing team of ML, MLOps, and Data Engineers.',
      responsibilities: ['Define and execute the engineering roadmap for AI model deployment and scaling', 'Mentor and grow a team of 15+ AI/ML engineers', 'Oversee the architecture of Skolyn\'s inference engine and training infrastructure', 'Collaborate with clinical and product teams to translate needs into technical specs', 'Ensure compliance with IEC 62304 and medical device software standards'],
      requirements: ['10+ years of software engineering experience with 5+ years in AI/ML', '3+ years of engineering management experience', 'Track record of deploying deep learning models to production at scale', 'Strong architectural knowledge of ML systems (training, serving, monitoring)', 'Experience in regulated industries (healthcare, finance, automotive)'],
      preferred: ['PhD in Computer Science or related field', 'Experience with medical imaging AI', 'Knowledge of FDA SaMD regulations'],
      benefits: ['Competitive salary + significant equity', 'Leadership role shaping the future of medical AI', 'International team and travel']
    },
    {
      id: 'ai-02', title: 'Staff Machine Learning Engineer', department: 'AI Research & Development', deptIcon: 'psychology', deptColor: '#1a73e8',
      location: 'Baku', workModel: 'Remote', type: 'Full-time', level: 'Principal',
      description: 'Lead the technical design and implementation of Skolyn\'s next-generation diagnostic models. You will be hands-on with architecture searching, training optimization, and model evaluation.',
      responsibilities: ['Architect and train state-of-the-art deep learning models for medical imaging', 'Expert-level optimization of training loops and distributed training (Multi-Node GPU)', 'Technically lead complex ML projects from conception to production', 'Mentor senior and mid-level engineers on best practices', 'Collaborate with the infrastructure team to optimize cluster utilization'],
      requirements: ['8+ years experience in deep learning and computer vision', 'Expert proficiency in PyTorch and Python', 'Experience with large-scale vision transformers (ViT, Swin) and 3D CNNs', 'Strong software engineering background (C++, CUDA optimization)', 'Track record of shipping AI products'],
      preferred: ['Experience with NVIDIA Triton Inference Server', 'Knowledge of medical imaging standards (DICOM)', 'Open source contributions to PyTorch or similar libs'],
      benefits: ['Competitive salary + equity', 'Technical autonomy', 'Access to massive H100/A100 compute clusters']
    },
    {
      id: 'ai-03', title: 'Senior MLOps Engineer', department: 'AI Research & Development', deptIcon: 'psychology', deptColor: '#1a73e8',
      location: 'Baku', workModel: 'Remote', type: 'Full-time', level: 'Senior',
      description: 'Build the robust CI/CD pipelines, model registry, and monitoring infrastructure that enables Skolyn to ship clinical IQ models safely and efficiently.',
      responsibilities: ['Design and implement end-to-end ML pipelines (data -> training -> eval -> deploy)', 'Manage model registry, versioning, and lineage tracking (MLflow/DVC)', 'Build automated evaluation pipelines for clinical performance regression testing', 'Implement drift detection and monitoring for deployed models', 'Automate infrastructure provisioning using Terraform/Pulumi'],
      requirements: ['5+ years experience in DevOps, SRE, or MLOps', 'Strong experience with Kubernetes (EKS/GKE/AKS) and Docker', 'Proficiency with ML workflow tools (Kubeflow, Airflow, Argo)', 'Experience with CI/CD for ML (GitHub Actions, Jenkins)', 'Python and Go programming skills'],
      preferred: ['Experience with feature stores', 'Knowledge of medical device software lifecycle', 'Certified Kubernetes Administrator (CKA)'],
      benefits: ['Competitive salary + equity', 'Critical role in AI safety and reliability', 'Modern stack (K8s, Go, Python)']
    },
    {
      id: 'ai-04', title: 'Senior Computer Vision Engineer', department: 'AI Research & Development', deptIcon: 'psychology', deptColor: '#1a73e8',
      location: 'Baku', workModel: 'Remote', type: 'Full-time', level: 'Senior',
      description: 'Engineer high-performance computer vision pipelines for detection, segmentation, and classification of pathologies across multiple imaging modalities (MRI, CT, X-Ray).',
      responsibilities: ['Implement and optimize production-grade vision models', 'Develop pre-processing and post-processing algorithms for medical images', 'Optimize inference latency and throughput for real-time applications', 'Write clean, testable, and documented code for critical diagnostic components', 'Review code and provide technical guidance to junior engineers'],
      requirements: ['MSc in Computer Science, CV, or related field', '5+ years experience building computer vision systems', 'Strong PyTorch and OpenCV skills', 'Experience with object detection (YOLO, DETR) and segmentation (U-Net)', 'Solid understanding of 3D geometry and image processing'],
      preferred: ['Medical imaging experience (CT/MRI reconstruction)', 'Experience with ONNX and TensorRT', 'C++ development skills'],
      benefits: ['Competitive salary + equity', 'Work on life-saving technology', 'Continuous learning budget']
    },
    {
      id: 'ai-05', title: 'Generative AI Engineer', department: 'AI Research & Development', deptIcon: 'psychology', deptColor: '#1a73e8',
      location: 'Baku', workModel: 'Remote', type: 'Full-time', level: 'Mid',
      description: 'Develop and deploy Large Language Models (LLMs) and RAG systems to generate automated radiology reports and clinical explanations from diagnostic data.',
      responsibilities: ['Fine-tune and deploy open-weights LLMs (Llama 3, Mistral) for clinical tasks', 'Build RAG pipelines retrieving from medical guidelines and patient history', 'Optimize LLM inference for latency and cost (vLLM, TGI)', 'Evaluate generation quality using automated metrics and clinical feedback', 'Ensure data privacy and security in generative workflows'],
      requirements: ['3+ years experience with NLP and Deep Learning', 'Experience fine-tuning and deploying LLMs', 'Knowledge of vector databases (Pinecone, Milvus, Weaviate)', 'Proficiency with LangChain or LlamaIndex', 'Strong Python skills'],
      preferred: ['Experience with clinical NLP', 'Knowledge of prompt engineering techniques', 'Familiarity with multimodal LLMs'],
      benefits: ['Competitive salary + equity', 'Work at the BLEEDING EDGE of Generative AI', 'Access to proprietary clinical datasets']
    },
    {
      id: 'ai-06', title: 'AI Infrastructure Engineer', department: 'AI Research & Development', deptIcon: 'psychology', deptColor: '#1a73e8',
      location: 'Baku', workModel: 'Remote', type: 'Full-time', level: 'Mid',
      description: 'Manage the massive compute resources powering Skolyn\'s AI. You will optimize our GPU clusters, storage systems, and scheduling for maximum efficiency and scale.',
      responsibilities: ['Administer and optimize large-scale GPU clusters (Slurm/Kubernetes)', 'Optimize distributed training jobs for network and I/O performance', 'Manage petabyte-scale high-performance storage systems', 'Debug complex hardware and driver issues (CUDA, NCCL, RDMA)', 'Build self-service compute portals for researchers and engineers'],
      requirements: ['3+ years experience in HPC or Cloud Infrastructure', 'Strong Linux systems administration skills', 'Experience with GPU hardware (NVIDIA A100/H100) and networking (Infiniband)', 'Proficiency in Python and Bash scripting', 'Understanding of container orchestration'],
      preferred: ['Experience with Run:AI or similar schedulers', 'Knowledge of parallel file systems (Lustre, GPFS)', 'Cloud certification (AWS/GCP)'],
      benefits: ['Competitive salary + equity', 'Manage world-class supercomputing infrastructure', 'Remote flexibility']
    },
    {
      id: 'ai-07', title: 'Inference Optimization Engineer', department: 'AI Research & Development', deptIcon: 'psychology', deptColor: '#1a73e8',
      location: 'Baku', workModel: 'Remote', type: 'Full-time', level: 'Mid',
      description: 'Squeeze every millisecond of performance out of our models. You will specialize in model compilation, quantization, and hardware-specific optimizations.',
      responsibilities: ['Optimize deep learning models for inference using TensorRT and ONNX Runtime', 'Implement quantization strategies (INT8, FP8) with minimal accuracy loss', 'Profile and bottleneck analysis of inference pipelines', 'Develop custom CUDA kernels for critical operations', 'Benchmark models across different hardware targets'],
      requirements: ['3+ years experience in model serving or low-level optimization', 'Strong C++ and CUDA programming skills', 'Deep understanding of GPU architecture and memory hierarchy', 'Experience with model compilers (TVM, TensorRT)', 'Python proficiency'],
      preferred: ['Experience deploying on edge devices (Jetson)', 'Knowledge of CPU optimization (AVX, OpenVINO)', 'Framework internals knowledge (PyTorch/TensorFlow)'],
      benefits: ['Competitive salary + equity', 'High-impact performance engineering', 'Work with latest hardware']
    },
    {
      id: 'ai-08', title: 'Data Engineering Lead', department: 'AI Research & Development', deptIcon: 'psychology', deptColor: '#1a73e8',
      location: 'Baku', workModel: 'Hybrid', type: 'Full-time', level: 'Lead',
      description: 'Lead the design and implementation of Skolyn\'s medical data lakehouse. You will be responsible for the ETL pipelines that feed our AI training and validation.',
      responsibilities: ['Architect scalable data pipelines for petabytes of medical imaging data', 'Design and maintain the data lakehouse (Delta Lake/Iceberg)', 'Implement privacy-preserving data de-identification workflows', 'Lead a team of data engineers', 'Ensure data quality and lineage for regulatory compliance'],
      requirements: ['7+ years Data Engineering experience', 'Expert SQL and Python skills', 'Strong experience with Spark/Databricks and workflow engines (Airflow)', 'Experience handling unstructured data (images, video) at scale', 'Knowledge of data governance and security'],
      preferred: ['Healthcare data standards (DICOM, HL7, FHIR)', 'Experience building feature stores', 'Cloud data architecture certification'],
      benefits: ['Competitive salary + equity', 'Foundational role for AI success', 'Leadership opportunity']
    },
    {
      id: 'ai-09', title: 'Embedded AI Engineer', department: 'AI Research & Development', deptIcon: 'psychology', deptColor: '#1a73e8',
      location: 'Stockholm', workModel: 'On-site', type: 'Full-time', level: 'Mid',
      description: 'Bring Skolyn\'s diagnostic AI to the edge. You will deploy optimized models directly onto medical devices and portable scanners.',
      responsibilities: ['Deploy quantized AI models to embedded platforms (NVIDIA Jetson, edge TPUs)', 'Optimize power consumption and thermal performance', 'Develop efficient C++ inference runtimes for resource-constrained devices', 'Integrate AI models with device sensors and control logic', 'Ensure robustness and reliability of edge inference'],
      requirements: ['3+ years embedded software or edge AI experience', 'Strong C/C++ programming skills', 'Experience with embedded Linux and RTOS', 'Knowledge of model compression and edge inference frameworks', 'Understanding of hardware constraints'],
      preferred: ['Medical device firmware experience', 'FPGA programming experience', 'Computer vision on edge devices'],
      benefits: ['Competitive salary + equity', 'Work on tangible physical products', 'Lab access for hardware prototyping']
    },
    {
      id: 'ai-10', title: 'Full Stack AI Engineer', department: 'AI Research & Development', deptIcon: 'psychology', deptColor: '#1a73e8',
      location: 'Baku', workModel: 'Remote', type: 'Full-time', level: 'Mid',
      description: 'Bridge the gap between AI models and user applications. You will build the prototypes, demos, and integration layers that showcase our AI capabilities.',
      responsibilities: ['Build rapid prototypes and internal tools for AI model interaction', 'Develop APIs and microservices to expose AI functionality', 'Create frontend interfaces for model demos and data visualization', 'Integrate AI models into existing clinical workflows', 'Collaborate with product and design on user experience'],
      requirements: ['3+ years full stack development experience', 'Proficiency in Python (backend) and TypeScript/React/Angular (frontend)', 'Experience serving ML models (FastAPI, Flask)', 'Familiarity with cloud deployment (AWS/GCP)', 'Strong prototyping skills'],
      preferred: ['Streamlit or Gradio experience', 'Knowledge of medical imaging visualization', 'Design sensibility'],
      benefits: ['Competitive salary + equity', 'High visibility role', 'Creative freedom in prototyping']
    },

    // Engineering
    {
      id: 'eng-01', title: 'Senior Backend Engineer', department: 'Engineering', deptIcon: 'code', deptColor: '#34a853',
      location: 'Baku', workModel: 'Remote', type: 'Full-time', level: 'Senior',
      description: 'Design and build the backend infrastructure powering Skolyn\'s diagnostic platform — from DICOM ingestion and PACS integration to inference orchestration and FHIR-compliant result delivery.',
      responsibilities: ['Design and build RESTful/gRPC APIs for the diagnostic pipeline', 'Implement DICOM ingestion, parsing, and routing services', 'Build inference orchestration for multi-module diagnostic workflows', 'Ensure HIPAA-compliant data handling and audit logging', 'Optimize for sub-100ms end-to-end latency requirements'],
      requirements: ['BSc/MSc in Computer Science or Software Engineering', '5+ years backend engineering experience', 'Expert-level Go, Python, or Rust', 'Experience with Kubernetes, Docker, and microservices', 'Strong knowledge of PostgreSQL and message queues (Kafka/NATS)'],
      preferred: ['Healthcare or medical device software experience', 'Knowledge of DICOM, HL7, or FHIR standards', 'IEC 62304 compliant development experience'],
      benefits: ['Competitive salary + equity', 'Modern tech stack with cutting-edge infrastructure', 'Remote-first with flexible hours']
    },
    {
      id: 'eng-02', title: 'Frontend Engineer', department: 'Engineering', deptIcon: 'code', deptColor: '#34a853',
      location: 'Baku', workModel: 'Remote', type: 'Full-time', level: 'Mid',
      description: 'Build the clinician-facing web application for viewing AI diagnostic results, XAI visualizations, and clinical reports. Create intuitive interfaces that radiologists trust and love.',
      responsibilities: ['Develop Angular components for the clinician dashboard', 'Implement interactive XAI visualization components (heatmaps, overlays)', 'Build responsive, accessible UI following Material Design 3', 'Integrate with backend APIs for real-time diagnostic result rendering', 'Optimize performance for large medical image rendering'],
      requirements: ['BSc in Computer Science or equivalent experience', '3+ years frontend experience with Angular or React', 'Strong TypeScript, HTML5, and CSS3 skills', 'Experience with data visualization libraries (D3.js, Canvas/WebGL)', 'Understanding of accessibility standards (WCAG 2.1)'],
      preferred: ['Experience with medical imaging viewers (Cornerstone.js, OHIF)', 'Knowledge of Material Design 3 or similar design systems', 'Prior healthcare UX experience'],
      benefits: ['Competitive salary + equity', 'Design-driven engineering culture', 'Modern tooling and CI/CD']
    },
    {
      id: 'eng-03', title: 'DevOps / Platform Engineer', department: 'Engineering', deptIcon: 'code', deptColor: '#34a853',
      location: 'Baku', workModel: 'Remote', type: 'Full-time', level: 'Senior',
      description: 'Build and maintain the cloud infrastructure running Skolyn\'s diagnostic platform across GCP, Azure, and AWS. Ensure 99.9% uptime, sub-100ms inference latency, and full HIPAA compliance.',
      responsibilities: ['Design and manage multi-cloud Kubernetes infrastructure', 'Implement CI/CD pipelines with automated testing and deployment', 'Build monitoring, alerting, and observability stack (Prometheus, Grafana)', 'Ensure infrastructure meets HIPAA, GDPR, and ISO 27001 requirements', 'Manage GPU compute clusters for model training and inference'],
      requirements: ['5+ years DevOps/SRE/Platform engineering experience', 'Expert Kubernetes and Terraform/Pulumi skills', 'Strong experience with GCP, Azure, or AWS', 'Knowledge of infrastructure security and compliance frameworks', 'Experience with GPU infrastructure and model serving'],
      preferred: ['Healthcare cloud compliance experience (HITRUST, FedRAMP)', 'Experience with NVIDIA Triton or TensorRT Serving', 'IEC 62304 or ISO 13485 experience'],
      benefits: ['Competitive salary + equity', 'Ownership of critical infrastructure', 'Access to cutting-edge GPU hardware']
    },
    {
      id: 'eng-04', title: 'QA / Test Automation Engineer', department: 'Engineering', deptIcon: 'code', deptColor: '#34a853',
      location: 'Baku', workModel: 'Remote', type: 'Full-time', level: 'Mid',
      description: 'Ensure the quality and reliability of Skolyn\'s medical device software through comprehensive test automation, integration testing, and IEC 62304 compliance validation.',
      responsibilities: ['Design and maintain automated test suites for the diagnostic pipeline', 'Build integration tests for DICOM/PACS/FHIR interfaces', 'Implement regression testing for ML model updates', 'Maintain test documentation for IEC 62304 compliance', 'Collaborate with engineering and clinical teams on test coverage'],
      requirements: ['BSc in CS or equivalent', '3+ years QA or test automation experience', 'Experience with Playwright, Cypress, or Selenium', 'Knowledge of CI/CD and test pipeline integration', 'Strong analytical and documentation skills'],
      preferred: ['Medical device software testing experience', 'IEC 62304 or ISO 13485 familiarity', 'Experience testing ML model pipelines'],
      benefits: ['Competitive salary + equity', 'Critical quality role in patient-safety software', 'Modern testing infrastructure']
    },
    {
      id: 'eng-05', title: 'Lead Backend Engineer', department: 'Engineering', deptIcon: 'code', deptColor: '#34a853',
      location: 'Baku', workModel: 'Remote', type: 'Full-time', level: 'Lead',
      description: 'Lead the backend engineering team, setting technical direction for Skolyn\'s diagnostic platform architecture, defining coding standards, and mentoring senior and mid-level engineers.',
      responsibilities: ['Lead architecture decisions for the diagnostic platform backend', 'Mentor and grow a team of 4–6 backend engineers', 'Define coding standards, review processes, and technical debt strategy', 'Design high-availability microservices for clinical-grade SLAs', 'Drive cross-team technical alignment with AI, clinical, and product teams'],
      requirements: ['BSc/MSc in Computer Science or Software Engineering', '8+ years backend engineering experience with 2+ years leading teams', 'Expert-level Go, Python, or Rust with microservices architecture', 'Deep knowledge of distributed systems, event-driven architectures, and API design', 'Experience scaling systems to handle 10K+ concurrent requests'],
      preferred: ['Healthcare or medical device software experience', 'DICOM, HL7, or FHIR integration experience', 'IEC 62304 software lifecycle experience'],
      benefits: ['Competitive salary + significant equity', 'Technical leadership with high autonomy', 'Remote-first with quarterly offsites']
    },
    {
      id: 'eng-06', title: 'Infrastructure Engineer', department: 'Engineering', deptIcon: 'code', deptColor: '#34a853',
      location: 'Baku', workModel: 'Remote', type: 'Full-time', level: 'Mid',
      description: 'Build and maintain the core infrastructure services — networking, storage, compute provisioning, and monitoring — that underpin Skolyn\'s multi-cloud diagnostic platform.',
      responsibilities: ['Provision and manage cloud infrastructure across GCP and Azure', 'Implement infrastructure-as-code using Terraform and Pulumi', 'Build and maintain VPC networking, load balancers, and DNS configurations', 'Manage storage solutions for large medical imaging datasets (PB-scale)', 'Implement backup, disaster recovery, and high-availability patterns'],
      requirements: ['BSc in Computer Science, IT, or related field', '3+ years infrastructure or cloud engineering experience', 'Strong Terraform, Kubernetes, and Docker skills', 'Experience with GCP or Azure networking and IAM', 'Knowledge of Linux system administration and scripting'],
      preferred: ['Healthcare cloud compliance (HIPAA, HITRUST)', 'Experience with petabyte-scale object storage', 'ISO 27001 or SOC 2 implementation experience'],
      benefits: ['Competitive salary + equity', 'Work with cutting-edge multi-cloud infrastructure', 'Professional certification support (GCP, Azure)']
    },
    {
      id: 'eng-07', title: 'Platform Engineer', department: 'Engineering', deptIcon: 'code', deptColor: '#34a853',
      location: 'Baku', workModel: 'Remote', type: 'Full-time', level: 'Mid',
      description: 'Build internal developer platform tools and abstractions that enable Skolyn\'s engineering teams to deploy, monitor, and operate services independently with high velocity and reliability.',
      responsibilities: ['Design and build the internal developer platform (IDP)', 'Create deployment pipelines, service templates, and golden paths', 'Build observability tooling (logging, metrics, tracing) for all services', 'Implement service mesh and API gateway configurations', 'Support developer productivity with CLI tools and automation'],
      requirements: ['BSc in Computer Science or related field', '3+ years platform or DevOps engineering experience', 'Strong Kubernetes, Helm, and ArgoCD skills', 'Experience building CI/CD pipelines (GitHub Actions, GitLab CI)', 'Proficient in Go or Python with infrastructure automation experience'],
      preferred: ['Experience with Backstage or similar IDP frameworks', 'Service mesh experience (Istio, Linkerd)', 'Medical device software development lifecycle knowledge'],
      benefits: ['Competitive salary + equity', 'Shape the developer experience for the entire organization', 'Modern tech stack and tooling']
    },
    {
      id: 'eng-08', title: 'Backend Engineer', department: 'Engineering', deptIcon: 'code', deptColor: '#34a853',
      location: 'Baku', workModel: 'Remote', type: 'Full-time', level: 'Junior',
      description: 'Build and maintain backend services for Skolyn\'s diagnostic platform, working alongside senior engineers on API development, data processing, and integration tasks.',
      responsibilities: ['Develop and maintain RESTful API endpoints', 'Write unit and integration tests for backend services', 'Implement data processing and transformation pipelines', 'Participate in code reviews and technical discussions', 'Document APIs and service architectures'],
      requirements: ['BSc in Computer Science or equivalent', '1+ years backend development experience', 'Proficient in Go, Python, or TypeScript', 'Understanding of SQL databases and REST API design', 'Familiarity with Git, Docker, and CI/CD concepts'],
      preferred: ['Experience with Kubernetes or container orchestration', 'Knowledge of message queues (Kafka, NATS, RabbitMQ)', 'Interest in healthcare or medical technology'],
      benefits: ['Competitive salary + equity', 'Mentorship from senior engineers', 'Clear career growth ladder']
    },
    {
      id: 'eng-09', title: 'Site Reliability Engineer', department: 'Engineering', deptIcon: 'code', deptColor: '#34a853',
      location: 'Baku', workModel: 'Remote', type: 'Full-time', level: 'Mid',
      description: 'Ensure the reliability, availability, and performance of Skolyn\'s clinical diagnostic platform through SLO-driven operations, incident management, and capacity planning.',
      responsibilities: ['Define and maintain SLOs/SLIs for all critical services', 'Build and manage incident response and on-call processes', 'Implement chaos engineering and resilience testing', 'Optimize system performance and conduct capacity planning', 'Automate operational tasks and reduce toil through tooling'],
      requirements: ['BSc in Computer Science or related field', '3+ years SRE, DevOps, or production engineering experience', 'Strong Kubernetes and cloud infrastructure skills', 'Experience with monitoring tools (Prometheus, Grafana, PagerDuty)', 'Proficient in Go or Python with scripting automation'],
      preferred: ['Healthcare or regulated environment operations experience', '99.9%+ SLA management experience', 'Incident command and blameless postmortem experience'],
      benefits: ['Competitive salary + equity', 'Critical reliability role for patient-facing systems', 'On-call compensation']
    },
    {
      id: 'eng-10', title: 'Database Engineer', department: 'Engineering', deptIcon: 'code', deptColor: '#34a853',
      location: 'Baku', workModel: 'Remote', type: 'Full-time', level: 'Mid',
      description: 'Design, optimize, and manage the database layer powering Skolyn\'s diagnostic platform — from high-throughput OLTP databases to analytical data warehouses for clinical reporting.',
      responsibilities: ['Design and manage PostgreSQL and TimescaleDB schemas for clinical data', 'Optimize query performance for high-throughput diagnostic workflows', 'Implement database replication, failover, and backup strategies', 'Build ETL pipelines for clinical analytics and reporting', 'Ensure HIPAA-compliant data access controls and audit logging'],
      requirements: ['BSc in Computer Science or related field', '3+ years database engineering or administration experience', 'Expert PostgreSQL skills with performance tuning experience', 'Experience with database replication and high-availability patterns', 'Knowledge of data modeling for healthcare/clinical data'],
      preferred: ['Experience with TimescaleDB, ClickHouse, or similar OLAP databases', 'Healthcare data standards knowledge (FHIR, HL7)', 'Data pipeline tools experience (dbt, Airflow)'],
      benefits: ['Competitive salary + equity', 'Ownership of the data platform', 'Work with large-scale clinical datasets']
    },
    {
      id: 'eng-11', title: 'Senior Frontend Engineer', department: 'Engineering', deptIcon: 'code', deptColor: '#34a853',
      location: 'Baku', workModel: 'Remote', type: 'Full-time', level: 'Senior',
      description: 'Lead frontend architecture and development for Skolyn\'s clinician-facing diagnostic platform, mentoring junior engineers and driving performance optimization for medical image rendering.',
      responsibilities: ['Architect frontend application structure and component design patterns', 'Lead development of complex diagnostic visualization features', 'Mentor mid and junior frontend engineers through code reviews', 'Optimize WebGL/Canvas rendering for large medical images', 'Drive accessibility, internationalization, and performance standards'],
      requirements: ['BSc/MSc in Computer Science or equivalent', '5+ years frontend engineering experience', 'Expert Angular and TypeScript skills', 'Deep knowledge of browser APIs, Web Workers, and performance optimization', 'Experience with component library design and design system implementation'],
      preferred: ['Medical imaging viewer experience (Cornerstone.js, OHIF)', 'WebGL or Canvas-based rendering experience', 'Healthcare UX and accessibility expertise'],
      benefits: ['Competitive salary + equity', 'Technical leadership opportunity', 'Modern frontend architecture stack']
    },

    // Clinical Operations
    {
      id: 'clin-01', title: 'Clinical Validation Manager', department: 'Clinical Operations', deptIcon: 'local_hospital', deptColor: '#ea4335',
      location: 'Baku', workModel: 'Hybrid', type: 'Full-time', level: 'Manager',
      description: 'Lead the planning, execution, and reporting of multi-site clinical validation studies for Skolyn\'s AI diagnostic modules. Coordinate with partner hospitals and regulatory teams.',
      responsibilities: ['Design and manage MRMC clinical validation studies', 'Coordinate multi-site reader studies with 10+ clinical partner sites', 'Prepare clinical evidence packages for regulatory submissions', 'Manage CRO relationships and study budgets', 'Ensure STARD and PMCF compliance'],
      requirements: ['MSc or PhD in Clinical Research, Epidemiology, or Biostatistics', '5+ years clinical trial or validation study management', 'Experience with medical device clinical evidence generation', 'Knowledge of FDA, EU MDR, and MHRA regulatory frameworks', 'Strong project management and stakeholder communication skills'],
      preferred: ['Radiology or diagnostic imaging domain experience', 'AI/ML clinical validation experience', 'STARD reporting guideline expertise'],
      benefits: ['Competitive salary + equity', 'Direct impact on patient safety and diagnostic accuracy', 'International travel to clinical partner sites']
    },
    {
      id: 'clin-02', title: 'Clinical Data Analyst', department: 'Clinical Operations', deptIcon: 'local_hospital', deptColor: '#ea4335',
      location: 'Baku', workModel: 'Remote', type: 'Full-time', level: 'Mid',
      description: 'Analyze clinical validation data from multi-site reader studies, generate statistical reports, and support regulatory evidence submissions for AI diagnostic modules.',
      responsibilities: ['Perform statistical analysis of MRMC reader study data', 'Generate sensitivity, specificity, and AUC analyses', 'Prepare statistical sections for regulatory submissions', 'Build dashboards for clinical performance monitoring', 'Collaborate with the fairness team on subgroup analyses'],
      requirements: ['MSc in Biostatistics, Epidemiology, or Data Science', '2+ years clinical data analysis experience', 'Proficient in R or Python (pandas, scipy, statsmodels)', 'Experience with diagnostic accuracy study design', 'Knowledge of STARD reporting guidelines'],
      preferred: ['Medical imaging data experience', 'FDA submission statistical methodology knowledge', 'Experience with Bayesian methods'],
      benefits: ['Competitive salary + equity', 'Clinical impact through evidence generation', 'Collaborative research-clinical environment']
    },
    {
      id: 'clin-03', title: 'Medical Image Annotator', department: 'Clinical Operations', deptIcon: 'local_hospital', deptColor: '#ea4335',
      location: 'Baku', workModel: 'On-site', type: 'Full-time', level: 'Junior',
      description: 'Annotate medical images (MRI, CT, Ultrasound, X-Ray) under radiologist supervision to create high-quality training and validation datasets for Skolyn\'s AI models.',
      responsibilities: ['Annotate pathologies on medical images using standardized protocols', 'Segment anatomical structures and lesion boundaries', 'Maintain annotation quality through inter-rater reliability checks', 'Follow HIPAA-compliant data handling procedures', 'Assist in dataset curation and quality assurance'],
      requirements: ['BSc in Biomedical Sciences, Radiology Technology, or related field', 'Familiarity with medical imaging modalities', 'Strong attention to detail and systematic approach', 'Ability to follow structured annotation protocols'],
      preferred: ['Prior medical image annotation experience', 'Familiarity with annotation tools (Label Studio, CVAT)', 'Radiology or pathology coursework'],
      benefits: ['Competitive salary', 'Training in medical imaging AI', 'Career growth path into clinical operations']
    },
    {
      id: 'clin-04', title: 'Clinical Affairs Director', department: 'Clinical Operations', deptIcon: 'local_hospital', deptColor: '#ea4335',
      location: 'Baku', workModel: 'Hybrid', type: 'Full-time', level: 'Lead',
      description: 'Direct all clinical affairs activities including partner hospital relationships, clinical advisory board management, and clinical evidence strategy across all imaging modalities.',
      responsibilities: ['Oversee clinical partnerships with 15+ hospital sites globally', 'Chair the Clinical Advisory Board and manage KOL relationships', 'Define clinical evidence generation strategy for all diagnostic modules', 'Represent Skolyn at major radiology conferences (RSNA, ECR, ISMRM)', 'Collaborate with regulatory affairs on clinical endpoint definitions'],
      requirements: ['MD, PhD, or equivalent in Radiology, Clinical Research, or Biomedical Sciences', '8+ years clinical affairs or medical affairs experience', 'Deep understanding of diagnostic radiology workflows', 'Experience with multi-site clinical study orchestration', 'Published record in peer-reviewed medical journals'],
      preferred: ['Board certification in Radiology or related specialty', 'AI/ML in healthcare experience', 'FDA submission clinical sections authorship'],
      benefits: ['Competitive salary + equity', 'Leadership role shaping clinical strategy', 'Global travel to partner institutions']
    },
    {
      id: 'clin-05', title: 'Clinical Research Coordinator', department: 'Clinical Operations', deptIcon: 'local_hospital', deptColor: '#ea4335',
      location: 'Baku', workModel: 'On-site', type: 'Full-time', level: 'Junior',
      description: 'Coordinate day-to-day clinical research activities including IRB submissions, patient consent management, data collection, and site communication for ongoing validation studies.',
      responsibilities: ['Prepare and submit IRB/Ethics Committee applications', 'Manage informed consent processes and patient enrollment tracking', 'Coordinate data collection and site monitoring visits', 'Maintain regulatory binders and essential study documents', 'Track study timelines, milestones, and deliverables'],
      requirements: ['BSc in Clinical Research, Nursing, or Life Sciences', '1+ years clinical research coordination experience', 'Knowledge of GCP (Good Clinical Practice) guidelines', 'Experience with IRB/Ethics Committee submissions', 'Strong organizational and documentation skills'],
      preferred: ['ACRP or SOCRA certification', 'Medical imaging research experience', 'Experience with electronic data capture systems (REDCap)'],
      benefits: ['Competitive salary', 'Clinical research training and certification support', 'Pathway to senior clinical roles']
    },
    {
      id: 'clin-06', title: 'Radiologist Consultant (Part-time)', department: 'Clinical Operations', deptIcon: 'local_hospital', deptColor: '#ea4335',
      location: 'Baku', workModel: 'Remote', type: 'Part-time', level: 'Senior',
      description: 'Provide expert radiological guidance for AI model development, validation study design, and clinical output review. Serve as the clinical voice in product development decisions.',
      responsibilities: ['Review and validate AI diagnostic outputs across imaging modalities', 'Provide clinical input on model training data quality and annotation protocols', 'Participate in MRMC reader studies as expert reader', 'Advise on clinical workflow integration requirements', 'Co-author clinical validation publications'],
      requirements: ['MD with Board certification in Diagnostic Radiology', '5+ years clinical radiology practice', 'Fellowship training in body imaging, neuroradiology, or musculoskeletal radiology', 'Active clinical practice with current case volume', 'Interest in AI/ML applications in radiology'],
      preferred: ['Academic radiology position preferred', 'Prior AI validation study participation', 'Publications in AI-assisted radiology'],
      benefits: ['Competitive consulting rate', 'Equity participation', 'Co-authorship on clinical publications']
    },
    {
      id: 'clin-07', title: 'Clinical Integration Specialist', department: 'Clinical Operations', deptIcon: 'local_hospital', deptColor: '#ea4335',
      location: 'Baku', workModel: 'Hybrid', type: 'Full-time', level: 'Mid',
      description: 'Lead the technical integration of Skolyn diagnostic modules into hospital PACS, RIS, and EHR systems. Ensure seamless clinical workflow adoption at partner sites.',
      responsibilities: ['Manage DICOM, HL7, and FHIR integration at hospital sites', 'Configure worklist routing and result delivery workflows', 'Conduct go-live support and clinician training sessions', 'Troubleshoot integration issues with hospital IT teams', 'Document integration specifications and deployment playbooks'],
      requirements: ['BSc in Health Informatics, Biomedical Engineering, or IT', '3+ years healthcare IT or clinical systems integration experience', 'Knowledge of DICOM, HL7, and FHIR standards', 'Experience with PACS/RIS system administration', 'Strong communication skills for clinical and technical audiences'],
      preferred: ['Radiology workflow and PACS integration experience', 'Experience with IHE profiles (SWF, PIR)', 'Clinical informatics certification'],
      benefits: ['Competitive salary + equity', 'Direct clinical deployment impact', 'Travel to partner hospital sites']
    },
    {
      id: 'clin-08', title: 'Clinical Quality Manager', department: 'Clinical Operations', deptIcon: 'local_hospital', deptColor: '#ea4335',
      location: 'Baku', workModel: 'On-site', type: 'Full-time', level: 'Manager',
      description: 'Establish and manage clinical quality metrics, patient safety monitoring, and adverse event reporting for all deployed AI diagnostic modules across partner hospital sites.',
      responsibilities: ['Define and monitor clinical quality KPIs (sensitivity, specificity, turnaround time)', 'Manage adverse event and near-miss reporting and investigation', 'Conduct periodic clinical quality audits at deployment sites', 'Lead post-market clinical follow-up (PMCF) activities', 'Report clinical quality metrics to regulatory and executive teams'],
      requirements: ['MSc in Clinical Quality, Healthcare Management, or related field', '5+ years clinical quality management experience', 'Experience with patient safety reporting systems', 'Knowledge of ISO 13485 and medical device vigilance requirements', 'Strong analytical and reporting skills'],
      preferred: ['CPHQ or similar clinical quality certification', 'Medical device post-market surveillance experience', 'Experience with AI/ML clinical performance monitoring'],
      benefits: ['Competitive salary + equity', 'Patient safety leadership role', 'Shape clinical quality standards for medical AI']
    },
    {
      id: 'clin-09', title: 'Medical Writer', department: 'Clinical Operations', deptIcon: 'local_hospital', deptColor: '#ea4335',
      location: 'Baku', workModel: 'Remote', type: 'Full-time', level: 'Mid',
      description: 'Author clinical and regulatory documents including clinical evaluation reports, validation study protocols, clinical investigation plans, and peer-reviewed publications for Skolyn diagnostic modules.',
      responsibilities: ['Write Clinical Evaluation Reports (CERs) per MEDDEV 2.7/1 Rev.4', 'Draft clinical investigation plans and study protocols', 'Prepare manuscripts for peer-reviewed journals', 'Author clinical sections of regulatory submissions', 'Maintain clinical literature reviews and PMCF evaluation reports'],
      requirements: ['MSc/PhD in Biomedical Sciences, Medical Writing, or related field', '3+ years regulatory or clinical medical writing experience', 'Experience with EU MDR clinical evaluation requirements', 'Strong scientific writing and literature review skills', 'Knowledge of medical device regulatory documentation'],
      preferred: ['AMWA or EMWA medical writing certification', 'AI/ML medical device documentation experience', 'Published first-author manuscripts in medical journals'],
      benefits: ['Competitive salary + equity', 'Author regulatory and scientific publications', 'Collaborative clinical-research environment']
    },
    {
      id: 'clin-10', title: 'Clinical Operations Intern', department: 'Clinical Operations', deptIcon: 'local_hospital', deptColor: '#ea4335',
      location: 'Baku', workModel: 'On-site', type: 'Internship', level: 'Intern',
      description: 'Support clinical operations activities including data collection, annotation quality checks, study document preparation, and clinical performance dashboard maintenance during a 6-month internship.',
      responsibilities: ['Assist with clinical data collection and organization', 'Perform annotation quality assurance checks', 'Help prepare study documents and regulatory submissions', 'Maintain clinical performance tracking dashboards', 'Support clinical team with administrative and research tasks'],
      requirements: ['Currently pursuing BSc/MSc in Biomedical Sciences, Clinical Research, or related field', 'Interest in medical AI and clinical validation', 'Strong attention to detail and organizational skills', 'Proficient in Microsoft Office and data management'],
      preferred: ['Prior clinical research or lab experience', 'Familiarity with medical imaging', 'Basic statistical analysis skills'],
      benefits: ['Competitive internship stipend', 'Mentorship from clinical leaders', 'Potential full-time conversion']
    },

    // Product & Design
    {
      id: 'prod-01', title: 'Senior Product Manager', department: 'Product & Design', deptIcon: 'palette', deptColor: '#9c27b0',
      location: 'Baku', workModel: 'Remote', type: 'Full-time', level: 'Senior',
      description: 'Own the product strategy and roadmap for Skolyn\'s clinician-facing diagnostic platform. Translate clinical needs into product requirements and drive cross-functional execution.',
      responsibilities: ['Define product vision, strategy, and quarterly roadmaps', 'Conduct user research with radiologists and hospital IT teams', 'Write detailed PRDs with acceptance criteria', 'Prioritize features using clinical impact and business value', 'Coordinate launches with engineering, design, and regulatory teams'],
      requirements: ['5+ years product management experience', '2+ years in health tech, medical devices, or SaaS', 'Strong analytical skills with data-driven decision making', 'Experience with agile methodologies and product analytics', 'Excellent written and verbal communication'],
      preferred: ['Medical device or SaMD product experience', 'Clinical workflow knowledge', 'Experience with DORA/SPACE metrics'],
      benefits: ['Competitive salary + equity', 'High-impact role shaping medical AI products', 'Direct access to clinical partners and users']
    },
    {
      id: 'prod-02', title: 'UX/UI Designer', department: 'Product & Design', deptIcon: 'palette', deptColor: '#9c27b0',
      location: 'Baku', workModel: 'Remote', type: 'Full-time', level: 'Mid',
      description: 'Design intuitive, accessible interfaces for radiologists interpreting AI-assisted diagnostic results. Create XAI visualization components that build clinical trust.',
      responsibilities: ['Design clinician-facing interfaces for diagnostic workflows', 'Create XAI visualization components (heatmaps, confidence indicators)', 'Conduct usability testing with practicing radiologists', 'Maintain and evolve the Skolyn design system', 'Collaborate with frontend engineers on implementation'],
      requirements: ['3+ years UX/UI design experience', 'Expert Figma skills with component library experience', 'Portfolio demonstrating complex data visualization design', 'Understanding of accessibility standards (WCAG 2.1)', 'User research and usability testing experience'],
      preferred: ['Healthcare or medical device design experience', 'Knowledge of Material Design 3', 'Experience designing for clinical workflows'],
      benefits: ['Competitive salary + equity', 'Design-led product culture', 'Impact on clinical user experience globally']
    },
    {
      id: 'prod-03', title: 'UX Researcher', department: 'Product & Design', deptIcon: 'palette', deptColor: '#9c27b0',
      location: 'Baku', workModel: 'Remote', type: 'Full-time', level: 'Mid',
      description: 'Conduct systematic user research with radiologists, hospital administrators, and clinical stakeholders to inform product decisions and validate design hypotheses.',
      responsibilities: ['Plan and conduct user research studies (interviews, surveys, observations)', 'Analyze and synthesize qualitative and quantitative research data', 'Create personas, journey maps, and insight reports', 'Present findings to product and design teams', 'Track and measure product usability metrics'],
      requirements: ['MSc in HCI, Psychology, or related field', '3+ years UX research experience', 'Experience with mixed-methods research', 'Strong analytical and storytelling skills', 'Proficiency with research tools (UserTesting, Maze, Dovetail)'],
      preferred: ['Healthcare or clinical workflow research experience', 'Experience with medical device usability standards (IEC 62366)', 'Statistical analysis skills'],
      benefits: ['Competitive salary + equity', 'Direct access to clinical users for research', 'Shape the direction of medical AI products']
    },

    // Regulatory Affairs
    {
      id: 'reg-01', title: 'Regulatory Affairs Manager', department: 'Regulatory Affairs', deptIcon: 'verified', deptColor: '#e65100',
      location: 'Baku', workModel: 'Hybrid', type: 'Full-time', level: 'Manager',
      description: 'Lead the regulatory strategy for Skolyn\'s AI diagnostic modules, managing FDA De Novo, EU MDR, and MHRA submissions across 3 regulatory markets.',
      responsibilities: ['Develop and execute multi-market regulatory strategies', 'Prepare FDA 510(k)/De Novo and EU MDR technical documentation', 'Manage interactions with regulatory bodies (FDA, Notified Bodies, MHRA)', 'Ensure ongoing compliance with post-market surveillance requirements', 'Advise engineering teams on regulatory design requirements'],
      requirements: ['MSc in Regulatory Science, Biomedical Engineering, or related field', '5+ years medical device regulatory affairs experience', 'Experience with SaMD (Software as a Medical Device) classification', 'Knowledge of FDA, EU MDR 2017/745, and IEC 62304', 'Experience with risk management (ISO 14971)'],
      preferred: ['Prior AI/ML medical device submission experience', 'Experience with Class IIa/IIb devices under EU MDR', 'RAPS certification'],
      benefits: ['Competitive salary + equity', 'Lead regulatory strategy for a novel medical AI product', 'International regulatory exposure']
    },
    {
      id: 'reg-02', title: 'Quality Assurance Specialist', department: 'Regulatory Affairs', deptIcon: 'verified', deptColor: '#e65100',
      location: 'Baku', workModel: 'On-site', type: 'Full-time', level: 'Mid',
      description: 'Maintain and improve Skolyn\'s Quality Management System (QMS) in compliance with ISO 13485, ISO 27001, and regulatory requirements for medical device software.',
      responsibilities: ['Maintain the ISO 13485 Quality Management System', 'Manage CAPA, nonconformance, and complaint handling processes', 'Conduct internal audits and support external audit readiness', 'Maintain design history files and traceability matrices', 'Support regulatory submissions with quality documentation'],
      requirements: ['BSc in Quality Engineering, Biomedical Engineering, or related field', '3+ years QA/QMS experience in medical devices', 'Knowledge of ISO 13485, ISO 14971, and IEC 62304', 'Experience with document control and CAPA systems', 'Strong attention to detail and systematic approach'],
      preferred: ['ISO 13485 Lead Auditor certification', 'Experience with SaMD or AI-based medical devices', 'Knowledge of ISO 27001 information security'],
      benefits: ['Competitive salary + equity', 'Essential quality role in patient-safety software', 'Professional certification support']
    },
    {
      id: 'reg-03', title: 'Regulatory Submissions Specialist', department: 'Regulatory Affairs', deptIcon: 'verified', deptColor: '#e65100',
      location: 'Baku', workModel: 'Hybrid', type: 'Full-time', level: 'Mid',
      description: 'Prepare, compile, and submit regulatory dossiers for Skolyn AI diagnostic modules to FDA, EU Notified Bodies, and MHRA. Manage submission timelines and agency correspondence.',
      responsibilities: ['Compile FDA 510(k)/De Novo submission packages', 'Prepare EU MDR Technical Documentation per Annex II/III', 'Manage regulatory submission timelines and milestone tracking', 'Draft responses to regulatory authority questions and deficiency letters', 'Maintain regulatory databases and submission archives'],
      requirements: ['BSc/MSc in Regulatory Science, Biomedical Engineering, or related field', '3+ years medical device regulatory submission experience', 'Experience preparing FDA and/or EU MDR submissions', 'Knowledge of eCopy/eSTAR submission formats', 'Excellent technical writing and document management skills'],
      preferred: ['SaMD regulatory submission experience', 'Experience with EUDAMED and FDA submission portals', 'RAC certification'],
      benefits: ['Competitive salary + equity', 'Multi-market regulatory exposure', 'Professional development support']
    },
    {
      id: 'reg-04', title: 'Post-Market Surveillance Specialist', department: 'Regulatory Affairs', deptIcon: 'verified', deptColor: '#e65100',
      location: 'Baku', workModel: 'Remote', type: 'Full-time', level: 'Mid',
      description: 'Manage post-market surveillance activities including vigilance reporting, periodic safety update reports (PSURs), and trending analysis for all deployed Skolyn diagnostic modules.',
      responsibilities: ['Develop and maintain post-market surveillance plans', 'Author Periodic Safety Update Reports (PSURs) and PMCFs', 'Manage vigilance reporting for adverse events and field safety actions', 'Conduct trend analysis of complaints and performance data', 'Coordinate post-market clinical follow-up studies'],
      requirements: ['BSc/MSc in Biomedical Engineering, Regulatory Science, or related field', '2+ years post-market surveillance or pharmacovigilance experience', 'Knowledge of EU MDR post-market surveillance requirements', 'Experience with vigilance reporting (MedWatch, EUDAMED)', 'Strong analytical and report writing skills'],
      preferred: ['Medical device PMS experience preferred over pharma', 'Knowledge of AI/ML model monitoring', 'Experience with MEDDEV guidance documents'],
      benefits: ['Competitive salary + equity', 'Critical patient safety monitoring role', 'International regulatory exposure']
    },
    {
      id: 'reg-05', title: 'Risk Management Engineer', department: 'Regulatory Affairs', deptIcon: 'verified', deptColor: '#e65100',
      location: 'Baku', workModel: 'On-site', type: 'Full-time', level: 'Senior',
      description: 'Lead risk management activities per ISO 14971 for all Skolyn AI diagnostic modules, from hazard identification through residual risk evaluation and risk-benefit analysis.',
      responsibilities: ['Develop and maintain risk management files per ISO 14971', 'Conduct hazard analysis (FMEA, FTA) for AI diagnostic modules', 'Define risk acceptability criteria and evaluate residual risks', 'Perform risk-benefit analysis for regulatory submissions', 'Integrate AI-specific risks (bias, drift, adversarial inputs) into risk frameworks'],
      requirements: ['BSc/MSc in Biomedical Engineering, Systems Engineering, or related field', '5+ years medical device risk management experience', 'Expert knowledge of ISO 14971 and IEC 62304', 'Experience with FMEA, FTA, and risk traceability matrices', 'Understanding of AI/ML-specific risk considerations'],
      preferred: ['AI/ML medical device risk management experience', 'ISO 14971 Lead Assessor training', 'Knowledge of AAMI TIR57 (cybersecurity risk management)'],
      benefits: ['Competitive salary + equity', 'Lead risk strategy for novel medical AI', 'Influence industry risk management standards']
    },
    {
      id: 'reg-06', title: 'Regulatory Affairs Intern', department: 'Regulatory Affairs', deptIcon: 'verified', deptColor: '#e65100',
      location: 'Baku', workModel: 'On-site', type: 'Internship', level: 'Intern',
      description: 'Support regulatory affairs activities including document preparation, standards research, regulatory database maintenance, and submission package assembly during a 6-month internship.',
      responsibilities: ['Assist with regulatory submission document preparation', 'Research regulatory standards and guidance documents', 'Maintain regulatory tracking databases and filing systems', 'Support risk management file documentation', 'Help prepare for regulatory audits and inspections'],
      requirements: ['Currently pursuing BSc/MSc in Regulatory Science, Biomedical Engineering, or Law', 'Interest in medical device regulation and AI governance', 'Strong research and documentation skills', 'Attention to detail and organized approach'],
      preferred: ['Coursework in regulatory affairs or medical device standards', 'Prior regulatory or compliance internship', 'Knowledge of ISO 13485 or IEC 62304'],
      benefits: ['Competitive internship stipend', 'Mentorship from regulatory leaders', 'Potential full-time conversion']
    },
    {
      id: 'reg-07', title: 'AI Regulatory Strategy Lead', department: 'Regulatory Affairs', deptIcon: 'verified', deptColor: '#e65100',
      location: 'Stockholm', workModel: 'Hybrid', type: 'Full-time', level: 'Lead',
      description: 'Define and execute regulatory strategy specifically for AI/ML-based diagnostic devices, navigating evolving frameworks including the EU AI Act, FDA PCCP guidance, and international AI governance initiatives.',
      responsibilities: ['Develop AI-specific regulatory strategy aligned with evolving global frameworks', 'Lead predetermined change control plan (PCCP) development for adaptive AI models', 'Monitor and analyze emerging AI regulatory guidance (EU AI Act, FDA AI/ML action plan)', 'Represent Skolyn in industry AI regulatory working groups', 'Advise executive team on regulatory implications of AI development decisions'],
      requirements: ['MSc/PhD in Regulatory Science, Law, or Biomedical Engineering', '7+ years medical device regulatory affairs with 3+ years in AI/ML devices', 'Deep knowledge of FDA AI/ML SaMD guidance and EU AI Act', 'Experience with predetermined change control plans for adaptive algorithms', 'Strong strategic thinking and stakeholder communication skills'],
      preferred: ['Published work on AI medical device regulation', 'Participation in IMDRF or similar regulatory harmonization bodies', 'Experience testifying before regulatory panels'],
      benefits: ['Competitive salary + equity', 'Shape regulatory strategy for frontier AI diagnostics', 'Industry thought leadership opportunities']
    },
    {
      id: 'reg-08', title: 'Clinical Evaluator', department: 'Regulatory Affairs', deptIcon: 'verified', deptColor: '#e65100',
      location: 'Baku', workModel: 'Remote', type: 'Full-time', level: 'Mid',
      description: 'Conduct clinical evaluations per EU MDR Annex XIV requirements, performing systematic literature reviews and analyzing clinical data to demonstrate safety and performance of Skolyn diagnostic modules.',
      responsibilities: ['Perform systematic literature searches using MEDLINE, Embase, and Cochrane', 'Write Clinical Evaluation Reports (CERs) per MEDDEV 2.7/1 Rev.4', 'Identify and analyze equivalent medical devices for clinical evidence', 'Maintain clinical evaluation plans and update schedules', 'Support Notified Body reviews with clinical evidence packages'],
      requirements: ['MSc/PhD in Biomedical Sciences, Clinical Research, or Epidemiology', '3+ years clinical evaluation or HTA experience', 'Experience writing CERs for medical devices', 'Knowledge of EU MDR clinical evaluation requirements', 'Strong systematic review and meta-analysis skills'],
      preferred: ['Diagnostic imaging device clinical evaluation experience', 'Experience with MDCG guidance documents', 'Understanding of PMCF study design'],
      benefits: ['Competitive salary + equity', 'Author critical regulatory documents', 'Influence clinical evidence standards for AI devices']
    },
    {
      id: 'reg-09', title: 'Cybersecurity Compliance Analyst', department: 'Regulatory Affairs', deptIcon: 'verified', deptColor: '#e65100',
      location: 'Baku', workModel: 'Hybrid', type: 'Full-time', level: 'Mid',
      description: 'Ensure cybersecurity compliance for Skolyn medical device software per FDA premarket cybersecurity guidance, IEC 81001-5-1, and AAMI TIR57 requirements.',
      responsibilities: ['Develop and maintain cybersecurity risk management documentation', 'Conduct threat modeling and vulnerability assessments per AAMI TIR57', 'Prepare FDA premarket cybersecurity submissions (SBOM, threat model)', 'Ensure compliance with IEC 81001-5-1 security lifecycle requirements', 'Monitor and respond to cybersecurity vulnerability disclosures'],
      requirements: ['BSc/MSc in Cybersecurity, Computer Science, or related field', '3+ years medical device cybersecurity or compliance experience', 'Knowledge of FDA premarket cybersecurity guidance', 'Experience with threat modeling (STRIDE, DREAD) and SBOM generation', 'Understanding of IEC 62443 and IEC 81001-5-1'],
      preferred: ['CISSP, CISM, or equivalent certification', 'Medical device software security experience', 'Experience with vulnerability scanning and penetration testing'],
      benefits: ['Competitive salary + equity', 'Critical security role in patient-safety software', 'Professional certification support']
    },
    {
      id: 'reg-10', title: 'Labeling & Documentation Specialist', department: 'Regulatory Affairs', deptIcon: 'verified', deptColor: '#e65100',
      location: 'Baku', workModel: 'On-site', type: 'Full-time', level: 'Junior',
      description: 'Manage medical device labeling, Instructions for Use (IFU), and regulatory documentation to ensure compliance with FDA, EU MDR, and international labeling requirements.',
      responsibilities: ['Create and maintain Instructions for Use (IFU) documents', 'Ensure labeling compliance with FDA 21 CFR 801 and EU MDR Annex I', 'Manage UDI (Unique Device Identification) assignments and GUDID submissions', 'Coordinate label translations for multi-market distribution', 'Maintain document control for all regulated labeling artifacts'],
      requirements: ['BSc in Biomedical Engineering, Technical Communication, or related field', '1+ years medical device labeling or documentation experience', 'Knowledge of FDA and EU MDR labeling requirements', 'Strong attention to detail and document control skills', 'Excellent technical writing ability'],
      preferred: ['UDI/GUDID submission experience', 'Knowledge of ISO 15223 medical device symbols', 'Experience with document management systems (Veeva, MasterControl)'],
      benefits: ['Competitive salary', 'Essential regulatory documentation role', 'Career path into regulatory affairs']
    },
    {
      id: 'reg-11', title: 'Design Assurance Engineer', department: 'Regulatory Affairs', deptIcon: 'verified', deptColor: '#e65100',
      location: 'Baku', workModel: 'Hybrid', type: 'Full-time', level: 'Mid',
      description: 'Ensure design controls compliance per IEC 62304 and FDA 21 CFR 820 for Skolyn medical device software, managing design history files, verification and validation activities.',
      responsibilities: ['Manage design control processes per IEC 62304 and FDA 21 CFR 820', 'Maintain Design History Files (DHF) and traceability matrices', 'Plan and execute software verification and validation activities', 'Review and approve design inputs, outputs, and design reviews', 'Ensure design transfer readiness for production releases'],
      requirements: ['BSc/MSc in Software Engineering, Biomedical Engineering, or related field', '3+ years design assurance or V&V experience in medical devices', 'Expert knowledge of IEC 62304 software lifecycle processes', 'Experience with requirements management tools (DOORS, Jama)', 'Strong understanding of software testing methodologies'],
      preferred: ['SaMD or AI-based medical device design control experience', 'Experience with agile development in regulated environments', 'Knowledge of IEC 62366 usability engineering'],
      benefits: ['Competitive salary + equity', 'Bridge engineering and regulatory compliance', 'Shape design quality for AI diagnostics']
    },
    {
      id: 'reg-12', title: 'Regulatory Intelligence Analyst', department: 'Regulatory Affairs', deptIcon: 'verified', deptColor: '#e65100',
      location: 'Baku', workModel: 'Remote', type: 'Full-time', level: 'Junior',
      description: 'Monitor and analyze the global regulatory landscape for AI/ML medical devices, tracking new guidance documents, standards updates, and regulatory trends across FDA, EU, and international markets.',
      responsibilities: ['Monitor FDA, EU, MHRA, and international regulatory developments', 'Track and summarize new guidance documents and standards updates', 'Maintain regulatory intelligence database and alert system', 'Prepare regulatory landscape analysis reports for leadership', 'Support competitive regulatory benchmarking analysis'],
      requirements: ['BSc/MSc in Regulatory Science, Policy, or related field', '1+ years regulatory affairs or policy analysis experience', 'Strong research and analytical skills', 'Ability to synthesize complex regulatory information', 'Excellent written communication and report writing'],
      preferred: ['AI/ML regulatory policy interest or coursework', 'Knowledge of FDA AI/ML action plan', 'Experience with regulatory databases (FDA MAUDE, EUDAMED)'],
      benefits: ['Competitive salary', 'Stay at the frontier of AI regulation', 'Career growth into regulatory strategy']
    },

    // Commercial & Growth
    {
      id: 'com-01', title: 'Enterprise Sales Manager', department: 'Commercial & Growth', deptIcon: 'storefront', deptColor: '#00695c',
      location: 'Stockholm', workModel: 'Remote', type: 'Full-time', level: 'Manager',
      description: 'Drive enterprise sales of Skolyn\'s diagnostic platform to hospitals, health systems, and radiology groups across Europe and the Nordics.',
      responsibilities: ['Build and manage enterprise sales pipeline', 'Conduct product demonstrations and clinical value presentations', 'Negotiate multi-year SaaS contracts with hospital IT and radiology leads', 'Develop account plans for key strategic accounts', 'Collaborate with marketing on demand generation campaigns'],
      requirements: ['5+ years B2B enterprise sales experience', '2+ years in health tech, medical devices, or hospital IT', 'Track record of closing $100K+ deals', 'Strong presentation and negotiation skills', 'CRM proficiency (Salesforce or HubSpot)'],
      preferred: ['Radiology or diagnostic imaging sales experience', 'Nordic/European healthcare market knowledge', 'Medical device sales experience'],
      benefits: ['Competitive base + uncapped commission + equity', 'Build the commercial function from early stage', 'International market exposure']
    },
    {
      id: 'com-02', title: 'Marketing Manager', department: 'Commercial & Growth', deptIcon: 'storefront', deptColor: '#00695c',
      location: 'Baku', workModel: 'Remote', type: 'Full-time', level: 'Manager',
      description: 'Lead Skolyn\'s marketing strategy, building brand awareness, driving demand generation, and positioning Skolyn as the leading medical imaging AI company.',
      responsibilities: ['Develop and execute go-to-market strategy for new module launches', 'Create content marketing programs (blog, whitepapers, case studies)', 'Manage digital marketing channels (SEO, SEM, social media)', 'Organize and represent Skolyn at medical conferences (RSNA, ECR)', 'Build and nurture community of clinical champions'],
      requirements: ['5+ years B2B marketing experience', 'Experience in health tech, SaaS, or medical devices', 'Strong content creation and copywriting skills', 'Data-driven approach with marketing analytics proficiency', 'Experience with marketing automation (HubSpot, Marketo)'],
      preferred: ['Medical device or health AI marketing experience', 'Conference and event marketing experience', 'Clinical audience marketing knowledge'],
      benefits: ['Competitive salary + equity', 'Shape the brand of a category-defining company', 'Conference travel to RSNA, ECR, HIMSS']
    },
    {
      id: 'com-03', title: 'Customer Success Manager', department: 'Commercial & Growth', deptIcon: 'storefront', deptColor: '#00695c',
      location: 'Baku', workModel: 'Remote', type: 'Full-time', level: 'Mid',
      description: 'Ensure successful deployment, adoption, and expansion of Skolyn\'s diagnostic platform at customer hospital sites. Build lasting relationships with clinical champions.',
      responsibilities: ['Manage onboarding and deployment at new customer sites', 'Monitor platform adoption and clinical utilization metrics', 'Conduct quarterly business reviews with key accounts', 'Identify expansion and upsell opportunities', 'Serve as voice of the customer to product and engineering teams'],
      requirements: ['3+ years customer success or account management experience', 'Health tech or SaaS experience', 'Strong analytical skills with data-driven approach', 'Excellent communication and relationship management', 'Technical aptitude to understand software deployment'],
      preferred: ['Hospital IT or radiology workflow knowledge', 'Experience with clinical software implementations', 'Project management certification'],
      benefits: ['Competitive salary + equity', 'Direct clinical impact through deployment support', 'Cross-functional collaboration']
    },
    {
      id: 'com-04', title: 'Business Development Representative', department: 'Commercial & Growth', deptIcon: 'storefront', deptColor: '#00695c',
      location: 'Baku', workModel: 'Remote', type: 'Full-time', level: 'Junior',
      description: 'Generate qualified sales pipeline through outbound prospecting, cold outreach, and lead qualification targeting hospital radiology departments and health systems across Europe.',
      responsibilities: ['Execute outbound prospecting campaigns via email, phone, and LinkedIn', 'Qualify inbound marketing leads and schedule product demonstrations', 'Research target accounts and identify key decision makers', 'Maintain CRM hygiene and pipeline tracking in HubSpot', 'Collaborate with marketing on ABM campaigns and event follow-up'],
      requirements: ['BSc in Business, Marketing, or related field', '1+ years SDR/BDR or inside sales experience', 'Excellent communication and interpersonal skills', 'CRM experience (HubSpot or Salesforce)', 'Self-motivated with strong work ethic'],
      preferred: ['Health tech or SaaS sales experience', 'Multi-lingual skills (English + European languages)', 'Experience with sales engagement tools (Outreach, Apollo)'],
      benefits: ['Competitive base + performance bonus', 'Clear career path to Account Executive', 'Sales training and mentorship program']
    },
    {
      id: 'com-05', title: 'Partnerships Manager', department: 'Commercial & Growth', deptIcon: 'storefront', deptColor: '#00695c',
      location: 'Stockholm', workModel: 'Hybrid', type: 'Full-time', level: 'Senior',
      description: 'Build and manage strategic partnerships with PACS vendors, EHR platforms, cloud providers, and distribution partners to accelerate Skolyn platform adoption worldwide.',
      responsibilities: ['Identify, evaluate, and negotiate strategic technology partnerships', 'Manage relationships with PACS/RIS vendors (Philips, Siemens, GE)', 'Develop co-marketing and co-selling programs with partners', 'Build integration partnerships for marketplace and platform distribution', 'Track partner performance metrics and ROI'],
      requirements: ['5+ years business development or partnerships experience', 'Health tech, medical device, or enterprise SaaS background', 'Strong negotiation and relationship management skills', 'Experience structuring technology partnership agreements', 'Understanding of healthcare IT ecosystem'],
      preferred: ['PACS/RIS vendor relationship experience', 'Cloud marketplace partnership experience (AWS, Azure, GCP)', 'Medical imaging industry network'],
      benefits: ['Competitive salary + equity', 'Shape the go-to-market strategy through partnerships', 'International travel and conference attendance']
    },
    {
      id: 'com-06', title: 'Content Marketing Specialist', department: 'Commercial & Growth', deptIcon: 'storefront', deptColor: '#00695c',
      location: 'Baku', workModel: 'Remote', type: 'Full-time', level: 'Mid',
      description: 'Create compelling content that positions Skolyn as the category leader in medical imaging AI, producing blog posts, whitepapers, case studies, and social media content for clinical and technical audiences.',
      responsibilities: ['Write blog posts, whitepapers, and clinical case studies', 'Develop SEO-optimized content for organic traffic growth', 'Create social media content strategy across LinkedIn, Twitter, and YouTube', 'Produce email nurture sequences and newsletter content', 'Collaborate with clinical and research teams on thought-leadership pieces'],
      requirements: ['3+ years B2B content marketing experience', 'Strong writing and editing skills for technical audiences', 'SEO knowledge and content analytics proficiency', 'Experience with CMS platforms and marketing automation', 'Ability to translate complex technical topics into engaging narratives'],
      preferred: ['Health tech or medical device content experience', 'Experience writing for clinical audiences (radiologists, clinicians)', 'Video content production skills'],
      benefits: ['Competitive salary + equity', 'Shape the voice of a category-defining brand', 'Work with world-class clinical and AI content']
    },
    {
      id: 'com-07', title: 'Solutions Engineer', department: 'Commercial & Growth', deptIcon: 'storefront', deptColor: '#00695c',
      location: 'Baku', workModel: 'Remote', type: 'Full-time', level: 'Mid',
      description: 'Support the sales team with technical product demonstrations, proof-of-concept deployments, and technical objection handling for hospital IT and radiology prospects.',
      responsibilities: ['Conduct live product demonstrations and technical presentations', 'Design and manage proof-of-concept deployments at prospect sites', 'Answer technical questions on DICOM/PACS integration and deployment', 'Create custom demo environments and integration scenarios', 'Provide technical input for RFP/RFI responses'],
      requirements: ['BSc in Computer Science, Biomedical Engineering, or related field', '3+ years solutions engineering or technical pre-sales experience', 'Understanding of healthcare IT (DICOM, HL7, FHIR)', 'Strong presentation and communication skills', 'Ability to build and maintain demo environments'],
      preferred: ['Medical imaging or PACS integration experience', 'Experience with cloud deployment architectures', 'Clinical workflow understanding'],
      benefits: ['Competitive salary + equity', 'Bridge clinical and technical innovation', 'Customer-facing travel opportunities']
    },
    {
      id: 'com-08', title: 'Growth Marketing Analyst', department: 'Commercial & Growth', deptIcon: 'storefront', deptColor: '#00695c',
      location: 'Baku', workModel: 'Remote', type: 'Full-time', level: 'Junior',
      description: 'Analyze marketing performance data, optimize campaign ROI, and build data-driven growth strategies to accelerate demand generation and pipeline creation for the sales team.',
      responsibilities: ['Track and analyze marketing campaign performance metrics', 'Build marketing attribution models and pipeline reporting', 'Optimize paid advertising campaigns (Google Ads, LinkedIn Ads)', 'Create A/B testing programs for landing pages and email campaigns', 'Maintain marketing analytics dashboards and weekly reports'],
      requirements: ['BSc in Marketing, Analytics, or related field', '1+ years marketing analytics or growth marketing experience', 'Proficient in Google Analytics, HubSpot, and Excel', 'Understanding of B2B marketing funnels and attribution', 'Analytical mindset with data visualization skills'],
      preferred: ['Health tech or SaaS marketing analytics experience', 'SQL skills for custom reporting', 'Experience with marketing mix modeling'],
      benefits: ['Competitive salary', 'Data-driven marketing culture', 'Career growth into senior marketing roles']
    },
    {
      id: 'com-09', title: 'Head of Sales', department: 'Commercial & Growth', deptIcon: 'storefront', deptColor: '#00695c',
      location: 'Stockholm', workModel: 'Hybrid', type: 'Full-time', level: 'Lead',
      description: 'Build and lead the sales organization from the ground up, developing go-to-market strategy, sales playbook, hiring and coaching the team, and driving revenue growth across European markets.',
      responsibilities: ['Define and execute the go-to-market sales strategy', 'Build, hire, and coach the sales team from 3 to 12+ reps', 'Develop sales playbook, pricing strategy, and deal qualification framework', 'Own revenue targets and pipeline forecasting', 'Report directly to CEO on commercial KPIs and market expansion'],
      requirements: ['8+ years B2B enterprise sales experience with 3+ years in leadership', 'Track record building sales teams at early-stage companies', 'Health tech, medical device, or enterprise SaaS sales background', 'Experience selling to hospital C-suite and department heads', 'Strong coaching, forecasting, and CRM management skills'],
      preferred: ['Medical imaging or radiology sales leadership', 'Nordic/European healthcare market expertise', 'Experience scaling revenue from $0 to $10M+ ARR'],
      benefits: ['Competitive salary + significant equity', 'Build the commercial function from scratch', 'Direct report to CEO with board visibility']
    },
    {
      id: 'com-10', title: 'Commercial Operations Intern', department: 'Commercial & Growth', deptIcon: 'storefront', deptColor: '#00695c',
      location: 'Baku', workModel: 'On-site', type: 'Internship', level: 'Intern',
      description: 'Support the commercial team with CRM data management, market research, sales materials preparation, and campaign analysis during a 6-month internship.',
      responsibilities: ['Maintain CRM data quality and update prospect records', 'Conduct market research on target hospital segments', 'Assist with preparation of sales presentations and proposals', 'Support marketing campaigns with content and analytics', 'Help organize conference logistics and event materials'],
      requirements: ['Currently pursuing BSc/MSc in Business, Marketing, or related field', 'Interest in health tech and B2B sales', 'Strong organizational and research skills', 'Proficient in Microsoft Office and presentation tools'],
      preferred: ['Prior internship in sales or marketing', 'Familiarity with CRM tools', 'Multi-lingual skills'],
      benefits: ['Competitive internship stipend', 'Commercial mentorship and training', 'Potential full-time conversion']
    },

    // Finance & Accounting
    {
      id: 'fin-01', title: 'Senior Financial Analyst', department: 'Finance & Accounting', deptIcon: 'account_balance', deptColor: '#185abc',
      location: 'Baku', workModel: 'On-site', type: 'Full-time', level: 'Senior',
      description: 'Drive financial planning, analysis, and reporting for a Series A medical AI company. Build multi-year financial models and support investor relations.',
      responsibilities: ['Build and maintain multi-year financial models', 'Prepare monthly financial reports and variance analysis', 'Support investor relations with quarterly updates and board decks', 'Analyze unit economics (CAC, LTV, burn multiple)', 'Collaborate on annual budgeting and quarterly forecasting'],
      requirements: ['BSc in Finance, Accounting, or Economics', '4+ years financial analysis or FP&A experience', 'Expert Excel/Google Sheets modeling skills', 'Experience with financial reporting (IFRS preferred)', 'Strong analytical and communication skills'],
      preferred: ['Startup or venture-backed company experience', 'Health tech or SaaS financial modeling', 'CFA or CPA certification'],
      benefits: ['Competitive salary + equity', 'High-visibility role with board exposure', 'Shape financial strategy at an early stage']
    },
    {
      id: 'fin-02', title: 'Grant & Funding Manager', department: 'Finance & Accounting', deptIcon: 'account_balance', deptColor: '#185abc',
      location: 'Baku', workModel: 'Hybrid', type: 'Full-time', level: 'Mid',
      description: 'Identify, apply for, and manage research grants and innovation funding from EU Horizon, Swedish Vinnova, and other innovation programs to support Skolyn\'s R&D.',
      responsibilities: ['Identify and evaluate grant opportunities (EU Horizon, Vinnova)', 'Write and submit grant applications with research teams', 'Manage post-award grant administration and reporting', 'Track grant budgets and milestones', 'Build relationships with funding bodies and innovation agencies'],
      requirements: ['BSc/MSc in business, science, or related field', '3+ years grant management or research funding experience', 'Experience with EU Horizon or national innovation grants', 'Strong technical writing and project management skills', 'Budget management and financial reporting ability'],
      preferred: ['Health tech or medical device grant experience', 'Experience with Swedish/Nordic funding programs', 'Knowledge of state aid regulations'],
      benefits: ['Competitive salary + equity', 'Direct impact on R&D funding pipeline', 'International grant and funding exposure']
    },
    {
      id: 'fin-03', title: 'Controller', department: 'Finance & Accounting', deptIcon: 'account_balance', deptColor: '#185abc',
      location: 'Baku', workModel: 'On-site', type: 'Full-time', level: 'Senior',
      description: 'Oversee all accounting operations including GL management, month-end close, financial reporting, and audit preparation for a fast-growing Series A medical AI company.',
      responsibilities: ['Manage monthly, quarterly, and annual close processes', 'Oversee general ledger, accounts payable, and accounts receivable', 'Prepare financial statements in compliance with IFRS', 'Coordinate external audit and statutory reporting requirements', 'Implement and maintain internal financial controls'],
      requirements: ['BSc/MSc in Accounting or Finance', '6+ years accounting experience with 2+ years in a controller role', 'CPA, ACCA, or equivalent professional certification', 'Experience with IFRS financial reporting', 'Strong knowledge of internal controls and audit preparation'],
      preferred: ['Startup or venture-backed company experience', 'Multi-entity and multi-currency accounting', 'Experience with NetSuite, Xero, or similar ERP'],
      benefits: ['Competitive salary + equity', 'Build the finance function from early stage', 'Direct interaction with investors and board']
    },
    {
      id: 'fin-04', title: 'Revenue Operations Analyst', department: 'Finance & Accounting', deptIcon: 'account_balance', deptColor: '#185abc',
      location: 'Baku', workModel: 'Remote', type: 'Full-time', level: 'Mid',
      description: 'Build and maintain revenue operations infrastructure, aligning sales, marketing, and customer success data to drive predictable revenue growth and accurate forecasting.',
      responsibilities: ['Build and maintain revenue dashboards and pipeline analytics', 'Implement and optimize CRM workflows and data quality standards', 'Develop sales forecasting models and quota-setting frameworks', 'Analyze conversion rates, sales velocity, and deal cycle metrics', 'Support territory planning and commission calculations'],
      requirements: ['BSc in Business, Finance, or Data Analytics', '2+ years revenue operations, sales operations, or FP&A experience', 'Advanced Excel/Google Sheets and SQL skills', 'Experience with CRM analytics (Salesforce or HubSpot)', 'Strong data analysis and visualization skills'],
      preferred: ['SaaS revenue operations experience', 'Experience with BI tools (Looker, Tableau)', 'Knowledge of ASC 606 revenue recognition'],
      benefits: ['Competitive salary + equity', 'Cross-functional impact on revenue growth', 'Build RevOps from the ground up']
    },
    {
      id: 'fin-05', title: 'Payroll & Benefits Administrator', department: 'Finance & Accounting', deptIcon: 'account_balance', deptColor: '#185abc',
      location: 'Baku', workModel: 'On-site', type: 'Full-time', level: 'Junior',
      description: 'Manage payroll processing, benefits administration, and employee compensation programs across Skolyn offices in Azerbaijan and Sweden.',
      responsibilities: ['Process semi-monthly payroll for Baku and Stockholm offices', 'Administer employee benefits (health, dental, vision, equity)', 'Manage employee onboarding and offboarding in payroll systems', 'Ensure compliance with local tax and labor regulations', 'Handle employee expense reimbursements and travel claims'],
      requirements: ['BSc in Accounting, HR, or Business Administration', '1+ years payroll or HR administration experience', 'Knowledge of payroll tax requirements', 'Strong attention to detail and confidentiality', 'Proficiency with payroll software'],
      preferred: ['Multi-country payroll experience', 'Knowledge of Swedish and Azerbaijani labor law', 'Experience with equity compensation administration'],
      benefits: ['Competitive salary', 'Full benefits package', 'Career growth into HR or finance leadership']
    },
    {
      id: 'fin-06', title: 'Head of Finance', department: 'Finance & Accounting', deptIcon: 'account_balance', deptColor: '#185abc',
      location: 'Baku', workModel: 'Hybrid', type: 'Full-time', level: 'Lead',
      description: 'Lead the finance function end-to-end, from financial planning and fundraising support to treasury management and audit oversight, reporting directly to the CEO.',
      responsibilities: ['Own financial strategy, planning, and capital allocation', 'Lead fundraising processes including Series B preparation', 'Manage investor relations, board reporting, and cap table', 'Oversee treasury, cash flow management, and banking relationships', 'Build and lead the finance team from 3 to 8+ members'],
      requirements: ['BSc/MSc in Finance or MBA', '8+ years finance experience with 3+ years in leadership', 'Experience at venture-backed startups through Series B+', 'Strong financial modeling and investor relations skills', 'CPA, CFA, or equivalent certification'],
      preferred: ['Health tech or SaaS finance leadership', 'Fundraising and M&A transaction experience', 'Multi-currency and international finance'],
      benefits: ['Competitive salary + significant equity', 'Build finance function with board-level impact', 'Direct report to CEO']
    },
    {
      id: 'fin-07', title: 'Tax & Compliance Analyst', department: 'Finance & Accounting', deptIcon: 'account_balance', deptColor: '#185abc',
      location: 'Baku', workModel: 'On-site', type: 'Full-time', level: 'Mid',
      description: 'Manage tax compliance, transfer pricing, and regulatory financial reporting across Skolyn entities in Azerbaijan, Sweden, and the US.',
      responsibilities: ['Prepare and file corporate tax returns for multiple jurisdictions', 'Manage transfer pricing documentation and intercompany transactions', 'Ensure VAT/GST compliance across operating territories', 'Support R&D tax credit applications and incentive programs', 'Monitor changes in tax legislation and advise on implications'],
      requirements: ['BSc/MSc in Accounting, Tax, or Finance', '3+ years corporate tax experience', 'Knowledge of international tax and transfer pricing principles', 'Experience with multi-jurisdictional tax compliance', 'Strong analytical and documentation skills'],
      preferred: ['Technology or health tech industry tax experience', 'Knowledge of Azerbaijani and Swedish tax systems', 'Transfer pricing benchmarking experience'],
      benefits: ['Competitive salary + equity', 'International tax exposure', 'Professional development and certification support']
    },
    {
      id: 'fin-08', title: 'Procurement & Vendor Manager', department: 'Finance & Accounting', deptIcon: 'account_balance', deptColor: '#185abc',
      location: 'Baku', workModel: 'On-site', type: 'Full-time', level: 'Mid',
      description: 'Manage procurement processes, vendor relationships, and contract negotiations for Skolyn, optimizing spend across cloud infrastructure, software licenses, and professional services.',
      responsibilities: ['Manage end-to-end procurement process from RFP to PO', 'Negotiate vendor contracts and optimize commercial terms', 'Build and maintain approved vendor list and onboarding process', 'Track and optimize cloud infrastructure and software license spend', 'Conduct annual vendor performance reviews and renewals'],
      requirements: ['BSc in Business, Supply Chain, or related field', '3+ years procurement or vendor management experience', 'Strong negotiation and contract management skills', 'Experience with SaaS and cloud procurement', 'Analytical skills for spend analysis and optimization'],
      preferred: ['Technology or health tech procurement experience', 'Knowledge of cloud cost optimization (GCP, Azure, AWS)', 'CPSM or similar procurement certification'],
      benefits: ['Competitive salary + equity', 'Shape procurement strategy for a growing company', 'Direct impact on operational efficiency']
    },
    {
      id: 'fin-09', title: 'Accounts Payable / Receivable Specialist', department: 'Finance & Accounting', deptIcon: 'account_balance', deptColor: '#185abc',
      location: 'Baku', workModel: 'On-site', type: 'Full-time', level: 'Junior',
      description: 'Manage day-to-day accounts payable and receivable processes, ensuring timely vendor payments, customer invoicing, and accurate financial record-keeping.',
      responsibilities: ['Process vendor invoices and manage payment schedules', 'Generate customer invoices and track collections', 'Perform bank reconciliations and cash application', 'Maintain vendor and customer master data', 'Support month-end close with AP/AR accruals and reports'],
      requirements: ['BSc in Accounting or Finance', '1+ years AP/AR or general accounting experience', 'Proficient in accounting software (QuickBooks, Xero, or NetSuite)', 'Strong attention to detail and organizational skills', 'Excel proficiency for data reconciliation'],
      preferred: ['SaaS subscription billing experience', 'Multi-currency transaction experience', 'Experience with expense management tools'],
      benefits: ['Competitive salary', 'Hands-on accounting experience at a growing startup', 'Career path into senior finance roles']
    },
    {
      id: 'fin-10', title: 'Finance & Accounting Intern', department: 'Finance & Accounting', deptIcon: 'account_balance', deptColor: '#185abc',
      location: 'Baku', workModel: 'On-site', type: 'Internship', level: 'Intern',
      description: 'Support the finance team with data entry, reconciliation tasks, financial report preparation, and special projects during a 6-month internship.',
      responsibilities: ['Assist with data entry and transaction categorization', 'Support monthly bank and account reconciliations', 'Help prepare financial reports and presentations', 'Assist with expense report processing and auditing', 'Support special finance projects and analysis'],
      requirements: ['Currently pursuing BSc in Accounting, Finance, or Economics', 'Interest in startup finance and health tech', 'Strong Excel and numeracy skills', 'Attention to detail and organized approach'],
      preferred: ['Completed introductory accounting coursework', 'Prior office or administrative internship', 'Familiarity with accounting software'],
      benefits: ['Competitive internship stipend', 'Mentorship from senior finance leaders', 'Potential full-time conversion']
    },

    // Legal & Compliance
    {
      id: 'legal-01', title: 'Privacy & Data Protection Counsel', department: 'Legal & Compliance', deptIcon: 'gavel', deptColor: '#0d652d',
      location: 'Baku', workModel: 'Hybrid', type: 'Full-time', level: 'Senior',
      description: 'Lead Skolyn\'s data privacy and protection program across GDPR, HIPAA, and international frameworks. Advise on compliant data handling for medical AI systems.',
      responsibilities: ['Develop and maintain GDPR and HIPAA compliance programs', 'Conduct Data Protection Impact Assessments (DPIAs)', 'Draft and negotiate data processing agreements and BAAs', 'Advise engineering teams on privacy-by-design implementation', 'Manage data subject access requests and breach notification'],
      requirements: ['JD or LLM with focus on data protection law', '5+ years data privacy legal experience', 'Deep knowledge of GDPR and HIPAA', 'Experience with DPIAs and records of processing', 'Understanding of AI and health data processing'],
      preferred: ['EU AI Act compliance experience', 'CIPP/E or CIPM certification', 'Medical device data protection experience'],
      benefits: ['Competitive salary + equity', 'Shape privacy program for a medical AI company', 'Multi-jurisdictional legal experience']
    },
    {
      id: 'legal-02', title: 'Commercial Contracts Manager', department: 'Legal & Compliance', deptIcon: 'gavel', deptColor: '#0d652d',
      location: 'Baku', workModel: 'Remote', type: 'Full-time', level: 'Mid',
      description: 'Manage the full lifecycle of commercial contracts — SaaS agreements, licensing, NDAs, and vendor procurement — supporting Skolyn\'s sales and partnerships teams.',
      responsibilities: ['Draft and negotiate SaaS, licensing, and NDA agreements', 'Manage contract lifecycle from initiation to renewal', 'Maintain contract playbook and template library', 'Support sales team with contract negotiations', 'Track contract milestones and renewal deadlines'],
      requirements: ['LLB/JD or equivalent legal qualification', '3+ years commercial contracts experience', 'Experience with SaaS or technology licensing agreements', 'Strong negotiation and drafting skills', 'Contract management tool proficiency'],
      preferred: ['Health tech or medical device contract experience', 'Experience with international commercial agreements', 'Knowledge of HIPAA BAAs and data processing agreements'],
      benefits: ['Competitive salary + equity', 'Support a fast-growing commercial function', 'International contract experience']
    },
    {
      id: 'legal-03', title: 'IP & Patent Counsel', department: 'Legal & Compliance', deptIcon: 'gavel', deptColor: '#0d652d',
      location: 'Baku', workModel: 'Hybrid', type: 'Full-time', level: 'Senior',
      description: 'Develop and manage Skolyn\'s intellectual property portfolio, including patent prosecution, trade secret protection, and IP licensing for AI diagnostic inventions.',
      responsibilities: ['Manage patent portfolio strategy for AI diagnostic inventions', 'Draft and file patent applications with external patent counsel', 'Conduct freedom-to-operate analyses and IP due diligence', 'Advise R&D teams on invention disclosure and trade secret protection', 'Negotiate IP licensing and technology transfer agreements'],
      requirements: ['JD with patent bar admission or PhD in Computer Science/Engineering', '5+ years IP or patent law experience', 'Experience with software and AI/ML patent prosecution', 'Knowledge of international patent filing strategies', 'Understanding of open-source licensing implications'],
      preferred: ['Medical device or health tech IP experience', 'Patent portfolio management for AI companies', 'Experience with university technology transfer'],
      benefits: ['Competitive salary + equity', 'Build IP strategy for frontier medical AI', 'Protect world-class AI research innovations']
    },
    {
      id: 'legal-04', title: 'Compliance Manager', department: 'Legal & Compliance', deptIcon: 'gavel', deptColor: '#0d652d',
      location: 'Baku', workModel: 'Hybrid', type: 'Full-time', level: 'Manager',
      description: 'Build and manage Skolyn\'s corporate compliance program, ensuring adherence to healthcare regulations, anti-corruption laws, and ethical business practices across all operations.',
      responsibilities: ['Develop and maintain corporate compliance policies and procedures', 'Manage compliance training programs for all employees', 'Conduct compliance risk assessments and internal investigations', 'Monitor adherence to healthcare fraud and abuse laws (Anti-Kickback, Stark)', 'Serve as the designated compliance officer and manage reporting hotline'],
      requirements: ['JD, LLM, or MSc in Compliance or related field', '5+ years compliance or regulatory experience', 'Knowledge of healthcare compliance frameworks (OIG, DOJ)', 'Experience building compliance programs from the ground up', 'Strong investigation and reporting skills'],
      preferred: ['Healthcare or medical device compliance experience', 'CCEP or CHC certification', 'Experience with EU whistleblower directive compliance'],
      benefits: ['Competitive salary + equity', 'Build compliance function from scratch', 'Shape ethical culture at a mission-driven company']
    },
    {
      id: 'legal-05', title: 'Employment & Labor Counsel', department: 'Legal & Compliance', deptIcon: 'gavel', deptColor: '#0d652d',
      location: 'Baku', workModel: 'Remote', type: 'Full-time', level: 'Mid',
      description: 'Advise on employment law matters across Skolyn offices in Azerbaijan, Sweden, and remote employees globally, covering hiring, compensation, termination, and workplace policies.',
      responsibilities: ['Advise on employment law compliance across multiple jurisdictions', 'Draft and review employment contracts, offer letters, and policies', 'Manage immigration and work permit processes for international hires', 'Support employee relations issues and internal investigations', 'Ensure compliance with local labor laws and workplace regulations'],
      requirements: ['LLB/JD or equivalent legal qualification', '3+ years employment or labor law experience', 'Knowledge of employment law in at least 2 jurisdictions', 'Experience drafting employment contracts and workplace policies', 'Strong counseling and communication skills'],
      preferred: ['Multi-jurisdictional employment law experience', 'Knowledge of Swedish labor law and collective agreements', 'Experience with remote workforce legal considerations'],
      benefits: ['Competitive salary + equity', 'International employment law exposure', 'Shape people policies at a mission-driven company']
    },
    {
      id: 'legal-06', title: 'Corporate Counsel', department: 'Legal & Compliance', deptIcon: 'gavel', deptColor: '#0d652d',
      location: 'Baku', workModel: 'Hybrid', type: 'Full-time', level: 'Senior',
      description: 'Serve as general corporate counsel, advising on corporate governance, equity transactions, fundraising, M&A, and cross-border corporate structuring for Skolyn\'s global operations.',
      responsibilities: ['Advise on corporate governance, board matters, and equity transactions', 'Support fundraising rounds (SAFE, convertible notes, equity rounds)', 'Manage corporate entity structuring across jurisdictions', 'Draft and negotiate investment documents and shareholder agreements', 'Provide legal guidance on M&A, partnerships, and joint ventures'],
      requirements: ['JD or LLM with corporate law focus', '5+ years corporate or transactional law experience', 'Experience with venture capital transactions and startup governance', 'Knowledge of cross-border corporate structuring', 'Strong drafting and negotiation skills'],
      preferred: ['Health tech or technology startup experience', 'Experience with Swedish AB and Azerbaijani LLC structures', 'M&A and exit transaction experience'],
      benefits: ['Competitive salary + equity', 'Board-level legal advisory role', 'Shape corporate strategy at an early stage']
    },
    {
      id: 'legal-07', title: 'AI Ethics & Governance Counsel', department: 'Legal & Compliance', deptIcon: 'gavel', deptColor: '#0d652d',
      location: 'Stockholm', workModel: 'Hybrid', type: 'Full-time', level: 'Senior',
      description: 'Develop and implement Skolyn\'s AI ethics and governance framework, ensuring compliance with the EU AI Act, advising on responsible AI practices, and managing AI-specific legal risks.',
      responsibilities: ['Develop AI governance policies and ethical AI guidelines', 'Ensure compliance with EU AI Act requirements for high-risk AI systems', 'Conduct AI impact assessments and algorithmic auditing oversight', 'Advise product teams on responsible AI development practices', 'Represent Skolyn in AI governance industry groups and regulatory consultations'],
      requirements: ['JD, LLM, or PhD with focus on AI law or technology policy', '5+ years technology law or AI governance experience', 'Deep knowledge of EU AI Act and international AI governance frameworks', 'Understanding of AI/ML systems and associated legal risks', 'Strong policy analysis and stakeholder communication skills'],
      preferred: ['Healthcare AI governance experience', 'Published work on AI regulation or ethics', 'Experience with conformity assessments for high-risk AI'],
      benefits: ['Competitive salary + equity', 'Pioneer AI governance in medical diagnostics', 'Industry thought leadership in AI ethics']
    },
    {
      id: 'legal-08', title: 'Regulatory Compliance Coordinator', department: 'Legal & Compliance', deptIcon: 'gavel', deptColor: '#0d652d',
      location: 'Baku', workModel: 'On-site', type: 'Full-time', level: 'Junior',
      description: 'Support compliance operations including policy maintenance, training coordination, compliance monitoring, and audit preparation across the organization.',
      responsibilities: ['Maintain compliance policy document library and version control', 'Coordinate and track compliance training completion across departments', 'Monitor regulatory changes and update compliance requirements', 'Support internal and external audit preparation and documentation', 'Manage compliance incident tracking and reporting'],
      requirements: ['BSc in Law, Business, or Public Administration', '1+ years compliance, legal, or administrative experience', 'Strong organizational and documentation skills', 'Attention to detail and ability to manage multiple tasks', 'Proficiency with document management and tracking tools'],
      preferred: ['Healthcare or medical device compliance exposure', 'Familiarity with ISO 13485 or ISO 27001', 'Prior audit support experience'],
      benefits: ['Competitive salary', 'Foundation role in compliance operations', 'Career path into compliance management']
    },
    {
      id: 'legal-09', title: 'Head of Legal', department: 'Legal & Compliance', deptIcon: 'gavel', deptColor: '#0d652d',
      location: 'Baku', workModel: 'Hybrid', type: 'Full-time', level: 'Lead',
      description: 'Build and lead the legal function, managing all legal matters including corporate governance, IP, data privacy, commercial contracts, compliance, and employment law, reporting directly to the CEO.',
      responsibilities: ['Build and lead the legal team from 2 to 6+ members', 'Set legal strategy aligned with company growth objectives', 'Manage outside counsel relationships and legal budget', 'Advise executive team and board on legal risk and strategy', 'Oversee all legal workstreams: corporate, IP, privacy, employment, commercial'],
      requirements: ['JD or LLM from a top law school', '10+ years legal experience with 3+ years leading legal teams', 'Broad experience across corporate, IP, and commercial law', 'Technology or health tech industry background', 'Strong leadership, communication, and business judgment'],
      preferred: ['Medical device or SaaS company GC experience', 'Fundraising and M&A legal leadership', 'Experience building legal teams at startups'],
      benefits: ['Competitive salary + significant equity', 'Build the legal function from scratch', 'Direct report to CEO with board visibility']
    },
    {
      id: 'legal-10', title: 'Legal & Compliance Intern', department: 'Legal & Compliance', deptIcon: 'gavel', deptColor: '#0d652d',
      location: 'Baku', workModel: 'On-site', type: 'Internship', level: 'Intern',
      description: 'Support the legal team with contract review, legal research, compliance documentation, and administrative tasks during a 6-month internship.',
      responsibilities: ['Assist with contract review and redlining', 'Conduct legal research on regulatory and compliance topics', 'Help maintain corporate legal records and filing systems', 'Support data privacy compliance documentation', 'Assist with compliance training material preparation'],
      requirements: ['Currently pursuing LLB/JD or BSc in Law', 'Interest in health tech, data privacy, or AI governance', 'Strong research and writing skills', 'Attention to detail and organized approach'],
      preferred: ['Completed data protection or IP law coursework', 'Prior legal internship or clinic experience', 'Familiarity with contract management tools'],
      benefits: ['Competitive internship stipend', 'Mentorship from experienced legal professionals', 'Potential full-time conversion']
    },

  ];

  toggle(set: Set<string>, val: string) {
    set.has(val) ? set.delete(val) : set.add(val);
  }

  get hasActiveFilters(): boolean {
    return this.selDepts.size > 0 || this.selLocations.size > 0 || this.selWorkModels.size > 0 || this.selTypes.size > 0 || this.selLevels.size > 0;
  }

  clearFilters() {
    this.selDepts.clear(); this.selLocations.clear(); this.selWorkModels.clear(); this.selTypes.clear(); this.selLevels.clear();
  }

  get filteredJobs(): JobListing[] {
    return this.jobs.filter(j =>
      (this.selDepts.size === 0 || this.selDepts.has(j.department)) &&
      (this.selLocations.size === 0 || this.selLocations.has(j.location)) &&
      (this.selWorkModels.size === 0 || this.selWorkModels.has(j.workModel)) &&
      (this.selTypes.size === 0 || this.selTypes.has(j.type)) &&
      (this.selLevels.size === 0 || this.selLevels.has(j.level))
    );
  }

  toggleJob(id: string) {
    this.expandedJob = this.expandedJob === id ? null : id;
  }

  private readonly applyApiUrl = `${environment.apiUrl}/api/apply`;
  isSubmittingApplication = false;
  
  private toastService = inject(ToastService);
  private dialogService = inject(DialogService);

  async submitApplication(jobId: string) {
    if (this.isSubmittingApplication) return;

    const val = (id: string) => (document.getElementById(id) as HTMLInputElement)?.value?.trim() ?? '';
    const fileInput = document.getElementById('resume-' + jobId) as HTMLInputElement;
    const file = fileInput?.files?.[0];

    if (!file) {
      this.toastService.show('Please attach your resume to continue.', 'error', 5000);
      return;
    }

    const payload = {
      jobId,
      firstName: val('fname-' + jobId),
      lastName: val('lname-' + jobId),
      email: val('email-' + jobId),
      phone: val('phone-' + jobId),
      linkedin: val('linkedin-' + jobId),
      coverLetter: val('cover-' + jobId),
      portfolio: val('portfolio-' + jobId),
      resumeFileName: file.name,
    };

    this.isSubmittingApplication = true;

    try {
      const res = await fetch(this.applyApiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: 'Submission failed' }));
        throw new Error(err.error || 'Submission failed');
      }

      const data = await res.json();

      // Upload resume to S3 via presigned URL.
      if (data.resumeUploadUrl) {
        const uploadRes = await fetch(data.resumeUploadUrl, {
          method: 'PUT',
          body: file,
        });
        if (!uploadRes.ok) {
          throw new Error('Resume upload failed. Please try again.');
        }
      }

      // Reset the form and close the accordion
      const formElement = document.getElementById('form-' + jobId) as HTMLFormElement;
      if (formElement) formElement.reset();
      this.expandedJob = null;

      // Trigger the global Dialog success message
      this.dialogService.open({
        title: 'Application Received',
        message: 'Thank you! Your application has been submitted successfully to the Skolyn Talent team. We will review your profile and get back to you within 2 weeks.',
        confirmText: 'Got it',
        icon: 'check_circle',
        iconColor: '#1e8e3e'
      });
      
    } catch (error: any) {
      console.error('Application submission failed:', error);
      this.toastService.show(error?.message || 'We could not submit your application right now. Please try again shortly.', 'error', 6000);
    } finally {
      this.isSubmittingApplication = false;
    }
  }
}
