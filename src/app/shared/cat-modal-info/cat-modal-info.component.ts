import { delay, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICatInfo } from '../../types/main';
import { CatService } from '../../services/cat.service';
import { selectLoading } from '../../reducers/main/main.selectors';

@Component({
  selector: 'app-cat-modal-info',
  templateUrl: './cat-modal-info.component.html',
  styleUrls: ['./cat-modal-info.component.scss']
})
export class CatModalInfoComponent implements OnInit {

  loading$: Observable<boolean> = this.store.select(selectLoading).pipe(delay(0));
  info$!: Observable<ICatInfo>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public id: string,
    private catAPI: CatService,
    private store: Store,
    ) { }

  ngOnInit(): void {
    this.info$ = this.catAPI.getCatById(this.id);
  }

}
