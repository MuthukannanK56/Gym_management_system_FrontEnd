import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit{

  students : Student[] = [];

  constructor( private studentService : StudentService){}
    ngOnInit(): void {
      this.getStudent();   
    }


    private getStudent(){ 
      this.studentService.getStudentList().subscribe(data =>{
        console.log(data,'--check--');
        
        this.students = data;

      });
    }

   
}
