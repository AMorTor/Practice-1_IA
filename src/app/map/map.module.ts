import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

@NgModule({
  declarations: [TableComponent, MainPageComponent],
  imports: [CommonModule],
  exports: [MainPageComponent],
})
export class MapModule {}
