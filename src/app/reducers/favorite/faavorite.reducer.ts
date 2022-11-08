import { createFeature, createReducer, on } from '@ngrx/store';
import { addFavPhoto, deleteFavPhoto, setFavorites } from './favorite.actions';
import { IFavoriteState } from '../../types/main';

export const initialState: IFavoriteState = {
  photos: [],
}

export const favoriteFeature =  createFeature({
  name: 'favorite',
  reducer: createReducer(
    initialState,
    on(setFavorites, (state, { photos }) => ({
      ...state,
      photos
    })),
    on(addFavPhoto, (state, { photo }) => ({
      ...state,
      photos: [...state.photos, photo],
    })),
    on(deleteFavPhoto, (state, { photo }) => {
      const index = state.photos.indexOf(photo);
      const newPhotos = [...state.photos];

      newPhotos.splice(index, 1);

      return { ...state, photos: newPhotos }
    })
  )
})

export const {
  name,
  reducer,
} = favoriteFeature
