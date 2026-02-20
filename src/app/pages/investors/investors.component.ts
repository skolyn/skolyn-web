import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-investors',
  imports: [RouterLink],
  template: `
    <section class="page-hero">
      <div class="container">
        <div class="hero-label"><span class="material-symbols-outlined sz-20">trending_up</span> Investors</div>
        <h1 class="display-medium animate-in">Invest in the Future of Medical AI</h1>
        <p class="body-large text-secondary hero-desc animate-in animate-in-delay-1">
          Skolyn is building the operating system for intelligent medical imaging: explainable, scalable, and clinically validated.
        </p>
      </div>
    </section>

    <!-- Key Metrics -->
    <section class="section">
      <div class="container">
        <div class="metrics-grid">
          @for (m of metrics; track m.label) {
            <div class="metric-card">
              <span class="display-small metric-value" [style.color]="m.color">{{ m.value }}</span>
              <span class="title-small">{{ m.label }}</span>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Why Skolyn -->
    <section class="section-tight" style="background: var(--md-sys-color-surface-variant);">
      <div class="container">
        <h2 class="headline-large text-center" style="margin-bottom: 48px;">Why Skolyn?</h2>
        <div class="reasons-grid">
          @for (r of reasons; track r.title) {
            <div class="reason-card">
              <div class="reason-icon" [style.background]="r.color">
                <span class="material-symbols-outlined sz-32">{{ r.icon }}</span>
              </div>
              <h3 class="title-large">{{ r.title }}</h3>
              <p class="body-medium text-secondary">{{ r.desc }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- TAM / SAM / SOM -->
    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center" style="margin-bottom: 16px;">Market Sizing</h2>
        <p class="body-large text-center text-secondary" style="max-width: 700px; margin: 0 auto 48px;">
          The global medical imaging AI market is one of the fastest-growing segments in healthcare technology, driven by radiologist shortages, rising scan volumes, and regulatory momentum.
        </p>
        <div class="tam-grid">
          <div class="tam-card tam-total">
            <div class="tam-bar" style="height: 100%; background: linear-gradient(180deg, var(--color-rhenium), var(--color-rhenium-light));"></div>
            <div class="tam-info">
              <span class="display-small" style="color: var(--color-rhenium); font-weight: 700;">$18.5B</span>
              <span class="title-medium">TAM by 2032</span>
              <span class="body-small text-secondary">Total Addressable Market: Global medical imaging AI</span>
            </div>
          </div>
          <div class="tam-card tam-serviceable">
            <div class="tam-bar" style="height: 70%; background: linear-gradient(180deg, var(--color-scandium), var(--color-scandium-light));"></div>
            <div class="tam-info">
              <span class="display-small" style="color: var(--color-scandium); font-weight: 700;">$6.5B</span>
              <span class="title-medium">SAM</span>
              <span class="body-small text-secondary">Serviceable Market: Europe + Nordic + Baltic regions</span>
            </div>
          </div>
          <div class="tam-card tam-obtainable">
            <div class="tam-bar" style="height: 35%; background: linear-gradient(180deg, var(--color-seaborgium), var(--color-seaborgium-light));"></div>
            <div class="tam-info">
              <span class="display-small" style="color: var(--color-seaborgium); font-weight: 700;">$850M</span>
              <span class="title-medium">SOM</span>
              <span class="body-small text-secondary">Serviceable Obtainable: 7 target countries, initial 5-year capture</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Market Data Grid -->
    <section class="section" style="background: var(--md-sys-color-surface-variant);">
      <div class="container">
        <h2 class="headline-large text-center" style="margin-bottom: 16px;">Market Opportunity</h2>
        <p class="body-large text-center text-secondary" style="max-width: 640px; margin: 0 auto 48px;">
          Structural tailwinds across healthcare IT, radiology workforce, and regulatory environment.
        </p>
        <div class="market-grid">
          @for (item of marketData; track item.title) {
            <div class="market-card">
              <span class="material-symbols-outlined sz-32" style="color: var(--md-sys-color-primary);">{{ item.icon }}</span>
              <h4 class="title-medium">{{ item.title }}</h4>
              <p class="body-small text-secondary">{{ item.desc }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Regional Breakdown -->
    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center" style="margin-bottom: 16px;">Regional Market Intelligence</h2>
        <p class="body-large text-center text-secondary" style="max-width: 680px; margin: 0 auto 48px;">
          Deep market analysis across our 7 target countries. Each represents unique regulatory and adoption dynamics.
        </p>
        <div class="region-grid">
          @for (r of regions; track r.country) {
            <div class="region-card">
              <div class="region-header">
                <span class="region-flag">{{ r.flag }}</span>
                <div>
                  <h4 class="title-medium">{{ r.country }}</h4>
                  <span class="body-small text-secondary">{{ r.category }}</span>
                </div>
              </div>
              <div class="region-stats">
                <div class="region-stat">
                  <span class="label-large" style="color: var(--md-sys-color-primary);">{{ r.healthSpend }}</span>
                  <span class="body-small text-secondary">Healthcare IT Spend</span>
                </div>
                <div class="region-stat">
                  <span class="label-large" style="color: var(--md-sys-color-primary);">{{ r.aiReadiness }}</span>
                  <span class="body-small text-secondary">AI Readiness</span>
                </div>
              </div>
              <p class="body-small text-secondary region-note">{{ r.note }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Revenue Model -->
    <section class="section" style="background: var(--md-sys-color-surface-variant);">
      <div class="container">
        <h2 class="headline-large text-center" style="margin-bottom: 16px;">Revenue Model</h2>
        <p class="body-large text-center text-secondary" style="max-width: 640px; margin: 0 auto 48px;">
          Multi-stream SaaS revenue with per-study economics and enterprise licensing.
        </p>
        <div class="revenue-grid">
          @for (r of revenueStreams; track r.name) {
            <div class="revenue-card">
              <div class="revenue-icon" [style.background]="r.color">
                <span class="material-symbols-outlined sz-28">{{ r.icon }}</span>
              </div>
              <h4 class="title-medium">{{ r.name }}</h4>
              <span class="body-large" style="font-weight: 600; color: var(--md-sys-color-primary);">{{ r.pricing }}</span>
              <p class="body-small text-secondary">{{ r.desc }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Financial Projections -->
    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center" style="margin-bottom: 16px;">5-Year Financial Outlook</h2>
        <p class="body-large text-center text-secondary" style="max-width: 640px; margin: 0 auto 48px;">
          Projected growth based on current pipeline, partnership letters of intent, and regional expansion plan.
        </p>
        <div class="projection-table-wrap">
          <table class="projection-table">
            <thead>
              <tr>
                <th>Metric</th>
                <th>2025</th>
                <th>2026</th>
                <th>2027</th>
                <th>2028</th>
                <th>2029</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Partner Institutions</td><td>5</td><td>15</td><td>35</td><td>60</td><td>100+</td></tr>
              <tr><td>Studies Processed (K/yr)</td><td>10</td><td>80</td><td>350</td><td>1,200</td><td>3,500</td></tr>
              <tr><td>ARR (€K)</td><td>-</td><td>250</td><td>1,800</td><td>6,500</td><td>18,000</td></tr>
              <tr><td>Gross Margin</td><td>-</td><td>65%</td><td>72%</td><td>78%</td><td>82%</td></tr>
              <tr><td>Team Size</td><td>8</td><td>18</td><td>35</td><td>55</td><td>80</td></tr>
              <tr><td>Countries Active</td><td>2</td><td>4</td><td>7</td><td>10</td><td>15+</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Roadmap -->
    <section class="section" style="background: var(--md-sys-color-surface-variant);">
      <div class="container">
        <h2 class="headline-large text-center" style="margin-bottom: 48px;">Our Roadmap</h2>
        <div class="timeline">
          @for (phase of roadmap; track phase.year) {
            <div class="timeline-item">
              <div class="timeline-dot" [style.background]="phase.color"></div>
              <div class="timeline-content">
                <span class="label-large" [style.color]="phase.color">{{ phase.year }}</span>
                <h4 class="title-medium">{{ phase.title }}</h4>
                <p class="body-small text-secondary">{{ phase.desc }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Competitive Landscape -->
    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center" style="margin-bottom: 16px;">Competitive Landscape</h2>
        <p class="body-large text-center text-secondary" style="max-width: 680px; margin: 0 auto 48px;">
          Skolyn occupies a unique position: the only multi-modal, fully explainable medical imaging AI platform built for the Nordic-Baltic corridor.
        </p>

        <!-- Market Map -->
        <div class="market-map">
          <div class="map-quadrant">
            <h4 class="title-small" style="color: var(--md-sys-color-primary); margin-bottom: 12px;">
              <span class="material-symbols-outlined sz-20">rocket_launch</span> AI-Native Startups
            </h4>
            @for (c of startupCompetitors; track c.name) {
              <div class="competitor-chip">
                <span class="comp-dot" [style.background]="c.color"></span>
                <span class="body-small">{{ c.name }}</span>
                <span class="body-small text-secondary">{{ c.focus }}</span>
              </div>
            }
          </div>
          <div class="map-quadrant">
            <h4 class="title-small" style="color: #ea8600; margin-bottom: 12px;">
              <span class="material-symbols-outlined sz-20">apartment</span> Enterprise Incumbents
            </h4>
            @for (c of incumbentCompetitors; track c.name) {
              <div class="competitor-chip">
                <span class="comp-dot" [style.background]="c.color"></span>
                <span class="body-small">{{ c.name }}</span>
                <span class="body-small text-secondary">{{ c.focus }}</span>
              </div>
            }
          </div>
          <div class="map-quadrant">
            <h4 class="title-small" style="color: #d93025; margin-bottom: 12px;">
              <span class="material-symbols-outlined sz-20">speed</span> Direct AI Competitors
            </h4>
            @for (c of directCompetitors; track c.name) {
              <div class="competitor-chip">
                <span class="comp-dot" [style.background]="c.color"></span>
                <span class="body-small">{{ c.name }}</span>
                <span class="body-small text-secondary">{{ c.focus }}</span>
              </div>
            }
          </div>
          <div class="map-quadrant">
            <h4 class="title-small" style="color: #9334e6; margin-bottom: 12px;">
              <span class="material-symbols-outlined sz-20">public</span> Regional Players
            </h4>
            @for (c of regionalCompetitors; track c.name) {
              <div class="competitor-chip">
                <span class="comp-dot" [style.background]="c.color"></span>
                <span class="body-small">{{ c.name }}</span>
                <span class="body-small text-secondary">{{ c.focus }}</span>
              </div>
            }
          </div>
        </div>

        <!-- Feature Comparison Table -->
        <h3 class="title-large text-center" style="margin: 48px 0 24px;">Feature Comparison</h3>
        <div class="comp-table-wrap">
          <table class="comp-table">
            <thead>
              <tr>
                <th>Capability</th>
                <th style="color: var(--md-sys-color-primary); font-weight: 700;">Skolyn</th>
                <th>Aidoc</th>
                <th>Lunit</th>
                <th>Zebra Med.</th>
                <th>Gleamer</th>
                <th>Qure.ai</th>
                <th>ImYEN</th>
              </tr>
            </thead>
            <tbody>
              @for (row of compRows; track row.capability) {
                <tr>
                  <td class="comp-capability">{{ row.capability }}</td>
                  <td><span class="material-symbols-outlined" [style.color]="row.skolyn ? '#1e8e3e' : '#d93025'">{{ row.skolyn ? 'check_circle' : 'cancel' }}</span></td>
                  <td><span class="material-symbols-outlined" [style.color]="row.aidoc ? '#1e8e3e' : '#d93025'">{{ row.aidoc ? 'check_circle' : 'cancel' }}</span></td>
                  <td><span class="material-symbols-outlined" [style.color]="row.lunit ? '#1e8e3e' : '#d93025'">{{ row.lunit ? 'check_circle' : 'cancel' }}</span></td>
                  <td><span class="material-symbols-outlined" [style.color]="row.zebra ? '#1e8e3e' : '#d93025'">{{ row.zebra ? 'check_circle' : 'cancel' }}</span></td>
                  <td><span class="material-symbols-outlined" [style.color]="row.gleamer ? '#1e8e3e' : '#d93025'">{{ row.gleamer ? 'check_circle' : 'cancel' }}</span></td>
                  <td><span class="material-symbols-outlined" [style.color]="row.qure ? '#1e8e3e' : '#d93025'">{{ row.qure ? 'check_circle' : 'cancel' }}</span></td>
                  <td><span class="material-symbols-outlined" [style.color]="row.imyen ? '#1e8e3e' : '#d93025'">{{ row.imyen ? 'check_circle' : 'cancel' }}</span></td>
                </tr>
              }
            </tbody>
          </table>
        </div>

        <!-- Competitive Moats -->
        <div class="moat-grid">
          @for (m of moats; track m.title) {
            <div class="moat-card">
              <span class="material-symbols-outlined sz-28" style="color: var(--md-sys-color-primary);">{{ m.icon }}</span>
              <h4 class="title-medium">{{ m.title }}</h4>
              <p class="body-small text-secondary">{{ m.desc }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- The Ask -->
    <section class="section" style="background: var(--md-sys-color-surface-variant);">
      <div class="container">
        <h2 class="headline-large text-center" style="margin-bottom: 16px;">The Ask</h2>
        <p class="body-large text-center text-secondary" style="max-width: 640px; margin: 0 auto 48px;">
          We are raising a Seed round to accelerate platform development, initiate clinical trials, and expand to 4 countries.
        </p>
        <div class="ask-grid">
          <div class="ask-card ask-main">
            <span class="ask-amount">€2.5M</span>
            <span class="title-medium">Seed Round</span>
            <span class="body-medium text-secondary">Target close: Q3 2025</span>
          </div>
          <div class="ask-details">
            @for (d of askDetails; track d.label) {
              <div class="ask-detail-row">
                <span class="material-symbols-outlined sz-20" style="color: var(--md-sys-color-primary);">{{ d.icon }}</span>
                <div>
                  <span class="title-small">{{ d.label }}</span>
                  <span class="body-small text-secondary">{{ d.value }}</span>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </section>

    <!-- Use of Funds -->
    <section class="section">
      <div class="container">
        <h2 class="headline-large text-center" style="margin-bottom: 16px;">Use of Funds</h2>
        <p class="body-large text-center text-secondary" style="max-width: 640px; margin: 0 auto 48px;">
          Capital allocation designed to reach clinical validation milestones and first revenue within 18 months.
        </p>
        <div class="funds-grid">
          @for (f of fundAllocation; track f.category) {
            <div class="fund-card">
              <div class="fund-header">
                <span class="material-symbols-outlined" [style.color]="f.color">{{ f.icon }}</span>
                <div>
                  <span class="title-medium">{{ f.category }}</span>
                  <span class="body-small text-secondary">{{ f.amount }}</span>
                </div>
                <span class="fund-pct" [style.color]="f.color">{{ f.pct }}%</span>
              </div>
              <div class="fund-bar-bg">
                <div class="fund-bar" [style.width.%]="f.pct" [style.background]="f.color"></div>
              </div>
              <p class="body-small text-secondary">{{ f.desc }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section cta-section">
      <div class="container text-center">
        <h2 class="headline-large" style="margin-bottom: 12px;">Interested in Investing?</h2>
        <p class="body-large text-secondary" style="max-width: 600px; margin: 0 auto 32px;">
          We welcome conversations with investors who share our vision of transforming medical imaging through transparent AI.
        </p>
        <a routerLink="/contact" class="md-filled-button">Request Investor Deck</a>
      </div>
    </section>
  `,
  styles: [`
    .page-hero { padding: 120px 0 64px; background: linear-gradient(180deg, var(--md-sys-color-primary-container) 0%, var(--md-sys-color-surface) 100%); text-align: center; }
    .hero-label { display: inline-flex; align-items: center; gap: 8px; padding: 6px 16px 6px 12px; background: rgba(26,115,232,0.08); border-radius: var(--md-sys-shape-corner-full); font: var(--md-sys-typescale-label-large); color: var(--md-sys-color-primary); margin-bottom: 24px; }
    .hero-desc { max-width: 680px; margin: 16px auto 0; font-size: 18px; line-height: 28px; }
    .metrics-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
    .metric-card { background: var(--md-sys-color-surface-container-low); border-radius: var(--md-sys-shape-corner-extra-large); padding: 40px 28px; text-align: center; display: flex; flex-direction: column; gap: 8px; }
    .metric-value { font-weight: 700; }
    .reasons-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
    .reason-card { background: var(--md-sys-color-surface); border-radius: var(--md-sys-shape-corner-large); padding: 32px 24px; box-shadow: var(--md-sys-elevation-1); }
    .reason-icon { width: 56px; height: 56px; border-radius: var(--md-sys-shape-corner-medium); display: flex; align-items: center; justify-content: center; color: white; margin-bottom: 16px; }
    .reason-card h3 { margin-bottom: 8px; }

    /* TAM/SAM/SOM */
    .tam-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
    .tam-card { background: var(--md-sys-color-surface-container-low); border-radius: var(--md-sys-shape-corner-extra-large); padding: 32px; display: flex; gap: 20px; align-items: flex-end; min-height: 200px; position: relative; overflow: hidden; }
    .tam-bar { width: 8px; border-radius: 4px; flex-shrink: 0; }
    .tam-info { display: flex; flex-direction: column; gap: 4px; }

    /* Market data */
    .market-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
    .market-card { background: var(--md-sys-color-surface); border-radius: var(--md-sys-shape-corner-medium); padding: 24px; text-align: center; }
    .market-card h4 { margin: 12px 0 6px; }

    /* Regional */
    .region-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; }
    .region-card { background: var(--md-sys-color-surface-container-low); border-radius: var(--md-sys-shape-corner-large); padding: 24px; border: 1px solid var(--md-sys-color-outline-variant); }
    .region-header { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
    .region-flag { font-size: 32px; line-height: 1; }
    .region-stats { display: flex; gap: 24px; margin-bottom: 12px; }
    .region-stat { display: flex; flex-direction: column; }
    .region-note { font-style: italic; }

    /* Revenue */
    .revenue-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
    .revenue-card { background: var(--md-sys-color-surface); border-radius: var(--md-sys-shape-corner-large); padding: 28px 24px; text-align: center; border: 1px solid var(--md-sys-color-outline-variant); }
    .revenue-icon { width: 56px; height: 56px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; margin: 0 auto 16px; }
    .revenue-card h4 { margin-bottom: 4px; }
    .revenue-card p { margin-top: 8px; }

    /* Projections Table */
    .projection-table-wrap { overflow-x: auto; border-radius: var(--md-sys-shape-corner-large); border: 1px solid var(--md-sys-color-outline-variant); }
    .projection-table { width: 100%; border-collapse: collapse; background: var(--md-sys-color-surface); }
    .projection-table th, .projection-table td { padding: 16px 24px; text-align: center; border-bottom: 1px solid var(--md-sys-color-outline-variant); }
    .projection-table th { background: var(--md-sys-color-surface-container-low); font: var(--md-sys-typescale-label-large); color: var(--md-sys-color-on-surface-variant); font-weight: 600; }
    .projection-table td:first-child { text-align: left; font-weight: 500; }
    .projection-table tr:last-child td { border-bottom: none; }
    .projection-table tbody tr:hover { background: var(--md-sys-color-surface-container-lowest); }

    /* Timeline */
    .timeline { position: relative; padding-left: 40px; max-width: 700px; margin: 0 auto; }
    .timeline::before { content: ''; position: absolute; left: 12px; top: 0; bottom: 0; width: 2px; background: var(--md-sys-color-outline-variant); }
    .timeline-item { position: relative; margin-bottom: 32px; }
    .timeline-dot { position: absolute; left: -34px; top: 4px; width: 16px; height: 16px; border-radius: 50%; }
    .timeline-content h4 { margin: 4px 0; }

    /* Competitive Landscape */
    .comp-table-wrap { overflow-x: auto; border-radius: var(--md-sys-shape-corner-large); border: 1px solid var(--md-sys-color-outline-variant); margin-bottom: 40px; }
    .comp-table { width: 100%; border-collapse: collapse; background: var(--md-sys-color-surface); min-width: 700px; }
    .comp-table th, .comp-table td { padding: 12px 14px; text-align: center; border-bottom: 1px solid var(--md-sys-color-outline-variant); font-size: 13px; }
    .comp-table th { background: var(--md-sys-color-surface-container-low); font: var(--md-sys-typescale-label-large); color: var(--md-sys-color-on-surface-variant); font-weight: 600; font-size: 12px; }
    .comp-table td:first-child, .comp-table th:first-child { text-align: left; }
    .comp-capability { font-weight: 500; }
    .comp-table tbody tr:last-child td { border-bottom: none; }
    .comp-table tbody tr:hover { background: var(--md-sys-color-surface-container-lowest); }

    /* Market Map */
    .market-map { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 8px; }
    .map-quadrant { background: var(--md-sys-color-surface-container-low); border-radius: var(--md-sys-shape-corner-large); padding: 24px; border: 1px solid var(--md-sys-color-outline-variant); }
    .map-quadrant h4 { display: flex; align-items: center; gap: 6px; }
    .competitor-chip { display: flex; align-items: center; gap: 8px; padding: 8px 12px; background: var(--md-sys-color-surface); border-radius: var(--md-sys-shape-corner-medium); margin-bottom: 8px; }
    .comp-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
    .competitor-chip .body-small:nth-child(2) { flex: 1; font-weight: 500; }

    .moat-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
    .moat-card { background: var(--md-sys-color-surface-container-low); border-radius: var(--md-sys-shape-corner-medium); padding: 24px; }
    .moat-card h4 { margin: 8px 0 4px; }

    /* The Ask */
    .ask-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; max-width: 800px; margin: 0 auto; align-items: start; }
    .ask-card { background: var(--md-sys-color-surface); border-radius: var(--md-sys-shape-corner-extra-large); padding: 48px 32px; text-align: center; display: flex; flex-direction: column; gap: 8px; border: 2px solid var(--md-sys-color-primary); }
    .ask-amount { font-size: 56px; font-weight: 800; color: var(--md-sys-color-primary); line-height: 1; letter-spacing: -2px; }
    .ask-details { display: flex; flex-direction: column; gap: 16px; }
    .ask-detail-row { display: flex; align-items: flex-start; gap: 12px; padding: 12px 16px; background: var(--md-sys-color-surface); border-radius: var(--md-sys-shape-corner-medium); }
    .ask-detail-row div { display: flex; flex-direction: column; }

    /* Use of Funds */
    .funds-grid { display: grid; grid-template-columns: 1fr; gap: 16px; max-width: 700px; margin: 0 auto; }
    .fund-card { background: var(--md-sys-color-surface-container-low); border-radius: var(--md-sys-shape-corner-large); padding: 24px; }
    .fund-header { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
    .fund-header div { display: flex; flex-direction: column; flex: 1; }
    .fund-pct { font-size: 24px; font-weight: 700; }
    .fund-bar-bg { height: 8px; background: var(--md-sys-color-outline-variant); border-radius: 4px; margin-bottom: 8px; overflow: hidden; }
    .fund-bar { height: 100%; border-radius: 4px; transition: width 0.6s ease; }

    .cta-section { padding: 80px 0; background: linear-gradient(135deg, var(--md-sys-color-primary-container), #e8f0fe); }

    @media (max-width: 1024px) {
      .metrics-grid, .market-grid { grid-template-columns: repeat(2, 1fr); }
      .reasons-grid, .tam-grid, .revenue-grid { grid-template-columns: 1fr; }
      .moat-grid { grid-template-columns: repeat(2, 1fr); }
      .ask-grid { grid-template-columns: 1fr; }
      .market-map { grid-template-columns: 1fr; }
    }
    @media (max-width: 640px) {
      .page-hero { padding: 100px 0 48px; }
      .metrics-grid { grid-template-columns: 1fr 1fr; }
      .region-grid { grid-template-columns: 1fr; }
    }
  `],
})
export class InvestorsComponent {
  metrics = [
    { value: '49', label: 'Partner Institutions', color: 'var(--color-rhenium)' },
    { value: '7', label: 'Countries', color: 'var(--color-scandium)' },
    { value: '4', label: 'Imaging Modules', color: 'var(--color-seaborgium)' },
    { value: '30%+', label: 'Market CAGR', color: 'var(--color-terbium)' },
  ];

