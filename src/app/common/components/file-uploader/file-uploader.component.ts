import { Component, OnInit } from '@angular/core';
import {AngularFireStorage, AngularFireUploadTask} from '@angular/fire/storage';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements OnInit {

  basePath: string = '/images';
  hostedUrl: string = '';
  task: AngularFireUploadTask;

  progressValue: Observable<number>;

  constructor(private fireStorage: AngularFireStorage) {}

  ngOnInit(): void {
  }

  async onFileChanged(e) {
    const file = e.target.files[0];

    if (file) {
      const filePath = `${this.basePath}/${file.name}${Date.now().toString()}`;
      this.task = this.fireStorage.upload(filePath, file);

      this.progressValue = this.task.percentageChanges();

      (await this.task).ref.getDownloadURL().then((url: string) => this.hostedUrl = url);
    } else {
      this.hostedUrl = '';
    }
  }
}
