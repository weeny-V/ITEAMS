import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FavoriteComponent } from './favorite/favorite.component';

@NgModule({
  declarations: [
    FavoriteComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
  ],
  exports: [
    FavoriteComponent,
    HomeComponent,
  ]
})
export class FeaturesModule { }
