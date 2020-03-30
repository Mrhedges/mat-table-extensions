import { __decorate, __extends, __metadata } from "tslib";
import { MIME_CSV } from './../../constants';
import { Injectable } from '@angular/core';
// import * as XLSX from 'xlsx';
import * as XLSX from 'xlsx/dist/xlsx.mini.min';
import { WorksheetExporter } from './worksheet-exporter';
import * as i0 from "@angular/core";
var CsvExporterService = /** @class */ (function (_super) {
    __extends(CsvExporterService, _super);
    function CsvExporterService() {
        return _super.call(this) || this;
    }
    CsvExporterService.prototype.workSheetToContent = function (worksheet, options) {
        return XLSX.utils.sheet_to_csv(worksheet);
    };
    CsvExporterService.prototype.getMimeType = function () {
        return MIME_CSV;
    };
    CsvExporterService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CsvExporterService_Factory() { return new CsvExporterService(); }, token: CsvExporterService, providedIn: "root" });
    CsvExporterService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CsvExporterService);
    return CsvExporterService;
}(WorksheetExporter));
export { CsvExporterService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3N2LWV4cG9ydGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9taW5pLWNkay10YWJsZS1leHBvcnRlci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9leHBvcnRlcnMvY3N2LWV4cG9ydGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUU3QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLGdDQUFnQztBQUNoQyxPQUFPLEtBQUssSUFBSSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQU16RDtJQUF3QyxzQ0FBMEI7SUFFaEU7ZUFDRSxpQkFBTztJQUNULENBQUM7SUFFTSwrQ0FBa0IsR0FBekIsVUFBMEIsU0FBeUIsRUFBRSxPQUFpQjtRQUNwRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFTSx3Q0FBVyxHQUFsQjtRQUNFLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7O0lBWlUsa0JBQWtCO1FBSDlCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7O09BQ1csa0JBQWtCLENBYTlCOzZCQXhCRDtDQXdCQyxBQWJELENBQXdDLGlCQUFpQixHQWF4RDtTQWJZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1JTUVfQ1NWIH0gZnJvbSAnLi8uLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgT3B0aW9ucyB9IGZyb20gJy4uLy4uL29wdGlvbnMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gaW1wb3J0ICogYXMgWExTWCBmcm9tICd4bHN4JztcbmltcG9ydCAqIGFzIFhMU1ggZnJvbSAneGxzeC9kaXN0L3hsc3gubWluaS5taW4nO1xuaW1wb3J0IHsgV29ya3NoZWV0RXhwb3J0ZXIgfSBmcm9tICcuL3dvcmtzaGVldC1leHBvcnRlcic7XG5pbXBvcnQgeyBNaW1lIH0gZnJvbSAnLi4vLi4vbWltZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENzdkV4cG9ydGVyU2VydmljZSBleHRlbmRzIFdvcmtzaGVldEV4cG9ydGVyPE9wdGlvbnM+IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIHdvcmtTaGVldFRvQ29udGVudCh3b3Jrc2hlZXQ6IFhMU1guV29ya1NoZWV0LCBvcHRpb25zPzogT3B0aW9ucyk6IGFueSB7XG4gICAgcmV0dXJuIFhMU1gudXRpbHMuc2hlZXRfdG9fY3N2KHdvcmtzaGVldCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0TWltZVR5cGUoKTogTWltZSB7XG4gICAgcmV0dXJuIE1JTUVfQ1NWO1xuICB9XG59XG4iXX0=