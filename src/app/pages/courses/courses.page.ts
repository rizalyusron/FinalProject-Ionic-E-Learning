import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {

  Kursus :any; //DEFINING KURSUS VARIABLE

  constructor( private CourseServices : CourseService, private loadingCtrl: LoadingController,private navCtrl: NavController ) { }

  ngOnInit() {
    this.loadCourses();//TRIGER AUTO LOAD WHERE INITIALIZED
      }

  async loadCourses(){
    const loading = await this.loadingCtrl.create(//ADD LOADING
      {
        message: 'Loading..',
        spinner: 'bubbles',
      }
    );
    await loading.present();
    this.CourseServices.getCourses().subscribe(res => {
      this.Kursus = res;//DECLARE KURSUS VARIABLE IS RESPONSE RESULT
      loading.dismiss();//STOP LOAD AFTER DATA LOADED
      // console.log(res);//Ini untuk Ngetest aja datanya kebaca atau belum
    })

  }


  openCourseDetail(id: string) {
    this.navCtrl.navigateForward(`/course-details/${id}`);
  }

}
