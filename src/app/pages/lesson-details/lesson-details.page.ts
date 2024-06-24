import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AttachmentService } from 'src/app/services/attachment.service';
import { LessonService } from 'src/app/services/lesson.service';
import { Capacitor, Plugin } from '@capacitor/core';
import { environment } from 'src/environments/environment';
import { FileOpener } from '@capacitor-community/file-opener';
import { Platform } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import * as DOMPurify from 'dompurify';

@Component({
  selector: 'app-lesson-details',
  templateUrl: './lesson-details.page.html',
  styleUrls: ['./lesson-details.page.scss'],
})
export class LessonDetailsPage implements OnInit {
  lesson_data: any;
  attachments:any;
  isLoading: boolean = false;
  article: any;

  constructor(
    private route: ActivatedRoute,
    private attachmentService: AttachmentService,
    private lessonService: LessonService,
    private loadingCtrl: LoadingController,
    private platform: Platform,
    private navCtrl : NavController,
  ) {}
  ngOnInit() {
    this.loadLessonDetail();
  }

  async loadLessonDetail() {
    this.isLoading = true;
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      spinner: 'bubbles',
    });
    await loading.present();

    const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.lessonService.getLessoneDetails(id).subscribe(
          data_detail_lesson => {
            this.lesson_data =  data_detail_lesson;
            this.article =  DOMPurify.sanitize(data_detail_lesson.article);//KARENA INI BERISI FILE HTML, MAKA HARUS DI BERSIHKAN TERLEBIH DAHULU
            this.isLoading = false;
            loading.dismiss();
            console.log(this.lesson_data);
          },
          error => {
            console.error('Error fetching course details', error);
            this.isLoading = false;
            loading.dismiss();
          }
        );
      } else {
        console.error('Lesson ID is null');
        this.isLoading = false;
        loading.dismiss();
      };
    }
}
