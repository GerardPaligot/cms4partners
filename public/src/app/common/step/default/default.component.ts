import { Component, OnInit, Input } from '@angular/core';
import { WorkflowStep } from '../../workflow/workflow.service';

@Component({
    selector: 'app-default',
    templateUrl: './default.component.html',
    styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
    @Input()
    step: WorkflowStep;
    constructor() {}

    ngOnInit() {}
}
