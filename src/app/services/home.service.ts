import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor( private http: HttpClient) { }
  getUsers(): Observable<any>  {
    return this.http.get(`${environment.apiUrl}/api/user`);

  }

  getCourses(): Observable<any>  {
    return this.http.get(`${environment.apiUrl}/api/courses`);

  }
  getCourseDetails(){}
}
