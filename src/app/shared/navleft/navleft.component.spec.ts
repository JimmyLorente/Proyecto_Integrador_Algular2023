import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavleftComponent } from './navleft.component';

describe('NavleftComponent', () => {
  let component: NavleftComponent;
  let fixture: ComponentFixture<NavleftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavleftComponent]
    });
    fixture = TestBed.createComponent(NavleftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
