import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-partners',
  imports: [RouterLink],
  template: `
    <section class="page-hero">
      <div class="container">
        <div class="hero-label"><span class="material-symbols-outlined sz-20">handshake</span> Partners</div>
        <h1 class="display-medium animate-in">Our Partners &amp; Collaborators</h1>
        <p class="body-large text-secondary hero-desc animate-in animate-in-delay-1">
          Building the future of medical AI through strategic clinical, academic, and technology partnerships across 7 countries.
        </p>
        <div class="partner-stats">
          <div class="stat-chip"><span class="stat-value">49</span><span class="stat-label">Institutions</span></div>
          <div class="stat-chip"><span class="stat-value">7</span><span class="stat-label">Countries</span></div>
          <div class="stat-chip"><span class="stat-value">3</span><span class="stat-label">Continents</span></div>
        </div>
      </div>
    </section>

    @for (country of countries; track country.code) {
      <section class="section" [class.alt-bg]="$index % 2 === 1">
        <div class="container">
          <div class="country-header">
            <span class="country-flag">{{ country.flag }}</span>
            <div>
              <h2 class="headline-large">{{ country.name }}</h2>
              <p class="body-medium text-secondary">{{ country.subtitle }}</p>
            </div>
          </div>
          <div class="partner-grid">
            @for (p of country.partners; track p.name) {
              <a [href]="p.url" target="_blank" rel="noopener noreferrer" class="partner-card">
                <div class="partner-logo-wrap">
                  <img [src]="p.logo" [alt]="p.name" loading="lazy" />
                </div>
                <h3 class="title-medium">{{ p.name }}</h3>
                <span class="body-small partner-type">{{ p.type }}</span>
                <span class="body-small partner-link">Visit website →</span>
              </a>
            }
          </div>
        </div>
      </section>
    }

    <section class="section cta-section">
      <div class="container text-center">
        <h2 class="headline-large" style="margin-bottom: 12px;">Become a Partner</h2>
        <p class="body-large text-secondary" style="max-width: 600px; margin: 0 auto 32px;">
          We are actively expanding our partner ecosystem. Whether you are a research institution, hospital, or technology provider, we want to hear from you.
        </p>
        <a routerLink="/contact" class="md-filled-button">Get in Touch</a>
      </div>
    </section>
  `,
  styles: [`
    .page-hero { padding: 120px 0 64px; background: var(--md-sys-color-surface-container-low); text-align: center; }
    .hero-label { display: inline-flex; align-items: center; gap: 8px; padding: 6px 16px 6px 12px; background: rgba(26,115,232,0.08); border-radius: var(--md-sys-shape-corner-full); font: var(--md-sys-typescale-label-large); color: var(--md-sys-color-primary); margin-bottom: 24px; }
    .hero-desc { max-width: 640px; margin: 16px auto 0; font-size: 18px; line-height: 28px; }

    .partner-stats { display: flex; justify-content: center; gap: 16px; margin-top: 32px; flex-wrap: wrap; }
    .stat-chip { display: flex; flex-direction: column; align-items: center; background: var(--md-sys-color-surface); border: 1px solid var(--md-sys-color-outline-variant); border-radius: var(--md-sys-shape-corner-extra-large); padding: 16px 28px; min-width: 100px; }
    .stat-value { font: var(--md-sys-typescale-display-small); color: var(--md-sys-color-primary); font-weight: 700; line-height: 1; }
    .stat-label { font: var(--md-sys-typescale-body-small); color: var(--md-sys-color-on-surface-variant); margin-top: 4px; }

    .alt-bg { background: var(--md-sys-color-surface-variant); }

    .country-header { display: flex; align-items: center; gap: 16px; margin-bottom: 40px; }
    .country-flag { font-size: 48px; line-height: 1; }
    .country-header h2 { margin-bottom: 2px; }

    .partner-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 20px; }

    .partner-card {
      background: var(--md-sys-color-surface);
      border-radius: var(--md-sys-shape-corner-extra-large);
      padding: 28px 24px;
      text-align: center;
      border: 1px solid var(--md-sys-color-outline-variant);
      transition: all 0.3s ease;
      text-decoration: none;
      color: inherit;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .partner-card:hover {
      border-color: var(--md-sys-color-primary);
      box-shadow: var(--md-sys-elevation-2);
      transform: translateY(-4px);
    }

    .partner-logo-wrap {
      width: 100%;
      height: 56px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 16px;
    }
    .partner-logo-wrap img { 
      max-height: 100%; max-width: 140px; object-fit: contain; 
      filter: grayscale(100%) opacity(0.7); transition: filter 0.3s ease; 
    }
    .partner-card:hover .partner-logo-wrap img { filter: grayscale(0%) opacity(1); }
    
    [data-theme="dark"] .partner-logo-wrap img {
      filter: grayscale(100%) opacity(0.8) invert(1);
    }
    [data-theme="dark"] .partner-card:hover .partner-logo-wrap img {
      filter: grayscale(0%) opacity(1) invert(0);
      background: rgba(255,255,255,0.9);
      padding: 4px;
      border-radius: 4px;
    }

    .partner-card h3 { margin-bottom: 4px; font-size: 14px; }
    .partner-type { color: var(--md-sys-color-on-surface-variant); display: block; margin-bottom: 8px; }
    .partner-link { color: var(--md-sys-color-primary); font-weight: 500; opacity: 0; transition: opacity 0.3s; }
    .partner-card:hover .partner-link { opacity: 1; }

    .cta-section { padding: 80px 0; background: linear-gradient(135deg, var(--md-sys-color-primary-container), #e8f0fe); }

    @media (max-width: 640px) {
      .page-hero { padding: 100px 0 48px; }
      .country-flag { font-size: 36px; }
      .partner-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
      .partner-card { padding: 20px 16px; }
      .partner-card h3 { font-size: 12px; }
      .partner-logo-wrap img { max-height: 36px; }
    }
  `],
})
export class PartnersComponent {
  countries = [
    {
      name: 'Azerbaijan',
      code: 'AZ',
      flag: '🇦🇿',
      subtitle: 'Home market: 9 institutional partnerships across healthcare, insurance, and research',
      partners: [
        { name: 'TƏBİB', logo: 'partners/azerbaijan/tabib.png', type: 'Healthcare Agency', url: 'https://www.tabib.gov.az/' },
        { name: 'Səhiyyə Nazirliyi', logo: 'partners/azerbaijan/ministry-of-health-az.png', type: 'Government', url: 'https://www.sehiyye.gov.az/' },
        { name: 'İcbari Tibbi Sığorta', logo: 'partners/azerbaijan/state-agency-health-insurance.png', type: 'Health Insurance', url: 'https://www.its.gov.az/' },
        { name: 'Milli Onkologiya Mərkəzi', logo: 'partners/azerbaijan/national-oncology-center.png', type: 'Hospital', url: 'https://www.mom.gov.az/' },
        { name: 'IDDA (IRIA)', logo: 'partners/azerbaijan/iria.png', type: 'Innovation Agency', url: 'https://www.idda.az/' },
        { name: 'Azərbaycan Tibb Universiteti', logo: 'partners/azerbaijan/azerbaijan-medical-university.png', type: 'University', url: 'https://www.amu.edu.az/' },
        { name: 'Ağ Ciyər Xəstəlikləri İnstitutu', logo: 'partners/azerbaijan/lung-diseases-institute.png', type: 'Research Institute', url: 'https://www.etacxi.az/' },
        { name: 'C4IR Azerbaijan / 4SİM', logo: 'partners/azerbaijan/c4ir-azerbaijan.png', type: 'Innovation Hub', url: 'https://www.c4irazerbaijan.org/' },
        { name: 'Mərkəzi Gömrük Hospitalı', logo: 'partners/azerbaijan/customs-hospital.png', type: 'Hospital', url: 'https://www.customshospital.az/' },
      ]
    },
    {
      name: 'Sweden',
      code: 'SE',
      flag: '🇸🇪',
      subtitle: '10 partnerships spanning university hospitals, government agencies, and research institutes',
      partners: [
        { name: 'Region Stockholm', logo: 'partners/sweden/region-stockholm.png', type: 'Regional Authority', url: 'https://www.regionstockholm.se/' },
        { name: 'Karolinska University Hospital', logo: 'partners/sweden/karolinska.png', type: 'University Hospital', url: 'https://www.karolinska.se/' },
        { name: 'Vinnova', logo: 'partners/sweden/vinnova.png', type: 'Innovation Agency', url: 'https://www.vinnova.se/en/' },
        { name: 'Sahlgrenska University Hospital', logo: 'partners/sweden/sahlgrenska.png', type: 'University Hospital', url: 'https://www.sahlgrenska.se/en' },
        { name: 'Swedish eHealth Agency', logo: 'partners/sweden/swedish-ehealth-agency.png', type: 'Government', url: 'https://www.ehalsomyndigheten.se/' },
        { name: 'Uppsala University Hospital', logo: 'partners/sweden/uppsala-university-hospital.png', type: 'University Hospital', url: 'https://www.akademiska.se/en/' },
        { name: 'Skåne University Hospital', logo: 'partners/sweden/skane-university-hospital.png', type: 'University Hospital', url: 'https://vard.skane.se/skanes-universitetssjukhus-sus' },
        { name: 'RISE', logo: 'partners/sweden/rise.png', type: 'Research Institute', url: 'https://www.ri.se/en' },
        { name: 'Socialstyrelsen', logo: 'partners/sweden/socialstyrelsen.png', type: 'Government', url: 'https://www.socialstyrelsen.se/en/' },
        { name: 'SciLifeLab', logo: 'partners/sweden/scilifelab.png', type: 'Research Infrastructure', url: 'https://www.scilifelab.se/' },
      ]
    },
    {
      name: 'Finland',
      code: 'FI',
      flag: '🇫🇮',
      subtitle: '6 partnerships in hospital systems, health data, and innovation',
      partners: [
        { name: 'HUS Helsinki University Hospital', logo: 'partners/finland/hus-helsinki.png', type: 'University Hospital', url: 'https://www.hus.fi/en' },
        { name: 'Business Finland', logo: 'partners/finland/business-finland.png', type: 'Innovation Agency', url: 'https://www.businessfinland.fi/en' },
        { name: 'Findata', logo: 'partners/finland/findata.png', type: 'Health Data Authority', url: 'https://www.findata.fi/en/' },
        { name: 'VTT', logo: 'partners/finland/vtt.png', type: 'Research Centre', url: 'https://www.vttresearch.com/en' },
        { name: 'TAYS Tampere University Hospital', logo: 'partners/finland/tays.png', type: 'University Hospital', url: 'https://www.pirha.fi/web/english/services/hospital-care' },
        { name: 'Health Capital Helsinki', logo: 'partners/finland/health-capital-helsinki.png', type: 'Innovation Cluster', url: 'https://www.healthcapitalhelsinki.fi/' },
      ]
    },
    {
      name: 'Denmark',
      code: 'DK',
      flag: '🇩🇰',
      subtitle: '6 leading hospitals, health data authorities, and innovation funds',
      partners: [
        { name: 'Rigshospitalet', logo: 'partners/denmark/rigshospitalet.png', type: 'University Hospital', url: 'https://www.rigshospitalet.dk/english/Pages/default.aspx' },
        { name: 'Danish Health Data Authority', logo: 'partners/denmark/danish-health-data-authority.png', type: 'Government', url: 'https://english.sundhedsdatastyrelsen.dk/' },
        { name: 'Aarhus University Hospital', logo: 'partners/denmark/aarhus-university-hospital.png', type: 'University Hospital', url: 'https://www.en.auh.dk/' },
        { name: 'Innovation Fund Denmark', logo: 'partners/denmark/innovation-fund-denmark.png', type: 'Innovation Fund', url: 'https://www.innovationsfonden.dk/en' },
        { name: 'Odense University Hospital', logo: 'partners/denmark/odense-university-hospital.png', type: 'University Hospital', url: 'https://en.ouh.dk/' },
        { name: 'MedCom', logo: 'partners/denmark/medcom.png', type: 'Health IT', url: 'https://www.medcom.dk/medcom-in-english/' },
      ]
    },
    {
      name: 'Estonia',
      code: 'EE',
      flag: '🇪🇪',
      subtitle: '6 partnerships across digital health, hospitals, and government',
      partners: [
        { name: 'North Estonia Medical Centre', logo: 'partners/estonia/north-estonia-medical-centre.png', type: 'Hospital', url: 'https://www.regionaalhaigla.ee/' },
        { name: 'Tartu University Hospital', logo: 'partners/estonia/tartu-university-hospital.png', type: 'University Hospital', url: 'https://www.kliinikum.ee/' },
        { name: 'Tervisekassa', logo: 'partners/estonia/estonian-health-insurance-fund.png', type: 'Health Insurance', url: 'https://www.tervisekassa.ee/' },
        { name: 'TEHIK', logo: 'partners/estonia/tehik.png', type: 'Health IT', url: 'https://www.tehik.ee/' },
        { name: 'Tehnopol', logo: 'partners/estonia/tehnopol.png', type: 'Innovation Hub', url: 'https://www.tehnopol.ee/' },
        { name: 'Ministry of Social Affairs', logo: 'partners/estonia/ministry-of-social-affairs-ee.png', type: 'Government', url: 'https://www.sm.ee/' },
      ]
    },
    {
      name: 'Latvia',
      code: 'LV',
      flag: '🇱🇻',
      subtitle: '6 partnerships including university hospitals, government, and academia',
      partners: [
        { name: 'Riga East Clinical University Hospital', logo: 'partners/latvia/riga-east-hospital.png', type: 'University Hospital', url: 'https://www.aslimnica.lv/' },
        { name: 'Pauls Stradiņš Hospital', logo: 'partners/latvia/pauls-stradins-hospital.png', type: 'University Hospital', url: 'https://www.stradini.lv/' },
        { name: 'National Health Service', logo: 'partners/latvia/national-health-service-lv.png', type: 'Government', url: 'https://www.vmnvd.gov.lv/' },
        { name: 'LIAA', logo: 'partners/latvia/liaa.png', type: 'Investment Agency', url: 'https://www.liaa.gov.lv/' },
        { name: "Children's Clinical University Hospital", logo: 'partners/latvia/childrens-hospital-lv.png', type: 'Hospital', url: 'https://www.bkus.lv/' },
        { name: 'Riga Stradiņš University', logo: 'partners/latvia/riga-stradins-university.png', type: 'University', url: 'https://www.rsu.lv/' },
      ]
    },
    {
      name: 'Lithuania',
      code: 'LT',
      flag: '🇱🇹',
      subtitle: '6 partnerships spanning hospitals, government, and cancer research',
      partners: [
        { name: 'Santaros Klinikos', logo: 'partners/lithuania/vilnius-university-hospital.png', type: 'University Hospital', url: 'https://www.santa.lt/' },
        { name: 'Kauno Klinikos', logo: 'partners/lithuania/kauno-klinikos.png', type: 'University Hospital', url: 'https://www.kaunoklinikos.lt/' },
        { name: 'Ministry of Health', logo: 'partners/lithuania/ministry-of-health-lt.png', type: 'Government', url: 'https://sam.lrv.lt/' },
        { name: 'Innovation Agency Lithuania', logo: 'partners/lithuania/innovation-agency-lithuania.png', type: 'Innovation Agency', url: 'https://www.inovacijuagentura.lt/' },
        { name: 'National Cancer Institute', logo: 'partners/lithuania/national-cancer-institute-lt.png', type: 'Research Institute', url: 'https://www.nvi.lt/' },
        { name: 'VLK (Health Insurance Fund)', logo: 'partners/lithuania/vlk.png', type: 'Health Insurance', url: 'https://ligoniukasa.lrv.lt/' },
      ]
    },
  ];
}
