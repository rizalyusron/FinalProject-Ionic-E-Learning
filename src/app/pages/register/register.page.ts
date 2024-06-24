import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  user = {
    email: '',
    password: '',
    password_confirmation: '',
    name: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController
  ) {}

  async register() {
    try {
      await this.authService.register(this.user);
      const alert = await this.alertController.create({
        header: 'Success',
        message: 'Registration successful',
        buttons: ['OK']
      });
      await alert.present();
      this.router.navigate(['/login']);
    } catch (err:unknown) {
      const alert = await this.alertController.create({
        header: 'Registration failed',
        message: (err as any).error.message,
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}
