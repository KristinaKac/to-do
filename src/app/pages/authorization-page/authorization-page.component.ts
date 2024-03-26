import { Component, OnDestroy, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { IUser } from '../../model/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-authorization-page',
  templateUrl: './authorization-page.component.html',
  styleUrl: './authorization-page.component.scss'
})
export class AuthorizationPageComponent implements OnDestroy {
  private router: Router = inject(Router);
  private subscription: Subscription | null = null;

  constructor(
    public authService: AuthService
  ) { }

  login(value: { email: string, password: string }) {
    this.authService.login(value.email, value.password).subscribe((user: IUser | null) => {
      if (user) {
        this.router.navigate(['tasks'])
      }
    })
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe;
  }
}
