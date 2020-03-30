import { __decorate, __metadata } from "tslib";
import { MIME_CSV } from './../../constants';
import { Injectable } from '@angular/core';
// import * as XLSX from 'xlsx';
import * as XLSX from 'xlsx/dist/xlsx.mini.min';
import { WorksheetExporter } from './worksheet-exporter';
import * as i0 from "@angular/core";
let CsvExporterService = class CsvExporterService extends WorksheetExporter {
    constructor() {
        super();
    }
    workSheetToContent(worksheet, options) {
        return XLSX.utils.sheet_to_csv(worksheet);
    }
    getMimeType() {
        return MIME_CSV;
    }
};
CsvExporterService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CsvExporterService_Factory() { return new CsvExporterService(); }, token: CsvExporterService, providedIn: "root" });
CsvExporterService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], CsvExporterService);
export { CsvExporterService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3N2LWV4cG9ydGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9taW5pLWNkay10YWJsZS1leHBvcnRlci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9leHBvcnRlcnMvY3N2LWV4cG9ydGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUU3QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLGdDQUFnQztBQUNoQyxPQUFPLEtBQUssSUFBSSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQU16RCxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFtQixTQUFRLGlCQUEwQjtJQUVoRTtRQUNFLEtBQUssRUFBRSxDQUFDO0lBQ1YsQ0FBQztJQUVNLGtCQUFrQixDQUFDLFNBQXlCLEVBQUUsT0FBaUI7UUFDcEUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRU0sV0FBVztRQUNoQixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0NBQ0YsQ0FBQTs7QUFiWSxrQkFBa0I7SUFIOUIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQzs7R0FDVyxrQkFBa0IsQ0FhOUI7U0FiWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNSU1FX0NTViB9IGZyb20gJy4vLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IE9wdGlvbnMgfSBmcm9tICcuLi8uLi9vcHRpb25zJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIGltcG9ydCAqIGFzIFhMU1ggZnJvbSAneGxzeCc7XG5pbXBvcnQgKiBhcyBYTFNYIGZyb20gJ3hsc3gvZGlzdC94bHN4Lm1pbmkubWluJztcbmltcG9ydCB7IFdvcmtzaGVldEV4cG9ydGVyIH0gZnJvbSAnLi93b3Jrc2hlZXQtZXhwb3J0ZXInO1xuaW1wb3J0IHsgTWltZSB9IGZyb20gJy4uLy4uL21pbWUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDc3ZFeHBvcnRlclNlcnZpY2UgZXh0ZW5kcyBXb3Jrc2hlZXRFeHBvcnRlcjxPcHRpb25zPiB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyB3b3JrU2hlZXRUb0NvbnRlbnQod29ya3NoZWV0OiBYTFNYLldvcmtTaGVldCwgb3B0aW9ucz86IE9wdGlvbnMpOiBhbnkge1xuICAgIHJldHVybiBYTFNYLnV0aWxzLnNoZWV0X3RvX2Nzdih3b3Jrc2hlZXQpO1xuICB9XG5cbiAgcHVibGljIGdldE1pbWVUeXBlKCk6IE1pbWUge1xuICAgIHJldHVybiBNSU1FX0NTVjtcbiAgfVxufVxuIl19