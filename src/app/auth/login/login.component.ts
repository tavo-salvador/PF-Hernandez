import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from '../services/auth-service/auth.service';
import { SessionService } from '../services/session-service/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy{

  public loading = false;

  public formLogin = new FormGroup({
    email: new FormControl('demo@angular.com', [Validators.required, Validators.email]),
    password: new FormControl('demo123', [Validators.required]),
  })
  private destroyed$ = new Subject();

  constructor(
    private readonly authService: AuthService,
    private readonly sessionService: SessionService,
    private readonly router: Router,
  ) {
    /* this.sessionService.user$.pipe(takeUntil(this.destroyed$)).subscribe((user) => {
      if (user) this.router.navigate(['dashboard', 'students'])
    }); */
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true)
  }

  login() {
    /* this.loading = true
    this.authService.login({
      email: this.formLogin.get('email')?.value || '',
      password: this.formLogin.get('password')?.value || ''
    }).subscribe(() => this.loading = false) */
  }

}
