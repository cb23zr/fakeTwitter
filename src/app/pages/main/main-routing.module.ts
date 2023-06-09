import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main.component";

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'success', loadChildren: () => import('./success/success.module').then(m => m.SuccessModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
