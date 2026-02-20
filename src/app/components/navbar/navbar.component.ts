import { Component, computed } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar" [class.scrolled]="isScrolled">
      <div class="navbar-inner container-wide">
        <a routerLink="/" class="navbar-brand">
          <img src="assets/skolyn-logo-wide.svg" alt="Skolyn" class="brand-logo-wide" />
          <img src="assets/skolyn-logo-icon.svg" alt="Skolyn" class="brand-logo-icon" />
        </a>

        <div class="navbar-links" [class.open]="menuOpen">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="closeMenu()">Home</a>
          <a routerLink="/about" routerLinkActive="active" (click)="closeMenu()">About</a>

          <div class="dropdown" [class.open]="isDropdownOpen('modules')">
            <a routerLink="/modules" routerLinkActive="active" class="dropdown-trigger" (click)="onDropdownTrigger($event, 'modules')">
              Modules
              <span class="material-symbols-outlined sz-20">expand_more</span>
            </a>
            <div class="dropdown-menu">
              <a routerLink="/modules/rhenium" routerLinkActive="active" (click)="closeMenu()">
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

          <div class="dropdown" [class.open]="isDropdownOpen('platform')">
            <a routerLink="/platform" routerLinkActive="active" class="dropdown-trigger" (click)="onDropdownTrigger($event, 'platform')">
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

          <div class="dropdown" [class.open]="isDropdownOpen('sierra')">
            <a routerLink="/research" routerLinkActive="active" class="dropdown-trigger" (click)="onDropdownTrigger($event, 'sierra')">
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

          <div class="dropdown" [class.open]="isDropdownOpen('team')">
            <a routerLink="/team" routerLinkActive="active" class="dropdown-trigger" (click)="onDropdownTrigger($event, 'team')">
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

          <div class="dropdown" [class.open]="isDropdownOpen('resources')">
            <a class="dropdown-trigger" style="cursor: pointer;" (click)="onDropdownTrigger($event, 'resources')">
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

          <div class="dropdown" [class.open]="isDropdownOpen('company')">
            <a class="dropdown-trigger" style="cursor: pointer;" (click)="onDropdownTrigger($event, 'company')">
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

        <div class="navbar-actions">
          <div class="dropdown language-dropdown" [class.open]="isDropdownOpen('language')">
            <button class="icon-toggle" (click)="onDropdownTrigger($event, 'language')" aria-label="Select Language">
              <span class="material-symbols-outlined sz-20 relative-top-1">language</span>
            </button>
            <div class="dropdown-menu dropdown-menu-right">
              <a href="#" (click)="closeMenu()">English (US)</a>
              <a href="#" (click)="closeMenu()">Deutsch</a>
              <a href="#" (click)="closeMenu()">Svenska</a>
              <a href="#" (click)="closeMenu()">Türkçe</a>
            </div>
          </div>

          <button class="icon-toggle theme-toggle" (click)="toggleTheme()" [attr.aria-label]="isDarkTheme() ? 'Switch to light mode' : 'Switch to dark mode'">
            <span class="material-symbols-outlined sz-20 relative-top-1">{{ isDarkTheme() ? 'light_mode' : 'dark_mode' }}</span>
          </button>
          
          <a routerLink="/login" class="md-button md-button-outlined navbar-login-btn">
            Platform Login
          </a>
          
          <button class="hamburger" (click)="toggleMenu()" [attr.aria-label]="menuOpen ? 'Close menu' : 'Open menu'">
            <span class="material-symbols-outlined">{{ menuOpen ? 'close' : 'menu' }}</span>
          </button>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      position: fixed; top: 0; left: 0; right: 0; height: var(--navbar-height);
      background: var(--md-sys-color-surface-transparent); backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px); z-index: 1000;
      transition: all var(--md-sys-motion-duration-medium2) var(--md-sys-motion-easing-standard);
      border-bottom: 1px solid transparent;
    }
    .navbar.scrolled { border-bottom-color: var(--md-sys-color-outline-variant); background: var(--md-sys-color-surface); }
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
      transition: all var(--md-sys-motion-duration-short4) var(--md-sys-motion-easing-standard); white-space: nowrap; cursor: pointer;
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
    .dropdown-menu-right { left: auto; right: 0; transform: translateX(0) translateY(8px); }
    .dropdown:hover .dropdown-menu { opacity: 1; visibility: visible; transform: translateX(-50%) translateY(4px); }
    .dropdown:hover .dropdown-menu-right { transform: translateX(0) translateY(4px); }
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
    
    .navbar-actions { display: flex; align-items: center; gap: 8px; }
    
    .icon-toggle {
      display: flex; align-items: center; justify-content: center;
      width: 40px; height: 40px; border: none; background: transparent; cursor: pointer;
      border-radius: 50%; color: var(--md-sys-color-on-surface-variant);
      transition: background var(--md-sys-motion-duration-short3) var(--md-sys-motion-easing-standard), color var(--md-sys-motion-duration-short3);
    }
    .icon-toggle .material-symbols-outlined {
      transition: transform 0.3s ease;
    }
    .icon-toggle:hover { 
      background: var(--md-sys-color-surface-container-highest); 
      color: var(--md-sys-color-on-surface);
    }
    .theme-toggle:active .material-symbols-outlined { transform: rotate(45deg) scale(0.9); }
    .relative-top-1 { position: relative; top: 1px; }

    .navbar-login-btn {
      margin-left: 8px;
    }
    
    .hamburger {
      display: none; border: none; background: none; cursor: pointer; padding: 10px;
      border-radius: var(--md-sys-shape-corner-full); color: var(--md-sys-color-on-surface);
      transition: background var(--md-sys-motion-duration-short3) var(--md-sys-motion-easing-standard);
    }
    .hamburger:hover { background: var(--md-sys-color-surface-container); }
    @media (max-width: 1024px) {
      .hamburger { display: flex; align-items: center; justify-content: center; }
      .brand-logo-wide { display: none; }
      .brand-logo-icon { display: block; }
      .navbar-links {
        position: absolute; top: 100%; left: 0; right: 0;
        height: calc(100dvh - var(--navbar-height));
        flex-direction: column; background: var(--md-sys-color-surface); padding: 16px; gap: 4px;
        align-items: stretch; transform: translateX(100%);
        transition: transform var(--md-sys-motion-duration-medium2) var(--md-sys-motion-easing-emphasized);
        overflow-y: auto;
        z-index: 1001;
      }
      .navbar-links.open { transform: translateX(0); }
      .navbar-links > a, .dropdown-trigger { padding: 14px 20px; border-radius: var(--md-sys-shape-corner-medium); font-size: 15px; }
      .dropdown-menu {
        position: static; transform: none; box-shadow: none; opacity: 0; visibility: hidden;
        max-height: 0; overflow: hidden;
        padding: 0 0 0 16px; background: transparent;
        transition: max-height var(--md-sys-motion-duration-short4) var(--md-sys-motion-easing-standard);
      }
      .dropdown.open .dropdown-menu {
        opacity: 1; visibility: visible; max-height: 720px;
        padding-top: 8px;
      }
      .dropdown:hover .dropdown-menu { transform: none; }
    }
  `],
})
export class NavbarComponent {
  isScrolled = false;
  menuOpen = false;
  activeDropdown: string | null = null;
  
  isDarkTheme = computed(() => this.themeService.themeSignal() === 'dark');

  constructor(private themeService: ThemeService) {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => { this.isScrolled = window.scrollY > 8; });
    }
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    if (!this.menuOpen) this.activeDropdown = null;
  }

  closeMenu() {
    this.menuOpen = false;
    this.activeDropdown = null;
  }

  isDropdownOpen(key: string) {
    return this.activeDropdown === key;
  }

  onDropdownTrigger(event: Event, key: string) {
    if (typeof window !== 'undefined') {
      // Allow trigger on desktop for language menu to click-toggle if needed
      if (window.innerWidth <= 1024 || key === 'language') {
        event.preventDefault();
        this.activeDropdown = this.activeDropdown === key ? null : key;
      }
    }
  }
}
