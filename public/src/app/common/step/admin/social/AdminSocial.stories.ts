import { AdminSocialComponent } from './social.component';
import { PartnerService } from '../../../partner.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FilesComponent } from 'src/app/common/files/files.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

export default {
    title: 'Admin / Social'
};

const moduleMetadata = {
    declarations: [AdminSocialComponent, FilesComponent],
    imports: [MatFormFieldModule, MatButtonModule, MatInputModule, MatExpansionModule, MatIconModule, MatListModule],
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
