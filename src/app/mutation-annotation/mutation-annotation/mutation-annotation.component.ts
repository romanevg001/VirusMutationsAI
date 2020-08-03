import { Component, OnInit } from '@angular/core';
import { FileUploadModel } from '../../models/file-upload.model';
import { MutationAnnotationService } from '../mutation-annotation.service';

@Component({
  selector: 'app-mutation-annotation',
  templateUrl: './mutation-annotation.component.html',
  styleUrls: ['./mutation-annotation.component.scss']
})
export class MutationAnnotationComponent implements OnInit {

  constructor(
    private mutationAnnotationService: MutationAnnotationService
  ) {}

  ngOnInit(): void {
  }

  uploadVCF(e): void {
    const file: FileUploadModel = e.srcElement.files[0];
    const ext = file.name && file.name.split('.')[1];
    if (ext === 'vcf') {
      this.mutationAnnotationService.uploadVCF(file).subscribe();

    }
  }
}

