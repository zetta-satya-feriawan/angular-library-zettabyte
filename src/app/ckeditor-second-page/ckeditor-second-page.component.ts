import { Component, OnInit } from "@angular/core"
import * as ClassicEditor from "../../assets/ckeditor/build/ckeditor.js"

@Component({
  selector: "app-ckeditor-second-page",
  templateUrl: "./ckeditor-second-page.component.html",
  styleUrls: ["./ckeditor-second-page.component.css"],
})
export class CkeditorSecondPageComponent implements OnInit {
  public Editor = ClassicEditor

  public config = {
    toolbar: [
      "bold",
      "italic",
      "|",
      "undo",
      "redo",
      "|",
      "numberedList",
      "bulletedList",
    ],
    link: {
      addTargetToExternalLinks: true,
    },
  }

  ngOnInit() {
    this.Editor.create(document.querySelector("#editor"), this.config)
      .then((editor: any) => {
        this.onReady(editor)
      })
      .catch((error: any) => {
        console.error("Error initializing the CKEditor:", error)
      })
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
