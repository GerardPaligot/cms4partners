import { Component, Input, Output, EventEmitter, ContentChild, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-upload',
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.scss']
})
export class UploadComponent {
    @Input() label: string;
    @Input() accept: string;
    @Input() isEnable: boolean;
    @Output() public uploadFile = new EventEmitter();

    @ViewChild('fileInput', { static: false }) fileInput: ElementRef;

    uploading = false;

    public id = Math.random()
        .toString(36)
        .substring(2);
    public fileInputId: string;
    public fileName = '';

    constructor() {
        this.fileInputId = `input-file-${this.id}`;
    }

    upload() {
        this.uploading = true;
        const files = this.fileInput.nativeElement.files;
        this.uploadFile.emit(files[0]);
    }
    uploadFileEvent(event) {
        this.fileName = event.target.files[0].name;
    }
}
