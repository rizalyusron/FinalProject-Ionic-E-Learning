import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor( private http: HttpClient) { }
  getLessons(): Observable<any>  {
    return this.http.get(`${environment.apiUrl}/api/lessons`);

  }
  getLessoneDetails(id: string): Observable<any>{
    return this.http.get(`${environment.apiUrl}/api/lessons/${id}`);}

  getLessonDetailsByCourseId(id: string): Observable<any>{
    return this.http.get(`${environment.apiUrl}/api/lessons/course/${id}`);}

}
