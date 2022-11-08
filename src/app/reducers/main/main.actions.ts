import { createAction, props } from '@ngrx/store';
import { IBreed } from '../../types/main';

export const loadingOn = createAction('[Main] Set Loading On');
export const loadingOff = createAction('[Main] Set Loading Off');
export const setBreeds = createAction(
  '[Main] Set Breeds',
  props<{ breeds: IBreed[] }>()
);
