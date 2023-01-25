import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';


const expectedToken = {
  token: 'QpwL5tke4Pnpja7X4',
}

fdescribe('AuthService', () => {
  let service: AuthService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AuthService);
    httpTestingController = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('login debe ser exitoso', (done) => {
    service.login({
      email: 'fakeemail@email.com',
      password: '123456'
    }).subscribe((resp) => {
      expect(resp).toEqual(expectedToken)
      done();
    })

    httpTestingController.expectOne({
      url: `${service.apiUrl}/api/login`,
      method: 'POST',
    }).flush(
      {
        token: 'QpwL5tke4Pnpja7X4'
      }
      );
    })

});
