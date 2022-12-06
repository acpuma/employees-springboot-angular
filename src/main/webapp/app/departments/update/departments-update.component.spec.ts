import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsUpdateComponent } from './departments-update.component';

describe('DepartmentsUpdateComponent', () => {
  let component: DepartmentsUpdateComponent;
  let fixture: ComponentFixture<DepartmentsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentsUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
