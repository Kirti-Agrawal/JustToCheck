import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectAsyncComponent } from './subject-async.component';

describe('SubjectAsyncComponent', () => {
  let component: SubjectAsyncComponent;
  let fixture: ComponentFixture<SubjectAsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectAsyncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
