import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkActive, RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './layout/layout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FeaturesModule } from '../features/features.module';
import { ErrorComponent } from './error/error.component';


@NgModule({
  declarations: [
    LayoutComponent,
    ErrorComponent
  ],
  exports: [],
    imports: [
        CommonModule,
        MatToolbarModule,
        FeaturesModule,
        RouterOutlet,
        RouterLinkWithHref,
        RouterLinkActive,
        SharedModule,
    ]
})
export class CoreModule {
}
