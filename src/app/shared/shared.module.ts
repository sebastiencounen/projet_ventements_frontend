import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';



@NgModule({
  declarations: [FileUploaderComponent, SnackbarComponent],
  exports: [
    FileUploaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {}