  reasons = [
    { title: 'Full Explainability (XAI)', icon: 'visibility', color: 'linear-gradient(135deg, var(--color-rhenium), var(--color-rhenium-light))', desc: 'Every prediction includes visual heatmaps and natural-language rationale. Clinicians can verify and trust results, a critical differentiator for regulatory approval and clinical adoption.' },
    { title: 'Multi-Modal Platform', icon: 'view_module', color: 'linear-gradient(135deg, var(--color-scandium), var(--color-scandium-light))', desc: 'Four dedicated operating modules covering MRI, CT, Ultrasound, and X-Ray. No competitor offers this breadth with modality-specific optimization and a unified clinician interface.' },
    { title: 'Regulatory-First Design', icon: 'verified', color: 'linear-gradient(135deg, var(--color-seaborgium), var(--color-seaborgium-light))', desc: 'Architected from day one for FDA and CE Mark compliance paths. ISO 13485 and ISO 27001 certified processes with full audit trails.' },
    { title: 'Federated Learning', icon: 'share', color: 'linear-gradient(135deg, var(--color-terbium), var(--color-terbium-light))', desc: 'Train models across institutions without moving data. Solves the critical data access problem in medical AI while ensuring patient privacy and data sovereignty.' },
    { title: 'Scalable SaaS + On-Prem', icon: 'cloud', color: 'linear-gradient(135deg, var(--md-sys-color-error), var(--md-sys-color-error-container))', desc: 'Flexible deployment: cloud, on-premise, hybrid, or edge. Revenue scales with studies processed, institutional contracts, and geographic expansion.' },
    { title: '49 Institutional Partners', icon: 'groups', color: 'linear-gradient(135deg, var(--md-sys-color-tertiary), var(--md-sys-color-tertiary-container))', desc: 'Validated across 7 countries with 49 partner institutions including top university hospitals, government agencies, and innovation hubs across the Nordic-Baltic region.' },
  ];

