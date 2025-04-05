import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProPackageComponent } from './pro-package.component';

describe('ProPackageComponent', () => {
  let component: ProPackageComponent;
  let fixture: ComponentFixture<ProPackageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProPackageComponent]
    });
    fixture = TestBed.createComponent(ProPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
