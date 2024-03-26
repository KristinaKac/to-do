import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(
    public authService: AuthService
  ) { }

  logoutIcon = faArrowRightFromBracket;
  loginIcon = faArrowRightToBracket;

  logout() {
    this.authService.logout();
  }
}
