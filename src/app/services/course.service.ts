import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor( private http: HttpClient) { }
  getCourses(): Observable<any>  {
    return this.http.get(`${environment.apiUrl}/api/courses`);

  }
  getCourseDetails(id: string): Observable<any>{
    return this.http.get(`${environment.apiUrl}/api/courses/${id}`);}
}
