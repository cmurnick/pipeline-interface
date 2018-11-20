import { TestBed, inject } from '@angular/core/testing';

import { ProductProjectService } from './product-project.service';

describe('ProductProjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductProjectService]
    });
  });

  it('should be created', inject([ProductProjectService], (service: ProductProjectService) => {
    expect(service).toBeTruthy();
  }));
});
