import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactHeaderComponentComponent } from './contact-header-component.component';

describe('ContactHeaderComponentComponent', () => {
  let component: ContactHeaderComponentComponent;
  let fixture: ComponentFixture<ContactHeaderComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactHeaderComponentComponent]
    });
    fixture = TestBed.createComponent(ContactHeaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
