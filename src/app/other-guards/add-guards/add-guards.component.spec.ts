import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGuardsComponent } from './add-guards.component';

describe('AddGuardsComponent', () => {
  let component: AddGuardsComponent;
  let fixture: ComponentFixture<AddGuardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGuardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddGuardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
