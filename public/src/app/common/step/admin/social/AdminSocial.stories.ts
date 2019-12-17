import { AdminSocialComponent } from './social.component';
import { PartnerService } from '../../../partner.service';
import { FilesComponent } from 'src/app/common/files/files.component';
import { MaterialModule } from 'src/app/material/material.module';
import { UploadComponent } from 'src/app/common/upload/upload.component';

export default {
    title: 'Admin / Social'
};

const moduleMetadata = {
    declarations: [AdminSocialComponent, FilesComponent, UploadComponent],
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

export const avecLogo = () => ({
    template: `<app-admin-social [id]="id" [company]="company" [step]="step"></app-admin-social>`,

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

export const sansLogo = () => ({
    template: `<app-admin-social [id]="id" [company]="company" [step]="step"></app-admin-social>`,

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
