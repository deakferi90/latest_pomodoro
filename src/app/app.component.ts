import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  signal,
} from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { TimerComponent } from '../timer/timer.component';
import { RouterModule } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogContentComponent } from '../dialog-content/dialog-content';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    NavbarComponent,
    TimerComponent,
    RouterModule,
    MatDialogModule,
    MatButtonModule,
  ],
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.renderer.setStyle(
      this.el.nativeElement,
      '--primary-color',
      this.primaryColor
    );
  }

  activeBtn = signal<'pomodoro' | 'shortBreak' | 'longBreak'>('pomodoro');
  activeMode: 'pomodoro' | 'shortBreak' | 'longBreak' = 'pomodoro';

  primaryColor = '#f87070';

  onModeChange(mode: 'pomodoro' | 'shortBreak' | 'longBreak') {
    this.activeMode = mode;
  }

  openDialog() {
    this.dialog.open(DialogContentComponent);
  }
}
