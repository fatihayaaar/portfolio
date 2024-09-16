import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _isDarkTheme: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  isDarkTheme = this._isDarkTheme.asObservable();

  setIsDarkTheme(value: boolean) {
    this._isDarkTheme.next(value);
  }

  getIsDarkTheme(): boolean {
    return this._isDarkTheme.value;
  }

  toggleTheme() {
    this._isDarkTheme.next(!this._isDarkTheme.value);

    document.body.setAttribute(
      'data-theme',
      this._isDarkTheme.value ? 'dark' : 'light'
    );
  }
  getLogoPath(): string {
    return this._isDarkTheme.value ? 'assets/logo-dark.png' : 'assets/logo-light.png';
  }
}
