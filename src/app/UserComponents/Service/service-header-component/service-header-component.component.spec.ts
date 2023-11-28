import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceHeaderComponentComponent } from './service-header-component.component';

describe('ServiceHeaderComponentComponent', () => {
  let component: ServiceHeaderComponentComponent;
  let fixture: ComponentFixture<ServiceHeaderComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceHeaderComponentComponent]
    });
    fixture = TestBed.createComponent(ServiceHeaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
