import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  private _primaryColor = signal<string>('#F87070'); // default color
  private _primaryFont = signal<string>('Kumbh Sans'); // default font

  primaryColor(): string {
    return this._primaryColor();
  }

  primaryFont(): string {
    return this._primaryFont();
  }

  setColor(color: string): void {
    this._primaryColor.set(color);
  }

  setFont(font: string): void {
    this._primaryFont.set(font);
  }

  get colorSignal() {
    return this._primaryColor;
  }

  get fontSignal() {
    return this._primaryFont;
  }
}
