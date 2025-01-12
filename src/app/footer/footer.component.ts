import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from '../base-component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent extends BaseComponent {

}
