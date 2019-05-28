import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-markdown-input',
  templateUrl: './markdown-input.component.html',
  styleUrls: ['./markdown-input.component.scss']
})
export class MarkdownInputComponent implements OnInit {

  @Input()
  text: string;

  @Output()
  textChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onTextChange(): void {
    this.textChange.emit(this.text);
  }
}
