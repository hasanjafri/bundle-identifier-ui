import { TestBed } from '@angular/core/testing';

import { BundleIdentifierService } from './bundle-identifier.service';

describe('BundleIdentifierService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BundleIdentifierService = TestBed.get(BundleIdentifierService);
    expect(service).toBeTruthy();
  });
});