  marketData = [
    { title: '$18.5B by 2032', icon: 'monetization_on', desc: 'Total addressable market for medical imaging AI globally (Grand View Research, 2024).' },
    { title: '3.6B Scans/Year', icon: 'scan', desc: 'Annual medical imaging studies performed worldwide, growing 4% annually.' },
    { title: '77% Shortage', icon: 'person_off', desc: 'Of countries report a critical shortage of trained radiologists (WHO, 2023).' },
    { title: '30-min Savings', icon: 'timer', desc: 'Average time saved per radiologist per shift with AI-assisted triage.' },
    { title: '€8.2B Nordic IT', icon: 'computer', desc: 'Annual healthcare IT spending across the Nordic region alone.' },
    { title: '35% EU Share', icon: 'public', desc: 'Europe represents 35% of the global medical imaging AI market.' },
    { title: '$3–12/Study', icon: 'savings', desc: 'Per-study value generated through faster diagnosis and reduced callbacks.' },
    { title: '42% CAGR Europe', icon: 'trending_up', desc: 'European AI radiology market growing faster than the global average.' },
  ];

  regions = [
    { flag: '🇦🇿', country: 'Azerbaijan', category: 'Home Market', healthSpend: '$1.2B', aiReadiness: 'Emerging', note: 'Strong government backing through TƏBİB and IDDA. Greenfield AI opportunity with direct Ministry support.' },
    { flag: '🇸🇪', country: 'Sweden', category: 'Primary Expansion', healthSpend: '€3.8B', aiReadiness: 'Very High', note: 'Karolinska and Sahlgrenska as anchor hospitals. Region Stockholm actively investing in AI-driven diagnostics.' },
    { flag: '🇫🇮', country: 'Finland', category: 'Primary Expansion', healthSpend: '€2.1B', aiReadiness: 'Very High', note: 'Findata provides unique secondary-use health data access. HUS Helsinki as lead clinical partner.' },
    { flag: '🇩🇰', country: 'Denmark', category: 'Primary Expansion', healthSpend: '€2.9B', aiReadiness: 'Very High', note: 'Rigshospitalet is the #1 ranked hospital in Europe. Sundhedsdatastyrelsen provides national data governance.' },
    { flag: '🇪🇪', country: 'Estonia', category: 'Baltic Cluster', healthSpend: '€420M', aiReadiness: 'High', note: 'World leader in digital governance. TEHIK provides unified national health IT infrastructure.' },
    { flag: '🇱🇻', country: 'Latvia', category: 'Baltic Cluster', healthSpend: '€380M', aiReadiness: 'Moderate', note: 'Two major university hospitals in Riga. NVD driving national health digitalization roadmap.' },
    { flag: '🇱🇹', country: 'Lithuania', category: 'Baltic Cluster', healthSpend: '€520M', aiReadiness: 'Moderate', note: 'Santaros Klinikos is the largest hospital in the Baltics. Innovation Agency providing co-funding opportunities.' },
  ];

