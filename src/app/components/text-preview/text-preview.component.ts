import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import parseMdToHtml from '../../services/html-parser.service';

@Component({
  selector: 'app-text-preview',
  templateUrl: './text-preview.component.html',
  styleUrls: ['./text-preview.component.scss']
})
export class TextPreviewComponent implements OnInit, OnChanges {

  parsedText = '';
  modalVisible = false;

  @Input()
  text: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.parsedText = parseMdToHtml(this.text);
  }

  onShowModal = () => {
    this.modalVisible = true;
  }

  onHideModal = () => {
    this.modalVisible = false;
  }
}
