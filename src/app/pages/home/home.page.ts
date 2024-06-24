import { Component, OnInit } from '@angular/core';  // Mengimpor dekorator Component dan OnInit dari Angular core.
import { HttpClient } from '@angular/common/http';  // Mengimpor HttpClient dari Angular.
import { LoadingController, NavController } from '@ionic/angular';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',  // Selector komponen.
  templateUrl: './home.page.html',  // Template URL komponen.
  styleUrls: ['./home.page.scss'],  // Style URL komponen.
})
export class HomePage implements OnInit {  // Mendeklarasikan kelas komponen HomePage yang mengimplementasikan OnInit.
  HomeUser: any; // Properti untuk menyimpan data yang diterima dari API.
  Kursus: any;


  constructor(private http: HttpClient, private navCtrl: NavController,private loadingCtrl: LoadingController, private HomeServices: HomeService) {}  // Menginisialisasi HttpClient melalui dependency injection.

  ngOnInit() {  // Fungsi yang dijalankan saat komponen diinisialisasi.
    // this.http.get('http://127.0.0.1:8000/api/user').subscribe((response) => {  // Mengirimkan GET request ke endpoint API yang dilindungi.
    //   this.data = response;  // Menyimpan respons dari API ke properti data.
    //   // console.log(response); //ini buat tester

    // });
    this.loadUser();
    this.loadCourses();
  }

  async loadUser(){
    const loading = await this.loadingCtrl.create(//ADD LOADING
      {
        message: 'Loading..',
        spinner: 'bubbles',
      }
    );
    await loading.present();
    this.HomeServices.getUsers().subscribe(res => {
      this.HomeUser = res;//DECLARE KURSUS VARIABLE IS RESPONSE RESULT
      loading.dismiss();//STOP LOAD AFTER DATA LOADED
      // console.log(this.HomeUser);
    })
  }

  async loadCourses(){
    const loading = await this.loadingCtrl.create(//ADD LOADING
      {
        message: 'Loading..',
        spinner: 'bubbles',
      }
    );
    await loading.present();
    this.HomeServices.getCourses().subscribe(res => {
      this.Kursus = res;//DECLARE KURSUS VARIABLE IS RESPONSE RESULT
      loading.dismiss();//STOP LOAD AFTER DATA LOADED
      console.log(this.Kursus);
    })
  }

  openCourseDetail(id: string) {
    this.navCtrl.navigateForward(`/course-details/${id}`);
  }
}
