import { AdminFilledComponent } from './filled.component';
import { PartnerService } from '../../../partner.service';
import { MaterialModule } from 'src/app/material/material.module';

export default {
    title: 'Admin / Filled'
};

const moduleMetadata = {
    declarations: [AdminFilledComponent],
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

export const simple = () => ({
    template: `<app-admin-filled [id]="id" [company]="company"></app-admin-filled>`,

    props: {
        id: '1',
        company: {}
    },
    moduleMetadata
});
