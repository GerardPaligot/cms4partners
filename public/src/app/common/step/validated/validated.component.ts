import { Component, OnInit, Input } from '@angular/core';
import { Workflow, WorkflowStep } from '../../workflow/workflow.service';
import { Company } from '../../Company';

@Component({
    selector: 'app-public-validated',
    templateUrl: './validated.component.html',
    styleUrls: ['./validated.component.scss']
})
export class ValidatedComponent implements OnInit {
    @Input() workflow: Workflow;
    @Input() step: WorkflowStep;
    @Input() company: Company;
    files = {};
    constructor() {}

    ngOnInit() {
        this.files = {
            Convention: this.company.conventionUrl,
            Devis: this.company.devisUrl
        };
    }
}
