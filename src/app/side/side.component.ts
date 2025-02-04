import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from '../base-component';

@Component({
  selector: 'app-side',
  standalone: true,
  imports: [],
  templateUrl: './side.component.html',
  styleUrl: './side.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideComponent extends BaseComponent {

}
