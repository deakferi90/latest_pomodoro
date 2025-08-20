import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ColorService } from '../color.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog-content',
  standalone: true,
  templateUrl: './dialog-content.html',
  styleUrls: ['./dialog-content.scss'],
  imports: [CommonModule],
})
export class DialogContentComponent {
  selectedColor: string;
  selectedFont: string;

  fonts = [
    { name: 'Kumbh Sans', class: 'kumbh-sans-bold' },
    { name: 'Space Mono', class: 'space-mono-bold' },
    { name: 'Roboto Slab', class: 'roboto-slab-regular' },
  ];

  colors = ['#F87070', '#70F3F8', '#D881F8'];

  constructor(
    private colorService: ColorService,
    private dialogRef: MatDialogRef<DialogContentComponent>,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.selectedColor = this.colorService.primaryColor();
    this.selectedFont = this.colorService.primaryFont();
  }

  closeDialog() {
    this.dialogRef.close();
  }

  selectColor(color: string) {
    this.selectedColor = color;
  }

  selectFont(fontClass: string) {
    this.selectedFont = fontClass;
  }

  applySettings() {
    this.colorService.setColor(this.selectedColor);
    this.colorService.setFont(this.selectedFont);

    this.dialogRef.close();
  }
}
