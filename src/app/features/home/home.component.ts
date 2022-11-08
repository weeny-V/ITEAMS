import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IPhoto } from '../../types/main';
import { CatService } from '../../services/cat.service';
import { selectHomePhotos } from '../../reducers/home/home.selectors';
import { addFavPhoto } from '../../reducers/favorite/favorite.actions';
import { likePhoto, loadPhotos, setPhotos } from '../../reducers/home/home.actions';
import { CatModalInfoComponent } from '../../shared/cat-modal-info/cat-modal-info.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {

  subs: Subscription = new Subscription();
  photos$: Observable<IPhoto[]> = this.store.select(selectHomePhotos);
  page: number = 0;
  limit: string = '10';
  breed: string = '';

  constructor(
    private catAPI: CatService,
    private store: Store,
    private dialog: MatDialog,
    private snackbar: MatSnackBar,
  ) { }

  ngOnInit(): void { }

  loadMore(): void {
    this.subs.add(
      this.catAPI.getCats(this.page++, this.limit, this.breed)
      .subscribe({
        next: (photos) => {
          this.store.dispatch(loadPhotos({ photos }));
        },
        error: (err) => {
          this.snackbar.open(err.error.message, '', {
            duration: 4000,
          });
        }
      }))
  }

  changeLimit(limit: string): void {
    this.limit = limit;
  }

  changeBreed(breed: string): void {
    this.breed = breed;
    this.page = 0;
    this.subs.add(
      this.catAPI.getCats(this.page, this.limit, this.breed)
      .subscribe({
        next: (photos) => {
          this.store.dispatch(setPhotos({ photos }));
        },
        error: (err) => {
          this.snackbar.open(err.error.message, '', {
            duration: 4000,
          })
        }
      }));
  }

  onLikePhoto(event: MouseEvent, photo: IPhoto): void {
    event.stopPropagation();
    this.store.dispatch(likePhoto({ id: photo.id }));
    this.subs.add(this.catAPI.likeCat(photo.id)
      .subscribe({
        next: (res) => {
          this.snackbar.open('You successfully added cat to favorite', '', {
            duration: 4000,
          })
          this.store.dispatch(addFavPhoto({
            photo: {
              id: res.id,
              image: {
                url: photo.url,
                id: photo.id,
              }
            }
          }))
        },
        error: (err) => {
          this.snackbar.open(err.error.message, '', {
            duration: 4000,
          });
        }
      }));
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
