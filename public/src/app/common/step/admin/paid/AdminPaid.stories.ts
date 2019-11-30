import { AdminPaidComponent } from './paid.component';
import { PartnerService } from '../../../partner.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FilesComponent } from 'src/app/common/files/files.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

export default {
    title: 'Admin / Paid'
};

const moduleMetadata = {
    declarations: [AdminPaidComponent, FilesComponent],
    imports: [MatFormFieldModule, MatButtonModule, MatInputModule, MatExpansionModule, MatIconModule, MatListModule],
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
