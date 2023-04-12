import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HookschildComponent } from './hookschild.component';

describe('HookschildComponent', () => {
  let component: HookschildComponent;
  let fixture: ComponentFixture<HookschildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HookschildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HookschildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
