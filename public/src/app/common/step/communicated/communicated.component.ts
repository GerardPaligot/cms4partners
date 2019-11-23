import { Component, OnInit, Input } from '@angular/core';
import { Company } from '../../Company';
import { WorkflowStep } from '../../workflow/workflow.service';

@Component({
    selector: 'app-communicated',
    templateUrl: './communicated.component.html',
    styleUrls: ['./communicated.component.scss']
})
export class CommunicatedComponent implements OnInit {
    @Input() company: Company;
    @Input() step: WorkflowStep;

    files = {};

    ngOnInit() {
        this.files = {
            Flyer: this.company.flyerUrl
        };
    }
}
