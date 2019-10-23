import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AngularFireAuthGuard, AngularFireAuthGuardModule, redirectUnauthorizedTo, canActivate } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);

const routes: Routes = [
    { path: '', loadChildren: () => import('./partner/partner.module').then(module => module.PartnerModule) },
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(module => module.AdminModule),
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes), AngularFireAuthGuardModule],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
    exports: [RouterModule]
})
export class AppRoutingModule {}
