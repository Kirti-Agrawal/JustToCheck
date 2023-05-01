import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableSubjectsComponent } from './observable-subjects.component';

describe('ObservableSubjectsComponent', () => {
  let component: ObservableSubjectsComponent;
  let fixture: ComponentFixture<ObservableSubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservableSubjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservableSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
