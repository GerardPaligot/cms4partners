import { FilledComponent } from '../app/common/step/admin/filled/filled.component';
import { PartnerService } from '../app/common/partner.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

export default {
    title: 'Admin / Filled'
};

const moduleMetadata = {
    declarations: [FilledComponent],
    imports: [MatFormFieldModule, MatButtonModule],
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
