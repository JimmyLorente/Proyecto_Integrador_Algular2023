import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoFoundComponent } from './no-found.component';

describe('NoFoundComponent', () => {
  let component: NoFoundComponent;
  let fixture: ComponentFixture<NoFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoFoundComponent]
    });
    fixture = TestBed.createComponent(NoFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
