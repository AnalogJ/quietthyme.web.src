import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageDetachComponent } from './storage-detach.component';

describe('StorageDetachComponent', () => {
  let component: StorageDetachComponent;
  let fixture: ComponentFixture<StorageDetachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorageDetachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageDetachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
