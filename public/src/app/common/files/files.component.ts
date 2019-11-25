import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-files',
    template: `
        <mat-list role="list">
            <h3 mat-subheader>Fichiers associés</h3>
            <ng-container *ngFor="let item of files | keyvalue">
                <mat-list-item role="listitem" *ngIf="item.value">
                    <mat-icon mat-list-icon>folder</mat-icon>
                    <a target="_blank" rel="noreferrer" rel="noopener" [href]="item.value">{{ item.key }}</a></mat-list-item
                >
            </ng-container>
        </mat-list>
    `
})
export class FilesComponent implements OnInit {
    @Input()
    files: { [key: string]: string };
    hasFile = false;

    ngOnInit(): void {
        this.hasFile = Object.values(this.files).filter(path => !path).length > 0;
    }
}
