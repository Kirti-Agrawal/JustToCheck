import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsBehaviouralComponent } from './subjects-behavioural.component';

describe('SubjectsBehaviouralComponent', () => {
  let component: SubjectsBehaviouralComponent;
  let fixture: ComponentFixture<SubjectsBehaviouralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectsBehaviouralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectsBehaviouralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
