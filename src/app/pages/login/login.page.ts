import { Component, OnInit } from '@angular/core';  // Mengimpor dekorator Component dari Angular core.
import { AuthService } from '../../services/auth.service';  // Mengimpor AuthService.
import { Router } from '@angular/router';  // Mengimpor Router dari Angular.

@Component({
  selector: 'app-login',  // Selector komponen.
  templateUrl: './login.page.html',  // Template URL komponen.
  styleUrls: ['./login.page.scss'],  // Style URL komponen.
})
export class LoginPage {
  email: string = '';  // Properti untuk email.
  password: string = '';  // Properti untuk password.

  constructor(private authService: AuthService, private router: Router) {}  // Menginisialisasi AuthService dan Router.

  onSubmit(){

  }
  login() {  // Fungsi login yang dipanggil saat user login.
    this.authService.login({ email: this.email, password: this.password }).subscribe(() => {  // Memanggil login dari AuthService.
      this.router.navigate(['home']);  // Navigasi ke halaman home setelah login berhasil.
    });
  }
}

