import { Component, signal } from '@angular/core';
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
export class AppComponent {
  constructor(private dialog: MatDialog) {}
  activeBtn = signal<'pomodoro' | 'shortBreak' | 'longBreak'>('pomodoro');
  activeMode: 'pomodoro' | 'shortBreak' | 'longBreak' = 'pomodoro';

  onModeChange(mode: 'pomodoro' | 'shortBreak' | 'longBreak') {
    this.activeMode = mode;
  }

  openDialog() {
    this.dialog.open(DialogContentComponent);
  }
}
