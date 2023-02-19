import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'exercices-list/:bodyPart',
    loadChildren: () => import('./pages/exercices-list/exercices-list.module').then( m => m.ExercicesListPageModule)
  },
  {
    path: 'exercice-details',
    loadChildren: () => import('./pages/exercice-details/exercice-details.module').then( m => m.ExerciceDetailsPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
