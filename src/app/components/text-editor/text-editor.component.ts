import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent implements OnInit {

  textarea: HTMLTextAreaElement;

  @Input()
  text: string;

  @Output()
  textChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.textarea = document.getElementById('markdown-input') as HTMLTextAreaElement;
  }

  onTextChange(text: string): void {
    this.textChange.emit(text);
  }
}
