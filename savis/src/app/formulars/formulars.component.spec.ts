import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularsComponent } from './formulars.component';

describe('FormularsComponent', () => {
  let component: FormularsComponent;
  let fixture: ComponentFixture<FormularsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
