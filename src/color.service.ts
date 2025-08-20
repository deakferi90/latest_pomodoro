import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  private colorKey = 'primaryColor';
  private fontKey = 'primaryFont';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  setColor(color: string) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.colorKey, color);
      document.documentElement.style.setProperty('--primary-color', color);
    }
  }

  primaryColor(): any {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(this.colorKey) || null;
    }
    return null;
  }

  setFont(fontClass: string) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.fontKey, fontClass);

      document.body.classList.remove(
        'kumbh-sans-bold',
        'space-mono-bold',
        'roboto-slab-regular'
      );
      document.body.classList.add(fontClass);

      document.documentElement.style.setProperty('--primary-font', fontClass);
    }
  }

  primaryFont(): string {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(this.fontKey) || 'kumbh-sans-bold';
    }
    return 'kumbh-sans-bold';
  }
}
