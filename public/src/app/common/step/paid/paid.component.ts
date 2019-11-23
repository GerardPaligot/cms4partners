import { Component, OnInit, Input } from '@angular/core';
import { Workflow, WorkflowStep } from '../../workflow/workflow.service';
import { Company } from '../../Company';

@Component({
    selector: 'app-paid',
    templateUrl: './paid.component.html',
    styleUrls: ['./paid.component.scss']
})
export class PaidComponent implements OnInit {
    @Input() workflow: Workflow;
    @Input() step: WorkflowStep;
    @Input() company: Company;
    files = {};
    constructor() {}

    ngOnInit() {
        this.files = {
            Facture: this.company.invoiceUrl
        };
    }
}
