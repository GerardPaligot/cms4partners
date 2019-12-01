import { AdminCommunicatedComponent } from './communicated.component';
import { PartnerService } from '../../../partner.service';
import { AdminDefaultComponent } from '../default/default.component';
import { FilesComponent } from 'src/app/common/files/files.component';
import { MaterialModule } from 'src/app/material/material.module';

export default {
    title: 'Admin / Communicated'
};

const moduleMetadata = {
    declarations: [AdminCommunicatedComponent, AdminDefaultComponent, FilesComponent],
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

export const sansFlyer = () => ({
    template: `<app-admin-communicated [id]="id" [company]="company"></app-admin-communicated>`,

    props: {
        id: '1',
        company: {}
    },
    moduleMetadata
});

export const avecFlyer = () => ({
    template: `<app-admin-communicated [id]="id" [company]="company"></app-admin-communicated>`,

    props: {
        id: '1',
        company: {
            flyerUrl: 'http://google.fr'
        }
    },
    moduleMetadata
});
