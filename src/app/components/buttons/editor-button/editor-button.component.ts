import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-editor-button',
  templateUrl: './editor-button.component.html',
  styleUrls: ['./editor-button.component.scss']
})
export class EditorButtonComponent implements OnInit {

  @Input()
  label: string;

  @Output()
  action = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick(): void {
    this.action.emit();
  }
}
