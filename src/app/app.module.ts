import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { TokenInterceptor } from './interceptors/token.interceptor';


export function tokenGetter() {  // Fungsi untuk mengambil token dari localStorage.
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({  // Mengonfigurasi JwtModule.
      config: {
        tokenGetter: tokenGetter,  // Menentukan fungsi pengambil token.
        // allowedDomains: ['api.yourdomain.com'],  // Mendefinisikan domain yang diizinkan.
        // disallowedRoutes: ['http://example.com/examplebadroute/'],  // Mendefinisikan rute yang tidak diizinkan.
      },
    }),
  ],
  providers: [{
    // provide: RouteReuseStrategy,
    // useClass: IonicRouteStrategy,
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
   }],
  bootstrap: [AppComponent],
})
export class AppModule {}  // Mendeklarasikan kelas modul aplikasi.
