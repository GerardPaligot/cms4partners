import { AdminValidatedComponent } from './validated.component';
import { PartnerService } from '../../../partner.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FilesComponent } from 'src/app/common/files/files.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

export default {
    title: 'Admin / Validated'
};

const moduleMetadata = {
    declarations: [AdminValidatedComponent, FilesComponent],
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
