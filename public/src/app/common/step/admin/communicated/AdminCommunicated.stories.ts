import { AdminCommunicatedComponent } from './communicated.component';
import { PartnerService } from '../../../partner.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AdminDefaultComponent } from '../default/default.component';
import { FilesComponent } from 'src/app/common/files/files.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

export default {
    title: 'Admin / Communicated'
};

const moduleMetadata = {
    declarations: [AdminCommunicatedComponent, AdminDefaultComponent, FilesComponent],
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
