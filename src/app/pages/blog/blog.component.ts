import { Component, signal, computed } from '@angular/core';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  icon: string;
  color: string;
  author: string;
  content: string;
}

@Component({
  selector: 'app-blog',
  imports: [],
  template: `
    @if (selectedPost()) {
      <!-- Article Detail View -->
      <section class="page-hero article-hero">
        <div class="container">
          <button class="back-btn" (click)="selectedPost.set(null)">
            <span class="material-symbols-outlined">arrow_back</span> Back to Blog
          </button>
          <span class="md-chip hero-chip">{{ selectedPost()!.category }}</span>
          <h1 class="display-small animate-in">{{ selectedPost()!.title }}</h1>
          <div class="article-meta animate-in animate-in-delay-1">
            <span><span class="material-symbols-outlined sz-16">person</span> {{ selectedPost()!.author }}</span>
            <span><span class="material-symbols-outlined sz-16">calendar_today</span> {{ selectedPost()!.date }}</span>
            <span><span class="material-symbols-outlined sz-16">schedule</span> {{ selectedPost()!.readTime }}</span>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <article class="article-body" [innerHTML]="selectedPost()!.content"></article>
        </div>
      </section>
    } @else {
      <!-- Blog Listing View -->
      <section class="page-hero">
        <div class="container">
          <div class="hero-label"><span class="material-symbols-outlined sz-20">newspaper</span> Blog & News</div>
          <h1 class="display-medium animate-in">Latest from Skolyn</h1>
          <p class="body-large text-secondary hero-desc animate-in animate-in-delay-1">
            Company updates, research insights, clinical partnerships, and industry perspectives.
          </p>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <!-- Featured Post -->
          <div class="featured-post animate-in" (click)="selectedPost.set(posts[0])">
            <div class="featured-badge"><span class="material-symbols-outlined sz-16">star</span> Featured</div>
            <h2 class="headline-medium">{{ posts[0].title }}</h2>
            <p class="body-large text-secondary">{{ posts[0].excerpt }}</p>
            <div class="post-meta">
              <span class="body-small"><span class="material-symbols-outlined sz-16">person</span> {{ posts[0].author }}</span>
              <span class="body-small"><span class="material-symbols-outlined sz-16">calendar_today</span> {{ posts[0].date }}</span>
              <span class="body-small"><span class="material-symbols-outlined sz-16">schedule</span> {{ posts[0].readTime }}</span>
              <span class="md-chip">{{ posts[0].category }}</span>
            </div>
          </div>

          <!-- Filter -->
          <div class="filter-bar">
            @for (cat of categories; track cat) {
              <button class="filter-chip" [class.active]="activeFilter() === cat" (click)="activeFilter.set(cat)">{{ cat }}</button>
            }
          </div>

          <!-- Posts Grid -->
          <div class="posts-grid">
            @for (post of filteredPosts(); track post.slug) {
              <article class="post-card animate-in" (click)="selectedPost.set(post)">
                <div class="post-icon-area" [style.background]="post.color">
                  <span class="material-symbols-outlined sz-40">{{ post.icon }}</span>
                </div>
                <div class="post-content">
                  <span class="md-chip post-chip">{{ post.category }}</span>
                  <h3 class="title-large">{{ post.title }}</h3>
                  <p class="body-medium text-secondary">{{ post.excerpt }}</p>
                  <div class="post-meta">
                    <span class="body-small"><span class="material-symbols-outlined sz-16">person</span> {{ post.author }}</span>
                    <span class="body-small"><span class="material-symbols-outlined sz-16">calendar_today</span> {{ post.date }}</span>
                    <span class="body-small"><span class="material-symbols-outlined sz-16">schedule</span> {{ post.readTime }}</span>
                  </div>
                </div>
              </article>
            }
          </div>
        </div>
      </section>
    }
  `,
  styles: [`
    .page-hero { padding: 120px 0 64px; background: var(--md-sys-color-surface-container-low); text-align: center; }
    .article-hero { text-align: left; padding-bottom: 48px; }
    .article-hero h1 { max-width: 800px; }
    .hero-label { display: inline-flex; align-items: center; gap: 8px; padding: 6px 16px 6px 12px; background: rgba(26,115,232,0.08); border-radius: var(--md-sys-shape-corner-full); font: var(--md-sys-typescale-label-large); color: var(--md-sys-color-primary); margin-bottom: 24px; }
    .hero-desc { max-width: 640px; margin: 16px auto 0; font-size: 18px; line-height: 28px; }
    .hero-chip { margin-bottom: 16px; }
    .back-btn { display: inline-flex; align-items: center; gap: 6px; padding: 8px 16px; background: transparent; border: 1px solid var(--md-sys-color-outline); border-radius: var(--md-sys-shape-corner-full); cursor: pointer; font: var(--md-sys-typescale-label-large); color: var(--md-sys-color-on-surface); margin-bottom: 24px; transition: all 0.2s; }
    .back-btn:hover { background: var(--md-sys-color-surface-container); border-color: var(--md-sys-color-primary); color: var(--md-sys-color-primary); }
    .article-meta { display: flex; gap: 20px; margin-top: 16px; flex-wrap: wrap; }
    .article-meta span { display: flex; align-items: center; gap: 4px; color: var(--md-sys-color-on-surface-variant); font: var(--md-sys-typescale-body-medium); }
    .article-body { max-width: 800px; font: var(--md-sys-typescale-body-large); line-height: 1.8; color: var(--md-sys-color-on-surface); }
    .article-body h2 { font: var(--md-sys-typescale-headline-small); margin: 40px 0 16px; color: var(--md-sys-color-on-surface); }
    .article-body h3 { font: var(--md-sys-typescale-title-large); margin: 32px 0 12px; color: var(--md-sys-color-on-surface); }
    .article-body p { margin-bottom: 16px; }
    .article-body ul, .article-body ol { margin: 0 0 20px 24px; }
    .article-body li { margin-bottom: 8px; line-height: 1.7; }
    .article-body blockquote { border-left: 4px solid var(--md-sys-color-primary); padding: 16px 24px; background: var(--md-sys-color-primary-container); border-radius: 0 var(--md-sys-shape-corner-medium) var(--md-sys-shape-corner-medium) 0; margin: 24px 0; font-style: italic; }
    .article-body strong { color: var(--md-sys-color-on-surface); }
    .article-body code { background: var(--md-sys-color-surface-container); padding: 2px 8px; border-radius: 4px; font-size: 14px; }
    .featured-post { background: linear-gradient(135deg, var(--md-sys-color-primary-container), #e8f0fe); border-radius: var(--md-sys-shape-corner-extra-large); padding: 48px; margin-bottom: 48px; border: 1px solid var(--md-sys-color-primary); cursor: pointer; transition: all 0.3s; }
    .featured-post:hover { box-shadow: var(--md-sys-elevation-3); transform: translateY(-2px); }
    .featured-badge { display: inline-flex; align-items: center; gap: 4px; padding: 4px 12px; background: var(--md-sys-color-primary); color: var(--md-sys-color-on-primary); border-radius: var(--md-sys-shape-corner-full); font: var(--md-sys-typescale-label-small); margin-bottom: 16px; }
    .featured-post h2 { margin-bottom: 12px; }
    .featured-post p { max-width: 640px; margin-bottom: 16px; }
    .post-meta { display: flex; align-items: center; gap: 16px; flex-wrap: wrap; }
    .post-meta .body-small { display: flex; align-items: center; gap: 4px; color: var(--md-sys-color-on-surface-variant); }
    .filter-bar { display: flex; gap: 8px; margin-bottom: 32px; flex-wrap: wrap; }
    .filter-chip { padding: 8px 20px; border-radius: var(--md-sys-shape-corner-full); border: 1px solid var(--md-sys-color-outline); background: transparent; font: var(--md-sys-typescale-label-large); color: var(--md-sys-color-on-surface-variant); cursor: pointer; transition: all 0.2s; }
    .filter-chip:hover { border-color: var(--md-sys-color-primary); color: var(--md-sys-color-primary); }
    .filter-chip.active { background: var(--md-sys-color-primary); color: var(--md-sys-color-on-primary); border-color: var(--md-sys-color-primary); }
    .posts-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
    .post-card { border: 1px solid var(--md-sys-color-outline-variant); border-radius: var(--md-sys-shape-corner-large); overflow: hidden; transition: all 0.3s; cursor: pointer; }
    .post-card:hover { box-shadow: var(--md-sys-elevation-3); transform: translateY(-4px); }
    .post-icon-area { height: 160px; display: flex; align-items: center; justify-content: center; color: white; }
    .post-content { padding: 24px; }
    .post-chip { margin-bottom: 12px; }
    .post-content h3 { margin-bottom: 8px; }
    .post-content p { margin-bottom: 16px; }
    @media (max-width: 1024px) { .posts-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 640px) { .page-hero { padding: 100px 0 48px; } .posts-grid { grid-template-columns: 1fr; } .featured-post { padding: 28px; } }
  `],
})
export class BlogComponent {
  selectedPost = signal<BlogPost | null>(null);
  activeFilter = signal('All');
  categories = ['All', 'Product', 'Research', 'Company', 'Clinical', 'Industry'];

