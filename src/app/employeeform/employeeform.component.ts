import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.css']
})
export class EmployeeformComponent implements OnInit {

  constructor() { }
Employeeform={
  empname:'',
  designation:'',
  location:'',
  salary:''
}
  ngOnInit(): void {
  }

  submitdata(){
    console.log(this.Employeeform)
  }

}
