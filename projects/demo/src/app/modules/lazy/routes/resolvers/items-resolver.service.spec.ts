import { TestBed, inject } from '@angular/core/testing';

import { ItemsResolverService } from './items-resolver.service';

describe('ItemsResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemsResolverService]
    });
  });

  it('should be created', inject([ItemsResolverService], (service: ItemsResolverService) => {
    expect(service).toBeTruthy();
  }));
});
