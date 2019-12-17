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
export class FilesComponent {
    @Input()
    files: { [key: string]: string };
}
