import { FilledComponent } from './filled.component';
import { PartnerService } from '../../partner.service';

export default {
    title: 'Public / Filled'
};

export const simple = () => ({
    template: `<app-public-filled [id]="id" [company]="company"></app-public-filled>`,

    props: {
        id: '1',
        company: {
            sponsoring: 'bronze'
        }
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
