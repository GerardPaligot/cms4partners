import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-files',
    templateUrl: 'files.component.html',
    styleUrls: ['files.component.scss']
})
export class FilesComponent implements OnInit {
    @Input()
    files: { [key: string]: string };
    hasFile = false;

    ngOnInit(): void {
        this.hasFile = Object.values(this.files).filter(path => !!path).length > 0;
    }
}
