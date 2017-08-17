import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpdsPanelComponent } from './opds-panel.component';

describe('OpdsPanelComponent', () => {
  let component: OpdsPanelComponent;
  let fixture: ComponentFixture<OpdsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpdsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpdsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
