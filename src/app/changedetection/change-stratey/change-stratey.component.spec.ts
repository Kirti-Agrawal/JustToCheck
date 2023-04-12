import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeStrateyComponent } from './change-stratey.component';

describe('ChangeStrateyComponent', () => {
  let component: ChangeStrateyComponent;
  let fixture: ComponentFixture<ChangeStrateyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeStrateyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeStrateyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
