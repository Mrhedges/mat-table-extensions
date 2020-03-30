import { Options } from '../../options';
import * as XLSX from 'xlsx/dist/xlsx.mini.min';
import { WorksheetExporter } from './worksheet-exporter';
import { Mime } from '../../mime';
export declare class CsvExporterService extends WorksheetExporter<Options> {
    constructor();
    workSheetToContent(worksheet: XLSX.WorkSheet, options?: Options): any;
    getMimeType(): Mime;
}
