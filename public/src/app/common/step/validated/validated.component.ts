import { Component, OnInit, Input } from '@angular/core';
import { Workflow, WorkflowStep } from '../../workflow/workflow.service';
import { Company } from '../../partner.service';

@Component({
    selector: 'app-validated',
    templateUrl: './validated.component.html',
    styleUrls: ['./validated.component.scss']
})
export class ValidatedComponent implements OnInit {
    @Input() workflow: Workflow;
    @Input() step: WorkflowStep;
    @Input() company: Company;
    constructor() {}

    ngOnInit() {}
}
