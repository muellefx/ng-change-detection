import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from '../base-component';

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
  
  toggleLogin() {
    this.loggedIn = !this.loggedIn;
  }
}
