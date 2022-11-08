import { createFeature, createReducer, on } from '@ngrx/store';
import { loadingOff, loadingOn, setBreeds } from './main.actions';
import { IMainState } from '../../types/main';

export const initialState: IMainState = {
  loading: false,
  breeds: [],
}

export const mainFeature = createFeature({
  name: 'main',
  reducer: createReducer(
    initialState,
    on(loadingOn, (state) => ({
      ...state,
      loading: true,
    })),
    on(loadingOff, (state) => ({
      ...state,
      loading: false,
    })),
    on(setBreeds, (state, { breeds }) => ({
      ...state,
      breeds,
    }))
  )
});

export const {
  name,
  reducer,
} = mainFeature;
