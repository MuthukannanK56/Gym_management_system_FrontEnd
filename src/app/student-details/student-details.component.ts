import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent implements OnInit {
  
  id: number=0;
  student: Student = new Student();
  constructor(private route: ActivatedRoute,
              private studentservice: StudentService,
              private router: Router){

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id, 'id');

    this.studentservice.getStudentById(this.id).subscribe(data => {
      this.student = data;
    },
      error => { console.log(error) });
   
  }
}
