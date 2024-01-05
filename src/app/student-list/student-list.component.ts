import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit{

  students : Student[] = [];

  constructor( private studentService : StudentService,
                private router : Router){}
    ngOnInit(): void {
      this.getStudent();   
    }


    private getStudent(){ 
      this.studentService.getStudentList().subscribe(data =>{
        console.log(data,'--check--');
        
        this.students = data;

      });
    }
    updatestudent(id: number){
      this.router.navigate(['update-student', id]);
    }

   
}
