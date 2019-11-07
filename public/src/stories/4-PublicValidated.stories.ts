import { PartnerService } from '../app/common/partner.service';
import { ValidatedComponent } from 'src/app/common/step/validated/validated.component';
import { AddPipe } from 'src/app/common/add.pipe';

export default {
    title: 'Public / Validated'
};

const moduleMetadata = {
    declarations: [ValidatedComponent, AddPipe],
    providers: [
        {
            provide: PartnerService,
            useValue: {
                update() {}
            }
        }
    ]
};
export const stepPending = () => ({
    template: `<app-public-validated [step]="step" [id]="id" [company]="company"></app-public-validated>`,

    props: {
        id: '1',
        company: {
            status: {
                validated: 'pending'
            }
        },
        step: {
            description: 'This is a description'
        }
    },
    moduleMetadata
});

export const stepDone = () => ({
    template: `<app-public-validated [step]="step" [id]="id" [company]="company"></app-public-validated>`,

    props: {
        id: '1',
        company: {
            status: {
                validated: 'done'
            },
            creationDate: new Date(),
            devisUrl: 'https://devisUrl.com',
            conventionUrl: 'https://conventionUrl.com'
        },
        step: {
            description: 'This is a description'
        }
    },
    moduleMetadata
});
