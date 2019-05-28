import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { saveAs } from 'file-saver';
import parseMdToHtml from '../../../services/html-parser.service';
import parseMdToWiki from '../../../services/wiki-parser.service';

@Component({
  selector: 'app-export-modal',
  templateUrl: './export-modal.component.html',
  styleUrls: ['./export-modal.component.scss']
})
export class ExportModalComponent implements OnInit {

  @Input()
  text: string;

  @Output()
  closeModal = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClose(): void {
    this.closeModal.emit();
  }

  onExportHtml(): void {
    const file = new Blob([parseMdToHtml(this.text)], { type: 'text/html' });
    saveAs(file, 'index.html');
    this.onClose();
  }

  onExportWiki(): void {
    const file = new Blob([parseMdToWiki(this.text)], { type: 'text/plaintext' });
    saveAs(file, 'wikimedia');
    this.onClose();
  }
}
