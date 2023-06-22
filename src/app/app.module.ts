import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { HttpClient, HttpClientModule } from "@angular/common/http"
import { TranslateHttpLoader } from "@ngx-translate/http-loader"
import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { CKEditorModule } from "@ckeditor/ckeditor5-angular"
import { TranslatePageComponent } from "./translate-page/translate-page.component"
import { TranslateLoader, TranslateModule } from "@ngx-translate/core"
import { TranslateService } from "@ngx-translate/core"
import { HomePageComponent } from "./home-page/home-page.component"
import { PrimeflexFirstPageComponent } from "./primeflex-first-page/primeflex-first-page.component"
import { PrimeflexSecondPageComponent } from "./primeflex-second-page/primeflex-second-page.component"
import { CkeditorFirstPageComponent } from "./ckeditor-first-page/ckeditor-first-page.component"

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/")
}
@NgModule({
  declarations: [
    AppComponent,
    TranslatePageComponent,
    HomePageComponent,
    PrimeflexFirstPageComponent,
    PrimeflexSecondPageComponent,
    CkeditorFirstPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CKEditorModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      isolate: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(translate: TranslateService) {
    translate.setDefaultLang("en")
  }
}
