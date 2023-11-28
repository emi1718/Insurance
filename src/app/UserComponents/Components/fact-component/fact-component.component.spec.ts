import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactComponentComponent } from './fact-component.component';

describe('FactComponentComponent', () => {
  let component: FactComponentComponent;
  let fixture: ComponentFixture<FactComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FactComponentComponent]
    });
    fixture = TestBed.createComponent(FactComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
