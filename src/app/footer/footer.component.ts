import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BaseComponent } from '../base-component';
import { LoginData } from '../login-data.interface';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent extends BaseComponent {
  loginData = input<LoginData|null>({loggedIn: false});
}
