import { Injectable, effect, signal, computed } from '@angular/core';

export type LangCode = 'en' | 'de' | 'sv' | 'tr';

export interface Language {
  code: LangCode;
  label: string;
}

export const LANGUAGES: Language[] = [
  { code: 'en', label: 'English' },
  { code: 'de', label: 'Deutsch' },
  { code: 'sv', label: 'Svenska' },
  { code: 'tr', label: 'Türkçe' },
];

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  languageSignal = signal<LangCode>('en');
  private translations: Record<string, Record<string, string>> = {};

  constructor() {
    this.initLanguage();

    effect(() => {
      const lang = this.languageSignal();
      if (typeof window !== 'undefined') {
        document.documentElement.setAttribute('lang', lang);
        localStorage.setItem('language', lang);
      }
    });
  }

  initLanguage() {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('language') as LangCode | null;
      if (stored && LANGUAGES.some(l => l.code === stored)) {
        this.languageSignal.set(stored);
      } else {
        const browserLang = navigator.language?.substring(0, 2) as LangCode;
        if (LANGUAGES.some(l => l.code === browserLang)) {
          this.languageSignal.set(browserLang);
        }
      }
    }
  }

  setLanguage(code: LangCode) {
    this.languageSignal.set(code);
  }

  registerTranslations(lang: LangCode, translations: Record<string, string>) {
    if (!this.translations[lang]) {
      this.translations[lang] = {};
    }
    Object.assign(this.translations[lang], translations);
  }

  t(key: string, params?: Record<string, string>): string {
    const lang = this.languageSignal();
    let value = this.translations[lang]?.[key] || this.translations['en']?.[key] || key;
    if (params) {
      Object.entries(params).forEach(([k, v]) => {
        value = value.replace(new RegExp(`{{${k}}}`, 'g'), v);
      });
    }
    return value;
  }

  getCurrentLanguage(): Language {
    return LANGUAGES.find(l => l.code === this.languageSignal()) || LANGUAGES[0];
  }
}
