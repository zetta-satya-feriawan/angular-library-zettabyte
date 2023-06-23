import { Component } from "@angular/core"
import { FormControl } from "@angular/forms"
import * as DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document"

@Component({
  selector: "app-ckeditor-first-page",
  templateUrl: "./ckeditor-first-page.component.html",
  styleUrls: ["./ckeditor-first-page.component.css"],
})
export class CkeditorFirstPageComponent {
  public Editor = DecoupledEditor

  editorControl = new FormControl()

  displayValue() {
    console.log(this.editorControl.value)
  }

  onReady(editor: any) {
    editor.ui
      .getEditableElement()
      .parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
      )
  }
}