  revenueStreams = [
    { name: 'Per-Study SaaS', icon: 'receipt_long', color: 'linear-gradient(135deg, var(--color-rhenium), var(--color-rhenium-light))', pricing: '€3–12 / study', desc: 'Usage-based pricing per AI-analyzed study. Volume tiers for high-throughput departments.' },
    { name: 'Enterprise License', icon: 'apartment', color: 'linear-gradient(135deg, var(--color-scandium), var(--color-scandium-light))', pricing: '€50K–250K / yr', desc: 'Unlimited annual license for institutions. Includes on-premise deployment and priority SLAs.' },
    { name: 'Data & Insights', icon: 'analytics', color: 'linear-gradient(135deg, var(--color-seaborgium), var(--color-seaborgium-light))', pricing: 'Custom', desc: 'Anonymized population-health insights, benchmarking dashboards, and research data services.' },
  ];

  roadmap = [
    { year: '2025', title: 'Foundation', desc: 'Core platform launch, Innoland incubation, advisory board formation, seed fundraising. First 5 clinical partners onboarded.', color: 'var(--color-rhenium)' },
    { year: '2026', title: 'Clinical Validation', desc: 'Multi-site clinical trials across 15 institutions, regulatory submissions (CE Mark), Series A fundraising.', color: 'var(--color-scandium)' },
    { year: '2027', title: 'Market Entry', desc: 'Commercial launch in Nordic-Baltic region, 35 institutional partners, €1.8M ARR, PACS vendor integrations.', color: 'var(--color-seaborgium)' },
    { year: '2028', title: 'Scale', desc: 'Expand to 10+ countries, 60 institutions, €6.5M ARR, federated learning network, FDA submission.', color: 'var(--color-terbium)' },
    { year: '2029+', title: 'Global', desc: 'US market entry, 100+ institutions, €18M ARR, Series B, expansion to Asia-Pacific.', color: 'var(--md-sys-color-error)' },
  ];

