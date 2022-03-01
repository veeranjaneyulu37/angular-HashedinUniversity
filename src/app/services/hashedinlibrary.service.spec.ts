import { TestBed } from '@angular/core/testing';

import { HashedinlibraryService } from './hashedinlibrary.service';

describe('HashedinlibraryService', () => {
  let service: HashedinlibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HashedinlibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
