import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TossComponent } from './toss.component';

describe('TossComponent', () => {
  let component: TossComponent;
  let fixture: ComponentFixture<TossComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TossComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