  compRows = [
    { capability: 'Multi-modal (MRI + CT + US + X-Ray)', skolyn: true, aidoc: false, lunit: false, zebra: true, gleamer: false, qure: false, imyen: false },
    { capability: 'Explainable AI (XAI) with heatmaps', skolyn: true, aidoc: false, lunit: true, zebra: false, gleamer: false, qure: false, imyen: false },
    { capability: 'Natural-language diagnostic rationale', skolyn: true, aidoc: false, lunit: false, zebra: false, gleamer: false, qure: false, imyen: false },
    { capability: 'Federated learning architecture', skolyn: true, aidoc: false, lunit: false, zebra: false, gleamer: false, qure: false, imyen: false },
    { capability: 'On-premise + cloud + hybrid', skolyn: true, aidoc: true, lunit: true, zebra: true, gleamer: false, qure: true, imyen: true },
    { capability: 'CE Mark / FDA cleared', skolyn: false, aidoc: true, lunit: true, zebra: true, gleamer: true, qure: true, imyen: false },
    { capability: 'Nordic-Baltic market focus', skolyn: true, aidoc: false, lunit: false, zebra: false, gleamer: false, qure: false, imyen: false },
    { capability: 'Per-study SaaS pricing', skolyn: true, aidoc: true, lunit: false, zebra: true, gleamer: true, qure: true, imyen: true },
    { capability: 'PACS integration', skolyn: true, aidoc: true, lunit: true, zebra: true, gleamer: true, qure: true, imyen: true },
    { capability: 'Emergency triage workflow', skolyn: true, aidoc: true, lunit: false, zebra: true, gleamer: false, qure: true, imyen: true },
  ];

