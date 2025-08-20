import {
  Component,
  Renderer2,
  inject,
  Injector,
  PLATFORM_ID,
  runInInjectionContext,
  effect,
  OnInit,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { TimerComponent } from '../timer/timer.component';
import { RouterModule } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogContentComponent } from '../dialog-content/dialog-content';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    NavbarComponent,
    TimerComponent,
    RouterModule,
    MatDialogModule,
    MatButtonModule,
  ],
})
export class AppComponent implements OnInit {
  private renderer = inject(Renderer2);
  private colorService = inject(ColorService);
  private dialog = inject(MatDialog);
  private platformId = inject(PLATFORM_ID);
  private injector = inject(Injector);

  activeMode: 'pomodoro' | 'shortBreak' | 'longBreak' = 'pomodoro';

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      runInInjectionContext(this.injector, () => {
        effect(() => {
          const color = this.colorService.primaryColor();
          const font = this.colorService.primaryFont();

          this.renderer.setStyle(
            document.documentElement,
            '--primary-color',
            color,
            2
          );
          this.renderer.setStyle(
            document.documentElement,
            '--primary-font',
            font,
            2
          );
        });
      });
    }
  }

  ngOnInit(): void {
    this.colorService.setColor('#F87070');
    this.colorService.setFont('Kumbh Sans');
  }

  onModeChange(mode: 'pomodoro' | 'shortBreak' | 'longBreak') {
    this.activeMode = mode;
  }

  openDialog() {
    this.dialog.open(DialogContentComponent, {
      panelClass: 'custom-dialog-container',
    });
  }
}
