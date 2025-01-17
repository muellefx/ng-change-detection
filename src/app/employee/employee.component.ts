import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Employee } from '../employee.interface';
import { BaseComponent } from '../base-component';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeComponent extends BaseComponent {
  employee = input.required<Employee>();

  increaseAge() {
    this.employee().age += 1;
  }
  
  decreaseAge() {
    this.employee().age -= 1;
  }
}
