import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() activeMode: 'pomodoro' | 'shortBreak' | 'longBreak' = 'pomodoro';
  @Output() modeChange = new EventEmitter<
    'pomodoro' | 'shortBreak' | 'longBreak'
  >();

  modes = [
    { label: 'Pomodoro', value: 'pomodoro' },
    { label: 'Short Break', value: 'shortBreak' },
    { label: 'Long Break', value: 'longBreak' },
  ];

  selectMode(mode: 'pomodoro' | 'shortBreak' | 'longBreak') {
    this.modeChange.emit(mode);
  }
}
