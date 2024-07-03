import { TestBed } from '@angular/core/testing';

import { MonoApiService } from './mono-api.service';

describe('MonoApiService', () => {
  let service: MonoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
