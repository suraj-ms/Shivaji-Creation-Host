import { TestBed } from '@angular/core/testing';

import { MydbserviceService } from './mydbservice.service';

describe('MydbserviceService', () => {
  let service: MydbserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MydbserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
