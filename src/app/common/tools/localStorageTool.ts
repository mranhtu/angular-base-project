import {CURRENCY_MASK, LANGUAGES} from '../constants';
import {BehaviorSubject} from 'rxjs';

export class LocalStorageTool {

  public static CurrencyConfigSubject: BehaviorSubject<{
    round: number;
    pattern: string;
    thousandSeparator: string;
  }> = new BehaviorSubject<{
    round: number;
    pattern: string;
    thousandSeparator: string;
  }>(CURRENCY_MASK.CURRENT_CONFIG);

  public static getLanguage(): string {
    let language = localStorage.getItem('language');
    if (language === undefined || language === null || language === '') {
      language = LANGUAGES.VI;
      LocalStorageTool.setLanguage(language);
    }
    return language;
  }

  public static setLanguage(language): void {
    localStorage.setItem('language', language);
    LocalStorageTool.setupCurrencySeperator(language);
  }

  public static getToken(): string {
    return localStorage.getItem('token');
  }

  public static setupCurrencySeperator(language: string): void {
    if (language === LANGUAGES.EN) {
      CURRENCY_MASK.CURRENT_CONFIG.thousandSeparator = CURRENCY_MASK.EN_SEPARATOR;
    }

    if (language === LANGUAGES.VI) {
      CURRENCY_MASK.CURRENT_CONFIG.thousandSeparator = CURRENCY_MASK.VI_SEPARATOR;
    }

    LocalStorageTool.CurrencyConfigSubject.next(CURRENCY_MASK.CURRENT_CONFIG);
  }

  public static clearStorage(data?: {
    url?: string
    lang?: string
  }): void {
    const language = LocalStorageTool.getLanguage();
    localStorage.clear();
    LocalStorageTool.setLanguage(language);
    if (data && data.url){
      localStorage.setItem('route', data.url);
    }
  }

}
