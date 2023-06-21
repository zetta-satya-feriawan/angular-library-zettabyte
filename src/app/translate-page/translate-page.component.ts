import { Component } from "@angular/core"
import { TranslateService } from "@ngx-translate/core"

@Component({
  selector: "app-translate-page",
  templateUrl: "./translate-page.component.html",
  styleUrls: ["./translate-page.component.css"],
})
export class TranslatePageComponent {
  currentLanguage: string = "en"

  constructor(private translateService: TranslateService) {}
  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === "en" ? "fr" : "en"
    this.translateService.use(this.currentLanguage)
  }
}
