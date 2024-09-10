import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class TranslateService {
    private currentLang: string = 'en';
    private translations: any = {};
    private langChangeSubject = new BehaviorSubject<string>(this.currentLang);

    constructor(private http: HttpClient) {
        this.use(this.currentLang);
    }

    use(lang: string): void {
        this.currentLang = lang;
        this.loadTranslations(lang).subscribe();
        this.langChangeSubject.next(lang);
    }

    private loadTranslations(lang: string): Observable<any> {
        return this.http.get<any>(`assets/i18n/${lang}.json`).pipe(
            map((translations: any) => {
                this.translations = translations;
                return translations;
            })
        );
    }

    translate(key: string): string {
        return this.translations[key] || key;
    }

    onLangChange(): Observable<string> {
        return this.langChangeSubject.asObservable();
    }

    getCurrentLanguage() {
        return this.currentLang;
    }
}