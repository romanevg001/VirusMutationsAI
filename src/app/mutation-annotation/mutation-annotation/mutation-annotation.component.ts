import { Component, OnInit } from '@angular/core';
import { FileUploadModel } from '../../models/file-upload.model';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-mutation-annotation',
  templateUrl: './mutation-annotation.component.html',
  styleUrls: ['./mutation-annotation.component.scss']
})
export class MutationAnnotationComponent implements OnInit {

  constructor(
    private appService: AppService
  ) {}

  ngOnInit(): void {
  }

  uploadVCF(e): void {
    const file: FileUploadModel = e.srcElement.files[0];
    const ext = file.name && file.name.split('.')[1];
    if (ext === 'vcf') {
      this.appService.uploadVCF(file).subscribe();

    }
  }
}

