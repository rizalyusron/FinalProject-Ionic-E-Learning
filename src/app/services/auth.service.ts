import { Injectable } from '@angular/core';  // Mengimpor dekorator Injectable dari Angular core.
import { HttpClient } from '@angular/common/http';  // Mengimpor HttpClient untuk HTTP requests.
import { Observable } from 'rxjs';  // Mengimpor Observable dari RxJS.
import { tap } from 'rxjs/operators';  // Mengimpor operator tap dari RxJS.
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',  // Menyediakan service pada root injector.
})
export class AuthService {
  jwtHelper = new JwtHelperService();// Untuk men declare Jwt Helper utk Mengevek dan Menguraikan Token


  constructor(private http: HttpClient, private router: Router) {}  // Menginisialisasi HttpClient melalui dependency injection.

  login(credentials: { email: string; password: string }): Observable<any> {  // Fungsi login yang menerima kredensial dan mengembalikan Observable.
    return this.http.post(`${environment.apiUrl}/api/login`, credentials).pipe(  // Mengirimkan POST request ke endpoint login.
      tap((response: any) => {  // Menggunakan operator tap untuk efek samping.
        localStorage.setItem('access_token', response.token);  // Menyimpan token ke localStorage.
      }),
    );
  }

  logout() {  // Fungsi logout untuk menghapus token.
    localStorage.removeItem('access_token');  // Menghapus token dari localStorage.

    // Redirect ke halaman login
    this.router.navigate(['/login']);
  }

  public get loggedIn(): boolean {  // Getter untuk status login.
    return localStorage.getItem('access_token') !== null;  // Mengecek apakah token ada di localStorage.
  }

  IsAutentichated(): boolean {  // Getter untuk status login pada guard
    return localStorage.getItem('access_token') != null; // Mengecek apakah token ada di localStorage.
  }

  register(user: { email: string, password: string, name: string, password_confirmation : string }) {
    return this.http.post(`${environment.apiUrl}/api/register`, user).toPromise();
  }
}
