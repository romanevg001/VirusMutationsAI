import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpParameterCodec} from '@angular/common/http';
import { Observable } from 'rxjs';
import { APP_CONFIG, IAppConfig } from '../app.config';
// import {Apollo} from 'apollo-angular';
// import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class MutationAnnotationService {
  uploadVCFapiEndpoint = 'uploadVCF';
  API_URL;
  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) config: IAppConfig
  ) {
    this.API_URL = config.apiEndpoint;
   }


  uploadVCF(file): Observable<any> {
 //   const par = new HttpParams({encoder:  new URIComponentEncoder()});

    const fd = new FormData();
    fd.append('file', new File([file], file.name, {type: file.type}));
    return this.http.post(this.API_URL + this.uploadVCFapiEndpoint, fd,  {
      reportProgress: true, // for progress data
       params: {
         'dd':'sss'
       }
    });
  }

}
