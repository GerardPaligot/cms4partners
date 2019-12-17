import { AdminPaidComponent } from './paid.component';
import { PartnerService } from '../../../partner.service';
import { FilesComponent } from 'src/app/common/files/files.component';
import { MaterialModule } from 'src/app/material/material.module';
import { UploadComponent } from 'src/app/common/upload/upload.component';

export default {
    title: 'Admin / Paid'
};

const moduleMetadata = {
    declarations: [AdminPaidComponent, FilesComponent, UploadComponent],
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

export const sansFactureEtDone = () => ({
    template: `<app-admin-paid [id]="id" [company]="company" [step]="step"></app-admin-paid>`,

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

export const sansFactureEtPending = () => ({
    template: `<app-admin-paid [id]="id" [company]="company" [step]="step"></app-admin-paid>`,

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

export const avecFactureEtDone = () => ({
    template: `<app-admin-paid [id]="id" [company]="company" [step]="step"></app-admin-paid>`,

    props: {
        id: '1',
        company: {
            status: {
                paid: 'done'
            },
            invoiceUrl: 'http://google.fr'
        },
        step: {
            key: 'paid'
        }
    },
    moduleMetadata
});

export const avecFactureEtPending = () => ({
    template: `<app-admin-paid [id]="id" [company]="company" [step]="step"></app-admin-paid>`,

    props: {
        id: '1',
        company: {
            status: {
                paid: 'pending'
            },
            invoiceUrl: 'http://google.fr'
        },
        step: {
            key: 'paid'
        }
    },
    moduleMetadata
});
