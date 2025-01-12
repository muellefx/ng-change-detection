import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
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
  @Input() loginData : LoginData | null = {loggedIn: false};
}
