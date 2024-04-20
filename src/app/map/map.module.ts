import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TableComponent } from './components/table/table.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SetCellValueComponent } from './components/set-cell-value/set-cell-value.component';
import { GetCellValueComponent } from './components/get-cell-value/get-cell-value.component';
import { MapLoaderComponent } from './components/map-loader/map-loader.component';

@NgModule({
  declarations: [
    TableComponent,
    MainPageComponent,
    SetCellValueComponent,
    GetCellValueComponent,
    MapLoaderComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [MainPageComponent],
})
export class MapModule {}
