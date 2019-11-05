import { FilledComponent } from '../app/common/step/admin/filled/filled.component';
import { PartnerService } from '../app/common/partner.service';
import { moduleMetadata } from '@storybook/angular';

export default {
    title: 'Admin / Filled'
};

export const simple = () => ({
    template: `<app-filled [id]="id" [company]="company"></app-filled>`,

    props: {
        id: '1',
        company: {}
    },
    moduleMetadata: {
        declarations: [FilledComponent],
        providers: [
            {
                provide: PartnerService,
                useValue: {
                    update() {}
                }
            }
        ]
    }
});
