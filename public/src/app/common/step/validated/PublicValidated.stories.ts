import { PartnerService } from '../../partner.service';
import { ValidatedComponent } from './validated.component';
import { AddPipe } from 'src/app/common/add.pipe';
import { FilesComponent } from 'src/app/common/files/files.component';
import { firestore } from 'firebase';
import { MaterialModule } from 'src/app/material/material.module';

export default {
    title: 'Public / Validated'
};

const moduleMetadata = {
    declarations: [ValidatedComponent, AddPipe, FilesComponent],
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
export const stepPending = () => ({
    template: `<app-public-validated [step]="step" [id]="id" [company]="company"></app-public-validated>`,

    props: {
        id: '1',
        company: {
            status: {
                validated: 'pending'
            },
            sponsoring: 'bronze'
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
            sponsoring: 'bronze',
            creationDate: firestore.Timestamp.fromDate(new Date()),
            devisUrl: 'https://devisUrl.com',
            conventionUrl: 'https://conventionUrl.com'
        },
        step: {
            description: 'Ceci est la description de la step'
        }
    },
    moduleMetadata
});
