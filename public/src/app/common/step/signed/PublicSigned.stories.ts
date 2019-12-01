import { PartnerService } from '../../partner.service';
import { SignedComponent } from './signed.component';
import { AddPipe } from 'src/app/common/add.pipe';
import { FilesComponent } from 'src/app/common/files/files.component';
import { MaterialModule } from 'src/app/material/material.module';

export default {
    title: 'Public / Signed'
};

const moduleMetadata = {
    declarations: [SignedComponent, AddPipe, FilesComponent],
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
export const stepPendingWithoutSignedConvention = () => ({
    template: `<app-signed [step]="step" [id]="id" [company]="company"></app-signed>`,

    props: {
        id: '1',
        company: {
            status: {
                sign: 'pending'
            }
        },
        step: {
            description: 'This is a description'
        }
    },
    moduleMetadata
});
export const stepDoneWithSignedConvention = () => ({
    template: `<app-signed [step]="step" [id]="id" [company]="company"></app-signed>`,

    props: {
        id: '1',
        company: {
            status: {
                sign: 'done'
            },
            conventionSignedUrl: 'http://google.fr'
        },
        step: {
            description: 'This is a description'
        }
    },
    moduleMetadata
});
