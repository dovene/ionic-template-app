import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: '', redirectTo: 'login', pathMatch: 'full' }, 
  //tab module must come last and its path must be null otherwise it does not work 
  // Because 1 : order matters in path resolution
  // 2 : we want to preload tab module but not allowing its page to be accessible 
  // through path access
  { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
