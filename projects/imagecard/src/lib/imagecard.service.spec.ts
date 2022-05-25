import { TestBed } from '@angular/core/testing';

import { ImagecardService } from './imagecard.service';

describe('ImagecardService', () => {
  let service: ImagecardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagecardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
