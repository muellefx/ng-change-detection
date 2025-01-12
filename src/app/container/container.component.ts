import { Component } from '@angular/core';
import { SideComponent } from "../side/side.component";
import { MainComponent } from "../main/main.component";
import { TopComponent } from "../top/top.component";
import { FooterComponent } from "../footer/footer.component";
import { BaseComponent } from '../base-component';
import { AuthService } from '../auth.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [SideComponent, MainComponent, TopComponent, FooterComponent, AsyncPipe],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent extends BaseComponent {
  constructor(public authService: AuthService) {
    super();
  }
}
