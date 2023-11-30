import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegViajePage } from './reg-viaje.page';

describe('RegViajePage', () => {
  let component: RegViajePage;
  let fixture: ComponentFixture<RegViajePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegViajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
