import { TestBed } from '@angular/core/testing';

import { TabmenuService } from './tabmenu.service';

describe('TabmenuService', () => {
  let service: TabmenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabmenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
