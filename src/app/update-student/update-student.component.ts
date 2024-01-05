import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrl: './update-student.component.css'
})
export class UpdateStudentComponent implements OnInit {

  id: number = 0;
  students: Student = new Student();
  constructor(private studentservice: StudentService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    console.log(this.id, 'id');

    this.studentservice.getStudentById(this.id).subscribe(data => {
      this.students = data;
    },
      error => { console.log(error) });
  }

  onSubmit() {
    this.studentservice.updateStudent(this.id, this.students).subscribe(data => {
      this.gotoStudentListpage();
    }, (error => {
      console.log(error);
    }))

  }

  gotoStudentListpage() {
    this.router.navigate(["/students"]);
  }
}

