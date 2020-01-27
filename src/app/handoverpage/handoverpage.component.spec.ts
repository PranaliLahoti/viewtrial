import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandoverpageComponent } from './handoverpage.component';

describe('HandoverpageComponent', () => {
  let component: HandoverpageComponent;
  let fixture: ComponentFixture<HandoverpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandoverpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandoverpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
