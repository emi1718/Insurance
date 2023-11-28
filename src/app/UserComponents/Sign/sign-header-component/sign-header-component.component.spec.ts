import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignHeaderComponentComponent } from './sign-header-component.component';

describe('SignHeaderComponentComponent', () => {
  let component: SignHeaderComponentComponent;
  let fixture: ComponentFixture<SignHeaderComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignHeaderComponentComponent]
    });
    fixture = TestBed.createComponent(SignHeaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
