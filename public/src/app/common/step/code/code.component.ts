import { Component, OnInit, Input } from '@angular/core';
import { Workflow, WorkflowStep } from '../../workflow/workflow.service';
import { Company } from '../../Company';

@Component({
    selector: 'app-public-code',
    templateUrl: './code.component.html',
    styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {
    @Input() workflow: Workflow;
    @Input() step: WorkflowStep;
    @Input() company: Company;
    codes = {};
    constructor() {}

    ngOnInit() {
        this.codes = this.company.codes || {};
    }
}
