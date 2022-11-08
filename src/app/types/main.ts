export interface IPhoto {
  url: string,
  id: string,
  favorite: boolean,
}

export interface IFavPhoto {
  id: number,
  image: {
    id: string,
    url: string,
  }
}

export interface ICatInfo {
  breeds: [{
    name: string,
    description: string,
    temperament: string,
    weight: {
      imperial: string,
      metric: string,
    },
    wikipedia_url: string,
  }],
}

export interface IBreed {
  id: string,
  name: string,
}

export interface IHomeState {
  photos: IPhoto[],
}

export interface IFavoriteState {
  photos: IFavPhoto[],
}

export interface IMainState {
  loading: boolean,
  breeds: IBreed[],
}

export interface ISuccessRequest {
  message: string,
}

export interface IPostPhotoRequest extends ISuccessRequest {
  id: number,
}
