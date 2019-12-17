import { AdminDefaultComponent } from './default.component';
import { PartnerService } from '../../../partner.service';
import { FilesComponent } from 'src/app/common/files/files.component';
import { MaterialModule } from 'src/app/material/material.module';

export default {
    title: 'Admin / Default'
};

const moduleMetadata = {
    declarations: [AdminDefaultComponent, FilesComponent],
    imports: [MaterialModule],
    providers: [
        {
            provide: PartnerService,
            useValue: {
                update() {}
            }
        }
    ]
};

export const quandStepDone = () => ({
    template: `<app-admin-default [id]="id" [company]="company" [step]="step"></app-admin-default>`,

    props: {
        id: '1',
        company: {
            status: {
                paid: 'done'
            }
        },
        step: {
            key: 'paid'
        }
    },
    moduleMetadata
});

export const quandStepPending = () => ({
    template: `<app-admin-default [id]="id" [company]="company" [step]="step"></app-admin-default>`,

    props: {
        id: '1',
        company: {
            status: {
                paid: 'pending'
            }
        },
        step: {
            key: 'paid'
        }
    },
    moduleMetadata
});
