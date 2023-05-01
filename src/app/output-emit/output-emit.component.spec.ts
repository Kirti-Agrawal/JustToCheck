import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputEmitComponent } from './output-emit.component';

describe('OutputEmitComponent', () => {
  let component: OutputEmitComponent;
  let fixture: ComponentFixture<OutputEmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputEmitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputEmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
