import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsDetailComponent } from './departments-detail.component';

describe('DepartmentsDetailComponent', () => {
  let component: DepartmentsDetailComponent;
  let fixture: ComponentFixture<DepartmentsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentsDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
