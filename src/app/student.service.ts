import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseURL = "http://localhost:8080/api/v1/";
  // private baseeURL = "http://localhost:8080/api/v1/";
  constructor(private httpClient: HttpClient) { }

  getStudentList(): Observable<Student[]> {

    return this.httpClient.get<Student[]>(`${this.baseURL}` + 'student');

  }

  createStudent(students: Student): Observable<any> {

    return this.httpClient.post(`${this.baseURL}` + 'addstudent', students);
  }

}
