import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-files',
    template: `
        <mat-list role="list">
            <h3 mat-subheader>Fichiers associés</h3>
            <mat-list-item role="listitem" *ngFor="let item of files | keyvalue">
                <mat-icon mat-list-icon>folder</mat-icon>
                <a target="_blank" rel="noreferrer" rel="noopener" [href]="item.value">{{ item.key }}</a></mat-list-item
            >
        </mat-list>
    `
})
export class FilesComponent {
    @Input()
    files: { [key: string]: string };
}
