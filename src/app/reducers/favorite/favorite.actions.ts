import { createAction, props } from '@ngrx/store';
import { IFavPhoto } from '../../types/main';

export const setFavorites = createAction(
  '[Favorite] Set Fav List',
  props<{ photos: IFavPhoto[] }>()
);
export const addFavPhoto = createAction(
  '[Favorite] Add Cat To Favs',
  props<{ photo: IFavPhoto }>()
);
export const deleteFavPhoto = createAction(
  '[Favorite] Delete Fav Cat',
  props<{ photo: IFavPhoto }>()
);
