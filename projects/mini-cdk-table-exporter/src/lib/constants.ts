import { ExportType } from './export-type';
import { Mime } from './mime';

export const MAT_TABLE_EXPORTER = 'mini-mat-table-exporter';
export const TYPE_ARRAY = 'array';
export const CHAR_SET_UTF = ';charset=utf-';
export const CHAR_SET_UTF_8 = CHAR_SET_UTF + '8';
export const CONTENT_TYPE_TEXT = ExportType.TXT + '/';
export const CONTENT_TYPE_APPLICATION = 'application/';
export const CONTENT_TYPE_EXCEL = CONTENT_TYPE_APPLICATION + 'octet-stream';
export const DOT = '.';
export const EXTENSION_XLS = DOT + ExportType.XLS;
export const EXTENSION_XLSX =  DOT + ExportType.XLSX;
export const EXTENSION_CSV =  DOT + ExportType.CSV;
export const EXTENSION_JSON =  DOT + ExportType.JSON;
export const EXTENSION_TEXT =  DOT + ExportType.TXT;
export const MIME_EXCEL_XLS = new Mime(EXTENSION_XLS, CONTENT_TYPE_EXCEL + CHAR_SET_UTF_8);
export const MIME_EXCEL_XLSX = new Mime(EXTENSION_XLSX, CONTENT_TYPE_EXCEL + CHAR_SET_UTF_8);
export const MIME_JSON = new Mime(EXTENSION_JSON, CONTENT_TYPE_TEXT + JSON + CHAR_SET_UTF_8);
export const MIME_TXT = new Mime(EXTENSION_TEXT, CONTENT_TYPE_TEXT + ExportType.TXT + CHAR_SET_UTF_8);
export const MIME_CSV = new Mime(EXTENSION_CSV, CONTENT_TYPE_TEXT + ExportType.CSV + CHAR_SET_UTF_8);
export const REF = '!ref';
export const XLS_REGEX = DOT + '*\.' + ExportType.XLS + '$';
export const RETURN = '\n';
export const TAB = '\t';
export const XLSX_COLS = '!cols';