import { TestBed } from '@angular/core/testing';

import { ApiExternaService } from './api-externa.service';

describe('ApiExternaService', () => {
  let service: ApiExternaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiExternaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
