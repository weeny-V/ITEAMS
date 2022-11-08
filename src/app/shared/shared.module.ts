import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { LoaderComponent } from './loader/loader.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { FilterPanelComponent } from './filter-panel/filter-panel.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CatModalInfoComponent } from './cat-modal-info/cat-modal-info.component';

@NgModule({
  declarations: [
    LoaderComponent,
    FilterPanelComponent,
    CatModalInfoComponent,
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
    exports: [
        LoaderComponent,
        FilterPanelComponent,
    ]
})
export class SharedModule { }
