import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IMainState } from '../../types/main';

export const selectMainFeature = createFeatureSelector<IMainState>('main');

export const selectLoading = createSelector(
  selectMainFeature,
  (state) => state.loading
);
export const selectBreeds = createSelector(
  selectMainFeature,
  (state) => state.breeds
);
