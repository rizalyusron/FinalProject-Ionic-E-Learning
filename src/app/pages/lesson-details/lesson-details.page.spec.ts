import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LessonDetailsPage } from './lesson-details.page';

describe('LessonDetailsPage', () => {
  let component: LessonDetailsPage;
  let fixture: ComponentFixture<LessonDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
