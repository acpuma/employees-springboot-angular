import { TestBed } from '@angular/core/testing';

import { DepartmentsFormService } from './departments-form.service';

describe('DepartmentsFormService', () => {
  let service: DepartmentsFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartmentsFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
