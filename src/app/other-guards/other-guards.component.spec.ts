import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherGuardsComponent } from './other-guards.component';

describe('OtherGuardsComponent', () => {
  let component: OtherGuardsComponent;
  let fixture: ComponentFixture<OtherGuardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherGuardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherGuardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
