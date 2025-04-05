import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallPackageComponent } from './small-package.component';

describe('SmallPackageComponent', () => {
  let component: SmallPackageComponent;
  let fixture: ComponentFixture<SmallPackageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmallPackageComponent]
    });
    fixture = TestBed.createComponent(SmallPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
