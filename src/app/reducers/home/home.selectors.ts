import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IHomeState } from '../../types/main';

export const selectHomeFeature = createFeatureSelector<IHomeState>('home');

export const selectHomePhotos = createSelector(
  selectHomeFeature,
  (state) => state.photos
);
