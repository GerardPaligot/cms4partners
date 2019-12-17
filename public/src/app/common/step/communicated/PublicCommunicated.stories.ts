import { CommunicatedComponent } from './communicated.component';
import { FilesComponent } from 'src/app/common/files/files.component';
import { MaterialModule } from 'src/app/material/material.module';

export default {
    title: 'Public / Communicated'
};

const moduleMetadata = {
    declarations: [CommunicatedComponent, FilesComponent],
    imports: [MaterialModule]
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
    moduleMetadata
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
    moduleMetadata
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
    moduleMetadata
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
    moduleMetadata
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
    moduleMetadata
});
