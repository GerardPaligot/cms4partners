import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import {
  AngularFireAuthGuard,
  AngularFireAuthGuardModule,
  redirectUnauthorizedTo,
  canActivate
} from "@angular/fire/auth-guard";

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo([""]);

const routes: Routes = [
  { path: "", loadChildren: "src/app/partner/partner.module#PartnerModule" },
  {
    path: "admin",
    loadChildren: "src/app/admin/admin.module#AdminModule",
    ...canActivate(redirectUnauthorizedToLogin)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AngularFireAuthGuardModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  exports: [RouterModule]
})
export class AppRoutingModule {}
