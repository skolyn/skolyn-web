import { Injectable, effect, signal } from '@angular/core';

export type LangCode = 'en' | 'de' | 'sv' | 'tr';

export interface Language {
  code: LangCode;
  label: string;
  flag: string;
}

export const LANGUAGES: Language[] = [
  { code: 'en', label: 'English (US)', flag: '🇺🇸' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'sv', label: 'Svenska', flag: '🇸🇪' },
  { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
];

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  languageSignal = signal<LangCode>('en');

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
        // Detect browser language
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

  getCurrentLanguage(): Language {
    return LANGUAGES.find(l => l.code === this.languageSignal()) || LANGUAGES[0];
  }
}
