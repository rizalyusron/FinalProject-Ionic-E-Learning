import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AttachmentService } from 'src/app/services/attachment.service';
import { CourseService } from 'src/app/services/course.service';
import { Capacitor, Plugin } from '@capacitor/core';
import { environment } from 'src/environments/environment';
import { FileOpener } from '@capacitor-community/file-opener';
import { Platform } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.page.html',
  styleUrls: ['./course-details.page.scss'],
})
export class CourseDetailsPage implements OnInit {
  course_det: any;
  attachments:any;
  isLoading: boolean = false;
  lessons_det: any;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private attachmentService: AttachmentService,
    private lessonService: LessonService,
    private loadingCtrl: LoadingController,
    private platform: Platform,
    private navCtrl : NavController,
  ) {}

  ngOnInit() {
    this.loadCoursesDetail();
  }

  async loadCoursesDetail() {
    this.isLoading = true;
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      spinner: 'bubbles',
    });
    await loading.present();

    const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.courseService.getCourseDetails(id).subscribe(
          data => {
            this.course_det = data;
            this.isLoading = false;
            loading.dismiss();
          },
          error => {
            console.error('Error fetching course details', error);
            this.isLoading = false;
            loading.dismiss();
          }
        );
      } else {
        console.error('Course ID is null');
        this.isLoading = false;
        loading.dismiss();
      };

      // ====================ATTACHMENT BY COURSE ID=================

      if (id) {
        this.attachmentService.getAttachmentDetailsByCourseId(id).subscribe(
          attachment => {
            this.attachments = attachment;
            this.isLoading = false;
            loading.dismiss();
            console.log(this.attachments);
          },
          error => {
            console.error('Error fetching course details', error);
            this.isLoading = false;
            loading.dismiss();
          }
        );
      } else {
        console.error('Attachment ID is null');
        this.isLoading = false;
        loading.dismiss();
      };

      //LESSON BY COURSE ID

      if (id) {
        this.lessonService.getLessonDetailsByCourseId(id).subscribe(
          lessons => {
            this.lessons_det = lessons;
            this.isLoading = false;
            loading.dismiss();
            console.log(this.lessons_det);
          },
          error => {
            console.error('Error fetching course details', error);
            this.isLoading = false;
            loading.dismiss();
          }
        );
      } else {
        console.error('Attachment ID is null');
        this.isLoading = false;
        loading.dismiss();
      };

  }


  async openAttachment(attachment: any) {

    const url = `${environment.apiUrl}/api/attachment/downloadcourse/${attachment.id}`;
    if (this.platform.is('hybrid')) {
      try {
        await FileOpener.open({ filePath: url, contentType: 'application/pdf' });

      } catch (e) {
        console.error('Error opening file', e);
        this.navCtrl.navigateRoot('/courses');
      }
    } else {
      try {
        window.open(url, '_blank');
      } catch (e) {
        console.error('Error opening file in web', e);
        this.navCtrl.navigateRoot('/courses');
      }
    }
  }

  openLessonDetail(id: string) {
    this.navCtrl.navigateForward(`/lesson-details/${id}`);
  }




}
