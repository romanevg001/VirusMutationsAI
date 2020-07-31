import { Component } from '@angular/core';
import { FileUploadModel } from './models/file-upload.model';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private appService: AppService
  ) {}

  uploadVCF(e): void {
    const file: FileUploadModel = e.srcElement.files[0];
    const ext = file.name && file.name.split('.')[1];
    if (ext === 'vcf') {
      this.appService.uploadVCF(file).subscribe();
      // const reader = new FileReader();
      // reader.onload = (evt) => {
      //   console.log(evt.target.result);
      // };
      // reader.readAsText(file);
    }
  }


}
