import { Component, OnInit, Input } from '@angular/core';
import { Company } from '../../partner.service';

@Component({
    selector: 'app-public-filled',
    templateUrl: './filled.component.html',
    styleUrls: ['./filled.component.scss']
})
export class FilledComponent implements OnInit {
    @Input() company: Company;
    @Input() id: string;
    constructor() {}

    ngOnInit() {}
}
