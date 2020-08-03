import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { environment } from '../environments/environment';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import {TranslateLoader, TranslateModule, TranslateCompiler} from '@ngx-translate/core';
import {TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      },
      isolate: true
    }),
    AppRoutingModule,
     environment.production ? [] : AkitaNgDevtools,
     AkitaNgRouterStoreModule
  ],
  providers: [
    { provide: NG_ENTITY_SERVICE_CONFIG, useValue: { baseUrl: 'https://jsonplaceholder.typicode.com' }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private translate: TranslateService){
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
