import { Component } from "@angular/core"
// import * as DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document"

@Component({
  selector: "app-ckeditor-first-page",
  templateUrl: "./ckeditor-first-page.component.html",
  styleUrls: ["./ckeditor-first-page.component.css"],
})
export class CkeditorFirstPageComponent {
  // public Editor = DecoupledEditor

  onReady(editor: any) {
    editor.ui
      .getEditableElement()
      .parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
      )
  }
}