  moats = [
    { icon: 'visibility', title: 'Explainability Moat', desc: 'Only platform that combines visual heatmaps with natural-language rationale for every prediction.' },
    { icon: 'view_module', title: 'Multi-Modal Breadth', desc: '4 modalities in one unified platform. Competitors focus on single modalities or pathology types.' },
    { icon: 'public', title: 'Nordic-Baltic Corridor', desc: 'First-mover in a high-trust, high-digitalization region with government-backed healthcare IT.' },
    { icon: 'lock', title: 'Federated Learning IP', desc: 'Proprietary federated learning system enables training without data leaving hospital premises.' },
  ];

  startupCompetitors = [
    { name: 'Celsus', focus: 'Radiology workflow AI', color: 'var(--color-rhenium)' },
    { name: 'Gleamer', focus: 'Bone fracture / X-Ray AI', color: 'var(--color-scandium)' },
    { name: 'MRI Guidance', focus: 'MRI-specific diagnostics', color: 'var(--color-terbium)' },
    { name: 'Quibim', focus: 'Imaging biomarkers', color: 'var(--color-seaborgium)' },
  ];

  incumbentCompetitors = [
    { name: 'GE HealthCare', focus: 'Edison AI platform, imaging hardware', color: '#005eb8' },
    { name: 'Philips Healthcare', focus: 'IntelliSpace AI, imaging hardware', color: '#0b5ed7' },
    { name: 'Siemens Healthineers', focus: 'AI-Rad Companion, imaging hardware', color: '#009999' },
  ];

