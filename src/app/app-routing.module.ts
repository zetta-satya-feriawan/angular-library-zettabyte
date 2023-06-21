import { Component, NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { TranslatePageComponent } from "./translate-page/translate-page.component"
import { HomePageComponent } from "./home-page/home-page.component"

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "translate", component: TranslatePageComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
