import { TestBed } from '@angular/core/testing';

import { AuthGuardService } from '../../Services/auth-guard/auth-guard.service';


describe('AuthGuardService', () => {
  let service: AuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
