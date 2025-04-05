import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSelectionPanelComponent } from './page-selection-panel.component';

describe('PageSelectionPanelComponent', () => {
  let component: PageSelectionPanelComponent;
  let fixture: ComponentFixture<PageSelectionPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageSelectionPanelComponent]
    });
    fixture = TestBed.createComponent(PageSelectionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
