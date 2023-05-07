import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'main',
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule)},
  { path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)},
  { path: 'registration',
    loadChildren: () => import('./pages/registration/registration.module').then(m => m.RegistrationModule)},
  { path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule)},
  { path: 'not-found',
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)},
  { path:'', redirectTo:'/main', pathMatch:'full'},
  { path:'**', redirectTo:'/not-found',}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
