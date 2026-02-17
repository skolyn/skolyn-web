import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar" [class.scrolled]="isScrolled">
      <div class="navbar-inner container-wide">
        <a routerLink="/" class="navbar-brand">
          <img src="/assets/skolyn-logo-wide.svg" alt="Skolyn" class="brand-logo-wide" />
          <img src="/assets/skolyn-logo-icon.svg" alt="Skolyn" class="brand-logo-icon" />
        </a>

        <div class="navbar-links" [class.open]="menuOpen">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="closeMenu()">Home</a>
          <a routerLink="/about" routerLinkActive="active" (click)="closeMenu()">About</a>

          <div class="dropdown">
            <a routerLink="/modules" routerLinkActive="active" class="dropdown-trigger">
              Modules
              <span class="material-symbols-outlined sz-20">expand_more</span>
            </a>
            <div class="dropdown-menu">
              <a routerLink="/modules/rhenium" (click)="closeMenu()">
                <span class="dot rhenium"></span>
                Rhenium OS / MRI
              </a>
              <a routerLink="/modules/seaborgium" (click)="closeMenu()">
                <span class="dot seaborgium"></span>
                Seaborgium OS / CT
              </a>
              <a routerLink="/modules/scandium" (click)="closeMenu()">
                <span class="dot scandium"></span>
                Scandium OS / Ultrasound
              </a>
              <a routerLink="/modules/terbium" (click)="closeMenu()">
                <span class="dot terbium"></span>
                Terbium OS / X-Ray
              </a>
            </div>
          </div>

          <div class="dropdown">
            <a routerLink="/platform" routerLinkActive="active" class="dropdown-trigger">
              Platform
              <span class="material-symbols-outlined sz-20">expand_more</span>
            </a>
            <div class="dropdown-menu dropdown-menu-wide">
              <a routerLink="/technology" (click)="closeMenu()">
                <span class="material-symbols-outlined sz-20">psychology</span>
                Technology
              </a>
              <a routerLink="/pipeline" (click)="closeMenu()">
                <span class="material-symbols-outlined sz-20">account_tree</span>
                Diagnostic Pipeline
              </a>
              <a routerLink="/interface" (click)="closeMenu()">
                <span class="material-symbols-outlined sz-20">dashboard</span>
                Clinician Interface
              </a>
              <a routerLink="/infrastructure" (click)="closeMenu()">
                <span class="material-symbols-outlined sz-20">memory</span>
                AI Infrastructure
              </a>
              <a routerLink="/interoperability" (click)="closeMenu()">
                <span class="material-symbols-outlined sz-20">share</span>
                Interoperability
              </a>
              <a routerLink="/validation" (click)="closeMenu()">
                <span class="material-symbols-outlined sz-20">science</span>
                Clinical Validation
              </a>
              <a routerLink="/deployment" (click)="closeMenu()">
                <span class="material-symbols-outlined sz-20">deployed_code</span>
                Deployment
              </a>
              <a routerLink="/security" (click)="closeMenu()">
                <span class="material-symbols-outlined sz-20">shield</span>
                Security & Compliance
              </a>
            </div>
          </div>

          <div class="dropdown">
            <a routerLink="/research" routerLinkActive="active" class="dropdown-trigger">
              SIERRA
              <span class="material-symbols-outlined sz-20">expand_more</span>
            </a>
            <div class="dropdown-menu dropdown-menu-wide">
              <a routerLink="/research/departments" (click)="closeMenu()">
                <span class="material-symbols-outlined sz-20">hub</span>
                Departments
              </a>
              <a routerLink="/research/team" (click)="closeMenu()">
                <span class="material-symbols-outlined sz-20">groups</span>
                Research Team
              </a>
              <a routerLink="/research/publications" (click)="closeMenu()">
                <span class="material-symbols-outlined sz-20">menu_book</span>
                Publications
              </a>
              <a routerLink="/research/programs" (click)="closeMenu()">
                <span class="material-symbols-outlined sz-20">school</span>
                Programs
              </a>
              <a routerLink="/research/impact" (click)="closeMenu()">
                <span class="material-symbols-outlined sz-20">trending_up</span>
                Impact
              </a>
            </div>
          </div>

          <a routerLink="/roadmap" routerLinkActive="active" (click)="closeMenu()">Roadmap</a>

          <div class="dropdown">
            <a routerLink="/team" routerLinkActive="active" class="dropdown-trigger">
              Team
              <span class="material-symbols-outlined sz-20">expand_more</span>
            </a>
            <div class="dropdown-menu dropdown-menu-wide">
              <a routerLink="/team/leadership" (click)="closeMenu()">
                <span class="material-symbols-outlined sz-20">star</span>
                Executive Leadership
              </a>
              <a routerLink="/team/ai-rd" (click)="closeMenu()">
                <span class="dot dot-ai-rd"></span>
                AI Research & Development
              </a>
              <a routerLink="/team/engineering" (click)="closeMenu()">
                <span class="dot dot-engineering"></span>
                Engineering
              </a>
              <a routerLink="/team/clinical" (click)="closeMenu()">
                <span class="dot dot-clinical"></span>
                Clinical & Radiology
              </a>
              <a routerLink="/team/regulatory" (click)="closeMenu()">
                <span class="dot dot-regulatory"></span>
                Regulatory & Compliance
              </a>
              <a routerLink="/team/legal" (click)="closeMenu()">
                <span class="dot dot-legal"></span>
                Legal & IP
              </a>
              <a routerLink="/team/product" (click)="closeMenu()">
                <span class="dot dot-product"></span>
                Product & Design
              </a>
              <a routerLink="/team/commercial" (click)="closeMenu()">
                <span class="dot dot-commercial"></span>
                Commercial & Partnerships
              </a>
              <a routerLink="/team/finance" (click)="closeMenu()">
                <span class="dot dot-finance"></span>
                Finance & Operations
              </a>
              <a routerLink="/team/advisors" (click)="closeMenu()">
                <span class="material-symbols-outlined sz-20">school</span>
                Advisory Board
              </a>
            </div>
          </div>

          <div class="dropdown">
            <a class="dropdown-trigger" style="cursor: pointer;">
              Resources
              <span class="material-symbols-outlined sz-20">expand_more</span>
            </a>
            <div class="dropdown-menu">
              <a routerLink="/docs" (click)="closeMenu()">
                <span class="material-symbols-outlined sz-20">description</span>
                Documentation
              </a>
              <a routerLink="/blog" (click)="closeMenu()">
                <span class="material-symbols-outlined sz-20">article</span>
                Blog & News
              </a>
              <a routerLink="/faq" (click)="closeMenu()">
                <span class="material-symbols-outlined sz-20">help</span>
                FAQ
              </a>
            </div>
          </div>

          <div class="dropdown">
            <a class="dropdown-trigger" style="cursor: pointer;">
              Company
              <span class="material-symbols-outlined sz-20">expand_more</span>
            </a>
            <div class="dropdown-menu">
              <a routerLink="/careers" (click)="closeMenu()">
                <span class="material-symbols-outlined sz-20">work</span>
                Careers
              </a>
              <a routerLink="/partners" (click)="closeMenu()">
                <span class="material-symbols-outlined sz-20">handshake</span>
                Partners
              </a>
              <a routerLink="/investors" (click)="closeMenu()">
                <span class="material-symbols-outlined sz-20">trending_up</span>
                Investors
              </a>
              <a routerLink="/contact" (click)="closeMenu()">
                <span class="material-symbols-outlined sz-20">mail</span>
                Contact
              </a>
            </div>
          </div>
        </div>

        <button class="hamburger" (click)="toggleMenu()" [attr.aria-label]="menuOpen ? 'Close menu' : 'Open menu'">
          <span class="material-symbols-outlined">{{ menuOpen ? 'close' : 'menu' }}</span>
        </button>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      position: fixed; top: 0; left: 0; right: 0; height: var(--navbar-height);
      background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px); z-index: 1000;
      transition: all var(--md-sys-motion-duration-medium2) var(--md-sys-motion-easing-standard);
      border-bottom: 1px solid transparent;
    }
    .navbar.scrolled { border-bottom-color: var(--md-sys-color-outline-variant); background: rgba(255,255,255,0.95); }
    .navbar-inner { display: flex; align-items: center; justify-content: space-between; height: 100%; }
    .navbar-brand { display: flex; align-items: center; text-decoration: none; }
    .navbar-brand:hover { text-decoration: none; }
    .brand-logo-wide { height: 32px; width: auto; }
    .brand-logo-icon { display: none; height: 36px; width: 36px; }
    .navbar-links { display: flex; align-items: center; gap: 2px; }
    .navbar-links > a, .dropdown-trigger {
      display: flex; align-items: center; gap: 2px; padding: 8px 14px;
      border-radius: var(--md-sys-shape-corner-full); font: var(--md-sys-typescale-label-large);
      color: var(--md-sys-color-on-surface-variant); text-decoration: none;
      transition: all var(--md-sys-motion-duration-short4) var(--md-sys-motion-easing-standard); white-space: nowrap;
    }
    .navbar-links > a:hover, .dropdown-trigger:hover {
      background: var(--md-sys-color-surface-container); color: var(--md-sys-color-on-surface); text-decoration: none;
    }
    .navbar-links > a.active, .dropdown-trigger.active {
      color: var(--md-sys-color-primary); background: var(--md-sys-color-primary-container);
    }
    .dropdown { position: relative; }
    .dropdown-menu {
      position: absolute; top: 100%; left: 50%; transform: translateX(-50%) translateY(8px);
      min-width: 220px; background: var(--md-sys-color-surface);
      border-radius: var(--md-sys-shape-corner-medium); box-shadow: var(--md-sys-elevation-3);
      padding: 8px 0; opacity: 0; visibility: hidden;
      transition: all var(--md-sys-motion-duration-short4) var(--md-sys-motion-easing-standard);
    }
    .dropdown-menu-wide { min-width: 240px; }
    .dropdown:hover .dropdown-menu { opacity: 1; visibility: visible; transform: translateX(-50%) translateY(4px); }
    .dropdown-menu a {
      display: flex; align-items: center; gap: 10px; padding: 10px 20px;
      font: var(--md-sys-typescale-body-medium); color: var(--md-sys-color-on-surface); text-decoration: none;
      transition: background var(--md-sys-motion-duration-short3) var(--md-sys-motion-easing-standard);
    }
    .dropdown-menu a:hover { background: var(--md-sys-color-surface-container); text-decoration: none; }
    .dropdown-menu .material-symbols-outlined { color: var(--md-sys-color-on-surface-variant); }
    .dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
    .dot.rhenium { background: var(--color-rhenium); }
    .dot.seaborgium { background: var(--color-seaborgium); }
    .dot.scandium { background: var(--color-scandium); }
    .dot.terbium { background: var(--color-terbium); }
    .dot.dot-ai-rd { background: #1a73e8; }
    .dot.dot-engineering { background: #ea8600; }
    .dot.dot-clinical { background: #d93025; }
    .dot.dot-regulatory { background: #9c27b0; }
    .dot.dot-legal { background: #0d652d; }
    .dot.dot-product { background: #5c6bc0; }
    .dot.dot-commercial { background: #b06000; }
    .dot.dot-finance { background: #00796b; }
    .hamburger {
      display: none; border: none; background: none; cursor: pointer; padding: 8px;
      border-radius: var(--md-sys-shape-corner-full); color: var(--md-sys-color-on-surface);
      transition: background var(--md-sys-motion-duration-short3) var(--md-sys-motion-easing-standard);
    }
    .hamburger:hover { background: var(--md-sys-color-surface-container); }
    @media (max-width: 1024px) {
      .hamburger { display: flex; align-items: center; justify-content: center; }
      .brand-logo-wide { display: none; }
      .brand-logo-icon { display: block; }
      .navbar-links {
        position: fixed; top: var(--navbar-height); left: 0; right: 0; bottom: 0;
        flex-direction: column; background: var(--md-sys-color-surface); padding: 16px; gap: 4px;
        align-items: stretch; transform: translateX(100%);
        transition: transform var(--md-sys-motion-duration-medium2) var(--md-sys-motion-easing-emphasized);
        overflow-y: auto;
      }
      .navbar-links.open { transform: translateX(0); }
      .navbar-links > a, .dropdown-trigger { padding: 14px 20px; border-radius: var(--md-sys-shape-corner-medium); font-size: 15px; }
      .dropdown-menu {
        position: static; transform: none; box-shadow: none; opacity: 1; visibility: visible;
        padding: 0 0 0 16px; background: transparent;
      }
      .dropdown:hover .dropdown-menu { transform: none; }
    }
  `],
})
export class NavbarComponent {
  isScrolled = false;
  menuOpen = false;

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => { this.isScrolled = window.scrollY > 8; });
    }
  }

  toggleMenu() { this.menuOpen = !this.menuOpen; }
  closeMenu() { this.menuOpen = false; }
}
