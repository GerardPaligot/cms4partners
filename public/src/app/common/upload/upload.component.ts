import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-upload',
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

    @Input() label: string;
    @Input() accept: string;
    @Input() isEnable: boolean;
    @Output() public uploadFile = new EventEmitter();

    public id = Math.random()
        .toString(36)
        .substring(2);
    public fileInputId: string;
    public fileName = '';

    constructor() {
        this.fileInputId = `input-file-${this.id}`;
    }

    ngOnInit() {}

    uploadFileEvent(event) {
        this.fileName = event.target.files[0].name;
        this.uploadFile.emit(event);
    }
}
