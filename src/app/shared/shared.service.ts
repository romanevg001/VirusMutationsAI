import { Injectable } from '@angular/core';
import { Observable, of, Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public preloaderSbj = new Subject<boolean>();

  setLoader(val: boolean) {
    this.preloaderSbj.next(val);
  }


}


