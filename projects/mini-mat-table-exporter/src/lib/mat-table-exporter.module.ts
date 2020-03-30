import { CdkTableExporterModule } from 'mini-cdk-table-exporter';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { MatTableExporterDirective } from './mini-mat-table-exporter.directive';


@NgModule({
  declarations: [MatTableExporterDirective],
  imports: [
    MatTableModule,
    CdkTableExporterModule
  ],
  exports: [MatTableExporterDirective]
})
export class MatTableExporterModule { }
