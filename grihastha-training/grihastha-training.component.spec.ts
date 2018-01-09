import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrihasthaTrainingComponent } from './grihastha-training.component';

describe('GrihasthaTrainingComponent', () => {
  let component: GrihasthaTrainingComponent;
  let fixture: ComponentFixture<GrihasthaTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrihasthaTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrihasthaTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
