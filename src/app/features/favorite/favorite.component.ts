import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IFavPhoto } from '../../types/main';
import { CatService } from '../../services/cat.service';
import { deleteFavPhoto } from '../../reducers/favorite/favorite.actions';
import { selectFavPhotos } from '../../reducers/favorite/favorite.selectors';
import { CatModalInfoComponent } from '../../shared/cat-modal-info/cat-modal-info.component';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit, OnDestroy {

  subs: Subscription = new Subscription();
  photos$: Observable<IFavPhoto[]> = this.store.select(selectFavPhotos);

  constructor(
    private store: Store,
    private catAPI: CatService,
    private dialog: MatDialog,
    private snackbar: MatSnackBar,
    ) { }

  ngOnInit(): void {}

  deleteFavPhoto(event: MouseEvent, photo: IFavPhoto): void {
    event.stopPropagation();
    this.subs.add(
      this.catAPI.deleteFavoriteCat(photo.id)
        .subscribe({
          next: () => {
            this.store.dispatch(deleteFavPhoto({ photo }));
            this.snackbar.open('You successfully deleted picture from favorites', '', {
              duration: 4000,
            });
          },
          error: (err) => {
            this.snackbar.open(err.error.message, '', {
              duration: 4000,
            });
          }
        })
    )
  }

  openModal(id: string): void {
    this.dialog.open(CatModalInfoComponent, {
      width: '600px',
      data: id
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
