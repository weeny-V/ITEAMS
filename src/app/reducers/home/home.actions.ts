import { createAction, props } from '@ngrx/store';
import { IPhoto } from '../../types/main';

export const setPhotos = createAction(
  '[Home Photos] Set Photos',
  props<{ photos: IPhoto[] }>()
);
export const loadPhotos = createAction(
  '[Home] Load Photos',
  props<{ photos: IPhoto[] }>()
);
export const likePhoto = createAction(
  '[Home] Like Photo',
  props<{ id: string }>()
);
