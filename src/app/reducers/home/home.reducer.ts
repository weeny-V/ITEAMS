import { createFeature, createReducer, on } from '@ngrx/store';
import { likePhoto, loadPhotos, setPhotos } from './home.actions';
import { IHomeState } from '../../types/main';

export const initialState: IHomeState = {
  photos: [],
}

export const homeFeature = createFeature({
  name: 'home',
  reducer: createReducer(
    initialState,
    on(setPhotos, (state, { photos }) => ({
      ...state,
      photos
    })),
    on(loadPhotos, (state, { photos }) => ({
      ...state,
      photos: [...state.photos, ...photos]
    })),
    on(likePhoto, (state, { id } ) => ({
        ...state,
        photos: state.photos.map(photo => {
          if(photo.id === id) {
            photo.favorite = !photo.favorite;
          }

          return photo;
        }),
      }))
  ),
});

export const {
  name,
  reducer,
} = homeFeature;
