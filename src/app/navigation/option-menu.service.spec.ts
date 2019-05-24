import { TestBed } from '@angular/core/testing';

import { OptionMenuService } from './option-menu.service';

describe('OptionMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OptionMenuService = TestBed.get(OptionMenuService);
    expect(service).toBeTruthy();
  });
});
