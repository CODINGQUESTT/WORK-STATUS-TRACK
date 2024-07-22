import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HComponentComponent } from './hcomponent.component';

describe('HComponentComponent', () => {
  let component: HComponentComponent;
  let fixture: ComponentFixture<HComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HComponentComponent]
    });
    fixture = TestBed.createComponent(HComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
