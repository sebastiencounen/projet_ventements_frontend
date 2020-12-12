import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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

  @Output()
  imageUploaded: EventEmitter<string> = new EventEmitter<string>();

  constructor(private fireStorage: AngularFireStorage) {}

  ngOnInit(): void {
  }

  async onFileChanged(e) {
    const file = e.target.files[0];

    if (file) {
      const filePath = `${this.basePath}/${Date.now().toString()}${file.name}`;
      this.task = this.fireStorage.upload(filePath, file);

      this.progressValue = this.task.percentageChanges();

      this.task.then(a => {
        return a.ref.getDownloadURL()
          .then(url => this.imageUploaded.emit(url))
      });
      // (await this.task).ref.getDownloadURL().then((url: string) => this.hostedUrl = url);
    } else {
      this.hostedUrl = '';
    }
  }
}
