import { Injectable } from '@angular/core';
import { Employee } from './employee.interface';
import { Observable, of } from 'rxjs';

const employeeList : Employee[] = [
  {
    firstName: 'Felix',
    lastName: 'Müller',
    age: 46
  },
  {
    firstName: 'Hans-Jürgen',
    lastName: 'Weber',
    age: 64
  },
  {
    firstName: 'Tobias',
    lastName: 'Blessing',
    age: 30
  }
];

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  loadEmployeesAsObservable(): Observable<Employee[]> {
    const newEmployeeList = this.createNewEmployeeList(employeeList);
    return of(newEmployeeList);
  }

  loadEmployeesAsPromise(): Promise<Employee[]> {
    const newEmployeeList = this.createNewEmployeeList(employeeList);
    return Promise.resolve(newEmployeeList);
  }

  createNewEmployeeList(list: Employee[]): Employee[] {
    const result: Employee[] = [];
    employeeList.forEach(element => {
      const employee : Employee = {
        firstName: element.firstName,
        lastName: element.lastName,
        age: element.age
      };
      result.push(employee);
    });

    return result;
  }
}
