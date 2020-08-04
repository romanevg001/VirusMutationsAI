import { Injectable } from '@angular/core';
import { Observable, of, Subject} from 'rxjs';

export interface IErrorModalSbj {
  isOpen: boolean;
  message: string;
}


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public preloaderSbj = new Subject<boolean>();
  public errorModalSbj = new Subject<string>();

  setLoader(val: boolean) {
    this.preloaderSbj.next(val);
  }


  errorModal(message?){
    this.errorModalSbj.next(
      message
    );
  }

}


