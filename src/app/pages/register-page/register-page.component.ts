import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { IUser } from '../../model/user';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {
  private router: Router = inject(Router);
  private subscription: Subscription | null = null;

  constructor(
    public authService: AuthService
  ) { }

  register(value: { name: string, email: string, password: string }) {
    this.authService.registration(value.name, value.email, value.password).subscribe((user: IUser | null) => {
      if (user) {
        this.router.navigate(['tasks'])
      }
    })
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe;
  }
}
