import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AttachmentService {
  constructor( private http: HttpClient) { }
  getAttachment(): Observable<any>  {
    return this.http.get(`${environment.apiUrl}/api/attachment`);

  }
  getAttachmentDetails(id: string): Observable<any>{
    return this.http.get(`${environment.apiUrl}/api/attachment/${id}`);}

  getAttachmentDetailsByCourseId(id: string): Observable<any>{
    return this.http.get(`${environment.apiUrl}/api/attachment/course/${id}`);}

  getAttachmentDownload(id: string): Observable<any>{
    return this.http.get(`${environment.apiUrl}/api/attachment/downloadcourse/${id}`);}
}

