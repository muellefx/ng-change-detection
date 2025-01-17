import { Component, OnInit, signal } from '@angular/core';
import { BaseComponent } from '../base-component';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.interface';
import { EmployeeComponent } from "../employee/employee.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [EmployeeComponent, NgFor],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent extends BaseComponent implements OnInit {

  employees = signal<Employee[]>([]);
  countInterval: any;
  counter = signal<number>(0);

  constructor(private employeeService: EmployeeService) {  
    super();
  }

  async ngOnInit(): Promise<void> {
    await this.loadEmployees();
  }

  async loadEmployees() {
    console.log('loading employees...');
    this.employees.set(await this.employeeService.loadEmployeesAsPromise());  
    console.log('... employees loaded.');
    console.log(this.employees);
  }

  startTimer() {
    this.counter.set(0);
    this.countInterval = setInterval(() => { this.counter.set(this.counter()+1); }, 2000 );
  }

  stopTimer() {
    clearInterval(this.countInterval);
  }
}
