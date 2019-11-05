import { Component, OnInit, Input } from '@angular/core';
import { Company } from '../../partner.service';

@Component({
    selector: 'app-communicated',
    templateUrl: './communicated.component.html',
    styleUrls: ['./communicated.component.scss']
})
export class CommunicatedComponent implements OnInit {
    @Input() company: Company;

    constructor() {}

    ngOnInit() {}
}
