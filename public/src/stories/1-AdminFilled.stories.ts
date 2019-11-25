import { AdminFilledComponent } from '../app/common/step/admin/filled/filled.component';
import { PartnerService } from '../app/common/partner.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

export default {
    title: 'Admin / Filled'
};

const moduleMetadata = {
    declarations: [AdminFilledComponent],
    imports: [MatFormFieldModule, MatButtonModule, MatInputModule],
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
