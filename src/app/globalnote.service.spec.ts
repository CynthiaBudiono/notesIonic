import { TestBed } from '@angular/core/testing';

import { GlobalnoteService } from './globalnote.service';

describe('GlobalnoteService', () => {
  let service: GlobalnoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalnoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
