import { TestBed } from '@angular/core/testing';

import { LaravelApiService } from './laravel-api.service';

describe('LaravelApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LaravelApiService = TestBed.get(LaravelApiService);
    expect(service).toBeTruthy();
  });
});
