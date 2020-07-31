import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpParameterCodec} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  uploadVCFapiEndpoint = 'uploadVCF';
  constructor(
    private http: HttpClient
  ) { }


  uploadVCF(file): Observable<any> {
    const options = {
      headers : new HttpHeaders({
        'Content-Type': 'text/plain; charset=UTF-8'
      })
  };

    const fd = new FormData();
    fd.append('file', new File([file], file.name, {type: file.type}));
    return this.http.post(environment.api + this.uploadVCFapiEndpoint, fd, options);
  }

}
