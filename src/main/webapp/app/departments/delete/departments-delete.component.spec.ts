import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsDeleteComponent } from './departments-delete.component';

describe('DepartmentsDeleteComponent', () => {
  let component: DepartmentsDeleteComponent;
  let fixture: ComponentFixture<DepartmentsDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentsDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
