import { TestBed } from '@angular/core/testing';

import { MentalStateExamService } from './mental-state-exam.service';

describe('MentalStateExamService', () => {
  let service: MentalStateExamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MentalStateExamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
