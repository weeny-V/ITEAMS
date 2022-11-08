import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { homeFeature } from './home/home.reducer';
import { favoriteFeature } from './favorite/faavorite.reducer';

export interface State {
}

export const reducers: ActionReducerMap<State> = {
  home: homeFeature,
  favorite: favoriteFeature,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
