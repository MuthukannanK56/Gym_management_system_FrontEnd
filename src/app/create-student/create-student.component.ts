import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrl: './create-student.component.css'
})
export class CreateStudentComponent implements OnInit {

  students: Student = new Student();
  constructor(
    private studentservice: StudentService,
    private router: Router) { }

  ngOnInit(): void { }

  onSubmit() {
    console.log(this.students)
    this.studentservice.createStudent(this.students).subscribe(data => {
      console.log(data);
      this.router.navigate(["/students"]);
    }, (error => {
      console.log(error);
    }))
  }


}
