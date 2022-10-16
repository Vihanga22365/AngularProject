import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentAComponent } from './assignment-a.component';

describe('AssignmentAComponent', () => {
  let component: AssignmentAComponent;
  let fixture: ComponentFixture<AssignmentAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignmentAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
