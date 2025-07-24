import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { By } from '@angular/platform-browser';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit modeChange on button click', () => {
    spyOn(component.modeChange, 'emit');
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    buttons[1].nativeElement.click();
    expect(component.modeChange.emit).toHaveBeenCalledWith('shortBreak');
  });

  it('should highlight the active mode', () => {
    component.activeMode = 'longBreak';
    fixture.detectChanges();
    const activeButton = fixture.debugElement.query(By.css('button.active'));
    expect(activeButton.nativeElement.textContent.trim()).toBe('Long Break');
  });
});
