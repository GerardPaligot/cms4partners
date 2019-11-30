import { AdminDefaultComponent } from './default.component';
import { PartnerService } from '../../../partner.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FilesComponent } from 'src/app/common/files/files.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

export default {
    title: 'Admin / Default'
};

const moduleMetadata = {
    declarations: [AdminDefaultComponent, FilesComponent],
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
