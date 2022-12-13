import { TestBed } from '@angular/core/testing';

import { EmployeesFormService } from './employees-form.service';

describe('EmployeesFormService', () => {
  let service: EmployeesFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeesFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
