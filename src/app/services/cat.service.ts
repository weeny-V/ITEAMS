import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBreed, ICatInfo, IFavPhoto, IPhoto, IPostPhotoRequest, ISuccessRequest } from '../types/main';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  private url: string = 'https://api.thecatapi.com/v1';

  constructor(private _http: HttpClient) {
  }

  getCats(page: number = 0, limit: string = '10', breed: string = ''): Observable<IPhoto[]> {
    return this._http
      .get<IPhoto[]>(`${this.url}/images/search?has_breeds=1&page=${page}&limit=${limit}${breed && '&breed_ids=' + breed}`);
  }

  getCatById(id: string): Observable<ICatInfo> {
    return this._http.get<ICatInfo>(`${this.url}/images/${id}`);
  }

  getBreeds(): Observable<IBreed[]> {
    return this._http.get<IBreed[]>(`${this.url}/breeds`);
  }

  likeCat(id: string): Observable<IPostPhotoRequest> {
    return this._http.post<IPostPhotoRequest>(`${this.url}/favourites`, {
      image_id: id,
    });
  }

  getFavoriteCats(): Observable<IFavPhoto[]> {
    return this._http.get<IFavPhoto[]>(`${this.url}/favourites`);
  }

  deleteFavoriteCat(id: number): Observable<ISuccessRequest> {
    return this._http.delete<ISuccessRequest>(`${this.url}/favourites/${id}`);
  }
}
