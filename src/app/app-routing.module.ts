import { Component, NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { TranslatePageComponent } from "./translate-page/translate-page.component"
import { HomePageComponent } from "./home-page/home-page.component"
import { PrimeflexFirstPageComponent } from "./primeflex-first-page/primeflex-first-page.component"
import { PrimeflexSecondPageComponent } from "./primeflex-second-page/primeflex-second-page.component"
import { CkeditorFirstPageComponent } from "./ckeditor-first-page/ckeditor-first-page.component"

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "translate", component: TranslatePageComponent },
  { path: "primeflex-1", component: PrimeflexFirstPageComponent },
  { path: "primeflex-2", component: PrimeflexSecondPageComponent },
  { path: "ckeditor-1", component: CkeditorFirstPageComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
