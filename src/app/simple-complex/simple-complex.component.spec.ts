import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComplexComponent } from './simple-complex.component';

describe('SimpleComplexComponent', () => {
  let component: SimpleComplexComponent;
  let fixture: ComponentFixture<SimpleComplexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleComplexComponent]
    });
    fixture = TestBed.createComponent(SimpleComplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
