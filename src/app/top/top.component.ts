import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from '../base-component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-top',
  standalone: true,
  imports: [],
  templateUrl: './top.component.html',
  styleUrl: './top.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopComponent extends BaseComponent {
  loggedIn = false;
  
  constructor(private authService: AuthService) {
    super();
  }

  toggleLogin() {
    this.loggedIn = !this.loggedIn;
    if (this.loggedIn) {
      this.authService.login();
    } else {
      this.authService.logout();
    }
  }
}
