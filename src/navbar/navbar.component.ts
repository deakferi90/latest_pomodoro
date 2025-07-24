import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

type TimerMode = 'pomodoro' | 'shortBreak' | 'longBreak';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class NavbarComponent {
  @Input() activeMode!: 'pomodoro' | 'shortBreak' | 'longBreak';
  @Output() modeChange = new EventEmitter<
    'pomodoro' | 'shortBreak' | 'longBreak'
  >();

  modes: { label: string; value: TimerMode }[] = [
    { label: 'Pomodoro', value: 'pomodoro' },
    { label: 'Short Break', value: 'shortBreak' },
    { label: 'Long Break', value: 'longBreak' },
  ];

  selectMode(mode: TimerMode) {
    this.modeChange.emit(mode);
  }
}
