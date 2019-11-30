import { PartnerService } from '../../partner.service';
import { PaidComponent } from './paid.component';
import { AddPipe } from 'src/app/common/add.pipe';
import { FilesComponent } from 'src/app/common/files/files.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

export default {
    title: 'Public / Paid'
};

const moduleMetadata = {
    declarations: [PaidComponent, AddPipe, FilesComponent],
    imports: [MatIconModule, MatListModule],
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
    template: `<app-paid [step]="step" [id]="id" [company]="company"></app-paid>`,

    props: {
        id: '1',
        company: {
            status: {
                paid: 'pending'
            }
        },
        step: {
            description: 'This is a description'
        }
    },
    moduleMetadata
});
export const stepDoneAvecFacture = () => ({
    template: `<app-paid [step]="step" [id]="id" [company]="company"></app-paid>`,

    props: {
        id: '1',
        company: {
            status: {
                paid: 'done'
            },
            invoiceUrl: 'http://google.fr'
        },
        step: {
            description: 'This is a description'
        }
    },
    moduleMetadata
});
