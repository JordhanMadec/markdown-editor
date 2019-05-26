import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MarkdownInputComponent } from './components/text-editor/markdown-input/markdown-input.component';
import { TextEditorComponent } from './components/text-editor/text-editor.component';
import { TextPreviewComponent } from './components/text-preview/text-preview.component';
import { TextEditorButtonsComponent } from './components/text-editor/text-editor-buttons/text-editor-buttons.component';
import { EditorButtonComponent } from './components/text-editor/text-editor-buttons/editor-button/editor-button.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { FabButtonComponent } from './components/fab-button/fab-button.component';
import { ExportModalComponent } from './components/text-preview/export-modal/export-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MarkdownInputComponent,
    TextEditorComponent,
    TextPreviewComponent,
    TextEditorButtonsComponent,
    EditorButtonComponent,
    IconButtonComponent,
    FabButtonComponent,
    ExportModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
