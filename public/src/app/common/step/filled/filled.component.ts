import { Component, OnInit, Input } from '@angular/core';
import { Company } from '../../Company';
import { WorkflowStep } from '../../workflow/workflow.service';

@Component({
    selector: 'app-public-filled',
    templateUrl: './filled.component.html',
    styleUrls: ['./filled.component.scss']
})
export class FilledComponent implements OnInit {
    @Input() company: Company;
    @Input() id: string;
    @Input() step: WorkflowStep;
    constructor() {}

    ngOnInit() {}
}
