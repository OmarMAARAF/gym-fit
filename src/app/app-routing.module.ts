import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { routesGuard } from "./services/routes.service"

const routes: Routes = [
  {
    path: 'onBoarding',
    loadChildren: () => import('./onboarding/onboarding.module').then(m => m.OnboardingPageModule),
/*     canActivate: [routesGuard] // Apply guard to onBoarding path
 */  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
/*     canActivate: [routesGuard] // Apply guard to the root path
 */  },
  {
    path: 'exercices-list/:bodyPart',
    loadChildren: () => import('./pages/exercices-list/exercices-list.module').then(m => m.ExercicesListPageModule),
/*     canActivate: [routesGuard] // Apply guard to exercices-list path
 */  },
  {
    path: 'exercice-details',
    loadChildren: () => import('./pages/exercice-details/exercice-details.module').then(m => m.ExerciceDetailsPageModule),
/*     canActivate: [routesGuard] // Apply guard to exercice-details path
 */  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then(m => m.Tab4PageModule),
/*     canActivate: [routesGuard] // Apply guard to tab4 path
 */  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule),
/*     canActivate: [routesGuard] // Apply guard to login path
 */  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule),
/*     canActivate: [routesGuard] // Apply guard to register path
 */  },
  {
    path: 'moreinformations',
    loadChildren: () => import('./pages/moreinformations/moreinformations.module').then(m => m.MoreinformationsPageModule),
/*     canActivate: [routesGuard] // Apply guard to moreinformations path
 */  },
  // Other paths...
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  providers: [routesGuard] // Register the guard
})
export class AppRoutingModule {}
