import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IFavoriteState } from '../../types/main';

export const selectFavoriteFeature = createFeatureSelector<IFavoriteState>('favorite');

export const selectFavPhotos = createSelector(
  selectFavoriteFeature,
  (state) => state.photos
)
