import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'tabs1-details', loadChildren: './tabs1-details/tabs1-details.module#Tabs1DetailsPageModule' },
  { path: 'tabs-details', loadChildren: './tabs-details/tabs-details.module#TabsDetailsPageModule' },
  { path: 'tabs2-details', loadChildren: './tabs2-details/tabs2-details.module#Tabs2DetailsPageModule' },
  { path: 'tabs3-details', loadChildren: './tabs3-details/tabs3-details.module#Tabs3DetailsPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
