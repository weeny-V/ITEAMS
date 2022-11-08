import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IBreed } from '../../types/main';
import { selectBreeds } from '../../reducers/main/main.selectors';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss']
})
export class FilterPanelComponent implements OnInit {

  @Output() changeBreed = new EventEmitter<string>();
  @Output() changeLimit = new EventEmitter<string>();

  form: FormGroup = new FormGroup({
    breed: new FormControl<string>(''),
    limit: new FormControl<string>('10'),
  });
  pages: string[] = ['5','10','15','20','25'];
  breeds$: Observable<IBreed[]> = this.store.select(selectBreeds);

  constructor(private store: Store) { }

  ngOnInit(): void { }

  onChangeLimit(): void {
    this.changeLimit.emit(this.form.value.limit);
  }

  onChangeBreed(): void {
    this.changeBreed.emit(this.form.value.breed);
  }
}
