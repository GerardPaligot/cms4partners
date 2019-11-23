import { CommunicatedComponent } from 'src/app/common/step/communicated/communicated.component';
import { FilesComponent } from 'src/app/common/files/files.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

export default {
    title: 'Public / Communicated'
};

const moduleMetadata = {
    declarations: [CommunicatedComponent, FilesComponent],
    imports: [MatIconModule, MatListModule]
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
