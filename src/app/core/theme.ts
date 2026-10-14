import { Injectable, signal } from '@angular/core';

export type Theme = 'dark' | 'light';

const STORAGE_KEY = 'theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly theme = signal<Theme>(this.readSaved());

  constructor() {
    this.apply(this.theme());
  }

  toggle() {
    const next: Theme = this.theme() === 'dark' ? 'light' : 'dark';
    this.theme.set(next);
    this.apply(next);

    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Si el navegador bloquea el almacenamiento, el tema funciona igual, pero no se recuerda.
    }
  }

  private readSaved(): Theme {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'light' || saved === 'dark') return saved;
    } catch {
      // Ignorar: se usa el tema por defecto.
    }
    return 'dark';
  }

  private apply(theme: Theme) {
    document.documentElement.dataset['theme'] = theme;
  }
}
