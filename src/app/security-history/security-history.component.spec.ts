import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityHistoryComponent } from './security-history.component';

describe('SecurityHistoryComponent', () => {
  let component: SecurityHistoryComponent;
  let fixture: ComponentFixture<SecurityHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
