import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeStrategyComponent } from './change-strategy.component';

describe('ChangeStrategyComponent', () => {
  let component: ChangeStrategyComponent;
  let fixture: ComponentFixture<ChangeStrategyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeStrategyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
