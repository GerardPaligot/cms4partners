import { AdminValidatedComponent } from './validated.component';
import { PartnerService } from '../../../partner.service';
import { FilesComponent } from 'src/app/common/files/files.component';
import { MaterialModule } from 'src/app/material/material.module';
import { UploadComponent } from 'src/app/common/upload/upload.component';

export default {
    title: 'Admin / Validated'
};

const moduleMetadata = {
    declarations: [AdminValidatedComponent, FilesComponent, UploadComponent],
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

export const etapeDoneSansFichier = () => ({
    template: `<app-admin-validated [id]="id" [company]="company" [step]="step"></app-admin-validated>`,

    props: {
        id: '1',
        company: {
            status: {
                paid: 'done'
            },
            logoUrl: 'http://google.fr'
        },
        step: {
            key: 'paid'
        }
    },
    moduleMetadata
});

export const etapePendingSansFichier = () => ({
    template: `<app-admin-validated [id]="id" [company]="company" [step]="step"></app-admin-validated>`,

    props: {
        id: '1',
        company: {
            status: {
                paid: 'done'
            },
            logoUrl: 'http://google.fr'
        },
        step: {
            key: 'paid'
        }
    },
    moduleMetadata
});

export const etapeDoneAvecFichier = () => ({
    template: `<app-admin-validated [id]="id" [company]="company" [step]="step"></app-admin-validated>`,

    props: {
        id: '1',
        company: {
            status: {
                paid: 'done'
            },
            conventionUrl: 'http://google.fr',
            devisUrl: 'http://google.fr'
        },
        step: {
            key: 'paid'
        }
    },
    moduleMetadata
});

export const etapePendingAvecFichier = () => ({
    template: `<app-admin-validated [id]="id" [company]="company" [step]="step"></app-admin-validated>`,

    props: {
        id: '1',
        company: {
            status: {
                paid: 'done'
            },
            conventionUrl: 'http://google.fr',
            devisUrl: 'http://google.fr'
        },
        step: {
            key: 'paid'
        }
    },
    moduleMetadata
});