  directCompetitors = [
    { name: 'Aidoc', focus: 'CT/MRI triage, always-on AI', color: '#1a237e' },
    { name: 'Zebra Medical', focus: 'Multi-modal AI, population health', color: '#c62828' },
    { name: 'Lunit', focus: 'Chest X-Ray / mammography AI', color: '#ff6f00' },
    { name: 'Qure.ai', focus: 'Chest X-Ray / head CT, emerging markets', color: '#2e7d32' },
    { name: 'Viz.ai', focus: 'Stroke detection, neuro triage', color: '#6a1b9a' },
  ];

  regionalCompetitors = [
    { name: 'ImYEN', focus: 'Medical imaging AI, Azerbaijan', color: '#e65100' },
  ];

  askDetails = [
    { icon: 'paid', label: 'Round Size', value: '\u20ac2.5M Seed' },
    { icon: 'calendar_month', label: 'Timeline', value: 'Q2-Q3 2025' },
    { icon: 'rocket_launch', label: 'Use', value: 'Product, Clinical Trials, Expansion' },
    { icon: 'flag', label: 'Milestones to Next Round', value: 'CE Mark submission, 15 institutional partners, \u20ac250K ARR' },
    { icon: 'handshake', label: 'Lead Investor', value: 'In discussions, co-lead welcome' },
  ];

  fundAllocation = [
    { icon: 'code', category: 'R&D / Engineering', amount: '\u20ac875K', pct: 35, color: 'var(--color-rhenium)', desc: 'Core platform development, AI model training, and infrastructure scaling.' },
    { icon: 'clinical_notes', category: 'Clinical Trials', amount: '\u20ac625K', pct: 25, color: 'var(--color-scandium)', desc: 'Multi-site validation studies, regulatory documentation, and CE Mark preparation.' },
    { icon: 'storefront', category: 'Sales & Go-to-Market', amount: '\u20ac500K', pct: 20, color: 'var(--color-seaborgium)', desc: 'Business development, partnership management, and market entry in 4 target countries.' },
    { icon: 'groups', category: 'Team Growth', amount: '\u20ac375K', pct: 15, color: 'var(--color-terbium)', desc: 'Key hires in AI research, clinical affairs, and regulatory compliance.' },
    { icon: 'account_balance', category: 'Operations & Legal', amount: '\u20ac125K', pct: 5, color: 'var(--md-sys-color-secondary)', desc: 'Corporate operations, legal, IP filings, and working capital.' },
  ];
}
