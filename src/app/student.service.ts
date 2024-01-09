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

  getStudentById(id: number): Observable<Student>{
    console.log(`${this.baseURL}`+'student/'+id,'test');
    
    return this.httpClient.get<Student>(`${this.baseURL}`+'student/'+id);
  }

  updateStudent(id:number, student : Student): Observable<Object>{
    return this.httpClient.put<Student>(`${this.baseURL}`+'updatestudent/'+id,student);

  }
  deleteStudent(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}`+'deletestudent/'+id);
  }

}
