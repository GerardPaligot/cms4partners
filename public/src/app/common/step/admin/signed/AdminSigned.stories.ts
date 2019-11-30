import { AdminSignedComponent } from './signed.component';
import { PartnerService } from '../../../partner.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FilesComponent } from 'src/app/common/files/files.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

export default {
    title: 'Admin / Signed'
};

const moduleMetadata = {
    declarations: [AdminSignedComponent, FilesComponent],
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

export const sansConventionEtDone = () => ({
    template: `<app-admin-signed [id]="id" [company]="company" [step]="step"></app-admin-signed>`,

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

export const sansConventionEtPending = () => ({
    template: `<app-admin-signed [id]="id" [company]="company" [step]="step"></app-admin-signed>`,

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

export const avecConventionEtDone = () => ({
    template: `<app-admin-signed [id]="id" [company]="company" [step]="step"></app-admin-signed>`,

    props: {
        id: '1',
        company: {
            status: {
                paid: 'done'
            },
            conventionSignedUrl: 'http://google.fr'
        },
        step: {
            key: 'paid'
        }
    },
    moduleMetadata
});

export const avecConventionEtPending = () => ({
    template: `<app-admin-signed [id]="id" [company]="company" [step]="step"></app-admin-signed>`,

    props: {
        id: '1',
        company: {
            status: {
                paid: 'pending'
            },
            conventionSignedUrl: 'http://google.fr'
        },
        step: {
            key: 'paid'
        }
    },
    moduleMetadata
});
