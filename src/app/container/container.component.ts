import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SideComponent } from "../side/side.component";
import { MainComponent } from "../main/main.component";
import { TopComponent } from "../top/top.component";
import { FooterComponent } from "../footer/footer.component";
import { BaseComponent } from '../base-component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [SideComponent, MainComponent, TopComponent, FooterComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerComponent extends BaseComponent {

}
