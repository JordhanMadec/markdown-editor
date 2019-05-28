import { Component, Input, OnInit } from '@angular/core';

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

  insertTextIntoTextarea(prefix: string, suffix: string): void {
    const startPos = this.textarea.selectionStart || 0;
    const endPos = this.textarea.selectionEnd || startPos;
    const selection = this.textarea.value.substring(startPos, endPos);

    this.textarea.value = this.textarea.value.substring(0, startPos)
      + prefix
      + selection
      + suffix
      + this.textarea.value.substring(endPos, this.textarea.value.length);

    this.textarea.selectionStart = startPos + prefix.length;
    this.textarea.selectionEnd = endPos + prefix.length;
    this.textarea.focus();
  }

  insertTitle(range: number): void {
    let prefix = '';

    for (let i = 0; i < range; i++) {
      prefix += '#';
    }

    this.insertTextIntoTextarea(prefix, '');
  }

  insertBold(): void {
    this.insertTextIntoTextarea('**', '**');
  }

  insertItalic(): void {
    this.insertTextIntoTextarea('_', '_');
  }

  insertLink(): void {
    this.insertTextIntoTextarea('[', '](url)');
  }
}
