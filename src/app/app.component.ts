import { Component } from '@angular/core';
import { SharedService } from './shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isLoading = true;

  constructor(
    private readonly sharedService: SharedService,
  ) {

    this.sharedService.preloaderSbj.subscribe(val => {
      this.isLoading = val;
    });
  }


}
