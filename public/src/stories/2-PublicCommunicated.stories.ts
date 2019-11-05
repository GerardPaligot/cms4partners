import { FilledComponent } from '../app/common/step/admin/filled/filled.component';
import { PartnerService } from '../app/common/partner.service';
import { moduleMetadata } from '@storybook/angular';
import { CommunicatedComponent } from 'src/app/common/step/communicated/communicated.component';

export default {
    title: 'Public / Communicated'
};

export const pendingWithoutUrlAndDate = () => ({
    template: `<app-communicated [company]="company"></app-communicated>`,

    props: {
        company: {
            status: {
                communicated: 'pending'
            }
        }
    },
    moduleMetadata: {
        declarations: [CommunicatedComponent]
    }
});

export const pendingWithUrlAndDate = () => ({
    template: `<app-communicated [company]="company"></app-communicated>`,

    props: {
        company: {
            status: {
                communicated: 'pending'
            },
            publicationDate: new Date(),
            flyerUrl: 'http://google.com'
        }
    },
    moduleMetadata: {
        declarations: [CommunicatedComponent]
    }
});

export const pendingWithUrlAndWithoutDate = () => ({
    template: `<app-communicated [company]="company"></app-communicated>`,

    props: {
        company: {
            status: {
                communicated: 'pending'
            },
            flyerUrl: 'http://google.com'
        }
    },
    moduleMetadata: {
        declarations: [CommunicatedComponent]
    }
});

export const pendingWithDateAndWithoutUrl = () => ({
    template: `<app-communicated [company]="company"></app-communicated>`,

    props: {
        company: {
            status: {
                communicated: 'pending'
            },
            publicationDate: new Date()
        }
    },
    moduleMetadata: {
        declarations: [CommunicatedComponent]
    }
});

export const done = () => ({
    template: `<app-communicated [company]="company"></app-communicated>`,

    props: {
        company: {
            status: {
                communicated: 'done'
            },
            publicationDate: new Date(),
            flyerUrl: 'http://google.com'
        }
    },
    moduleMetadata: {
        declarations: [CommunicatedComponent]
    }
});
