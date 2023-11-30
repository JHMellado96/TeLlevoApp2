import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RevViajePage } from './rev-viaje.page';

describe('RevViajePage', () => {
  let component: RevViajePage;
  let fixture: ComponentFixture<RevViajePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RevViajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
