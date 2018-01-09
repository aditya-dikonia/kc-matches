import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarriageCounsellingComponent } from './marriage-counselling.component';

describe('MarriageCounsellingComponent', () => {
  let component: MarriageCounsellingComponent;
  let fixture: ComponentFixture<MarriageCounsellingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarriageCounsellingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarriageCounsellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
