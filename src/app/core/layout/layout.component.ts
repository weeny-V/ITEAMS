import { Component, OnDestroy, OnInit } from '@angular/core';
import { delay, Observable, Subscription } from 'rxjs';
import { CatService } from '../../services/cat.service';
import { Store } from '@ngrx/store';
import { setPhotos } from '../../reducers/home/home.actions';
import { setFavorites } from '../../reducers/favorite/favorite.actions';
import { setBreeds } from '../../reducers/main/main.actions';
import { selectLoading } from '../../reducers/main/main.selectors';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit, OnDestroy {

  subs: Subscription = new Subscription();
  loading$: Observable<boolean> = this.store.select(selectLoading).pipe(delay(0));

  constructor(
    private catAPI: CatService,
    private store: Store,
    private snackbar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.subs.add(
      this.catAPI.getFavoriteCats()
      .subscribe({
        next: (photos) => {
          this.store.dispatch(setFavorites({ photos }));
        }
      }));
    this.subs.add(
      this.catAPI.getCats()
      .subscribe({
        next: (res) => {
          const photos = res.map(photo => {
            photo.favorite = false;

            return photo;
          })
          this.store.dispatch(setPhotos({ photos }));
        }
      }));
    this.subs.add(
      this.catAPI.getBreeds()
      .subscribe({
        next: (breeds) => {
          this.store.dispatch(setBreeds({ breeds }));
        },
        error: (err) => {
          this.snackbar.open(err.error.message, '', {
            duration: 4000,
          });
        }
      }));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
