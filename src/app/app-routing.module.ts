import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"" ,loadChildren:()=>import('./factor/factor.module').then(m=>m.FactorModule) },
  {path:"security" ,loadChildren:()=>import('./factor/modules/security/security.module').then(m=>m.SecurityModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