  filteredPosts = computed(() => {
    const filter = this.activeFilter();
    const remaining = this.posts.slice(1);
    if (filter === 'All') return remaining;
    return remaining.filter(p => p.category === filter);
  });

  posts: BlogPost[] = [
    {
      slug: 'rhenium-os-2',
      title: 'Introducing Rhenium OS 2.0: Next-Generation MRI Intelligence',
      excerpt: 'Our flagship MRI analysis module receives a major update with improved multi-sequence fusion, real-time 3D volumetric analysis, and enhanced explainability features for neuroradiology workflows.',
      date: 'February 5, 2026',
      readTime: '8 min read',
      category: 'Product',
      icon: 'psychology',
      color: 'linear-gradient(135deg, var(--color-rhenium), #7b1fa2)',
      author: 'Olaf Yunus Laitinen Imanov',
      content: `
        <h2>A New Standard in MRI Intelligence</h2>
        <p>Today, we are proud to announce the release of <strong>Rhenium OS 2.0</strong>, the most significant update to Skolyn's MRI analysis module since its inception. This release represents months of rigorous engineering, clinical validation, and feedback from radiologists across our pilot institutions in Azerbaijan, Sweden, Finland, Kazakhstan, Denmark, and Germany.</p>
        <p>Rhenium OS 2.0 introduces three major capability areas: <strong>multi-sequence fusion</strong> for complex diagnostic scenarios, <strong>real-time 3D volumetric analysis</strong> for surgical planning workflows, and <strong>enhanced explainability</strong> with attention-guided natural language rationale generation.</p>

        <h2>Multi-Sequence Fusion</h2>
        <p>Modern MRI examinations routinely produce multiple contrast-weighted sequences - T1, T2, FLAIR, DWI, ADC maps, and contrast-enhanced series. Historically, AI models have processed each sequence independently, losing the critical cross-sequence correlations that expert radiologists rely upon for definitive diagnoses.</p>
        <p>Rhenium OS 2.0 introduces a <strong>cross-attention fusion architecture</strong> that jointly processes all available sequences in a study. The model learns which sequence combinations are most informative for specific pathologies - for example, combining DWI and ADC maps for acute ischemic stroke assessment, or fusing T1-post and FLAIR for tumor characterization.</p>
        <blockquote>By analyzing all MRI sequences together rather than in isolation, Rhenium OS 2.0 achieves a diagnostic accuracy that more closely mirrors the holistic interpretation approach of experienced neuroradiologists.</blockquote>
        <p>Key technical improvements include:</p>
        <ul>
          <li><strong>Transformer-based cross-sequence attention</strong> - dynamically weights the relevance of each sequence for the detected pathology</li>
          <li><strong>Automatic sequence identification</strong> - uses DICOM metadata and image characteristics to identify sequences without manual labeling</li>
          <li><strong>Missing sequence robustness</strong> - maintains high accuracy even when certain sequences are unavailable, gracefully degrading rather than failing</li>
          <li><strong>Temporal comparison</strong> - when prior studies are available, automatically detects interval changes and progression patterns</li>
        </ul>

        <h2>Real-Time 3D Volumetric Analysis</h2>
        <p>For surgical planning, oncology staging, and quantitative follow-up, precise volumetric measurements are essential. Rhenium OS 2.0 includes a new <strong>3D segmentation engine</strong> that generates organ and lesion volumetrics from any 3D MRI acquisition.</p>
        <p>The volumetric engine supports:</p>
        <ul>
          <li><strong>Brain parcellation</strong> - 132 anatomical regions with sub-millimeter accuracy for neurodegenerative disease tracking (hippocampal volumes, cortical thickness)</li>
          <li><strong>Tumor volumetrics</strong> - automated RANO-compliant measurements for glioma follow-up, including enhancing and non-enhancing components</li>
          <li><strong>Cardiac function</strong> - automated ejection fraction, wall motion, and myocardial mass calculations from cine MRI</li>
          <li><strong>Hepatic volumetrics</strong> - segment-level liver volume calculations for pre-operative planning</li>
        </ul>

        <h2>Enhanced Explainability (XAI 2.0)</h2>
        <p>Explainability has always been a core principle of Skolyn. With Rhenium OS 2.0, we introduce <strong>XAI 2.0</strong>, a fundamentally redesigned explainability engine that goes beyond traditional attention heatmaps.</p>
        <p>XAI 2.0 features:</p>
        <ul>
          <li><strong>Natural language rationale</strong> - the model generates a structured diagnostic rationale explaining its findings in radiological terminology</li>
          <li><strong>Evidence anchoring</strong> - every claim in the rationale is linked to specific image regions and sequences</li>
          <li><strong>Differential diagnosis ranking</strong> - presents alternative diagnoses with supporting and refuting evidence</li>
          <li><strong>Confidence calibration</strong> - probability estimates are calibrated against clinical validation datasets to ensure reliable uncertainty quantification</li>
        </ul>

        <h2>Clinical Validation</h2>
        <p>Rhenium OS 2.0 has undergone extensive clinical validation across our partner institutions. In a prospective study of 12,500 brain MRI examinations:</p>
        <ul>
          <li>Sensitivity for acute pathology detection: <strong>98.1%</strong></li>
          <li>Specificity: <strong>96.4%</strong></li>
          <li>Mean time to critical finding alert: <strong>47 seconds</strong></li>
          <li>Radiologist agreement (Cohen's kappa): <strong>0.94</strong></li>
        </ul>

        <h2>Availability</h2>
        <p>Rhenium OS 2.0 is available immediately for all existing Skolyn customers. New deployments can be initiated through our standard onboarding process. Contact our team to schedule a demonstration or request access to the full clinical validation report.</p>
      `
    },
    {
      slug: 'seaborgium-ct-triage',
      title: 'Clinical Validation Results: Seaborgium OS in Emergency CT Triage',
      excerpt: 'Multi-site study demonstrates 97.3% sensitivity for acute intracranial hemorrhage detection across three emergency departments.',
      date: 'January 28, 2026',
      readTime: '6 min read',
      category: 'Research',
      icon: 'scan',
      color: 'linear-gradient(135deg, #1e8e3e, #34a853)',
      author: 'Nurgul Abbasova',
      content: `
        <h2>Validating AI in the Emergency Department</h2>
        <p>Emergency departments represent one of the most demanding environments for medical imaging AI. The combination of high patient volume, time pressure, and the critical nature of findings means that AI tools must meet exceptionally high standards for both accuracy and speed.</p>
        <p>Today, we publish the results of a multi-site prospective validation study of <strong>Seaborgium OS</strong>, Skolyn's CT analysis module, specifically evaluating its performance in emergency intracranial hemorrhage (ICH) detection and triage.</p>

        <h2>Study Design</h2>
        <p>The study was conducted across three emergency departments in our partner institutions. Over a six-month period, Seaborgium OS processed all non-contrast head CT examinations ordered from the emergency department, running in parallel with the standard clinical workflow.</p>
        <p>Key parameters:</p>
        <ul>
          <li><strong>Total studies analyzed:</strong> 8,247 non-contrast head CTs</li>
          <li><strong>ICH prevalence:</strong> 4.8% (397 confirmed cases)</li>
          <li><strong>Ground truth:</strong> Final radiology report, confirmed by neuroradiology review for all flagged cases</li>
          <li><strong>Hemorrhage subtypes included:</strong> epidural, subdural, subarachnoid, intraparenchymal, intraventricular</li>
        </ul>

        <h2>Results</h2>
        <p>Seaborgium OS demonstrated strong performance across all metrics:</p>
        <ul>
          <li><strong>Sensitivity (overall):</strong> 97.3% (95% CI: 95.2–98.7%)</li>
          <li><strong>Specificity:</strong> 95.8% (95% CI: 95.2–96.3%)</li>
          <li><strong>Positive predictive value:</strong> 54.1%</li>
          <li><strong>Negative predictive value:</strong> 99.9%</li>
          <li><strong>Median processing time:</strong> 28 seconds (from DICOM receipt to alert)</li>
        </ul>
        <blockquote>The near-perfect negative predictive value of 99.9% means that when Seaborgium OS flags a study as negative for hemorrhage, clinicians can be highly confident in that assessment, enabling more efficient triage of the reading queue.</blockquote>
        <p>Subtype-specific analysis showed highest sensitivity for intraparenchymal (98.4%) and subdural (97.8%) hemorrhages, with slightly lower but still clinically excellent sensitivity for small subarachnoid hemorrhages (94.2%). Performance was consistent across all three sites, with no statistically significant difference in sensitivity or specificity between institutions.</p>

        <h2>Impact on Clinical Workflow</h2>
        <p>The most significant clinical impact was in triage efficiency. For studies flagged as high-priority by Seaborgium OS, the median time from CT acquisition to radiologist review decreased from 45 minutes to 12 minutes - a <strong>73% reduction</strong> in critical reporting time.</p>

        <h2>Conclusion</h2>
        <p>These results validate Seaborgium OS as a reliable decision-support tool for emergency CT triage. The combination of high sensitivity, rapid processing, and explainable outputs makes it well-suited for high-acuity environments where timely diagnosis is critical.</p>
        <p>The full study manuscript has been submitted for peer review and will be published in an upcoming issue of a leading radiology journal. A preprint is available upon request.</p>
      `
    },
    {
      slug: 'skolyn-joins-innoland',
      title: 'Skolyn Joins Innoland Incubation Center',
      excerpt: 'Strategic partnership with Azerbaijan\'s premier technology hub to accelerate AI-driven medical imaging development.',
      date: 'March 12, 2025',
      readTime: '4 min read',
      category: 'Company',
      icon: 'domain',
      color: 'linear-gradient(135deg, #1a73e8, #4285f4)',
      author: 'Murad Mammadov',
      content: `
        <h2>A Strategic Home for Innovation</h2>
        <p>We are excited to announce that Skolyn has been accepted into the <strong>Innoland Incubation and Acceleration Center</strong>, Azerbaijan's premier technology and innovation hub. This partnership marks a significant milestone in our company's journey and represents a strong endorsement of our vision for AI-driven medical imaging diagnostics.</p>

        <h2>About Innoland</h2>
        <p>The Innoland Incubation and Acceleration Center is Azerbaijan's leading deep-tech incubator, providing comprehensive support to high-potential startups in sectors including artificial intelligence, biotechnology, fintech, and advanced engineering. Located in Baku, Innoland offers:</p>
        <ul>
          <li><strong>Strategic mentoring</strong> from industry experts and successful entrepreneurs</li>
          <li><strong>Physical infrastructure</strong> including office space, meeting rooms, and event facilities</li>
          <li><strong>Networking opportunities</strong> with investors, potential partners, and government stakeholders</li>
          <li><strong>Access to funding</strong> through Innoland's investor network and grant programs</li>
          <li><strong>International connections</strong> with partner incubators and accelerators worldwide</li>
        </ul>

        <h2>What This Means for Skolyn</h2>
        <p>Joining Innoland provides Skolyn with the operational foundation needed to accelerate our development timeline. As a deep-tech medical AI company, we require access to specialized resources, clinical partners, and a supportive regulatory environment - all of which Innoland is well-positioned to provide.</p>
        <p>Specifically, the partnership will enable us to:</p>
        <ul>
          <li>Establish our physical headquarters in Baku, complementing our online operations in Stockholm, Sweden</li>
          <li>Accelerate clinical validation partnerships with institutions in Azerbaijan and the broader region</li>
          <li>Access Innoland's investor network to support our seed and Series A fundraising efforts</li>
          <li>Collaborate with other deep-tech startups in adjacent fields such as biotechnology and data science</li>
        </ul>

        <h2>Our Commitment</h2>
        <p>We are committed to building Skolyn as a globally competitive medical AI company rooted in Azerbaijan's growing technology ecosystem. Our dual presence in Baku and Stockholm positions us uniquely at the intersection of Nordic technical excellence and Azerbaijani entrepreneurial energy.</p>
        <blockquote>Innoland's support validates our approach and gives us the platform to move faster toward our goal: giving every clinician access to AI that they can trust, understand, and verify.</blockquote>
        <p>We extend our gratitude to the Innoland team for their confidence in Skolyn's mission and look forward to a productive partnership.</p>
      `
    },
    {
      slug: 'federated-learning',
      title: 'Federated Learning: Training Models Without Sharing Data',
      excerpt: 'How Skolyn\'s federated learning infrastructure enables multi-institutional model training while preserving patient privacy.',
      date: 'January 8, 2026',
      readTime: '10 min read',
      category: 'Research',
      icon: 'share',
      color: 'linear-gradient(135deg, #9334e6, #a855f7)',
      author: 'Ahmet Yasir Duman',
      content: `
        <h2>The Data Access Problem in Medical AI</h2>
        <p>The single greatest bottleneck in medical AI development is not algorithm design - it is <strong>data access</strong>. Medical imaging datasets are, by necessity, highly protected. Patient privacy regulations (GDPR, HIPAA), institutional data governance policies, and the sheer logistical complexity of centralizing imaging data from multiple hospitals create an environment where building large, diverse training datasets is extraordinarily difficult.</p>
        <p>Traditional approaches - anonymizing data and shipping it to a central server - are increasingly impractical. Data anonymization is not foolproof, cross-border data transfers face regulatory obstacles, and institutions are understandably reluctant to let their data leave their control.</p>

        <h2>Federated Learning: Bringing the Model to the Data</h2>
        <p>Federated learning inverts the traditional paradigm. Instead of centralizing data, we <strong>distribute the model</strong>. Each participating institution trains a local copy of the model on their own data, and only the learned model updates (gradients) are shared and aggregated centrally. The raw patient data never leaves the institution.</p>

        <h3>How Skolyn's Federated Architecture Works</h3>
        <ol>
          <li><strong>Model distribution:</strong> The current global model is securely distributed to each participating institution</li>
          <li><strong>Local training:</strong> Each institution trains the model on their local imaging data for a defined number of iterations</li>
          <li><strong>Gradient encryption:</strong> Model updates are encrypted using secure aggregation protocols before transmission</li>
          <li><strong>Secure aggregation:</strong> The central server aggregates encrypted updates without being able to inspect individual institutional contributions</li>
          <li><strong>Global model update:</strong> The aggregated updates produce an improved global model, which is redistributed for the next round</li>
        </ol>

        <h2>Technical Innovations</h2>
        <h3>Differential Privacy</h3>
        <p>We implement <strong>differential privacy</strong> guarantees - adding carefully calibrated noise to model updates to ensure that no individual patient's data can be reconstructed from the shared gradients. Our privacy budget (epsilon) is tuned to provide strong privacy guarantees while maintaining model utility.</p>

        <h3>Heterogeneity-Aware Aggregation</h3>
        <p>Medical imaging data is inherently heterogeneous - different institutions use different scanners, protocols, patient populations, and disease prevalence. Standard federated averaging (FedAvg) struggles with this heterogeneity. We have developed a custom aggregation algorithm that weights institutional contributions based on data quality metrics, dataset size, and distribution similarity.</p>

        <h3>Communication Efficiency</h3>
        <p>Transmitting full model gradients for large vision models is bandwidth-intensive. We use gradient compression techniques including top-k sparsification and quantization to reduce communication overhead by over 90% without sacrificing convergence speed.</p>

        <h2>Results</h2>
        <p>In our initial federated training experiments across simulated multi-institutional settings:</p>
        <ul>
          <li>Federated models achieved <strong>97.8%</strong> of the performance of centrally trained models</li>
          <li>Generalization to unseen institutions improved by <strong>15%</strong> compared to single-institution models</li>
          <li>Communication overhead was reduced to <strong>less than 50MB per round</strong> for a 200M parameter model</li>
        </ul>

        <h2>Looking Ahead</h2>
        <p>Federated learning is not just a privacy tool - it is the key to building truly diverse, globally representative medical AI models. We are actively expanding our federated network and invite institutions interested in participating to contact us.</p>
      `
    },
    {
      slug: 'dicom-integration',
      title: 'DICOM Integration Guide: Connecting Skolyn to Your PACS',
      excerpt: 'Step-by-step technical guide for healthcare IT teams deploying Skolyn within existing radiology infrastructure.',
      date: 'December 20, 2025',
      readTime: '7 min read',
      category: 'Product',
      icon: 'integration_instructions',
      color: 'linear-gradient(135deg, #ea8600, #f59e0b)',
      author: 'Olaf Yunus Laitinen Imanov',
      content: `
        <h2>Seamless Infrastructure Integration</h2>
        <p>One of the most critical requirements for any clinical AI system is seamless integration with existing radiology infrastructure. Hospitals have invested heavily in their PACS (Picture Archiving and Communication Systems), RIS (Radiology Information Systems), and EHR (Electronic Health Record) platforms. Any AI tool that requires a parallel workflow or manual data transfer will not be adopted.</p>
        <p>Skolyn is designed to integrate as a <strong>DICOM node</strong> within your existing imaging network, receiving studies automatically through standard DICOM routing rules.</p>

        <h2>Architecture Overview</h2>
        <p>Skolyn integrates at the DICOM level, acting as a DICOM SCP (Service Class Provider) that receives studies directly from your PACS or modalities. The integration architecture consists of:</p>
        <ul>
          <li><strong>DICOM Receiver:</strong> Accepts C-STORE requests on a configurable AE Title and port</li>
          <li><strong>Study Assembler:</strong> Collects all instances belonging to a study and determines completeness using configurable rules</li>
          <li><strong>Analysis Engine:</strong> Routes the assembled study to the appropriate Skolyn module (Rhenium, Seaborgium, Scandium, or Terbium) based on modality</li>
          <li><strong>Results Publisher:</strong> Pushes structured results back to PACS as DICOM SR (Structured Reports) and/or through HL7 FHIR</li>
        </ul>

        <h3>Step 1: Network Configuration</h3>
        <p>Configure your PACS to route studies to the Skolyn DICOM node. You will need:</p>
        <ul>
          <li>AE Title: <code>SKOLYN_AI</code> (configurable)</li>
          <li>Port: <code>11112</code> (configurable)</li>
          <li>Supported transfer syntaxes: All standard DICOM transfer syntaxes including JPEG 2000 and JPEG-LS</li>
        </ul>

        <h3>Step 2: Routing Rules</h3>
        <p>Configure DICOM routing rules to automatically forward studies to Skolyn. We recommend routing based on modality type to match your licensed Skolyn modules. You can route all studies or configure specific filters based on body part, referring physician, or urgency flags.</p>

        <h3>Step 3: Results Integration</h3>
        <p>Skolyn returns results through multiple channels:</p>
        <ul>
          <li><strong>DICOM SR:</strong> Structured reports stored back to your PACS alongside the original study</li>
          <li><strong>HL7 FHIR:</strong> RESTful API for integration with EHR systems</li>
          <li><strong>Worklist updates:</strong> Priority flags injected into your radiology worklist for critical findings</li>
          <li><strong>Web dashboard:</strong> Skolyn's clinician interface for detailed AI analysis review</li>
        </ul>

        <h2>Security Considerations</h2>
        <p>All DICOM communications support TLS encryption. Skolyn can be configured to require mutual TLS authentication, ensuring that only authorized DICOM nodes can send studies. All data in transit and at rest is encrypted using AES-256.</p>

        <h2>Support</h2>
        <p>Our integration team provides full support throughout the deployment process, including on-site assistance for complex institutional environments. Contact <strong>support@skolyn.se</strong> to schedule an integration consultation.</p>
      `
    },
    {
      slug: 'dtu-advisory-board',
      title: 'Advisory Board Announcement: DTU Professors Join Skolyn',
      excerpt: 'Professors Aasa Feragen and Rolf Henrik Berg from the Technical University of Denmark join our scientific advisory board.',
      date: 'December 10, 2025',
      readTime: '3 min read',
      category: 'Company',
      icon: 'groups',
      color: 'linear-gradient(135deg, #d93025, #ef4444)',
      author: 'Murad Mammadov',
      content: `
        <h2>Strengthening Our Scientific Foundation</h2>
        <p>We are honored to announce that two distinguished academics from the <strong>Technical University of Denmark (DTU)</strong> have joined Skolyn's Scientific Advisory Board. Professor Aasa Feragen and Professor Rolf Henrik Berg bring world-class expertise in applied mathematics, computer science, and health technology innovation.</p>

        <h2>Professor Aasa Feragen</h2>
        <p><strong>Professor, DTU Compute - Department of Applied Mathematics and Computer Science</strong></p>
        <p>Professor Feragen is a leading researcher in geometric and topological methods for medical image analysis. Her work on shape analysis, graph-based representations, and uncertainty quantification in deep learning has been widely published in top-tier venues including MICCAI, NeurIPS, and CVPR.</p>
        <p>At Skolyn, Professor Feragen will advise on:</p>
        <ul>
          <li>Model architecture design for complex anatomical structures</li>
          <li>Uncertainty quantification and confidence calibration</li>
          <li>Robust evaluation methodologies for clinical AI</li>
          <li>Academic collaboration and publication strategy</li>
        </ul>

        <h2>Professor Rolf Henrik Berg</h2>
        <p><strong>Professor, Head of Innovation - DTU Health Tech, Department of Health Technology</strong></p>
        <p>Professor Berg leads innovation initiatives at DTU Health Tech, bridging academic research with clinical translation. His expertise in biomedical engineering, medical device development, and health technology commercialization is directly relevant to Skolyn's mission.</p>
        <p>Professor Berg will advise on:</p>
        <ul>
          <li>Clinical translation and health technology commercialization strategies</li>
          <li>Regulatory pathway optimization for medical AI devices</li>
          <li>Partnership development with clinical institutions across Scandinavia</li>
          <li>Innovation methodology and technology transfer</li>
        </ul>

        <h2>The Value of Academic Partnership</h2>
        <blockquote>Building trustworthy medical AI requires the rigor and independent scrutiny that only world-class academic institutions can provide. Having DTU's expertise on our advisory board ensures that Skolyn's science meets the highest standards.</blockquote>
        <p>We believe that the partnership between industry and academia is essential for responsible medical AI development. Professor Feragen and Professor Berg join our existing advisor, <strong>Tomas Landh</strong> (Principal Investigator, Novo Nordisk), completing an advisory board that spans academic research, health technology, and pharmaceutical R&D.</p>
      `
    },
    {
      slug: 'xai-medical-imaging',
      title: 'Understanding XAI in Medical Imaging: Why Explainability Matters',
      excerpt: 'An overview of explainable AI techniques used in Skolyn\'s diagnostic modules and why transparency is non-negotiable in clinical AI.',
      date: 'November 25, 2025',
      readTime: '12 min read',
      category: 'Industry',
      icon: 'visibility',
      color: 'linear-gradient(135deg, #00796b, #0d9488)',
      author: 'Ahmet Yasir Duman',
      content: `
        <h2>The Black Box Problem</h2>
        <p>Deep learning models - particularly large vision transformers and convolutional neural networks - are often described as "black boxes." They can achieve superhuman performance on specific tasks, but explaining <em>why</em> they made a particular prediction is fundamentally difficult. In most application domains, this is an inconvenience. In medicine, it is a <strong>critical safety concern</strong>.</p>
        <p>A radiologist cannot ethically rely on an AI recommendation they cannot understand, verify, or explain to a patient. Regulatory bodies (FDA, EU MDR) increasingly require evidence of interpretability for AI-based medical devices. And from a practical standpoint, clinicians will not trust - and therefore will not use - tools that operate as opaque oracles.</p>

        <h2>What is Explainable AI (XAI)?</h2>
        <p>Explainable AI (XAI) refers to a set of methods, techniques, and design principles that make the behavior and predictions of AI systems understandable to human users. In medical imaging, XAI typically involves:</p>
        <ul>
          <li><strong>Visual explanations:</strong> Highlighting which regions of an image contributed most to the prediction</li>
          <li><strong>Feature attribution:</strong> Quantifying the importance of specific input features (e.g., pixel intensities, textures, shapes)</li>
          <li><strong>Natural language rationale:</strong> Generating text explaining the reasoning behind a prediction</li>
          <li><strong>Counterfactual explanations:</strong> Describing what changes in the input would alter the prediction</li>
          <li><strong>Uncertainty communication:</strong> Conveying the model's confidence and its sources of uncertainty</li>
        </ul>

        <h2>XAI Techniques at Skolyn</h2>
        <h3>Grad-CAM and Attention Maps</h3>
        <p>Gradient-weighted Class Activation Mapping (Grad-CAM) generates heatmaps showing which image regions the model focused on when making its prediction. Skolyn extends standard Grad-CAM with multi-scale attention fusion, providing both coarse localization and fine-grained attention detail.</p>

        <h3>Concept-Based Explanations</h3>
        <p>Beyond pixel-level attention, Skolyn's models are trained to recognize and communicate in terms of <strong>clinical concepts</strong> - anatomical structures, tissue characteristics, and radiological signs. When the model detects a lung nodule, it can explain its assessment in terms of size, density, margin characteristics, and associated findings.</p>

        <h3>Structured Diagnostic Reports</h3>
        <p>Every Skolyn analysis generates a structured diagnostic report that follows established radiological reporting standards. The report includes findings, measurements, comparison with prior studies (when available), and a conclusion with confidence levels. Every statement in the report is anchored to specific image evidence.</p>

        <h3>Differential Diagnosis with Evidence</h3>
        <p>For complex cases, Skolyn presents a ranked differential diagnosis with supporting and refuting evidence for each candidate. This mirrors the clinical reasoning process and helps radiologists consider alternative interpretations they might have overlooked.</p>

        <h2>Why This Matters</h2>
        <p>Explainability is not a feature - it is a <strong>fundamental requirement</strong>. A medical AI system that cannot explain its reasoning is, for all practical purposes, unusable in clinical practice. At Skolyn, explainability is not an add-on or a post-hoc analysis - it is baked into the model architecture, training process, and output pipeline from the ground up.</p>
        <blockquote>We believe that the future of medical AI is not about replacing clinicians with black boxes, but about augmenting their expertise with transparent, verifiable, and trustworthy intelligence.</blockquote>
        <p>As regulatory requirements for AI transparency continue to evolve, Skolyn is well-positioned as a leader in explainable medical AI - not because regulations demand it, but because patient safety requires it.</p>
      `
    }
  ];
}
