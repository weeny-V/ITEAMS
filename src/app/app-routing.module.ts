import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { LayoutComponent } from './core/layout/layout.component';
import { FavoriteComponent } from './features/favorite/favorite.component';
import { ErrorComponent } from './core/error/error.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', component: HomeComponent },
      { path: 'favorite', component: FavoriteComponent }
    ] },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
