import { Injectable } from '@angular/core';  // Mengimpor dekorator Injectable dari Angular core.
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';  // Mengimpor modul HTTP dari Angular.
import { Observable } from 'rxjs';  // Mengimpor Observable dari RxJS.

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {  // Metode intercept untuk memodifikasi request.
    const token = localStorage.getItem('access_token');  // Mengambil token dari localStorage.
    if (token) {  // Jika token ada.
      request = request.clone({  // Kloning request dan tambahkan header Authorization.
        setHeaders: {
          Authorization: `Bearer ${token}`,  // Menambahkan header Authorization dengan token.
        },
      });
    }
    return next.handle(request);  // Meneruskan request yang telah dimodifikasi.
  }
}
