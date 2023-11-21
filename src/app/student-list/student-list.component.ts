import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit{

  "students" : Student[];
  constructor(){}
    ngOnInit(): void {
      this.students = [{

        "id":1,
        "name": "Muthukannan K",
        "mobilenumber": "8870644852",
        "email": "inbox2muthu@gmail.com",
        "address": "Theni"
      },
      {
      "id":2,
      "name": "Arun",
      "mobilenumber": "9876543221",
      "email": "arun@gmail.com",
      "address":"Theni"}
    ]
      
    }
  

}
