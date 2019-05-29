import { Component, Input, OnInit } from '@angular/core';
import insertTextIntoTextarea from '../../../services/textarea.service';

@Component({
  selector: 'app-text-editor-buttons',
  templateUrl: './text-editor-buttons.component.html',
  styleUrls: ['./text-editor-buttons.component.scss']
})
export class TextEditorButtonsComponent implements OnInit {

  @Input()
  textarea: HTMLTextAreaElement;

  constructor() { }

  ngOnInit() {
  }

  insertTitle(range: number): void {
    let prefix = '';

    for (let i = 0; i < range; i++) {
      prefix += '#';
    }

    insertTextIntoTextarea(this.textarea, prefix, '');
  }

  insertBold(): void {
    insertTextIntoTextarea(this.textarea, '**', '**');
  }

  insertItalic(): void {
    insertTextIntoTextarea(this.textarea, '_', '_');
  }

  insertLink(): void {
    insertTextIntoTextarea(this.textarea, '[', '](url)');
  }
}
